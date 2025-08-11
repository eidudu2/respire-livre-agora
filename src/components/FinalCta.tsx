import { Button } from "@/components/ui/button";

const FinalCta = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Final Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Você pode continuar adiando essa decisão, ou pode dar o passo que vai mudar sua vida.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              🌟 Comece agora sua jornada para uma vida mais saudável, longa e feliz.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant border">
            <div className="mb-6">
              <div className="text-2xl font-bold text-card-foreground mb-2">
                Transforme sua vida hoje mesmo
              </div>
              <div className="text-muted-foreground">
                Mais de 500 pessoas já conquistaram sua liberdade com este guia
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto mb-4"
            >
              Quero meu Guia Agora
            </Button>

            <div className="text-sm text-muted-foreground">
              💥 Oferta por tempo limitado: <span className="font-semibold text-accent">R$ 19,90</span>
            </div>
          </div>

          {/* Contact/Support */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Dúvidas? Entre em contato: suporte@respirelivre.com.br
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;