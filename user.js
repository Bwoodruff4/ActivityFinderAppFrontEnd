let params = new URLSearchParams(window.location.search)
let id = params.get('id')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')

    h1.innerText = `Username: ${user.user_name}`
    h2.innerText = `Zip Code: ${user.zip_code}`
    document.body.append(h1,h2)
    })

fetch(`http://localhost:3000/activities/`)
    .then(response => response.json())
    .then(activity => handleResponse(activity))

    function handleResponse(activity){
        let h3 = document.createElement('h1')
        h3.innerText = activity.name
        document.body.append(h3)
    }