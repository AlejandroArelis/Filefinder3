import { Route } from "./route.model";

export type Navbar = {
  title: string;
  return: boolean;
  routes: Route[];
}