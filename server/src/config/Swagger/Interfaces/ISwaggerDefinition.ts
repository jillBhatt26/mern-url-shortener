import ISwaggerInfo from './ISwaggerInfo';
import ISwaggerServer from './ISwaggerServer';

interface ISwaggerDefinition {
    openapi: string;
    info: ISwaggerInfo;
    servers: Array<ISwaggerServer>;
}

export default ISwaggerDefinition;
