import image from '../assets/images/image-web-3-desktop.jpg'
const MainNews = () => {
    return ( 
        <div className="main">
            <img src={image} alt="" />
            <div className="text">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="details">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    );
}
 
export default MainNews;