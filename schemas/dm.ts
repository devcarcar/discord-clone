import { Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const dm = new Schema({
  dmId: {
    type: String,
    required: true,
    default: () => uuidv4(),
    unique: true,
  },
  messages: {
    type: Array,
    required: true,
  },
});

const Dm = models?.Dm || model('Dm', dm);

export default Dm;
