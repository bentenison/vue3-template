<!-- <template>
  <div class="grid p-fluid">
    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Linear Chart</h5>
        <Chart type="line" :data="lineData" :options="lineOptions"></Chart>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Bar Chart</h5>
        <Chart type="bar" :data="barData" :options="barOptions"></Chart>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card flex flex-column align-items-center">
        <h5 class="text-left w-full">Pie Chart</h5>
        <Chart type="pie" :data="pieData" :options="pieOptions"></Chart>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card flex flex-column align-items-center">
        <h5 class="text-left w-full">Doughnut Chart</h5>
        <Chart type="doughnut" :data="pieData" :options="pieOptions"></Chart>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card flex flex-column align-items-center">
        <h5 class="text-left w-full">Polar Area Chart</h5>
        <Chart
          type="polarArea"
          :data="polarData"
          :options="polarOptions"
        ></Chart>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card flex flex-column align-items-center">
        <h5 class="text-left w-full">Radar Chart</h5>
        <Chart type="radar" :data="radarData" :options="radarOptions"></Chart>
      </div>
    </div>
  </div>
</template>

<script>
// import Chart from './AppCharts.vue';
import Chart from "primevue/chart"
export default {
  components: { Chart },
  data() {
    return {
      documentStyle: null,
      textColor: null,
      textColorSecondary: null,
      surfaceBorder: null,
      lineData: {},
      pieData: {},
      polarData: {},
      barData: {},
      radarData: {},

      lineOptions: {},
      pieOptions: {},
      polarOptions: {},
      barOptions: {},
      radarOptions: {},
    };
  },
  methods: {
    setChart() {
      this.barData.value = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor:
              this.documentStyle.getPropertyValue("--primary-500"),
            borderColor: this.documentStyle.getPropertyValue("--primary-500"),
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: "My Second dataset",
            backgroundColor:
              this.documentStyle.getPropertyValue("--primary-200"),
            borderColor: this.documentStyle.getPropertyValue("--primary-200"),
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      };
      this.barOptions.value = {
        plugins: {
          legend: {
            labels: {
              fontColor: this.textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: this.textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: this.textColorSecondary,
            },
            grid: {
              color: this.surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };

      this.pieData.value = {
        labels: ["A", "B", "C"],
        datasets: [
          {
            data: [540, 325, 702],
            backgroundColor: [
              this.documentStyle.getPropertyValue("--indigo-500"),
              this.documentStyle.getPropertyValue("--purple-500"),
              this.documentStyle.getPropertyValue("--teal-500"),
            ],
            hoverBackgroundColor: [
              this.documentStyle.getPropertyValue("--indigo-400"),
              this.documentStyle.getPropertyValue("--purple-400"),
              this.documentStyle.getPropertyValue("--teal-400"),
            ],
          },
        ],
      };

      this.pieOptions.value = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: this.textColor,
            },
          },
        },
      };

      this.lineData.value = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor:
              this.documentStyle.getPropertyValue("--primary-500"),
            borderColor: this.documentStyle.getPropertyValue("--primary-500"),
            tension: 0.4,
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor:
              this.documentStyle.getPropertyValue("--primary-200"),
            borderColor: this.documentStyle.getPropertyValue("--primary-200"),
            tension: 0.4,
          },
        ],
      };

      this.lineOptions.value = {
        plugins: {
          legend: {
            labels: {
              fontColor: this.textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: this.textColorSecondary,
            },
            grid: {
              color: this.surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: this.textColorSecondary,
            },
            grid: {
              color: this.surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };

      this.polarData.value = {
        datasets: [
          {
            data: [11, 16, 7, 3],
            backgroundColor: [
              this.documentStyle.getPropertyValue("--indigo-500"),
              this.documentStyle.getPropertyValue("--purple-500"),
              this.documentStyle.getPropertyValue("--teal-500"),
              this.documentStyle.getPropertyValue("--orange-500"),
            ],
            label: "My dataset",
          },
        ],
        labels: ["Indigo", "Purple", "Teal", "Orange"],
      };

      this.polarOptions.value = {
        plugins: {
          legend: {
            labels: {
              color: this.textColor,
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: this.surfaceBorder,
            },
          },
        },
      };

      this.radarData.value = {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "My First dataset",
            borderColor: this.documentStyle.getPropertyValue("--indigo-400"),
            pointBackgroundColor:
              this.documentStyle.getPropertyValue("--indigo-400"),
            pointBorderColor:
              this.documentStyle.getPropertyValue("--indigo-400"),
            pointHoverBackgroundColor: this.textColor,
            pointHoverBorderColor:
              this.documentStyle.getPropertyValue("--indigo-400"),
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: "My Second dataset",
            borderColor: this.documentStyle.getPropertyValue("--purple-400"),
            pointBackgroundColor:
              this.documentStyle.getPropertyValue("--purple-400"),
            pointBorderColor:
              this.documentStyle.getPropertyValue("--purple-400"),
            pointHoverBackgroundColor: this.textColor,
            pointHoverBorderColor:
              this.documentStyle.getPropertyValue("--purple-400"),
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      };

      this.radarOptions.value = {
        plugins: {
          legend: {
            labels: {
              fontColor: this.textColor,
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: this.textColorSecondary,
            },
          },
        },
      };
    },
    setColorOptions() {
      this.documentStyle = getComputedStyle(document.documentElement);
      console.log("document", this.documentStyle);
      this.textColor = this.documentStyle.getPropertyValue("--text-color");
      console.log("text color", this.textColor);
      this.textColorSecondary = this.documentStyle.getPropertyValue(
        "--text-color-secondary"
      );
      this.surfaceBorder =
        this.documentStyle.getPropertyValue("--surface-border");
      this.setChart();
    },
  },
  mounted() {
    this.setColorOptions();
  },
};
</script>

<style scoped>
</style>

<!-- <script setup>
import { ref, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig } = useLayout();




const setColorOptions = () => {
    this.documentStyle = getComputedStyle(document.documentElement);
    this.textColor = this.documentStyle.getPropertyValue('--text-color');
    this.textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    this.surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');
};

const 
};

watch(
    layoutConfig.theme,
    () => {
        setColorOptions();
        setChart();
    },
    { immediate: true }
);
</script> --> -->

<template>
  <div>
    <div class="card">
      <Chart type="bar" :data="barData" :options="barOptions" class="w-100" />
    </div>
    <div class="card">
      <Chart
        type="line"
        :data="lineData"
        :options="lineOptions"
        class="h-30rem"
      />
    </div>
    <div class="card">
      <Chart
        type="bar"
        :data="columnData"
        :options="columnOption"
        class="h-30rem"
      />
    </div>
    <div class="card">
      <Chart type="bar" :data="ComboData" :options="ComboOption" class="h-30rem" />
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineData: {},
      ComboData: {},
      polarData: {},
      barData: {},
      columnData: {},

      lineOptions: {},
      ComboOption: {},
      polarOptions: {},
      barOptions: {},
      columnOption: {},
    };
  },
  mounted() {
    this.barData = this.setChartData();
    this.barOptions = this.setChartOptions();
    this.lineData = this.setLineData();
    this.lineOptions = this.setLineOptions();
    this.columnData = this.setColumnData();
    this.columnOption = this.setColumnOptions();
    this.ComboData = this.setComboData();
    this.ComboOption = this.setComboOptions();
    // console.log(getComputedStyle(document.documentElement))
    this.$primevue.changeTheme('aura-light-green', 'aura-light-amber', 'theme-link', () => {});
    console.log("theme primevue",this.$primevue)

  },
  methods: {
    setChartData() {
      return {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "Sales",
            data: [540, 325, 702, 620],
            backgroundColor: [
              "rgba(249, 115, 22, 0.2)",
              "rgba(6, 182, 212, 0.2)",
              "rgb(107, 114, 128, 0.2)",
              "rgba(139, 92, 246, 0.2)",
            ],
            borderColor: [
              "rgb(249, 115, 22)",
              "rgb(6, 182, 212)",
              "rgb(107, 114, 128)",
              "rgb(139, 92, 246)",
            ],
            borderWidth: 1,
          },
        ],
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--text-color-secondary"
      );
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

      return {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    },
    setLineData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: documentStyle.getPropertyValue("--cyan-500"),
            tension: 0.4,
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: documentStyle.getPropertyValue("--gray-500"),
            tension: 0.4,
          },
        ],
      };
    },
    setLineOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--text-color-secondary"
      );
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    },
    setColumnData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            type: "bar",
            label: "Dataset 1",
            backgroundColor: documentStyle.getPropertyValue("--cyan-500"),
            data: [50, 25, 12, 48, 90, 76, 42],
          },
          {
            type: "bar",
            label: "Dataset 2",
            backgroundColor: documentStyle.getPropertyValue("--gray-500"),
            data: [21, 84, 24, 75, 37, 65, 34],
          },
          {
            type: "bar",
            label: "Dataset 3",
            backgroundColor: documentStyle.getPropertyValue("--orange-500"),
            data: [41, 52, 24, 74, 23, 21, 32],
          },
        ],
      };
    },
    setColumnOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--text-color-secondary"
      );
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          tooltips: {
            mode: "index",
            intersect: false,
          },
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    },
    setComboData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Dataset 1',
                        borderColor: documentStyle.getPropertyValue('--orange-500'),
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        data: [50, 25, 12, 48, 56, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--gray-500'),
                        data: [21, 84, 24, 75, 37, 65, 34],
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--cyan-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };
        },
        setComboOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
  },
};
</script>
