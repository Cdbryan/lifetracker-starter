import * as React from 'react';
import "./NutritionCard.css"
import axios from 'axios';

export default function(){
    // const [productsCopy, setproductsCopy] = React.useState("");
    // React.useEffect(() => {
    //     function getData() {
    //       axios
    //         .get(`http://localhost:3001/nutrition/`)
    //         .then((productData) => {
    //           console.log(productData);
    //           let items = productData.data;
    //           setProducts(items); //products array has all of the items in it
    //           setproductsCopy(items);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    //     getData();
    //   }, []);
    
    return(
        <div className="NutritionCard"> 
            <h1> Nutrition Card </h1>
        </div> 
    )
}