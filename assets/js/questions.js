// create our questions
let questions = [
    {
        question : "Quelle est la capitale d'Albanie ?",
        imgSrc : "albanie.png",
        choiceA : "Tirana",
        choiceB : "Tallinn",
        choiceC : "Ljubljana",
        correct : "A"
    },{
        question : "Quelle est la capitale d'Allemagne ?",
        imgSrc : "allemagne.png",
        choiceA : "Bucarest",
        choiceB : "Berlin",
        choiceC : "Chisinau",
        correct : "B"
    },{
        question : "Quelle est la capitale d'Andorre ?",
        imgSrc : "andorre.png",
        choiceA : "Vienne",
        choiceB : "Vaduz",
        choiceC : "Andorre-la-Vieille",
        correct : "C"
    },{
        question : "Quelle est la capitale d'Autriche ?",
        imgSrc : "autriche.png",
        choiceA : "Vienne",
        choiceB : "Berne",
        choiceC : "Varsovie",
        correct : "A"
    },{
        question : "Quelle est la capitale de Belgique ?",
        imgSrc : "belgique.png",
        choiceA : "Sofia",
        choiceB : "Bruxelles",
        choiceC : "Paris",
        correct : "B"
    },{
        question : "Quelle est la capitale de Bielorussie ?",
        imgSrc : "bielorussie.png",
        choiceA : "Zagreb",
        choiceB : "Minsk",
        choiceC : "Riga",
        correct : "B"
    },{
        question : "Quelle est la capitale de Bosnie-Herzégovine ?",
        imgSrc : "bosnie.png",
        choiceA : "Reykjavik",
        choiceB : "Podgorica",
        choiceC : "Sarajevo",
        correct : "C"
    },{
        question : "Quelle est la capitale de Bulgarie ?",
        imgSrc : "bulgarie.png",
        choiceA : "Pristina",
        choiceB : "Vilnius",
        choiceC : "Sofia",
        correct : "C"
    },{
        question : "Quelle est la capitale de Chypre ?",
        imgSrc : "chypre.png",
        choiceA : "Nicosie",
        choiceB : "Copenhague",
        choiceC : "Vilnius",
        correct : "A"
    },{
        question : "Quelle est la capitale de Croatie ?",
        imgSrc : "croatie.png",
        choiceA : "Dublin",
        choiceB : "Zagreb",
        choiceC : "Prague",
        correct : "B"
    },{
        question : "Quelle est la capitale du Danemark ?",
        imgSrc : "danemark.png",
        choiceA : "Berlin",
        choiceB : "Copenhague",
        choiceC : "Oslo",
        correct : "B"
    },{
        question : "Quelle est la capitale d'Espagne ?",
        imgSrc : "danemark.png",
        choiceA : "Lisbonne",
        choiceB : "La Valette",
        choiceC : "Madrid",
        correct : "C"
    },{
        question : "Quelle est la capitale d'Estonie ?",
        imgSrc : "danemark.png",
        choiceA : "Tallinn",
        choiceB : "Rome",
        choiceC : "Skopje",
        correct : "A"
    },{
        question : "Quelle est la capitale de Finlande ?",
        imgSrc : "danemark.png",
        choiceA : "Helsinki",
        choiceB : "Podgorica",
        choiceC : "Bratislava",
        correct : "A"
    },{
        question : "Quelle est la capitale de France ?",
        imgSrc : "france.png",
        choiceA : "Berne",
        choiceB : "Lisbonne",
        choiceC : "Paris",
        correct : "C"
    },{
        question : "Quelle est la capitale de Grèce ?",
        imgSrc : "grece.png",
        choiceA : "Amsterdam",
        choiceB : "Athènes",
        choiceC : "Monaco",
        correct : "B"
    },{
        question : "Quelle est la capitale de Hongrie ?",
        imgSrc : "hongrie.png",
        choiceA : "Prague",
        choiceB : "Budapest",
        choiceC : "Stockholm",
        correct : "B"
    },{
        question : "Quelle est la capitale d'Irlande ?",
        imgSrc : "irlande.png",
        choiceA : "Athènes",
        choiceB : "Budapest",
        choiceC : "Dublin",
        correct : "C"
    },{
        question : "Quelle est la capitale d'Islande ?",
        imgSrc : "islande.png",
        choiceA : "Reykjavik",
        choiceB : "Ljubljana",
        choiceC : "Kiev",
        correct : "A"
    },{
        question : "Quelle est la capitale d'Italie ?",
        imgSrc : "italie.png",
        choiceA : "Rome",
        choiceB : "Riga",
        choiceC : "Vatican",
        correct : "A"
    },{
        question : "Quelle est la capitale de Kosovo ?",
        imgSrc : "kosovo.png",
        choiceA : "Londres",
        choiceB : "Riga",
        choiceC : "Pristina",
        correct : "C"
    },{
        question : "Quelle est la capitale de Lettonie ?",
        imgSrc : "lettonie.png",
        choiceA : "Monaco",
        choiceB : "Riga",
        choiceC : "Sofia",
        correct : "B"
    },{
        question : "Quelle est la capitale de Liechtenstein ?",
        imgSrc : "liechtenstein.png",
        choiceA : "Vaduz",
        choiceB : "Oslo",
        choiceC : "Andorre-la-Vieille",
        correct : "A"
    },{
        question : "Quelle est la capitale de Lituanie ?",
        imgSrc : "lituanie.png",
        choiceA : "Vilnius",
        choiceB : "Podgorica",
        choiceC : "Amsterdam",
        correct : "A"
    },{
        question : "Quelle est la capitale de Luxembourg ?",
        imgSrc : "luxembourg.png",
        choiceA : "Nicosie",
        choiceB : "Luxembourg",
        choiceC : "Bratislava",
        correct : "B"
    },{
        question : "Quelle est la capitale de Macédoine du Nord ?",
        imgSrc : "macedoine.png",
        choiceA : "Varsovie",
        choiceB : "Ljubljana",
        choiceC : "Skopje",
        correct : "C"
    },{
        question : "Quelle est la capitale de Malte ?",
        imgSrc : "malte.png",
        choiceA : "Tirana",
        choiceB : "Vatican",
        choiceC : "La Valette",
        correct : "C"
    },{
        question : "Quelle est la capitale de Moldavie ?",
        imgSrc : "moldavie.png",
        choiceA : "Podgorica",
        choiceB : "Amsterdam",
        choiceC : "Oslo",
        correct : "A"
    },{
        question : "Quelle est la capitale de Monaco ?",
        imgSrc : "monaco.png",
        choiceA : "Monaco",
        choiceB : "Vatican",
        choiceC : "Madrid",
        correct : "A"
    },{
        question : "Quelle est la capitale de Montenegro ?",
        imgSrc : "montenegro.png",
        choiceA : "Tallinn",
        choiceB : "Moscou",
        choiceC : "Podgorica",
        correct : "C"
    },{
        question : "Quelle est la capitale de Norvège ?",
        imgSrc : "norvege.png",
        choiceA : "Vilnius",
        choiceB : "Oslo",
        choiceC : "Stockholm",
        correct : "B"
    },{
        question : "Quelle est la capitale des Pays-Bas ?",
        imgSrc : "paysbas.png",
        choiceA : "Sarajevo",
        choiceB : "Paris",
        choiceC : "Amsterdam",
        correct : "C"
    },{
        question : "Quelle est la capitale de Pologne ?",
        imgSrc : "pologne.png",
        choiceA : "Varsovie",
        choiceB : "Belgrade",
        choiceC : "Stockholm",
        correct : "A"
    },{
        question : "Quelle est la capitale de Portugal ?",
        imgSrc : "pologne.png",
        choiceA : "Lisbonne",
        choiceB : "Madrid",
        choiceC : "Vatican",
        correct : "A"
    },{
        question : "Quelle est la capitale de la République tchèque ?",
        imgSrc : "republiquetcheque.png",
        choiceA : "Lisbonne",
        choiceB : "Prague",
        choiceC : "La Valette",
        correct : "B"
    },{
        question : "Quelle est la capitale de Roumanie ?",
        imgSrc : "roumanie.png",
        choiceA : "Bucarest",
        choiceB : "Riga",
        choiceC : "Belgrade",
        correct : "A"
    },{
        question : "Quelle est la capitale du Royaume Uni ?",
        imgSrc : "royaumeuni.png",
        choiceA : "Rome",
        choiceB : "Dublin",
        choiceC : "Londres",
        correct : "C"
    },{
        question : "Quelle est la capitale de Russie ?",
        imgSrc : "russie.png",
        choiceA : "Kiev",
        choiceB : "Moscou",
        choiceC : "Bratislava",
        correct : "B"
    },{
        question : "Quelle est la capitale de Serbie ?",
        imgSrc : "serbie.png",
        choiceA : "Belgrade",
        choiceB : "Reykjavik",
        choiceC : "Sarajevo",
        correct : "A"
    },{
        question : "Quelle est la capitale de Slovaquie ?",
        imgSrc : "slovaquie.png",
        choiceA : "Stockholm",
        choiceB : "Budapest",
        choiceC : "Bratislava",
        correct : "C"
    },{
        question : "Quelle est la capitale de Slovenie ?",
        imgSrc : "slovenie.png",
        choiceA : "Ljubljana",
        choiceB : "Pristina",
        choiceC : "Copenhague",
        correct : "A"
    },{
        question : "Quelle est la capitale de Suisse ?",
        imgSrc : "suisse.png",
        choiceA : "Berne",
        choiceB : "Dublin",
        choiceC : "Vienne",
        correct : "A"
    },{
        question : "Quelle est la capitale de Suède ?",
        imgSrc : "suede.png",
        choiceA : "Skopje",
        choiceB : "Moscou",
        choiceC : "Stockholm",
        correct : "C"
    },{
        question : "Quelle est la capitale de l'Ukraine ?",
        imgSrc : "ukraine.png",
        choiceA : "Skopje",
        choiceB : "Kiev",
        choiceC : "Reykjavik",
        correct : "B"
    },{
        question : "Quelle est la capitale de Vatican ?",
        imgSrc : "vatican.png",
        choiceA : "Rome",
        choiceB : "Vatican",
        choiceC : "Paris",
        correct : "B"
    }

];