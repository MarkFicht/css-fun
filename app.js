import 'jquery';
import './main.scss';

document.addEventListener('DOMContentLoaded', function () {
    console.log('--- DOM loaded ---');

    let btnLeft = $('.btn-fg1');

    btnLeft.on('click', () => {
        console.log('click');
    })

})