const items=document.querySelectorAll(".timeline li");

function elementInview(el){
    let rect=el.getBoundingClientRect();
    return (rect.top>=0&&rect.bottom<=(window.innerHeight || document.documentElement.clientHeight));    
}
function callback(){
    items.forEach((item)=>{
        if(elementInview(item)){    
            item.classList.add("in-view");
        }
    })
}
window.onload=callback;
window.onresize=callback;
window.onscroll=callback;