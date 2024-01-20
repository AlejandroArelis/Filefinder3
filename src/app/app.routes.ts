import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/home/home.component")
    },
    {
        path: "nihongo",
        loadComponent: () => import("./pages/nihongo/nihongo.component"),
        children: [{
            path: "kanjis",
            loadComponent: () => import("./pages/nihongo/kanjis/kanjis.component")
        }, {
            path: "kanji/:id",
            loadComponent: () => import("./pages/nihongo/kanjis/detail/detail.component")
        }, {
            path: "verbs",
            loadComponent: () => import("./pages/nihongo/verbs/verbs.component")
        }, {
            path: "nouns",
            loadComponent: () => import("./pages/nihongo/nouns/nouns.component")
        }, {
            path: "",
            redirectTo: "kanjis",
            pathMatch: "full"
        }]
    },
    // {
    //     path: "",
    //     redirectTo: "nihongo",
    //     pathMatch: "full"
    // }
];
