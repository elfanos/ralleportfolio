/**
 * Created by Rasmus on 22/07/17.
 */

function TextAnimation(context,letters) {
    this.context = context;
    this.letters = letters;
    this.interval = [];
    this.textDivTags = [];
    this.initializeLetters = function() {
        console.log("context", this.context);
        console.log("letters", this.letters.length);
        console.log("");
        this.context.style.width = $(window).height() + "px";
        for(var i = 0; i < this.letters.length; i++){
            var div = document.createElement("div");
            div.className = "char chars"+i;
            var innerText = document.createElement("div");
            innerText.className = "char-inner";
            innerText.innerHTML = letters[i];
            div.appendChild(innerText);
            this.context.appendChild(div);
        }
    };
    this.initializeTags = function () {
        var childs = this.context.childNodes;
        for(var i = 0; i < Object.size(childs); i++){
            console.log("wad it is", childs[i].childNodes[0]);
            this.textDivTags.push(childs[i].childNodes[0]);
        }
    }
}