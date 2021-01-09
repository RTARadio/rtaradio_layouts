'use strict';

nodecg.Replicant('showTweet').on("change", newValue => {
    if (newValue == "") {
        return;
    }
    document.getElementById("tweet").innerHTML = '<div class="tweetBox">'
    + '<img id="userImage"><span id="tweetName"></span>'
    + '<hr class="border">'
    + '<span id="tweetText"></span>'
    + '</div>';
    document.getElementById("userImage").src = newValue.user.profileImageUrl;
    document.getElementById("tweetName").innerText = newValue.user.name;
    document.getElementById("tweetText").innerText = newValue.text;
});

function showTweet() {
    tweet.style.visibility = "visible";
    anime({
        targets: '#commonLogo',
        translateX: 600,
        easing: 'easeInQuart',
        direction: 'alternate',
        endDelay: 5000,
    });
    anime({
        targets: '#tweet',
        translateX: -600,
        easing: 'easeOutQuart',
        direction: 'alternate',
        delay: 2000,
        endDelay: 3000,
    });
}

nodecg.listenFor('showTweet', showTweet);