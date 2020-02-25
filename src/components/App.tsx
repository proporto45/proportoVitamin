import React, {lazy, Suspense} from 'react';
import {Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import 'antd/dist/antd.css';
import GlobalStyle from 'styles';

const Prime = lazy(() => import('modules/Vitamin'));

const App: React.FC<RouteComponentProps> = () => (
  <main>
      <Suspense fallback={<span>loading</span>}>
        <Switch>
          <Route path="/" component={Prime} exact/>
        </Switch>
      </Suspense>
  </main>
);

export default withRouter(App);
