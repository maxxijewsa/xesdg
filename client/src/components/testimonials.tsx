import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/data/static-data";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 border-t border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Communities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what server owners and admins are saying about Wild
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-4 italic" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold" data-testid={`text-testimonial-author-${index}`}>{testimonial.authorName}</div>
                  <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>{testimonial.authorRole}</div>
                  <div className="text-sm text-primary font-medium mt-1" data-testid={`text-testimonial-server-${index}`}>{testimonial.serverName}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
