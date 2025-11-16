import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Premium() {
  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out LegionX",
      features: [
        "Basic anti-nuke protection",
        "Standard moderation tools",
        "5 auto-mod filters",
        "Basic logging",
        "Community support",
      ],
      ctaText: "Get Started",
      ctaLink:
        "https://discord.com/oauth2/authorize?client_id=1428989669688873083",
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "per month",
      description: "Unlock the full potential of LegionX",
      features: [
        "Everything in Free, plus:",
        "Advanced anti-nuke protection",
        "All 15+ auto-mod filters",
        "24/7 protection mode",
        "Unlimited custom commands",
        "Priority support",
        "Custom alert channels",
        "Advanced logging & analytics",
        "Role backup & restore",
        "Exclusive premium badge",
      ],
      popular: true,
      ctaText: "Upgrade to Premium",
      ctaLink: "https://discord.gg/SAvtnnurGr",
    },
    {
      name: "Server Premium",
      price: "$9.99",
      period: "per month",
      description: "Premium protection for your entire server",
      features: [
        "Everything in Premium, plus:",
        "Multi-layer protection system",
        "Advanced threat detection AI",
        "Custom security presets",
        "Automated backup system",
        "Server analytics dashboard",
        "Dedicated support channel",
        "Early access to new features",
        "Custom moderation workflows",
        "Priority feature requests",
      ],
      ctaText: "Get Server Premium",
      ctaLink: "https://discord.gg/SAvtnnurGr",
    },
  ];

  const comparisonFeatures = [
    { name: "Anti-nuke protection", free: true, premium: true, server: true },
    {
      name: "Protection level",
      free: "Basic",
      premium: "Advanced",
      server: "Multi-layer AI",
    },
    {
      name: "Auto-mod filters",
      free: "5 basic",
      premium: "15+ advanced",
      server: "15+ advanced",
    },
    {
      name: "Custom commands",
      free: "3",
      premium: "Unlimited",
      server: "Unlimited",
    },
    { name: "24/7 protection", free: false, premium: true, server: true },
    {
      name: "Threat detection",
      free: "Basic",
      premium: "Advanced",
      server: "AI-powered",
    },
    { name: "Priority support", free: false, premium: true, server: true },
    { name: "Server-wide benefits", free: false, premium: false, server: true },
    {
      name: "Multiple bot instances",
      free: false,
      premium: false,
      server: true,
    },
    { name: "Analytics dashboard", free: false, premium: false, server: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative min-h-screen"
    >
      {/* Medium Blur Overlay (keeps tabs functional) */}
      <div className="fixed inset-0 bg-background/70 backdrop-blur-md z-10 pointer-events-none" />

      {/* Free Message – on top of blur */}
      <div className="fixed inset-0 flex items-center justify-center z-20 px-4 pointer-events-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Crown className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            All features are currently free
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
            Enjoy full access to Premium & Server features — no payment
            required.
          </p>
        </motion.div>
      </div>

      {/* Original Content – blurred but interactive */}
      <div className="relative z-0">
        {/* Hero */}
        <section className="py-16 md:py-24 border-b bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
          <motion.div
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Badge className="mb-4" data-testid="badge-premium">
              <Crown className="h-3 w-3 mr-1" />
              Premium
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the perfect plan for your needs. Upgrade anytime to unlock
              premium features and support development.
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <Card
                    className={`group h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer ${
                      tier.popular ? "border-primary shadow-lg scale-105" : ""
                    }`}
                    data-testid={`card-pricing-${index}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge
                          className="bg-primary"
                          data-testid="badge-popular"
                        >
                          <Zap className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader>
                      <CardTitle
                        className="text-2xl"
                        data-testid={`text-tier-name-${index}`}
                      >
                        {tier.name}
                      </CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-muted-foreground/70">
                          <s>{tier.price}</s>
                        </span>
                        <span className="text-muted-foreground ml-2">
                          <s>{tier.period}</s>
                        </span>
                      </div>
                      <p
                        className="text-sm text-muted-foreground mt-2"
                        data-testid={`text-tier-description-${index}`}
                      >
                        {tier.description}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-3">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span
                              className="text-sm"
                              data-testid={`text-tier-feature-${index}-${i}`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={tier.popular ? "default" : "outline"}
                        asChild
                        data-testid={`button-cta-${index}`}
                      >
                        <a
                          href={tier.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {tier.ctaText}
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 md:py-24 bg-muted/30 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Feature Comparison
              </h2>
              <p className="text-muted-foreground">
                See what's included in each plan
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Feature</th>
                    <th className="text-center py-4 px-4">Free</th>
                    <th className="text-center py-4 px-4">Premium</th>
                    <th className="text-center py-4 px-4">Server</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className="border-b hover:bg-muted/50 transition-colors"
                      data-testid={`row-comparison-${index}`}
                    >
                      <td className="py-4 px-4 font-medium">{feature.name}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof feature.free === "boolean" ? (
                          feature.free ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-sm">{feature.free}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof feature.premium === "boolean" ? (
                          feature.premium ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-sm">{feature.premium}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof feature.server === "boolean" ? (
                          feature.server ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-sm">{feature.server}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
