import { pricingPlans } from "./Pricing.data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-900" id="pricing">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Elige tu plan</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Comienza tu prueba gratuita de 14 días
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-xl transition-all duration-300 border-0 px-2 py-6 ${
                plan.popular
                  ? "rounded-md border bg-purple-900/70 border-purple-400/30 text-purple-200"
                  : "rounded-md border bg-purple-600/20 border-purple-400/30 text-purple-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-purple-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most popular
                  </span>
                </div>
              )}
              {plan.popular ? "POPULAR" : "FEE"}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price}
                  </span>
                </div>
                <p className="text-sm text-slate-200">{plan.description}</p>
                <CardContent className="mt-6">
                  <ul className="mb-6 space-y-3 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow-md"
                        : "bg-purple-600/30 hover:bg-purple-700/50 text-white border border-purple-400/20"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
