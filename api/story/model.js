import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const StoryPointSchema = new Schema({
  title: String,
  description: String,
  data: [{type: Schema.Types.Mixed}],
  columns: [String],
  dimensions: Schema.Types.Mixed
});
const StorySchema = new Schema({
  title: String,
  description: String,
  template: String,
  options: Schema.Types.Mixed,
  storyPoints: [StoryPointSchema]
});

export default mongoose.model('Story', StorySchema);