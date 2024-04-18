function checkPalindrome() {
    var str = document.getElementById("inputString").value;
    var result = document.getElementById("result");
    
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanStr === cleanStr.split('').reverse().join('');
    
    if (isPalindrome) {
        result.innerText = "The string is a palindrome.";
    } else {
        result.innerText = "The string is not a palindrome.";
    }
}
