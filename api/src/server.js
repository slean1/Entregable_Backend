import { createApp } from './app.js';
import { connectMongo } from './config/db.js';
import { env } from './config/env.js';

(async () => {
  await connectMongo();
  const app = createApp();
  /*app.listen(env.PORT, () => 
    console.log(`🚀 API lista en http://localhost:${env.PORT}`)
  );*/

app.listen(env.PORT, () => {
  console.log(`🚀 API lista en http://localhost:${env.PORT}`);
  console.log(`Swagger en http://localhost:${env.PORT}/api-docs`);
});

})();
