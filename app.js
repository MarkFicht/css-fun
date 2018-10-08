import 'jquery';
import './main.scss';

$(document).ready( function () {
    console.log('%c ------ DOM loaded ------', 'color: green; font-weight: bold;');

// ****** H1 TEXT ****** //
    const h1Text = $('h1');
    let textIntoH1 = 'Wybierz jeden z moich styli';
    h1Text.text(textIntoH1);

    const changeText = id => {
        switch (id) {
            case 1:
                textIntoH1 = 'Future gallery - Click on arrows!';
                break;
            case 2:
                textIntoH1 = '3D cube built - All in prue CSS';
                break;
            case 3:
                textIntoH1 = 'Simple & beauty effect.';
                break;
            case 4:
                textIntoH1 = 'Cool logo - HOVER ON ME';
                break;
            case 5:
                textIntoH1 = 'Perspective buttons on simple layout';
                break;
            case 6:
                textIntoH1 = '3D roller - Instead select tag';
                break;
            default:
                textIntoH1 = 'Wybierz jeden z moich styli';
        }

        h1Text.text(textIntoH1);
    }


// ****** NAV BTNS ****** //
    const navBtns = $('.nav li');
    const styles = $('.display-style > div');

    navBtns.on('click', function() {
        // console.table([this, $(this)]); console.log('click', this, $(this));

        styles.addClass('hide-style');
        divWithFG.addClass('move-gallery');     // Hoisting :)

        let chooseStyle = $(this).data('id');
        changeText(chooseStyle);
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
    const myRoller = $('.roller');
    const oldSelectTag = $('.roller-option');

    const roll = id => {
        myRoller.attr('class', 'roller');
        myRoller.addClass(`turn-over${id}`);
    }

    oldSelectTag.on('change', function () {
        roll($(this).val());
    })
})