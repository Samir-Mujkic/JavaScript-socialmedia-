let session = new Session();
session_id = session.getSession();

if(session_id !== "") {
	

	async function populateUserData () {
		let user = new User();
	    user = await user.get(session_id)

	    document.querySelector('#username').innerText = user['username'];
	    document.querySelector('#email').innerText = user['email'];

	    document.querySelector("#Korisnicko_ime").value = user['username'];
	    document.querySelector("#edit_email").value = user['email'];
	  }
	  populateUserData();

	
	}else {
		window.colation.href ="/";

	}

	document.querySelector('#logout').addEventListener('click', e => {
		e.preventDefault();

		session.destrojSession();
		window.location.href = '/';
	})

	document.querySelector('#editAccount').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'block';
	});

	document.querySelector('#closeModal').addEventListener('click', () => {
		document.querySelector('.custom-modal').style.display = 'none';
	})

	document.querySelector('#editForm').addEventListener('submit' e => {
		e.preventDefault();

		let user = new User();
		user.username = document.querySelector('#Korisnicko_ime').value;
		user.email = document.querySelector('#edit_email').value;
		user.edit();
	})

	document.querySelector("#deleteProfile").addEventListener('click', e => {
		e.preventDefault();

		let text = 'Da li si siguran'

		if(confirm(text) === true) {
			let user = new User();
			user.delete();
		}
	});

	document.querySelector('#postForm').addEventListener('submit', e => {
		e.preventDefault();,


		async function createPost() {
			let content = document.querySelector('#postContent').value;
			let post = new Post();
			post.post_content = content;
			post = await post.create();
		}
		createPost();<
	});

	
