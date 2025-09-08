import { MapPin, Phone } from "lucide-react";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className="bg-card border-b border-border"
        role="navigation"
        aria-label="Hauptnavigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">
                Kinderzahnärzte Plewe
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Zur Startseite"
                >
                  Startseite
                </a>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Zu unseren Leistungen"
                >
                  Leistungen
                </a>
                <a
                  target="_blank"
                  href="https://computer-extra.de/Impressum"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Zum Impressum"
                >
                  Impressum
                </a>
                <a
                  target="_blank"
                  href="https://computer-extra.de/Datenschutz"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Zur Datenschutzerklärung"
                >
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />

      {/* Footer */}
      <footer
        className="bg-card border-t border-border py-12"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Dr. Andrea Plewe und Dr. Jens Plewe
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ihre Kinderzahnarztpraxis in Kassel für eine entspannte und
                professionelle Behandlung.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Wolfhager Str. 380, 34128 Kassel</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Kontakt
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <a
                    href="tel:05619885454"
                    className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="Anrufen: 0561 9885454"
                  >
                    0561 / 9885454
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:info@example.de"
                    className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="E-Mail senden an info@example.de"
                  >
                    info@example.de
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Rechtliches
              </h3>
              <div className="space-y-2">
                <div>
                  <a
                    target="_blank"
                    href="https://computer-extra.de/Impressum"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="Zum Impressum"
                  >
                    Impressum
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://computer-extra.de/Datenschutz"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="Zur Datenschutzerklärung"
                  >
                    Datenschutzerklärung
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Dr. Andrea Plewe und Dr. Jens
              Plewe. Alle Rechte vorbehalten. | Designed von{" "}
              <a
                href="https://computer-extra.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Computer Extra GmbH
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
