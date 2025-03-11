import { createHashRouter } from 'react-router-dom';
import FrontLayout from '../layouts/FrontLayout';
import IndexPage from '../pages/IndexPage';
import OestimatePage from '../pages/OEstimatePage';
import QaPage from '../pages/QaPage';
import AboutusPage from '../pages/AboutusPage';





const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
            {
                path: "",
                element: <IndexPage />,
            },
            {
                path: "IndexPage",
                element: <IndexPage />,
            },
            {
                path: "OestimatePage",
                element: <OestimatePage />,
            },
            {
                path: "QaPage",
                element: <QaPage />,
            },
            {
                path: "AboutusPage",
                element: <AboutusPage />,
            },
        ]
	}
])
export default router;