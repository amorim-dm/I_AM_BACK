<template>
    <div class="timer">
        <vue-countdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds, milliseconds }">
            {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
        </vue-countdown>
    </div>
</template>

<script>
export default {
  data() {
    const now = new Date();
    const comeback = new Date(2023, 6, 13, 18);

    return {
      time: comeback - now,
    };
  },
};
</script>