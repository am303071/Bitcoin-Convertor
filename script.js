var output=document.querySelector(".output")
var btcprice= new XMLHttpRequest();
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
btcprice.onreadystatechange=function(){
    console.log(btcprice.readyState);
    if(btcprice.readyState==4 && btcprice.status==200)
    console.log(btcprice.response);
    var btcpricestr= btcprice.response;
    var btcpriceobj= JSON.parse(btcpricestr)
    output.innerHTML=btcpriceobj.bpi.USD.rate_float;
    console.log(btcpriceobj)
}
btcprice.open("GET",url);
console.log(btcprice);
btcprice.send();
