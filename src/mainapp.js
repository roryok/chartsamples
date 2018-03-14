import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import CommitChart from './CommitChart'
import TWDonut from './TWDonut'

Vue.use(VueChartkick, { Chartkick })

const app = new Vue({
    el: "#app",
    components: {
        'teamwork-commit-chart' : CommitChart,
        'teamwork-donut' : TWDonut
    },
    data: {
        message: 'main.js',
        chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    }
})

console.log("main.js")