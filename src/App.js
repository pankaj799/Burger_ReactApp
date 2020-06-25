import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulider';


function App() {
  return (
    <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
    </div>
  );
}

export default App;
