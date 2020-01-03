//on load
window.onload = function() {
    document.body.style.overflow = 'visible';

    var modal = document.getElementsByClassName('adBlockModalContainer');
    modal[0].parentNode.removeChild(modal[0]);

    var modalBackdrop = document.getElementsByClassName('modal-backdrop');
    modalBackdrop[0].parentNode.removeChild(modalBackdrop[0]);
}