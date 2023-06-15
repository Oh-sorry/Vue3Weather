import {createStore} from "vuex";
import openWeatherApi from  "./openWeatherApi.js";

export default createStore ({
    modules: {
        openWeatherApi,
    }
})