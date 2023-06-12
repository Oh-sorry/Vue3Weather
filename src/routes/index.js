import {createRouter, createWebHashHistory} from "vue-router";
import Home from "~/pages/Home";

export default createRouter ({
    // hash모드;
    history : createWebHashHistory(),

    // pages : page 구분
    routes: [
        {
            // 페이지 경로
            path: "/",
            name: Home, 
            component: Home,
        },
    ],
});