<template>
  <div>
    <div class="grid">
      <div class="col-12 overflow-hidden">
        <Message severity="secondary" icon="pi pi-send"
          ><p style="font-size: 0.8rem">
            Hello! Welcome to FASTQ CRM! Before start please complete your
            profile to know you better.
          </p></Message
        >
        <div
          class="grid p-3 flex flex-wrap align-items-center justify-content-center"
          style="margin: -1rem"
        >
          <div class="col-12 lg:col-3 sm:col p-3">
            <div
              class="card surface-card text-500 flex justify-content-between p-3 h-full"
              style="border-radius: 1rem"
            >
              <div class="overview-info">
                <h6 class="m-0 mb-1 text-500">Orders</h6>
                <h1 class="m-0 text-500">23</h1>
              </div>
              <i class="pi pi-chart-line text-3xl"></i>
            </div>
          </div>
          <div class="col-12 lg:col-3 sm:col p-3">
            <div
              class="card text-500 flex justify-content-between p-3 h-full bg-primary"
              style="border-radius: 1rem"
            >
              <div class="overview-info">
                <h6 class="m-0 mb-1 text-500 text-white">Orders</h6>
                <h1 class="m-0 text-500 text-white">23</h1>
              </div>
              <i class="pi pi-chart-line text-3xl"></i>
            </div>
          </div>
          <div class="col-12 lg:col-3 sm:col p-3">
            <div
              class="card text-500 flex justify-content-between p-3 h-full bg-black-alpha-10"
              style="border-radius: 1rem"
            >
              <div class="overview-info">
                <h6 class="m-0 mb-1 text-500">Orders</h6>
                <h1 class="m-0 text-500">23</h1>
              </div>
              <i class="pi pi-chart-line text-3xl"></i>
            </div>
          </div>
          <div class="col-12 lg:col-3 sm:col p-3">
            <div
              class="card text-500 flex justify-content-between p-3 h-full bg-black-alpha-50"
              style="border-radius: 1rem"
            >
              <div class="overview-info">
                <h6 class="m-0 mb-1 text-500 text-white">Orders</h6>
                <h1 class="m-0 text-500 text-white">23</h1>
              </div>
              <i class="pi pi-chart-line text-3xl text-white"></i>
            </div>
          </div>
          <div class="col-12 lg:col-3 sm:col p-3">
            <div
              class="card text-500 flex justify-content-between p-3 h-full bg-warning"
              style="border-radius: 1rem"
            >
              <div class="overview-info">
                <h6 class="m-0 mb-1 text-500 text-white">Orders</h6>
                <h1 class="m-0 text-500 text-white">23</h1>
              </div>
              <i class="pi pi-chart-line text-3xl text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="lg:flex-1">
      <div class="card w-100">
        <Chart
          type="bar"
          :data="barData"
          :options="barOptions"
          class="h-20rem flex align-items-center justify-content-center"
        />
      </div>
    </div>
    <div class="lg:flex-1">
      <div class="card">
        <Chart
          type="bar"
          :data="ComboData"
          :options="ComboOption"
          class="h-20rem flex align-items-center justify-content-center"
        />
      </div>
    </div> -->
    </div>
    <div class="grid p-fluid">
      <div class="col-12 xl:col-6">
        <div class="card">
          <h5>Bar Chart</h5>
          <Chart
            type="bar"
            :data="barData"
            :options="barOptions"
            style="height: 17rem"
          ></Chart>
        </div>
      </div>
      <div class="col-12 xl:col-6">
        <div class="card flex flex-column align-items-center">
          <h5 class="text-left w-full">Linear Chart</h5>
          <Chart
            type="line"
            :data="lineData"
            :options="lineOptions"
            class="w-100"
            style="height: 17rem"
          ></Chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "primevue/message";

export default {
  components: { Message },
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
    this.$primevue.changeTheme(
      "aura-light-green",
      "aura-light-amber",
      "theme-link",
      () => {}
    );
    console.log("theme primevue", this.$primevue);
  },
  methods: {
    setChartData() {
      return {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "Sales",
            data: [540, 325, 702, 620],
            backgroundColor: ["--primary-500", "--primary-200"],
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
            backgroundColor: documentStyle.getPropertyValue("--primary-500"),
            borderColor: documentStyle.getPropertyValue("--primary-500"),
            tension: 0.4,
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue("--primary-200"),
            borderColor: documentStyle.getPropertyValue("--primary-200"),
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
            type: "line",
            label: "Dataset 1",
            borderColor: documentStyle.getPropertyValue("--orange-500"),
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: [50, 25, 12, 48, 56, 76, 42],
          },
          {
            type: "bar",
            label: "Dataset 2",
            backgroundColor: documentStyle.getPropertyValue("--gray-500"),
            data: [21, 84, 24, 75, 37, 65, 34],
            borderColor: "white",
            borderWidth: 2,
          },
          {
            type: "bar",
            label: "Dataset 3",
            backgroundColor: documentStyle.getPropertyValue("--cyan-500"),
            data: [41, 52, 24, 74, 23, 21, 32],
          },
        ],
      };
    },
    setComboOptions() {
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
  },
};
</script>

<style scoped></style>