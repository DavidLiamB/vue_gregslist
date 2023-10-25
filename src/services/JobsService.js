import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"

class JodsService {
  async getJobs() {
    const res = await api.get('api/jobs')
    const jobs = res.data.map(pojo => new Job(pojo))
    AppState.jobs = jobs
  }
}

export const jobsService = new JodsService()