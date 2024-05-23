window.addEventListener("load", function() {

    const dataUrl = './apis/left4.json';

    fetch(dataUrl)
    .then((res)=>{
        console.log(res);
        const data = res.json();    
        return data;
    })
    .then((result)=>{
        let left4Slide = "";

        for(let i = 0; i < result.length ;i++){
            const data = result[i];
            const temp = `<a href="#" class="left4a">
            <div class="left4-left">
                <img class="left4-left-img" src="./images/left4/${data.imgpath}" alt="거북이"></img>
            </div>
            <div class="left4-right">
                <div class="left4-right-1">${data.tag}</div>
                <div class="left4-right-2">${data.title}</div>
                <div class="left4-right-3">${data.content}</div>
                <div class="left4-right-4">
                    <progress class="progressbar4" id="progress" value="70" min="0" max="100"></progress>
                </div>
                <div class="left4-right-5">
                    <div class="left4-right-5-left">${data.money}</div>
                    <div class="left4-right-5-right">${data.percentage}</div>
                </div>
            </div>
        </a>`;
        left4Slide += temp;
        }
        const whereTag = document.querySelector(".left4");
        whereTag.innerHTML = left4Slide;
    })
    .catch((error) =>{
        console.log(error);
    });











});