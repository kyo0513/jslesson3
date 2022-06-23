window.onload=function(){
    const hides=document.getElementsByClassName("hide");
    for(let i=0;i<hides.length;i++){
        hides[i].addEventListener("mouseover",function(){
            this.style.color="blue";
        });
        hides[i].addEventListener("mouseout",function(){
            this.style.color="#aaa";
            this.style.fontSize="16px";
        });
        hides[i].addEventListener("click",function(){
            this.style.fontSize="40px";
        });
    }
};