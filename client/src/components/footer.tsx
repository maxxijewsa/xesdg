import { Link } from "wouter";
import { SiDiscord } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/bot-icon.png" alt="LegionX" className="h-10 w-10" />
              <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                LegionX
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ultimate Discord bot for server protection and management.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/commands"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-commands"
                >
                  Commands
                </Link>
              </li>
              <li>
                <Link
                  href="/premium"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-premium"
                >
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/SAvtnnurGr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-support"
                >
                  Support Server
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/SAvtnnurGr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-documentation"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/SAvtnnurGr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-updates"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LegionX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
