/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "best", "unique"];
  let adj = ["great", "big", "amazing", "funny", "sleepy"];
  let noun = ["jogger", "racoon", "motherinlaw", "elephant", "batman"];
  let dtl = [".com", ".net", ".org", ".us", ".biz", ".co", ".academy"];

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
                for (let k = 0; k < noun.length; k++) {
                    for (let l = 0; l < dtl.length; l++) {
                        document.querySelector(“#domain_name”).innerHTML +=
                        ‘<li class=“py-2 text-secondary”><h3> www.’ + 
                            pronoun[0] +
                            adj[1] +
                            noun[2] +
                            dtl[3]; (“ </h3></li>”);
                    }
                }
        }
    }
};