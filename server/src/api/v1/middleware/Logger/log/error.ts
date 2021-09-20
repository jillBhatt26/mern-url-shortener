import GetTimeStamp from '../timeStamp/GetTimeStamp';

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(
            `[${GetTimeStamp()}] [ERROR] [${namespace}] ${message}`,
            object
        );
    } else {
        console.error(`[${GetTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

export default error;
