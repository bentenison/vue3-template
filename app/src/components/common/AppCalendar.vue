<template>
  <div>
    <vue-cal
      class="vuecal--blue-theme overflow-y-hidden"
      selected-date="2018-11-19"
      :time-from="10 * 60"
      :events="events"
      editable-events="editable-events"
      events-count-on-year-view="events-count-on-year-view"
      events-on-month-view="short"
      @cell-dblclick="createEvent($event)"
    />
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
export default {
  components: {
    VueCal,
  },
  data() {
    return {
      vuecalBG: null,
      timeCellHeight: 40,
      events: [
        {
          start: "2018-11-19 10:35",
          end: "2018-11-19 11:30",
          title: "Doctor appointment",
        },
        {
          start: "2018-11-19 18:30",
          end: "2018-11-19 19:15",
          title: "Dentist appointment",
        },
        {
          start: "2018-11-20 18:30",
          end: "2018-11-20 20:30",
          title: "Crossfit",
        },
        {
          start: "2018-11-21 11:00",
          end: "2018-11-21 13:00",
          title: "Brunch with Jane",
        },
        {
          start: "2018-11-21 19:30",
          end: "2018-11-21 23:00",
          title: "Swimming lesson",
        },
        {
          start: "2019-09-30 19:30",
          end: "2019-09-30 23:00",
          title: "Swimming lesson",
        },
        {
          start: "2018-11-19 12:00",
          end: "2018-11-19 14:00",
          title: "LUNCH",
          class: "lunch",
          background: true,
        },
        {
          start: "2018-11-20 12:00",
          end: "2018-11-20 14:00",
          title: "LUNCH",
          class: "lunch",
          background: true,
        },
      ],
    };
  },
  methods: {
    scrollToOfficeHours() {
      let timeCellHeight = this.timeCellHeight;
      let hours = 8;
      setTimeout(() => {
        this.$refs.vuecal.$el
          .querySelector(".vuecal__bg")
          .scrollTo({ top: hours * timeCellHeight, behavior: "smooth" });
      }, 280);
    },
    createEvent(e) {
      console.log("event object", e);
    },
  },
};
</script>

<style lang="scss">
.vuecal__header{
    overflow: hidden;

}
.vuecal {
  margin: auto;
  max-width: 1300px;
  max-height: 662px;
}

.vuecal__event {
  background-color: rgba(173, 216, 230, 0.5);
  box-sizing: border-box;
  padding: 5px;

  &.lunch {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      #f2f2f2 10px,
      #f2f2f2 20px
    );
  }
}
.vuecal__cell {
  min-height: 50px;
  height: auto;
  overflow: hidden;
}
.vuecal__cell-events-count{
    overflow: hidden;
}
</style>