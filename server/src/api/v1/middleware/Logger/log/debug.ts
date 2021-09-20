import GetTimeStamp from '../timeStamp/GetTimeStamp';

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(
            `[${GetTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
            object
        );
    } else {
        console.debug(`[${GetTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

export default debug;
