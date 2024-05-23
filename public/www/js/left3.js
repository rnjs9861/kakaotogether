
window.addEventListener("load", function(){

    const dataUrl = "./apis/left3.json";


    fetch(dataUrl)
    .then((response) => {
      const data = response.json();
      return data;
      console.log(data);
    })
    .then((result) => {

      let slideTags = "";

      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        const test = `<a class="swiper-slide left3">
        <div class=flexflex>
        <div class="left3-left">
            <img class="left3-left-img" src="./images/left3/${data.imgpath}" alt="거북이" />
        </div>
        <div class="left3-right">
            <div class="left3-right-1">${data.tag}</div>
            <div class="left3-right-2">${data.title}</div>
            <div class="left3-right-3">${data.content}</div>
            <div class="left3-right-4">
                2,121명 행동준
            </div>
        </div>
        </div>
    </a>`;
        slideTags += test;
      }
      // 원하는 장소에 출력해 보자.
      const whereTag = document.querySelector(".topslide .swiper-wrapper");
      whereTag.innerHTML = slideTags;

      //기본코드를 넣어보자.
      const topSlide = new Swiper(".topslide", {
        loop: true,
        speed: 200,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination-bullet-active",
          clickable: "true",
        },
      });
      const logos = document.querySelector(".topslide");

      logos.addEventListener("mouseenter", function () {
      topSlide.autoplay.stop();
      
     })

      logos.addEventListener("mouseleave", function(){
      topSlide.autoplay.start();
     });
    })

    .catch((error) => {
      console.log(error);
    });


    


});
