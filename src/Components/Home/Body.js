import { useState } from "react";
import {RestarauntCardsComponent} from "./RestarauntCards"; 
import {cards} from "../../constants/RestarauntData"


const filterData = (filterText , restaurants) => {
   return restaurants.filter((restaurant) => restaurant.data.name.includes(filterText))
}

export const Body = () => {
    const [searchText, setSearchText] = useState("");  
    const [restarauntList, setRestarauntList] = useState(cards)
    return (
        <>
             <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e) =>{
                         setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn" 
                    onClick={() => {
                        setRestarauntList(cards)
                        setRestarauntList(filterData(searchText, restarauntList))
                    }}>
                    Search
                </button>
            </div>
            <div className="body">
                    <RestarauntCardsComponent restarauntList={restarauntList}/>
            </div>
    
        </>
    )  
};