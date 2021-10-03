// imports
import config from '../../../config/Environment';

// function definition
const GetRequestProtocol = (): string => {
    switch (config.ENV) {
        case 'development':
            return 'http';

        case 'production':
            return 'https';

        default:
            return '';
    }
};

// exports
export default GetRequestProtocol;
