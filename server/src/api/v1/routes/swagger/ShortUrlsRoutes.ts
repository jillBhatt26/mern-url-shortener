// COMPONENTS DECLARATION

// SCHEMA

/**
 * @swagger
 * components:
 *      schemas:
 *          ShortUrl:
 *              type: object
 *              required:
 *                  - long
 *                  - slug
 *
 *              properties:
 *                  long:
 *                      type: string
 *                      description: The long form of the url to be shortened
 *
 *                  slug:
 *                      type: string
 *                      description: The 6 character string to represent the long url
 */

// TAGS

/**
 * @swagger
 * tags:
 *      name: ShortURL
 *      description: The ShortURL generator API
 */

// APIs

// Home

/**
 * @swagger
 * /home:
 *      get:
 *          summary: The Home route sending the welcome message
 *          tags: [ShortURL]
 *          responses:
 *              200:
 *                  description: Simply prints the welcome message
 */

// Fetch All

/**
 * @swagger
 * /:
 *      get:
 *          summary: Queries the database and fetches every document of ShortUrls
 *          tags: [ShortURL]
 *          responses:
 *              200:
 *                  description: Fetches a list of documents of ShortUrls
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/ShortUrl'
 */

// Fetch Single

/**
 * @swagger
 * /{id}:
 *      get:
 *          summary: Fetches the document of ShortUrl with the id passed in request params
 *          tags: [ShortURL]
 *
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The string having the mongodb document's ObjectId value
 *
 *          response:
 *              200:
 *                  description: Successfully found the document with the given id
 *                  content:
 *                      application/json:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/ShortUrl'
 *              404:
 *                  description: The document with the given id was not found in mongodb
 */

// Create New Short URL

/**
 * @swagger
 * /create:
 *     post:
 *          summary: Creates a new document having the long url and slug
 *          tags: [ShortURL]
 *
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          long:
 *                              type: string
 *                              description: The long url which will be converted to a slug
 *
 *                      example:
 *                          long: 'https://www.example.com'
 *
 *          responses:
 *              200:
 *                  description: Successfully created a slug and created a document in mongodb for ShortUrl
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              $ref: '#/components/schemas/ShortUrl'
 *              500:
 *                  description: Server error occurred while generating slug and document for ShortUrl
 */

// Update Slug

/**
 * @swagger
 * /update/{id}:
 *      put:
 *          summary: Updates the slug with custom slug value from the request body
 *          tags: [ShortURL]
 *
 *          parameters:
 *              - in: body
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The id of the ShortUrl document whose slug is to be updated
 *
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          slug:
 *                              type: string
 *                              description: The custom slug to replace the auto generated slug
 *
 *          responses:
 *              200:
 *                  description: Found the document with the given id and updated the slug value
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              $ref: '#/components/schemas/ShortUrl'
 *              400:
 *                  description: Document with the given id not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      description: The error message
 *
 *                          example:
 *                              error: There was some server error
 *
 *              500:
 *                  description: Server error while updating the document with the new slug
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      description: The error message
 *
 *                          example:
 *                              error: There was some server error
 */

// Delete Short URL

/**
 * @swagger
 * /delete/{id}:
 *      delete:
 *          summary: Finds the document with the given id and deletes it.
 *          tags: [ShortURL]
 *
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The ObjectId of the document to be deleted
 *
 *          responses:
 *              200:
 *                  200:
 *                  description: Found the document with the given id and updated the slug value
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      description: boolean value based on the document deletion success.
 *
 *                          example:
 *                              success: true
 *
 *              404:
 *                  description: Document with the given id not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      description: The error message
 *
 *                          example:
 *                              error: The document with id not found
 *
 *              500:
 *                  description: Server error while deleting the document
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      description: The error message
 *
 *                          example:
 *                              error: There was an error while deleting the document
 */
