// JavaScript source code
window.CookieSaveOmoshiroi = function CookieSaveOmoshiroi() {
    this.alert("ありがとう");
    document.cookie = "omoshiroi=" + encodeURIComponent('へった');
}

window.onload = function cookieKakunin() {
    if (document.cookie == '') {
        alert('no cookie');
    }
    else {
        alert('yes cookie');
    }
}