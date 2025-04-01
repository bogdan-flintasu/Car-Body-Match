const isLocalStorageEnabled = () => {
    try {
      const key = "__storage__test";
      window.localStorage.setItem(key, null);
      window.localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isLocalStorageEnabled());


function plusunu() 
{
    var acum = localStorage.getItem('punctaj') || 0;
    var plusunufacut = parseInt(acum) + 1;
    localStorage.setItem('punctaj', plusunufacut);
}


function plusdoi() 
{
    var acum = localStorage.getItem('punctaj') || 0;
    var plusdoifacut = parseInt(acum) + 2;
    localStorage.setItem('punctaj', plusdoifacut);
}


function plustrei() 
{
    var acum = localStorage.getItem('punctaj') || 0;
    var plustreifacut = parseInt(acum) + 3;
    localStorage.setItem('punctaj', plustreifacut);
}


function pluspatru() 
{
    var acum = localStorage.getItem('punctaj') || 0;
    var pluspatrufacut = parseInt(acum) + 4;
    localStorage.setItem('punctaj', pluspatrufacut);
}


function click() 
{
    var punctaj = parseInt(localStorage.getItem('punctaj')) || 0;
    if (punctaj>=0 && punctaj<3) {
        var messagep = document.createElement('p');
        messagep.className ="ecran"
        messagep.textContent = "The right car body for you is coupe/cabrio. You need a car for your soul! If we had an impact on your choice feel free to share our website with your friends and family!";
        messagep.style.color = "white";
        messagep.style.padding = "10px";
        document.body.appendChild(messagep);
    }
    if (punctaj>3 && punctaj<5) {
        var messagep = document.createElement('p');
        messagep.className ="ecran"
        messagep.textContent = "The right car body for you is hatchback. You need a city car. If we had an impact on your choice feel free to share our website with your friends and family!";
        messagep.style.color = "white";
        messagep.style.padding = "10px";
        document.body.appendChild(messagep);
    }
    if (punctaj>5 && punctaj<9) {
        var messagep = document.createElement('p');
        messagep.className ="ecran"
        messagep.textContent = "The right car body for you is sedan.You need a slightly bigger car, but still be able to drive through the city.If we had an impact on your choice feel free to share our website with your friends and family!";
        messagep.style.color = "white";
        messagep.style.padding = "10px";
        document.body.appendChild(messagep);
    }
    if (punctaj>9) {
        var messagep = document.createElement('p');
        messagep.className ="ecran"
        messagep.textContent = "The right car body for you is an SUV. You need a big safe car especially if you have a family, too!If we had an impact on your choice feel free to share our website with your friends and family!";
        messagep.style.color = "white";
        messagep.style.padding = "10px";
        document.body.appendChild(messagep);
    }
    if (punctaj==9) {
        var messagep = document.createElement('p');
        messagep.className ="ecran"
        messagep.textContent = "The right car body for you is an SUV or sedan. You need something slightly bigger than a middle class sedan and smaller than a big SUV.If we had an impact on your choice feel free to share our website with your friends and family!";
        messagep.style.color = "white";
        messagep.style.padding = "10px";
        document.body.appendChild(messagep);
    }
    if (punctaj==5) {
        var messagep = document.createElement('p');
        messagep.className ="ecran"
        messagep.textContent = "The right car body for you is hatchback or sedan.You need a car that is able to easily roam the city and the motorway also.If we had an impact on your choice feel free to share our website with your friends and family!";
        messagep.style.color = "white";
        document.body.appendChild(messagep);
    }
    if (punctaj==3) {
        var messagep = document.createElement('p');
        messagep.className ="ecran"
        messagep.textContent = "The right car body for you is coupe/cabrio or a sportier hatchback. You want a car for your soul, but you need it to be practical, too.If we had an impact on your choice feel free to share our website with your friends and family!";
        messagep.style.color = "white";
        messagep.style.padding = "10px";
        document.body.appendChild(messagep);
    }
    this.remove();
}
document.addEventListener('DOMContentLoaded', function() {

    var buton = document.getElementById('afisare');
    buton.addEventListener('click', click);
    buton.preventdefault();
});


function reset()
{  
    console.log("Reset function called");
    window.location.reload();
}


window.onload = function() {
    var punctaj = localStorage.getItem('punctaj') || 0;
    document.getElementById('punctaj').textContent = "Punctaj: " + punctaj;
};


window.onbeforeunload = function() {
    localStorage.removeItem('punctaj');
};
