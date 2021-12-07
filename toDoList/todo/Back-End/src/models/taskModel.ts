import mongoose, { Schema } from 'mongoose';

const TaskSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('task', TaskSchema);
