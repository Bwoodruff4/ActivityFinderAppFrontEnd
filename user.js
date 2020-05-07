let params = new URLSearchParams(window.location.search)
let id = params.get('id')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    
    fetch(`http://localhost:3000/activities/`)
    .then(response => response.json())
    .then(activities => {

        fetch(`http://localhost:3000/api_keys/1`)
        .then(response => response.json())
        .then(key => {

            let apikey = key.key

            h1.innerText = `Username: ${user.user_name}`
            h2.innerText = `Zip Code: ${user.zip_code}`
            document.body.append(h1,h2)

            getActivityNameFromWeather(user.zip_code)

            function getActivityNameFromWeather(zip_code){

                let baseurl = "api.openweathermap.org/data/2.5/"
                   
                url = `http://${baseurl}weather?zip=${zip_code},us&units=imperial&appid=${apikey}`
                fetch(url).then(response => response.json()).then(data => {
                    const activity = getActivity(data)
                    
                    h3.innerText = activity.name
                    document.body.append(h3)

                })
            }
        
            function getActivity(weather_data){
                weather_type = weather_data["weather"][0]["main"]
        
                filtered_list = activities.filter(activity => activity.weather_type === weather_type)
        
                random_activity = filtered_list[Math.floor(Math.random()*filtered_list.length)]

                backgroundimage = `url(${random_activity.picture})`
                document.body.style.backgroundImage = backgroundimage;

                return random_activity
            }
        })
    })
})
    

