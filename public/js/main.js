const submitBtn=document.getElementById('submitBtn')
const cityinput=document.getElementById('cityinput')
const cityname=document.getElementById('city_name')
const tempvalue=document.getElementById('tempvalue')
const fssign=document.getElementById('fssign')
const datahide=document.querySelector('.datahide')
const day=document.getElementById('day')
const date=document.getElementById('date')
const currentDay = (d) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayy = days[d.getDay()];
  const datee = d.getDate();
  const month =months[d.getMonth()];
  const year = d.getFullYear();
  day.innerText=`${dayy}`
  date.innerText=`${datee} ${month} ${year}`
}
currentDay(new Date())

  
const api={
  key:"57a7ac486515d1ce78929a2c2e224d7d",
  base:'http://api.openweathermap.org/data/2.5/'
}
const getInfo=async (event)=>{
  event.preventDefault()
  let cityValue=cityinput.value
  if(cityValue==""){
    cityname.innerText='please mention the cityname'
    datahide.classList.add('datahide')
  }else{
    try{
      let url=`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&APPID=${api.key}`
      const response= await fetch(url)
      const data=await response.json()
      console.log(data)
      const arrdata=[data];
      cityname.innerText=`${cityValue} ${arrdata[0].sys.country}`
      tempvalue.innerText=arrdata[0].main.temp
      const tempmood=arrdata[0].weather[0].main
      if(tempmood=='Clear'){
        fssign.innerHTML="<i class='far fa-sun' style='color:yellow'></i>";
      }else if(tempmood=='Clouds'){
        fssign.innerHTML="<i class='fas fa-cloud-moon style='color':gray'></i>";
      }else if(tempmood=='Rain'){
        fssign.innerHTML="<i class='fas fa-cloud-rain style='color':blue></i>"
      }else{
        fssign.innerHTML="<i class='far fa-sun' style='color: yellow'></i>";
      }

    }catch{
      cityname.innerText='mention the correct city name'
    }
    datahide.classList.remove('datahide')
  

   
}
}
submitBtn.addEventListener('click',getInfo)

 
  // const search = evt => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${cityValue}&units=metric&APPID=${api.key}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         console.log('helo');
          
  //       });
  //   }
  // }

