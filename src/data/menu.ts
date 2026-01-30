export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  title: string;
  categories: MenuCategory[];
};

export const menuData: MenuSection[] = [
  {
    id: "food",
    title: "Food",
    categories: [
      {
        title: "TO START",
        items: [
          { name: "SAGANAKI" },
          { name: "GRILLED VEGETABLES" },
          { name: "FALAFEL" },
          { name: "COUNTRY FRIED PATATOES" },
          { name: "FAVA WITH OCTOPUS" },
          { name: "FETA CHEESE FILO PIE" },
          { name: "LEEK FILO PIE" },
          { name: "SKOPELOS CHEESE PIE" },
        ],
      },
      {
        title: "SALADS",
        items: [
          { name: "GREEK SALAD" },
          { name: "GREEN CHICKEN SALAD" },
          { name: "TUNA SALAD" },
        ],
      },
      {
        title: "PASTA/RISOTTO",
        items: [
          { name: "SPAGETTI NAPOLITANA" },
          { name: "TAGLIATELLE BOLOGNESE" },
          { name: "SHRIMP RISOTTO" },
        ],
      },
      {
        title: "MUST DISH",
        items: [
          { name: "MOUSSAKA" },
          { name: "LAMB" },
        ],
      },
      {
        title: "MEAT/FISH",
        items: [
          { name: "BEEF STEW" },
          { name: "BEEF BURGER" },
          { name: "CHICKEN FILLET" },
          { name: "SALMON FILLET" },
          { name: "FRESH FISH OF THE DAY" },
        ],
      },
      {
        title: "DESSERTS",
        items: [
          { name: "ICE CREAM" },
          { name: "FRUIT SALAD" },
          { name: "GREEK RICH NATURAL YOGURT" },
          { name: "BAKLAVA" },
          { name: "ORANGE CAKE" },
          { name: "WAFFLES WITH CHOCOLATE" },
        ],
      },
      {
        title: "SNACKS",
        items: [
          { name: "CLUB SANDWICH" },
          { name: "VEGAN CLUB SANDWICH" },
          { name: "SPECIAL OMELETTE WITH FRENCH FRIES" },
        ],
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    categories: [
      {
        title: "COFFEE SELECTION",
        items: [
          { name: "ESPRESSO" },
          { name: "ESPRESSO DOUBLE" },
          { name: "ESPRESSO FREDO", description: "Iced coffee" },
          { name: "ESPRESSO MACHIATTO" },
          { name: "CAPUCCINO" },
          { name: "CAPUCCINO DOUBLE" },
          { name: "CAPUCCINO FREDO", description: "Iced coffee" },
          { name: "ICED CARAMEL LATTE" },
          { name: "AMERICANO" },
          { name: "FILTER COFFEE" },
          { name: "FRAPPE" },
          { name: "NESCAFE COFFEE" },
          { name: "GREEK COFFEE" },
          { name: "DOUBLE GREEK COFFEE" },
        ],
      },
      {
        title: "TEA",
        items: [
          { name: "EARL GREY, ENGLISH BREAKFAST, MINT TEA, GREEN TEA, CHAMOMILE" },
        ],
      },
      {
        title: "ICED TEA",
        items: [
          { name: "PEACH, LEMON" },
        ],
      },
      {
        title: "CHOCOLATE COLD OR HOT",
        items: [
          { name: "CHOCOLATE CLASSIC" },
          { name: "CHOCOLATE VIENNOIS" },
        ],
      },
      {
        title: "MILKSHAKES",
        items: [
          { name: "MILKSHAKE CHOCOLATE" },
          { name: "MILKSHAKE VANILLA" },
          { name: "MILKSHAKE STRAWBERRY" },
        ],
      },
      {
        title: "SMOOTHIES",
        items: [
          { name: "SMOOTHIE STRAWBERRY OAT", description: "Strawberry, yogurt, honey, oat, milk, cinnamon" },
        ],
      },
      {
        title: "FRESH FRUIT JUICES",
        items: [
          { name: "FRESH ORANGE JUICE" },
          { name: "BLENDED FRESH FRUITS" },
        ],
      },
      {
        title: "FRUIT JUICES",
        items: [
          { name: "ORANGE, LEMON, PEACH, PINEAPPLE, APPLE, CRANBERRY" },
        ],
      },
      {
        title: "SOFT DRINKS",
        items: [
          { name: "COCA COLA, ORANGE FANTA, LEMON FANTA, SPRITE, SODA, TONIC" },
          { name: "PINK GRAPEFRUIT SODA" },
        ],
      },
      {
        title: "WATER",
        items: [
          { name: "MINERAL WATER 1LIT" },
          { name: "SPARKLING WATER (PERRIER)" },
          { name: "SAN PELLEGRINO 750ML" },
        ],
      },
      {
        title: "ENERGY DRINKS",
        items: [
          { name: "RED BULL" },
        ],
      },
      {
        title: "BEERS",
        items: [
          { name: "MYTHOS" },
          { name: "HEINEKEN" },
          { name: "NON ALCOHOLIC" },
        ],
      },
      {
        title: "WINES & BUBBLES",
        items: [
          { name: "PROSECCO 750 ML" },
          { name: "PROSECCO 200 ML" },
          { name: "ASTI MARTINI 750ML" },
          { name: "MOËT CHANDON BRUT IMPERIAL 750 ML", price: "130.00€" },
          { name: "MOËT CHANDON ROSE IMPERIAL 750 ML" },
          { name: "DOM PERIGNON 750ML" },
        ],
      },
      {
        title: "WHITE WINES",
        items: [
          { name: "KTIMA BIBLIA CHORA", description: "Sauvignon blanc" },
          { name: "THE BLACK SHEEP NICO LAZARIDI", description: "Sauvignon blanc semillon" },
          { name: "APOSTOLAKIS", description: "Dry" },
          { name: "MOSCHOFILERO BOUTARI", description: "Dry with citrus, floral and melon aromas" },
        ],
      },
      {
        title: "ROSE WINES",
        items: [
          { name: "BIBLIA CHORA", description: "Organic" },
          { name: "THE BLACK SHEEP NICO LAZARIDI", description: "Syrah – Cabernet Sauvignon" },
          { name: "APOSTOLAKIS", description: "Demisec" },
        ],
      },
      {
        title: "RED WINES",
        items: [
          { name: "KTIMA BIBLIA CHORA", description: "Combination of Merlot, Cabernet Sauvignon" },
          { name: "THE BLACK SHEEP NICO LAZARIDI", description: "Syrah – Merlot" },
          { name: "APOSTOLAKIS", description: "Dry" },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    categories: [
      {
        title: "COCKTAILS WITH RUM",
        items: [
          { name: "CUBA LIBRE", description: "Rum, coca cola, lime" },
          { name: "MISMO", description: "Rum, soda, lime" },
          { name: "MOJITO", description: "Rum, soda, lime, sugar, mint" },
          { name: "PINA COLADA", description: "Rum, coconut cream, pineapple" },
          { name: "CAIPIRISSIMA", description: "Rum, sugar, lime" },
          { name: "MAI TAI", description: "Black and gold rum, triple sec, lime, almond syrup" },
          { name: "DAIQUIRI STRAWBERRY", description: "Rum, strawberry, lime, sugar" },
        ],
      },
      {
        title: "COCKTAILS WITH VODKA",
        items: [
          { name: "COSMOPOLITAN", description: "Vodka, Cointreau, lime, cranberry" },
          { name: "APPLE MARTINI", description: "Vodka, apple liqueur" },
          { name: "CAIPIROSCA", description: "Vodka, lime, sugar" },
          { name: "WHITE RUSSIAN", description: "Vodka, Kahlua, milk cream" },
          { name: "LEMON DROP", description: "Vodka, Cointreau, lemon" },
        ],
      },
      {
        title: "COCKTAILS WITH TEQUILA",
        items: [
          { name: "MARGARITA", description: "Tequila, triple sec, lime" },
          { name: "TEQUILA SUNRISE", description: "Tequila, Grenadine syrup, orange juice" },
          { name: "PALOMA", description: "Tequila, lime juice, pink grapefruit soda" },
        ],
      },
      {
        title: "COCKTAILS WITH GIN",
        items: [
          { name: "BLUE LAGOON", description: "Gin, vodka, sugar, lime, blue curacao" },
          { name: "TOM COLLINS", description: "Gin, soda, sugar syrup, lemon juice" },
        ],
      },
      {
        title: "COCKTAILS WITH MARTINI",
        items: [
          { name: "DRY MARTINI", description: "Gin, martini, olive" },
          { name: "NEGRONI", description: "Campari, gin, martini rosso" },
        ],
      },
      {
        title: "COCKTAILS WITH DRAMBUIE",
        items: [
          { name: "DRAMBUIE LIBERTINE", description: "Drambuie, lime" },
          { name: "APPLE SODA", description: "Drambuie, apple liqueur, soda, lime" },
          { name: "DRAMBUIE SODA", description: "Drambuie, soda, lime" },
          { name: "RUSTY NAIL", description: "Drambuie, whisky" },
        ],
      },
      {
        title: "ALL TIME FAVORITES",
        items: [
          { name: "CAMPARI SHOWER", description: "Campari, sparkling wine" },
          { name: "APEROL SPRITZ", description: "Aperol, Prosecco, soda" },
          { name: "SHANDY", description: "Beer, Sprite" },
        ],
      },
      {
        title: "SAVOR COCKTAILS",
        items: [
          { name: "Captain’s Secret", description: "Bourbon, lime, apple syrup, passion fruit, orgeat syrup, orange bitter and angostura." },
          { name: "Long Island", description: "Gin, vodka, tequila, rum, triple sec, sugar syrup, lime and cola." },
          { name: "Jack Sparrow", description: "Tequila, ginger, falernum syrup, cucumber and lime." },
          { name: "Poisonous Kiss", description: "Gin, aperol, passion syrup, lime, grenadine and orange bitter." },
          { name: "Cucumber Gin Fizz", description: "Gin, cucumber, lime, tonic." },
          { name: "White Pearl", description: "Mastiha and yogurt liqueur, rose syrup, lime, falernum syrup and angostura." },
          { name: "Sunrise in Skiathos", description: "Mastiha, vodka, grenadine, pink soda, passion fruit." },
        ],
      },
      {
        title: "SPIRITS",
        items: [
           { name: "APERITIFS: CAMPARI, APEROL, OUZO, TSIPOURO, RAKI, MASTICHA" },
           { name: "LIQUEUR: AMARETTO, BAILEYS, DRAMBUIE, FRANGELICO, SOUTHERN COMFORT, KAHLUA, TIA MARIA, COINTREAU" },
           { name: "TEQUILA: OLMEGA BLANCO, OLMEGA REPOSADO, JOSE CUERVO GOLD/SILVER, SIERRA REPOSADO/SILVER" },
           { name: "VERMOUTH: MARTINI BIANCO/ROSSO" },
           { name: "DIGESTIVE: JAGERMEISTER, LIMONCELLO, CRAPPA BERTA" },
           { name: "PREMIUM TEQUILAS: DON JULIO BLANCO, DON JULIO REPOSADO" },
           { name: "VODKAS: STOLICHNAYA, SERKOVA, ABSOLUT, SMIRNOFF, URSUS" },
           { name: "PREMIUM VODKAS: BELVEDERE, GREY GOOSE, CIROC" },
           { name: "COGNAC/BRANDIES: HENNESSY, METAXA 5*" },
           { name: "GIN: GORDON’S, BOMBAY, BEEFEATER, TANQUERAY, GORDONS PINK, BEEFEATER PINK" },
           { name: "PREMIUM GIN: TANQUERAY TEN, HENDRICK’S" },
           { name: "RUM: BACARDI, HAVANA CLUB, ANEJO RESERVA, CACHACA, CAPTAIN MORGAN BLACK, HAVANA CLUB 3 YEARS, BACARDI GOLD, BACARDI BLACK" },
           { name: "PREMIUM RUM: DIPLOMATICO RESERVA EXCLUSIVA, HAVANA 7ANOS, ANGOSTURA 7 YEARS" },
           { name: "WHISKIES: JOHNNIE WALKER RED, CUTTY SHARK, HAIG, FAMOUS GROUSE, JAMESON, DEWAR’S, CANADIAN CLUB" },
           { name: "BOURBON: JIM BEAM, FOUR ROSES, JACK DANIELS" },
           { name: "MALT WHISKIES: GLENFIDDICH, TALISKER 10, CARDHU 12, OBAN 14, LAGAVULIN 16" },
           { name: "PREMIUM WHISKIES: JOHNNIE WALKER BLACK, JOHNNIE WALKER GOLD, CHIVAS REGAL 12, DIMPLE 15" },
        ]
      }
    ],
  },
];
