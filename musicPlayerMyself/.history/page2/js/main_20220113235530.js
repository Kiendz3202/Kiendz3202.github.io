//mở đóng khi ấn vào thanh menu nhạc
var navCheck = document.querySelector(".header .nav-check");
var goList = document.querySelector(".app-list");
var outList = document.querySelector(".time-header")
navCheck.addEventListener("click", navigate);
outList.addEventListener("click", navigate);
var isNavigate = 1
function navigate() {
  if (isNavigate == 1) {
    goList.style.display = "block"
    isNavigate = 0;
  } else {
    goList.style.display = "none";
    isNavigate = 1;
  }
}



const listSongs = document.querySelector(".listSongs");
const btnToggle = document.querySelector(".btn-toggle");
const faPlay = document.querySelector(".fa-play");
const faPause = document.querySelector(".fa-pause");
const mainPicture = document.querySelector(".mainPicture");
const textAboutSong = document.querySelector(".textAboutSong");
const audio = document.querySelector("#audio");
const progress = document.querySelector("#progress");
const cd = document.querySelector(".mainPicture img");
const btnNext = document.querySelector(".btn-next")
const btnPre = document.querySelector(".btn-pre")
const btnRandom = document.querySelector(".btn-random ")
const btnRepeat = document.querySelector(".btn-repeat");
const aboutSong = document.querySelector(".aboutSong");

//quay,dừng đĩa nhạc khi hát
const pictureRotate = mainPicture.animate([
  { transform: 'rotate(360deg)' }
], {
  duration: 15000,
  iterations: Infinity
})
pictureRotate.pause()

//phần code chính phần app
const app = {
  isRepeat: false,
  isPlaying: 0,
  currentIndex: 0,
  isRandom: false,
  songs: [
    {
      name: 'Nevada',
      singer: 'Vicetone',
      path: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3?st=_IjpS9u0LjapNgzm058wVw&e=1623143773',
      image: 'https://i.pinimg.com/originals/f8/6f/33/f86f3378e656883b33594f06d78d1634.jpg',
    },
    {
      name: 'Light It Up',
      singer: 'Robin Hustin x TobiMorrow',
      path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
    },
    {
      name: 'Yoru ni kakeru',
      singer: 'YOASOBI',
      path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
    },
    {
      name: 'Muộn rồi mà sao còn',
      singer: 'Sơn Tùng M-TP',
      path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
      image: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
    },
    {
      name: 'See You Again',
      singer: 'Charlie Puth ft Wiz Khalifa',
      path: 'https://aredir.nixcdn.com/NhacCuaTui894/SeeYouAgain-KurtSchneiderEppicAlexGoot-3888930.mp3?st=1q73myBS8FKr8Rx0snpMJw&e=1623144094',
      image: 'https://nghiennhac.com/wp-content/uploads/2020/09/see-you-again-0.jpg',
    },

    {
      name: 'Symphony',
      singer: 'Clean Bandit',
      path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
      image: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
    },
    {
      name: 'Waiting For Love',
      singer: 'Avicii',
      path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
      image: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
    },
    {
      name: 'Alone',
      singer: 'Marshmello',
      path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
      image: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
    },
    {
      name: 'Something Just Like This',
      singer: 'The Chainsmokers & Coldplay',
      path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
    },
    {
      name: 'Sugar',
      singer: 'Maroon 5',
      path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
      image: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
    }
  ],
  //hàm render nhạc ra màn hình
  render: function () {
    const htmls = this.songs.map(function (item, index) {
      return `
            <div class="aboutSong ${index == app.currentIndex ? "activeSong" : ""}" data-index = "${index}">
                    <div class="aboutSong-img">
                        <div class="imgMain" style = "background-image: url('${item.image}')"></div>
                    </div>
                    <div class="aboutSong-text">
                        <h2>${item.name}</h2>
                        <h3>${item.single}</h3>
                        <h4>ALBUM</h4>
                    </div>
                    <div class="aboutSong-heart"><i class="fa fa-heart reacted" aria-hidden="true"></i></div>
                    
                </div>
            `
    });
    listSongs.innerHTML = htmls.join("");

  },
  //định nghĩa mới cho currentSong
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    })
  },
  //hàm lắng nghe tất cả event của app
  handleEvent: function () {
    // let isPlaying = 0;
    btnToggle.addEventListener("click", function () {
      if (app.isPlaying) {
        app.isPlaying = 0;
        audio.pause();
        faPlay.classList.add("active");
        faPause.classList.remove("active");
        pictureRotate.pause()
      } else {
        app.isPlaying = 1;
        audio.play();
        faPlay.classList.remove("active");
        faPause.classList.add("active");
        pictureRotate.play();
      }
    });
    //lấy ra đc thời gian thực bài hát đang chạy
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
        progress.value = progressPercent;
      }
    }
    //tua
    progress.oninput = function () {
      const seektime = (audio.duration * (progress.value / 100))
      audio.currentTime = seektime;
    }
    //nhấn nút sang bài sau
    btnNext.onclick = function () {
      app.nextSong();
      app.render();
      // app.scrollToActiveSong();

    }
    //nhấn sang bài trước
    btnPre.onclick = function () {
      app.preSong();
      app.render();
      // app.scrollToActiveSong();
    }
    //nút random
    btnRandom.onclick = function () {
      app.isRandom = !app.isRandom;
      btnRandom.classList.toggle("action", app.isRandom)
    }
    //lắng nghe bài hát khi kết thúc
    audio.onended = function () {
      if (app.isRepeat) {
        audio.play();
      } else {
        app.nextSong();
      }

    }
    //nút repeat
    btnRepeat.onclick = function () {
      app.isRepeat = !app.isRepeat;
      btnRepeat.classList.toggle("action", app.isRepeat)
    }
    //khi click vào bài hát để chuyển bài cụ thể 
    listSongs.onclick = function (e) {
      const clickSong = e.target.closest(".aboutSong:not(.activeSong)");

      if (clickSong) {
        app.currentIndex = Number(clickSong.dataset.index);
        app.render();
        app.loadCurrentSong();
        app.isPlaying = 1;
        audio.play();
        faPlay.classList.remove("active");
        faPause.classList.add("active");
        pictureRotate.play();
      };


    }
  },
  //hàm load bài hiện tại
  loadCurrentSong: function () {
    mainPicture.innerHTML = `<img src="${this.currentSong.image}" alt="">`

    textAboutSong.innerHTML = `<h2>${this.currentSong.name}</h2>
      <p>${this.currentSong.singer}</p>`
    audio.src = this.currentSong.path;
  },
  //hàm phát bài tiếp theo
  nextSong: function () {
    if (this.isRandom) {
      app.playRandom();
    } else {
      app.currentIndex++;
      if (app.currentIndex >= app.songs.length) {
        app.currentIndex = 0
      }
      app.loadCurrentSong();
    }

    app.isPlaying = 1;
    audio.play();
    faPlay.classList.remove("active");
    faPause.classList.add("active");
    pictureRotate.play();

  },
  //hàm lấy bài trước đó
  preSong: function () {
    if (this.isRandom) {
      app.playRandom();
    } else {
      app.currentIndex--;
      if (app.currentIndex < 0) {
        app.currentIndex = (app.songs.length - 1)
      }
      app.loadCurrentSong();
    }
    app.isPlaying = 1;
    audio.play();
    faPlay.classList.remove("active");
    faPause.classList.add("active");
    pictureRotate.play();

  },
  //hàm random nhạc
  playRandom: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * app.songs.length)
    } while (newIndex == this.currentIndex);
    app.currentIndex = newIndex;
    app.loadCurrentSong();
  },
  // scrollToActiveSong:function(){
  //   const activeSong = document.querySelector(".aboutSong.activeSong");
  //   activeSong.scrollIntoView({
  //     behavior:"smooth",
  //     block:"center",
  // })
  // },

  //gọi lại các function 
  start: function () {
    this.defineProperties();
    this.render();
    this.handleEvent();
    this.loadCurrentSong();
  }
}
//chạy chương trình
app.start();
