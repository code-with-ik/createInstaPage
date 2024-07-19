let arr = [
    {
      dp: "https://images.unsplash.com/photo-1621786032758-112a390cb7ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1616091093623-cf4b7bbd2e18?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1625376212522-78872a686380?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1615805159543-043d26ec1080?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1615805159563-afb93520d5e7?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  let storiyan = document.querySelector("#storiyan");
  let fullScreen = document.querySelector("#full-screen");
  let DP = document.querySelector(".dp");
  let postPage = document.querySelector("#post-page");
  let postDp = document.querySelector(".post-dp");
  let like = document.querySelector("#post-page i");
  
  let clutter = "";
  arr.forEach(function (val, idx) {
    clutter += `  <div class="story">
     <img id="${idx}" src="${val.dp}" alt="">
   </div>`;
  });
  
  let origanlPostContent = postPage.innerHTML;
  storiyan.innerHTML = clutter;
  
  storiyan.addEventListener("click", function (dets) {
    fullScreen.style.display = "block";
    DP.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    DP.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    postPage.innerHTML = "";
    setTimeout(function () {
      fullScreen.style.display = "none";
      DP.style.display = "none";
      postPage.innerHTML = origanlPostContent;
    }, 2000);
  });
  
  postPage.addEventListener("click", function () {
    like.style.opacity = 1;
    setTimeout(function () {
      like.style.opacity = 0;
    }, 1000);
  });