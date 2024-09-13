import { Housing } from "../../types/types";
import { useLoaderData } from "react-router-dom";

const HouseDescriptionPage = () => { 
    const  housingData = useLoaderData() as Housing ;
    console.log('test housingData', housingData);
    return (<div>
       HouseDescriptionPage
    </div>);
};
 
export default HouseDescriptionPage;