const info = {
    home: {
        name: "Prabhjyot Singh Dhillon",
        designation: "Student",
        location: "Windsor, Ontario",
        about:
            "I work a lot on hobby projects to learn new technologies. Currently pursuing my Masters in Applied Computing from University of Windsor. Always online on Steam 🎮😀.",
    },
    projects: [
        {
            imageName: "coviddb",
            name: "Covid DB",
            description:
                "App to get Covid-19 details for various countries with graphs showing historical data.",
            gitLink: "https://github.com/eclairsp/covid-dashboard",
            liveLink: "https://covid.prab.tech/",
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
            liveLink: "https://flixi.prab.tech/",
            list: [
                "Local storage based cache for search queries.",
                "JWT for user sessions.",
                "TMDB API used for all information.",
            ],
        },
        {
            imageName: "polr",
            name: "polr",
            description:
                "Create polls, share them to get votes in real time. For private polls, set a password.",
            gitLink: "https://github.com/eclairsp/polr",
            liveLink: "https://polrr.herokuapp.com/",
            list: [
                "Front end made unsing Vue and Nuxt.",
                "Backend in a GraphQL API. API code can be found on GitHub",
                "Two themes, dark and light.",
            ],
        },
        {
            imageName: "rpsls",
            name: "RPSLS",
            description:
                "RPSLS is a simple game of Rock, Paper, Scissor, Lizard and Spock.",
            gitLink: "https://github.com/eclairsp/RPSLS",
            liveLink: "https://rpsls.prab.tech/",
            list: [
                "The extension was popularised by The big bang theory. It gives some extra flair to the already popular Rock, Paper, Scissors.",
                "Play against computer.",
                "Made using React.",
            ],
        },
        {
            imageName: "recinst",
            name: "RecInst",
            description:
                "RecInst is a school project. In this we implemented a model which tries to find the instruments playing in a song.",
            gitLink: "https://github.com/eclairsp/RecInst-api",
            liveLink: "https://recinst.prab.tech/",
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
    el: "#main",
    data: {
        info: info,
        num: 0,
        show: Array(info.projects.length + 2).fill(false),
        showProjects: false,
        transitionName: "bounce-next",
        menuOpen: false,
        mainContentClass: "main--content",
        mainClass: "main",
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
                this.mainClass = "main";
            }, 1000);
            this.mainContentClass = "main--content exit";
            this.mainClass = "main main--swing--up";
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
                this.mainClass = "main";
            }, 1000);
            this.mainContentClass = "main--content exit-1";
            this.mainClass = "main main--swing--down";
        },
        menu: function () {
            this.menuOpen = !this.menuOpen;
            if (!this.menuOpen) {
                this.showProjects = false;
            }
        },
        menuNav: function (i, type) {
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
            if (type != "desktop") {
                this.showProjects = false;
            }
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
        this.$set(this.show, 0, true);
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
