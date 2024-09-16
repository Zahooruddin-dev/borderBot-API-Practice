const url = ' https://dog.ceo/api/breeds/image/random';
fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		document.getElementById('image-container').innerHTML = `
<img src="${data.message}"/>
`;
	});

