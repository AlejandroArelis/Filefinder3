import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent)
    },
    {
        path: "nihongo",
        loadComponent: () => import("./pages/nihongo/nihongo.component").then(c => c.NihongoComponent),
        children: [{
            path: "kanjis",
            loadComponent: () => import("./pages/nihongo/kanjis/kanjis.component").then(c => c.KanjisComponent)
        }, {
            path: "kanji/:id",
            loadComponent: () => import("./pages/nihongo/kanjis/detail/detail.component").then(c => c.DetailComponent)
        }, {
            path: "verbs",
            loadComponent: () => import("./pages/nihongo/verbs/verbs.component").then(c => c.VerbsComponent)
        }, {
            path: "nouns",
            loadComponent: () => import("./pages/nihongo/nouns/nouns.component").then(c => c.NounsComponent)
        }, {
            path: "**",
            redirectTo: "kanjis"
        }]
    },
    {
        path: "**",
        redirectTo: "/"
    }
];
