import { Link, Outlet } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";

export default function Layout() {
  return (
    <div className="bg-slate-200 text-slate-900 min-w-screen min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center pt-5">
          <NavigationMenu
            viewport={false}
            className="bg-background rounded-2xl"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/">Startseite</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/Kontakt">Kontakt</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a
                    href="https://computer-extra.de/Datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutz
                  </a>
                  {/* <Link to="/Datenschutz">Datenschutz</Link> */}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  {/* <Link to="/Impressum">Impressum</Link> */}
                  <a
                    href="https://computer-extra.de/Impressum"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Impressum
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
