import GetTimeStamp from '../timeStamp/GetTimeStamp';

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(
            `[${GetTimeStamp()}] [INFO] [${namespace}] ${message}`,
            object
        );
    } else {
        console.log(`[${GetTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

export default info;
