import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { Testimonials } from "@/components/testimonials";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { stats } from "@/data/static-data";

function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(stepValue * currentStep), end));
      } else {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Home() {
  const statsDisplay = [
    {
      label: "Total Servers",
      value: parseInt(stats.totalServers) || 45,
      suffix: "+",
      icon: TrendingUp,
      animate: true,
    },
    {
      label: "Total Users",
      value: parseInt(stats.totalUsers.replace('k', '')) * 1000 || 27000,
      suffix: "+",
      icon: Users,
      animate: true,
    },
    { label: "Uptime", value: stats.uptime, icon: Zap, animate: false },
    {
      label: "Threats Blocked",
      value: parseInt(stats.threatsblocked) || 16,
      suffix: "+",
      icon: Shield,
      animate: true,
    },
  ];

  const featuresPreview = [
    {
      icon: ShieldCheck,
      title: "Anti-Nuke Protection",
      description:
        "Advanced anti-nuke system that protects your server from mass deletions, bans, and unauthorized changes.",
    },
    {
      icon: Lock,
      title: "Comprehensive Moderation",
      description:
        "Full suite of moderation tools including ban, kick, mute, warn with automated logging.",
    },
    {
      icon: Shield,
      title: "Auto Moderation",
      description:
        "Automated content filtering with spam detection, link blocking, and profanity filters.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-3/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/bot-icon.png"
              alt="LegionX Logo"
              className="w-32 md:w-48 h-32 md:h-48"
              data-testid="img-hero-logo"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            LegionX - Ultimate Discord <br className="hidden md:block" />
            Protection & Management
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Power. Precision. Performance. Advanced anti-nuke protection,
            comprehensive moderation tools, and 24/7 reliability for your
            Discord server.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              size="lg"
              asChild
              data-testid="button-hero-add-discord"
              className="hover:scale-105 transition-transform"
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=1428989669688873083"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Discord
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              data-testid="button-hero-join-support"
              className="hover:scale-105 transition-transform"
            >
              <a
                href="https://discord.gg/SAvtnnurGr"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm"
              >
                Join Support Server
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {statsDisplay.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  data-testid={`card-stat-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div
                      className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"
                      data-testid={`text-stat-value-${index}`}
                    >
                      {stat.animate && typeof stat.value === "number" ? (
                        <>
                          <AnimatedCounter end={stat.value} />
                          {stat.suffix}
                        </>
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div
                      className="text-sm text-muted-foreground uppercase tracking-wide"
                      data-testid={`text-stat-label-${index}`}
                    >
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powerful Features for Total Protection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              LegionX provides everything you need to secure and manage your
              Discord server with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuresPreview.map((feature, index) => (
              <Card
                key={feature.title}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-feature-preview-${index}`}
              >
                <CardContent className="p-6 md:p-8">
                  <feature.icon className="h-12 w-12 md:h-16 md:w-16 text-primary mb-4" />
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-3"
                    data-testid={`text-feature-preview-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-feature-preview-description-${index}`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              asChild
              data-testid="button-explore-features"
            >
              <Link href="/features" className="inline-flex items-center gap-2">
                Explore All Features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-3/10 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to protect your server?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Add LegionX to your server today and experience unmatched protection
            and management.
          </p>
          <Button size="lg" asChild data-testid="button-bottom-invite">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1428989669688873083"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add LegionX Now
            </a>
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
