import './Featured.css'

export default function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/xdata/images/city/300x240/685330.jpg?k=ee4ac422e47649d2d04a9759dc81fa51f138f477796a8043557e864517ae6f5f&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Kandy</h1>
                <h2>32 Places</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/city/300x240/685293.jpg?k=799ffc96a5a78c6ed25a9f622dd64617e54e27219c54a828d1830cb3055560db&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Colombo</h1>
                <h2>129 Places</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/city/300x240/685302.jpg?k=0713219d887bc5ff423f547eaf1d36aa2363a45f3f751610f7f5e553cb233dda&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Galle</h1>
                <h2>21 Places</h2>
            </div>
        </div>
    </div>
  )
}
