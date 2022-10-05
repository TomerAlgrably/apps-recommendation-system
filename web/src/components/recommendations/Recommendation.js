const Recommendation = ({app}) => {
    return (
        <div onClick={()=>{window.location.href = app.url}} className="App-single-app">
                            <img src={app.icon} alt={app.name} className="App-icon"/>
                            Name: {app.name} <br/>
                            Category: {app.category}<br/>
                            Rating: {app.rating}<br/>
                            Installs: {app.install_count.toLocaleString()}<br/>
                            Minimum Age: {app.min_age}<br/>
                            Publisher: {app.publisher}<br/>

                        </div>
    );
}
export default Recommendation;