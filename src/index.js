import React from 'react';
import ReactDOM from 'react-dom/client'
import {Greeting, UserCard } from './Geeting'
import Product, {Navbar} from './Product'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<>
    <Greeting />
    <UserCard />
    <Product />
    <Navbar />
</>
);