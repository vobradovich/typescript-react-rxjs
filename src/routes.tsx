import * as React from 'react';
import { Router, Route  } from 'react-router';
import App from './components/app.tsx';
import { Layout } from './components/Layout';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: App }} />
</Route>;
