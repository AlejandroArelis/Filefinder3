export interface Navbar {
  title: string;
  return: boolean;
  routes: Route[];
}

export interface Route {
  text: string;
  value: string;
}