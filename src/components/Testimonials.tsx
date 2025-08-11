import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Usar o dinheiro que economizei me motivou a continuar. Depois de 1 ano, fiz a viagem dos meus sonhos.",
    author: "Marcos",
    age: "45 anos",
    rating: 5
  },
  {
    quote: "Aprendi a me ver como alguém saudável e ativo. O cigarro deixou de fazer sentido na minha vida.",
    author: "Daniela",
    age: "32 anos",
    rating: 5
  },
  {
    quote: "No grupo de apoio, descobri que não estava sozinho. Isso fez toda a diferença.",
    author: "Ana",
    age: "52 anos",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Prova Social – Depoimentos do eBook
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de pessoas que conquistaram sua liberdade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-card-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-card-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.age}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle rounded-xl p-8 border">
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Pessoas transformadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30</div>
                  <div className="text-sm text-muted-foreground">Dias para transformação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;