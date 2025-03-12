import { createHashRouter } from 'react-router-dom';
import FrontLayout from '../layouts/FrontLayout';
import IndexPage from '../pages/IndexPage';
import OestimatePage from '../pages/OEstimatePage';
import QaPage from '../pages/QaPage';
import AboutusPage from '../pages/AboutusPage';
import MateriaPage from '../pages/MaterialPage';
import MemberPage from '../pages/MemberPage';
import NotFound from '../pages/NotFound';
import ManagerPage from '../pages/ManagerPage';
import ManagerLayout from '../layouts/ManagerLayout';





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
                path: "MateriaPage",
                element: <MateriaPage />,
            },
            {
                path: "QaPage",
                element: <QaPage />,
            },
            {
                path: "AboutusPage",
                element: <AboutusPage />,
            },
            {
                path: "/MemberPage",
                element: <MemberPage />,
            },
        ]
	},
    {
        path: "/Manager",
        element: <ManagerLayout />,
        children:[
            {
                path: "",
                element: <ManagerPage />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
])
export default router;