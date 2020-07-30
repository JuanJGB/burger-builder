import React from 'react';
import Layout from './HOC/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
function App() {
  return (
    <div> 
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
