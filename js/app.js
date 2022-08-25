// These are all the selectors...We can access elements by using their classes and id's so that we can perform some calculations on them... The ".(dot)" indicates that it is a class...The "#(id)" indicates that it is an ID.

const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const loginForm = document.querySelector("#login-form");
const signUp = document.querySelector("#sign-up-form");
const homeSignIn = document.querySelector("#home-sign-in");

if (signInBtn != null) {
  signInBtn.addEventListener("click", () => {
    loginForm.classList.add("show");
    signUp.classList.add("hide");
    document.title = "Log In";
  });
}

if (signUpBtn != null) {
  signUpBtn.addEventListener("click", () => {
    loginForm.classList.remove("show");
    signUp.classList.remove("hide");
    signUp.classList.add("show");
    document.title = "Register";
  });
}

// Sign In Form Submission

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("#login-form");
const signUpForm = document.querySelector("#sign-up-form");

// This is checking that if the username and password is equal to the specific values or not...If yes the user will go to the login page otherwise it will show "Wrong Credentials"...

// Loop through Array of Objects
var objPeople = [
  {
    // Object @ 0 index
    username: "sam",
    password: "codify",
  },
  {
    // Object @ 1 index
    username: "matt",
    password: "academy",
  },
  {
    // Object @ 2 index
    username: "chris",
    password: "forever",
  },
];

if (form != null) {
  form.addEventListener("submit", (e) => {
    for (var i = 0; i < objPeople.length; i++) {
      // check is user input matches username and password of a current index of the objPeople array
      if (
        username.value == objPeople[i].username &&
        password.value == objPeople[i].password
      ) {
        console.log(username + " is logged in!!!");
        // stop the function if this is found to be true
        return;
      }
    }

    //   It is preventing the form from submission if the values are incorrect

    e.preventDefault();
    alert("Wrong Credentials");
  });
}
// Sign up form Submission

if (signUpForm != null) {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // store new users username
    var registerUsername = document.getElementById("name").value;
    // store new users password
    var registerPassword = document.getElementById("sign-up-password").value;
    // store new user data in an object
    var newUser = {
      username: registerUsername,
      password: registerPassword,
    };
    // loop throught people array to see if the username is taken, or password to short
    for (var i = 0; i < objPeople.length; i++) {
      // check if new username is equal to any already created usernames
      if (registerUsername == objPeople[i].username) {
        // alert user that the username is take
        alert("That username is already in use, please choose another");
        // stop the statement if result is found true
        return;
        // check if new password is 8 characters or more
      } else if (registerPassword.length < 8) {
        // alert user that the password is to short
        alert("That is to short, include 8 or more characters");
        // stop the statement if result is found true
        return;
      } else if (registerPassword != confirmPassword.value) {
        alert("Password Didn't Match");
        return;
      }
    }

    e.preventDefault();

    // push new object to the people array
    objPeople.push(newUser);
    // console the updated people array
    console.log(objPeople);

    loginForm.classList.add("show");
    signUp.classList.add("hide");
  });
}

const htmlPage = document.querySelector("html");
const panelDiv = document.querySelector(".fa-universal-access");
const panel = document.querySelector(".accessibility-panel");
const crossBtn = document.querySelectorAll(".fa-square-xmark");
const eyeCheckbox = document.querySelector("#eye-checkbox");
const magnifyCheckbox = document.querySelector("#magnify-checkbox");
const resetBtn = document.querySelector("#reset-btn");
const navBar = document.querySelector(".nav-button-div");
const vaBox = document.querySelectorAll(".va-box");
const links = document.querySelectorAll("a");
const footer = document.querySelector(".footer-div");
const footerLinks = document.querySelector(".footer-links-div");
const socialIconDiv = document.querySelector(".social-icons-div");
const navButtonDiv = document.querySelector(".nav-button-div");
const homePageBtn = document.querySelectorAll(".home-page-btn");
const navbarDiv = document.querySelector(".navbar-div");
const navbarDivItem = document.querySelectorAll(".navbar-div-item");
const submitBtn = document.querySelector("#submit-btn");
const registerBtn = document.querySelectorAll(".submit-btn")[1];
const heading = document.querySelectorAll(".login-heading");
const forgetPassword = document.querySelectorAll(".forget-password");
const logoDivHomeBtn = document.querySelector(".logo-div-btn");
const pageGridSection = document.querySelector(".page-grid-section");
const boxLinksDiv = document.querySelectorAll(".box-links-div");
const linkDivAnchor = document.querySelectorAll(".link-div a");
const linkDivSmall = document.querySelectorAll(".link-div small");
const box1Heading = document.querySelector(".box1 h3");
const helpButton = document.querySelector(".help-page-btn");
const registerNowDiv = document.querySelector(".register-now-div");
const registerNowDivButton = document.querySelector(".register-now-div a");
const helpContainer = document.querySelector(".help-container");
const helpContainerHeading = document.querySelector(".help-container h1");
// Same thing as the above checkbox...In case of checkbox being checked we are scaling the website and if the checkbox is unchecked we are changing it's setting to default...

function eyeCheckboxFun(eventType) {
  eyeCheckbox.addEventListener(eventType, (event) => {
    if (event.currentTarget.checked) {
      htmlPage.classList.add("zoom");
      if (navBar != null) {
        navBar.style.position = "relative";
      }

      links.forEach((link) => link.classList.add("underline"));
      if (loginForm != null) {
        loginForm.classList.add("white-bg");
        logoDivHomeBtn.classList.add("black-bg");
        heading.forEach((heading) => heading.classList.add("black-bg"));
        forgetPassword.forEach((forget) => forget.classList.add("black-bg"));
      }

      if (signUp != null) {
        signUp.classList.add("white-bg");
        submitBtn.classList.add("black-bg");
        registerBtn.classList.add("black-bg");
      }

      if (pageGridSection != null) {
        pageGridSection.classList.add("white-bg");
        boxLinksDiv.forEach((box) => box.classList.add("black-bg"));
        box1Heading.classList.add("black-bg");
        helpButton.classList.add("black-bg");
        registerNowDiv.classList.add("black-bg");
        registerNowDiv.classList.add("white-color");
        helpContainer.classList.add("white-bg");
        helpContainerHeading.classList.add("black-bg");
        registerNowDivButton.classList.add("white-color");
        box1Heading.classList.add("white-color");
        linkDivAnchor.forEach((link) => link.classList.add("white-color"));
        linkDivSmall.forEach((link) => link.classList.add("white-color"));
      }

      footer.classList.add("white-bg");
      footerLinks.classList.add("black-bg");
      socialIconDiv.classList.add("black-bg");

      if (navButtonDiv != null) {
        navButtonDiv.classList.add("white-bg");
        navbarDiv.classList.add("white-bg");
        homePageBtn.forEach((btn) => btn.classList.add("black-bg"));
        navbarDivItem.forEach((item) => item.classList.add("black-bg"));
      }
    } else {
      htmlPage.classList.remove("zoom");
      if (navBar != null) {
        navBar.style.position = "sticky";
      }

      links.forEach((link) => link.classList.remove("underline"));

      if (loginForm != null) {
        loginForm.classList.remove("white-bg");
        heading.forEach((heading) => heading.classList.remove("black-bg"));
        forgetPassword.forEach((forget) => forget.classList.remove("black-bg"));
        logoDivHomeBtn.classList.remove("black-bg");
      }

      if (signUp != null) {
        signUp.classList.remove("white-bg");
        submitBtn.classList.remove("black-bg");
        registerBtn.classList.remove("black-bg");
      }

      if (pageGridSection != null) {
        pageGridSection.classList.remove("white-bg");
        boxLinksDiv.forEach((box) => box.classList.remove("black-bg"));
        box1Heading.classList.remove("black-bg");
        helpButton.classList.remove("black-bg");
        registerNowDiv.classList.remove("black-bg");
        registerNowDiv.classList.remove("white-color");
        registerNowDivButton.classList.remove("white-color");
        box1Heading.classList.remove("white-color");
        linkDivAnchor.forEach((link) => link.classList.remove("white-color"));
        linkDivSmall.forEach((link) => link.classList.remove("white-color"));
      }

      footer.classList.remove("white-bg");
      footerLinks.classList.remove("black-bg");
      socialIconDiv.classList.remove("black-bg");

      if (navButtonDiv != null) {
        navButtonDiv.classList.remove("white-bg");
        navbarDiv.classList.remove("white-bg");
        homePageBtn.forEach((btn) => btn.classList.remove("black-bg"));
        navbarDivItem.forEach((item) => item.classList.remove("black-bg"));
      }
    }

    set_check();

    return "eye";
  });
}

eyeCheckboxFun("change");

// Again an event listener it is basically opening the accessibility panel when we press enter... 13 is the keyBoard code for enter key

panelDiv.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    panel.classList.add("show");
  }
});

// Here it is opening it by click the icon of accessibility

panelDiv.addEventListener("click", () => {
  panel.classList.toggle("show");
});

// Here we are closing the panel by pressing enter...When we focus on the cross btn and then press enter it closes the panel

crossBtn.forEach((btn) => {
  btn.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
      panel.classList.remove("show");
    }
  });
});

// Closing it by clicking

crossBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    panel.classList.remove("show");
  });
});

// Text Magnifier

// Adding an event to load a function when the page loads
function magnifyTextFun(eventType) {
  magnifyCheckbox.addEventListener(eventType, (event) => {
    // Invoke a function when checkbox is checked
    if (event.currentTarget.checked) {
      // Selecting all the elements in the page and adding a hover event on them
      document.querySelectorAll("html *").forEach((element) => {
        element.addEventListener(
          "mouseover",
          (e) => {
            // Getting the text, value and img alternative text on hover
            let text = e.target.innerText;
            let value = e.target.value;
            let alt = e.target.alt;
            // Run this only if text is not equal to undefined and set the text in the text_magnify div
            if (text != undefined) {
              document.querySelector(".text_magnify").innerText =
                text || value || alt;
              document.querySelector(".text_magnify").style.display = "block";
              document.querySelector(".text_magnify").style.opacity = "1";
            } else {
              document.querySelector(".text_magnify").style.display = "none";
            }
          },

          // Else hide the text magnify
          (e) => {
            document.querySelector(".text_magnify").style.display = "none";
            document.querySelector(".text_magnify").style.opacity = "0";
          }
        );
      });
    } else {
      document.querySelectorAll("html *").forEach((element) => {
        element.addEventListener("mouseover", (e) => {
          document.querySelector(".text_magnify").style.display = "none";
          document.querySelector(".text_magnify").style.opacity = "0";
        });
      });
    }
  });
}

magnifyTextFun("change");

// Reseting all the checboxes to their default state which is unchecked and changing the state of the site to default...

function resetFunctions(params) {
  window.location.reload();
}

resetBtn.addEventListener("click", () => {
  resetFunctions();
});

resetBtn.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    resetFunctions();
  }
});

// Move the text with mouse
document.body.addEventListener("mousemove", (e) => {
  document.querySelector(".text_magnify").style.left = e.clientX + "px";
  document.querySelector(".text_magnify").style.top = e.clientY + "px";
  panel.style.left = e.clientX;
  panel.style.top = e.clientY;
});

// Cart Functionality

const cartBtn = document.querySelectorAll(".cart-btn");
const emptyCart = document.querySelector(".empty-cart-text");
const emptyCartBtn = document.querySelector(".empty-cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const cartItemsDiv = document.querySelector(".cart-items-div");
const overlayDiv = document.querySelector(".overlay-div");
const openCartBtn = document.querySelector(".cart-icon");
const allCartItems = document.querySelector(".all-cart-items-div");
const searchBar = document.querySelector("#search-bar");
// const vaBox = document.querySelectorAll(".va-box");

var itemName;
var imgSrc;
var price;
var cartHtml = "";
var cartItem;

// Button to open the cart menu
if (openCartBtn && closeCartBtn && overlayDiv && emptyCartBtn != null) {
  openCartBtn.addEventListener("click", () => {
    overlayDiv.style.display = "block";
    cartItemsDiv.style.display = "block";
  });

  openCartBtn.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
      overlayDiv.style.display = "block";
      cartItemsDiv.style.display = "block";
    }
  });

  // Button to close the cart menu
  closeCartBtn.addEventListener("click", () => {
    overlayDiv.style.display = "none";
    cartItemsDiv.style.display = "none";
  });

  closeCartBtn.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
      overlayDiv.style.display = "none";
      cartItemsDiv.style.display = "none";
    }
  });

  // Close the cart if we click on the overlay
  overlayDiv.addEventListener("click", () => {
    overlayDiv.style.display = "none";
    cartItemsDiv.style.display = "none";
  });

  // Delete Every Item from the cart
  emptyCartBtn.addEventListener("click", () => {
    document.querySelectorAll(".cart-item-div").forEach((cartItem) => {
      cartItem.style.display = "none";
    });
    emptyCart.style.display = "block";
    emptyCart.textContent = "Cart is Empty Right Now";
  });

  emptyCartBtn.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
      document.querySelectorAll(".cart-item-div").forEach((cartItem) => {
        cartItem.style.display = "none";
      });
      emptyCart.style.display = "block";
      emptyCart.textContent = "Cart is Empty Right Now";
    }
  });
}
//  Function to generate Random Number
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Add cart Item to the cart if someone clicks on the "ADD TO CART" Button

function addItem(selector, eventType) {
  selector.addEventListener(eventType, (event) => {
    emptyCart.style.display = "none";
    itemName = event.target.previousElementSibling.innerText;
    imgSrc = event.target.previousElementSibling.previousElementSibling.src;
    cartHtml = `<div class="cart-item-div">
         <img class="cart-item-img"
             src="${imgSrc}"
             alt="cart-item">
         <p class="cart-item-name">${itemName}</p>
         <p class="cart-item-price">$${getRandomNumberBetween(100, 400)}</p>
         <img class = "remove-cart-item" tabindex= '0' title="Remove Item" src = "./assets/cross-btn.png" >             
     </div>`;

    allCartItems.insertAdjacentHTML("afterbegin", cartHtml);

    // Removing Specific Cart Item from the cart
    const removeItemBtn = document.querySelector(".remove-cart-item");
    removeItemBtn.addEventListener("click", (event) => {
      console.log(event.target.parentElement);
      event.target.parentElement.style.display = "none";
    });

    removeItemBtn.addEventListener("keypress", (event) => {
      if (event.keyCode == 13) {
        console.log(event.target.parentElement);
        event.target.parentElement.style.display = "none";
      }
    });

    selector.blur();
  });
}

cartBtn.forEach((cart) => {
  addItem(cart, "click");
  cart.addEventListener('click', () =>{
    overlayDiv.style.display = "block";
    cartItemsDiv.style.display = "block";
  })
});

function gettingElements(params) {
  //  Getting all the items name
  const itemsTitle = document.querySelectorAll(".trending-img-div p");

  itemsTitle.forEach((element) => {
    const title = element.innerText.toUpperCase();

    const parent = element.parentElement;

    //  If matches then show that Item
    if (title.indexOf(params) > -1) {
      parent.style.display = "";

      //  Else Hide that Item
    } else {
      parent.style.display = "none";
    }
  });
}

// Search Functionality

if (searchBar != null) {
  searchBar.addEventListener("input", (e) => {
    const searchValue = e.target.value.toUpperCase();
    gettingElements(searchValue);
  });
}
// Virtual Assistant

const btn = document.querySelector(".microphone-icon");
const content = document.querySelector(".content");

// Speak Function
function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

// Setting up the speech Recongnition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  speakThis(transcript.toLowerCase());
};

// Start the voice assistant on button click
if (btn != null) {
  btn.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      recognition.start();
    }
  });

  btn.addEventListener("click", () => {
    recognition.start();
  });
}

// Start and stop the voice assistant on the check or uncheck of the checkbox
vaBox.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });
});

function speakThis(message) {
  const speech = new SpeechSynthesisUtterance();

  // Otherwise This will be result
  speech.text = "Please try again";

  // If our message includes Search then this function will be performed
  if (message.includes("search")) {
    if (message.includes("search")) {
      var stg = message;
      var newStg = stg.replace("search", "").trim();
    }

    // Function to search Items by voice

    function searchByVoice(msg) {
      const searchValue = msg.toUpperCase();
      gettingElements(searchValue);
    }

    searchByVoice(newStg);

    document.querySelector("#search-bar").value = `${newStg}`;

    cartBtn.forEach((btn) => btn.focus());

    // Speaking the text we said to search
    const finalText = message;

    speech.text = finalText;
  } else if (message.includes("add item")) {
    cartBtn.forEach((btn) => {
      if (btn.parentElement.style.display !== "none") {
        addItem(btn, "focus");
        btn.focus();
      }
    });

    const finalText = "Item Added";
    speech.text = finalText;
  } else if (message.includes("open")) {
    panel.style.display = "block";
    const finalText = "Opening Panel";

    speech.text = finalText;
  } else if (message.includes("close")) {
    panel.style.display = "none";
    const finalText = "Closing Panel";
    speech.text = finalText;
  } else if (message.includes("vision") || message.includes("true")) {
    panel.style.display = "block";
    eyeCheckbox.checked = true;
    eyeCheckboxFun("focus");
    eyeCheckbox.focus();

    const finalText = "Vision Impaired Profile is Now in Working";

    speech.text = finalText;
  } else if (message.includes("blind") || message.includes("ok")) {
    eyeCheckbox.checked = false;
    eyeCheckboxFun("focus");
    eyeCheckbox.focus();

    const finalText = "Turning off Vision Impaired Profile";

    speech.text = finalText;
  } else if (message.includes("large") || message.includes("hello")) {
    panel.style.display = "block";
    magnifyCheckbox.checked = true;
    magnifyTextFun("focus");
    magnifyCheckbox.focus();

    const finalText = "Magnify Text is Now in Working";

    speech.text = finalText;
  } else if (message.includes("normal") || message.includes("not ok")) {
    magnifyCheckbox.checked = false;
    magnifyTextFun("focus");
    magnifyCheckbox.focus();

    const finalText = "Turning Off Magnify Text";

    speech.text = finalText;
  } else if (message.includes("reset page")) {
    window.location.reload();

    const finalText = "Reseting Page";

    speech.text = finalText;
  } else if (message.includes("increase")) {
    panel.style.display = "block";
    toIncreaseTextSize();

    const finalText = "Font Size Increased";

    speech.text = finalText;
  } else if (message.includes("decrease")) {
    panel.style.display = "block";
    toDecreaseTextSize();
    const finalText = "Font Size decreased";

    speech.text = finalText;
  } else if (message.includes("listen")) {
    recognition.start();
  } else if (message.includes("register") || message.includes("login")) {
    window.open("https://brightonit.netlify.app/log-in.html", "_self");
    const finalText = "Opening Page";
    speech.text = finalText;
  } else if (message.includes("authenticate")) {
    loginForm.classList.add("show");
    signUp.classList.add("hide");
    document.title = "Log In";
    const finalText = "Opening login Page";
    speech.text = finalText;
  } else if (
    message.includes("index") ||
    message.includes("start") ||
    message.includes("home")
  ) {
    window.open("https://brightonit.netlify.app/", "_self");
    const finalText = "Opening Home Page";
    speech.text = finalText;
  } else if (message.includes("help") || message.includes("support")) {
    window.open(
      "https://brightonit.netlify.app/help-and-support.html",
      "_self"
    );
    const finalText = "Opening Help and Support Page";
    speech.text = finalText;
  } else if (message.includes("payment") || message.includes("pay")) {
    window.open(
      "https://brightonit.netlify.app/payment.html",
      "_self"
    );
    const finalText = "Opening Payment Page";
    speech.text = finalText;
  }

  // Volume, Pitch and speed
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}

// Font Size

const upArrow = document.querySelector(".up-arrow");
const downArrow = document.querySelector(".down-arrow");

// Function to increase font Size...Basically Here we are getting the original font size of each element and on every click we add 3px to that original font Size
function fontIncrease(selector) {
  var style = window
    .getComputedStyle(selector, null)
    .getPropertyValue("font-size");
  var fontSize = parseFloat(style);
  selector.style.fontSize = fontSize + 3 + "px";
}

// Same thing. Here we are decreasing the font Size...

function fontDecrease(selector) {
  var style = window
    .getComputedStyle(selector, null)
    .getPropertyValue("font-size");
  var fontSize = parseFloat(style);
  selector.style.fontSize = fontSize - 3 + "px";
}

var pTags = document.querySelectorAll("p");
var anchorTags = document.querySelectorAll("a");
var buttonTags = document.querySelectorAll("button");
var labelTags = document.querySelectorAll("label");
var spanTags = document.querySelectorAll("span");
var inputTags = document.querySelectorAll(".form-field");

// Here we are calling those above funtion on each of the element

function toIncreaseTextSize(params) {
  pTags.forEach((pTags) => {
    fontIncrease(pTags);
  });

  anchorTags.forEach((anchorTags) => {
    fontIncrease(anchorTags);
  });

  buttonTags.forEach((buttonTags) => {
    fontIncrease(buttonTags);
  });

  labelTags.forEach((labelTags) => {
    fontIncrease(labelTags);
  });

  spanTags.forEach((spanTags) => {
    fontIncrease(spanTags);
  });

  inputTags.forEach((inputTags) => {
    fontIncrease(inputTags);
  });
}

function toDecreaseTextSize(params) {
  pTags.forEach((pTags) => {
    fontDecrease(pTags);
  });

  anchorTags.forEach((anchorTags) => {
    fontDecrease(anchorTags);
  });

  buttonTags.forEach((buttonTags) => {
    fontDecrease(buttonTags);
  });

  labelTags.forEach((labelTags) => {
    fontDecrease(labelTags);
  });

  spanTags.forEach((spanTags) => {
    fontDecrease(spanTags);
  });

  inputTags.forEach((inputTags) => {
    fontDecrease(inputTags);
  });
}

upArrow.addEventListener("click", toIncreaseTextSize);
upArrow.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    toIncreaseTextSize();
  }
});

downArrow.addEventListener("click", toDecreaseTextSize);

downArrow.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    toDecreaseTextSize();
  }
});

// Persiting State of Checkbox

// Here we are setting a function for cookie...Cookies are used to store data
function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    "=" +
    escape(value) +
    (expiredays == null ? "" : ";expires=" + exdate);
}

// Function to get a specific cookie with its name

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return null;
}

// When the page load call this function...What it does that it sets the value of checkbox to eye if the checkbox was previously checked and 0 if it was false
onload = () => {
  document.getElementById("eye-checkbox").checked =
    getCookie("eye-checkbox") == "eye" ? true : false;

  // If it was checked then run this function
  if (document.getElementById("eye-checkbox").checked) {
    eye();
  }
};

function set_check() {
  setCookie(
    "eye-checkbox",
    document.getElementById("eye-checkbox").checked ? eye() : 0,
    100
  );
}

// This is function where we are zooming in the page, adding and removing black and white background to different elements etc...
function eye(params) {
  htmlPage.classList.add("zoom");
  if (navBar != null) {
    navBar.style.position = "relative";
  }

  links.forEach((link) => link.classList.add("underline"));
  if (loginForm != null) {
    loginForm.classList.add("white-bg");
    logoDivHomeBtn.classList.add("black-bg");
    heading.forEach((heading) => heading.classList.add("black-bg"));
    forgetPassword.forEach((forget) => forget.classList.add("black-bg"));
  }

  if (signUp != null) {
    signUp.classList.add("white-bg");
    submitBtn.classList.add("black-bg");
    registerBtn.classList.add("black-bg");
  }

  if (pageGridSection != null) {
    pageGridSection.classList.add("white-bg");
    boxLinksDiv.forEach((box) => box.classList.add("black-bg"));
    box1Heading.classList.add("black-bg");
    helpButton.classList.add("black-bg");
    registerNowDiv.classList.add("black-bg");
    registerNowDiv.classList.add("white-color");
    registerNowDivButton.classList.add("white-color");
    box1Heading.classList.add("white-color");
    linkDivAnchor.forEach((link) => link.classList.add("white-color"));
    linkDivSmall.forEach((link) => link.classList.add("white-color"));
  }

  footer.classList.add("white-bg");
  footerLinks.classList.add("black-bg");
  socialIconDiv.classList.add("black-bg");

  if (navButtonDiv != null) {
    navButtonDiv.classList.add("white-bg");
    navbarDiv.classList.add("white-bg");
    homePageBtn.forEach((btn) => btn.classList.add("black-bg"));
    navbarDivItem.forEach((item) => item.classList.add("black-bg"));
  }

  return "eye";
}
