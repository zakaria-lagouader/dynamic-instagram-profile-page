const avatar = document.getElementById('avatar');
const user_name = document.getElementById('user_name');
const name = document.getElementById('name');
const posts = document.getElementById('posts');
const followers = document.getElementById('followers');
const follwing = document.getElementById('follwing');
const field = document.getElementById('posts-section');

// THE RANDOMUSER API :
rnd = Math.floor(Math.random() *50);
	
fetch('https://randomuser.me/api/?inc=name,email,picture')
	.then(response => response.json())
	.then(data => {
		let info = data.results[0];
		avatar.src = info.picture.large;
		user_name.textContent = `${info.name.first} ${info.name.last}`;
		name.textContent = `${info.name.first} ${info.name.last}`;
		posts.textContent = rnd;
		followers.textContent = abbreviateNumber(Math.floor(Math.random() * 9999));
		following.textContent = abbreviateNumber(Math.floor(Math.random() * 350));
	});
	fillposts();



function fillposts(){
	field.innerHTML = '';
	for (let i = 0; i < rnd; i++) {
		let post = `
		<div class="col-4">
			<div class="post" style="background-image: url('https://picsum.photos/500?random=${i}');">
				<div class="info">
					<p>${Math.floor(Math.random() *200)}</p>
					<p>${Math.floor(Math.random() *200)}</p>
				</div>
			</div>
		</div>
		`;
	field.insertAdjacentHTML('afterbegin', post);
	}
}


function abbreviateNumber(number){
	var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier === 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}

