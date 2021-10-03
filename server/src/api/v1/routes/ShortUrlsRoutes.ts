// router
import { Router } from 'express';

// controllers
import {
    Home,
    FetchShortUrlsAll,
    FetchShortUrl,
    CreateShortUrl,
    UpdateSlug,
    DeleteShortUrl
} from '../controllers/ShortUrlControllers';

// router init
const router: Router = Router();

// routes definitions
router.get('/home', Home);

router.get('/short-urls', FetchShortUrlsAll);

router.post('/create', CreateShortUrl);

router.get('/short-urls/:id', FetchShortUrl);

router.put('/update/:id', UpdateSlug);

router.delete('/delete/:id', DeleteShortUrl);

// router definitions
export default router;
