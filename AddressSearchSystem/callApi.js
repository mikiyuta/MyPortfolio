
function getAddressData(addressData) {
    const combinedAddress = `${addressData.address1}${addressData.address2}${addressData.address3}`;
    const newP = document.createElement("p");
    newP.innerText = combinedAddress;
    output.appendChild(newP);
}

async function callApi() {
    const zipcode = document.getElementById("zipcode").value;
    const testResult = zipcode.match(/\d{3}-?\d{4}/);
    if(testResult){
        const apiUrl = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;    
        const res = await fetch(apiUrl)
        const address = await res.json();
        error.innerText = "";
        address.results.forEach(getAddressData);
    }else{
        output.innerText = "";
        error.innerText = "7桁の数字を入力してください。";
    }
}

const output = document.getElementById("output");
const error = document.getElementById("error");
const btn = document.getElementById("btn");

btn.addEventListener(`click`, callApi, false);
