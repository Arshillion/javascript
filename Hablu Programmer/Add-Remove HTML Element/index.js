// let ID1=document.getElementById("ID1");
// ID1.innerHTML="Id changed";

// let className1=document.getElementsByClassName("className1")[1];
// className1.innerHTML="Paragraph Changed";

// let Name5=document.getElementsByName("Name5")[0];
// Name5.innerHTML="Name 5";

// let tagName1=document.getElementsByTagName("h1")[0];
// tagName1.innerHTML="Tage name";

// let div=document.createElement("div");
// div.innerHTML="<p> hello Elias</p>";
// document.body.appendChild(div);


 //let menu = document.getElementById('menu');
// // create a new node
//let li = document.createElement('li');
//li.textContent = 'Home';
// // replace the first list item
 //menu.replaceChild(li, menu.lastElementChild);

// let menu = document.querySelector('#menu');
// let clonedMenu = menu.cloneNode(true);
// clonedMenu.id = 'menu-mobile';
// document.body.appendChild(clonedMenu);

/*
<script>
  const styleInterval=setInterval(() => {
    try{
      let menu1 = document.getElementById("bcpo-select-option-0");
      //let menu1 = document.querySelector(".selector-wrapper");
      let div = document.createElement("div");
      div.setAttribute("id", "imgPopup");
      div.setAttribute(
        "class",
        "{% if section.settings.imgPopup==false %}d-none{% endif %}"
      );
      div.innerHTML = `
                    <img
                      id="imgPopups"
                      src="https://cdn.shopify.com/s/files/1/0562/9358/9191/files/Button.png"
                      alt=""
                      height="18px"
                      width="18px"
                    >`;
      
        menu1.appendChild(div);
        //menu1.insertAdjacentHTML("afterend", div);
        var imgPopup = document.getElementById("imgPopup");
        imgPopup.addEventListener("click", function () {
          console.log("clicked");
          var modal = document.getElementById("popup-modal");
          var closeBtn = document.querySelector(".popup-close");
        
          // Show the modal when the page loads
          modal.style.display = "grid";
          var setTimeOut = setTimeout(myFunction, 3000);
        
          // Close the modal when the close button is clicked
          closeBtn.onclick = function () {
            modal.style.display = "none";
            clearTimeout(setTimeOut);
          };
        
          // Close the modal if the user clicks anywhere outside the modal content
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
              clearTimeout(setTimeOut);
            }
          };
        });
      
      clearInterval(styleInterval);
    } catch (error) {
        console.log('error', error);
    }
  }, 10);
</script>
*/
