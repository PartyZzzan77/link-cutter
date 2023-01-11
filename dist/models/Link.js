import { Schema, model } from 'mongoose';
const LinkSchema = new Schema({
    cipher: { type: String, unique: true },
    source: { type: String },
    timestamp: { type: Date, default: Date.now() }
});
export const Link = model('Link', LinkSchema);
