
/**
 * 
 * @param {String} carta 
 * @returns {HTMLElement} 
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new error ('La carta no fue enviada');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}