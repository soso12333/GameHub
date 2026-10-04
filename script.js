const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.trim().toLowerCase();

    const games = document.querySelectorAll(".game-card");

    let foundGame = null;

    games.forEach(function (game) {

        const gameName = game.querySelector("h3");

        if (gameName) {

            const name = gameName.textContent.trim().toLowerCase();

            if (name.includes(searchText)) {
                foundGame = game;
            }

        }

    });

    if (foundGame) {

        foundGame.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        foundGame.classList.add("highlight");

        setTimeout(function () {
            foundGame.classList.remove("highlight");
        }, 2000);

    } else {

        alert("اللعبة غير موجودة");

    }

});
const userName = document.getElementById("userName");
const commentText = document.getElementById("commentText");
const commentButton = document.getElementById("commentButton");
const commentsList = document.getElementById("commentsList");


// نجيب التعليقات المحفوظة من المتصفح
let comments = JSON.parse(localStorage.getItem("comments")) || [];


// دالة تعرض التعليقات
function showComments() {

    commentsList.innerHTML = "";

    comments.forEach(function (comment) {

        const newComment = document.createElement("div");
        newComment.className = "user-comment";

        const nameElement = document.createElement("h3");
        nameElement.textContent = comment.name;

        const textElement = document.createElement("p");
        textElement.textContent = comment.text;

        newComment.appendChild(nameElement);
        newComment.appendChild(textElement);

        commentsList.appendChild(newComment);
    });
}


// عرض التعليقات المحفوظة عند فتح الصفحة
showComments();


// عند الضغط على زر إضافة تعليق
commentButton.addEventListener("click", function () {

    const name = userName.value.trim();
    const text = commentText.value.trim();

    if (name === "" || text === "") {
        alert("اكتب اسمك وتعليقك");
        return;
    }


    // إنشاء التعليق
    const newComment = {
        name: name,
        text: text
    };


    // إضافته للقائمة
    comments.push(newComment);


    // حفظ القائمة في المتصفح
    localStorage.setItem(
        "comments",
        JSON.stringify(comments)
    );


    // عرض التعليقات
    showComments();


    // تفريغ الخانات
    userName.value = "";
    commentText.value = "";
});
const sliderImage = document.getElementById("sliderImage");
const sliderTitle = document.getElementById("sliderTitle");

const sliderGames = [
    {
        title: "Silent Hill 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsNnQEtdlg0qzvzTj-Do5ZGPAyGdlUOxZ-iI9ue9HAirasL3bzl_VZY8s&s=10https://encrypted-tbn0.gstatic.com/"
    },
    {
        title: "Detroit: Become Human",
        image: "https://cdn.loaded.com/500x706/media/catalog/product/c/o/co2228_7_.jpg"
    },
    {
        title: "Heavy Rain",
        image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:320,cw:1920,ch:1440,q:80,w:1920/B5ANYXiNwfTMSLkjWUAq5J.jpg"
    }
];

let currentGame = 0;

function changeGame() {

    currentGame++;

    if (currentGame >= sliderGames.length) {
        currentGame = 0;
    }

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsNnQEtdlg0qzvzTj-Do5ZGPAyGdlUOxZ-iI9ue9HAirasL3bzl_VZY8s&s=10https://encrypted-tbn0.gstatic.com/"
    sliderImage.src =sliderGames[currentGame].image;"https://cdn.loaded.com/500x706/media/catalog/product/c/o/co2228_7_.jpg"
    sliderTitle.textContent = sliderGames[currentGame].title;

}

setInterval(changeGame, 2000);