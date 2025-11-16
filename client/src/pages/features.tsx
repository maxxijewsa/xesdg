import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldCheck, Lock, Eye, Bell, Settings, Crown, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Anti-Nuke Protection",
      description: "Advanced anti-nuke system that protects your server from mass deletions, bans, and unauthorized changes with instant rollback capabilities.",
      benefit: "Keep your server safe from malicious attacks with automatic threat detection and prevention.",
    },
    {
      icon: Lock,
      title: "Comprehensive Moderation",
      description: "Full suite of moderation tools including ban, kick, mute, warn with customizable durations and automated action logs.",
      benefit: "Maintain order in your community with powerful, easy-to-use moderation commands.",
    },
    {
      icon: Shield,
      title: "Auto Moderation",
      description: "Automated content filtering with spam detection, link blocking, profanity filters, and configurable auto-sanctions for rule violations.",
      benefit: "Set it and forget it - let LegionX handle spam and unwanted content automatically.",
    },
    {
      icon: Eye,
      title: "Advanced Logging",
      description: "Detailed server logging system tracking message edits, deletions, member joins/leaves, role changes, and all moderation actions.",
      benefit: "Stay informed about everything happening in your server with comprehensive audit logs.",
    },
    {
      icon: Zap,
      title: "Guaranteed 24/7 Uptime",
      description: "LegionX boasts a 99.9% reliability guarantee. With auto-reconnect and persistent protection, your server is always secured.",
      benefit: "Rely on a bot that's always online and ready to protect, ensuring your server's safety never lapses.",
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Take full control with intuitive features like custom commands, role management, and automated actions. Configure LegionX to match your server's needs.",
      benefit: "Tailor protection and moderation to your exact requirements with flexible configuration options.",
    },
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Receive instant notifications for security events, rule violations, and moderation actions. Stay informed with customizable alert channels.",
      benefit: "Never miss important security events with immediate notifications to designated channels.",
    },
    {
      icon: Crown,
      title: "Exclusive Premium Features",
      description: "Unlock the ultimate LegionX experience with Premium. Get access to advanced protection, priority support, custom presets, and more.",
      benefit: "Support the developers and gain access to powerful features that take your server protection to the next level.",
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
          <Badge className="mb-4" data-testid="badge-features">Features</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            Powerful Protection, <br className="hidden md:block" />
            Limitless Possibilities
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            LegionX is engineered with advanced features to provide comprehensive protection and management for your Discord server.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card 
                  className="group h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-primary/50 cursor-pointer overflow-hidden" 
                  data-testid={`card-feature-${index}`}
                >
                  <CardContent className="p-6 md:p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <feature.icon className="h-8 w-8 text-primary group-hover:rotate-6 transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6" data-testid={`text-feature-description-${index}`}>
                        {feature.description}
                      </p>

                      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 group-hover:bg-muted/80 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="font-medium text-sm mb-1">Benefit:</div>
                          <p className="text-sm text-muted-foreground" data-testid={`text-feature-benefit-${index}`}>{feature.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
