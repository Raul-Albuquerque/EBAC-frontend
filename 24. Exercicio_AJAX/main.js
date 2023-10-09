document.addEventListener('DOMContentLoaded', function () {

    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const userName = document.getElementById('user-name');
    const repositories = document.getElementById('repositories');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const profileLink = document.getElementById('profile-link');

    fetch('https://api.github.com/users/Raul-Albuquerque')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        console.log(json);
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        userName.innerText = json.login;
        repositories.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        profileLink.href = json.html_url;
    })
})