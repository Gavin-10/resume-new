
import cors from 'cors';

import 'dotenv/config';

let options

if (process.env.NODE_ENV === "dev") {
    options = process.env.DEV_ORIGINS.split(',');
} else {
    options = process.env.ALLOWED_ORIGINS.split(',');
}

const corsOptions = {
    origin: options,
    optionsSuccessStatus: 200,
};

export default cors(options);