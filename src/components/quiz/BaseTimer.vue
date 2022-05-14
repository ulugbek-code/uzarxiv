<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="45"
        ></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label">{{ formattedTimeLeft }}</span>
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 300;
const ALERT_THRESHOLD = 60;
//if you use const inside script you can use it inside option API as variable name without "this"

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};
export default {
  props: ["limit"],
  data() {
    return {
      timePassed: 0,
      timerInterval: null,
    };
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeLeft() {
      return this.limit - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / this.limit;
      return rawTimeFraction - (1 / this.limit) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    },
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
      if (newValue === 300) {
        this.$emit("lessTime");
      }
    },
  },

  mounted() {
    this.startTimer();
  },
  unmounted() {
    clearInterval(this.timerInterval);
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
      this.$emit("submitData");
      //   this.$router.replace("/");
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
  },
};
</script>

<style scoped>
.base-timer {
  position: fixed;
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
}

.base-timer__circle {
  fill: none;
  stroke: none;
}
.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}
.base-timer__label {
  position: absolute;

  /* Size should match the parent container */
  width: 120px;
  height: 120px;
  /* Keep the label aligned to the top */
  top: 0;
  /* Create a flexible box that centers content vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Sort of an arbitrary number; adjust to your liking */
  font-size: 32px;
}
.base-timer__path-remaining {
  /* Just as thick as the original ring was 7*/
  stroke-width: 7px;
  /* Rounds the line endings to create a seamless circle */
  stroke-linecap: round;
  /* Makes sure the animation starts at the top of the circle */
  transform: rotate(90deg);
  transform-origin: center;
  /* One second aligns with the speed of the countdown timer */
  transition: 1s linear all;
  /* Allows the ring to change color when the color value updates */
  stroke: rgb(65, 184, 131);
}
.base-timer__svg {
  /* Flips the svg and makes the animation to move left-to-right*/
  transform: scaleX(-1);
}
.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}
.base-timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: currentColor;
}

.base-timer__path-remaining.green {
  color: rgb(65, 184, 131);
}

.base-timer__path-remaining.orange {
  color: #ffc107;
}

.base-timer__path-remaining.red {
  color: #dc3545;
}
@media screen and (max-width: 1440px) {
  .base-timer {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
