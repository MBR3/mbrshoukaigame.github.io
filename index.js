// JavaScript source code
window.CookieSaveOmoshiroi = function CookieSaveOmoshiroi() {
    var count;
    count++;
    this.alert("Thank you");
    document.cookie = 'omoshiroi=' + count;
}

window.onload = function cookieKakunin() {
    if (document.cookie == '') {
        alert('no cookie');
    }
    else {
        alert('yes cookie');
        this.alert(document.cookie)
    }
}