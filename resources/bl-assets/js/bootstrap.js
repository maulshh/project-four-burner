/**
 * Axios
 */

window.axios = require('axios')

/**
 * Vue
 */

window.Vue = require('vue')
window.Vue.prototype.$http = window.axios
window.Vue.http = window.axios

window.store = {
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        this.loading = false
    },
    methods: {
    }
};

//Config
Vue.config.devtools = true
Vue.config.debug = true
Vue.config.silent = false