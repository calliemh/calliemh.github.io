"use strict";

let username = document.getElementById("username").value = "calliemh";
let apiUrl = "https://api.github.com/users/" + username + "/repos";

async function getRepos() {
    try {
        let res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(await res.text())

        } res = await res.json()
            .then(data => {
                let i = 0;
                data.forEach(async (repo) => {
                    i++;
                    if (i > 20) return;
                    console.log(repo);


                    //document.querySelector('ul').insertAdjacentHTML('beforeend', repo.description + '\n');
                    const repoItem = document.createElement("div");
                    repoItem.classList.add("repo-item");

                    const repoIcon = document.createElement("i");
                    const repoAnchor = document.createElement("a");
                    const repoDescr = document.createElement("p");
                    const repoCreated = document.createElement("p");
                    const repoUpdated = document.createElement("p");
                    const repoWatchers = document.createElement("p");
                    const repoLanguages = document.createElement("p");
                    const repoCommits = document.createElement("p");

                    repoIcon.classList.add("fa-brands");
                    repoIcon.classList.add("fa-github");
                    repoAnchor.href = repo.url;
                    repoAnchor.innerText = "\nLink";
                    repoDescr.innerText = repo.description ? repo.description : "No Description";
                    repoCreated.innerText = repo.created_at;
                    repoUpdated.innerText = repo.updated_at;
                    repoWatchers.innerText = repo.watchers;
                    repoLanguages.innerText = repo.language ? repo.language : "No Language";

                    let commits;


                    try {
                        let commitsUrl = repo.commits_url.split("{")[0];
                        let res2 = await fetch(commitsUrl);
                        if (!res2.ok)
                            commits = 0;
                        res2.json().then(data2 => {
                            commits = data2.length;

                        });

                        repoCommits.innerText = commits;

                    } catch (err) {
                        console.error("Error:", err);
                    }




                    repoItem.appendChild(repoIcon);
                    repoItem.appendChild(repoAnchor);
                    repoItem.appendChild(repoDescr);
                    repoItem.appendChild(repoCreated);
                    repoItem.appendChild(repoUpdated);
                    repoItem.appendChild(repoWatchers);
                    repoItem.appendChild(repoLanguages);
                    repoItem.appendChild(repoCommits);

                    document.querySelector(".repos-container").appendChild(repoItem);

                })
            }
            );
        //console.log("Repos resolved: My Repo Data:", res);

    }
    catch (err) {
        console.error("Error:", err);

    }
}

let myRepos = getRepos();
console.log('Repos we just fetched: ', myRepos);


