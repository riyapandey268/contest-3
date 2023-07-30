// console.log(document.getElementById("cardsecid").innerHTML)


fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en").then((prmis) => {
    return prmis.json();
}).then((data) => {
    data.map((item, ind) => {

        console.log(item)
        document.getElementById("cardsecid").innerHTML = document.getElementById("cardsecid").innerHTML + `<div class="card">
<div class="coinimg">
   <img src=${item.image}/>
   <div class="coindetails">
        <div class="coinname">${item.symbol}</div>
        <div class="fullcoinname">${item.name}</div>
   </div>
</div>
<div class="percentused">
   <div class="per">${item.atl}%</div>
</div>
<div class="currentvalue">
   $ ${item.current_price}
</div>
<div class="marketvolume">
    <div class="volume">
        Total Volume : ${item.total_volume}
    </div>
   <div class="market">
      Market Cap : $${item.market_cap}
   </div>
</div>;
</div>`
    })
}).catch((e)=>{
    document.getElementById("cardsecid").innerHTML =`<div style="margin-left:3rem">Data Not Available Due to Technical Issue</div>`
})

function gridview() {
    document.getElementById("cardsecid").classList.remove('tableadded');
    document.getElementById("cardsecid").classList.add('cardSection');

    document.getElementById("cardsecid").innerHTML = "";

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en").then((prmis) => {
        return prmis.json();
    }).then((data) => {
        data.map((item, ind) => {

            console.log(item)
            document.getElementById("cardsecid").innerHTML = document.getElementById("cardsecid").innerHTML + `<div class="card">
    <div class="coinimg">
       <img src=${item.image}/>
       <div class="coindetails">
            <div class="coinname">${item.symbol}</div>
            <div class="fullcoinname">${item.name}</div>
       </div>
    </div>
    <div class="percentused">
       <div class="per">${item.atl}%</div>
    </div>
    <div class="currentvalue">
       $ ${item.current_price}
    </div>
    <div class="marketvolume">
        <div class="volume">
            Total Volume : ${item.total_volume}
        </div>
       <div class="market">
          Market Cap : $${item.market_cap}
       </div>
    </div>;
</div>`
        })
    }).catch((e)=>{
        document.getElementById("cardsecid").innerHTML =`<div style="margin-left:3rem">Data Not Available Due to Technical Issue</div>`
    })
    


}

function listview() {
    document.getElementById("cardsecid").classList.remove('cardSection');
    document.getElementById("cardsecid").classList.add('tableadded');
    document.getElementById("cardsecid").innerHTML = "";
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en").then((prmis) => {
        return prmis.json();
    }).then((data) => {
        data.map((item, ind) => {

            var percent = item.atl.toFixed(2);
            var val = item.current_price.toFixed(2);
            console.log(item)
            document.getElementById("cardsecid").innerHTML = document.getElementById("cardsecid").innerHTML + `<table>
    <thead>
       
    </thead>
    <tbody id="tablebody">
    <tr>
<td style="margin-top: 2rem;">
<div class="coinimg">
<img src=${item.image} />
<div class="coindetails">
    <div class="coinname">${item.symbol}</div>
    <div class="fullcoinname">${item.name}</div>
</div>
</div>
</td>
<td style="margin-top: 2rem;">
<div class="percentused">
<div class="per">${percent}%</div>
</div>
</td>
<td style="margin-top: 2rem;">
<div class="currentvalue">
$ ${val}
</div>
</td>
<td >
<div class="volume">
Total Volume:${item.total_volume}
</div>
</td>
<td>
<div class="market">
Market Cap:$${item.market_cap}
</div>
</td>
</tr>
    </tbody>
</table>`
        })
    }).catch((e)=>{
        document.getElementById("cardsecid").innerHTML =`<div style="margin-left:3rem">Data Not Available Due to Technical Issue</div>`
    })
    
}