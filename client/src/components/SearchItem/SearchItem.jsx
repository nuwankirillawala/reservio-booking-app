import './SearchItem.css'

function SearchItem() {
    return (
        <div className='searchItem'>
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/247821175.webp?k=259550e0122b53b6cb580f19e58d1bd8f78bf16a752772ad7ec55f16b4de4bcd&o=&s=1"
                alt=""
                className="searchItemImage"
            />
            <div className="searchItemDescription">
                <h1 className="searchItemTitle">
                    Hotel Cassendra
                </h1>
                <span className="searchItemDistance">1 km from center</span>
                <span className="searchItemTaxiOption">Free taxi</span>
                <span className="searchItemSubtitle">Attractively located in the center of Kandy</span>
                <span className="searchItemFeatures">
                    air-conditioned rooms with free WiFi, free private parking and room service.
                </span>
                <span className="searchItemCancelOption">Free Cancellation</span>
                <span className="searchItemCancelOptionSubtitle">
                    You can calcel later
                </span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchItemDetailText">
                    <span className="searchItemPrice">$123</span>
                    <span className="searchItemTaxOption">Includes tax and fees</span>
                    <button className="searchItemCheckButton">See avalability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem