document.querySelector(".acorns_pic a").addEventListener("click", (event) => {
    console.log("みよしん");
    // document.getElementById("modal_container").style.display = "block";
    $("#modal_container").fadeIn(800);
    document.querySelector(".calendar_wrap").classList.add("blur");
});

document.querySelector(".box").addEventListener("click", (event) => {
    // document.getElementById("modal_container").style.display = "none";
    $("#modal_container").fadeOut(600);

    document.querySelector(".calendar_wrap").classList.remove("blur");
});

document.addEventListener("click", (event) => {
    if (event.target === document.querySelector(".calendar_wrap")) {
        document.getElementById("modal_container").style.display = "none";
    }
});
