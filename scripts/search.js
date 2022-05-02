// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let Country=document.getElementById("search_input").value;

const url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=${Country}"
console.log(Country)