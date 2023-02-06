// import './App.css';
import axios from 'axios'
import React, {useState} from 'react'

function App() {
  const [data, setData] = useState({});
  const [loc, setLoc] = useState('')
 
  const url = `https://api.weatherapi.com/v1/current.json?key=d9ea424a85da46d9b9d215457231001&q=${loc}&aqi=no`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((responce) => {
        setData(responce.data)
        console.log(responce.data)
      }) 
      setLoc('') 
    }
    }
   
  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://wallpaper.dog/large/10991978.jpg")`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
      }}>
      <div className='search'>
        <input
        value={loc}
        onChange={event => setLoc(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            {data.location ? <p>{data.location.name}</p> : null}
          </div>
          <div className='temp'>
          {data.current ? <h1>{data.current.temp_c}<span>&#8451;</span></h1> : null}
          </div>
          <div className='description'>
          {data.current && data.current.condition ? <p>{data.current.condition.text}</p>:null} 
          </div>
        </div>
        {data.location && data.location.name !== undefined &&
             <div className='bottom'>
             <div className='feels'>
             {data.current ? <p className='bold'>{data.current.feelslike_c}<span>&#8451;</span></p> : null}
               <p>Feels Like</p>
             </div>
             <div className='humidity'>
             {data.current ? <p className='bold'>{data.current.humidity}%</p> : null}
               <p>Humidity</p>
             </div>
             <div className='wind'>
             {data.current ? <p className='bold'>{data.current.wind_mph}</p> : null}
               <p>Wind Speed</p>
             </div>
           </div>
        }
   
      </div>
    </div>
  );
}

export default App;
