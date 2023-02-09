const SideNews = () => {
    return ( 
        <div className="side">
            <h2>New</h2>
            <div className="article">
                <h4>Hydrogen VS Electric Cars</h4>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="article">
                <h4>The Downsides of AI Artistry</h4>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className="article" style={{borderBottom:'none'}}>
                <h4>Is VC Funding Drying Up?</h4>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    );
}
 
export default SideNews;