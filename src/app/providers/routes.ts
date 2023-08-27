const Home = () => import("@/page/Home/Home.vue");
const About = () => import("@/page/About/About.vue");
import {RoutePath} from "@/shared/lib";

export const routes = [
    {
        path: RoutePath.main,
        component: Home,
    },
    {
        path: RoutePath.about,
        component: About,
    },
];