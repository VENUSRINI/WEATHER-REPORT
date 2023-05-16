import {useEffect,useState} from 'react'
  //import {useform} from 'react-hook-form'
  import axios from 'axios'
  import './index.css';
  function App()
  {
    const[wheather,setWheather]=useState('');
    const[city,setCity]=useState('')
    function url(event){
    setCity(event.target.value);
     
  }
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3ef5913a1d595dc3052cf1646d33111`)
    .then((res)=>{setWheather(res.data);
    }).catch((error)=>{
      
        setWheather(error.response.data);
        
     });
    
   
  })
const report=(event)=>
{
  //event.preventDefault();
 
  if(wheather.cod===200)
  { 
 event.preventDefault();
  document.getElementById('res1').innerHTML='CITYNAME:'+wheather.name
  document.getElementById('res2').innerHTML='WHEATHER REPORT:'+wheather.weather[0].main
  document.getElementById('res3').innerHTML='ALL:'+wheather.clouds.all;
  document.getElementById('res4').innerHTML='COUNTRY:'+wheather.sys.country;
  document.getElementById('res5').innerHTML=''
  
}
else
{
  event.preventDefault();
  document.getElementById('res1').innerHTML=''
  document.getElementById('res2').innerHTML=''
  document.getElementById('res3').innerHTML=''
  document.getElementById('res4').innerHTML=''
  document.getElementById('res5').innerHTML='CITY NOT FOUNDED'
  }
}


return(
  <>
  <h1>WHETHER REPORT</h1>
  <img src='https://freefrontend.com/assets/img/css-weather-icons/css-animated-weather-icons.gif' alt=''></img>
  <form onSubmit={report}>
  <input type='text' onChange={url} placeholder='ENTER YOUR CITY'/>
  <input type='submit' ></input>
  <div id='res1'></div>
  <div id='res2'></div>
  <div id='res3'></div>
  <div id='res4'></div>
  <div id='res5'></div>
  </form>
  </>
)
}
export default App
