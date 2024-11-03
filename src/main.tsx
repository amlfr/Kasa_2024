import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './routes/home/home';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './routes/error/error';
import LayoutPage from './routes/layout/layout';
import AboutPage from './routes/about/about';
import { Housing } from './types/types';
import HouseDescriptionPage from './routes/houseDescription/houseDescription';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
                loader: async (): Promise<Housing[]> => {
                    const response = await fetch('/src/assets/logements.json');
                    const data: Housing[] = await response.json();
                    return data;
                },
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/housing/:housingId",
                element: <HouseDescriptionPage />,
                loader: async ({ params }): Promise<Housing> => {
                    const response = await fetch('/src/assets/logements.json');
                    const data: Housing[] = await response.json();
                    let housingData: Housing = {
                        id: "0000000",
                        title: "0000000",
                        cover: "0000000",
                        pictures: ["0000000"],
                        host :{
                            name: 'jean',
                            picture: '1.png'
                        },
                        location: "0000000",
                        equipments: ["0000000"],
                        description: "0000000",
                        rating: "0000000",
                        tags: ["0000000"],
                    }; 
                    data.forEach((housing)=> {
                        if(housing.id === params.housingId) { 
                            housingData = housing;
                        }
                    });
                    return housingData;
                }
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
