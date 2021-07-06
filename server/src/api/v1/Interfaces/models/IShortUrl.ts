import { Document } from 'mongoose';

interface IShortUrl extends Document {
    long: string;
    slug: string;
}

export default IShortUrl;
