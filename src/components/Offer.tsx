import { Button } from "@/components/ui/button";
import { Download, Shield, Clock } from "lucide-react";

const Offer = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Offer Headline */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              💥 Oferta por tempo limitado
            </h2>
            <div className="text-2xl opacity-70 line-through mb-2">
              De R$ 198,00
            </div>
            <div className="text-6xl md:text-7xl font-bold mb-2">
              R$ 29,90
            </div>
            <p className="text-xl opacity-90">
              Acesso imediato – Baixe agora e comece hoje
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Download className="h-6 w-6 mb-2 mx-auto" />
              <div className="font-medium">Acesso Imediato</div>
              <div className="text-sm opacity-80">Download instantâneo</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Clock className="h-6 w-6 mb-2 mx-auto" />
              <div className="font-medium">Plano 30 Dias</div>
              <div className="text-sm opacity-80">Passo a passo diário</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Shield className="h-6 w-6 mb-2 mx-auto" />
              <div className="font-medium">Garantia Total</div>
              <div className="text-sm opacity-80">7 dias sem risco</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="ctaAccent" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto mb-6"
          >
            Quero parar de fumar agora!
          </Button>

          {/* Guarantee */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <Shield className="h-8 w-8 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Garantia de 7 dias</h3>
            <p className="opacity-90">
              Se você não sentir que este guia está te ajudando nos primeiros 7 dias, devolvemos seu dinheiro. Sem burocracia. Sua saúde é prioridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;