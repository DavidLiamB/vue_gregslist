<template>
  <div class="component">
    <div class="container-fluid">
      <section class="row">
        <div class="col-12 p-4">
          <h1>This is the Jobs Page</h1>
        </div>
      </section>
      <section class="row">
        <div v-for="job in jobs" :key="job.id" class="col-6">
          <JobsCard :job="job" />
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { jobsService } from "../services/JobsService.js";
import JobsCard from "../components/JobsCard.vue";
export default {
  setup() {
    async function getJobs() {
      try {
        await jobsService.getJobs();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getJobs();
    });
    return {
      jobs: computed(() => AppState.jobs)
    };
  },
  components: { JobsCard }
};
</script>


<style lang="scss" scoped></style>