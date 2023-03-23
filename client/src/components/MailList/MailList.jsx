import './MailList.css'

function MailList() {
  return (
    <div className="mailList">
        <h1 className="mailListTitle">
            Subscribe us!
        </h1>
        <h2 className="mailListDescription">
            Subscribe and we'll send the best deals to you.
        </h2>
        <div className="mailInputContainer">
            <input type="text" placeholder='Enter Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList