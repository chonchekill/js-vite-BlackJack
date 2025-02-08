import {pedirCarta, valorCarta,crearCartaHTML} from './';

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 */
export const turnoComputadora = ( puntosMinimos,deck, puntosHTML,divCartasComputadora ) => {

    if(!puntosMinimos ) throw new Error ('Puntos mínimos son necesarios');
    if(!puntosHTML ) throw new Error ('Los puntos Html son necesarios');

    let puntosComputadora = 0;
    

    do {
        const carta = pedirCarta( deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        

        divCartasComputadora.append( crearCartaHTML(carta));

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
