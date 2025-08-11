import { Book, Calendar, MessageSquare, Lightbulb } from "lucide-react";

const differentials = [
  {
    icon: Book,
    title: "Guia 100% prático",
    description: "sem enrolação, apenas estratégias que funcionam."
  },
  {
    icon: Calendar,
    title: "Plano de 30 dias",
    description: "passo a passo diário para manter o foco."
  },
  {
    icon: MessageSquare,
    title: "Exemplos reais",
    description: "histórias inspiradoras de quem conseguiu vencer."
  },
  {
    icon: Lightbulb,
    title: "Soluções para cada desafio",
    description: "abstinência, recaídas, ansiedade, ganho de peso."
  }
];

const Differentials = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Por que este guia é diferente?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Não é mais um método genérico. É um sistema completo e personalizado para sua jornada.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border"
                >
                  <div className="bg-gradient-hero rounded-lg p-3 w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    📘 {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;