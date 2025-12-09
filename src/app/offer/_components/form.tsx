"use client";

import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, Info } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { StyledPhoneInput } from "@/components/ui/phone-input";
import {
  categories,
  defaultForm,
  plans,
  servicesOptions,
  timelineOptions,
} from "@/lib/data";
import { usePortfolio } from "@/context/parent";

const stepLabels = ["Contact", "Business Details", "Requirements", "Review"];

export default function LeadForm() {
  const { form, setForm } = usePortfolio();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [thankYou, setThankYou] = useState(false);
  const [country, setCountry] = useState("IN");

  // Facebook pixels tracking
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        "fbq in client:",
        (window as unknown as { fbq?: unknown }).fbq
      );
    }
  }, []);

  // Restore saved progress
  useEffect(() => {
    const saved = localStorage.getItem("leadForm");
    const alreadySubmitted = localStorage.getItem("leadSubmitted");

    if (alreadySubmitted === "yes") {
      // defer setThankYou to the next tick to avoid cascading renders
      Promise.resolve().then(() => setThankYou(true));
      return;
    }

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Defer setForm to the next tick to avoid cascading renders
        Promise.resolve().then(() => setForm?.(parsed));
        return;
      } catch {}
    }
    setCountry("IN");
  }, [setForm]);

  // Save on change
  useEffect(() => {
    localStorage.setItem("leadForm", JSON.stringify(form));
  }, [form]);

  const isPhoneValid = (phone: string | undefined) => {
    if (!phone) return false; // empty is invalid
    const digits = phone.replace(/\D/g, ""); // only numbers
    return digits.length > 10 && digits.length === 12;
  };

  const isStepValid = () => {
    if (step === 0) {
      const nameValid = form?.name?.trim().length >= 3;
      const phoneValid = isPhoneValid(form?.phone);
      const emailValid = /^\w+([._-]?\w+)*@\w+([.-]?\w+)*\.\w{2,}$/.test(
        form?.email.trim()
      );

      return nameValid && phoneValid && emailValid;
    }
    if (step === 1)
      return (
        form?.title.trim() &&
        form?.categoryName.trim() &&
        form?.city.trim() &&
        form?.state.trim() &&
        form?.street.trim()
      );
    if (step === 2) return form?.serviceSelected.trim();
    return true;
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.ecodrix.com/api/add-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        // 🔵 FB: Lead event on successful form submit
        if (
          typeof window !== "undefined" &&
          (window as unknown as { fbq?: unknown }).fbq
        ) {
          (
            window as Window &
              typeof globalThis & {
                fbq?: (event: string, ...args: unknown[]) => void;
              }
          ).fbq("track", "Lead", {
            name: form.name,
            service: form.serviceSelected,
            city: form.city,
          });
        }

        localStorage.setItem("leadSubmitted", "yes");
        localStorage.removeItem("leadForm");
        setThankYou(true);
        toast({
          variant: "success",
          title: "🎉 Submitted Successfully!",
          description: "We'll contact you shortly.",
        });

        // Open WhatsApp in a new tab to avoid breaking the SPA flow
        window.open(
          `https://wa.me/918143963821?text=Hi,%20I%20submitted%20my%20details.%0AName:%20${encodeURIComponent(
            form.name
          )}%0AService:%20${encodeURIComponent(form.serviceSelected)}`,
          "_blank",
          "noopener,noreferrer"
        );
      } else {
        if (
          typeof window !== "undefined" &&
          (
            window as Window &
              typeof globalThis & {
                fbq?: (event: string, ...args: unknown[]) => void;
              }
          ).fbq &&
          data.exists
        ) {
          (
            window as Window &
              typeof globalThis & {
                fbq?: (event: string, ...args: unknown[]) => void;
              }
          ).fbq("trackCustom", "LeadAlreadySubmitted");
        }

        toast({
          variant: data.exists ? "warning" : "destructive",
          title: data.exists ? "Already Submitted" : "Submission Failed",
          description: data.message || "Please try again.",
        });
        if (data.exists) {
          setTimeout(() => {
            localStorage.setItem("leadSubmitted", "yes");
            localStorage.removeItem("leadForm");
            setThankYou(true);
          }, 1000);
        }
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      toast({
        variant: "destructive",
        title: "Submittion failed!",
        description:
          "Unable to submit. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // 🟢 THANK YOU SCREEN
  if (thankYou)
    return (
      <Card className="max-w-lg mx-auto py-10 text-center rounded-xl shadow-lg border-border bg-card">
        <CheckCircle className="mx-auto text-green-500 w-14 h-14 mb-4" />
        <h2 className="text-2xl font-semibold">Thank You 🎉</h2>
        <p className="text-sm text-gray-300 mt-2">
          Your details were submitted successfully.
          <br />
          We’ll reach out soon on WhatsApp.
        </p>
        <Button className="mt-6 flex gap-2 mx-auto" asChild>
          <Link href={`https://wa.me/918143963821`} target="_blank">
            <BsWhatsapp /> Chat on WhatsApp
          </Link>
        </Button>
        <p className="text-xs text-gray-300 mt-4">
          You won’t see the form again on this device.
        </p>
      </Card>
    );

  return (
    <Card className="max-w-xl py-0 px-0 p-0 gap-2 mx-auto shadow-2xl border-border/60 bg-linear-to-b from-slate-900/70 via-slate-900 to-slate-950 rounded-2xl border birder-gray-700">
      <CardHeader className="space-y-3 pt-4 pb-3 border-b border-border/60 bg-slate-900/60 rounded-t-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Launch Your Website Offer 🚀
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Fill this 1–2 minute form to claim the ₹2,999 starter website.
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-end text-xs text-gray-300">
            <span className="font-medium text-emerald-500">Limited-time</span>
            <span className="text-white text-right">
              Fast delivery & WhatsApp support
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-[11px] text-gray-300">
            <span>
              Step {step + 1} of {stepLabels.length}
            </span>
            <span className="font-medium text-sky-400">{stepLabels[step]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {stepLabels.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-all duration-300",
                  idx < step
                    ? "bg-sky-500"
                    : idx === step
                    ? "bg-sky-400"
                    : "bg-slate-700"
                )}
              />
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-slate-800 border-gray-500 text-white focus-visible:ring-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  WhatsApp Number <span className="text-red-500">*</span>
                </Label>
                <StyledPhoneInput
                  country={country}
                  helperText="Include country code, e.g. +91 98765 43210"
                  value={form.phone}
                  onChange={(e: string) => setForm({ ...form, phone: e })}
                  className="bg-slate-800 border-gray-500 focus-visible:ring-sky-500"
                />
                <p className="text-[11px] text-gray-300">
                  Used only to share your website demo and updates.
                </p>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white focus-visible:ring-sky-500"
                />
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  Business / Brand Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="e.g. Sai Real Estate"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white focus-visible:ring-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  Category <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={form.categoryName}
                  onValueChange={(v) => setForm({ ...form, categoryName: v })}
                >
                  <SelectTrigger className="w-full bg-slate-800 text-white border-slate-700 focus-visible:ring-sky-500">
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border border-gray-500">
                    {categories.map((c) => (
                      <SelectItem key={c} value={c} className="text-white">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-[11px] text-gray-300">
                  This helps tailor the design and sections for your niche.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5 sm:col-span-2">
                  <Label className="text-xs uppercase tracking-wide text-slate-300">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Street / area"
                    value={form.street}
                    onChange={(e) =>
                      setForm({ ...form, street: e.target.value })
                    }
                    className="bg-slate-800 border-slate-700 text-white focus-visible:ring-sky-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs uppercase tracking-wide text-slate-300">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white focus-visible:ring-sky-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs uppercase tracking-wide text-slate-300">
                    State <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="State"
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    className="bg-slate-800 border-slate-700 text-white focus-visible:ring-sky-500"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  Service Required <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={form.serviceSelected}
                  onValueChange={(v) =>
                    setForm({
                      ...form,
                      serviceSelected: v,
                      timeline:
                        plans.find((sp) => sp.id === v)?.timeline ||
                        "flexible/not-sure",
                    })
                  }
                >
                  <SelectTrigger className="w-full bg-slate-800 text-white border-slate-700 focus-visible:ring-sky-500">
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border border-gray-500">
                    {servicesOptions.map((sp) => (
                      <SelectItem
                        key={sp.value}
                        value={sp.value}
                        className="text-white"
                      >
                        {sp.name} — {sp.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {form.serviceSelected !== "pro-website" &&
                form.serviceSelected !== "starter-website" &&
                form.serviceSelected !== "growth-website" && (
                  <p className="text-[11px] text-amber-300/90 flex items-start gap-1.5">
                    <Info className="h-3.5 w-3.5 mt-px" />
                    Pricing may change based on pages, features and
                    integrations.
                  </p>
                )}

              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  Timeline <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={form.timeline}
                  onValueChange={(v) => setForm({ ...form, timeline: v })}
                >
                  <SelectTrigger className="w-full bg-slate-800 text-white border-slate-700 focus-visible:ring-sky-500">
                    <SelectValue placeholder="How soon do you need it?" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border border-gray-500 text-white">
                    {timelineOptions.map((tl) => (
                      <SelectItem
                        value={tl.value}
                        key={tl.id}
                        className="text-white"
                      >
                        {tl.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-slate-300">
                  Purpose / Notes
                </Label>
                <Textarea
                  placeholder="e.g. Lead generation, appointment booking, online store, portfolio..."
                  value={form.purpose}
                  onChange={(e) =>
                    setForm({ ...form, purpose: e.target.value })
                  }
                  className="min-h-28 resize-none bg-slate-800 border-slate-700 text-white focus-visible:ring-sky-500"
                />
                <p className="text-[11px] text-gray-300">
                  Share anything specific you want: pages, features, references,
                  etc.
                </p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-sm text-gray-300 space-y-3"
            >
              <p className="font-semibold text-white">Review your details</p>
              <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                {Object.entries(form).map(([k, v]) => (
                  <p key={k} className="flex justify-between gap-3 text-xs">
                    <span className="capitalize text-slate-300">
                      {k.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-medium text-white capitalize text-right">
                      {String(v).replace(/-/g, " ") || "-"}
                    </span>
                  </p>
                ))}
              </div>
              <p className="text-[11px] text-emerald-400">
                Everything looks good? Hit Submit and you’ll also get a WhatsApp
                link.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-y border-gray-500 pt-4 pb-2">
        <div
          className={cn(
            "flex w-full items-center justify-between gap-2",
            step < 3 ? "flex-row" : "flex-col sm:flex-row"
          )}
        >
          {step > 0 ? (
            <Button
              variant="outline"
              className="w-auto text-xs sm:text-sm cursor-pointer text-white bg-transparent hover:bg-transparent hover:text-white"
              onClick={() => {
                prevStep();
                if (
                  typeof window !== "undefined" &&
                  (
                    window as Window &
                      typeof globalThis & {
                        fbq?: (event: string, ...args: unknown[]) => void;
                      }
                  ).fbq
                ) {
                  (
                    window as Window &
                      typeof globalThis & {
                        fbq?: (event: string, ...args: unknown[]) => void;
                      }
                  ).fbq("trackCustom", "LeadBack");
                }
              }}
            >
              ← Back
            </Button>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              className="flex-1 sm:flex-none text-xs sm:text-sm cursor-pointer text-white bg-transparent hover:bg-transparent hover:text-white"
              onClick={() => {
                setForm(defaultForm);
                setStep(0);
                if (
                  typeof window !== "undefined" &&
                  (
                    window as Window &
                      typeof globalThis & {
                        fbq?: (event: string, ...args: unknown[]) => void;
                      }
                  ).fbq
                ) {
                  (
                    window as Window &
                      typeof globalThis & {
                        fbq?: (event: string, ...args: unknown[]) => void;
                      }
                  ).fbq("trackCustom", "LeadClear");
                }
              }}
            >
              Clear form
            </Button>

            {step < 3 ? (
              <Button
                disabled={!isStepValid()}
                onClick={() => {
                  nextStep();
                  if (
                    typeof window !== "undefined" &&
                    (
                      window as Window &
                        typeof globalThis & {
                          fbq?: (event: string, ...args: unknown[]) => void;
                        }
                    ).fbq
                  ) {
                    (
                      window as Window &
                        typeof globalThis & {
                          fbq?: (event: string, ...args: unknown[]) => void;
                        }
                    ).fbq("trackCustom", `formNext-${step.toString()}`);
                  }
                }}
                className="flex-1 sm:flex-none text-xs sm:text-sm cursor-pointer"
              >
                Next step →
              </Button>
            ) : (
              <Button
                className="flex-1 sm:flex-none text-xs sm:text-sm cursor-pointer"
                disabled={loading}
                onClick={handleSubmit}
                variant="primary"
              >
                {loading ? "Submitting..." : "Submit & continue"}
              </Button>
            )}
          </div>
        </div>

        <p className="text-[11px] text-center text-gray-300">
          No spam. Your details are used only to contact you about this website
          project.
        </p>
      </CardFooter>

      <div className="pb-4">
        <Link
          href="https://wa.me/918143963821?text=Hi!+I+want+to+discuss+the+website+offer."
          target="_blank"
          className="flex items-center justify-center gap-2 text-emerald-400 text-xs sm:text-sm hover:underline"
        >
          <BsWhatsapp className="text-base" />
          Prefer WhatsApp? Tap to chat instead
        </Link>
      </div>
    </Card>
  );
}
