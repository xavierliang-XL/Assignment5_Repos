<template>
    <div class="hero">
        <div class="intro">
            <div class="intro-left">
                <p>
                    CatFish Movies is a website for users to purchase and watch their wanted movies
                    freely. Ready to watch?
                </p>
                <p>
                    We Sincerely hope that you would have an amazing watching experience here in our
                    website.
                </p>
                <p>Login to your account or register to create or restart your membership.</p>
            </div>
            <div class="intro-center">
                <h1>
                    Welcome!

                </h1>
                <p>
                    Millions of movies, TV shows and people to discover. Explore now.
                </p>
            </div>
            <div class="intro-right">
                <p>
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV
                    without paying more.
                </p>

                <p>
                    Send kids on adventures with their favorite characters in a space made just for
                    them—free with your membership.
                </p>

                <p>
                    Download your shows to watch offline. Available on all plans except Basic with
                    ads.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-left {
    margin-top: 10px;
    float: left;
    width: 25%;
    height: 980px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: radial-gradient(red, darkred);
    opacity: 0.8;
    text-align: center;
    font-size: 1.5vw;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: white;
}

p {
    padding: 20px;
}

.intro-center {
    float: left;
    width: 50%;
    margin-top: 10px;
    height: 980px;
    background-color: black;
    opacity: 0.8;
    text-align: center;
    font-size: 3vw;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: white;
}

.intro-right {
    margin-top: 10px;
    float: right;
    width: 25%;
    height: 980px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: radial-gradient(red, darkred);
    opacity: 0.8;
    text-align: center;
    font-size: 1.5vw;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: white;
}

.intro {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
}

.hero {
    width: 100%;
    height: 1000px;
    background: url("../assets/images/3.webp") no-repeat center;
    background-size: cover;
}
</style>
