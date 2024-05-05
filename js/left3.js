
window.addEventListener("load", function(){

    const dataUrl = "./apis/left3.json";


    fetch(dataUrl)
    .then((res)=>{
        const data = res.json();
        return data;
    })
    .then((result)=>{
        let left3Slide = "";

        for(let i = 0; i<result.length; i++){
            const data = result[i];

            const tag=`<a href="#" class="left3a">
                <div class="left3-left">
                    <img class="left3-left-img" src="./img/left3/${data.imgpath}" alt="거북이"></img>
                </div>
                <div class="left3-right">
                    <div class="left3-right-1">${data.tag}</div>
                    <div class="left3-right-2">${data.title}</div>
                    <div class="left3-right-3">${data.content}</div>
                    <div class="left3-right-4">
                        2,121명 행동준
                    </div>
                </div>
            </a>`;
            left3Slide += tag;
        }

        const whereTag = document.querySelector(".left3withPagination .swiper-left3");
        whereTag.innerHTML = left3Slide;

        const slide = new Swiper(".swiper-left3withPagination", {
            loop: true,
            speed: 800,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".left3-pagination",
              clickable: true,
            },
        });

    })
    .catch((error)=>{
        console.log(error);
    });


});