import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/pages/mainpage/Main';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route  path="/Posts"  render={() => (<Slider posts={this.state.posts} users = {this.state.users} />)} />
    <Route path="/Albums/:id" component={AlbumForUser} />
    <Route path="/Albums/:id/:" component={AlbumForUser} />
    <Route  path="/Albums"  component={AllAlbums} />
    <Redirect from="/" exact to="/Posts" /> */}
      </Switch>
    </>
  );
}

export default App;
