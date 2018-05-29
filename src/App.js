import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Layout from './Componets/Layout/Layout';
import Main from './Containers/Main/Main';


class App extends Component {
  render() {
    return (
      
        <CookiesProvider>
          <BrowserRouter>
            <div>
              <Layout>
                <Main />
              </Layout>
            </div>
          </BrowserRouter>
        </CookiesProvider>
      
    );
  }
}

export default App;
