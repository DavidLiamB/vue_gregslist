export class Job {
  constructor(data) {
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }
}