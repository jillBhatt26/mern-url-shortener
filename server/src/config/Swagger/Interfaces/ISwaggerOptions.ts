import ISwaggerDefinition from './ISwaggerDefinition';

interface ISwaggerOptions {
    definition: ISwaggerDefinition;
    apis: Array<string>;
}

export default ISwaggerOptions;
