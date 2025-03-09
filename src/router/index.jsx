import { createHashRouter } from 'react-router-dom';
import FrontLayout from '../layouts/FrontLayout';
import Page0 from '../pages/Page0';
import Page1 from '../pages/Page1';


const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
            {
                path: "",
                element: <Page0 />,
            },
            {
                path: "page1",
                element: <Page1 />,
            },
        ]
	}
])
export default router;