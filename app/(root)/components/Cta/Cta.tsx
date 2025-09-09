import { Button } from "@/components/ui/button";
import { ArrowBigRight, Sparkles } from "lucide-react";
import { CtaData } from "./Cta.data";

export function Cta() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-purple-800/5 to-purple-600/5"
      id="cta"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Listo para <br /> llevar tu productividad al siguiente nivel?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Únete a miles de usuarios satisfechos que ya están aprovechando el
              poder de nuestra plataforma impulsada por IA. Regístrate hoy y
              comienza tu prueba gratuita de 14 días.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" variant="secondary">
              <Sparkles className="group-hover:rotate-12 transition-transform" />
              Comienza tu prueba gratuita
              <ArrowBigRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
          {CtaData.map((cta, index) => (
            <div 
            key={index}
            className="text-center border border-radius-lg rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">{cta.title}</div>
              <div className="text-slate-200">{cta.subtitle}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
