
import React from 'react';
import ShoppingList from './components/ShoppingList';
import AppNavBar from './components/AppNavBar'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
      <Provider store={store}>
    <div>
        <AppNavBar />
        <ShoppingList />
    </div>
    </Provider>
  );
}

export default App;