import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Store} from './Redux/Store.js'
import { Provider } from 'react-redux'
// apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZWRiMWYxNzE2NTMzYzk4NmEwMGMxNzQ2MzllNDc5ZDM0ODMwMDVhMTU4N2VkZmU0OWZkNDExZmVjNmI0OTUxNzEyMmYxOGMzZWY3ZTllYTgiLCJpYXQiOjE2NzEyMDM5MjIuNTUyOTkxLCJuYmYiOjE2NzEyMDM5MjIuNTUyOTk2LCJleHAiOjE3MDI3Mzk5MjIuNTIyNDA2LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.cBn2lpTJ1OKk4BVEUQSlUKR0U0vq1fthUmyS8vN10G5TNS6YVsYGhACdBaNM7rBrIRQzj1DnoAUICRRzFM22moCq4vCxZ_hUhv9YOFMBxt8zTDuLabR0G2JCTq5nXn5mFrvDbG_0iuDbwTzAcHI9Szy9K71Jukk3ylZ7tsWOXSffdmfUYqSskBzzw_EZJRNxC8mF84aGYKlajLeuigyKRsogegcdpTeZJjGY-FWxH8bj3_xvQJBpXzBoONCb4WyYcyeiIplxV7dp00BsL3i1HnBL8Awv6PHXe74Gq6QQwLqEza7SLcx96LSvIFc8Tx8UzFwi1amX3yunXeaNGSa-GnN09vObIrvLImDK0PCePvI46uOa0yZwmRcapCP4gard4Y-2YKebyc9eZeVwZVtrZ-KY2SMxv7xkr4sYUE4ePRe4kgyrpKEzNqYbMb1UGBaeHXLc0KV_B-8Lbb2gCVu_ngBcxVV2n3WswNrj4N2nJIPD6p2IM74KMprKDAezBebbza7W1yK8QiSf4-VUeryqqDD2FzOXZf9oSyeGuptm8o9TMEYqmoj1ZLtX823hfhb5ZV5StrvZ1EafVPbYi-KJuiNPZ48ie8Kn0jmpnseNEZkWBK-bqwY1FR6cVIpO7y_hkHivyisguFT6im107xAG5lt7UGDxjj-Nbs-oTOPK_t0"
const client = new ApolloClient({
  uri: 'http://mawared.pro/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      UnconventionalRootQuery: {
        // The RootQueryFragment can only match if the cache knows the __typename
        // of the root query object.
        queryType: true,
      },
    },
  }),
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  }
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
