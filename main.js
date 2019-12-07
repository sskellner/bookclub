// $(document).ready(function(){
  // $('#comments-container').comments({
  //     getComments: function(success, error) {
  //         var commentsArray = [{
  //             id: 1,
  //             created: '2015-10-01',
  //             content: 'Lorem ipsum dolort sit amet',
  //             fullname: 'Simon Powell',
  //             upvote_count: 2,
  //             user_has_upvoted: false,
  //             enableAttachments: true
  //         }];
  //         // debugger;
  //         success(commentsArray);
  //     }
  // })

  $(document).ready(function(){
    $('.single-item').slick(
      // {
    // infinite: false,
    // speed: 200,
    // draggable: false
    // slidesToShow: 1,
    // slidesToScroll: 1
    // }
  );
  for (let i=0; i<isbns.length; i++) {
    google.books.load();
    function initialize() {
      let div = document.createElement('div');
      div.setAttribute('class', 'viewerCanvas');
      // div.textContent = "Sup, y'all?";
      let viewer = new google.books.DefaultViewer(div);
      let isbn = 'ISBN:'+isbns[i];
      viewer.load(isbn, alertNotFound);
      $(".single-item").slick('slickAdd', div);
    }
    google.books.setOnLoadCallback(initialize);
  }
  // $('single-item').find('.slick-active').css('z-index', 1);
    // var slideIndex = 4;
    // $('.newbook').on('click', function() {
    //   slideIndex++;
    //   $('.slider-info').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
    //   $('.slider-info').slick('slickGoTo', 'slickCurrentSlide' + 1);
    // });
  });

  let isbns = [
    '1501146564', '1612197493', '0062418122', '0691178321'
  ]

  const imgurls = [
  ]

  function alertNotFound() {
    alert("could not embed the book!");
  }
  // $('.slick-img').slick({
  //   infinite: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // });
// });

// function addImg () {
//   console.log('button was clicked');
//   // create a new div element
//   // let newDiv = document.createElement("div");
//   // and give it some content
//   let newContent = "Hi there and greetings!";
//   // add the text node to the newly created div
//
//   // add the newly created element and its content into the DOM
//   let currentDiv = document.getElementById("testing");
//   currentDiv.innerHTML=newContent;
// }



// function runJson() {
//   for (let i=0; i<isbns.length; i++) {
//     debugger;
//     let http = new XMLHttpRequest();
//     let url = "https://www.googleapis.com/books/v1/volumes?q=isbn:"+isbns[i];
//     // debugger;
//     // console.log(url);
//     http.open("GET", url);
//     http.send();
//
//     http.onreadystatechange = (e) => {
//       let response = JSON.parse(http.responseText);
//       let image = response.items[0].volumeInfo.imageLinks.thumbnail;
//       imgurls.unshift(image);
//       console.log(imgurls.length);
//     }
//   }
//   addImgsfromJson(imgurls);
// }

// function addImgsfromJson(array){
//   // console.log(array.length);
//   let imgContainers = document.getElementsByClassName('slick-img');
//   for (let i=0; i<imgContainers.length; i++) {
//     console.log(array[i]);
//     let newTag = "<img src="+array[i]+" />";
//     console.log(newTag);
//     imgContainers[i].innerHTML = newTag;
//   }
// }

// function initialize() {
//   var newViewerDiv = document.createElement('div');
//   newViewerDiv.className = 'viewerCanvas';
//   newViewerDiv.innerHTML = 'this created div contains class while created!!!';
//   document.getElementById('dd').appendChild(newNode);
//   let viewerSpot = document.getElementsByClassName("viewerCanvas");
//   for (let i=0; i<isbns.length; i++) {
//     let viewer = new google.books.DefaultViewer(viewerSpots[i]);
//     let isbn = 'ISBN:'+isbns[i];
//     // console.log(isbns.length);
//     // console.log(isbn);
//     viewer.load(isbn, alertNotFound);
//   }
// }

//



//
// function initialize() {
//   let viewerSpots = document.getElementsByClassName("viewerCanvas");
//   // console.log(viewerSpots.length);
//   for (let i=0; i<isbns.length; i++) {
//     let viewer = new google.books.DefaultViewer(viewerSpots[i]);
//     let isbn = 'ISBN:'+isbns[i];
//     // console.log(isbns.length);
//     // console.log(isbn);
//     viewer.load(isbn, alertNotFound);
//   }
// }

function hoveredFunction(element) {
  console.log("viewer was hovered")
  // viewerSpots.style.width = "100px";
  // element.style.background="green";
}

function addBookFunction(input) {
  if(isNaN(input)) {
    console.log("invalid input");
  } else {
    console.log("this is a number");
    let isbnscopy = jQuery.extend(true, [], isbns);
    isbnscopy.unshift(input);
    isbns = isbnscopy;
  }
  console.log(isbns.length);

  let div = document.createElement('div');
  let viewer = new google.books.DefaultViewer(div);
  div.setAttribute('class', 'viewerCanvas');
  let isbn = 'ISBN:'+isbns[0];
  viewer.load(isbn, alertNotFound);
  $(".single-item").slick('slickAdd', div);
  $('.single-item').slick('slickGoTo', 'slickCurrentSlide' + 1);
}

function removeThisSlide() {
  var currentSlide = $('.single-item').slick('slickCurrentSlide');
  console.log("remove" + currentSlide);
  $('.single-item').slick('slickRemove', currentSlide);
  // if (currentSlide !== 0){
  //   currentSlide--;
  // }
}


// this is for search results api loading...
// function handleResponse(response) {
//   for (var i = 0; i < response.items.length; i++) {
//     var item = response.items[i];
//     // in production code, item.text should have the HTML entities escaped.
//     document.getElementById("viewerCanvas3").innerHTML += "<br>" + item.volumeInfo.title;
//   }
// }
