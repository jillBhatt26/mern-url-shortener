import GetTimeStamp from '../timeStamp/GetTimeStamp';

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(
            `[${GetTimeStamp()}] [WARN] [${namespace}] ${message}`,
            object
        );
    } else {
        console.warn(`[${GetTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};

export default warn;
