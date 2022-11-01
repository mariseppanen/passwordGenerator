const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")

function createPasswords() {
    
    let pw1 = newPassWord()
    let pw2 = newPassWord()
    passwordEl1.textContent = pw1
    passwordEl2.textContent = pw2

}

function newPassWord() {
    let passwd = ""
    for (let i = 0; i < 15; ++ i)
    {
        let index = Math.floor(Math.random()*characters.length)
        passwd = passwd + characters[index]
    }
    
    return passwd
}

function savetoclipboard() {
    var copyText = passwordEl1;
    navigator.clipboard.textContent = copyText.textContent;
    alert("Copied: " + copyText.textContent);
} 




