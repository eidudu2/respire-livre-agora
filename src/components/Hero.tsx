import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-breathing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Image */}
          <div className="mb-8 relative">
            <img
              src={heroImage}
              alt="Pessoa respirando ar puro - liberdade do cigarro"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
          </div>

          {/* Emoji */}
          <div className="text-6xl mb-6">🚭</div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Respire Livre: O Guia Passo a Passo para Parar de Fumar de Vez
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme sua vida em apenas 30 dias com um método simples, prático e comprovado.
          </p>

          {/* Value Proposition */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto shadow-card border">
            <p className="text-lg font-medium text-card-foreground mb-2">
              Se você já tentou parar e não conseguiu, este guia é para você.
            </p>
            <p className="text-muted-foreground">
              Aqui, você vai encontrar técnicas reais, apoio estratégico e motivação para vencer o vício e reconquistar sua saúde.
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
          >
            Quero parar de fumar agora!
          </Button>

          {/* Special Offer Highlight */}
          <div className="mt-4 bg-card/80 backdrop-blur-sm rounded-lg p-3 inline-block border">
            <div className="text-sm text-muted-foreground line-through">
              De R$ 198,00
            </div>
            <div className="text-lg font-bold text-accent">
              💥 Por apenas R$ 29,90 por tempo limitado!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;