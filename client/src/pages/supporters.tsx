import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Award } from "lucide-react";

const supporters = [
  {
    name: "Nishant",
    role: "Premium Supporter",
    image: "https://cdn.discordapp.com/avatars/1360228164311322764/f56206e7982efd87a152920d2958c02b.png?size=4096",
    badges: ["Early Adopter", "Top Donator"],
    impact: "Helped fund initial development, bought 6 permanent premium",
  },
];

export default function Supporters() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
          Our Supporters
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The amazing individuals who help make Wild possible. We are grateful for your continued support and trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {supporters.map((supporter, index) => (
          <motion.div
            key={supporter.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24 border-2 border-primary/20">
                    <AvatarImage src={supporter.image} alt={supporter.name} />
                    <AvatarFallback>{supporter.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl font-bold">{supporter.name}</CardTitle>
                <div className="text-primary font-medium">{supporter.role}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground italic">
                  "{supporter.bio}"
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {supporter.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="bg-primary/5 text-primary border-primary/10">
                      {badge === "Early Adopter" && <Star className="w-3 h-3 mr-1" />}
                      {badge === "Top Donator" && <Heart className="w-3 h-3 mr-1" />}
                      {badge === "Community Leader" && <Award className="w-3 h-3 mr-1" />}
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 border-t border-dashed">
                  <div className="text-sm font-semibold mb-1">Supporter Impact:</div>
                  <p className="text-sm text-muted-foreground">{supporter.impact}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center p-8 rounded-2xl bg-muted/30 border border-dashed border-primary/20">
        <h2 className="text-2xl font-bold mb-4">Want to be featured here?</h2>
        <p className="text-muted-foreground mb-6">
          Supporting Wild helps us keep the project alive and bring more features to everyone.
        </p>
        <Button asChild>
          <Link href="/premium">Become a Supporter</Link>
        </Button>
      </div>
    </motion.div>
  );
}
