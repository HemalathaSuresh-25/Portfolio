let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = Window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });


        };
    });
    /*--------------------------------sticky navbar---------------------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};
$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click',".btn",function(){
        var moreLessButton=$(".invisible-content").is(".visible-content")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".services-box").find(".invisible-content").toggle();
        $(this).parent(".services-box").find(".visible-content").toggle();

    });

});


function read_more_less(){
    var dots= document.getElementById('dots');
    var more= document.getElementById('more');
    var mybtn= document.getElementById('mybtn');
    if(dots.style.display === 'none')
    {
        dots.style.display = 'inline';
        more.style.display = 'none';
        mybtn.innerHTML = "Read more";
    }
    else
    {
        dots.style.display = 'none';
        more.style.display = 'inline';
        mybtn.innerHTML = "Read less";
    }
}

/*let noofcharac=150;
let contents=document.querySelectorAll(".content");
contents.forEach(content =>{
    if(content.textContent.length < noofcharac){
        content.nextElementSibling.style.display="none";
    }
    else{
        let displayText = content.textContent.slice(0,noofcharac);
        let moreText=content.textContent.slice(noofcharac);
        content.innerHTML=`${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});
function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dot").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn,textContent=="Read More"?btn.textContent="Read Less":btn.textContent="Read More";
}*/



/*let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letter= word.textContent.split("");
    word.textContent="";
    letter.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});

let currentWordIndex=0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity="1";

let changeText=()=>{
    let currentWord=words[currentWordIndex];
    let nextWord=currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex+1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
        letter.className="letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000);*/