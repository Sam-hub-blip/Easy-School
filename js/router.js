/**
 * router.js
 * Membre 1 — Architecte Data & Routage
 *
 * Ce module lit les paramètres de l'URL (ex: quiz.html?matiere=analyse2&chapitre=limites&mode=examen&nombre=10)
 * et les renvoie sous forme d'objet propre, utilisable par les autres membres de l'équipe
 * (Membre 2 pour quiz.js, Membre 5 pour home.js, etc.)
 */

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [cle, valeur] of params.entries()) {
        result[cle] = valeur;
    }
    return result;
}

function getParam(nom, valeurParDefaut = null) {
    const params = new URLSearchParams(window.location.search);
    return params.has(nom) ? params.get(nom) : valeurParDefaut;
}

function construireUrl(page, params) {
    const searchParams = new URLSearchParams(params);
    return `${page}?${searchParams.toString()}`;
}

async function chargerDonnees(cheminFichier) {
    try {
        const reponse = await fetch(cheminFichier);
        if (!reponse.ok) {
            throw new Error(`Impossible de charger ${cheminFichier} (statut ${reponse.status})`);
        }
        return await reponse.json();
    } catch (erreur) {
        console.error("Erreur de chargement des données :", erreur);
        return null;
    }
}
