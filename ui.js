class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //show profile
    showProfile(user){
        //console.log(user);

        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}"  class="img-fluid mb-2">
                        <a href="${user.html_url}" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Created at: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;

    }

    //show repos
    showRepos(repos){
        let output = '';

        repos.forEach( (repo) =>{
            output +=`
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        //output repos
        document.getElementById('repos').innerHTML = output;
    }

    //Show alert message
    showAlert(msg, className){
        // clear previous alert 
        this.clearAlert();

        // div
        const div = document.createElement('div');
        div.className = className;

        //add text 
        div.appendChild(document.createTextNode(msg));

        // get parent 
        const parent = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');

        parent.insertBefore(div, search);

        // Timeout after 3 seconds
        setTimeout( () => {
            this.clearAlert();
        }, 3000);

    }

    //clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML ='';
    }
}