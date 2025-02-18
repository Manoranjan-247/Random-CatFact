// let url = 'https://catfact.ninja/fact';

// fetch(url)
// .then((res) =>{
//     console.log(res)
//     return res.json()
// }).then((data) =>{
//     console.log(data.fact);
// }).catch((err) =>{
//     console.error(err);
// });

let btn = document.querySelector("button");
btn.addEventListener("click", async function(){
    let fact = await getFact();
    document.querySelector("#result").textContent = fact;
})


let url = 'https://catfact.ninja/fact';
async function getFact(){
    try{
        let res = await axios.get(url);
        return (res.data.fact);
    }catch(e){
        console.log("Error :",e);
        return "NO fact found try again!"
    }
}
getFact();