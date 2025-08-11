import { Clock, Heart, Banknote, Sprout } from "lucide-react";

const timelineBenefits = [
  {
    time: "Após 20 minutos",
    benefit: "pressão arterial e frequência cardíaca diminuem.",
    icon: Heart
  },
  {
    time: "Após 12 horas",
    benefit: "níveis de monóxido de carbono no sangue voltam ao normal.",
    icon: Clock
  },
  {
    time: "Após 2-12 semanas",
    benefit: "circulação melhora e a respiração fica mais fácil.",
    icon: Sprout
  },
  {
    time: "Após 1 ano",
    benefit: "risco de doenças cardíacas cai pela metade.",
    icon: Heart
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Benefícios de parar de fumar
            </h2>
            <p className="text-lg text-muted-foreground">
              com prova científica
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 mb-16">
            {timelineBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="bg-gradient-accent rounded-lg p-3 flex-shrink-0">
                    <Icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      {item.time}:
                    </h3>
                    <p className="text-muted-foreground">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-hero rounded-xl p-8 text-primary-foreground">
              <Banknote className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                💰 Economize milhares de reais por ano
              </h3>
              <p className="opacity-90">
                e invista no que realmente importa.
              </p>
            </div>
            
            <div className="bg-gradient-accent rounded-xl p-8 text-accent-foreground">
              <Sprout className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                🌱 Recupere sua saúde
              </h3>
              <p className="opacity-90">
                energia e autoestima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;