import { Route } from "@models/route.model";

export interface Navbar {
  title?: string;
  return?: boolean;
  routes?: Route[];
}