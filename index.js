// JavaScript source code
window.CookieSaveOmoshiroi = function CookieSaveOmoshiroi() {
    this.alert("���肪�Ƃ�");
    document.cookie = "omoshiroi=" + encodeURIComponent('�ւ���');
}

window.onload = function cookieKakunin() {
    if (document.cookie == '') {
        alert('no cookie');
    }
    else {
        alert('yes cookie');
    }
}