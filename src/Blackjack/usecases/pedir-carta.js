
/**
 * 
 * @param {Array<String>} deck se necesita un arreglo de cartas varajadas 
 * @returns {String}
 */
export const pedirCarta = (deck) => {

    if(!deck || deck.length === 0 ) throw new Error ('Se necesita un deck con un arreglo de cartas mezcladas');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
   
    return carta;
    
}