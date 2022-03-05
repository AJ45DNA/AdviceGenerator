// INTEGRATION DE L'API

window.addEventListener('DOMContentLoaded', () =>{
    const getResource = async () => {
        let res =  await fetch('https://api.adviceslip.com/advice');
        if(!res.ok) throw new Error (`Could not fetch ${url}, status ${res.status}`);
        return await res.json();
    }
    const adviceIDbox = document.querySelector('.adviceIDbox');
    const advice = document.querySelector('p');
    const neonbox = document.querySelector('.neonbox');
    function setData(data) {
        console.log(data);
        adviceIDbox.textContent = 'ADVICE #' + data.id;
        advice.textContent = data.advice;
    }
    neonbox.addEventListener('click', () => {
        getResource().then(data => setData(data.slip));
    })
})


