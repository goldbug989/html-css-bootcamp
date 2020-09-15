
//change paragraph text on center of page depending on link mouseover
// the links are     create......become......find

//create link
document.querySelector('#create-link').addEventListener('mouseover',function(){
  changeDisplay('create');
});//end of anonymous function
//when mouseover leaves link go back to default
document.querySelector('#create-link').addEventListener('mouseout',function(){
  defaultText('create');
});//end ouf create link mouse out anonymous function

//become link
document.querySelector('#become-link').addEventListener('mouseover',function(){
  changeDisplay('become');
});
// //when mouseover leaves link go back to default
document.querySelector('#become-link').addEventListener('mouseout',function(){
  defaultText('become');
});//end ouf become link mouse out anonymous function

//find link
document.querySelector('#find-link').addEventListener('mouseover',function(){
  changeDisplay('find');
});
// //when mouseover leaves link go back to default
document.querySelector('#find-link').addEventListener('mouseout',function(){
  defaultText('find');
});//end ouf become link mouse out anonymous function


//functions do not repeat yourself
function changeDisplay(paragraph){
    document.getElementById('default-text').classList.remove('show');
    document.getElementById(paragraph).classList.add('show');
}
//function do not repeat yourself
function defaultText(paragraph){
    document.getElementById(paragraph).classList.remove('show');
    document.getElementById('default-text').classList.add('show');
}
