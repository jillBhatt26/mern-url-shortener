// interface imports
import IReqParams from './interfaces/IRequest/IReqParams';
import IReqBody from './interfaces/IRequest/IReqBody';

// namespace declaration
declare namespace NExpress {
    interface IRequest {
        params: IReqParams;
        body: IReqBody;
    }
}

export default NExpress;
