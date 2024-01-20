import { Route } from "@angular/router";

export type Navbar = {
  title: string;
  return: boolean;
  routes: Route[];
}