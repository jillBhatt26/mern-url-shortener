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

router.get('/', FetchShortUrlsAll);

router.get('/:id', FetchShortUrl);

router.post('/create', CreateShortUrl);

router.put('/update/:id', UpdateSlug);

router.delete('/delete/:id', DeleteShortUrl);

// router definitions
export default router;
