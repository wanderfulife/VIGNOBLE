// 🚚 ENQUÊTE TRANSPORT DE MARCHANDISES
// Based on the French freight transport questionnaire

export const templateSurveyQuestions = [
    // 📍 Poste de travail
    {
        id: "Q1",
        text: "Poste",
        type: 'singleChoice',
        options: [
            { id: 1, text: "RD673 - Nord de Mouillon - sens nord sud", next: "Q5" },
            { id: 2, text: "RD673 - Sud de Mouillon - sens sud nord", next: "Q5" },
            { id: 3, text: "RD7 - Nord de Marsdon-sur-Sèvre - sens nord sud", next: "Q5" },
            { id: 4, text: "RD7 - Nord de Maisdon-sur-Sèvre - sens nord sud nord", next: "Q5" }
        ]
    },

    // 🚛 Type de véhicule
    {
        id: "Q5",
        text: "Type de véhicule",
        type: 'singleChoice',
        options: [
            { id: 1, text: "PL porteur", next: "Q6" },
            { id: 2, text: "PL articulé, semi-remorque", next: "Q6" },
            { id: 3, text: "PL train routier (porteur + remorque)", next: "Q6" }
        ]
    },

    // 📍 Origine
    {
        id: "Q6",
        text: "D'où venez vous? Dernier lieu de chargement, déchargement ou entreposé pour le PL",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Commune et département si France et pays limitrophes, pays si autres", next: "Q6_COMMUNE" },
            { id: 2, text: "Pour PL P1 et P2 si commune = Valet, préciser la rue ou le lieu remarquable", next: "Q6_PRECISION" }
        ]
    },

    // 🗺️ Origine - Commune
    {
        id: "Q6_COMMUNE",
        text: "Commune et département si France et pays limitrophes, pays si autres",
        type: 'commune',
        next: "Q7"
    },

    // 📝 Origine - Précision
    {
        id: "Q6_PRECISION",
        text: "Pour PL P1 et P2 si commune = Valet, préciser la rue ou le lieu remarquable",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu...",
        next: "Q7"
    },

    // 📍 Destination
    {
        id: "Q7",
        text: "Où allez vous? Dernier lieu de chargement, déchargement ou entreposé pour le PL",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Commune et département si France et pays limitrophes, pays si autres", next: "Q7_COMMUNE" },
            { id: 2, text: "Pour PL P1 et P2 si commune = Valet, préciser la rue ou le lieu remarquable", next: "Q7_PRECISION" }
        ]
    },

    // 🗺️ Destination - Commune
    {
        id: "Q7_COMMUNE",
        text: "Commune et département si France et pays limitrophes, pays si autres",
        type: 'commune',
        next: "Q8"
    },

    // 📝 Destination - Précision
    {
        id: "Q7_PRECISION",
        text: "Pour PL P1 et P2 si commune = Valet, préciser la rue ou le lieu remarquable",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu...",
        next: "Q8"
    },

    // 📦 Nature de la marchandise
    {
        id: "Q8",
        text: "Nature de la marchandise si chargé",
        type: 'freeText',
        freeTextPlaceholder: "champs libre",
        next: "Q9"
    },

    // ⚖️ Poids ou volume
    {
        id: "Q9",
        text: "à vide ou poids de la marchandise en tonnes",
        type: 'freeText',
        freeTextPlaceholder: "Vide = 0 ou alors indiquez le poids en tonne (1 tonne = 1000 kgs)",
        validation: "numeric",
        next: "Q10"
    },

    // 📅 Fréquence
    {
        id: "Q10",
        text: "À quelle fréquence faites vous ce trajet?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours ou presque", next: "end" },
            { id: 2, text: "2 à 3 fois par semaine", next: "end" },
            { id: 3, text: "1 fois par semaine", next: "end" },
            { id: 4, text: "1 à 2 fois par mois", next: "end" },
            { id: 5, text: "Quelques fois par an", next: "end" },
            { id: 6, text: "Exceptionnellement", next: "end" }
        ]
    }
];

/*
🎯 ENQUÊTE TRANSPORT DE MARCHANDISES - CARACTÉRISTIQUES:

📋 FLUX DES QUESTIONS:
✅ Q1 - Poste de travail (localisation de l'enquête)
✅ Q2 - Date
✅ Q3 - N° questionnaire
✅ Q4 - Heure/Minute
✅ Q5 - Type de véhicule (PL porteur, articulé, train routier)
✅ Q6 - ORIGINE (avec commune ou précision pour Valet)
✅ Q7 - DESTINATION (avec commune ou précision pour Valet)
✅ Q8 - Nature de la marchandise (avec champs libre)
✅ Q9 - Poids de la marchandise en tonnes
✅ Q10 - FREQUENCE du trajet

🔀 LOGIQUE CONDITIONNELLE:
✅ Q8 = "Vide" → saute vers Q10 (pas de poids)
✅ Q6 et Q7 avec option commune ou précision pour Valet
✅ Q8 avec champs libre pour marchandises générales
✅ Q10 = "Exceptionnellement" → demande raison

🗺️ GESTION DES LIEUX:
✅ Sélecteur de commune (type commune)
✅ Gestion spéciale pour Valet (précision rue/lieu remarquable)
✅ Support France, pays limitrophes, autres pays
*/