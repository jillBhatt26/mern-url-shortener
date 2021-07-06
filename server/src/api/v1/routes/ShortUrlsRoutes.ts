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

// Swagger Docs

/**
 * openapi: 3.0.0
 * info:
 *      title: Url Shortener API
 *      description: API to generate and manage short urls
 *      version: 0.1.0
 *
 *  servers:
 *      -url: http://localhost:5000/shortUrls
 *      description: Development server url
 *
 *  paths:
 *      /shortUrls:
 *          get:
 *              summary: Returns a list of all available shortUrls
 *              responses:
 *                  '200':
 *                      description: A JSON array of short urls
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      type: string
 */

// routes definitions
router.get('/home', Home);

router.get('/', FetchShortUrlsAll);

router.get('/:id', FetchShortUrl);

router.post('/create', CreateShortUrl);

router.put('/update/:id', UpdateSlug);

router.delete('/delete/:id', DeleteShortUrl);

// router definitions
export default router;
