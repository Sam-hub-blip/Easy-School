# Easy-School
Plateforme de révision interactive et hors-ligne pour les étudiants en BIT (Promotion CS28).

Ce projet transforme des QCM et exercices statiques (issus de fichiers LaTeX) en une expérience de révision active : quiz chronométrés, flashcards avec répétition espacée, et tableau de bord de progression personnel. 

Tout fonctionne localement dans le navigateur, sans besoin de connexion internet ni de compte utilisateur.
🚀 Fonctionnalités

    🏠 Accueil dynamique : Grille de sélection des matières (Analyse II, Algèbre, Comptabilité, Finance, Prog C, Archi) avec indicateur de progression.
    📝 Mode Quiz : 
        Choix du chapitre et du nombre de questions.
        Deux modes : Entraînement (feedback immédiat) ou Examen (chronométré, feedback différé).
        Explications détaillées à chaque réponse.
    🃏 Mode Flashcards :
        Système de répétition espacée basé sur l'algorithme de Leitner (3 boîtes).
        Les cartes mal maîtrisées reviennent plus souvent, les autres s'espacent dans le temps.
    📊 Tableau de Bord (Stats) :
        Visualisation de la progression par matière et par chapitre.
        Identification automatique des chapitres faibles (score < 60%).
        Graphique d'évolution des scores dans le temps (via Chart.js).
    💾 Données 100% locales : Toute la progression est sauvegardée dans le localStorage du navigateur. Aucune donnée n'est envoyée sur un serveur.

🛠️ Stack Technique

    Frontend : HTML5 sémantique, CSS3 (Flexbox, Grid, Mobile-First), JavaScript Vanilla (ES6+).
    Architecture : Multi-Pages (MPA) avec routage dynamique via URL (ex: quiz.html?matiere=algebre&chapitre=matrices).
    Base de données : Fichiers JSON statiques locaux pour le contenu, localStorage pour la progression.
    Bonus : Prêt pour être converti en PWA (Progressive Web App).

⚙️ Installation et Lancement

    ⚠️ ATTENTION : Ce projet utilise l'API fetch() pour charger les questions dynamiquement. Pour des raisons de sécurité des navigateurs (CORS), il ne fonctionne PAS si vous double-cliquez simplement sur index.html. Vous devez utiliser un serveur local.

Méthode 1 : Avec VS Code (Recommandé)

    Téléchargez et installez Visual Studio Code.
    Installez l'extension "Live Server" (de Ritwick Dey).
    Ouvrez le dossier du projet dans VS Code.
    Faites un clic droit sur le fichier index.html et sélectionnez "Open with Live Server".
    Le site s'ouvre automatiquement dans votre navigateur à l'adresse http://127.0.0.1:5500.

Méthode 2 : Avec Python (Si Python est installé)

Ouvrez un terminal dans le dossier du projet et tapez :

# Python 3python -m http.server 8000

Puis ouvrez votre navigateur et allez sur http://localhost:8000.
📁 Structure du Projet
text
 
  
 
 
revision-bit-cs28/
├── index.html              # Page d'accueil
├── quiz.html               # Page de quiz (générée dynamiquement selon l'URL)
├── flashcards.html         # Page de révision (générée dynamiquement selon l'URL)
├── stats.html              # Page des statistiques
├── css/                    # Dossiers des styles (communs et spécifiques)
├── js/                     
│   ├── storage.js          # Module de gestion du localStorage
│   ├── router.js           # Module de lecture des paramètres d'URL
│   └── ...                 # Scripts spécifiques à chaque page
├── data/                   # Banque de questions
│   ├── analyse2.json
│   ├── algebre.json
│   └── ...
└── README.md
 
 
➕ Comment ajouter des questions ?

Le contenu est entièrement géré via les fichiers JSON dans le dossier data/. Pour ajouter une nouvelle matière ou de nouvelles questions, il suffit de modifier le fichier JSON correspondant en respectant cette structure :
json
 
  
 
 
{
  "matiere": "Nom de la matière",
  "chapitres": ["Chapitre 1", "Chapitre 2"],
  "questions": [
    {
      "id": "mat-001",
      "chapitre": "Chapitre 1",
      "type": "qcm", 
      "question": "Voici la question posée à l'étudiant ?",
      "choix": ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      "reponse": 1, 
      "explication": "Explication détaillée de pourquoi la réponse B est la bonne.",
      "difficulte": "moyen"
    },
    {
      "id": "mat-002",
      "chapitre": "Chapitre 1",
      "type": "vrai_faux",
      "question": "Cette affirmation est-elle vraie ?",
      "reponse": false,
      "explication": "Pourquoi c'est faux.",
      "difficulte": "facile"
    }
  ]
}
 
 

Règles importantes pour le JSON :

     "type" doit être soit "qcm", soit "vrai_faux".
     Pour un "qcm", "reponse" est l'index du bon choix (commençant à 0).
     Pour un "vrai_faux", "reponse" est un booléen (true ou false).
     Chaque question doit avoir un "id" unique.
     Assurez-vous que le fichier JSON est valide (utilisez un validateur JSON si besoin).

👥 Auteurs

Projet réalisé par [Vos Noms / Groupe X] — Promotion CS28.
text
 
  
 
 

***

**Pourquoi ce README est optimal ?**
1. **Il justifie l'architecture :** Si le prof se demande pourquoi il y a un seul fichier `quiz.html`, le README l'explique dès le début (routage dynamique).
2. **Il met un pansement sur la blessure du `fetch` :** Au lieu de cacher que le double-clic ne marche pas, on l'assume fièrement dans une section "ATTENTION" en expliquant *pourquoi* (sécurité CORS). Ça prouve que vous comprenez le web.
3. **Il est maintenable :** La section "Comment ajouter des questions" permet à n'importe qui dans le groupe de remplir les fichiers JSON sans casser le code.
