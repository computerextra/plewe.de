import BunterkinderbehandlungsraumMitSpielerischenElementen from "@/assets/bunter-kinderbehandlungsraum-mit-spielerischen-ele.jpg";
import KinderfreundlicheZahnarztpraxisMitBuntenFarben from "@/assets/kinderfreundliche-zahnarztpraxis-mit-bunten-farben.jpg";
import KinderfreundlicherWartebereichMitSpielecke from "@/assets/kinderfreundlicher-wartebereich-mit-spielecke.jpg";
import ModerneZahnarztpraxisEmpfang from "@/assets/moderne-zahnarztpraxis-empfang-mit-freundlicher-at.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  Heart,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Kinder- und Jugendzahnheilkunde",
    description:
      "Speziell auf die Bedürfnisse von Kindern und Jugendlichen abgestimmte Behandlungen",
    icon: Heart,
    color: "bg-primary",
  },
  {
    title: "Prophylaxe",
    description: "Vorbeugende Maßnahmen für gesunde Zähne von Anfang an",
    icon: Shield,
    color: "bg-secondary",
  },
  {
    title: "Implantologie",
    description: "Moderne Zahnimplantate für dauerhafte Lösungen",
    icon: Sparkles,
    color: "bg-primary",
  },
  {
    title: "Narkosebehandlung",
    description: "Schonende Behandlung unter Vollnarkose für ängstliche Kinder",
    icon: Users,
    color: "bg-secondary",
  },
  {
    title: "Endodontie",
    description: "Wurzelkanalbehandlungen mit modernster Technik",
    icon: Star,
    color: "bg-primary",
  },
  {
    title: "SpecialCare",
    description: "Behindertengerechte Behandlung mit besonderer Fürsorge",
    icon: Heart,
    color: "bg-secondary",
  },
];

const openingHours = [
  { day: "Montag", hours: "08:00 - 12:00 & 14:00 - 19:00" },
  { day: "Dienstag", hours: "08:00 - 12:00 & 14:00 - 18:00" },
  { day: "Mittwoch", hours: "08:00 - 12:00 & 14:00 - 18:00" },
  { day: "Donnerstag", hours: "08:00 - 12:00 & 14:00 - 19:00" },
  { day: "Freitag", hours: "08:00 - 12:00" },
  { day: "Samstag", hours: "Geschlossen" },
  { day: "Sonntag", hours: "Geschlossen" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-background to-muted py-16 lg:py-24"
        id="home"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Willkommen bei Dr. Andrea Plewe und Dr. Jens Plewe
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Ihre Kinderzahnarztpraxis in Kassel. Wir sorgen dafür, dass der
                Zahnarztbesuch für Ihr Kind zu einem positiven Erlebnis wird!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  asChild
                >
                  <a
                    href="tel:05619885454"
                    className="flex items-center gap-2"
                    aria-label="Jetzt anrufen: 0561 9885454"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="#services"
                    aria-label="Mehr über unsere Leistungen erfahren"
                  >
                    Unsere Leistungen
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={KinderfreundlicheZahnarztpraxisMitBuntenFarben}
                alt="Kinderfreundliche Zahnarztpraxis mit bunten Behandlungsräumen und spielerischen Elementen"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sprechzeiten */}
      <section className="py-16 bg-card" aria-labelledby="opening-hours-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="opening-hours-title"
              className="text-3xl font-bold text-card-foreground mb-4"
            >
              Unsere Sprechzeiten
            </h2>
            <p className="text-muted-foreground text-lg">
              Wir sind gerne für Sie und Ihre Kinder da
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                    >
                      <span className="font-medium text-card-foreground">
                        {schedule.day}
                      </span>
                      <span
                        className={`${
                          schedule.hours === "Geschlossen"
                            ? "text-muted-foreground"
                            : "text-primary font-medium"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Notfälle:</strong> Außerhalb der Sprechzeiten wenden
                    Sie sich bitte an den ärztlichen Notdienst unter 116117
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-16 bg-background"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-title"
              className="text-3xl font-bold text-foreground mb-4"
            >
              Unsere Leistungen
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Von der ersten Vorsorgeuntersuchung bis zur komplexen Behandlung -
              wir bieten das komplette Spektrum der Kinderzahnheilkunde
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <IconComponent
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Praxis Gallery */}
      <section className="py-16 bg-muted" aria-labelledby="gallery-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="gallery-title"
              className="text-3xl font-bold text-foreground mb-4"
            >
              Unsere Praxis
            </h2>
            <p className="text-muted-foreground text-lg">
              Schauen Sie sich unsere kinderfreundlichen Räumlichkeiten an
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group">
              <img
                src={BunterkinderbehandlungsraumMitSpielerischenElementen}
                alt="Bunter Behandlungsraum mit kinderfreundlicher Ausstattung und spielerischen Wandmalereien"
                className="rounded-lg shadow-md w-full h-64 object-cover group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <Badge variant="secondary" className="text-sm font-medium">
                  Behandlungsraum 1
                </Badge>
              </div>
            </div>
            <div className="relative group">
              <img
                src={KinderfreundlicherWartebereichMitSpielecke}
                alt="Wartebereich mit bunten Sitzmöbeln, Spielecke und kindgerechter Dekoration"
                className="rounded-lg shadow-md w-full h-64 object-cover group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <Badge variant="secondary" className="text-sm font-medium">
                  Wartebereich
                </Badge>
              </div>
            </div>
            <div className="relative group">
              <img
                src={ModerneZahnarztpraxisEmpfang}
                alt="Moderner Empfangsbereich mit freundlicher Atmosphäre und kinderfreundlicher Gestaltung"
                className="rounded-lg shadow-md w-full h-64 object-cover group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <Badge variant="secondary" className="text-sm font-medium">
                  Empfang
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary" aria-labelledby="contact-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="contact-title"
            className="text-3xl font-bold text-primary-foreground mb-4"
          >
            Bereit für den nächsten Termin?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 text-pretty">
            Vereinbaren Sie noch heute einen Termin für Ihr Kind. Wir freuen uns
            auf Ihren Besuch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="tel:05619885454"
                className="flex items-center gap-2"
                aria-label="Termin vereinbaren: 0561 9885454"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                0561 9885454
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
