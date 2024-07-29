const params = new URLSearchParams(window.location.search);

if (params.get("game")) {
    games.forEach(async game => {
        if (game.id != params.get("game")) return;
        document.title = `${game.title} | Art Class`;
        
        if (game.image) {
            const gameImage = document.querySelector("#gameImage");
            gameImage.src = game.image;
            gameImage.classList.remove("hidden");
        }
        
        if (game.title) {
            const gameTitle = document.querySelector("#gameTitle");
            gameTitle.innerHTML = game.title;
            gameTitle.classList.remove("hidden");
        }
        
        if (game.description) {
            const gameDescription = document.querySelector("#gameDescription");
            gameDescription.innerHTML = game.description;
            gameDescription.classList.remove("hidden");
        }

        document.querySelector("#frame").src = __uv$config.prefix + __uv$config.encodeUrl(game.url);
    });
} else if (params.get("app")) {
    apps.forEach(app => {
        if (app.id != params.get("app")) return;
        document.title = `${app.title} | Art Class`;
        
        if (app.image) {
            const gameImage = document.querySelector("#gameImage");
            gameImage.src = app.image;
            gameImage.classList.remove("hidden");
        }
        
        if (app.title) {
            const gameTitle = document.querySelector("#gameTitle");
            gameTitle.innerHTML = app.title;
            gameTitle.classList.remove("hidden");
        }
        
        if (app.description) {
            const gameDescription = document.querySelector("#gameDescription");
            gameDescription.innerHTML = app.description;
            gameDescription.classList.remove("hidden");
        }

        document.querySelector("#frame").src = __uv$config.prefix + __uv$config.encodeUrl(app.url);
    });
}

if (!getObj("favoritedGames")) setObj("favoritedGames", []);
if (!getObj("favoritedApps")) setObj("favoritedApps", []);

const favoritedButton = document.querySelector(".favorited");
const favoritedGames = getObj("favoritedGames");
const favoritedApps = getObj("favoritedApps");

const game = params.get("game");
const app = params.get("app");

if (favoritedGames.includes(game)) {
    favoritedButton.classList.remove("far");
    favoritedButton.classList.add("fas");
}

if (favoritedApps.includes(app)) {
    favoritedButton.classList.remove("far");
    favoritedButton.classList.add("fas");
}

function favorite() {
    if (game) {
        const index = favoritedGames.indexOf(game);
        if (index !== -1) {
            favoritedGames.splice(index, 1);
            favoritedButton.classList.remove("fas");
            favoritedButton.classList.add("far");
        } else {
            favoritedGames.push(game);
            favoritedButton.classList.remove("far");
            favoritedButton.classList.add("fas");
        }
        setObj("favoritedGames", favoritedGames);
    } else if (app) {
        const index = favoritedApps.indexOf(app);
        if (index !== -1) {
            favoritedApps.splice(index, 1);
            favoritedButton.classList.remove("fas");
            favoritedButton.classList.add("far");
        } else {
            favoritedApps.push(app);
            favoritedButton.classList.remove("far");
            favoritedButton.classList.add("fas");
        }
        setObj("favoritedApps", favoritedApps);
    }
}
