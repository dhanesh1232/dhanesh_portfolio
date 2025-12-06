"use client";

import { Check, Info, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePortfolio } from "@/context/parent";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/data";

export default function PricingPlans() {
  const { handleToChangeState, slotsLeft, setForm, form } = usePortfolio();

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* ========= HEADER ========= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <Badge className="mb-4" variant="outline">
          💰 Transparent Pricing
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Choose Your Growth Path
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {`Transparent pricing with no hidden fees. Start small and scale when
          you're ready—upgrade or downgrade anytime.`}
        </p>
      </motion.div>

      {/* ========= CAROUSEL WITH CARDS ========= */}
      <TooltipProvider>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full gap-0"
        >
          {/* Added pt-6 for badge spacing */}
          <CarouselContent className="-ml-2 md:-ml-4 pt-6">
            {plans.map((plan, i) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <Card
                    className={`relative h-full gap-2 flex flex-col p-4 sm:p-6 transition-all duration-300 ${
                      plan.highlight
                        ? "border-2 border-blue-600 shadow-xl shadow-blue-500/20 bg-linear-to-b from-blue-50 to-white dark:from-blue-950/50 dark:to-gray-950"
                        : "border border-border hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg"
                    }`}
                  >
                    {/* Popular Badge - Now properly visible */}
                    {plan.highlight && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 shadow-lg whitespace-nowrap text-sm font-semibold">
                          <Zap className="text-yellow-400 fill-orange-300" />{" "}
                          {plan.badge}
                        </Badge>
                      </div>
                    )}

                    {/* Icon & Badge */}
                    <CardHeader className="flex items-start justify-between px-0">
                      {!plan.highlight && (
                        <Badge variant={plan.badgeVariant} className="text-xs">
                          {plan.badge}
                        </Badge>
                      )}
                      <div
                        className={`ml-auto p-3 rounded-xl ${
                          plan.highlight
                            ? "bg-blue-100 dark:bg-blue-900/30"
                            : "bg-muted"
                        }`}
                      >
                        <plan.icon
                          className={cn(
                            `w-6 h-6`,
                            plan.highlight
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-muted-foreground",
                            plan.iconColor
                          )}
                        />
                      </div>
                    </CardHeader>

                    {/* Plan Name & Description */}
                    <div className="mb-2">
                      <CardTitle className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-start gap-2">
                        {plan.name}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-help transition-colors flex-shrink-0" />
                          </TooltipTrigger>
                          <TooltipContent>
                            ✨ Only {slotsLeft}/100 slots left at{" "}
                            <span className="text-green-500 font-bold">
                              {plan.price}
                            </span>{" "}
                            Price increases to
                            <span className="text-red-500 font-bold">
                              {plan.originalPrice}
                            </span>{" "}
                            soon!
                          </TooltipContent>
                        </Tooltip>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1 truncate">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-3">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl sm:text-5xl font-bold">
                          {plan.price}
                        </span>
                        {plan.savings && (
                          <Badge
                            variant="secondary"
                            className="text-xs text-green-600"
                          >
                            {plan.savings}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap text-muted-foreground">
                        <span className="text-sm text-muted-foreground line-through">
                          {plan.originalPrice}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          • one-time setup
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-2" />

                    {/* Features List */}
                    <ul className="space-y-3 mb-2 grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <div className="mt-0.5 shrink-0">
                            <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                          </div>
                          <span className="text-sm flex-1 truncate">
                            {feature.text}
                          </span>
                          {feature.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-help transition-colors flex-shrink-0" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs max-w-xs">
                                  {feature.tooltip}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons */}
                    <CardFooter className="space-y-3 flex flex-col">
                      <Button
                        asChild
                        size="lg"
                        className={`w-full group ${
                          plan.highlight
                            ? "bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl"
                            : "border-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-500"
                        }`}
                        variant={plan.highlight ? "default" : "outline"}
                        onClick={() => {
                          setForm?.({
                            ...form,
                            serviceSelected: plan.id,
                            timeline: plan.timeline,
                          });
                          if (
                            typeof window !== "undefined" &&
                            (window as unknown as { fbq?: unknown }).fbq
                          ) {
                            (
                              window as Window &
                                typeof globalThis & {
                                  fbq?: (
                                    event: string,
                                    ...args: unknown[]
                                  ) => void;
                                }
                            ).fbq("track", plan.fbqCta, {
                              package: plan.id,
                              product_name: plan.name,
                            });
                          }
                        }}
                      >
                        <Link
                          href="#form"
                          className="flex items-center justify-center gap-2"
                        >
                          {plan.cta}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full text-xs"
                        onClick={() => {
                          if (
                            typeof window !== "undefined" &&
                            (window as unknown as { fbq?: unknown }).fbq
                          ) {
                            (
                              window as Window &
                                typeof globalThis & {
                                  fbq?: (
                                    event: string,
                                    ...args: unknown[]
                                  ) => void;
                                }
                            ).fbq("track", plan.fbq);
                          }
                          handleToChangeState?.("fillOut", true);
                        }}
                      >
                        {plan.ctaSecondary}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls - Hidden on desktop where all cards are visible */}
          <div className="flex justify-center gap-2 lg:hidden">
            <CarouselPrevious className="static translate-y-1/2 translate-x-1/2" />
            <CarouselNext className="static translate-y-1/2 translate-x-1/2" />
          </div>
        </Carousel>
      </TooltipProvider>

      {/* ========= TRUST INDICATORS ========= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-4 mt-12"
      >
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>No hidden charges</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Money-back guarantee</span>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-4">
          <p className="text-sm sm:text-base text-muted-foreground">
            Not sure which plan fits your business?{" "}
            <Button
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline underline-offset-4 decoration-2 hover:decoration-blue-600 transition-colors"
              onClick={() => handleToChangeState?.("fillOut", true)}
              variant="link"
            >
              Book a free consultation
            </Button>{" "}
            {`— we'll help you choose the perfect plan.`}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
