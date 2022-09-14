const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $(".playlist");

const app = {
  songs: [
    {
      name: "Little do you know",
      author: "Alex & Sierra",
      image: "./assets/img/Suzy4.jpg",
      path: "./assets/music/Little_do_you_know_Alex_&_Sierra.mp3",
    },
    {
      name: "When night falls",
      author: "Eddi Kim",
      image: "./assets/img/Suzy2.jpg",
      path: "./assets/music/When_night_falls_Eddi_Kim.mp3",
    },
    {
      name: "Too late",
      author: "Addie Nicole",
      image: "./assets/img/TooLate.jfif",
      path: "./assets/music/Too_Late_Addie Nicole.mp3",
    },
    {
      name: "Versace",
      author: "The Same Persons",
      image: "./assets/img/versace.jfif",
      path: "./assets/music/Versace_The_Same_Persons.mp3",
    },
    {
      name: "Set fire to the rain",
      author: "Rain Adele ft. Vahn Remix",
      image: "./assets/img/setFireToTheRain.jfif",
      path: "./assets/music/Set_Fire_To_The_Rain_Adele_x_Vahn_Remix.mp3",
    },
    {
      name: "Kiss Remix",
      author: "Hung Bobi Remix",
      image: "./assets/img/Kiss.jfif",
      path: "./assets/music/Kiss_Hung_Bobi_Remix.mp3",
    },
    {
      name: "Trap Queen Remix",
      author: "Adriana Gomez",
      image: "./assets/img/trapQueen.jfif",
      path: "./assets/music/Trap_Queen_Remix_Adriana_Gomez.mp3",
    },
    {
      name: "Devil From Heaven",
      author: "TVT Remix",
      image: "./assets/img/Devil.jpg",
      path: "./assets/music/Ac_ma_den_tu_thien_duong_TVT_Remix.mp3",
    },
    {
      name: "Cheap Thrills",
      author: "Sia",
      image: "./assets/img/CheapThrill.jfif",
      path: "./assets/music/Cheap_Thrills_Sia.mp3",
    },
    {
      name: "Let's marriage",
      author: "Masew ft. Masiu",
      image: "./assets/img/CuoiThoi.jpg",
      path: "./assets/music/Cuoi_Thoi_Masew_x_Masiu.mp3",
    },
    {
      name: "Diamond Ver 2",
      author: "VQ Remix",
      image: "./assets/img/diamond.jfif",
      path: "./assets/music/Diamond_Ver2_VQ_Remix.mp3",
    },
    {
      name: "Everytime we touch",
      author: "Cascada",
      image: "./assets/img/Everytimewetouch.jfif",
      path: "./assets/music/Everytime_we_touch.mp3",
    },
    {
      name: "How to love",
      author: "Cash Cash ft. Sofia Reyes",
      image: "./assets/img/howtolove.jfif",
      path: "./assets/music/How_to_love_Cash_Cash_ft_Sofia_Reyes.mp3",
    },
    {
      name: "I need your love",
      author: "Madilyn Bailey",
      image: "./assets/img/IneedYourLove.jfif",
      path: "./assets/music/I_need_your_love_Madilyn_Bailey.mp3",
    },
    {
      name: "Larg Remix",
      author: "Elgit Doda",
      image: "./assets/img/larg.jfif",
      path: "./assets/music/Larg_Elgit_Doda.mp3",
    },
    {
      name: "Love me like you do",
      author: "Ellie Goulding",
      image: "./assets/img/LoveMeLikeYouDo.jfif",
      path: "./assets/music/Love_me_like_you_do_Ellie_Goulding.mp3",
    },
    {
      name: "Love story",
      author: "Taylor Swift",
      image: "./assets/img/Taylor.jpg",
      path: "./assets/music/Love_story_Taylor_Swift.mp3",
    },
    {
      name: "Love the way you lie",
      author: "Skylar Grey",
      image: "./assets/img/Suzy3.jpg",
      path: "./assets/music/Love_the_way_you_like_Skylar_Grey.mp3",
    },
    {
      name: "Nevada",
      author: "Vicetone ft. Cozi Zuehlsdorff",
      image: "./assets/img/Nevada.jfif",
      path: "./assets/music/Nevada_Vicetone_feat_Cozi_Zuehlsdorff.mp3",
    },
    {
      name: "Payphone",
      author: "Alex G",
      image: "./assets/img/payphone.jfif",
      path: "./assets/music/Payphone_Alex_G.mp3",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <div class="song">
          <div
            class="thumb"
            style="background-image: url('${song.image}')">
          </div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.author}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },
  handleEvents: function () {
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth;

    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
  },
  start: function () {
    this.handleEvents(), this.render();
  },
};

app.start();
