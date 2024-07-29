let cl = console.log;

let IMG_BASE_URL="https://occ-0-4744-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y"


let movieui =document.getElementById("movieui")

let result=''
for(i = 0;i<netflixdata.length;i++){
  result+=`
            <div class="col-md-3 mb-4">
                <div clas="card">
                    <figure class="moviecard text-white">
                        <img src="${netflixdata[i].image}">
                    </figure>
                    <figcaption>
                        <div class="movietitle">
                            <div class="col-10 text-white mb-0">
                                <h6 class="heading">${netflixdata[i].name}</h6>
                            </div>
                            <div class="col-2 rating">
                            <span class="${setratingbg(netflixdata[i].rating)}">${netflixdata[i].rating}</span>
                            </div>
                        </div>
                        <div class="movieoverview">
                            <h6>${netflixdata[i].name}</h6>
                            <em>overview</em>
                            <p>
                                 sit amet consectetur adipisicing elit. Exercitationem, ipsam error! Consectetur dolorem fuga beatae, libero vitae maiores non itaque reiciendis voluptates nisi laudantium sapiente adipisci nesciunt molestiae facilis optio!
                            </p>
                        </div>
                    </figcaption>
                </div>
            </div>`
}

movieui.innerHTML=result;


function setratingbg(rating){
    if(rating > 7.5){
        return 'bg-success'
    }else if(rating <= 7.5 && rating > 5){
        return 'bg-warning'
    }else{
        return 'bg-danger'
    }
}