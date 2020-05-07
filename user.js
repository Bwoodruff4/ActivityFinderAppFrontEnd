let params = new URLSearchParams(window.location.search)
let id = params.get('id')

document.getElementById("edit-user-form").action = `http://localhost:3000/users/${id}`

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h2')
    let h4 = document.createElement('h2')
    let h5 = document.createElement('h2')
    
    fetch(`http://localhost:3000/activities/`)
    .then(response => response.json())
    .then(activities => {

        fetch(`http://localhost:3000/api_keys/1`)
        .then(response => response.json())
        .then(key => {

            let apikey = key.key

            h1.innerText = `Hello, ${user.user_name}!`
            document.getElementById("user-information").append(h1)

            getActivityNameFromWeather(user.zip_code)

            function getActivityNameFromWeather(zip_code){

                let baseurl = "api.openweathermap.org/data/2.5/"
                   
                url = `http://${baseurl}weather?zip=${zip_code},us&units=imperial&appid=${apikey}`
                fetch(url).then(response => response.json()).then(data => {
                    const activity = getActivity(data)
                    
                    h4.innerText = `Recommended Activity: ${activity.name}`
                    h5.innerText = `Activity Description: ${activity.description}`
                    document.getElementById("user-information").append(h4,h5)

                })
            }
        
            function getActivity(weather_data){
                weather_type = weather_data["weather"][0]["main"]

                weather_temp = weather_data["main"]["temp"]

                weather_description = weather_data["weather"][0]["description"]

                h2.innerText = `Current Temperature: ${Math.round(weather_temp)}°F`
                h3.innerText = `Weather: ${weather_description}`

                document.getElementById("user-information").append(h2,h3)
        
                filtered_list = activities.filter(activity => activity.weather_type === weather_type)
        
                random_activity = filtered_list[Math.floor(Math.random()*filtered_list.length)]

                backgroundimage = `url(${random_activity.picture})`
                document.body.style.backgroundImage = backgroundimage;

                return random_activity
            }
        })
    })
})
    

