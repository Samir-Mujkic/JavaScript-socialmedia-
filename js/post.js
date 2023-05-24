class Post {
	post_id = '';
	post_content = '';
	user_id = '';
	likes = '';
	api_url = 'https:://62a5ea43430ba53411ce7900.mockapi.io';

	async create() {
		let session = new Session();
		session_id = session.getSession();

		let data = {
			user_id: session_id,
			content: this.post_content,
			likes : 0
		}

		data = JSON.stringify(data);

		let response = await fetch(this.api_url + '/posts', {
			method:'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body:data	
		});
		data = await response.json();

		return data;
	}
}