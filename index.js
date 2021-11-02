
var ageAPI = 'https://api.agify.io?name=',
    genderAPI = 'https://api.genderize.io?name=',
    nationAPI = 'https://api.nationalize.io?name='


var hcontainer = document.getElementById('predict'),
    hname = document.getElementById('name'),
    hbtn = document.getElementById('btn'),
    hage = document.getElementById('age'),
    hgender = document.getElementById('gender'),
    hnation = document.getElementById('nation')


hbtn.addEventListener('click',() => {
    let user_name = hname.value
    if(user_name){
        getApi(ageAPI,user_name, (data) => {hage.innerHTML = 'Age: '+ data.age})
        getApi(genderAPI,user_name, (data) => {hgender.innerHTML = 'Gender: ' + data.gender})
        getApi(nationAPI,user_name, (data) => {hnation.innerHTML = 'Nation: ' + data.country[0].country_id})
    }

})



function getApi(URL, name, callback){
    var storedData
    fetch(URL+name)
        .then(resp => resp.json())
        .then(data => storedData = data)
        .then(() => callback(storedData))
    
}
  
