
function loadAllArticles() {
	var collection = document.getElementsByClassName('article');
	
	console.log(collection.length);
	for (var i = 0; i < collection.length; i++) {
		var articleName = collection[i].getAttribute('article');
		console.log(articleName);
		loadArticle(collection[i], articleName);
	}
}

function loadArticle(div, articleName) {
	div.innerHTML='<object type="text/html" data="articles/' + articleName + '.html" ></object>';
}

console.log("start loading");
loadAllArticles();
console.log("finished loading");