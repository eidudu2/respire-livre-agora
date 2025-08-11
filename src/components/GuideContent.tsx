import { CheckCircle } from "lucide-react";

const contentItems = [
  "Entenda o vício físico e psicológico",
  "Descubra seus gatilhos e aprenda a controlá-los",
  "Técnicas para lidar com a fissura",
  "Métodos de apoio e ferramentas gratuitas",
  "Alimentação e exercícios para acelerar a recuperação",
  "Estratégias para evitar recaídas",
  "Depoimentos motivadores",
  "Plano de 30 dias para seguir e conquistar sua liberdade"
];

const GuideContent = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              O que você vai encontrar no guia
            </h2>
            <p className="text-lg text-muted-foreground">
              Conteúdo completo e estruturado para sua transformação
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elegant border">
            <div className="grid gap-4">
              {contentItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                >
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-subtle rounded-xl border">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  📖 Guia Completo de Transformação
                </h3>
                <p className="text-muted-foreground">
                  Mais de 50 páginas de conteúdo prático, estratégias testadas e suporte contínuo para sua jornada rumo à liberdade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideContent;