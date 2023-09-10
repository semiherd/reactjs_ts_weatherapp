	const cacheId= "v1"
	const cacheItems=[
		'static/js/main.chunk.js',
		'static/js/0.chunk.js',
		'static/js/bundle.js',
		'index.html',
		'/'		
	]
	self.addEventListener("install",(event) => {
		event.waitUntil(
			caches.open(cacheId).then((c) => {
				c.addAll(cacheItems)
			})
		)
	})
	self.addEventListener('activate', (event) => {
		event.waitUntil(
			caches.keys().then((cache) => {
				return Promise.all(
					cache.filter((name) => {
						name.map((i) => caches.delete(i))
					})
				)
					
			})
		)
	})
	self.addEventListener('fetch', (event) => {
		event.respondWith(
			caches.match(event.request)
				.then((res) => {
					if(res){
						return res
					}
					return fetch(event.request)
				} )
		)
	})