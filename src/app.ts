import { Route } from 'core/interface';
import express from 'express';

class App {
  public app: express.Application;
  public port: string | number;

  constructor(router: Route[]) {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.initializeRoutes(router);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port', this.port);
    });
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }
}

export default App;
