import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Developers() {
  const team = [
    {
      name: "Jerry",
      role: "Owner & Lead Developer",
      username: "jerry.jss",
      description:
        "As the founder and lead developer, Jerry oversees all development, ensuring the bot remains stable, scalable, and packed with cutting-edge security features.",
      avatar: "/jerry-pfp.png",
      discordId: "1378290223909437552",
    },
    {
      name: "Mohit",
      role: "Co-Owner & Technical Manager",
      username: "mohitbhai2007",
      description:
        "Mohit acts as both Co-Owner a technical manager. Their work includes assisting in bot updates, debugging security issues, managing hosting environments, and ensuring Wild maintains its high standards.",
      avatar: "/mohit-pfp.png",
      discordId: "1155442418309673000",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Meet the Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate minds behind Wild, dedicated to crafting the
              ultimate protection experience on Discord.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="group h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    <div className="relative z-10">
                      <div className="flex flex-col items-center text-center mb-6">
                        <img
                          src={member.avatar}
                          alt={`Avatar of ${member.name}`}
                          className="w-32 h-32 rounded-full mb-4 border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                        />
                        <h2 className="text-2xl font-bold mb-1">
                          {member.name}
                        </h2>
                        <p className="text-primary font-medium mb-1">
                          {member.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {member.username}
                        </p>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {member.description}
                      </p>

                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a
                          href={`https://discord.com/users/${member.discordId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Contact on Discord
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg">
              Our mission is to create a seamless, high-quality, and secure
              protection experience for every Discord community. We believe in
              the power of security to bring peace of mind and strive to build a
              bot that is not only powerful and reliable but also easy to use
              and accessible to all.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
