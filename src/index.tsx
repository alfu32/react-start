import React from 'react'
import ReactDOM from 'react-dom'
import {AppLayout,AppTitle,AppToolbar,AppSidebar,AppStatusbar,AppContent} from './components/app-layout.component';

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
            {sidebarContent.map( s => <a href={'#'+s}>{s}</a> )}
        </AppSidebar>
        <AppStatusbar>
            {status}
        </AppStatusbar>
        <AppContent>
            <h4>It Works</h4>
        </AppContent>
    </AppLayout>,
    document.getElementById('root'),
)