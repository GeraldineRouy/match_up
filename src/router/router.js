import TournamentTree from "@/views/TournamentTree.vue";
import Home from "@/views/Home.vue";

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
    }
]