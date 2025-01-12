import { createRouter, createWebHistory } from "vue-router";
import TournamentTree from "@/views/TournamentTree.vue";
import Home from "@/views/Home.vue";
import Welcome from "@/views/GetStarted.vue";
import About from "@/views/About.vue";
import GetStarted from "@/views/GetStarted.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/tournament",
        name: "TournamentTree",
        component: TournamentTree
    },
    {
        path: "/welcome",
        name: "Welcome",
        component: Welcome
    },
    {
        path: "/get-started",
        name: "GetStarted",
        component: GetStarted
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;