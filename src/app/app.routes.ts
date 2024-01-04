import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent)
    },
    {
        path: "kanjis/:kanji",
        loadComponent: () => import("./pages/kanji/kanji.component").then(m => m.KanjiComponent)
    },
    {
        path: "**",
        redirectTo: "/"
    }
];
