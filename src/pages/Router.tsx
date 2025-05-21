import { Route, Switch, Router as Wouter } from 'wouter';

import Content from '@/components/content/Content';
import Home from '@/components/home/Home';
import Layout from '@/components/layout/Layout';
import Search from '@/components/search/Search';

export default function Router() {
  return (
    <Wouter>
      <Layout>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
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
