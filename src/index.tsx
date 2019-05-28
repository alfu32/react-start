import React from 'react'
import ReactDOM from 'react-dom'
//import { AppLayout, AppTitle, AppToolbar, AppSidebar, AppStatusbar, AppContent } from '../node_modules/@sbefmp/core/src';

import { AppLayout, AppTitle, AppToolbar, AppSidebar, AppStatusbar, AppContent } from '@sbefmp/core';
//import { AppLayout, AppTitle, AppToolbar, AppSidebar, AppStatusbar, AppContent } from './components';
//import '@sbefmp/core/dist/index.css';

console.log('Hello from tsx!')

const title = "Hello App";
const sidebarContent = ["one","two","three"];
const status = "new app running";

ReactDOM.render(
    <AppLayout>
        <AppTitle>{title}</AppTitle>
        <AppToolbar>
            <button>clickme</button>
        </AppToolbar>
        <AppSidebar>
            {sidebarContent.map( (s,i) => <div key={'div.'+i}><a href={'#' + s}>{s}</a></div> )}
            coucou
        </AppSidebar>
        <AppStatusbar>
            {status}
            coucou
        </AppStatusbar>
        <AppContent>
            <h4>It Works</h4>
        </AppContent>
    </AppLayout>,
    document.getElementById('root'),
)