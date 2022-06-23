window.onload=function(){
  const prices=[120,50,180];
  const result=document.getElementById("result");
  const fruits=document.getElementsByClassName("fruits");
  /*
  for(let i=0;i<fruits.length;i++){
    fruits[i].addEventListener("change",numberChange);
  }
  */
  for(let f of fruits){
    f.addEventListener("change",numberChange);
  }
  function numberChange(){
//  const numberChange=()=>{  //この書き方の場合　拡張for文は下に書く必要あり
    let sum=0;
    for(let i=0;i<fruits.length;i++){
      sum += fruits[i].value * prices[i];
      //sum += fruits[i].value * getAttribute[i]???;
    }
    result.textContent=sum+"円です!";
  }
};