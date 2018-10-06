import 'jquery';
import './main.scss';

$(document).ready( function () {
    console.log('%c ------ DOM loaded ------', 'color: green; font-weight: bold;');

    const navBtns = $('.nav li');
    const styles = $('.display-style > div');
    // console.log(navBtns, styles);

    navBtns.on('click', function() {
        // console.table([this, $(this)]); console.log('click', this, $(this));

        styles.addClass('hide-style');

        let chooseStyle = $(this).data('id');
        styles.eq(chooseStyle).removeClass('hide-style');  //0 is for '.waiting'

    })

})