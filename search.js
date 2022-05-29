 function searchGif() {
     let search = document.querySelector('input').value;
     console.log(search);
     fetch("https://api.giphy.com/v1/gifs/search?api_key=80SjGFEzw0OZex5fkvafLBATmpARnEu7&q=" + search + "&limit=5&offset=0&rating=g&lang=en")
         .then(response => response.json())
         .then(picture => {
             let picArray = picture.data;
             console.log(picArray);
             let searchContent = "";
             for (let object of picArray) {
                 let keys = object.url;
                 console.log(keys);
                 searchContent += `<div> <img src="${keys}"> </div>`;
                 console.log(searchContent);
             }
             document.querySelector(".result").innerHTML = searchContent;
         })
         .catch(error => console.log(error));
 };