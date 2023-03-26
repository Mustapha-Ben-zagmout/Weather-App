import "./index.css"
import {useState} from "react";

function Home(){
     const [query,setQuery] = useState("");
     const [weather,setWeather] = useState([]);
     
     function weather1(e) {
          e.preventDefault();

          fetch(`https://api.weatherapi.com/v1/timezone.json?key=bd0715d13e1d4b1c830173812220401&q=${query}`)
            .then((res) => res.json())
            .then((data) => {

                setWeather(data.location)
                console.log(data.location)
          })
     }   
     
    return(
        <div className="all">
            <header className="header1">
                <div className="left">
                    <form onSubmit={weather1}>
                    <input className="txt1" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search"/>
                    <button type="submit">Search</button>
                    </form>
               
                </div>
                <div className="right">
                    <nav>
                        <ul className="navMenu">
                            <li className="Home"><a>Home</a></li>
                            <li className="About"><a>About</a> </li>
                            <li className="feature"><a>Feature</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="weath">
                   <h1>{weather.name}</h1>
                   <h2>{weather.country}</h2>
            </div>
            <div className="region">
                  <h1>{weather.tz_id}</h1>
            </div>
            <div className="time">
                  <h1>{weather.localtime}</h1>
            </div>
        </div>
    )

}
export default Home;