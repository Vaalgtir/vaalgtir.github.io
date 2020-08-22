$(function() {
    
    // script for chart.js diagram's
    var ctx = document.getElementById('diagramme').getContext('2d');
    var chart = new Chart(ctx, {
                // The type of chart we want to create
        type: 'doughnut',
    
                // The data for our dataset
        data: {
            labels: [
                'de 0 à 9 personnes',
                'de 10 à 19 personnes',
                'de 20 à 29 personnes',
                'de 30 à 39 personnes',
                'de 40 à 49 personnes',
                'de 50 à 99 personnes',
                'de 100 à 199 personnes',
                'de 200 à 499 personnes',
                'de 500 personnes et plus'
            ],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: ['#5990de', '#ffa100', 'rgb(56, 56, 56)','#90CAF9','#E6EE9C','#CE93D8','#BCAAA4','#80CBC4','#80DEEA'],
                borderColor: 'rgb(0, 0, 0)',
                data: [100000,
                    221000,
                    51000,
                    19000,
                    13000,
                    24000,
                    14000,
                    12000,
                    13000
                    ]
            }]
        },
    
                // Configuration options go here
        options: {
            legend: {
                display: false,
            }
        }
    });
    
    var ctx = document.getElementById('diagramme2').getContext('2d');
    var chart = new Chart(ctx, {
                // The type of chart we want to create
        type: 'pie',
    
                // The data for our dataset
        data: {
            labels: [
                'Activités extra-territoriales',
                'Activités financières',
                'Administration publique', 
                'Agriculture, chasse, sylviculture',
                'Commerce réparations automobile et d\'articles domestiques',
                'Construction',
                'Education',
                'Hôtels et restaurants',
                'Immobilier, location et services aux entreprises',
                'Industrie manufacturière',
                'Industries extractives',
                'Pêche, aquaculture, services annexes',
                'Production et distribution d\'électricité, de gaz et d\'eau',
                'Santé et action sociale',
                'Services collectifs, sociaux et personnels',
                'Transports et communications',
                'Activités des ménages'
            ],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: ['#5990de',
                '#ffa100',
                'rgb(56, 56, 56)',
                '#D81B60',
                '#3949AB',
                '#039BE5',
                '#00897B',
                '#7CB342',
                '#FDD835',
                '#FB8C00',
                '#6D4C41',
                '#546E7A',
                '#d32f2f',
                '#7B1FA2',
                '#1A237E',
                '#006064'
            ],
                borderColor: 'rgb(0, 0, 0)',
                data: [
                    200,
                    9000,
                    14000,
                    6000,
                    133000,
                    53000,
                    9000,
                    26000,
                    67000,
                    76000,
                    1000,
                    1000,
                    1000,
                    23000,
                    29000,
                    19000,
                ]
            }]
        },
    
                // Configuration options go here
        options: {
            legend: {
                display: false,
            },
            animation: {
                animateScale: true,
            }
        }
    });
})