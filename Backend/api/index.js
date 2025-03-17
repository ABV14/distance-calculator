import serverless from 'serverless-http';
import app from '../index.js';

const allowedOrigins = [
    'https://delivery-mapping-applicati-git-655e41-abhivarma-birrus-projects.vercel.app'
  ];
  
app.use(cors({
origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
    const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
    return callback(new Error(msg), false);
    }
    return callback(null, true);
}
}));
export const handler = serverless(app);