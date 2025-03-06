function ready() {
    console.log('DOM is ready');
    
}

document.addEventListener('DOMContentLoaded', ready);

function load() {
    console.log('Page loaded');
    
}

window.addEventListener('load', load);


// window.addEventListener("beforeunload", (event) => {
//     // works, same as returning from window.onbeforeunload
//     event.returnValue = "There are unsaved changes. Leave now?";
//   });

let p = document.getElementsByTagName("p")[0];
console.log(p.id);












