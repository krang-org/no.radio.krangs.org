window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Thompson Lynch",
      "url": "./commercials/nb-NO/wireless/thompson-lynch/16744521843580/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Swaniawski Llc",
      "url": "./commercials/nb-NO/media-production/swaniawski-llc/16744518258090/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Cole Steuber",
      "url": "./commercials/nb-NO/music/cole-steuber/16744517456690/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Jacobi Crist",
      "url": "./commercials/nb-NO/computer-hardware/jacobi-crist/16744515740180/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Price Ward And Goyette",
      "url": "./commercials/nb-NO/security-and-investigations/price-ward-and-goyette/16744525305050/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Will Hintz And Heidenreich",
      "url": "./commercials/nb-NO/international-trade-and-development/will-hintz-and-heidenreich/16744524622310/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Ernser Dibbert",
      "url": "./commercials/nb-NO/libraries/ernser-dibbert/16744530232280/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Dach Casper",
      "url": "./commercials/nb-NO/online-media/dach-casper/16744523833530/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Howell Considine And Waelchi",
      "url": "./commercials/nb-NO/management-consulting/howell-considine-and-waelchi/16744531989850/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Bauch Prosacco And Senger",
      "url": "./commercials/nb-NO/furniture/bauch-prosacco-and-senger/16744518650860/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Nicolas Willms",
      "url": "./commercials/nb-NO/plastics/nicolas-willms/16744518975840/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Dickinson Raynor",
      "url": "./commercials/nb-NO/mining-metals/dickinson-raynor/16744517152420/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "King Okuneva",
      "url": "./commercials/nb-NO/higher-education/king-okuneva/16744524122630/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Kiehn Group",
      "url": "./commercials/nb-NO/e-learning/kiehn-group/16744531739260/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Prosacco Inc",
      "url": "./commercials/nb-NO/arts-and-crafts/prosacco-inc/16744524482650/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Streich Inc",
      "url": "./commercials/nb-NO/security-and-investigations/streich-inc/16744522491350/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Bartoletti Inc",
      "url": "./commercials/nb-NO/paper-forest-products/bartoletti-inc/16744525036760/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Lang Group",
      "url": "./commercials/nb-NO/investment-management/lang-group/16744521609250/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Dubuque And Sons",
      "url": "./commercials/nb-NO/telecommunications/dubuque-and-sons/16744532379980/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Kassulke Bradtke And Kohler",
      "url": "./commercials/nb-NO/environmental-services/kassulke-bradtke-and-kohler/16744526755290/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Stroman Inc",
      "url": "./commercials/nb-NO/alternative-medicine/stroman-inc/16744523333130/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Schulist Llc",
      "url": "./commercials/nb-NO/semiconductors/schulist-llc/16744531063890/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Dicki Franecki",
      "url": "./commercials/nb-NO/program-development/dicki-franecki/16744521938620/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Schumm Gerlach",
      "url": "./commercials/nb-NO/insurance/schumm-gerlach/16744518090920/commercial.mp3",
      "artist": "Insurance",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Becker Inc",
      "url": "./commercials/nb-NO/oil-energy/becker-inc/16744524760960/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "O Reilly Marquardt And Beahan",
      "url": "./commercials/nb-NO/alternative-medicine/o-reilly-marquardt-and-beahan/16744530763730/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Pagac Walker And Brakus",
      "url": "./commercials/nb-NO/alternative-dispute-resolution/pagac-walker-and-brakus/16744516673950/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Osinski Hermann And Spencer",
      "url": "./commercials/nb-NO/sports/osinski-hermann-and-spencer/16744530662160/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Zemlak Price And Beier",
      "url": "./commercials/nb-NO/alternative-dispute-resolution/zemlak-price-and-beier/16744529487070/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Wiegand Kihn And Erdman",
      "url": "./commercials/nb-NO/nonprofit-organization-management/wiegand-kihn-and-erdman/16744531312080/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Jenkins Pfannerstill And Dibbert",
      "url": "./commercials/nb-NO/maritime/jenkins-pfannerstill-and-dibbert/16744527707500/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Olson Inc",
      "url": "./commercials/nb-NO/food-beverages/olson-inc/16744519706200/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Kemmer And Sons",
      "url": "./commercials/nb-NO/semiconductors/kemmer-and-sons/16744517278360/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Reichert Jakubowski And Gaylord",
      "url": "./commercials/nb-NO/photography/reichert-jakubowski-and-gaylord/16744516910670/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Schmitt Hagenes And Feest",
      "url": "./commercials/nb-NO/sports/schmitt-hagenes-and-feest/16744526324460/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Waters Kertzmann",
      "url": "./commercials/nb-NO/education-management/waters-kertzmann/16744525503190/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Fritsch Veum",
      "url": "./commercials/nb-NO/renewables-environment/fritsch-veum/16744529354030/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Windler Kessler And Walker",
      "url": "./commercials/nb-NO/transportationg-trucking-railroad/windler-kessler-and-walker/16744523730690/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Gulgowski Okuneva And Von",
      "url": "./commercials/nb-NO/public-safety/gulgowski-okuneva-and-von/16744529693690/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Langworth Group",
      "url": "./commercials/nb-NO/military/langworth-group/16744522703950/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Zieme Llc",
      "url": "./commercials/nb-NO/fine-art/zieme-llc/16744527836090/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Walsh Lakin",
      "url": "./commercials/nb-NO/sports/walsh-lakin/16744527241850/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Lowe Krajcik And Legros",
      "url": "./commercials/nb-NO/railroad-manufacture/lowe-krajcik-and-legros/16744516183370/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Stehr Doyle And Yundt",
      "url": "./commercials/nb-NO/mechanical-or-industrial-engineering/stehr-doyle-and-yundt/16744523201200/commercial.mp3",
      "artist": "Mechanical Or Industrial Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Larson Smitham And Yost",
      "url": "./commercials/nb-NO/renewables-environment/larson-smitham-and-yost/16744520012380/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Hirthe Stiedemann And Baumbach",
      "url": "./commercials/nb-NO/recreational-facilities-and-services/hirthe-stiedemann-and-baumbach/16744528775590/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Rippin Group",
      "url": "./commercials/nb-NO/commercial-real-estate/rippin-group/16744520803480/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Stehr Farrell And Frami",
      "url": "./commercials/nb-NO/executive-office/stehr-farrell-and-frami/16744529100010/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Mertz Brown",
      "url": "./commercials/nb-NO/entertainment/mertz-brown/16744525732170/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Schmidt Schumm And Kulas",
      "url": "./commercials/nb-NO/philanthropy/schmidt-schumm-and-kulas/16744522002350/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Quitzon Kling And Gorczany",
      "url": "./commercials/nb-NO/computer-networking/quitzon-kling-and-gorczany/16744523660040/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Boyer Group",
      "url": "./commercials/nb-NO/management-consulting/boyer-group/16744519275590/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Roberts Hermann And Labadie",
      "url": "./commercials/nb-NO/wireless/roberts-hermann-and-labadie/16744517104060/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Murray Zemlak And Lemke",
      "url": "./commercials/nb-NO/maritime/murray-zemlak-and-lemke/16744526872320/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Rau And Sons",
      "url": "./commercials/nb-NO/farming/rau-and-sons/16744529164120/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Quitzon Blanda And Will",
      "url": "./commercials/nb-NO/defense-space/quitzon-blanda-and-will/16744523592320/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Schiller And Sons",
      "url": "./commercials/nb-NO/dairy/schiller-and-sons/16744524903270/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Bartell Gutkowski And Reichel",
      "url": "./commercials/nb-NO/broadcast-media/bartell-gutkowski-and-reichel/16744517356370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Schuppe Inc",
      "url": "./commercials/nb-NO/leisure-travel-tourism/schuppe-inc/16744529873620/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Ward Group",
      "url": "./commercials/nb-NO/restaurants/ward-group/16744523394410/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Cormier Swift And Langosh",
      "url": "./commercials/nb-NO/computer-games/cormier-swift-and-langosh/16744522329990/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Buckridge Morar And Hahn",
      "url": "./commercials/nb-NO/philanthropy/buckridge-morar-and-hahn/16744515649220/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Krajcik Gorczany And Jerde",
      "url": "./commercials/nb-NO/electrical-electronic-manufacturing/krajcik-gorczany-and-jerde/16744515034340/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Pouros Leffler",
      "url": "./commercials/nb-NO/design/pouros-leffler/16744521752840/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Nikolaus Balistreri And Lebsack",
      "url": "./commercials/nb-NO/hospitality/nikolaus-balistreri-and-lebsack/16744520127210/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Heller And Sons",
      "url": "./commercials/nb-NO/nonprofit-organization-management/heller-and-sons/16744522397340/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Hudson Llc",
      "url": "./commercials/nb-NO/investment-management/hudson-llc/16744522870080/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Gorczany Kautzer",
      "url": "./commercials/nb-NO/professional-training-coaching/gorczany-kautzer/16744528652070/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Maggio Llc",
      "url": "./commercials/nb-NO/political-organization/maggio-llc/16744515318800/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Dietrich Torp And Feeney",
      "url": "./commercials/nb-NO/entertainment/dietrich-torp-and-feeney/16744524964450/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Durgan Schneider And Rempel",
      "url": "./commercials/nb-NO/military/durgan-schneider-and-rempel/16744523531910/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Rodriguez Lindgren And Renner",
      "url": "./commercials/nb-NO/construction/rodriguez-lindgren-and-renner/16744520447850/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Ondricka Lakin And Mcglynn",
      "url": "./commercials/nb-NO/writing-and-editing/ondricka-lakin-and-mcglynn/16744515835210/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Turner And Sons",
      "url": "./commercials/nb-NO/religious-institutions/turner-and-sons/16744530137390/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Stanton Inc",
      "url": "./commercials/nb-NO/cosmetics/stanton-inc/16744525127690/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Hudson Llc",
      "url": "./commercials/nb-NO/nanotechnology/hudson-llc/16744525864750/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Aufderhar Group",
      "url": "./commercials/nb-NO/writing-and-editing/aufderhar-group/16744517890410/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Kling Inc",
      "url": "./commercials/nb-NO/market-research/kling-inc/16744527494730/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Walsh Hyatt And Cormier",
      "url": "./commercials/nb-NO/internet/walsh-hyatt-and-cormier/16744521392300/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Bahringer Klocko",
      "url": "./commercials/nb-NO/ranching/bahringer-klocko/16744530904330/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Simonis Bauch And Ortiz",
      "url": "./commercials/nb-NO/food-production/simonis-bauch-and-ortiz/16744531187720/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Blanda Mann",
      "url": "./commercials/nb-NO/international-trade-and-development/blanda-mann/16744517564150/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Lehner Inc",
      "url": "./commercials/nb-NO/construction/lehner-inc/16744519604200/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Wiza Inc",
      "url": "./commercials/nb-NO/real-estate/wiza-inc/16744515397910/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Fay Inc",
      "url": "./commercials/nb-NO/architecture-planning/fay-inc/16744532590750/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Jacobs Feest",
      "url": "./commercials/nb-NO/design/jacobs-feest/16744522153460/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Gulgowski Bartell And Feest",
      "url": "./commercials/nb-NO/fishery/gulgowski-bartell-and-feest/16744519469560/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Yost Ferry And Lindgren",
      "url": "./commercials/nb-NO/professional-training-coaching/yost-ferry-and-lindgren/16744520335330/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Bogan Group",
      "url": "./commercials/nb-NO/law-enforcement/bogan-group/16744518150500/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Schowalter And Sons",
      "url": "./commercials/nb-NO/philanthropy/schowalter-and-sons/16744532178180/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Hermiston Group",
      "url": "./commercials/nb-NO/food-beverages/hermiston-group/16744522922360/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Torphy Shields And Lang",
      "url": "./commercials/nb-NO/package-freight-delivery/torphy-shields-and-lang/16744525173890/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Mueller And Sons",
      "url": "./commercials/nb-NO/aviation-aerospace/mueller-and-sons/16744518911810/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Tillman Konopelski",
      "url": "./commercials/nb-NO/mining-metals/tillman-konopelski/16744522276730/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Streich Group",
      "url": "./commercials/nb-NO/translation-and-localization/streich-group/16744526934600/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Kunze Nienow",
      "url": "./commercials/nb-NO/automotive/kunze-nienow/16744517506490/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Collins Bergstrom",
      "url": "./commercials/nb-NO/plastics/collins-bergstrom/16744517944510/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Lesch Parker And Nolan",
      "url": "./commercials/nb-NO/medical-practice/lesch-parker-and-nolan/16744526262000/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Fritsch Kuhic",
      "url": "./commercials/nb-NO/leisure-travel-tourism/fritsch-kuhic/16744525660420/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "O Connell And Sons",
      "url": "./commercials/nb-NO/graphic-design/o-connell-and-sons/16744519345640/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Weimann Strosin And Wuckert",
      "url": "./commercials/nb-NO/supermarkets/weimann-strosin-and-wuckert/16744515272250/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Schumm Group",
      "url": "./commercials/nb-NO/capital-markets/schumm-group/16744520628130/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Gerlach Group",
      "url": "./commercials/nb-NO/online-media/gerlach-group/16744522980090/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Schiller Raynor",
      "url": "./commercials/nb-NO/market-research/schiller-raynor/16744516734350/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Schmeler Schaefer And Kunde",
      "url": "./commercials/nb-NO/airlines-aviation/schmeler-schaefer-and-kunde/16744515093470/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Reynolds Hermann",
      "url": "./commercials/nb-NO/wireless/reynolds-hermann/16744527375720/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Harvey Koss And Flatley",
      "url": "./commercials/nb-NO/higher-education/harvey-koss-and-flatley/16744532708970/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Hagenes Klein",
      "url": "./commercials/nb-NO/government-relations/hagenes-klein/16744524063090/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Torphy Keebler And Effertz",
      "url": "./commercials/nb-NO/paper-forest-products/torphy-keebler-and-effertz/16744532314450/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Mcdermott Schmitt And Olson",
      "url": "./commercials/nb-NO/furniture/mcdermott-schmitt-and-olson/16744531430950/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Blick Effertz And Mohr",
      "url": "./commercials/nb-NO/import-and-export/blick-effertz-and-mohr/16744517660780/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Schroeder Wiza And Bosco",
      "url": "./commercials/nb-NO/aviation-aerospace/schroeder-wiza-and-bosco/16744526457030/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Rippin Group",
      "url": "./commercials/nb-NO/executive-office/rippin-group/16744527643370/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Kuhlman Llc",
      "url": "./commercials/nb-NO/military/kuhlman-llc/16744523911390/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Prohaska Inc",
      "url": "./commercials/nb-NO/veterinary/prohaska-inc/16744523277260/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Hintz Heller",
      "url": "./commercials/nb-NO/alternative-medicine/hintz-heller/16744525235210/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "O Kon Paucek And Breitenberg",
      "url": "./commercials/nb-NO/plastics/o-kon-paucek-and-breitenberg/16744521196950/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Abernathy And Sons",
      "url": "./commercials/nb-NO/nonprofit-organization-management/abernathy-and-sons/16744524272330/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Bauch Mcclure",
      "url": "./commercials/nb-NO/broadcast-media/bauch-mcclure/16744527580580/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Weissnat Hirthe",
      "url": "./commercials/nb-NO/fund-raising/weissnat-hirthe/16744521492260/commercial.mp3",
      "artist": "Fund Raising",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Willms Tromp",
      "url": "./commercials/nb-NO/professional-training-coaching/willms-tromp/16744528473770/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Murphy Schneider",
      "url": "./commercials/nb-NO/import-and-export/murphy-schneider/16744526135780/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Schmidt Inc",
      "url": "./commercials/nb-NO/retail/schmidt-inc/16744532524910/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Towne Llc",
      "url": "./commercials/nb-NO/public-safety/towne-llc/16744523466140/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Willms Cruickshank And Hammes",
      "url": "./commercials/nb-NO/food-production/willms-cruickshank-and-hammes/16744518536390/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Predovic And Sons",
      "url": "./commercials/nb-NO/legislative-office/predovic-and-sons/16744529008660/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Huel Davis And Grant",
      "url": "./commercials/nb-NO/plastics/huel-davis-and-grant/16744526625830/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Abbott And Sons",
      "url": "./commercials/nb-NO/education-management/abbott-and-sons/16744528711310/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Veum Ward",
      "url": "./commercials/nb-NO/public-safety/veum-ward/16744528204830/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Rath Gleason And Kuhic",
      "url": "./commercials/nb-NO/leisure-travel-tourism/rath-gleason-and-kuhic/16744523038700/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Macgyver Llc",
      "url": "./commercials/nb-NO/religious-institutions/macgyver-llc/16744520954430/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Tremblay Abernathy And Osinski",
      "url": "./commercials/nb-NO/aviation-aerospace/tremblay-abernathy-and-osinski/16744519413210/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Medhurst Howell And Volkman",
      "url": "./commercials/nb-NO/philanthropy/medhurst-howell-and-volkman/16744524408680/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Cummerata Hill",
      "url": "./commercials/nb-NO/executive-office/cummerata-hill/16744518707980/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Nolan Connelly And Gusikowski",
      "url": "./commercials/nb-NO/computer-network-security/nolan-connelly-and-gusikowski/16744516469240/commercial.mp3",
      "artist": "Computer Network Security",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Treutel Hammes And Vandervort",
      "url": "./commercials/nb-NO/textiles/treutel-hammes-and-vandervort/16744519194540/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Legros Mohr And Sawayn",
      "url": "./commercials/nb-NO/religious-institutions/legros-mohr-and-sawayn/16744522646940/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Gottlieb Inc",
      "url": "./commercials/nb-NO/arts-and-crafts/gottlieb-inc/16744521545130/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Hodkiewicz Group",
      "url": "./commercials/nb-NO/alternative-medicine/hodkiewicz-group/16744529825330/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Spencer Mckenzie And Fisher",
      "url": "./commercials/nb-NO/security-and-investigations/spencer-mckenzie-and-fisher/16744531373770/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Douglas Reichel",
      "url": "./commercials/nb-NO/printing/douglas-reichel/16744529562890/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Lebsack Waters",
      "url": "./commercials/nb-NO/utilities/lebsack-waters/16744531586990/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Mann Mueller And Heller",
      "url": "./commercials/nb-NO/events-services/mann-mueller-and-heller/16744519759770/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Greenfelder Bartoletti",
      "url": "./commercials/nb-NO/electrical-electronic-manufacturing/greenfelder-bartoletti/16744529950070/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Johns Llc",
      "url": "./commercials/nb-NO/alternative-medicine/johns-llc/16744530434120/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Lehner Satterfield",
      "url": "./commercials/nb-NO/judiciary/lehner-satterfield/16744519889970/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Harris Cartwright",
      "url": "./commercials/nb-NO/international-trade-and-development/harris-cartwright/16744515199830/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Marquardt And Sons",
      "url": "./commercials/nb-NO/industrial-automation/marquardt-and-sons/16744516241840/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Treutel Roberts And Schaden",
      "url": "./commercials/nb-NO/online-media/treutel-roberts-and-schaden/16744528865130/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Mueller Schuppe",
      "url": "./commercials/nb-NO/architecture-planning/mueller-schuppe/16744520503690/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Murphy Flatley And Leuschke",
      "url": "./commercials/nb-NO/nonprofit-organization-management/murphy-flatley-and-leuschke/16744525598650/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Mosciski Gleichner And Cummings",
      "url": "./commercials/nb-NO/philanthropy/mosciski-gleichner-and-cummings/16744532453530/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Lindgren Inc",
      "url": "./commercials/nb-NO/business-supplies-and-equipment/lindgren-inc/16744523093440/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Macgyver And Sons",
      "url": "./commercials/nb-NO/recreational-facilities-and-services/macgyver-and-sons/16744517212810/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Lakin Inc",
      "url": "./commercials/nb-NO/defense-space/lakin-inc/16744516357610/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Barton And Sons",
      "url": "./commercials/nb-NO/food-production/barton-and-sons/16744529410710/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Senger Botsford And Dibbert",
      "url": "./commercials/nb-NO/management-consulting/senger-botsford-and-dibbert/16744528933360/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Leuschke And Sons",
      "url": "./commercials/nb-NO/performing-arts/leuschke-and-sons/16744520222950/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Torphy Volkman",
      "url": "./commercials/nb-NO/political-organization/torphy-volkman/16744531926510/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Prosacco And Sons",
      "url": "./commercials/nb-NO/cosmetics/prosacco-and-sons/16744516978690/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Rutherford Lindgren And Dubuque",
      "url": "./commercials/nb-NO/banking/rutherford-lindgren-and-dubuque/16744527057540/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Langworth Lesch And Stanton",
      "url": "./commercials/nb-NO/information-technology-and-services/langworth-lesch-and-stanton/16744525998570/commercial.mp3",
      "artist": "Information Technology And Services",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Hills And Sons",
      "url": "./commercials/nb-NO/electrical-electronic-manufacturing/hills-and-sons/16744523985470/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Cormier West",
      "url": "./commercials/nb-NO/think-tanks/cormier-west/16744530011430/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Purdy Botsford And Durgan",
      "url": "./commercials/nb-NO/hospitality/purdy-botsford-and-durgan/16744522543070/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Hills Hand And Crist",
      "url": "./commercials/nb-NO/machinery/hills-hand-and-crist/16744526515470/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Kertzmann Skiles And Denesik",
      "url": "./commercials/nb-NO/performing-arts/kertzmann-skiles-and-denesik/16744515529280/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Hansen Llc",
      "url": "./commercials/nb-NO/warehousing/hansen-llc/16744518195970/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Mclaughlin Hayes",
      "url": "./commercials/nb-NO/renewables-environment/mclaughlin-hayes/16744522058690/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Reilly Connelly",
      "url": "./commercials/nb-NO/government-administration/reilly-connelly/16744532248950/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Stark And Sons",
      "url": "./commercials/nb-NO/civic-social-organization/stark-and-sons/16744518012670/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Robel Cummerata And Gibson",
      "url": "./commercials/nb-NO/program-development/robel-cummerata-and-gibson/16744518318970/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Brekke Sawayn",
      "url": "./commercials/nb-NO/automotive/brekke-sawayn/16744524183970/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Mann Wisozk",
      "url": "./commercials/nb-NO/publishing/mann-wisozk/16744527309810/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Hayes Feeney And Adams",
      "url": "./commercials/nb-NO/translation-and-localization/hayes-feeney-and-adams/16744528399550/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Mann Buckridge",
      "url": "./commercials/nb-NO/financial-services/mann-buckridge/16744521285130/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "O Conner And Sons",
      "url": "./commercials/nb-NO/furniture/o-conner-and-sons/16744522225420/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Bogan Macejkovic And Nikolaus",
      "url": "./commercials/nb-NO/animation/bogan-macejkovic-and-nikolaus/16744525441020/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Koss Herman",
      "url": "./commercials/nb-NO/hospitality/koss-herman/16744522806290/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

