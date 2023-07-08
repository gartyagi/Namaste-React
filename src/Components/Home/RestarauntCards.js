import { IMAGE_CDN } from "../../constants/imageConstants"

export const RestarauntCardsComponent = ({restarauntList}) =>{
    return  (
        <div className="cards">
            {restarauntList.map((card) => {
                    return <RestarauntCardComponent Restaraunt={card} key={card.data.id}/>
                })}
        </div>
    )
}

export const RestarauntCardComponent = (props) => {
    const {cloudinaryImageId, id, name, cuisines, avgRating, totalRatings} = props.Restaraunt.data
   return (
        <div className="card" key={id}>
            <img src={IMAGE_CDN + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} ({totalRatings})</h4>
        </div>
   )
}
