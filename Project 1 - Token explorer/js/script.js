async function getTokenData(address){
		const response = await fetch(
			`https://api.dexscreener.com/latest/dex/tokens/${address}`

		);
		const data = await response.json();
		console.log(data);
		const pair = data.pairs[0];
		document.getElementById("result").innerHTML = `
			<div><h2>${pair.baseToken.name}</h2>
			<p>Symbol: ${pair.baseToken.symbol}</p>
			<p>Price: $${pair.priceUsd}</p>
			<p>FDV: $${pair.fdv}</p></div>
			<img src="${pair.info?.imageUrl}" alt = "Token Image" id="tokenImage"/>
		`;
		}
		
	const button = document.getElementById("searchButton");
	button.addEventListener("click", searchToken);
	
	document.getElementById("tokenAddress").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.getElementById("searchButton").click();
    }
	});
	
	function searchToken() {

		const address = document.getElementById("tokenAddress").value;
		getTokenData(address);
		console.log(address);
	}