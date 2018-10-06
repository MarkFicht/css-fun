import 'jquery';
import './main.scss';

$(document).ready( function () {
    console.log('%c ------ DOM loaded ------', 'color: green; font-weight: bold;');

// ****** H1 TEXT ****** //
    const h1Text = $('h1');
    const changeText = (id) => {
        
    }

// ****** NAV BTNS ****** //
    const navBtns = $('.nav li');
    const styles = $('.display-style > div');
    // console.log(navBtns, styles);

    navBtns.on('click', function() {
        // console.table([this, $(this)]); console.log('click', this, $(this));

        styles.addClass('hide-style');
        divWithFG.addClass('move-gallery');     // Hoisting :)

        let chooseStyle = $(this).data('id');
        styles.eq(chooseStyle).removeClass('hide-style');  //0 is for '.waiting'
    })

// ****** FUTURE GALLERY ****** //
    const btnFG1 = $('#btn-fg1');
    const btnFG2 = $('#btn-fg2');
    const divWithFG = $('.move-fg');
    let currentFG = 1;
    // --- solving problem with smooth animation on start/end
    let smoothTransition = 60;

    btnFG1.click( function () {
        divWithFG.attr('class', 'move-fg');

        // currentFG--;
        // currentFG < 1 ? currentFG = 6 : currentFG;
        // divWithFG.addClass(`show-fg${currentFG}`);

        // --- solving problem with smooth animation on start/end
        smoothTransition += 60;
        divWithFG.addClass(`show-fg${currentFG}`).css('transform', `rotateY(${smoothTransition}deg)`);

    })

    btnFG2.click( function () {
        divWithFG.attr('class', 'move-fg');

        // currentFG++;
        // currentFG > 6 ? currentFG = 1 : currentFG;
        // divWithFG.addClass(`show-fg${currentFG}`);

        // --- solving problem with smooth animation on start/end
        smoothTransition -= 60;
        divWithFG.addClass(`show-fg${currentFG}`).css('transform', `rotateY(${smoothTransition}deg)`);
    })

// ****** MOVING CUBE ****** //
// ****** RAINBOW BORDER ****** //
// ****** SIMPLE LOGO ****** //
// ****** PERSPECTIVE BTNS ****** //
// ****** ROLLER SELECT 3D ****** //


})