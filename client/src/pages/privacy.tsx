import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      number: "1",
      title: "Information We Collect",
      content:
        "Lynx collects Discord User ID, username, avatar, Server (Guild) ID, name, settings, message content for moderation (temporarily), moderation logs and actions, user levels and XP data, and ticket conversations and transcripts.",
    },
    {
      number: "2",
      title: "How We Use Your Information",
      content:
        "We use the collected information to provide moderation and protection features, store server configurations, generate moderation logs and reports, track user levels and rewards, and maintain ticket system functionality.",
    },
    {
      number: "3",
      title: "Data Storage and Security",
      content:
        "All data is stored securely using industry-standard encryption. We use PostgreSQL for persistent data and Redis for temporary caching. Message content is only stored temporarily for moderation purposes and is automatically deleted after processing.",
    },
    {
      number: "4",
      title: "Data Sharing",
      content:
        "We do not sell, trade, or share your data with third parties. Your data is only used within the Lynx bot to provide its services to your Discord server.",
    },
    {
      number: "5",
      title: "Data Retention",
      content:
        "We retain data as long as the bot is active in your server. When you remove Lynx from your server, you can request complete data deletion by contacting us on our Discord server.",
    },
    {
      number: "6",
      title: "Your Rights",
      content:
        "You have the right to request access to your data, request data deletion, opt-out of certain features, and export your server data.",
    },
    {
      number: "7",
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please join our Discord server or contact us through GitHub.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="py-16 md:py-24 border-b bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Badge className="mb-4" data-testid="badge-privacy">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Your privacy is important to us. Learn how Lynx protects and manages your data.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: 12/19/2025
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              >
                <Card className="hover-elevate">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                          <span className="text-lg font-bold text-primary">
                            {section.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-3">
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="mt-16 pt-12 border-t"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-lg p-8 text-center">
              <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Your Data is Safe</h3>
              <p className="text-muted-foreground mb-6">
                We are committed to protecting your privacy and ensuring you have a positive experience on our platform.
              </p>
              <p className="text-sm text-muted-foreground">
                If you have any questions about this Privacy Policy or our privacy practices, please join our Discord
                server or contact us through GitHub.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
