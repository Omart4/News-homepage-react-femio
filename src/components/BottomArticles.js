import image1 from '../assets/images/image-retro-pcs.jpg'
import image2 from '../assets/images/image-top-laptops.jpg'
import image3 from '../assets/images/image-gaming-growth.jpg'
const BottomArticles = () => {
    return ( 
        <div className="bot">
            <div className="art">
                <img src={image1} alt="" />
                <div className="deets">
                    <h2>01</h2>
                    <h3>Reviving Retro PCs</h3>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="art">
                <img src={image2} alt="" />
                <div className="deets">
                    <h2>02</h2>
                    <h3>Top 10 Laptops of 2022</h3>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="art">
                <img src={image3} alt="" />
                <div className="deets">
                    <h2>02</h2>
                    <h3>The Growth of Gaming</h3>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    );
}
 
export default BottomArticles;