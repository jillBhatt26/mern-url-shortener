// imports
import { Schema, model } from 'mongoose';

// interface
import IShortUrl from '../Interfaces/models/IShortUrl';

// schema definition
const ShortUrlSchema = new Schema<IShortUrl>({
    long: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        maxLength: 6
    }
});

// model creation
const ShortUrls = model<IShortUrl>('ShortUrls', ShortUrlSchema);

// model export
export default ShortUrls;
