const info = {
    home: {
        name: "Prabhjyot Singh Dhillon",
        designation: "Fullstack Dev",
        location: "Navi Mumbai, India",
        about:
            "Trying to learn, always. Currently learning Vue.js. This site was made as an effort to learn the basics of it.",
    },
    projects: [
        {
            imageName: "coviddb",
            name: "Covid DB",
            description:
                "App to get Covid-19 details for various countries with graphs showing historical data.",
            gitLink: "https://github.com/eclairsp/covid-dashboard",
            liveLink: "https://coviddb.netlify.app/",
            list: [
                "Simple UI made using material-react to focus on important information.",
                "Table manipulation using material-table and custom implementation.",
                "Graphs to better understand the data over a time interval.",
            ],
        },
        {
            imageName: "flixi",
            name: "flixi",
            description:
                "Flixi is a web app to get information about movies and TV-Shows. You can also login and create a watchlist for stuff that you want to wacth.",
            gitLink: "https://github.com/eclairsp/flix-react",
            liveLink: "https://flixi.netlify.app/",
            list: [
                "Local storage based cache for search queries.",
                "JWT for user sessions.",
                "TMDB API used for all information.",
            ],
        },
        {
            imageName: "rpsls",
            name: "RPSLS",
            description:
                "RPSLS is a simple game of Rock, Paper, Scissor, Lizard and Spock.",
            gitLink: "https://github.com/eclairsp/RPSLS",
            liveLink: "https://rpsls.netlify.app/#%F0%9F%93%84",
            list: [
                "The extension was popularised by The big bang theory.",
                "It gives some extra flair to the already popular Rock, Paper, Scissors.",
                "Made using React.",
            ],
        },
        {
            imageName: "recinst",
            name: "RecInst",
            description:
                "RecInst is a school project. In this we implemented a model which tries to find the instruments playing in a song.",
            gitLink: "https://github.com/eclairsp/RecInst-api",
            liveLink: "https://recinst.netlify.app",
            list: [
                "We used a spectrogram made from the song for the CNN model.",
                "The dataset we used is IRMAS dataset.",
                "The backend is not hosted but code can be found on GitHub.",
            ],
        },
    ],
    contact: {
        email: "psd231998@gmail.com",
    },
};

new Vue({
    el: ".main",
    data: {
        info: info,
        num: 0,
        show: [true, false, false, false, false, false],
        transitionName: "bounce-next",
        menuOpen: false,
        mainContentClass: "main--content",
        themeDark: true,
    },
    methods: {
        toggleP: function () {
            setTimeout(() => {
                this.$set(this.show, this.num, !this.show[this.num]);

                if (this.num === 0) {
                    this.num = 5;
                } else {
                    this.num -= 1;
                }
                this.$set(this.show, this.num, !this.show[this.num]);
                this.mainContentClass = "main--content enter";
            }, 1000);
            this.mainContentClass = "main--content exit";
        },
        toggleN: function () {
            setTimeout(() => {
                this.$set(this.show, this.num, !this.show[this.num]);

                if (this.num === 5) {
                    this.num = 0;
                } else {
                    this.num += 1;
                }

                this.$set(this.show, this.num, !this.show[this.num]);
                this.mainContentClass = "main--content enter-1";
            }, 1000);
            this.mainContentClass = "main--content exit-1";
        },
        menu: function () {
            this.menuOpen = !this.menuOpen;
        },
        menuNav: function (i) {
            i === "final" ? (i = this.show.length - 1) : (i = i);

            this.show.forEach((element, index) => {
                if (index === i) {
                    this.$set(this.show, index, true);
                } else {
                    this.$set(this.show, index, false);
                }
                this.num = i;
            });

            setTimeout(() => {
                this.mainContentClass = "main--content";
            }, 500);
            this.mainContentClass = "main--content attention";
            this.menuOpen = false;
        },
        listClass: function (i) {
            i === "final" ? (i = this.show.length - 1) : (i = i);
            if (i === this.num) {
                return "list--item--active";
            } else {
                return "";
            }
        },
        imgName: function (name, res) {
            switch (res) {
                case 400:
                    return `images/${name}/${name}-${res}.png`;
                case 700:
                    return `images/${name}/${name}-${res}.png`;
                case 1000:
                    return `images/${name}/${name}-${res}.png`;
                case "alt":
                    return `${name} website screenshot.`;
                default:
                    return `images/${name}/${name}-1000.png`;
            }
        },
        themeSwitch: function () {
            const html = document.querySelector("html");

            if (html.getAttribute("data-theme") === "light") {
                html.setAttribute("data-theme", "dark");
                this.themeDark = false;
                localStorage.setItem("theme", "dark");
            } else {
                html.setAttribute("data-theme", "light");
                this.themeDark = true;
                localStorage.setItem("theme", "light");
            }
        },
    },
    beforeMount() {
        const theme = localStorage.getItem("theme");
        const html = document.querySelector("html");

        if (theme === "dark") {
            this.themeDark = true;
            html.setAttribute("data-theme", "dark");
        } else {
            this.themeDark = false;
            html.setAttribute("data-theme", "light");
        }
    },
});
