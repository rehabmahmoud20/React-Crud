import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Store} from './Redux/Store.js'
import { Provider } from 'react-redux'
// apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';


const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNWM5YjQxODk4OTEyYmE2NGYyZThmMjc2ZWIxY2U0Yjg4MDVjM2Q4NGFkNmJkZTc0NTRkODk1OTQ4MjJkODc5N2I4YTM3ZGQ5ZjdjYjgwMWMiLCJpYXQiOjE2NzIyMjA0MTYuNTY1MTksIm5iZiI6MTY3MjIyMDQxNi41NjUxOTYsImV4cCI6MTcwMzc1NjQxNi40MjI3MjQsInN1YiI6IjMiLCJzY29wZXMiOltdfQ.Ly_GMpmWELOUo4oo8L1SDfgxn9CMtOsShsuS-H2MNxJ5-9C_4JiNqqz3jYFSjlKW0L9rOie6r04pHHmzTE-F54xKhZiN5zT58zci2d8kC5cER7QRF6m_jljHBimM10vTLgrJz7LvuCTHH5_30Qvl5aTv0TwQJQnhu2CT_X4q4gv13QoEPDMcgqPqB4M1AAbQu_aO7OdN_NcV9U3HXtbpwggU5bQU3iKv14Bo39D8wSNmhtPRVuvW-1v-bodAsimea4TfeWvCr3eQHEBQzy-vNQTBJHUxAdKMTTlcOToMXjPYMal8S7vs0gwZrodeiY5W8iFsllnmMVaQ9lga20tXLGa8Yu_JDAP9u2Ehh3Cpk-3sKjKn1B63DPZ-PT7DW4X9f1frrFQk30T3Q31hBP5DzM_fMWQB-F2drleNiXCOZv3yjDDuWhwU7_3YXZDZfW2TT2Wq2L5JDtm_e6Clo8Jb3T_RCmzo3S7ZNfolq213FG1isl_wsEdqutlEpgpR1AkHhdYa1Bs5eW0eku4MWG4K4vSBHhT7BpF1w26zVgxxqDxMb6ncgbJCxRDtXN6vmAF_ZiYed-fvpumRXboF83FKVKtq9poSbv95enx3BzHdjKZzb0gcGTWYtBqfjMH854vy3g_kSfOM4ClOkpGdiomR1MOcwa7lHszRwRQMLyRQ_0k"
const client = new ApolloClient({
  link: createUploadLink({
      uri: 'http://mawared.pro/graphql',
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      }
  }),
  cache: new InMemoryCache({
    typePolicies: {
      UnconventionalRootQuery: {
        // The RootQueryFragment can only match if the cache knows the __typename
        // of the root query object.
        queryType: true,
        merge:true
      },
    },
  }),
 
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
    <Provider store={Store}>
    <App />

    </Provider>
    </ApolloProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
