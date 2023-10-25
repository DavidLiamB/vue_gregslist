<template>
  <div class="card mb-2 p-3">
    <h1>{{ job.jobTitle }}</h1>
    <h3>{{ job.company }}</h3>
    <h5>{{ job.hours }} hours a week,{{ job.rate }}$ an hour</h5>
    <p>{{ job.description }}</p>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Job } from "../models/Job.js";
export default {
  props: {
    job: { type: Job, required: true }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
</style>