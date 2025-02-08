/**
 * obtener el valor de la carta
 * @param {String} carta 
 * @returns {number} valor de la carta
 */
export const valorCarta = ( carta ) => {

    if(!carta ) throw new Error ('Se tiene que retornar un String con el valor de la carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
