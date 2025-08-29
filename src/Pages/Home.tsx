import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Ambulance, Clock, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="mt-10">
      {/* TODO: Webseite muss komplett Barierefrei sein! */}
      <h1>Willkommen</h1>
      <h2 className="text-center max-w-lg mx-auto">
        auf der Webseite der Kinderzahnarztpraxis Dr. Andrea Plewe & Dr. Jens
        Plewe
      </h2>
      <div className="grid grid-cols-4 gap-8 mt-10">
        {/* Leistungen */}
        <Card className="col-span-2 row-span-2">
          <CardHeader>
            <CardTitle>Unsere Leistungen</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Kinder- und Jugendzahnheilkunde</li>
              <li>Prophylaxe</li>
              <li>Impantologie</li>
              <li>Narkosebehandlung</li>
              <li>Endodontie</li>
              <li>SpecialCare (Behindertengerecht)</li>
            </ul>
            <p>
              Diese Seite wird so angepasst, dass sie Barrierefrei ist. <br />
              Folgende Dinge werden umgesetzt:
            </p>
            <ol className="list-decimal list-inside">
              <li>Screenreader Kompatibilität</li>
              <li>Tastatursteuerung</li>
              <li>Einfache Sprache?</li>
              <li>Anpassungen für Smartphone oder Tablet Nutzer</li>
            </ol>
          </CardContent>
        </Card>
        {/* CTA - Kontakt */}
        <Card className="col-span-2 row-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-10 h-10" /> Ihr Kontakt zu uns
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-8">
            <Button asChild>
              <a href="#">
                <Phone /> 0561 / 123 456
              </a>
            </Button>
            <Button asChild>
              <Link to="/Kontakt">
                <Mail />
                Kontaktformular
              </Link>
            </Button>
          </CardContent>
        </Card>
        {/* CTA - Öffnungszeiten */}
        <Card className="col-span-1 row-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-10 h-10" /> Unsere Sprechzeiten
            </CardTitle>
          </CardHeader>
          <CardContent>
            Montag - Freitag: 09:00 - 10:00 Uhr <br />
            Oder nach Absprache
          </CardContent>
        </Card>
        {/* CTA - Kontakt */}
        <Card className="col-span-1 row-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ambulance className="h-10 w-10" />
              Notfall Kontakt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a href="#">0561 / 456 789</a>
            </Button>
          </CardContent>
        </Card>
        {/* Bilder der Praxis */}
        <Card className="col-span-4 row-span-2">
          <CardHeader>
            <CardTitle>Unsere Praxis</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel
              plugins={[
                Fade(),
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full max-w-lg mx-auto flex justify-center items-center"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
