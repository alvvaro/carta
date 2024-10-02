import { Route, Switch, Router as Wouter } from 'wouter';

import Content from '@/components/Content';
import Home from '@/components/Home';
import Layout from '@/components/Layout';

export default function Router() {
  return (
    <Wouter>
      <Layout>
        <Switch>
          <Route path="/:kind/:id">
            <Content />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Wouter>
  );
}
