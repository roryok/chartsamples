// TWDonut.js
import { Doughnut } from 'vue-chartjs'

console.log("TWDonut.js")


export default {
  extends: Doughnut,
  props: [
      'data', 'labels', 'colors'
  ],
  mounted () {
    let vm = this;
    // Overwriting base render method with actual data.
    this.renderChart(
        {
            labels: vm.labels,

            datasets: [
                {
                    backgroundColor: vm.colors,
                    data: vm.data
                }
            ],
        }, { cutoutPercentage: 90 }
    )
  }
}