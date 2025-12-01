"use client";

import { BsWhatsapp } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
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

const timelineOptions = [
  "Within 7 Days",
  "Within 2 Weeks",
  "Within 1 Month",
  "Within 2 Months",
  "Flexible / Not Sure",
];

const defaultForm = {
  name: "",
  phone: "",
  email: "",
  title: "",
  categoryName: "",
  street: "",
  city: "",
  state: "",
  serviceSelected: "Basic Website",
  timeline: "Within 7 Days",
  purpose: "",
};

const stepLabels = ["Contact", "Business Details", "Requirements", "Review"];

// Keyword logic for auto-category
const categoryRules: Record<string, string> = {
  gym: "Fitness",
  fitness: "Fitness",
  property: "Real Estate",
  estate: "Real Estate",
  realtor: "Real Estate",
  academy: "Education",
  school: "Education",
  coaching: "Education",
  food: "Restaurant / Food",
  restaurant: "Restaurant / Food",
  cafe: "Restaurant / Food",
  shop: "E-Commerce",
  store: "E-Commerce",
  services: "Service Business",
  agency: "Service Business",
  personal: "Personal Brand",
  blog: "Personal Brand",
};

export default function LeadForm() {
  const toast = useToast();
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [thankYou, setThankYou] = useState(false);
  const [country, setCountry] = useState("IN");

  const getLocation = useCallback(() => {
    const fillFromBigDataCloud = (
      latitude: string | number,
      longitude: string | number
    ) => {
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
        .then((res) => res.json())
        .then((data) => {
          const city =
            data.city ||
            data.locality ||
            data.localityInfo?.locality?.[0]?.name ||
            "";

          if (!form.city && city) {
            setForm((prev) => ({
              ...prev,
              city,
              state: data.principalSubdivision || "",
              street: data.locality || "",
            }));
            setCountry(data.countryCode || "");
          }
        })
        .catch(() => {});
    };

    const fillFromIpApi = () => {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          if (!form.city && data.city) {
            setForm((prev) => ({
              ...prev,
              city: data.city,
              state: data.region || "",
            }));
            setCountry(data.country_code || "");
          }
        })
        .catch(() => {});
    };

    if (!("geolocation" in navigator)) {
      fillFromIpApi();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fillFromBigDataCloud(latitude, longitude);
      },
      () => {
        // fallback to IP-based detection if geolocation fails
        fillFromIpApi();
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, [form.city]);

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
        Promise.resolve().then(() => setForm(parsed));
      } catch {}
    }

    // Detect location once
    getLocation();
  }, []);

  // Save on change
  useEffect(() => {
    localStorage.setItem("leadForm", JSON.stringify(form));
  }, [form]);

  // Detect business category by name
  useEffect(() => {
    if (!form.title) return;

    const name = form.title.toLowerCase();

    for (const keyword in categoryRules) {
      if (name.includes(keyword)) {
        // Defer setForm to the next tick to avoid cascading renders
        Promise.resolve().then(() =>
          setForm((prev) => ({
            ...prev,
            categoryName: prev.categoryName || categoryRules[keyword],
          }))
        );
        break;
      }
    }
  }, [form.title]);

  const isPhoneValid = (phone: string | undefined) => {
    if (!phone) return false; // empty is invalid
    const digits = phone.replace(/\D/g, ""); // only numbers
    console.log(digits, digits.length);
    return digits.length > 10 && digits.length === 12;
  };

  const isStepValid = () => {
    if (step === 0) return form.name.trim() && isPhoneValid(form.phone);
    if (step === 1)
      return (
        form.title.trim() &&
        form.categoryName.trim() &&
        form.city.trim() &&
        form.state.trim() &&
        form.street.trim()
      );
    if (step === 2) return form.serviceSelected.trim();
    return true;
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:4000/api/add-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("leadSubmitted", "yes");
      localStorage.removeItem("leadForm");
      setThankYou(true);
      toast({
        variant: "success",
        title: "🎉 Submitted Successfully!",
        description: "We'll contact you shortly.",
      });

      window.location.href = `https://wa.me/918143963821?text=Hi,%20I%20submitted%20my%20details.%0AName:%20${form.name}%0AService:%20${form.serviceSelected}`;
    } else {
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

    setLoading(false);
  };

  // 🟢 THANK YOU SCREEN
  if (thankYou)
    return (
      <Card className="max-w-lg mx-auto py-10 text-center rounded-xl shadow-lg border-border bg-card">
        <CheckCircle className="mx-auto text-green-500 w-14 h-14 mb-4" />
        <h2 className="text-2xl font-semibold">Thank You 🎉</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Your details were submitted successfully.
          <br />
          We’ll reach out soon on WhatsApp.
        </p>
        <Button className="mt-6 flex gap-2 mx-auto" asChild>
          <Link
            href={`https://wa.me/918143963821?text=Hi! I completed the form.`}
            target="_blank"
          >
            <BsWhatsapp /> Chat on WhatsApp
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          You won’t see the form again on this device.
        </p>
      </Card>
    );

  return (
    <Card className="max-w-lg mx-auto shadow-xl border-border bg-card rounded-2xl">
      <CardHeader className="text-center space-y-2 pb-2">
        <h3 className="text-xl font-bold">Claim the ₹2,999 Offer 🚀</h3>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 w-full pt-4">
          {stepLabels.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-20 rounded-full transition-all ${
                idx <= step ? "bg-blue-600" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Step {step + 1} of {stepLabels.length} — {stepLabels[step]}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label>Your Name *</Label>
                <Input
                  placeholder="Enter name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>WhatsApp Number *</Label>
                <StyledPhoneInput
                  country={country}
                  placeholder="9876543210"
                  value={form.phone}
                  onChange={(e: string) => setForm({ ...form, phone: e })}
                />
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label>Business Name *</Label>
                <Input
                  placeholder="Eg: Sai Real Estate"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Suggested Category *</Label>
                <Select
                  value={form.categoryName}
                  onValueChange={(v) => setForm({ ...form, categoryName: v })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Auto-detecting..." />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Fitness",
                      "Real Estate",
                      "Education",
                      "Restaurant / Food",
                      "E-Commerce",
                      "Service Provider",
                      "Personal Brand",
                      "Other",
                    ].map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Address *</Label>
                <Input
                  placeholder="Auto-detecting..."
                  value={form.street}
                  onChange={(e) => setForm({ ...form, street: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>City *</Label>
                <Input
                  placeholder="Auto-detecting..."
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>State *</Label>
                <Input
                  placeholder="Auto-detecting..."
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label>Service Required *</Label>
                <Select
                  value={form.serviceSelected}
                  onValueChange={(v) =>
                    setForm({ ...form, serviceSelected: v })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Basic Website">
                      Starter Website — ₹2,999
                    </SelectItem>
                    <SelectItem value="Website + Domain + CMS">
                      Website + Domain + CMS
                    </SelectItem>
                    <SelectItem value="Website + SEO">Website + SEO</SelectItem>
                    <SelectItem value="Website + SEO + Ads">
                      Website + SEO + Ads
                    </SelectItem>
                    <SelectItem value="Website + CRM">Website + CRM</SelectItem>
                    <SelectItem value="Full Package">Full Package</SelectItem>
                    <SelectItem value="Not Sure Yet">Not Sure Yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {form.serviceSelected !== "Basic Website" && (
                <p className="text-xs text-muted-foreground">
                  <Info className="inline h-4 w-4 text-orange-500 mr-1" />
                  Pricing varies based on scope.
                </p>
              )}

              <div className="space-y-2">
                <Label>Timeline *</Label>
                <Select
                  value={form.timeline}
                  onValueChange={(v) => setForm({ ...form, timeline: v })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelineOptions.map((tl) => (
                      <SelectItem value={tl} key={tl}>
                        {tl}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Purpose</Label>
                <Textarea
                  placeholder="Lead generation, online store, portfolio..."
                  value={form.purpose}
                  onChange={(e) =>
                    setForm({ ...form, purpose: e.target.value })
                  }
                  className="min-h-32 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label>Email (optional)</Label>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-muted-foreground space-y-2"
            >
              <p className="font-semibold text-foreground">Review:</p>

              {Object.entries(form).map(([k, v]) => (
                <p key={k} className="capitalize">
                  {k.replace(/([A-Z])/g, " $1")}:{" "}
                  <span className="font-medium text-foreground">
                    {v || "-"}
                  </span>
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <div
          className={cn(
            "flex w-full justify-between",
            step < 3 ? "flex-row" : "flex-col gap-1"
          )}
        >
          {" "}
          {step > 0 ? (
            <Button
              variant="ghost"
              className={cn(step === 4 ? "w-full" : "w-auto", "cursor-pointer")}
              onClick={prevStep}
            >
              {" "}
              Back{" "}
            </Button>
          ) : (
            <div />
          )}{" "}
          {step < 3 ? (
            <Button
              disabled={!isStepValid()}
              onClick={nextStep}
              className="cursor-pointer"
            >
              {" "}
              Next →{" "}
            </Button>
          ) : (
            <Button
              className="w-full cursor-pointer"
              disabled={loading}
              onClick={handleSubmit}
            >
              {" "}
              {loading ? "Submitting..." : "Submit"}{" "}
            </Button>
          )}{" "}
        </div>

        <hr className="w-full opacity-30" />

        <Link
          href="https://wa.me/918143963821?text=Hi!+I+submitted+my+details."
          target="_blank"
          className="flex items-center justify-center gap-2 text-green-500 text-sm hover:underline"
        >
          <BsWhatsapp className="text-lg" />
          Prefer WhatsApp? Continue here
        </Link>
      </CardFooter>
    </Card>
  );
}
