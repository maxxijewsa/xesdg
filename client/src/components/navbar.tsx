import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/commands", label: "Commands" },
    { href: "/developers", label: "Developers" },
    { href: "/premium", label: "Premium" },
    { href: "/privacy", label: "Privacy" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            data-testid="link-home"
            className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
          >
            <img src="/bot-icon.png" alt="LegionX Logo" className="h-10 w-10 md:h-12 md:w-12" />
            <span className="font-display text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              LegionX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="hover-elevate"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild data-testid="button-add-to-discord">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1428989669688873083"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Discord
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover-elevate ${
                  isActive(link.href) ? "text-primary bg-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="w-full"
                data-testid="button-mobile-theme-toggle"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
              <Button asChild className="w-full" data-testid="button-mobile-add-to-discord">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1428989669688873083"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Discord
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
