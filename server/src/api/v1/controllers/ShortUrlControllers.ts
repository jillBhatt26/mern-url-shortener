// imports
import ShortUrls from '../models/ShortUrls';

import { nanoid } from 'nanoid';

import config from '../../../config/Environment';

// default types
import { Response, Request } from 'express';

// namespaces
import NExpress from '../../../global/namespaces/NExpress';

// interfaces
import ICreateReqBody from '../Interfaces/controllers/ICreateReqBody';
import IUrlParams from '../Interfaces/controllers/IUrlParams';
import IUpdateReqBody from '../Interfaces/controllers/IUpdateReqBody';
import IShortUrl from '../Interfaces/models/IShortUrl';

// controllers definitions
const Home = async (req: Request, res: Response) => {
    return res.json({ msg: 'Hello to my TypeScript Setup!!' });
};

const FetchShortUrlsAll = async (req: Request, res: Response) => {
    try {
        const shortUrls: Array<IShortUrl> = await ShortUrls.find({});

        const data = shortUrls.map(url => {
            const info = {
                id: url._id,
                long: url.long,
                short: `${config.HOST}/${url.slug}`
            };

            return info;
        });

        return res.json({ urls: data });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

const FetchShortUrl = async (req: NExpress.IRequest, res: Response) => {
    const { id }: IUrlParams = req.params;

    try {
        const shortUrl: IShortUrl | null = await ShortUrls.findById(id);

        const data = {
            id: shortUrl!._id,
            long: shortUrl!.long,
            short: `${config.HOST}/${shortUrl!.slug}`
        };

        console.log(data);

        return res.json({ url: data });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

const CreateShortUrl = async (req: Request, res: Response) => {
    const { long }: ICreateReqBody = req.body;

    try {
        const newShortUrl = await ShortUrls.create({
            long: `https://${long}`,
            slug: nanoid(6)
        });

        return res.json({ url: newShortUrl });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

const UpdateSlug = async (req: NExpress.IRequest, res: Response) => {
    const { id }: IUrlParams = req.params;

    const { slug }: IUpdateReqBody = req.body;

    // check if the custom slug is available

    try {
        const urls = await ShortUrls.find({ slug });

        if (urls.length) {
            return res.json({ error: 'Slug is already taken' });
        }

        const newShortUrl = await ShortUrls.findByIdAndUpdate(
            id,
            { slug },
            {
                new: true
            }
        );

        return res.json({ url: newShortUrl });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

const DeleteShortUrl = async (req: NExpress.IRequest, res: Response) => {
    const { id }: IUrlParams = req.params;

    try {
        const newShortUrl = await ShortUrls.findByIdAndDelete(id);

        return res.json({ url: newShortUrl });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

// controllers exports
export {
    Home,
    FetchShortUrlsAll,
    FetchShortUrl,
    CreateShortUrl,
    UpdateSlug,
    DeleteShortUrl
};
