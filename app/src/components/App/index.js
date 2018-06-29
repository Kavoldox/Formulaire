/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import ChangeLang from 'src/components/ChangeLang';
import ChangeView from 'src/containers/ChangeView';
import Headline from 'src/containers/Headline';
import Form from 'src/containers/Form';


/*
 * Code
 */
const App = () => (
  <div id="app">
    <ChangeLang />
    <ChangeView from="password" to="login" back />
    <Headline />
    <Form />
    <ChangeView from="login" to="password" />
  </div>
);


/*
 * Export default
 */
export default App;
