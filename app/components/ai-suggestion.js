import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class AiSuggestionComponent extends Component {
  @service store;

  @tracked modalOpen;
  @tracked feedbackText;
  @tracked rating;
  @tracked updatedFeedbacks;

  get feedbacks() {
    return this.updatedFeedbacks || this.args.suggestion.feedbacks;
  }

  @action
  onAccept() {
    this.rating = +1;
    this.modalOpen = true;
  }
  @action
  onReject() {
    this.rating = -1;
    this.modalOpen = true;
  }
  @action
  closeModal() {
    this.modalOpen = false;
  }
  @action
  async onSubmit() {
    const feedback = this.store.createRecord('annotation-feedback', {
      feedback: this.feedbackText,
      rating: this.rating,
    });
    await feedback.save();
    feedback.annotation = this.args.suggestion;
    await feedback.save();
    await this.args.suggestion.feedbacks.reload();

    this.updatedFeedbacks = this.args.suggestion.feedbacks;

    this.modalOpen = false;
  }

  @action
  handleFeedbackChange(event) {
    this.feedbackText = event.target.value;
  }
}
