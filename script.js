var options = {
    valueNames: ['Article', 'Article Description','PLU CODE','UOM'],
    item: '<li><h3 class="PLU CODE"></h3>
        <p class="ARTICLE"></p>
        <p class="ARTICLE DESCRIPTION"></p>
        <p class="UOM"></p></li>'
};

var values = [
  {
    "Article": "1000564",
    "Article Description": "POTATO BABY KG",
    "PLU CODE": "2",
    "UOM": "KG"
  },
  {
    "Article": "1000810",
    "Article Description": "GARLIC KG",
    "PLU CODE": "7",
    "UOM": "KG"
  },
  {
    "Article": "1000816",
    "Article Description": "ONION KG",
    "PLU CODE": "9",
    "UOM": "KG"
  },
  {
    "Article": "1000818",
    "Article Description": "ONION SAMBAR KG",
    "PLU CODE": "10",
    "UOM": "KG"
  },
  {
    "Article": "1365251",
    "Article Description": "ARVI",
    "PLU CODE": "3136",
    "UOM": "KG"
  },
  {
    "Article": "1365241",
    "Article Description": "AWLA",
    "PLU CODE": "3132",
    "UOM": "KG"
  },
  {
    "Article": "1365198",
    "Article Description": "CABBAGE 1 PC PK NB",
    "PLU CODE": "3097",
    "UOM": "PC"
  },
  {
    "Article": "1000880",
    "Article Description": "APPLE GOURD - TINDA KG",
    "PLU CODE": "32",
    "UOM": "KG"
  },
  {
    "Article": "1000894",
    "Article Description": "TOMATO KG",
    "PLU CODE": "38",
    "UOM": "KG"
  },
  {
    "Article": "1000935",
    "Article Description": "MANGO LANGDA KG ECONOMY",
    "PLU CODE": "57",
    "UOM": "KG"
  },
  {
    "Article": "1000951",
    "Article Description": "POMEGRANATE PACK",
    "PLU CODE": "64",
    "UOM": "PC"
  },
  {
    "Article": "1012866",
    "Article Description": "MANGO NEELAM KG",
    "PLU CODE": "74",
    "UOM": "KG"
  },
  {
    "Article": "1019919",
    "Article Description": "APPLE PACIFIC ROSE",
    "PLU CODE": "89",
    "UOM": "KG"
  },
  {
    "Article": "1019922",
    "Article Description": "MANGO CHAUSA KG",
    "PLU CODE": "92",
    "UOM": "KG"
  },
  {
    "Article": "1023854",
    "Article Description": "ORANGE KINNOW KG",
    "PLU CODE": "109",
    "UOM": "KG"
  },
  {
    "Article": "1030359",
    "Article Description": "APPLE GOLDEN KG",
    "PLU CODE": "116",
    "UOM": "KG"
  },
  {
    "Article": "1030393",
    "Article Description": "APPLE GRANNY SMITH KG",
    "PLU CODE": "117",
    "UOM": "KG"
  },
  {
    "Article": "1086743",
    "Article Description": "WHEAT GRASS PC",
    "PLU CODE": "130",
    "UOM": "PC"
  },
  {
    "Article": "1164621",
    "Article Description": "PINEAPPLE SLICED",
    "PLU CODE": "179",
    "UOM": "PC"
  },
  {
    "Article": "1167712",
    "Article Description": "ORANGE NAGPUR",
    "PLU CODE": "186",
    "UOM": "KG"
  },
  {
    "Article": "1182229",
    "Article Description": "PLUMS IMPORTED",
    "PLU CODE": "243",
    "UOM": "KG"
  },
  {
    "Article": "1185648",
    "Article Description": "APPLE ROYAL GALA PACK",
    "PLU CODE": "256",
    "UOM": "PC"
  },
  {
    "Article": "1250876",
    "Article Description": "CHICKEN HAM BLOCK",
    "PLU CODE": "360",
    "UOM": "KG"
  },
  {
    "Article": "1272755",
    "Article Description": "PRASUMA PRIME TENDERLOIN",
    "PLU CODE": "455",
    "UOM": "KG"
  },
  {
    "Article": "1285129",
    "Article Description": "TURKEY HAM",
    "PLU CODE": "497",
    "UOM": "KG"
  },
  {
    "Article": "1318792",
    "Article Description": "(NB) THYME",
    "PLU CODE": "896",
    "UOM": "PC"
  },
  {
    "Article": "1319570",
    "Article Description": "PERSIMMON KG",
    "PLU CODE": "933",
    "UOM": "KG"
  },
  {
    "Article": "1334039",
    "Article Description": "PEARS KOREAN KG",
    "PLU CODE": "1077",
    "UOM": "KG"
  },
  {
    "Article": "1334267",
    "Article Description": "BANANA RAW",
    "PLU CODE": "1083",
    "UOM": "KG"
  },
  {
    "Article": "1340048",
    "Article Description": "DODONI FETA 1KG",
    "PLU CODE": "1232",
    "UOM": "KG"
  },
  {
    "Article": "1340888",
    "Article Description": "(NB) ROCKET / ARUGULA",
    "PLU CODE": "1463",
    "UOM": "PC"
  },
  {
    "Article": "1342700",
    "Article Description": "RRO BURRATA 1KG",
    "PLU CODE": "1787",
    "UOM": "KG"
  },
  {
    "Article": "1342701",
    "Article Description": "RRO FULL FAT PANEER 1KG",
    "PLU CODE": "1788",
    "UOM": "KG"
  },
  {
    "Article": "1342708",
    "Article Description": "RRO BOCCONCINI 1KG",
    "PLU CODE": "1791",
    "UOM": "KG"
  },
  {
    "Article": "1342709",
    "Article Description": "RRO MOZZARELLA 1KG",
    "PLU CODE": "1792",
    "UOM": "KG"
  },
  {
    "Article": "1342710",
    "Article Description": "RRO MASCARPONE 1KG",
    "PLU CODE": "1793",
    "UOM": "KG"
  },
  {
    "Article": "1342711",
    "Article Description": "RRO RICOTTA 1KG",
    "PLU CODE": "1794",
    "UOM": "KG"
  },
  {
    "Article": "1342713",
    "Article Description": "RRO SOUR CREAM 1KG",
    "PLU CODE": "1796",
    "UOM": "KG"
  },
  {
    "Article": "1342714",
    "Article Description": "RRO LOW FAT PANEER 1KG",
    "PLU CODE": "1797",
    "UOM": "KG"
  },
  {
    "Article": "1342920",
    "Article Description": "GREEN SENSE LATTE MIX TURMERIC 100g",
    "PLU CODE": "1873",
    "UOM": "PC"
  },
  {
    "Article": "1350231",
    "Article Description": "MODERN CURD POUCH 1 KG",
    "PLU CODE": "2118",
    "UOM": "KG"
  },
  {
    "Article": "1350232",
    "Article Description": "MODERN TOFU 200G",
    "PLU CODE": "2119",
    "UOM": "PC"
  },
  {
    "Article": "1350233",
    "Article Description": "MODERN CURD 400GM",
    "PLU CODE": "2120",
    "UOM": "PC"
  },
  {
    "Article": "1355138",
    "Article Description": "WESTZANER SMOKED CHEESE NATURAL 3KG",
    "PLU CODE": "2142",
    "UOM": "KG"
  },
  {
    "Article": "1355141",
    "Article Description": "HOLLAND KROON SMOKED PROC CHEESE 2.7 KG",
    "PLU CODE": "2145",
    "UOM": "KG"
  },
  {
    "Article": "1355145",
    "Article Description": "ARLA PIZZA TOPPING CHEESE BLOCK 2.3KG",
    "PLU CODE": "2146",
    "UOM": "KG"
  },
  {
    "Article": "1355150",
    "Article Description": "LE SUPERB EMMENTAL CHEESE 4 KG",
    "PLU CODE": "2147",
    "UOM": "KG"
  },
  {
    "Article": "1355151",
    "Article Description": "LE SUPERB RACLETTE CHEESE 5KG",
    "PLU CODE": "2148",
    "UOM": "KG"
  },
  {
    "Article": "1355152",
    "Article Description": "ARLA MOZZARELLA CHEESE 2.3KG",
    "PLU CODE": "2149",
    "UOM": "KG"
  },
  {
    "Article": "1355154",
    "Article Description": "LANDANA CHEESE PHILLY TYPE 2KG",
    "PLU CODE": "2151",
    "UOM": "KG"
  },
  {
    "Article": "1355158",
    "Article Description": "ARLA CHEESE MOZARELLA BLOCK 2.3KG",
    "PLU CODE": "2152",
    "UOM": "KG"
  },
  {
    "Article": "1355174",
    "Article Description": "WESTLAND SMOKED CHEESE BLK PEPPER 2.85KG",
    "PLU CODE": "2156",
    "UOM": "KG"
  },
  {
    "Article": "1355175",
    "Article Description": "WESTLAND SMOKED CHEESE RED PEPPER 2.85KG",
    "PLU CODE": "2157",
    "UOM": "KG"
  },
  {
    "Article": "1355183",
    "Article Description": "DAIRYLAND MOZZARELLA CHEESE 2.3KG",
    "PLU CODE": "2158",
    "UOM": "KG"
  },
  {
    "Article": "1355184",
    "Article Description": "OLYMPUS ALBA GREEK WHITE CHEESE COW 2KG",
    "PLU CODE": "2159",
    "UOM": "KG"
  },
  {
    "Article": "1355185",
    "Article Description": "WESTZANER SMOKED CHEESE RED PEPPER 3KG",
    "PLU CODE": "2160",
    "UOM": "KG"
  },
  {
    "Article": "1355186",
    "Article Description": "CANZONA BLUE CHEESE WHEEL 3KG",
    "PLU CODE": "2161",
    "UOM": "KG"
  },
  {
    "Article": "1355187",
    "Article Description": "CHEESE INGREDIENT EMMENTAL 3.5KG",
    "PLU CODE": "2162",
    "UOM": "KG"
  },
  {
    "Article": "1355240",
    "Article Description": "WESTZANER EDAM BALL YOUNG CHEESE 2KG",
    "PLU CODE": "2177",
    "UOM": "KG"
  },
  {
    "Article": "1355241",
    "Article Description": "WESTZANER GOUDA WHEEL YOUNG CHEESE 5KG",
    "PLU CODE": "2178",
    "UOM": "KG"
  },
  {
    "Article": "1355242",
    "Article Description": "WESTZANER GOAT WHEEL YOUNG CHEESE 5KG",
    "PLU CODE": "2179",
    "UOM": "KG"
  },
  {
    "Article": "1355243",
    "Article Description": "FF CAVE AGED GOAT CHEESE BLOCK 1.1KG",
    "PLU CODE": "2180",
    "UOM": "KG"
  },
  {
    "Article": "1355249",
    "Article Description": "HIMALAYAN FRENCH TOMME CHEESE",
    "PLU CODE": "2184",
    "UOM": "KG"
  },
  {
    "Article": "1355261",
    "Article Description": "HIMALAYAN YAK GUMDEL CHEESE 1.2KG",
    "PLU CODE": "2185",
    "UOM": "KG"
  },
  {
    "Article": "1355262",
    "Article Description": "HIMLAYAN RACLETTE CHEESE 1.2KG",
    "PLU CODE": "2186",
    "UOM": "KG"
  },
  {
    "Article": "1355281",
    "Article Description": "GRANNDMA CHEESE CHEDDAR OAK SMOKED 1.1KG",
    "PLU CODE": "2195",
    "UOM": "KG"
  },
  {
    "Article": "1355282",
    "Article Description": "GRANDMA CHEESE CHEDDAR CRANBERRY 1.1KG",
    "PLU CODE": "2196",
    "UOM": "KG"
  },
  {
    "Article": "1355284",
    "Article Description": "VIRGILIO ITALIAN HARD CHEESE 4.5KG",
    "PLU CODE": "2198",
    "UOM": "KG"
  },
  {
    "Article": "1355285",
    "Article Description": "VIRGILIO ITALIAN HARD CHEESE VEG 4.5KG",
    "PLU CODE": "2199",
    "UOM": "KG"
  },
  {
    "Article": "1355286",
    "Article Description": "AGRIFORM ITALIAN HARD CHEESE BLOCK 4.5KG",
    "PLU CODE": "2200",
    "UOM": "KG"
  },
  {
    "Article": "1355287",
    "Article Description": "FLECHARD CREAM CHEESE 2KG",
    "PLU CODE": "2201",
    "UOM": "KG"
  },
  {
    "Article": "1355332",
    "Article Description": "EURIAL GOAT CHEESE PLAIN 1KG",
    "PLU CODE": "2207",
    "UOM": "KG"
  },
  {
    "Article": "1355334",
    "Article Description": "EURIAL GOAT CHEESE ASH 1KG",
    "PLU CODE": "2208",
    "UOM": "KG"
  },
  {
    "Article": "1355336",
    "Article Description": "EURIAL GOAT CHEESE GARLIC N HERBS 1KG",
    "PLU CODE": "2209",
    "UOM": "KG"
  },
  {
    "Article": "1355338",
    "Article Description": "EURIAL GOAT CHEESE WITH HONEY 1KG",
    "PLU CODE": "2210",
    "UOM": "KG"
  },
  {
    "Article": "1355352",
    "Article Description": "EURIAL SOFT GOAT CHEESE BRIE 1KG",
    "PLU CODE": "2217",
    "UOM": "KG"
  },
  {
    "Article": "1355361",
    "Article Description": "WESTZANER SMOKED CHEESE BLACK PEPPER 3KG",
    "PLU CODE": "2222",
    "UOM": "KG"
  },
  {
    "Article": "1355362",
    "Article Description": "WESTZANER SMOKED CHEESE GARDEN HERBS 3KG",
    "PLU CODE": "2223",
    "UOM": "KG"
  },
  {
    "Article": "1355398",
    "Article Description": "PRASUMA CHICKEN FRANKS 1KG",
    "PLU CODE": "2229",
    "UOM": "KG"
  },
  {
    "Article": "1355401",
    "Article Description": "PRASUMA CHICKEN SALAMI KG",
    "PLU CODE": "2232",
    "UOM": "KG"
  },
  {
    "Article": "1355402",
    "Article Description": "PRASUMA CHICKEN SALAMI SPICY KG",
    "PLU CODE": "2233",
    "UOM": "KG"
  },
  {
    "Article": "1355403",
    "Article Description": "PRASUMA CHICKEN CHILLI SALAMI KG",
    "PLU CODE": "2234",
    "UOM": "KG"
  },
  {
    "Article": "1355404",
    "Article Description": "PRASUMA CHICKEN HERB SALAMI KG",
    "PLU CODE": "2235",
    "UOM": "KG"
  },
  {
    "Article": "1355405",
    "Article Description": "PRASUMA SMOKED CHICKEN SALAMI KG",
    "PLU CODE": "2236",
    "UOM": "KG"
  },
  {
    "Article": "1355406",
    "Article Description": "PRASUMA CHICKEN HAM KG",
    "PLU CODE": "2237",
    "UOM": "KG"
  },
  {
    "Article": "1355407",
    "Article Description": "PRASUMA CHICKEN OLIVE LYONER KG",
    "PLU CODE": "2238",
    "UOM": "KG"
  },
  {
    "Article": "1355408",
    "Article Description": "PRASUMA CHICKEN PAPRICA LYONER KG",
    "PLU CODE": "2239",
    "UOM": "KG"
  },
  {
    "Article": "1355409",
    "Article Description": "PRASUMA CHICKEN PEPPER LYONER KG",
    "PLU CODE": "2240",
    "UOM": "KG"
  },
  {
    "Article": "1355410",
    "Article Description": "PRASUMA CHICKEN LYONER PLAIN KG",
    "PLU CODE": "2241",
    "UOM": "KG"
  },
  {
    "Article": "1355411",
    "Article Description": "PRASUMA PORK SALAMI KG",
    "PLU CODE": "2242",
    "UOM": "KG"
  },
  {
    "Article": "1355415",
    "Article Description": "PRASUMA PRIME HAM PORK KG",
    "PLU CODE": "2246",
    "UOM": "KG"
  },
  {
    "Article": "1355416",
    "Article Description": "PRASUMA SMOKED HAM PORK KG",
    "PLU CODE": "2247",
    "UOM": "KG"
  },
  {
    "Article": "1355420",
    "Article Description": "ZORABIAN CHICKEN WHOLE WITH SKIN 1.2KG",
    "PLU CODE": "2248",
    "UOM": "KG"
  },
  {
    "Article": "1355477",
    "Article Description": "PRASUMA CHICKEN SEEKH KABAB KG",
    "PLU CODE": "2252",
    "UOM": "KG"
  },
  {
    "Article": "1355501",
    "Article Description": "PRASUMA MUTTON SHAMMI KABAB FRIED",
    "PLU CODE": "2258",
    "UOM": "KG"
  },
  {
    "Article": "1355505",
    "Article Description": "ALF FARM TURKEY SMOKED HAM 2 KG",
    "PLU CODE": "2262",
    "UOM": "KG"
  },
  {
    "Article": "1355506",
    "Article Description": "ALF FARM TURKEY HAM WITH PEPPERS 1.8 KG",
    "PLU CODE": "2263",
    "UOM": "KG"
  },
  {
    "Article": "1355507",
    "Article Description": "ALF FARM PORK SALAMI WITH PEPPERON 1.8KG",
    "PLU CODE": "2264",
    "UOM": "KG"
  },
  {
    "Article": "1355509",
    "Article Description": "ALF FARM CHICKEN COPATA 1.8 KG",
    "PLU CODE": "2266",
    "UOM": "KG"
  },
  {
    "Article": "1355510",
    "Article Description": "ALF FARM CHICKEN CHEESE SALAMI 1.8 KG",
    "PLU CODE": "2267",
    "UOM": "KG"
  },
  {
    "Article": "1355511",
    "Article Description": "ALF FARM CHICKEN PEPPERY LOAF 1.8 KG",
    "PLU CODE": "2268",
    "UOM": "KG"
  },
  {
    "Article": "1355519",
    "Article Description": "ALF FARMS CHICKEN ACHARI SEEKH KABAB KG",
    "PLU CODE": "2269",
    "UOM": "KG"
  },
  {
    "Article": "1355520",
    "Article Description": "ALF FARMS CHICKEN PAHADI SEEKH KABAB KG",
    "PLU CODE": "2270",
    "UOM": "KG"
  },
  {
    "Article": "1355521",
    "Article Description": "ALF FARMS CHICKEN GALAWAT SEEKH KABABKG",
    "PLU CODE": "2271",
    "UOM": "KG"
  },
  {
    "Article": "1355522",
    "Article Description": "ALF FARMS CHICKEN NAWABI SEEKH KABAB KG",
    "PLU CODE": "2272",
    "UOM": "KG"
  },
  {
    "Article": "1355523",
    "Article Description": "ALF FARMS CHKN MALAICHESE SEEKH KABABKG",
    "PLU CODE": "2273",
    "UOM": "KG"
  },
  {
    "Article": "1355536",
    "Article Description": "ALF FARM CHICKEN CHILLY SALAMI KG",
    "PLU CODE": "2281",
    "UOM": "KG"
  },
  {
    "Article": "1355537",
    "Article Description": "ALF FARM CHICKEN LEMON PEPPER SALAMI KG",
    "PLU CODE": "2282",
    "UOM": "KG"
  },
  {
    "Article": "1355579",
    "Article Description": "ALF FARM MARINATED PORK CHOPS 1 KG",
    "PLU CODE": "2284",
    "UOM": "KG"
  },
  {
    "Article": "1355632",
    "Article Description": "PRASUMA PORK HONEY GLAZED HAM BLOCK KG",
    "PLU CODE": "2286",
    "UOM": "KG"
  },
  {
    "Article": "1355633",
    "Article Description": "PRASUMA CLASSIC FRENCH HAM ROLL KG",
    "PLU CODE": "2287",
    "UOM": "KG"
  },
  {
    "Article": "1355635",
    "Article Description": "PRASUMA CHICKEN PEPPERONI ROLL KG",
    "PLU CODE": "2289",
    "UOM": "KG"
  },
  {
    "Article": "1355636",
    "Article Description": "PRASUMA SMOKED TURKEY HAM ROLL KG",
    "PLU CODE": "2290",
    "UOM": "KG"
  },
  {
    "Article": "1355637",
    "Article Description": "PRASUMA CHICKEN CHILI HAM LYONER ROLL KG",
    "PLU CODE": "2291",
    "UOM": "KG"
  },
  {
    "Article": "1355638",
    "Article Description": "PRASUMA BELL PEPPER SEEKH KABAB KG",
    "PLU CODE": "2292",
    "UOM": "KG"
  },
  {
    "Article": "1355693",
    "Article Description": "CASAPONSA SALAMI TUNNEL CHEESE F HERB KG",
    "PLU CODE": "2297",
    "UOM": "KG"
  },
  {
    "Article": "1355695",
    "Article Description": "CASAPONSA SALAMI CHEESE COATED SLICED EA",
    "PLU CODE": "2299",
    "UOM": "PC"
  },
  {
    "Article": "1356072",
    "Article Description": "CAPELLA CHICKEN CHILLI KILO 3KG",
    "PLU CODE": "2306",
    "UOM": "KG"
  },
  {
    "Article": "1356074",
    "Article Description": "CAPELLA CHICKEN HAM COLD CUT KILO 3KG",
    "PLU CODE": "2308",
    "UOM": "KG"
  },
  {
    "Article": "1356075",
    "Article Description": "BAUWENS BBQ SHOULDER HAM 4 KILO",
    "PLU CODE": "2309",
    "UOM": "KG"
  },
  {
    "Article": "1356076",
    "Article Description": "BAUWENS FAT FREE HAM 4 KILO",
    "PLU CODE": "2310",
    "UOM": "KG"
  },
  {
    "Article": "1356077",
    "Article Description": "BAUWENS D SHAPE COOKED HAM 6 KI",
    "PLU CODE": "2311",
    "UOM": "KG"
  },
  {
    "Article": "1356078",
    "Article Description": "BAUWENS US STYLE RINDLESS BACON 3.5KG",
    "PLU CODE": "2312",
    "UOM": "KG"
  },
  {
    "Article": "1356083",
    "Article Description": "BAUWENS TRADTIONAL HONEY ROASTED HAM 5KG",
    "PLU CODE": "2313",
    "UOM": "KG"
  },
  {
    "Article": "1356088",
    "Article Description": "BERETTA-PARMA HAM FULL DEBONED KG",
    "PLU CODE": "2315",
    "UOM": "KG"
  },
  {
    "Article": "1356089",
    "Article Description": "BERETTA-PROSCIUTTO CRUDO FULLÂ KG",
    "PLU CODE": "2316",
    "UOM": "KG"
  },
  {
    "Article": "1356090",
    "Article Description": "DAUTORE PEPERONI SPICY SALAMI NAPLI 500G",
    "PLU CODE": "2317",
    "UOM": "KG"
  },
  {
    "Article": "1356091",
    "Article Description": "BERETTA SALAMI MILANO 1.5KG",
    "PLU CODE": "2318",
    "UOM": "KG"
  },
  {
    "Article": "1356092",
    "Article Description": "DAUTORE SALAMI NAPOLI 1.5KG",
    "PLU CODE": "2319",
    "UOM": "KG"
  },
  {
    "Article": "1356115",
    "Article Description": "BAUWENS BBQ PREMIUM SMOKED HAM 5.5KG",
    "PLU CODE": "2321",
    "UOM": "KG"
  },
  {
    "Article": "1356132",
    "Article Description": "SANT DALMAI COOKD WLBACON RINDLESS 4KG",
    "PLU CODE": "2322",
    "UOM": "KG"
  },
  {
    "Article": "1356133",
    "Article Description": "SANT DALMAI COOKED HAM EXTRA SMOKED5.2KG",
    "PLU CODE": "2323",
    "UOM": "KG"
  },
  {
    "Article": "1356134",
    "Article Description": "SANT DALMAI HONEY ROAST HAM 5.2KG",
    "PLU CODE": "2324",
    "UOM": "KG"
  },
  {
    "Article": "1356154",
    "Article Description": "CAPELLA SMOKED TURKEY HAM 2.5KG",
    "PLU CODE": "2329",
    "UOM": "KG"
  },
  {
    "Article": "1356160",
    "Article Description": "GREISINGER SAUNATURKEY BREASTROLLLEAN3KG",
    "PLU CODE": "2331",
    "UOM": "KG"
  },
  {
    "Article": "1356161",
    "Article Description": "BAUWENS SMOKED BREAKFAST HAM 3KG",
    "PLU CODE": "2332",
    "UOM": "KG"
  },
  {
    "Article": "1356214",
    "Article Description": "GREISINGER SAUNA HAM LEAN 2.6KG",
    "PLU CODE": "2341",
    "UOM": "KG"
  },
  {
    "Article": "1356294",
    "Article Description": "CAPELLA CHICKEN LEMON PEPPER KILO 3KG",
    "PLU CODE": "2357",
    "UOM": "KG"
  },
  {
    "Article": "1356298",
    "Article Description": "SANT DALMAI TURKEY MORTADELLA OLIVES 2KG",
    "PLU CODE": "2359",
    "UOM": "KG"
  },
  {
    "Article": "1356299",
    "Article Description": "SANT DALMAI SHOULDER SANDWICH HAM 3KG",
    "PLU CODE": "2360",
    "UOM": "KG"
  },
  {
    "Article": "1356315",
    "Article Description": "SANT DALMAI ARTI TURKEY BREAST SMOKD 6KG",
    "PLU CODE": "2361",
    "UOM": "KG"
  },
  {
    "Article": "1356316",
    "Article Description": "SANT DALMAI TURKEY BREAST WITH OLIVE 4KG",
    "PLU CODE": "2362",
    "UOM": "KG"
  },
  {
    "Article": "1356317",
    "Article Description": "SANT DALMAI RESERVA 1964 ROASTED HAM 6KG",
    "PLU CODE": "2363",
    "UOM": "KG"
  },
  {
    "Article": "1356318",
    "Article Description": "SANT DALMAI 1964 PORK MORATDELLA 4 KG",
    "PLU CODE": "2364",
    "UOM": "KG"
  },
  {
    "Article": "1356319",
    "Article Description": "SANT DALMAI CHICKEN BREAST 4 KG",
    "PLU CODE": "2365",
    "UOM": "KG"
  },
  {
    "Article": "1356320",
    "Article Description": "PIRENE BACON SLICED 3 KG",
    "PLU CODE": "2366",
    "UOM": "KG"
  },
  {
    "Article": "1356322",
    "Article Description": "Pirene Spanish Toast Ham3.8KG",
    "PLU CODE": "2368",
    "UOM": "KG"
  },
  {
    "Article": "1356323",
    "Article Description": "PIRENE SERRANO HAM RESERVA DEBONED 4.5KG",
    "PLU CODE": "2369",
    "UOM": "KG"
  },
  {
    "Article": "1356324",
    "Article Description": "Pirene Chorizo with chilly 1.5kg",
    "PLU CODE": "2370",
    "UOM": "KG"
  },
  {
    "Article": "1356325",
    "Article Description": "PIRENE HUNGARIAN SALAMI 2.5 KG",
    "PLU CODE": "2371",
    "UOM": "KG"
  },
  {
    "Article": "1356326",
    "Article Description": "PIRENE TRDITONL STRING CHORIZO CHILY700G",
    "PLU CODE": "2372",
    "UOM": "KG"
  },
  {
    "Article": "1356327",
    "Article Description": "FAVOLA FARMS-PIZZA PEPPERONI-SLICED KG",
    "PLU CODE": "2373",
    "UOM": "KG"
  },
  {
    "Article": "1357662",
    "Article Description": "SANT DALMAI ROASTED TURKEY BREAST 3KG",
    "PLU CODE": "2383",
    "UOM": "KG"
  },
  {
    "Article": "1357663",
    "Article Description": "SANT DALMAI TURKEY SANDWICH 3KG",
    "PLU CODE": "2384",
    "UOM": "KG"
  },
  {
    "Article": "1357682",
    "Article Description": "SANT DALMAI COOKD TURKEY BREAST PEPER3KG",
    "PLU CODE": "2386",
    "UOM": "KG"
  },
  {
    "Article": "1357683",
    "Article Description": "SANT DALMAI COOKD TURKEY BREASTFILT2.5KG",
    "PLU CODE": "2387",
    "UOM": "KG"
  },
  {
    "Article": "1357709",
    "Article Description": "CARDINAL CHEDDAR APPLEWOOD SMOKEY1.2KG",
    "PLU CODE": "2388",
    "UOM": "KG"
  },
  {
    "Article": "1357710",
    "Article Description": "CARDINAL CHEDDAR WITH CHILLIES 1.2KG",
    "PLU CODE": "2389",
    "UOM": "KG"
  },
  {
    "Article": "1357715",
    "Article Description": "COLLIERS CHEDDAR BLOCK WHITE 2.5KG",
    "PLU CODE": "2390",
    "UOM": "KG"
  },
  {
    "Article": "1357716",
    "Article Description": "COLLIERS CHEDDAR BLOCK YELLOW 2.5KG",
    "PLU CODE": "2391",
    "UOM": "KG"
  },
  {
    "Article": "1357718",
    "Article Description": "COLLIERS MATURED COLORED CHEDDAR 2.5KG",
    "PLU CODE": "2392",
    "UOM": "KG"
  },
  {
    "Article": "1357719",
    "Article Description": "COLLIERS PEPPER JACK 2.5KG",
    "PLU CODE": "2393",
    "UOM": "KG"
  },
  {
    "Article": "1357720",
    "Article Description": "COLLIERS RED LEICESTER 2.5KG",
    "PLU CODE": "2394",
    "UOM": "KG"
  },
  {
    "Article": "1357728",
    "Article Description": "DELAKTIS PLAIN FETA 500G",
    "PLU CODE": "2398",
    "UOM": "PC"
  },
  {
    "Article": "1357735",
    "Article Description": "FF CAVE AGED WEST CNTRY CHDAR BLOCK 3.3K",
    "PLU CODE": "2401",
    "UOM": "KG"
  },
  {
    "Article": "1357739",
    "Article Description": "FF CHEDDAR W FINEST BLACK TRUFFLES1.20KG",
    "PLU CODE": "2402",
    "UOM": "KG"
  },
  {
    "Article": "1357744",
    "Article Description": "FF COASTAL M CHEDDAR W CHILI N LIME1.20K",
    "PLU CODE": "2404",
    "UOM": "KG"
  },
  {
    "Article": "1357745",
    "Article Description": "FF COASTAL MATURED WHITE CHEDDAR 1KG",
    "PLU CODE": "2405",
    "UOM": "KG"
  },
  {
    "Article": "1357749",
    "Article Description": "FF DOUBLE GLOUCESTER SPRING ONION 1.2KG",
    "PLU CODE": "2407",
    "UOM": "KG"
  },
  {
    "Article": "1357752",
    "Article Description": "FF FARMERS FIVE WHEEL 2.4KG",
    "PLU CODE": "2409",
    "UOM": "KG"
  },
  {
    "Article": "1357756",
    "Article Description": "FF HUNTSMAN DOUBLE GLOUCESTER 4KG",
    "PLU CODE": "2410",
    "UOM": "KG"
  },
  {
    "Article": "1357760",
    "Article Description": "FF MATURED WHITE CHEDDAR BLOCKS 5KG",
    "PLU CODE": "2411",
    "UOM": "KG"
  },
  {
    "Article": "1357762",
    "Article Description": "FF MILD COLOURED CHEDDAR BLOCKS 5KG",
    "PLU CODE": "2412",
    "UOM": "KG"
  },
  {
    "Article": "1357767",
    "Article Description": "FF SAGE DERBY BLOCK 1.2KG",
    "PLU CODE": "2413",
    "UOM": "KG"
  },
  {
    "Article": "1357769",
    "Article Description": "FF WENSLEYDALE WITH CRANBERRIES 1.2KG",
    "PLU CODE": "2414",
    "UOM": "KG"
  },
  {
    "Article": "1357774",
    "Article Description": "FORVAL TGT MAHON SEMI AGED 3.12KG",
    "PLU CODE": "2416",
    "UOM": "KG"
  },
  {
    "Article": "1357775",
    "Article Description": "FORVAL TGT MANCHEGO 3 KGS",
    "PLU CODE": "2417",
    "UOM": "KG"
  },
  {
    "Article": "1357777",
    "Article Description": "FRIESLAND RED HOT EDAM 1.9KG",
    "PLU CODE": "2418",
    "UOM": "KG"
  },
  {
    "Article": "1357778",
    "Article Description": "NB PANEER KG",
    "PLU CODE": "2419",
    "UOM": "KG"
  },
  {
    "Article": "1357781",
    "Article Description": "GRAND OR DUTCH ORIGINAL EDAM BALL 2 KG",
    "PLU CODE": "2420",
    "UOM": "KG"
  },
  {
    "Article": "1357782",
    "Article Description": "LANDANA EMMENTHAL 3KG",
    "PLU CODE": "2421",
    "UOM": "KG"
  },
  {
    "Article": "1357783",
    "Article Description": "LANDANA EDAM BALL 1.9KG",
    "PLU CODE": "2422",
    "UOM": "KG"
  },
  {
    "Article": "1357795",
    "Article Description": "HOLLAND KROON EDAM 1.9KG",
    "PLU CODE": "2423",
    "UOM": "KG"
  },
  {
    "Article": "1357796",
    "Article Description": "HOLLAND KROON GOUDA MILD PREMDUTCH 4.5KG",
    "PLU CODE": "2424",
    "UOM": "KG"
  },
  {
    "Article": "1357810",
    "Article Description": "LANDANA GOUDA CHILLI SAMBAL 4.5KG",
    "PLU CODE": "2427",
    "UOM": "KG"
  },
  {
    "Article": "1357811",
    "Article Description": "LANDANA GOUDA WITH HERBS 4.5KG",
    "PLU CODE": "2428",
    "UOM": "KG"
  },
  {
    "Article": "1357812",
    "Article Description": "LANDANA GOUDA WITH OLIVES N TOMATO 4.5KG",
    "PLU CODE": "2429",
    "UOM": "KG"
  },
  {
    "Article": "1357813",
    "Article Description": "LANDANA GOUDA WITH WHOLE MUSTARD 4.5KG",
    "PLU CODE": "2430",
    "UOM": "KG"
  },
  {
    "Article": "1357814",
    "Article Description": "LANDANA GOUDA WITH WILD GARLIC 4.5KG",
    "PLU CODE": "2431",
    "UOM": "KG"
  },
  {
    "Article": "1357815",
    "Article Description": "LANDANA PREMIUM DUTCH GOUDA 4.5KG",
    "PLU CODE": "2432",
    "UOM": "KG"
  },
  {
    "Article": "1357825",
    "Article Description": "LE SUPERBE GRUYERE2.5KG",
    "PLU CODE": "2436",
    "UOM": "KG"
  },
  {
    "Article": "1357855",
    "Article Description": "SINGLETONS BLUE STILTON 4KG",
    "PLU CODE": "2444",
    "UOM": "KG"
  },
  {
    "Article": "1357856",
    "Article Description": "SINGLETONS CHEDDAR FARMHOUS CHEDAR 4.5KG",
    "PLU CODE": "2445",
    "UOM": "KG"
  },
  {
    "Article": "1357857",
    "Article Description": "SINGLETONS CHEDDAR JALAPENO BLOCKS 1.1KG",
    "PLU CODE": "2446",
    "UOM": "KG"
  },
  {
    "Article": "1357861",
    "Article Description": "SINGLETONS CHEDDAR RED MILD 4.5KG",
    "PLU CODE": "2447",
    "UOM": "KG"
  },
  {
    "Article": "1357862",
    "Article Description": "SINGLETONS CHEDDAR WHITE MILD 4.5KG",
    "PLU CODE": "2448",
    "UOM": "KG"
  },
  {
    "Article": "1357863",
    "Article Description": "SINGLETONS DOUBLE GLOUCESTER BLOCK 2.5KG",
    "PLU CODE": "2449",
    "UOM": "KG"
  },
  {
    "Article": "1357864",
    "Article Description": "SINGLETONS MONTERREY JACK 4.5KG",
    "PLU CODE": "2450",
    "UOM": "KG"
  },
  {
    "Article": "1357877",
    "Article Description": "VIRGILIO GRANA PADANO 4.5KG",
    "PLU CODE": "2454",
    "UOM": "KG"
  },
  {
    "Article": "1357878",
    "Article Description": "VIRGILIO PROVOLONE DOLCE 5KG",
    "PLU CODE": "2455",
    "UOM": "KG"
  },
  {
    "Article": "1357882",
    "Article Description": "WESTMINSTER MILD COLORED CHEDDAR 2.5KG",
    "PLU CODE": "2456",
    "UOM": "KG"
  },
  {
    "Article": "1357884",
    "Article Description": "WESTMINSTER MILD WHITE CHEDDAR 2.5KG",
    "PLU CODE": "2457",
    "UOM": "KG"
  },
  {
    "Article": "1357889",
    "Article Description": "WESTZANER GOUDA WHEEL BLK GRN PEPPER 5KG",
    "PLU CODE": "2458",
    "UOM": "KG"
  },
  {
    "Article": "1357890",
    "Article Description": "WESTZANER GOUDA WHEEL NETTLE GARLIC 5KG",
    "PLU CODE": "2459",
    "UOM": "KG"
  },
  {
    "Article": "1357891",
    "Article Description": "WESTZANER GOUDA WHEEL OLIVE TOMATO 5KG",
    "PLU CODE": "2460",
    "UOM": "KG"
  },
  {
    "Article": "1357892",
    "Article Description": "WESTZANER GOUDA WHEEL WITH TRUFFLE 5KG",
    "PLU CODE": "2461",
    "UOM": "KG"
  },
  {
    "Article": "1357893",
    "Article Description": "WESTZANER GOUDA WHEEL WITH WASABI 5KG",
    "PLU CODE": "2462",
    "UOM": "KG"
  },
  {
    "Article": "1357896",
    "Article Description": "ZANETTI FONTAL 3KG",
    "PLU CODE": "2463",
    "UOM": "KG"
  },
  {
    "Article": "1357897",
    "Article Description": "ZANETTI GORGONZOLA 1.5 KILO",
    "PLU CODE": "2464",
    "UOM": "KG"
  },
  {
    "Article": "1357898",
    "Article Description": "ZANETTI GRAN SPICCO 4.5KG",
    "PLU CODE": "2465",
    "UOM": "KG"
  },
  {
    "Article": "1357899",
    "Article Description": "ZANETTI GRANA PADANO 4.5 KILO",
    "PLU CODE": "2466",
    "UOM": "KG"
  },
  {
    "Article": "1357900",
    "Article Description": "LE SUPERBE SWISS GRUYERE TRINGLE 2.5KG",
    "PLU CODE": "2467",
    "UOM": "KG"
  },
  {
    "Article": "1357902",
    "Article Description": "ZANETTI PARMIGIANO REGGIANO 4.55 KILO",
    "PLU CODE": "2469",
    "UOM": "KG"
  },
  {
    "Article": "1357903",
    "Article Description": "ZANETTI PECORINO ROMANO 3KG",
    "PLU CODE": "2470",
    "UOM": "KG"
  },
  {
    "Article": "1357904",
    "Article Description": "ZANETTI PROVOLONE DOLCE MILD 5 KGS",
    "PLU CODE": "2471",
    "UOM": "KG"
  },
  {
    "Article": "1357906",
    "Article Description": "FF CHEDDAR WITH CARAMELISED ONION 1.20KG",
    "PLU CODE": "2473",
    "UOM": "KG"
  },
  {
    "Article": "1357907",
    "Article Description": "FF FARMHOUSE CHEDDAR BLOCKS 1.10 KG",
    "PLU CODE": "2474",
    "UOM": "KG"
  },
  {
    "Article": "1357924",
    "Article Description": "GRANDMA BLACK PEPPER CHEDDAR BLOCK 1.1KG",
    "PLU CODE": "2476",
    "UOM": "KG"
  },
  {
    "Article": "1357925",
    "Article Description": "GRANDMA CHEDDAR WITH SRIRACHA 1.1KG",
    "PLU CODE": "2477",
    "UOM": "KG"
  },
  {
    "Article": "1357926",
    "Article Description": "GRANDMA CHEDDAR WENSL MAN N GINGR 1.1KG",
    "PLU CODE": "2478",
    "UOM": "KG"
  },
  {
    "Article": "1357929",
    "Article Description": "VIRGILIO RETINATO GRANA 4.5KG",
    "PLU CODE": "2481",
    "UOM": "KG"
  },
  {
    "Article": "1357930",
    "Article Description": "AGRIFORM GRANA PADANO BLOCK 4.5KG",
    "PLU CODE": "2482",
    "UOM": "KG"
  },
  {
    "Article": "1357931",
    "Article Description": "AGRIFORM PARMIGIANO REGGIANO BLOCK 4.5KG",
    "PLU CODE": "2483",
    "UOM": "KG"
  },
  {
    "Article": "1357932",
    "Article Description": "AGRIFORM RETINATO BLOCK 4.5KG",
    "PLU CODE": "2484",
    "UOM": "KG"
  },
  {
    "Article": "1357952",
    "Article Description": "EL PASTOR GOAT CHESE RINDLES FRESH 850G",
    "PLU CODE": "2490",
    "UOM": "KG"
  },
  {
    "Article": "1357961",
    "Article Description": "AMATRICE PECORINO W BLACK TRUFFLES 3KG",
    "PLU CODE": "2491",
    "UOM": "KG"
  },
  {
    "Article": "1357962",
    "Article Description": "AMATRICE PECORINO WITH SAFFRON 3KG",
    "PLU CODE": "2492",
    "UOM": "KG"
  },
  {
    "Article": "1357963",
    "Article Description": "AMATRICE PECORINO WITH PISTACHIO 3KG",
    "PLU CODE": "2493",
    "UOM": "KG"
  },
  {
    "Article": "1357964",
    "Article Description": "AMATRICE PECORINO WITH ALMOND 3KG",
    "PLU CODE": "2494",
    "UOM": "KG"
  },
  {
    "Article": "1357965",
    "Article Description": "AMATRICE PECORINO WITH PINE NUTS 3KG",
    "PLU CODE": "2495",
    "UOM": "KG"
  },
  {
    "Article": "1357966",
    "Article Description": "COLLIERS MONTEREY JACK 2.5KG",
    "PLU CODE": "2496",
    "UOM": "KG"
  },
  {
    "Article": "1357967",
    "Article Description": "CASTELLO DANISH BLUE 1.5 KG",
    "PLU CODE": "2497",
    "UOM": "KG"
  },
  {
    "Article": "1358015",
    "Article Description": "LANDANAÂ SMOKED CHEESE NATURAL 3KG",
    "PLU CODE": "2503",
    "UOM": "KG"
  },
  {
    "Article": "1358016",
    "Article Description": "LANDANAÂ SMOKED CHEESE FINE HERBS 3KG",
    "PLU CODE": "2504",
    "UOM": "KG"
  },
  {
    "Article": "1358017",
    "Article Description": "LANDANAÂ SMOKED CHEESE BLCK PEPPER 3KG",
    "PLU CODE": "2505",
    "UOM": "KG"
  },
  {
    "Article": "1358022",
    "Article Description": "COLLIERS CHEDDAR WELSH 2.5 KG",
    "PLU CODE": "2506",
    "UOM": "KG"
  },
  {
    "Article": "1358025",
    "Article Description": "LANDANA GOUDA WITH BLACK PEPPER 4.5 KG",
    "PLU CODE": "2509",
    "UOM": "KG"
  },
  {
    "Article": "1358945",
    "Article Description": "PURE SOUTH LAMB HIND SHANKS KG",
    "PLU CODE": "2518",
    "UOM": "KG"
  },
  {
    "Article": "1358946",
    "Article Description": "PURE SOUTH LAMB LEG BONE OUT KG",
    "PLU CODE": "2519",
    "UOM": "KG"
  },
  {
    "Article": "1358947",
    "Article Description": "PURE SOUTH LAMB LEG BONE IN KG",
    "PLU CODE": "2520",
    "UOM": "KG"
  },
  {
    "Article": "1358948",
    "Article Description": "PURE SOUTH LAMB LOIN KG",
    "PLU CODE": "2521",
    "UOM": "KG"
  },
  {
    "Article": "1358949",
    "Article Description": "PURE SOUTH LAMB TENDER LOIN KG",
    "PLU CODE": "2522",
    "UOM": "KG"
  },
  {
    "Article": "1358950",
    "Article Description": "PURE SOUTH LAMB RUMPS KG",
    "PLU CODE": "2523",
    "UOM": "KG"
  },
  {
    "Article": "1358951",
    "Article Description": "PURE SOUTH LAMB RACK CAP OFF KG",
    "PLU CODE": "2524",
    "UOM": "KG"
  },
  {
    "Article": "1358952",
    "Article Description": "PURE SOUTH LAMB RACK CAP ON KG",
    "PLU CODE": "2525",
    "UOM": "KG"
  },
  {
    "Article": "1359438",
    "Article Description": "BUTTERBALL WHOLE TURKEY",
    "PLU CODE": "2526",
    "UOM": "KG"
  },
  {
    "Article": "1359575",
    "Article Description": "CASANOVA SPANISH TOAST HAM 4 KILO",
    "PLU CODE": "2528",
    "UOM": "KG"
  },
  {
    "Article": "1359609",
    "Article Description": "SANT DALMAI TURKEY HAM 5KG",
    "PLU CODE": "2532",
    "UOM": "KG"
  },
  {
    "Article": "1359878",
    "Article Description": "DUFINA BLACK FOREST HAM 6 KG",
    "PLU CODE": "2538",
    "UOM": "KG"
  },
  {
    "Article": "1360096",
    "Article Description": "CASAPONSA SALAMI CHAPATA GREEN PEPPER KG",
    "PLU CODE": "2545",
    "UOM": "KG"
  },
  {
    "Article": "1360097",
    "Article Description": "CASAPONSA DUO CHORIZO SALAMI PAPRIKA KG",
    "PLU CODE": "2546",
    "UOM": "KG"
  },
  {
    "Article": "1360102",
    "Article Description": "CASAPONSA DUO SALAMI CHORIZO PAPRIKA EA",
    "PLU CODE": "2550",
    "UOM": "PC"
  },
  {
    "Article": "1360103",
    "Article Description": "CASAPONSA PANCETTA SLICED EA",
    "PLU CODE": "2551",
    "UOM": "PC"
  },
  {
    "Article": "1360527",
    "Article Description": "NATURES CHICKEN PUDINA TIKKA KG",
    "PLU CODE": "2559",
    "UOM": "KG"
  },
  {
    "Article": "1360569",
    "Article Description": "CASTELLO DANISH BLUE WHEEL 3.5 KG",
    "PLU CODE": "2566",
    "UOM": "KG"
  },
  {
    "Article": "1360570",
    "Article Description": "COLLIERS MONTEREY JACK 5KG",
    "PLU CODE": "2567",
    "UOM": "KG"
  },
  {
    "Article": "1360571",
    "Article Description": "FF BLUE STILTON RINGS 1.5KG",
    "PLU CODE": "2568",
    "UOM": "KG"
  },
  {
    "Article": "1360573",
    "Article Description": "FF DORSET RED SMOKED CHEDDAR 1.2KG",
    "PLU CODE": "2570",
    "UOM": "KG"
  },
  {
    "Article": "1360574",
    "Article Description": "FF MILD WHITE CHEDDAR BLOCKS 5KG",
    "PLU CODE": "2571",
    "UOM": "KG"
  },
  {
    "Article": "1360575",
    "Article Description": "FF OAKWOOD SMOKED CHEDDAR 1.2KG",
    "PLU CODE": "2572",
    "UOM": "KG"
  },
  {
    "Article": "1360579",
    "Article Description": "RRO PANEER WITH BLACK PEPPER 1KG",
    "PLU CODE": "2574",
    "UOM": "KG"
  },
  {
    "Article": "1360610",
    "Article Description": "RATTIRAM MALAI PANEER 1KG",
    "PLU CODE": "2582",
    "UOM": "KG"
  },
  {
    "Article": "1360617",
    "Article Description": "Landana Cheese with truffle 4.5KG",
    "PLU CODE": "2583",
    "UOM": "KG"
  },
  {
    "Article": "1360631",
    "Article Description": "JACQUIN GOAT CHEVE NATURAL LOG 1KG",
    "PLU CODE": "2584",
    "UOM": "KG"
  },
  {
    "Article": "1360632",
    "Article Description": "JACQUIN CHEVE GARLIC N HERBS LOG 1KG",
    "PLU CODE": "2585",
    "UOM": "KG"
  },
  {
    "Article": "1360894",
    "Article Description": "ELPOZO TURKEY HAM 3.5KG",
    "PLU CODE": "2612",
    "UOM": "KG"
  },
  {
    "Article": "1360895",
    "Article Description": "ELPOZO TURKEY MORTADELLA 3KG",
    "PLU CODE": "2613",
    "UOM": "KG"
  },
  {
    "Article": "1360936",
    "Article Description": "EL POZO IBERICO MORTADELLA 3.5KG",
    "PLU CODE": "2616",
    "UOM": "KG"
  },
  {
    "Article": "1360953",
    "Article Description": "FIRANGI FOODS TENDERLOIN KG",
    "PLU CODE": "2623",
    "UOM": "KG"
  },
  {
    "Article": "1361004",
    "Article Description": "S.TRENTINO GRILL HAM ROSTED ROSMARY KG",
    "PLU CODE": "2626",
    "UOM": "KG"
  },
  {
    "Article": "1361101",
    "Article Description": "MODERN COW MILK POUCH 1 LTR",
    "PLU CODE": "2628",
    "UOM": "PC"
  },
  {
    "Article": "1361315",
    "Article Description": "DODONI FETA 2KG",
    "PLU CODE": "2629",
    "UOM": "KG"
  },
  {
    "Article": "1361317",
    "Article Description": "MODERN MALAI PANEER 1 KG",
    "PLU CODE": "2630",
    "UOM": "KG"
  },
  {
    "Article": "1362682",
    "Article Description": "Alf Farm Pork Barbeque Leg Ham 2to 2.5Kg",
    "PLU CODE": "2690",
    "UOM": "KG"
  },
  {
    "Article": "1362683",
    "Article Description": "Alf Farm Pork Honey Leg Ham 2 to 2.5Kg",
    "PLU CODE": "2691",
    "UOM": "KG"
  },
  {
    "Article": "1362684",
    "Article Description": "Alf Farm Pork Smoked Leg Ham 1.5 to 2Kg",
    "PLU CODE": "2692",
    "UOM": "KG"
  },
  {
    "Article": "1363021",
    "Article Description": "Fresh Garlic Bread",
    "PLU CODE": "2730",
    "UOM": "PC"
  },
  {
    "Article": "1363035",
    "Article Description": "Fresh Dips",
    "PLU CODE": "2743",
    "UOM": "PC"
  },
  {
    "Article": "1363038",
    "Article Description": "Fresh Cut Fruits",
    "PLU CODE": "2745",
    "UOM": "PC"
  },
  {
    "Article": "1363712",
    "Article Description": "S Trentino Roast Pork with Herbs Rld 5Kg",
    "PLU CODE": "2790",
    "UOM": "KG"
  },
  {
    "Article": "1363714",
    "Article Description": "S Trentino Smoked Ham Cook Bonless P 5Kg",
    "PLU CODE": "2792",
    "UOM": "KG"
  },
  {
    "Article": "1363738",
    "Article Description": "S Trentino Coppa Pelata Cured Pork Loin",
    "PLU CODE": "2804",
    "UOM": "KG"
  },
  {
    "Article": "1364222",
    "Article Description": "WOOHOO FARM DIRECT FRESH MILK 1LT",
    "PLU CODE": "2856",
    "UOM": "PC"
  },
  {
    "Article": "1364225",
    "Article Description": "BLUE COTTON BAG 14 X 16",
    "PLU CODE": "2857",
    "UOM": "PC"
  },
  {
    "Article": "1364239",
    "Article Description": "APPLE RED DELICIOUS WASHINGTON",
    "PLU CODE": "2859",
    "UOM": "KG"
  },
  {
    "Article": "1364242",
    "Article Description": "APPLE ROYAL GALA ECONOMY",
    "PLU CODE": "2860",
    "UOM": "KG"
  },
  {
    "Article": "1364250",
    "Article Description": "TANGERINE",
    "PLU CODE": "2862",
    "UOM": "KG"
  },
  {
    "Article": "1364277",
    "Article Description": "APPLE FUJI",
    "PLU CODE": "2863",
    "UOM": "KG"
  },
  {
    "Article": "1364283",
    "Article Description": "BLUEBERRY IMP 1 PC PK NB",
    "PLU CODE": "2864",
    "UOM": "PC"
  },
  {
    "Article": "1364302",
    "Article Description": "GRAPE FRUIT IMPORTED",
    "PLU CODE": "2865",
    "UOM": "KG"
  },
  {
    "Article": "1364348",
    "Article Description": "PEAR RED IMPORTED",
    "PLU CODE": "2866",
    "UOM": "KG"
  },
  {
    "Article": "1364361",
    "Article Description": "APPLE PINK LADY",
    "PLU CODE": "2867",
    "UOM": "KG"
  },
  {
    "Article": "1364371",
    "Article Description": "PEAS SNOW IMPORTED",
    "PLU CODE": "2868",
    "UOM": "KG"
  },
  {
    "Article": "1364400",
    "Article Description": "TAMARIND SWEET IMP 250 G NB",
    "PLU CODE": "2870",
    "UOM": "PC"
  },
  {
    "Article": "1364498",
    "Article Description": "PASSION FRUIT IMPORTED",
    "PLU CODE": "2873",
    "UOM": "KG"
  },
  {
    "Article": "1364502",
    "Article Description": "MELON JAPAN",
    "PLU CODE": "2874",
    "UOM": "KG"
  },
  {
    "Article": "1364555",
    "Article Description": "APRICOT IMPORTED",
    "PLU CODE": "2877",
    "UOM": "KG"
  },
  {
    "Article": "1364557",
    "Article Description": "PEACH FLAT IMPORTED",
    "PLU CODE": "2878",
    "UOM": "KG"
  },
  {
    "Article": "1364735",
    "Article Description": "ALF FARM HONEY ROAST CHICKEN 2 TO 3 KGS",
    "PLU CODE": "2905",
    "UOM": "KG"
  },
  {
    "Article": "1364736",
    "Article Description": "Alf Farm Raw Turkey 5 to 7Kg",
    "PLU CODE": "2906",
    "UOM": "KG"
  },
  {
    "Article": "1364737",
    "Article Description": "ALF FARM ROAST N STUF CHICKEN 2 TO 3 KGS",
    "PLU CODE": "2907",
    "UOM": "KG"
  },
  {
    "Article": "1364738",
    "Article Description": "ALF FARM SMOKED N STUFF TURKEY 3.5 TO 4",
    "PLU CODE": "2908",
    "UOM": "KG"
  },
  {
    "Article": "1364921",
    "Article Description": "Alf Farm Raw Duck 2 to 3Kg",
    "PLU CODE": "2932",
    "UOM": "KG"
  },
  {
    "Article": "1364922",
    "Article Description": "Alf Farm Smkd Roasted Duck 1 to 2Kg",
    "PLU CODE": "2933",
    "UOM": "KG"
  },
  {
    "Article": "1364923",
    "Article Description": "Alf Farm Smkd or Roasted Turkey 2 to 3Kg",
    "PLU CODE": "2934",
    "UOM": "KG"
  },
  {
    "Article": "1365142",
    "Article Description": "WOOHOO DESI COW MILK 1L",
    "PLU CODE": "3056",
    "UOM": "PC"
  },
  {
    "Article": "1365146",
    "Article Description": "NATURES STRAWBERRY PUNNET",
    "PLU CODE": "3058",
    "UOM": "PC"
  },
  {
    "Article": "1365149",
    "Article Description": "POMEGRANATE VALUE PACK KG",
    "PLU CODE": "3060",
    "UOM": "KG"
  },
  {
    "Article": "1365150",
    "Article Description": "BANANA ELAICHI",
    "PLU CODE": "3061",
    "UOM": "KG"
  },
  {
    "Article": "1365153",
    "Article Description": "CARROT ENGLISH",
    "PLU CODE": "3063",
    "UOM": "KG"
  },
  {
    "Article": "1365155",
    "Article Description": "TOMATOES CHERRY FRESH HYDROPONIC",
    "PLU CODE": "3065",
    "UOM": "PC"
  },
  {
    "Article": "1365156",
    "Article Description": "GRAPES RED GLOBE IMPORTED",
    "PLU CODE": "3066",
    "UOM": "KG"
  },
  {
    "Article": "1365157",
    "Article Description": "CAULIFLOWER 1 PC PK NB",
    "PLU CODE": "3067",
    "UOM": "PC"
  },
  {
    "Article": "1368626",
    "Article Description": "CHILLI GR BHAVNAGARI",
    "PLU CODE": "3498",
    "UOM": "KG"
  },
  {
    "Article": "1365160",
    "Article Description": "CAPSICUM RED",
    "PLU CODE": "3070",
    "UOM": "KG"
  },
  {
    "Article": "1365163",
    "Article Description": "BANANA GOLDEN",
    "PLU CODE": "3073",
    "UOM": "KG"
  },
  {
    "Article": "1365166",
    "Article Description": "SWEETLIME",
    "PLU CODE": "3075",
    "UOM": "KG"
  },
  {
    "Article": "1365167",
    "Article Description": "CAPSICUM YELLOW",
    "PLU CODE": "3076",
    "UOM": "KG"
  },
  {
    "Article": "1365170",
    "Article Description": "GREEN PEAS",
    "PLU CODE": "3078",
    "UOM": "KG"
  },
  {
    "Article": "1365224",
    "Article Description": "CHILLY GREEN",
    "PLU CODE": "3119",
    "UOM": "KG"
  },
  {
    "Article": "1365174",
    "Article Description": "APPLE KINNAUR",
    "PLU CODE": "3081",
    "UOM": "KG"
  },
  {
    "Article": "1365175",
    "Article Description": "GINGER",
    "PLU CODE": "3082",
    "UOM": "KG"
  },
  {
    "Article": "1365178",
    "Article Description": "CAPSICUM GREEN",
    "PLU CODE": "3084",
    "UOM": "KG"
  },
  {
    "Article": "1365212",
    "Article Description": "COCONUT PC",
    "PLU CODE": "3109",
    "UOM": "PC"
  },
  {
    "Article": "1365180",
    "Article Description": "APPLE SHIMLA INDIAN",
    "PLU CODE": "3086",
    "UOM": "KG"
  },
  {
    "Article": "1365183",
    "Article Description": "ORANGE MANDARINS",
    "PLU CODE": "3088",
    "UOM": "KG"
  },
  {
    "Article": "1365187",
    "Article Description": "CUCUMBER WHITE",
    "PLU CODE": "3089",
    "UOM": "KG"
  },
  {
    "Article": "1365188",
    "Article Description": "SALAD READY TO EAT",
    "PLU CODE": "3090",
    "UOM": "PC"
  },
  {
    "Article": "1365189",
    "Article Description": "BRINJAL BHARTA",
    "PLU CODE": "3091",
    "UOM": "KG"
  },
  {
    "Article": "1365190",
    "Article Description": "CUCUMBER GREEN",
    "PLU CODE": "3092",
    "UOM": "KG"
  },
  {
    "Article": "1365195",
    "Article Description": "SPROUTS MOONG PKT",
    "PLU CODE": "3094",
    "UOM": "PC"
  },
  {
    "Article": "1365196",
    "Article Description": "LEMON ITALIAN",
    "PLU CODE": "3095",
    "UOM": "KG"
  },
  {
    "Article": "1384842",
    "Article Description": "CORIANDER DESI CLEANED BUNCH",
    "PLU CODE": "4007",
    "UOM": "PC"
  },
  {
    "Article": "1365266",
    "Article Description": "COW PEA CHAULI",
    "PLU CODE": "3145",
    "UOM": "KG"
  },
  {
    "Article": "1365200",
    "Article Description": "SPROUTS MIXED PKT",
    "PLU CODE": "3099",
    "UOM": "PC"
  },
  {
    "Article": "1365201",
    "Article Description": "SAPOTA",
    "PLU CODE": "3100",
    "UOM": "KG"
  },
  {
    "Article": "1365203",
    "Article Description": "STRAWBERRY BOX",
    "PLU CODE": "3101",
    "UOM": "PC"
  },
  {
    "Article": "1365204",
    "Article Description": "GRAPES GREEN IMPORTED",
    "PLU CODE": "3102",
    "UOM": "KG"
  },
  {
    "Article": "1365205",
    "Article Description": "PEAR GREEN INDIAN",
    "PLU CODE": "3103",
    "UOM": "KG"
  },
  {
    "Article": "1365206",
    "Article Description": "SALAD RTE WITH SPINCACH",
    "PLU CODE": "3104",
    "UOM": "PC"
  },
  {
    "Article": "1365209",
    "Article Description": "SALAD RTE WITH MICRO GREEN",
    "PLU CODE": "3107",
    "UOM": "PC"
  },
  {
    "Article": "1368638",
    "Article Description": "CUCUMBER ENGLISH",
    "PLU CODE": "3500",
    "UOM": "KG"
  },
  {
    "Article": "1365172",
    "Article Description": "FRENCH BEANS KASHMIRI",
    "PLU CODE": "3079",
    "UOM": "KG"
  },
  {
    "Article": "1365213",
    "Article Description": "PAK CHOI BABY",
    "PLU CODE": "3110",
    "UOM": "KG"
  },
  {
    "Article": "1365214",
    "Article Description": "ASPARAGUS GREEN JUMBO IMPORTED",
    "PLU CODE": "3111",
    "UOM": "KG"
  },
  {
    "Article": "1365216",
    "Article Description": "COCONUT GRATED",
    "PLU CODE": "3112",
    "UOM": "PC"
  },
  {
    "Article": "1365217",
    "Article Description": "SPROUTS MATKI PKT",
    "PLU CODE": "3113",
    "UOM": "PC"
  },
  {
    "Article": "1365218",
    "Article Description": "BEET ROOT",
    "PLU CODE": "3114",
    "UOM": "KG"
  },
  {
    "Article": "1365219",
    "Article Description": "ASPARAGUS GREEN INDIAN",
    "PLU CODE": "3115",
    "UOM": "KG"
  },
  {
    "Article": "1365220",
    "Article Description": "GUAVAS THAI",
    "PLU CODE": "3116",
    "UOM": "KG"
  },
  {
    "Article": "1365222",
    "Article Description": "SALAD SWEET RTE",
    "PLU CODE": "3117",
    "UOM": "PC"
  },
  {
    "Article": "1365255",
    "Article Description": "GOURD BITTER",
    "PLU CODE": "3138",
    "UOM": "KG"
  },
  {
    "Article": "1365226",
    "Article Description": "POTATO SWEET",
    "PLU CODE": "3120",
    "UOM": "KG"
  },
  {
    "Article": "1365227",
    "Article Description": "GOURD RIDGE",
    "PLU CODE": "3121",
    "UOM": "KG"
  },
  {
    "Article": "1365228",
    "Article Description": "ASPARAGUS THAI",
    "PLU CODE": "3122",
    "UOM": "KG"
  },
  {
    "Article": "1365231",
    "Article Description": "CLUSTER BEANS",
    "PLU CODE": "3123",
    "UOM": "KG"
  },
  {
    "Article": "1365233",
    "Article Description": "GOURD POINTED",
    "PLU CODE": "3125",
    "UOM": "KG"
  },
  {
    "Article": "1365234",
    "Article Description": "MUSHROOM SHIMEJI BROWN",
    "PLU CODE": "3126",
    "UOM": "KG"
  },
  {
    "Article": "1365236",
    "Article Description": "DRUM STICK",
    "PLU CODE": "3128",
    "UOM": "KG"
  },
  {
    "Article": "1365287",
    "Article Description": "GOURD SPONGE",
    "PLU CODE": "3157",
    "UOM": "KG"
  },
  {
    "Article": "1365242",
    "Article Description": "WAL PAPADI",
    "PLU CODE": "3133",
    "UOM": "KG"
  },
  {
    "Article": "1365307",
    "Article Description": "GROUNDNUT",
    "PLU CODE": "3174",
    "UOM": "KG"
  },
  {
    "Article": "1365246",
    "Article Description": "BRINJAL KATERI",
    "PLU CODE": "3135",
    "UOM": "KG"
  },
  {
    "Article": "1000869",
    "Article Description": "KNOOL KHOL",
    "PLU CODE": "26",
    "UOM": "KG"
  },
  {
    "Article": "1365254",
    "Article Description": "CARROT INDIAN",
    "PLU CODE": "3137",
    "UOM": "KG"
  },
  {
    "Article": "1365179",
    "Article Description": "LADY FINGER",
    "PLU CODE": "3085",
    "UOM": "KG"
  },
  {
    "Article": "1365257",
    "Article Description": "SPROUTS CHANA BROWN 200G",
    "PLU CODE": "3139",
    "UOM": "PC"
  },
  {
    "Article": "1365258",
    "Article Description": "ALOE VERA",
    "PLU CODE": "3140",
    "UOM": "KG"
  },
  {
    "Article": "1365261",
    "Article Description": "MANGO RAW",
    "PLU CODE": "3141",
    "UOM": "KG"
  },
  {
    "Article": "1365262",
    "Article Description": "CELERY THICK STEM IMPORTED",
    "PLU CODE": "3142",
    "UOM": "KG"
  },
  {
    "Article": "1365264",
    "Article Description": "SALAD RTE MINI",
    "PLU CODE": "3143",
    "UOM": "PC"
  },
  {
    "Article": "1365265",
    "Article Description": "TOMATO CHERRY RED VINE IMPORTED",
    "PLU CODE": "3144",
    "UOM": "KG"
  },
  {
    "Article": "1365159",
    "Article Description": "LEMON",
    "PLU CODE": "3069",
    "UOM": "KG"
  },
  {
    "Article": "1365268",
    "Article Description": "SPROUTS CHANA GREEN 200G",
    "PLU CODE": "3146",
    "UOM": "PC"
  },
  {
    "Article": "1365271",
    "Article Description": "LETTUCE AURUGULA IMPORTED",
    "PLU CODE": "3148",
    "UOM": "KG"
  },
  {
    "Article": "1365272",
    "Article Description": "MUSHROOM ENOKI",
    "PLU CODE": "3149",
    "UOM": "KG"
  },
  {
    "Article": "1365274",
    "Article Description": "MUSHROOM KING OYSTER IMPORTED",
    "PLU CODE": "3150",
    "UOM": "KG"
  },
  {
    "Article": "1365275",
    "Article Description": "CURRY LEAF 50 G NB",
    "PLU CODE": "3151",
    "UOM": "PC"
  },
  {
    "Article": "1365281",
    "Article Description": "MUSHROOM SHI TAKE",
    "PLU CODE": "3152",
    "UOM": "KG"
  },
  {
    "Article": "1384840",
    "Article Description": "MINT DESI CLEANED BUNCH",
    "PLU CODE": "4005",
    "UOM": "PC"
  },
  {
    "Article": "1000819",
    "Article Description": "ONION WHITE KG",
    "PLU CODE": "11",
    "UOM": "KG"
  },
  {
    "Article": "1365289",
    "Article Description": "BUTTERNUT SQUASH IMPORTTED",
    "PLU CODE": "3158",
    "UOM": "KG"
  },
  {
    "Article": "1365291",
    "Article Description": "MUSHROOM PORTEBELO IMPORTED",
    "PLU CODE": "3160",
    "UOM": "KG"
  },
  {
    "Article": "1365292",
    "Article Description": "ASPARAGUS WHITE IMPORTED",
    "PLU CODE": "3161",
    "UOM": "KG"
  },
  {
    "Article": "1365293",
    "Article Description": "DILLL LEAVES 200 G NB",
    "PLU CODE": "3162",
    "UOM": "PC"
  },
  {
    "Article": "1365296",
    "Article Description": "SPINACH BABY IMPORTED",
    "PLU CODE": "3165",
    "UOM": "KG"
  },
  {
    "Article": "1365301",
    "Article Description": "GUAVA THAI INDIAN",
    "PLU CODE": "3168",
    "UOM": "KG"
  },
  {
    "Article": "1000820",
    "Article Description": "POTATO KG",
    "PLU CODE": "12",
    "UOM": "KG"
  },
  {
    "Article": "1365310",
    "Article Description": "CHILLY THAI RED LONG",
    "PLU CODE": "3176",
    "UOM": "KG"
  },
  {
    "Article": "1365313",
    "Article Description": "LONGAN",
    "PLU CODE": "3179",
    "UOM": "KG"
  },
  {
    "Article": "1365315",
    "Article Description": "SPROUTS HORSE GRAM 200G",
    "PLU CODE": "3181",
    "UOM": "PC"
  },
  {
    "Article": "1365322",
    "Article Description": "GOURD SNAKE",
    "PLU CODE": "3183",
    "UOM": "KG"
  },
  {
    "Article": "1365325",
    "Article Description": "STIR FRY CHINESE",
    "PLU CODE": "3184",
    "UOM": "PC"
  },
  {
    "Article": "1365328",
    "Article Description": "SPROUTS METHI 200G",
    "PLU CODE": "3186",
    "UOM": "PC"
  },
  {
    "Article": "1365330",
    "Article Description": "FRIED RICE NOODLES MIX",
    "PLU CODE": "3187",
    "UOM": "PC"
  },
  {
    "Article": "1365335",
    "Article Description": "LEMON JUMBO SEEDLESS",
    "PLU CODE": "3190",
    "UOM": "PC"
  },
  {
    "Article": "1365337",
    "Article Description": "THAI MIX PC",
    "PLU CODE": "3191",
    "UOM": "PC"
  },
  {
    "Article": "1365338",
    "Article Description": "SPROUTS GREEN PEAS 200G",
    "PLU CODE": "3192",
    "UOM": "PC"
  },
  {
    "Article": "1365340",
    "Article Description": "APPLE BER",
    "PLU CODE": "3193",
    "UOM": "KG"
  },
  {
    "Article": "1365348",
    "Article Description": "KUMQUOTES IMPORTED",
    "PLU CODE": "3196",
    "UOM": "KG"
  },
  {
    "Article": "1365362",
    "Article Description": "ORANGE BLOOD",
    "PLU CODE": "3200",
    "UOM": "KG"
  },
  {
    "Article": "1365367",
    "Article Description": "CRANE BERRY",
    "PLU CODE": "3204",
    "UOM": "KG"
  },
  {
    "Article": "1365381",
    "Article Description": "APPLE WOOD",
    "PLU CODE": "3213",
    "UOM": "KG"
  },
  {
    "Article": "1365383",
    "Article Description": "COCONUT TENDER 1",
    "PLU CODE": "3214",
    "UOM": "PC"
  },
  {
    "Article": "1365390",
    "Article Description": "TOMATO VINE RED BIG IMPORTED",
    "PLU CODE": "3217",
    "UOM": "KG"
  },
  {
    "Article": "1365393",
    "Article Description": "HANUMAN PHAL",
    "PLU CODE": "3218",
    "UOM": "KG"
  },
  {
    "Article": "1365395",
    "Article Description": "ARTICHOK IMPORTED",
    "PLU CODE": "3219",
    "UOM": "KG"
  },
  {
    "Article": "1365404",
    "Article Description": "EDAMAME FRESH PC",
    "PLU CODE": "3225",
    "UOM": "PC"
  },
  {
    "Article": "1365405",
    "Article Description": "GINGER CHOPPED",
    "PLU CODE": "3226",
    "UOM": "PC"
  },
  {
    "Article": "1365416",
    "Article Description": "MANGOSTEEN THAI",
    "PLU CODE": "3229",
    "UOM": "KG"
  },
  {
    "Article": "1365423",
    "Article Description": "MANGO LALBAG SINDHURA",
    "PLU CODE": "3231",
    "UOM": "KG"
  },
  {
    "Article": "1365425",
    "Article Description": "MANGO TOTAPURI",
    "PLU CODE": "3232",
    "UOM": "KG"
  },
  {
    "Article": "1365436",
    "Article Description": "RAM BHUTAN",
    "PLU CODE": "3234",
    "UOM": "KG"
  },
  {
    "Article": "1365538",
    "Article Description": "POMEGRANATE ARILS PICK ME",
    "PLU CODE": "3315",
    "UOM": "PC"
  },
  {
    "Article": "1365541",
    "Article Description": "MICROGREENS RADISH 50G",
    "PLU CODE": "3317",
    "UOM": "PC"
  },
  {
    "Article": "1365542",
    "Article Description": "MICROGREENS SUNFLOWER 50G",
    "PLU CODE": "3318",
    "UOM": "PC"
  },
  {
    "Article": "1365544",
    "Article Description": "MICROGREENS ASSORTED MIX 50G",
    "PLU CODE": "3320",
    "UOM": "PC"
  },
  {
    "Article": "1365549",
    "Article Description": "FLOWER 4",
    "PLU CODE": "3322",
    "UOM": "PC"
  },
  {
    "Article": "1365630",
    "Article Description": "BEIGE COTTON BAG 18 X 20",
    "PLU CODE": "3342",
    "UOM": "PC"
  },
  {
    "Article": "1367063",
    "Article Description": "PUMPKIN CUBES",
    "PLU CODE": "3350",
    "UOM": "PC"
  },
  {
    "Article": "1367066",
    "Article Description": "STIR FRY MUSHROOM",
    "PLU CODE": "3352",
    "UOM": "PC"
  },
  {
    "Article": "1367080",
    "Article Description": "PINE APPLE 1 PC",
    "PLU CODE": "3359",
    "UOM": "PC"
  },
  {
    "Article": "1367086",
    "Article Description": "FRUIT FIESTA",
    "PLU CODE": "3363",
    "UOM": "PC"
  },
  {
    "Article": "1367095",
    "Article Description": "SPROUTS ALFA ALFA PC",
    "PLU CODE": "3367",
    "UOM": "PC"
  },
  {
    "Article": "1367192",
    "Article Description": "GUAVA IMPORTED",
    "PLU CODE": "3369",
    "UOM": "KG"
  },
  {
    "Article": "1367194",
    "Article Description": "PASSION FRUIT PURPLE IMPORTED",
    "PLU CODE": "3371",
    "UOM": "KG"
  },
  {
    "Article": "1367201",
    "Article Description": "GRAPES BLACK IMPORTED",
    "PLU CODE": "3377",
    "UOM": "KG"
  },
  {
    "Article": "1368348",
    "Article Description": "APPLE ROSE",
    "PLU CODE": "3382",
    "UOM": "KG"
  },
  {
    "Article": "1368351",
    "Article Description": "POMELLO THAI",
    "PLU CODE": "3384",
    "UOM": "KG"
  },
  {
    "Article": "1368358",
    "Article Description": "PEACH WHITE IMP",
    "PLU CODE": "3386",
    "UOM": "KG"
  },
  {
    "Article": "1368369",
    "Article Description": "MANGO TOMMY ATKINS",
    "PLU CODE": "3391",
    "UOM": "KG"
  },
  {
    "Article": "1368403",
    "Article Description": "CHILI PEPPERS JALAPENO GREEN IMPORTED",
    "PLU CODE": "3392",
    "UOM": "KG"
  },
  {
    "Article": "1368404",
    "Article Description": "JALAPENO CHILLI PEPPERS RED IMPORTED",
    "PLU CODE": "3393",
    "UOM": "KG"
  },
  {
    "Article": "1368405",
    "Article Description": "CHILLY BIRD RED IMPORTED",
    "PLU CODE": "3394",
    "UOM": "KG"
  },
  {
    "Article": "1368414",
    "Article Description": "CHILLY THAI YELLOW LONG",
    "PLU CODE": "3400",
    "UOM": "KG"
  },
  {
    "Article": "1368455",
    "Article Description": "MELON YELLOW SUN MELODY",
    "PLU CODE": "3413",
    "UOM": "KG"
  },
  {
    "Article": "1368461",
    "Article Description": "PEACH INDIAN",
    "PLU CODE": "3417",
    "UOM": "KG"
  },
  {
    "Article": "1368479",
    "Article Description": "PEAR RED INDIAN",
    "PLU CODE": "3423",
    "UOM": "KG"
  },
  {
    "Article": "1368487",
    "Article Description": "JACK FRUIT PEELED PC",
    "PLU CODE": "3427",
    "UOM": "PC"
  },
  {
    "Article": "1368502",
    "Article Description": "APRICOT INDIAN",
    "PLU CODE": "3432",
    "UOM": "KG"
  },
  {
    "Article": "1368503",
    "Article Description": "ALMOND GREEN",
    "PLU CODE": "3433",
    "UOM": "KG"
  },
  {
    "Article": "1368505",
    "Article Description": "DATES FRESH RED",
    "PLU CODE": "3435",
    "UOM": "KG"
  },
  {
    "Article": "1368506",
    "Article Description": "DATES FRESH YELLOW",
    "PLU CODE": "3436",
    "UOM": "KG"
  },
  {
    "Article": "1368508",
    "Article Description": "JAMUN",
    "PLU CODE": "3438",
    "UOM": "KG"
  },
  {
    "Article": "1368509",
    "Article Description": "LITCHI INDIAN",
    "PLU CODE": "3439",
    "UOM": "KG"
  },
  {
    "Article": "1368511",
    "Article Description": "PLUMS INDIAN",
    "PLU CODE": "3441",
    "UOM": "KG"
  },
  {
    "Article": "1368525",
    "Article Description": "PINEAPPLE PEELED 1 PC",
    "PLU CODE": "3449",
    "UOM": "PC"
  },
  {
    "Article": "1368539",
    "Article Description": "PAPAYA 1PC PK NB",
    "PLU CODE": "3455",
    "UOM": "PC"
  },
  {
    "Article": "1365243",
    "Article Description": "RADDISH WHITE 2 PC PK NB",
    "PLU CODE": "3134",
    "UOM": "PC"
  },
  {
    "Article": "1384841",
    "Article Description": "SPINACH DESI CLEANED BUNCH",
    "PLU CODE": "4006",
    "UOM": "PC"
  },
  {
    "Article": "1365197",
    "Article Description": "SPRING ONION 1 PC",
    "PLU CODE": "3096",
    "UOM": "PC"
  },
  {
    "Article": "1368739",
    "Article Description": "PUMPKIN CUT PC",
    "PLU CODE": "3530",
    "UOM": "PC"
  },
  {
    "Article": "1370874",
    "Article Description": "GrandÂ Or Smoked Cheese Natural 3kg",
    "PLU CODE": "3576",
    "UOM": "KG"
  },
  {
    "Article": "1370997",
    "Article Description": "MANGOSTEIN",
    "PLU CODE": "3579",
    "UOM": "KG"
  },
  {
    "Article": "1371275",
    "Article Description": "SFP RAW TURKEY KG",
    "PLU CODE": "3582",
    "UOM": "KG"
  },
  {
    "Article": "1371276",
    "Article Description": "SFP RAW DUCK KG",
    "PLU CODE": "3583",
    "UOM": "KG"
  },
  {
    "Article": "1371278",
    "Article Description": "SFP ROAST AND STUFFED CHICKEN KG",
    "PLU CODE": "3584",
    "UOM": "KG"
  },
  {
    "Article": "1371865",
    "Article Description": "ROSEMARY FRESH NATRES",
    "PLU CODE": "3620",
    "UOM": "PC"
  },
  {
    "Article": "1371867",
    "Article Description": "OREGANO FRESH NATURES",
    "PLU CODE": "3622",
    "UOM": "PC"
  },
  {
    "Article": "1371897",
    "Article Description": "MICROGREENS MUSTARD 50G",
    "PLU CODE": "3651",
    "UOM": "PC"
  },
  {
    "Article": "1371898",
    "Article Description": "MICROGREENS RADISH RED 50G",
    "PLU CODE": "3652",
    "UOM": "PC"
  },
  {
    "Article": "1371925",
    "Article Description": "RAM BHUTAN INDIAN",
    "PLU CODE": "3657",
    "UOM": "KG"
  },
  {
    "Article": "1371954",
    "Article Description": "BROCCOLI PC",
    "PLU CODE": "3672",
    "UOM": "PC"
  },
  {
    "Article": "1371961",
    "Article Description": "LETTUCE ICEBERG",
    "PLU CODE": "3675",
    "UOM": "PC"
  },
  {
    "Article": "1371981",
    "Article Description": "GARLIC CHIVES",
    "PLU CODE": "3679",
    "UOM": "PC"
  },
  {
    "Article": "1371988",
    "Article Description": "LEAFY RADISH RED PC",
    "PLU CODE": "3682",
    "UOM": "PC"
  },
  {
    "Article": "1372019",
    "Article Description": "LEEKS PC",
    "PLU CODE": "3691",
    "UOM": "PC"
  },
  {
    "Article": "1372027",
    "Article Description": "ZUCCHINI YELLOW PC",
    "PLU CODE": "3693",
    "UOM": "PC"
  },
  {
    "Article": "1372547",
    "Article Description": "BANANA RED NB",
    "PLU CODE": "3698",
    "UOM": "KG"
  },
  {
    "Article": "1372548",
    "Article Description": "MANGO BADAMI NB",
    "PLU CODE": "3699",
    "UOM": "KG"
  },
  {
    "Article": "1372550",
    "Article Description": "GUAVA NB",
    "PLU CODE": "3700",
    "UOM": "KG"
  },
  {
    "Article": "1372558",
    "Article Description": "BAMBOO SHOOT NB",
    "PLU CODE": "3702",
    "UOM": "KG"
  },
  {
    "Article": "1372560",
    "Article Description": "CHOW CHOW NB",
    "PLU CODE": "3703",
    "UOM": "KG"
  },
  {
    "Article": "1372706",
    "Article Description": "CUSTARD APPLE NB",
    "PLU CODE": "3711",
    "UOM": "KG"
  },
  {
    "Article": "1372711",
    "Article Description": "GARLIC PEELED NB",
    "PLU CODE": "3712",
    "UOM": "PC"
  },
  {
    "Article": "1372843",
    "Article Description": "Fresh Chicken Tikka NB",
    "PLU CODE": "3733",
    "UOM": "KG"
  },
  {
    "Article": "1372859",
    "Article Description": "Zanetti mascarpone 500gm NB",
    "PLU CODE": "3740",
    "UOM": "KG"
  },
  {
    "Article": "1372871",
    "Article Description": "MUSHROOM BUTTON 200g NB",
    "PLU CODE": "3744",
    "UOM": "PC"
  },
  {
    "Article": "1372893",
    "Article Description": "Prasuma Chicken Shammi Kabab Kg",
    "PLU CODE": "3748",
    "UOM": "KG"
  },
  {
    "Article": "1380059",
    "Article Description": "MELON MUSK PC",
    "PLU CODE": "3920",
    "UOM": "PC"
  },
  {
    "Article": "1380070",
    "Article Description": "KIWI GREEN PACK",
    "PLU CODE": "3921",
    "UOM": "PC"
  },
  {
    "Article": "1380096",
    "Article Description": "KIWI GOLDEN PACK",
    "PLU CODE": "3929",
    "UOM": "PC"
  },
  {
    "Article": "1380339",
    "Article Description": "PAYSAN BRETTON COKNG CRM 15PER FAT 1 LTR",
    "PLU CODE": "3938",
    "UOM": "PC"
  },
  {
    "Article": "1382183",
    "Article Description": "CHERRY TOMATO ON VINE MIXED",
    "PLU CODE": "3958",
    "UOM": "KG"
  },
  {
    "Article": "1382184",
    "Article Description": "CHILLIES HABENORA YELLOW IMPORTED",
    "PLU CODE": "3959",
    "UOM": "KG"
  },
  {
    "Article": "1382188",
    "Article Description": "LOTUS ROOT IMPORTED",
    "PLU CODE": "3963",
    "UOM": "KG"
  },
  {
    "Article": "1382190",
    "Article Description": "ONION SHALLOTS IMPORTED",
    "PLU CODE": "3964",
    "UOM": "KG"
  },
  {
    "Article": "1382191",
    "Article Description": "PEACH GOLDEN IMPORTED",
    "PLU CODE": "3965",
    "UOM": "KG"
  },
  {
    "Article": "1382195",
    "Article Description": "COCONUT THAI IMPORTED",
    "PLU CODE": "3969",
    "UOM": "PC"
  },
  {
    "Article": "1382196",
    "Article Description": "JALAPENO CHILLI PEPPERS YELLOW IMPORTED",
    "PLU CODE": "3970",
    "UOM": "KG"
  },
  {
    "Article": "1382197",
    "Article Description": "CHILLIES HABENORA RED IMPORTED",
    "PLU CODE": "3971",
    "UOM": "KG"
  },
  {
    "Article": "1382199",
    "Article Description": "CARROT BABY IMPORTED",
    "PLU CODE": "3973",
    "UOM": "KG"
  },
  {
    "Article": "1382206",
    "Article Description": "GRAPES RED FLAME IMPORTED",
    "PLU CODE": "3977",
    "UOM": "KG"
  },
  {
    "Article": "1382756",
    "Article Description": "GRAPES GREEN PKD",
    "PLU CODE": "3987",
    "UOM": "PC"
  },
  {
    "Article": "1382757",
    "Article Description": "GRAPES BLACK PKD",
    "PLU CODE": "3988",
    "UOM": "PC"
  },
  {
    "Article": "1382758",
    "Article Description": "PEARS PACKHAM IMPORTED",
    "PLU CODE": "3989",
    "UOM": "KG"
  },
  {
    "Article": "1382759",
    "Article Description": "PEARS GREEN ANJOU IMPORTED",
    "PLU CODE": "3990",
    "UOM": "KG"
  },
  {
    "Article": "1382760",
    "Article Description": "PEARS RED ANJOU IMPORTED",
    "PLU CODE": "3991",
    "UOM": "KG"
  },
  {
    "Article": "1382761",
    "Article Description": "PEARS BEAUTY IMPORTED",
    "PLU CODE": "3992",
    "UOM": "KG"
  },
  {
    "Article": "1383097",
    "Article Description": "LE SUPERBE LUSTENBERGER CHEESE 2.50KG",
    "PLU CODE": "4004",
    "UOM": "KG"
  },
  {
    "Article": "1365285",
    "Article Description": "SURAN",
    "PLU CODE": "3156",
    "UOM": "KG"
  },
  {
    "Article": "1404151",
    "Article Description": "SWEET CORN 2PC",
    "PLU CODE": "4605",
    "UOM": "PC"
  },
  {
    "Article": "1365211",
    "Article Description": "TENDLI",
    "PLU CODE": "3108",
    "UOM": "KG"
  },
  {
    "Article": "1384843",
    "Article Description": "METHI DESI CLEANED BUNCH",
    "PLU CODE": "4008",
    "UOM": "PC"
  },
  {
    "Article": "1385686",
    "Article Description": "MULBERRY INDIAN PC",
    "PLU CODE": "4051",
    "UOM": "PC"
  },
  {
    "Article": "1386024",
    "Article Description": "FIORELLA PARMESAN CHEESE 4.5KG",
    "PLU CODE": "4065",
    "UOM": "KG"
  },
  {
    "Article": "1386523",
    "Article Description": "HASS AVOCADO 1PC",
    "PLU CODE": "4076",
    "UOM": "PC"
  },
  {
    "Article": "1392924",
    "Article Description": "LEMON SEEDLESS IMP",
    "PLU CODE": "4166",
    "UOM": "KG"
  },
  {
    "Article": "1394181",
    "Article Description": "SNAKE FRUIT IMPORTED",
    "PLU CODE": "4236",
    "UOM": "KG"
  },
  {
    "Article": "1396005",
    "Article Description": "Chicken Turkey Pork - 899",
    "PLU CODE": "4254",
    "UOM": "PC"
  },
  {
    "Article": "1396007",
    "Article Description": "Chicken N Turkey Pork  1999",
    "PLU CODE": "4255",
    "UOM": "PC"
  },
  {
    "Article": "1397058",
    "Article Description": "RAW DUCK BREAST",
    "PLU CODE": "4306",
    "UOM": "KG"
  },
  {
    "Article": "1397059",
    "Article Description": "RAW TURKEY BREAST",
    "PLU CODE": "4307",
    "UOM": "KG"
  },
  {
    "Article": "1397882",
    "Article Description": "CBTL NSA PURE COOKIE N CREAM IB SML",
    "PLU CODE": "4318",
    "UOM": "PC"
  },
  {
    "Article": "1397883",
    "Article Description": "CBTL NSA PURE COOKIE N CREAM IB REGULAR",
    "PLU CODE": "4319",
    "UOM": "PC"
  },
  {
    "Article": "1397923",
    "Article Description": "ALF FARM RAW DUCK 1KG TO 1.5KG",
    "PLU CODE": "4320",
    "UOM": "PC"
  },
  {
    "Article": "1397924",
    "Article Description": "ALF FARM SMKD ROASTED DUCK 1KG TO 1.5KG",
    "PLU CODE": "4321",
    "UOM": "PC"
  },
  {
    "Article": "1397925",
    "Article Description": "ALFFARM HONEY ROAST CHICKEN 1.5KG TO 2KG",
    "PLU CODE": "4322",
    "UOM": "PC"
  },
  {
    "Article": "1397926",
    "Article Description": "ALF FARM PORK HONEY LEG HAM 1.5KG TO 2KG",
    "PLU CODE": "4323",
    "UOM": "PC"
  },
  {
    "Article": "1397927",
    "Article Description": "ALF FARM PORK SMOKD LEG HAM 1.5KG TO 2KG",
    "PLU CODE": "4324",
    "UOM": "PC"
  },
  {
    "Article": "1397930",
    "Article Description": "ALF FARM RAW FROZN TURKEY 2KG TO 3KG",
    "PLU CODE": "4325",
    "UOM": "PC"
  },
  {
    "Article": "1397932",
    "Article Description": "BUTTERBALL WHOLE FROZEN TURKEY 4KG TO 6K",
    "PLU CODE": "4326",
    "UOM": "PC"
  },
  {
    "Article": "1398035",
    "Article Description": "BLUEBERRY INDIAN PC",
    "PLU CODE": "4332",
    "UOM": "PC"
  },
  {
    "Article": "1398036",
    "Article Description": "RASPBERRY INDIAN PC",
    "PLU CODE": "4333",
    "UOM": "PC"
  },
  {
    "Article": "1398105",
    "Article Description": "BUTLERS MILK TRUFFLE",
    "PLU CODE": "4335",
    "UOM": "KG"
  },
  {
    "Article": "1398106",
    "Article Description": "BUTLERS MINT TRUFFLES",
    "PLU CODE": "4336",
    "UOM": "KG"
  },
  {
    "Article": "1398107",
    "Article Description": "BUTLERS HONEYCOMB CRISP",
    "PLU CODE": "4337",
    "UOM": "KG"
  },
  {
    "Article": "1398108",
    "Article Description": "BUTLERS CARAMEL TRUFFLE",
    "PLU CODE": "4338",
    "UOM": "KG"
  },
  {
    "Article": "1398109",
    "Article Description": "BUTLERS 70PERCENT DARK MINI BAR",
    "PLU CODE": "4339",
    "UOM": "KG"
  },
  {
    "Article": "1398110",
    "Article Description": "BUTLERS 40 PERCENT MILK MINI BAR",
    "PLU CODE": "4340",
    "UOM": "KG"
  },
  {
    "Article": "1398111",
    "Article Description": "BUTLERS SALT CARAMEL MINI BAR",
    "PLU CODE": "4341",
    "UOM": "KG"
  },
  {
    "Article": "1398112",
    "Article Description": "BUTLERS WHITE COCONUT MINI BAR",
    "PLU CODE": "4342",
    "UOM": "KG"
  },
  {
    "Article": "1398113",
    "Article Description": "BUTLERS ORANGE N ALMOND MINI BAR",
    "PLU CODE": "4343",
    "UOM": "KG"
  },
  {
    "Article": "1398114",
    "Article Description": "BUTLERS WHITE RASPBERRY MINI BAR",
    "PLU CODE": "4344",
    "UOM": "KG"
  },
  {
    "Article": "1398783",
    "Article Description": "FRESH GUCAMOLE DIP 200G",
    "PLU CODE": "4387",
    "UOM": "PC"
  },
  {
    "Article": "1398785",
    "Article Description": "FRESH HUMMUS 200G",
    "PLU CODE": "4389",
    "UOM": "PC"
  },
  {
    "Article": "1399112",
    "Article Description": "FIGS FRESH PC",
    "PLU CODE": "4420",
    "UOM": "PC"
  },
  {
    "Article": "1400617",
    "Article Description": "NB CHICKEN TANDURI MARINATION BONELES KG",
    "PLU CODE": "4434",
    "UOM": "KG"
  },
  {
    "Article": "1400618",
    "Article Description": "NB CHICKEN TANDURI MARINTION CURY CUT KG",
    "PLU CODE": "4435",
    "UOM": "KG"
  },
  {
    "Article": "1400619",
    "Article Description": "NB CHICKEN TANDURI MARINTION DRUMSTIK KG",
    "PLU CODE": "4436",
    "UOM": "KG"
  },
  {
    "Article": "1400620",
    "Article Description": "NB CHICKEN TIKKA MASALA BONELESS KG",
    "PLU CODE": "4437",
    "UOM": "KG"
  },
  {
    "Article": "1400621",
    "Article Description": "NB CHICKEN SCHEZWAN MARINTION BONELES KG",
    "PLU CODE": "4438",
    "UOM": "KG"
  },
  {
    "Article": "1400622",
    "Article Description": "NB CHICKEN SCHEZWN MARINTION DRUMSTIK KG",
    "PLU CODE": "4439",
    "UOM": "KG"
  },
  {
    "Article": "1400623",
    "Article Description": "NB CHICKEN SCHEZWN MARINTION CURY CUT KG",
    "PLU CODE": "4440",
    "UOM": "KG"
  },
  {
    "Article": "1400624",
    "Article Description": "NB CHICKEN MALAI MARINATION BONELESS KG",
    "PLU CODE": "4441",
    "UOM": "KG"
  },
  {
    "Article": "1400625",
    "Article Description": "NB CHICKEN MALAI MARINATION DRUMSTICK KG",
    "PLU CODE": "4442",
    "UOM": "KG"
  },
  {
    "Article": "1400626",
    "Article Description": "NB CHICKEN KALONJI MARINATION BONELSS KG",
    "PLU CODE": "4443",
    "UOM": "KG"
  },
  {
    "Article": "1400627",
    "Article Description": "NB CHICKEN BIRYANI MASALA BONELSS KG",
    "PLU CODE": "4444",
    "UOM": "KG"
  },
  {
    "Article": "1400628",
    "Article Description": "NB CHICKEN BIRYANI MASALA CURRY CUT KG",
    "PLU CODE": "4445",
    "UOM": "KG"
  },
  {
    "Article": "1400629",
    "Article Description": "NB CHICKEN AFGHANI MARINATION BONELSS KG",
    "PLU CODE": "4446",
    "UOM": "KG"
  },
  {
    "Article": "1400630",
    "Article Description": "NB CHICKEN AFGHANI MARINTION DRUMSTIK KG",
    "PLU CODE": "4447",
    "UOM": "KG"
  },
  {
    "Article": "1400631",
    "Article Description": "NB CHICKEN ITALIAN MARINATION BONELSS KG",
    "PLU CODE": "4448",
    "UOM": "KG"
  },
  {
    "Article": "1400632",
    "Article Description": "NB CHICKEN ITALIAN MARINTION DRUMSTIK KG",
    "PLU CODE": "4449",
    "UOM": "KG"
  },
  {
    "Article": "1400633",
    "Article Description": "NB CHICKEN THAI BASIL GRIL MARINATION KG",
    "PLU CODE": "4450",
    "UOM": "KG"
  },
  {
    "Article": "1400634",
    "Article Description": "NB CHICKEN SATAY MARINATION BONELESS KG",
    "PLU CODE": "4451",
    "UOM": "KG"
  },
  {
    "Article": "1400635",
    "Article Description": "NB CHICKEN MAXICAN MARINATION BONELES KG",
    "PLU CODE": "4452",
    "UOM": "KG"
  },
  {
    "Article": "1400647",
    "Article Description": "NIMMIS TANDOORI MARINATION PER KG",
    "PLU CODE": "4453",
    "UOM": "KG"
  },
  {
    "Article": "1400648",
    "Article Description": "NIMMIS CHICKEN MUTTON TIKA MASALA PER KG",
    "PLU CODE": "4454",
    "UOM": "KG"
  },
  {
    "Article": "1400649",
    "Article Description": "NIMMIS SCHEWZAN MARINATION PER KG",
    "PLU CODE": "4455",
    "UOM": "KG"
  },
  {
    "Article": "1400650",
    "Article Description": "NIMMIS MALAI KABAB MARINATION PER KG",
    "PLU CODE": "4456",
    "UOM": "KG"
  },
  {
    "Article": "1400651",
    "Article Description": "NIMMIS KALONJI MARINATION PER KG",
    "PLU CODE": "4457",
    "UOM": "KG"
  },
  {
    "Article": "1400652",
    "Article Description": "NIMMIS BIRYANI MASALA PER KG",
    "PLU CODE": "4458",
    "UOM": "KG"
  },
  {
    "Article": "1400653",
    "Article Description": "NIMMIS AFGHANI MARINATION PER KG",
    "PLU CODE": "4459",
    "UOM": "KG"
  },
  {
    "Article": "1400654",
    "Article Description": "NIMMIS ITALIAN MARINATION PER KG",
    "PLU CODE": "4460",
    "UOM": "KG"
  },
  {
    "Article": "1400655",
    "Article Description": "NIMMIS THAI BASIL GRIL CHCKN PSTE PER KG",
    "PLU CODE": "4461",
    "UOM": "KG"
  },
  {
    "Article": "1400656",
    "Article Description": "NIMMIS CHICKEN SATAY MARINATION PER KG",
    "PLU CODE": "4462",
    "UOM": "KG"
  },
  {
    "Article": "1400657",
    "Article Description": "NIMMIS PAPRIKA CHICKEN MEXICAN PER KG",
    "PLU CODE": "4463",
    "UOM": "KG"
  },
  {
    "Article": "1400663",
    "Article Description": "NB MIX CUT FRUITS",
    "PLU CODE": "4466",
    "UOM": "PC"
  },
  {
    "Article": "1400752",
    "Article Description": "OLIVES STFFED WITH FETA CHEESE IN OIL KG",
    "PLU CODE": "4468",
    "UOM": "KG"
  },
  {
    "Article": "1400753",
    "Article Description": "PITTED MIX GRN BLCK SPICY FNTSY OLIVE KG",
    "PLU CODE": "4469",
    "UOM": "KG"
  },
  {
    "Article": "1400754",
    "Article Description": "LRG PTTD GRN OLIVES STFFD WITH GARLIC KG",
    "PLU CODE": "4470",
    "UOM": "KG"
  },
  {
    "Article": "1400755",
    "Article Description": "LRG PTTD GRN OLIVE STFFD WITH PIMENTO KG",
    "PLU CODE": "4471",
    "UOM": "KG"
  },
  {
    "Article": "1400756",
    "Article Description": "LRG PTTD GRN OLIVE STFFD WTH PIRIPIRI KG",
    "PLU CODE": "4472",
    "UOM": "KG"
  },
  {
    "Article": "1400757",
    "Article Description": "LRG PTTD GRN OLIVE STFFD WTH SNDRIED KG",
    "PLU CODE": "4473",
    "UOM": "KG"
  },
  {
    "Article": "1400758",
    "Article Description": "SUNDRIED TOMATOES IN OIL KG",
    "PLU CODE": "4474",
    "UOM": "KG"
  },
  {
    "Article": "1400759",
    "Article Description": "LARGE GREEN OLIVES KG",
    "PLU CODE": "4475",
    "UOM": "KG"
  },
  {
    "Article": "1400760",
    "Article Description": "LARGE PITTED GREEN OLIVES KG",
    "PLU CODE": "4476",
    "UOM": "KG"
  },
  {
    "Article": "1400761",
    "Article Description": "LARGE PITTED BLACK OLIVES KG",
    "PLU CODE": "4477",
    "UOM": "KG"
  },
  {
    "Article": "1400762",
    "Article Description": "RED HOT CHILLI PEPPER IN OIL KG",
    "PLU CODE": "4478",
    "UOM": "KG"
  },
  {
    "Article": "1401342",
    "Article Description": "DRAGON FRUIT RED FLESH PC",
    "PLU CODE": "4482",
    "UOM": "PC"
  },
  {
    "Article": "1401343",
    "Article Description": "DRAGON FRUIT WHITE FLESH PC",
    "PLU CODE": "4483",
    "UOM": "PC"
  },
  {
    "Article": "1402607",
    "Article Description": "SMOKED DUCK BREAST",
    "PLU CODE": "4494",
    "UOM": "KG"
  },
  {
    "Article": "1402608",
    "Article Description": "TURKEY MORTADELLA",
    "PLU CODE": "4495",
    "UOM": "KG"
  },
  {
    "Article": "1402609",
    "Article Description": "TURKEY FRANKFURTERS",
    "PLU CODE": "4496",
    "UOM": "KG"
  },
  {
    "Article": "1403265",
    "Article Description": "GOOSEBERRY INDIAN",
    "PLU CODE": "4502",
    "UOM": "PC"
  },
  {
    "Article": "1403270",
    "Article Description": "MANGO ALPHONSO PREMIUM 1 PC",
    "PLU CODE": "4503",
    "UOM": "PC"
  },
  {
    "Article": "1403480",
    "Article Description": "HA ORGANIC BANANA 6 PCS",
    "PLU CODE": "4505",
    "UOM": "PC"
  },
  {
    "Article": "1403481",
    "Article Description": "HA ORGANIC BEETROOT 250G",
    "PLU CODE": "4506",
    "UOM": "PC"
  },
  {
    "Article": "1403482",
    "Article Description": "HA ORGANIC BHARTA BRINJAL 500G",
    "PLU CODE": "4507",
    "UOM": "PC"
  },
  {
    "Article": "1403483",
    "Article Description": "HA ORGANIC BITTER GOURD - KARELA 500G",
    "PLU CODE": "4508",
    "UOM": "PC"
  },
  {
    "Article": "1403486",
    "Article Description": "HA ORGANIC BOTTLE GOURD - DUDHI 400G",
    "PLU CODE": "4509",
    "UOM": "PC"
  },
  {
    "Article": "1403487",
    "Article Description": "HA ORGANIC BROCCOLI 200G",
    "PLU CODE": "4510",
    "UOM": "PC"
  },
  {
    "Article": "1403488",
    "Article Description": "HA ORGANIC CABBAGE 1 PCS",
    "PLU CODE": "4511",
    "UOM": "PC"
  },
  {
    "Article": "1403489",
    "Article Description": "HA ORGANIC CAPSICUM 200G",
    "PLU CODE": "4512",
    "UOM": "PC"
  },
  {
    "Article": "1403490",
    "Article Description": "HA ORGANIC CARROT 250G",
    "PLU CODE": "4513",
    "UOM": "PC"
  },
  {
    "Article": "1403491",
    "Article Description": "HA ORGANIC CAULIFLOWER 1 PCS",
    "PLU CODE": "4514",
    "UOM": "PC"
  },
  {
    "Article": "1403493",
    "Article Description": "HA ORGANICALLY GROWN CHERRY TOMATO 250G",
    "PLU CODE": "4515",
    "UOM": "PC"
  },
  {
    "Article": "1403495",
    "Article Description": "HA ORGANIC CLUSTER BEANS 250G",
    "PLU CODE": "4516",
    "UOM": "PC"
  },
  {
    "Article": "1403496",
    "Article Description": "HA ORGANIC CORIANDER 250G",
    "PLU CODE": "4517",
    "UOM": "PC"
  },
  {
    "Article": "1403497",
    "Article Description": "HA ORGANIC CUCUMBER 500G",
    "PLU CODE": "4518",
    "UOM": "PC"
  },
  {
    "Article": "1403499",
    "Article Description": "HA ORG GWN FENUGREEK-METHI 250G",
    "PLU CODE": "4519",
    "UOM": "PC"
  },
  {
    "Article": "1403501",
    "Article Description": "HA ORGANIC FRENCH BEANS 250G",
    "PLU CODE": "4520",
    "UOM": "PC"
  },
  {
    "Article": "1403502",
    "Article Description": "HA ORGANIC FRESH PALAK250G",
    "PLU CODE": "4521",
    "UOM": "PC"
  },
  {
    "Article": "1403503",
    "Article Description": "HA ORGANIC GARLIC 250G",
    "PLU CODE": "4522",
    "UOM": "PC"
  },
  {
    "Article": "1403504",
    "Article Description": "HA ORG GWN GINGER 250G",
    "PLU CODE": "4523",
    "UOM": "PC"
  },
  {
    "Article": "1403506",
    "Article Description": "HA ORGANIC GREEN CHILLIES 100G",
    "PLU CODE": "4524",
    "UOM": "PC"
  },
  {
    "Article": "1403508",
    "Article Description": "HA ORGANIC GREEN ZUCCHINI 200G",
    "PLU CODE": "4525",
    "UOM": "PC"
  },
  {
    "Article": "1403510",
    "Article Description": "HA ORGANIC ICEBERG LETTUCE 200G",
    "PLU CODE": "4526",
    "UOM": "PC"
  },
  {
    "Article": "1403511",
    "Article Description": "HA ORGANIC LEMON 3 PCS",
    "PLU CODE": "4527",
    "UOM": "PC"
  },
  {
    "Article": "1403512",
    "Article Description": "HA ORGANIC MUSKMELON 1 PCS",
    "PLU CODE": "4528",
    "UOM": "PC"
  },
  {
    "Article": "1403513",
    "Article Description": "HA ORGANIC OKRA/LADY FINGER 250G",
    "PLU CODE": "4529",
    "UOM": "PC"
  },
  {
    "Article": "1403514",
    "Article Description": "HA ORGANIC ONION 500G",
    "PLU CODE": "4530",
    "UOM": "PC"
  },
  {
    "Article": "1403517",
    "Article Description": "HA ORGANIC PAPAYA 1 PCS",
    "PLU CODE": "4531",
    "UOM": "PC"
  },
  {
    "Article": "1403519",
    "Article Description": "HA ORG GWN PINEAPPLE 1 PCS",
    "PLU CODE": "4532",
    "UOM": "PC"
  },
  {
    "Article": "1403520",
    "Article Description": "HA ORGANIC POMEGRANATE 450G",
    "PLU CODE": "4533",
    "UOM": "PC"
  },
  {
    "Article": "1403521",
    "Article Description": "HA ORGANIC POTATO 500G",
    "PLU CODE": "4534",
    "UOM": "PC"
  },
  {
    "Article": "1403522",
    "Article Description": "HA ORGANIC RADISH 250G",
    "PLU CODE": "4535",
    "UOM": "PC"
  },
  {
    "Article": "1403523",
    "Article Description": "HA ORGANIC RED BELL PEPPER 250G",
    "PLU CODE": "4536",
    "UOM": "PC"
  },
  {
    "Article": "1403524",
    "Article Description": "HA ORGANIC RED CABBAGE 250G",
    "PLU CODE": "4537",
    "UOM": "PC"
  },
  {
    "Article": "1403534",
    "Article Description": "HA ORGANIC TOMATO 500G",
    "PLU CODE": "4540",
    "UOM": "PC"
  },
  {
    "Article": "1403536",
    "Article Description": "HA ORGANIC WATERMELON 1 PCS",
    "PLU CODE": "4541",
    "UOM": "PC"
  },
  {
    "Article": "1403538",
    "Article Description": "HA ORGANIC YELLOW BELL PEPPER 250G",
    "PLU CODE": "4542",
    "UOM": "PC"
  },
  {
    "Article": "1403542",
    "Article Description": "HA ORGANIC FRESH MINT LEAVES 250G",
    "PLU CODE": "4543",
    "UOM": "PC"
  },
  {
    "Article": "1403722",
    "Article Description": "NATURES BABY CORN 200G",
    "PLU CODE": "4547",
    "UOM": "PC"
  },
  {
    "Article": "1403745",
    "Article Description": "CHILLI RED BUD PCS",
    "PLU CODE": "4565",
    "UOM": "PC"
  },
  {
    "Article": "1403754",
    "Article Description": "NATURES DILL LEAVES",
    "PLU CODE": "4572",
    "UOM": "PC"
  },
  {
    "Article": "1404090",
    "Article Description": "BERRIES MIX PC",
    "PLU CODE": "4573",
    "UOM": "PC"
  },
  {
    "Article": "1404091",
    "Article Description": "BLACK BERRY IMPORTED PC",
    "PLU CODE": "4574",
    "UOM": "PC"
  },
  {
    "Article": "1404092",
    "Article Description": "CABBAGE CHINESE PC",
    "PLU CODE": "4575",
    "UOM": "PC"
  },
  {
    "Article": "1404093",
    "Article Description": "CABBAGE RED PC",
    "PLU CODE": "4576",
    "UOM": "PC"
  },
  {
    "Article": "1404097",
    "Article Description": "CARROT BABY PACK",
    "PLU CODE": "4577",
    "UOM": "PC"
  },
  {
    "Article": "1404099",
    "Article Description": "CELERY PC",
    "PLU CODE": "4578",
    "UOM": "PC"
  },
  {
    "Article": "1404101",
    "Article Description": "CELERY TRIKAYA PC",
    "PLU CODE": "4579",
    "UOM": "PC"
  },
  {
    "Article": "1404106",
    "Article Description": "CORN AMERICAN SHELLED PC",
    "PLU CODE": "4580",
    "UOM": "PC"
  },
  {
    "Article": "1404109",
    "Article Description": "CURRANT RED PC",
    "PLU CODE": "4581",
    "UOM": "PC"
  },
  {
    "Article": "1404111",
    "Article Description": "GALANGAL PACK",
    "PLU CODE": "4582",
    "UOM": "PC"
  },
  {
    "Article": "1404115",
    "Article Description": "GOURD BOTTLE PC",
    "PLU CODE": "4583",
    "UOM": "PC"
  },
  {
    "Article": "1404120",
    "Article Description": "LETTUCE LEAF PC",
    "PLU CODE": "4584",
    "UOM": "PC"
  },
  {
    "Article": "1404121",
    "Article Description": "LETTUCE LEAF GREEN PC",
    "PLU CODE": "4585",
    "UOM": "PC"
  },
  {
    "Article": "1404122",
    "Article Description": "LETTUCE ROMAINE RED PC",
    "PLU CODE": "4586",
    "UOM": "PC"
  },
  {
    "Article": "1404124",
    "Article Description": "MAKROOT LEAVES PACK",
    "PLU CODE": "4587",
    "UOM": "PC"
  },
  {
    "Article": "1404126",
    "Article Description": "WATERMELON KIRAN",
    "PLU CODE": "4588",
    "UOM": "PC"
  },
  {
    "Article": "1404136",
    "Article Description": "OREGANO FRESH PACK",
    "PLU CODE": "4595",
    "UOM": "PC"
  },
  {
    "Article": "1404137",
    "Article Description": "PAK CHOI CHINESE PC",
    "PLU CODE": "4596",
    "UOM": "PC"
  },
  {
    "Article": "1404139",
    "Article Description": "PAPAYA RAW PC",
    "PLU CODE": "4597",
    "UOM": "PC"
  },
  {
    "Article": "1404140",
    "Article Description": "PARSLEY CURLED PC",
    "PLU CODE": "4598",
    "UOM": "PC"
  },
  {
    "Article": "1404143",
    "Article Description": "PLUMS IMPORTED PACK",
    "PLU CODE": "4600",
    "UOM": "PC"
  },
  {
    "Article": "1404146",
    "Article Description": "RASPBERRY IMPORTED PC",
    "PLU CODE": "4601",
    "UOM": "PC"
  },
  {
    "Article": "1404147",
    "Article Description": "SPROUTS BEANS PACK",
    "PLU CODE": "4602",
    "UOM": "PC"
  },
  {
    "Article": "1404148",
    "Article Description": "SPROUTS BRUSSEL PACK",
    "PLU CODE": "4603",
    "UOM": "PC"
  },
  {
    "Article": "1404149",
    "Article Description": "SUGARCANE PACK",
    "PLU CODE": "4604",
    "UOM": "PC"
  },
  {
    "Article": "1368645",
    "Article Description": "TOMATO COUNTRY",
    "PLU CODE": "3504",
    "UOM": "KG"
  },
  {
    "Article": "1404154",
    "Article Description": "TOMATO CHERRY RED PC",
    "PLU CODE": "4606",
    "UOM": "PC"
  },
  {
    "Article": "1404157",
    "Article Description": "ZUCCHINI GREEN PC",
    "PLU CODE": "4608",
    "UOM": "PC"
  },
  {
    "Article": "1404158",
    "Article Description": "SPROUTS CHAWLI PACK",
    "PLU CODE": "4609",
    "UOM": "PC"
  },
  {
    "Article": "1404159",
    "Article Description": "SPROUTS CHICK PEA PACK",
    "PLU CODE": "4610",
    "UOM": "PC"
  },
  {
    "Article": "1404168",
    "Article Description": "CHERRY IMPORTED PACK",
    "PLU CODE": "4612",
    "UOM": "PC"
  },
  {
    "Article": "1404169",
    "Article Description": "PALM HEART PC",
    "PLU CODE": "4613",
    "UOM": "PC"
  },
  {
    "Article": "1404170",
    "Article Description": "SNOWPEAS PACK",
    "PLU CODE": "4614",
    "UOM": "PC"
  },
  {
    "Article": "1404173",
    "Article Description": "PINEAPPLE THAI IMPORTED PC",
    "PLU CODE": "4615",
    "UOM": "PC"
  },
  {
    "Article": "1404181",
    "Article Description": "BRINJAL THAI PACK",
    "PLU CODE": "4618",
    "UOM": "PC"
  },
  {
    "Article": "1404184",
    "Article Description": "TARRAGON FRESH PACK",
    "PLU CODE": "4620",
    "UOM": "PC"
  },
  {
    "Article": "1404884",
    "Article Description": "WATER WITH WATERMELON BASIL",
    "PLU CODE": "4625",
    "UOM": "PC"
  },
  {
    "Article": "1404885",
    "Article Description": "WATER WITH CUCUMBER MINT",
    "PLU CODE": "4626",
    "UOM": "PC"
  },
  {
    "Article": "1406449",
    "Article Description": "TOMATO BERRY RED",
    "PLU CODE": "4716",
    "UOM": "PC"
  },
  {
    "Article": "1406892",
    "Article Description": "C&K BABY BACK RIBS KG",
    "PLU CODE": "4734",
    "UOM": "KG"
  },
  {
    "Article": "1406893",
    "Article Description": "C&K PORK SPARE RIBS KG",
    "PLU CODE": "4735",
    "UOM": "KG"
  },
  {
    "Article": "1406894",
    "Article Description": "C&K PORK CHOPS KG",
    "PLU CODE": "4736",
    "UOM": "KG"
  },
  {
    "Article": "1406895",
    "Article Description": "C&K PORK TENDERLOIN KG",
    "PLU CODE": "4737",
    "UOM": "KG"
  },
  {
    "Article": "1406896",
    "Article Description": "CASAPONSA MINI SALAMI PEPPER 270G",
    "PLU CODE": "4738",
    "UOM": "PC"
  },
  {
    "Article": "1406897",
    "Article Description": "CASAPONSA MINI SALAMI FINE HERBS 270G",
    "PLU CODE": "4739",
    "UOM": "PC"
  },
  {
    "Article": "1406898",
    "Article Description": "CASAPONSA MINI SALAMI CHEESE 270G",
    "PLU CODE": "4740",
    "UOM": "PC"
  },
  {
    "Article": "1406899",
    "Article Description": "CASAPONSA MINI SALAMI GREEN PEPPER 270G",
    "PLU CODE": "4741",
    "UOM": "PC"
  },
  {
    "Article": "1406900",
    "Article Description": "CASA PEPER COAT TNEL SALMI WH HAM 100G",
    "PLU CODE": "4742",
    "UOM": "PC"
  },
  {
    "Article": "1406901",
    "Article Description": "CASA PEPER COAT DUO SLCHICHN SALMI 100G",
    "PLU CODE": "4743",
    "UOM": "PC"
  },
  {
    "Article": "1406902",
    "Article Description": "CASA HERBS COAT TUNEL SALMI WH CHIS 100G",
    "PLU CODE": "4744",
    "UOM": "PC"
  },
  {
    "Article": "1406903",
    "Article Description": "CASAPONSA DUO CHORIZO SALAMI SLICED 100G",
    "PLU CODE": "4745",
    "UOM": "PC"
  },
  {
    "Article": "1406904",
    "Article Description": "CASAPONSA PANCETTA SLICED 100G",
    "PLU CODE": "4746",
    "UOM": "PC"
  },
  {
    "Article": "1406905",
    "Article Description": "CASAPONSA PEPPERONI SLICED 100G",
    "PLU CODE": "4747",
    "UOM": "PC"
  },
  {
    "Article": "1406906",
    "Article Description": "CASAPONSA SERRANO HAM SLICES 100G",
    "PLU CODE": "4748",
    "UOM": "PC"
  },
  {
    "Article": "1406907",
    "Article Description": "CASAPONSA SPICY CHORIZO SARTA 240G",
    "PLU CODE": "4749",
    "UOM": "PC"
  },
  {
    "Article": "1406908",
    "Article Description": "CAVOUR PARMA HAM SLICES 100GM",
    "PLU CODE": "4750",
    "UOM": "PC"
  },
  {
    "Article": "1406909",
    "Article Description": "CAVOUR SALAMI MILANO SLICES 100GM",
    "PLU CODE": "4751",
    "UOM": "PC"
  },
  {
    "Article": "1406910",
    "Article Description": "CAVOUR LA FOCOSA SALAMI WITH CHILLI 380G",
    "PLU CODE": "4752",
    "UOM": "PC"
  },
  {
    "Article": "1406911",
    "Article Description": "CAVOUR SPIANATA CALABRA SLICES 100GM",
    "PLU CODE": "4753",
    "UOM": "PC"
  },
  {
    "Article": "1406912",
    "Article Description": "CAVOUR GUSTAVO WITH CHILLI 200GM",
    "PLU CODE": "4754",
    "UOM": "PC"
  },
  {
    "Article": "1406913",
    "Article Description": "CAVOUR GUSTAVO WITH TRUFFLE 200GM",
    "PLU CODE": "4755",
    "UOM": "PC"
  },
  {
    "Article": "1406914",
    "Article Description": "CAVOUR STINCO CLASSIC PORK KNUCKLE 700G",
    "PLU CODE": "4756",
    "UOM": "PC"
  },
  {
    "Article": "1406915",
    "Article Description": "CAVOUR STINCO WH APPLE PORK KNUCKLE 700G",
    "PLU CODE": "4757",
    "UOM": "PC"
  },
  {
    "Article": "1406916",
    "Article Description": "CAVOUR STINCO WH BEER PORK KNUCKLE 700G",
    "PLU CODE": "4758",
    "UOM": "PC"
  },
  {
    "Article": "1406917",
    "Article Description": "MULWARA LAMB FORESHANK BONE IN KG",
    "PLU CODE": "4759",
    "UOM": "KG"
  },
  {
    "Article": "1406918",
    "Article Description": "MULWARA LAMB HINDSHANK BONE IN KG",
    "PLU CODE": "4760",
    "UOM": "KG"
  },
  {
    "Article": "1406919",
    "Article Description": "MULWARA LAMB LOIN BONELESS KG",
    "PLU CODE": "4761",
    "UOM": "KG"
  },
  {
    "Article": "1406920",
    "Article Description": "MULWARA LAMB RACK CAP ON KG",
    "PLU CODE": "4762",
    "UOM": "KG"
  },
  {
    "Article": "1406921",
    "Article Description": "AUS CHICKEN ROULADE WH TRUFFLE MOUSSE KG",
    "PLU CODE": "4763",
    "UOM": "KG"
  },
  {
    "Article": "1406922",
    "Article Description": "AUS CHICKEN ROULADE WITH HERBS CHEESE KG",
    "PLU CODE": "4764",
    "UOM": "KG"
  },
  {
    "Article": "1406923",
    "Article Description": "AUS CHICKEN ROULDE WH APRICOTS PRUNES KG",
    "PLU CODE": "4765",
    "UOM": "KG"
  },
  {
    "Article": "1406924",
    "Article Description": "AUS BARAMUNDI FILLET KG",
    "PLU CODE": "4766",
    "UOM": "KG"
  },
  {
    "Article": "1408151",
    "Article Description": "BLACK KALAMATTA MIX SPICY OLIVES",
    "PLU CODE": "4776",
    "UOM": "KG"
  },
  {
    "Article": "1408746",
    "Article Description": "HASS AVOCADO 3PC VALUE PACK",
    "PLU CODE": "4778",
    "UOM": "PC"
  },
  {
    "Article": "1409309",
    "Article Description": "BUTTON MUSHROOMS PREMIUM",
    "PLU CODE": "4781",
    "UOM": "PC"
  },
  {
    "Article": "1409310",
    "Article Description": "BLUEBERRIES COMBO",
    "PLU CODE": "4782",
    "UOM": "PC"
  },
  {
    "Article": "1409511",
    "Article Description": "GRANDMA SINGLETON RED LEICESTER 2.5KG",
    "PLU CODE": "4822",
    "UOM": "KG"
  },
  {
    "Article": "1409512",
    "Article Description": "KROON GOUDA WHEEL WITH GARDEN HERB KG",
    "PLU CODE": "4823",
    "UOM": "KG"
  },
  {
    "Article": "1409514",
    "Article Description": "KROON GOUDA WITH BLACK PEPPER KG",
    "PLU CODE": "4825",
    "UOM": "KG"
  },
  {
    "Article": "1409515",
    "Article Description": "KROON MILOLETTE MILD BALL KG",
    "PLU CODE": "4826",
    "UOM": "KG"
  },
  {
    "Article": "1409518",
    "Article Description": "KROON SMOKED CHEESE FINE HERBS KG",
    "PLU CODE": "4828",
    "UOM": "KG"
  },
  {
    "Article": "1409519",
    "Article Description": "KROON GOUDA CUMIN WHEEL KG",
    "PLU CODE": "4829",
    "UOM": "KG"
  },
  {
    "Article": "1409520",
    "Article Description": "EMBORG DANABLUE WHEEL KG",
    "PLU CODE": "4830",
    "UOM": "KG"
  },
  {
    "Article": "1409524",
    "Article Description": "KROON GOUDA WHEEL WITH MEDI HERBS KG",
    "PLU CODE": "4834",
    "UOM": "KG"
  },
  {
    "Article": "1409950",
    "Article Description": "ORANGE MANDARINS COMBO",
    "PLU CODE": "4840",
    "UOM": "PC"
  },
  {
    "Article": "1409951",
    "Article Description": "BLUEBERRIES COMBO IND 125*2 PACK",
    "PLU CODE": "4841",
    "UOM": "PC"
  },
  {
    "Article": "1409962",
    "Article Description": "PIRENE TURKEYÂ SANDWICH HAM KG",
    "PLU CODE": "4842",
    "UOM": "KG"
  },
  {
    "Article": "1409963",
    "Article Description": "PIRENE TURKEYÃƒÂ‚Ã‚Â MORTADELLA KG",
    "PLU CODE": "4843",
    "UOM": "KG"
  },
  {
    "Article": "1409964",
    "Article Description": "PIRENE TURKEYÂ MORTADELLA WITH OLIVES",
    "PLU CODE": "4844",
    "UOM": "KG"
  },
  {
    "Article": "1409965",
    "Article Description": "PIRENE TURKEYÃƒÂ‚Ã‚Â CHOPPED ROLL KG",
    "PLU CODE": "4845",
    "UOM": "KG"
  },
  {
    "Article": "1409966",
    "Article Description": "PIRENE SMOKEDÂ TURKEYBREAST AS KG",
    "PLU CODE": "4846",
    "UOM": "KG"
  },
  {
    "Article": "1410273",
    "Article Description": "LONGAN COMBO",
    "PLU CODE": "4847",
    "UOM": "PC"
  },
  {
    "Article": "1410381",
    "Article Description": "SUNDRIED TOMATOES IN OLIVE OIL",
    "PLU CODE": "4859",
    "UOM": "KG"
  },
  {
    "Article": "1411643",
    "Article Description": "ROCKIT APPLES PC",
    "PLU CODE": "4910",
    "UOM": "PC"
  },
  {
    "Article": "1411648",
    "Article Description": "HA Org. Grown Apples 500g",
    "PLU CODE": "4911",
    "UOM": "PC"
  },
  {
    "Article": "1412817",
    "Article Description": "PERSIMMON PACK",
    "PLU CODE": "4917",
    "UOM": "PC"
  },
  {
    "Article": "1413402",
    "Article Description": "FIORELLA DICED FROZEN PIZZA TOPPING KG",
    "PLU CODE": "5019",
    "UOM": "KG"
  },
  {
    "Article": "1413403",
    "Article Description": "FIORELLA CHEDDAR WHITE KG",
    "PLU CODE": "5020",
    "UOM": "KG"
  },
  {
    "Article": "1413404",
    "Article Description": "FIORELLA CHEDDAR YELLOW KG",
    "PLU CODE": "5021",
    "UOM": "KG"
  },
  {
    "Article": "1413405",
    "Article Description": "FIORELLA SHREDDED MOZZARELLA KG",
    "PLU CODE": "5022",
    "UOM": "KG"
  },
  {
    "Article": "1413406",
    "Article Description": "FIORELLA CHEESE SLICES KG",
    "PLU CODE": "5023",
    "UOM": "KG"
  },
  {
    "Article": "1413407",
    "Article Description": "FIORELLA MOZARELLA CUBES KG",
    "PLU CODE": "5024",
    "UOM": "KG"
  },
  {
    "Article": "1413408",
    "Article Description": "FIORELLA QUATRO FORMAGGI SHRED 4 KG",
    "PLU CODE": "5025",
    "UOM": "KG"
  },
  {
    "Article": "1413409",
    "Article Description": "FIORELLA SCAMORZA SMOKED KG",
    "PLU CODE": "5026",
    "UOM": "KG"
  },
  {
    "Article": "1413410",
    "Article Description": "FIORELLA BOCCONCINI FRESH KG",
    "PLU CODE": "5027",
    "UOM": "KG"
  },
  {
    "Article": "1413411",
    "Article Description": "FIORELLA MOZZARELLA BUFFALO FRESH KG",
    "PLU CODE": "5028",
    "UOM": "KG"
  },
  {
    "Article": "1413412",
    "Article Description": "FIORELLA PIZZA CHEESE MOZZ CHEDDAR KG",
    "PLU CODE": "5029",
    "UOM": "KG"
  },
  {
    "Article": "1413413",
    "Article Description": "FIORELLA FIORELLA CHEESE SAUCE KG",
    "PLU CODE": "5030",
    "UOM": "KG"
  },
  {
    "Article": "1413414",
    "Article Description": "FIORELLA MASCARPONE KG",
    "PLU CODE": "5031",
    "UOM": "KG"
  },
  {
    "Article": "1413415",
    "Article Description": "FIORELLA SOUR CREAM KG",
    "PLU CODE": "5032",
    "UOM": "KG"
  },
  {
    "Article": "1413416",
    "Article Description": "FIORELLA RICOTTA KG",
    "PLU CODE": "5033",
    "UOM": "KG"
  },
  {
    "Article": "1413580",
    "Article Description": "NUTORASÂ PANEERÂ COWÂ MILK KG",
    "PLU CODE": "5074",
    "UOM": "KG"
  },
  {
    "Article": "1413959",
    "Article Description": "PREMIUM HASS AVOCADO 1PC",
    "PLU CODE": "5144",
    "UOM": "PC"
  },
  {
    "Article": "1413961",
    "Article Description": "Blueberries 500gm Imp",
    "PLU CODE": "5146",
    "UOM": "PC"
  },
  {
    "Article": "1413965",
    "Article Description": "PITAYA YELLOW IMPORTED",
    "PLU CODE": "5150",
    "UOM": "PC"
  },
  {
    "Article": "1414097",
    "Article Description": "Lettuce Little Gem  Imp",
    "PLU CODE": "5282",
    "UOM": "PC"
  },
  {
    "Article": "1414290",
    "Article Description": "Cauliflower Orange Imp",
    "PLU CODE": "5304",
    "UOM": "KG"
  },
  {
    "Article": "1414295",
    "Article Description": "Cauliflower Violet Imp",
    "PLU CODE": "5309",
    "UOM": "KG"
  },
  {
    "Article": "1414319",
    "Article Description": "Tomatoes Wild Heirloom Mix Imp",
    "PLU CODE": "5333",
    "UOM": "KG"
  },
  {
    "Article": "1414321",
    "Article Description": "Tomatoes Cherry Vine Red Goledn Imp",
    "PLU CODE": "5335",
    "UOM": "KG"
  },
  {
    "Article": "1414326",
    "Article Description": "Potatoes Sweet Orange Imp",
    "PLU CODE": "5340",
    "UOM": "KG"
  },
  {
    "Article": "1414329",
    "Article Description": "Tomatoes Cherry Vine Yellow Imp",
    "PLU CODE": "5341",
    "UOM": "KG"
  },
  {
    "Article": "1414521",
    "Article Description": "MUSHROOM SHIMEJI WHITE",
    "PLU CODE": "5348",
    "UOM": "KG"
  },
  {
    "Article": "1414632",
    "Article Description": "HA D44GRANITE CHOPPING BOARD AG",
    "PLU CODE": "5365",
    "UOM": "PC"
  },
  {
    "Article": "1414633",
    "Article Description": "HA EMPTY BOTTLE AG",
    "PLU CODE": "5366",
    "UOM": "PC"
  },
  {
    "Article": "1414634",
    "Article Description": "HA STONE SPICE GRINDER BIG AG",
    "PLU CODE": "5367",
    "UOM": "PC"
  },
  {
    "Article": "1414635",
    "Article Description": "HA STONE SPICE GRINDER M AG",
    "PLU CODE": "5368",
    "UOM": "PC"
  },
  {
    "Article": "1414636",
    "Article Description": "HA STONE SPICE GRINDER SMALL AG",
    "PLU CODE": "5369",
    "UOM": "PC"
  },
  {
    "Article": "1414637",
    "Article Description": "HA WOODEN SPICE BOX AG",
    "PLU CODE": "5370",
    "UOM": "PC"
  },
  {
    "Article": "1414638",
    "Article Description": "HA ASAFETIDA HING AG",
    "PLU CODE": "5371",
    "UOM": "KG"
  },
  {
    "Article": "1414639",
    "Article Description": "HA ALL PURPOSE SEASONING AG",
    "PLU CODE": "5372",
    "UOM": "KG"
  },
  {
    "Article": "1414640",
    "Article Description": "HA ALL PURPOSE SEASONING AG KG",
    "PLU CODE": "5373",
    "UOM": "KG"
  },
  {
    "Article": "1414641",
    "Article Description": "HA ARABIC MASALA POWDER AG KG",
    "PLU CODE": "5374",
    "UOM": "KG"
  },
  {
    "Article": "1414642",
    "Article Description": "HA BENGALI FISH MASALA AG KG",
    "PLU CODE": "5375",
    "UOM": "KG"
  },
  {
    "Article": "1414643",
    "Article Description": "HA BIRYANI MASALA AG",
    "PLU CODE": "5376",
    "UOM": "KG"
  },
  {
    "Article": "1414644",
    "Article Description": "HA BIRYANI MASALA AG KG",
    "PLU CODE": "5377",
    "UOM": "KG"
  },
  {
    "Article": "1414645",
    "Article Description": "HA BLACK SALT CRYSTAL JAR 125G AG",
    "PLU CODE": "5378",
    "UOM": "PC"
  },
  {
    "Article": "1414646",
    "Article Description": "HA BLACK SESAME SEED AG",
    "PLU CODE": "5379",
    "UOM": "KG"
  },
  {
    "Article": "1414647",
    "Article Description": "HA CAJUN SPICE MIX AG KG",
    "PLU CODE": "5380",
    "UOM": "KG"
  },
  {
    "Article": "1414648",
    "Article Description": "HA CAYENNE PEPPER POWDER AG",
    "PLU CODE": "5381",
    "UOM": "KG"
  },
  {
    "Article": "1414649",
    "Article Description": "HA CHAAS MASALA RAITA MASALA AG KG",
    "PLU CODE": "5382",
    "UOM": "KG"
  },
  {
    "Article": "1414650",
    "Article Description": "HA CHAAT MASALA AG KG",
    "PLU CODE": "5383",
    "UOM": "KG"
  },
  {
    "Article": "1414651",
    "Article Description": "HA CHAI MASALA KG",
    "PLU CODE": "5384",
    "UOM": "KG"
  },
  {
    "Article": "1414652",
    "Article Description": "HA CHICKEN MASALA AG KG",
    "PLU CODE": "5385",
    "UOM": "KG"
  },
  {
    "Article": "1414653",
    "Article Description": "HA CHINESE 5 SPICE AG KG",
    "PLU CODE": "5386",
    "UOM": "KG"
  },
  {
    "Article": "1414654",
    "Article Description": "HA CHOLE MASALA AG",
    "PLU CODE": "5387",
    "UOM": "KG"
  },
  {
    "Article": "1414655",
    "Article Description": "HA CHOLE MASALA AG KG",
    "PLU CODE": "5388",
    "UOM": "KG"
  },
  {
    "Article": "1414656",
    "Article Description": "HA DAL TADKA MASALA AG",
    "PLU CODE": "5389",
    "UOM": "KG"
  },
  {
    "Article": "1414657",
    "Article Description": "HA DAL TADKA MASALA AG KG",
    "PLU CODE": "5390",
    "UOM": "KG"
  },
  {
    "Article": "1414658",
    "Article Description": "HA DETOX POWDER AG KG",
    "PLU CODE": "5391",
    "UOM": "KG"
  },
  {
    "Article": "1414659",
    "Article Description": "HA DHANSAK MASALA AG KG",
    "PLU CODE": "5392",
    "UOM": "KG"
  },
  {
    "Article": "1414660",
    "Article Description": "HA DHANSAK MASALA POWDER AG",
    "PLU CODE": "5393",
    "UOM": "KG"
  },
  {
    "Article": "1414661",
    "Article Description": "HA DRY PUDINA CHUTNEY AG KG",
    "PLU CODE": "5394",
    "UOM": "KG"
  },
  {
    "Article": "1414662",
    "Article Description": "HA EGG CURRY POWDER AG",
    "PLU CODE": "5395",
    "UOM": "KG"
  },
  {
    "Article": "1414663",
    "Article Description": "HA EGG CURRY POWDER AG KG",
    "PLU CODE": "5396",
    "UOM": "KG"
  },
  {
    "Article": "1414664",
    "Article Description": "HA FAJITA SPICE MIX AG",
    "PLU CODE": "5397",
    "UOM": "KG"
  },
  {
    "Article": "1414665",
    "Article Description": "HA FAJITA SPICE MIX AG KG",
    "PLU CODE": "5398",
    "UOM": "KG"
  },
  {
    "Article": "1414666",
    "Article Description": "HA FISH MASALA AG",
    "PLU CODE": "5399",
    "UOM": "KG"
  },
  {
    "Article": "1414667",
    "Article Description": "HA FISH MASALA AG KG",
    "PLU CODE": "5400",
    "UOM": "KG"
  },
  {
    "Article": "1414668",
    "Article Description": "HA GARAM MASALA AG KG",
    "PLU CODE": "5401",
    "UOM": "KG"
  },
  {
    "Article": "1414669",
    "Article Description": "HA GINGER SLICE AG",
    "PLU CODE": "5402",
    "UOM": "KG"
  },
  {
    "Article": "1414670",
    "Article Description": "HA GOAN FISH CURRY KG",
    "PLU CODE": "5403",
    "UOM": "KG"
  },
  {
    "Article": "1414671",
    "Article Description": "HA GREEN CHILI POWDER AG",
    "PLU CODE": "5404",
    "UOM": "KG"
  },
  {
    "Article": "1414672",
    "Article Description": "HA GS EXOTIC SALTS 50G AG",
    "PLU CODE": "5405",
    "UOM": "PC"
  },
  {
    "Article": "1414673",
    "Article Description": "HA GS EXOTIC SPICE BLENDS 50G AG",
    "PLU CODE": "5406",
    "UOM": "PC"
  },
  {
    "Article": "1414674",
    "Article Description": "HA GS OREGANO JAR 25G AG",
    "PLU CODE": "5407",
    "UOM": "PC"
  },
  {
    "Article": "1414675",
    "Article Description": "HA GS ORGANIC BLACK PEP CRUSHER JAR 55G",
    "PLU CODE": "5408",
    "UOM": "PC"
  },
  {
    "Article": "1414676",
    "Article Description": "HA GS ORGANIC CINNAMON QUILLS 50G AG",
    "PLU CODE": "5409",
    "UOM": "PC"
  },
  {
    "Article": "1414677",
    "Article Description": "HA GS ORGANIC GREEN PEP CRUSHER JAR 30G",
    "PLU CODE": "5410",
    "UOM": "PC"
  },
  {
    "Article": "1414678",
    "Article Description": "HA GS ORGANIC HONEY 100G AG",
    "PLU CODE": "5411",
    "UOM": "PC"
  },
  {
    "Article": "1414679",
    "Article Description": "HA GS ORGANIC WHITE PEP CRUSHER JAR 70G",
    "PLU CODE": "5412",
    "UOM": "PC"
  },
  {
    "Article": "1414680",
    "Article Description": "HA GS RAINBOW PEPPER CRUSYER JAR 50G AG",
    "PLU CODE": "5413",
    "UOM": "PC"
  },
  {
    "Article": "1414681",
    "Article Description": "HA GUJARATI UNDHIYO POWDER AG KG",
    "PLU CODE": "5414",
    "UOM": "KG"
  },
  {
    "Article": "1414682",
    "Article Description": "HA GUN POWDER MALGAPODI AG KG",
    "PLU CODE": "5415",
    "UOM": "KG"
  },
  {
    "Article": "1414683",
    "Article Description": "HA GUNTUR CHILI POWDER AG",
    "PLU CODE": "5416",
    "UOM": "KG"
  },
  {
    "Article": "1414684",
    "Article Description": "HA GUNTUR CHILI WHOLE AG",
    "PLU CODE": "5417",
    "UOM": "KG"
  },
  {
    "Article": "1414685",
    "Article Description": "HA HABISCUS DRY FLOWER AG",
    "PLU CODE": "5418",
    "UOM": "KG"
  },
  {
    "Article": "1414686",
    "Article Description": "HA HARISSA SPICE AG KG",
    "PLU CODE": "5419",
    "UOM": "KG"
  },
  {
    "Article": "1414687",
    "Article Description": "HA HOT PAPRIKA AG",
    "PLU CODE": "5420",
    "UOM": "KG"
  },
  {
    "Article": "1414688",
    "Article Description": "HA INDIAN BARBEQUE MASALA AG KG",
    "PLU CODE": "5421",
    "UOM": "KG"
  },
  {
    "Article": "1414689",
    "Article Description": "HA INDIAN CURRY POWDER AG",
    "PLU CODE": "5422",
    "UOM": "KG"
  },
  {
    "Article": "1414690",
    "Article Description": "HA INDIAN CURRY POWDER AG KG",
    "PLU CODE": "5423",
    "UOM": "KG"
  },
  {
    "Article": "1414691",
    "Article Description": "HA ITALIAN AGLIO OLIO AG",
    "PLU CODE": "5424",
    "UOM": "KG"
  },
  {
    "Article": "1414692",
    "Article Description": "HA ITALIAN AGLIO OLIO AG KG",
    "PLU CODE": "5425",
    "UOM": "KG"
  },
  {
    "Article": "1414693",
    "Article Description": "HA ITALIAN SEASONING AG KG",
    "PLU CODE": "5426",
    "UOM": "KG"
  },
  {
    "Article": "1414694",
    "Article Description": "HA JAPANESE CURRY POWDER AG KG",
    "PLU CODE": "5427",
    "UOM": "KG"
  },
  {
    "Article": "1414695",
    "Article Description": "HA KASHMIR MUTTON MASALA AG",
    "PLU CODE": "5428",
    "UOM": "KG"
  },
  {
    "Article": "1414696",
    "Article Description": "HA KASHMIRI CHILI WHOLE AG",
    "PLU CODE": "5429",
    "UOM": "KG"
  },
  {
    "Article": "1414697",
    "Article Description": "HA KASHMIRI MASALA AG KG",
    "PLU CODE": "5430",
    "UOM": "KG"
  },
  {
    "Article": "1414698",
    "Article Description": "HA KASHMIRI MUTTON MASALA AG KG",
    "PLU CODE": "5431",
    "UOM": "KG"
  },
  {
    "Article": "1414699",
    "Article Description": "HA KASHMIRI RED CHILI POWDER AG",
    "PLU CODE": "5432",
    "UOM": "KG"
  },
  {
    "Article": "1414700",
    "Article Description": "HA KASURI METHI AG",
    "PLU CODE": "5433",
    "UOM": "KG"
  },
  {
    "Article": "1414701",
    "Article Description": "HA KOLHAPURI MASALA AG KG",
    "PLU CODE": "5434",
    "UOM": "KG"
  },
  {
    "Article": "1414702",
    "Article Description": "HA LAVENDER AG",
    "PLU CODE": "5435",
    "UOM": "KG"
  },
  {
    "Article": "1414703",
    "Article Description": "HA MADRAS CURRY POWDER AG KG",
    "PLU CODE": "5436",
    "UOM": "KG"
  },
  {
    "Article": "1414704",
    "Article Description": "HA MAHARASHTRIAN GODA KALA MASALA AG",
    "PLU CODE": "5437",
    "UOM": "KG"
  },
  {
    "Article": "1414705",
    "Article Description": "HA MAHARASHTRIAN GODA MASLA KALA MASALA",
    "PLU CODE": "5438",
    "UOM": "KG"
  },
  {
    "Article": "1414706",
    "Article Description": "HA MALGAPODI AG",
    "PLU CODE": "5439",
    "UOM": "KG"
  },
  {
    "Article": "1414707",
    "Article Description": "HA MALVANI MASALA AG KG",
    "PLU CODE": "5440",
    "UOM": "KG"
  },
  {
    "Article": "1414708",
    "Article Description": "HA MANGOLIAN SPICE RUB AG KG",
    "PLU CODE": "5441",
    "UOM": "KG"
  },
  {
    "Article": "1414709",
    "Article Description": "HA MIX HERBS AG",
    "PLU CODE": "5442",
    "UOM": "KG"
  },
  {
    "Article": "1414710",
    "Article Description": "HA MIX HERBS AG KG",
    "PLU CODE": "5443",
    "UOM": "KG"
  },
  {
    "Article": "1414711",
    "Article Description": "HA MORINGA POWDER AG",
    "PLU CODE": "5444",
    "UOM": "KG"
  },
  {
    "Article": "1414712",
    "Article Description": "HA NATURAL ANARDANA AG",
    "PLU CODE": "5445",
    "UOM": "KG"
  },
  {
    "Article": "1414713",
    "Article Description": "HA NATURAL ROCK SALT AG",
    "PLU CODE": "5446",
    "UOM": "KG"
  },
  {
    "Article": "1414714",
    "Article Description": "HA ORG QUINTESSENTIAL GARAM MASALA AG",
    "PLU CODE": "5447",
    "UOM": "KG"
  },
  {
    "Article": "1414715",
    "Article Description": "HA ORGA RED CHILLI WHOLE BAGADHI AG",
    "PLU CODE": "5448",
    "UOM": "KG"
  },
  {
    "Article": "1414716",
    "Article Description": "HA ORGA RED CHILLI WHOLE MATHANYA AG",
    "PLU CODE": "5449",
    "UOM": "KG"
  },
  {
    "Article": "1414717",
    "Article Description": "HA ORGANIC ALL SPICE AG",
    "PLU CODE": "5450",
    "UOM": "KG"
  },
  {
    "Article": "1414718",
    "Article Description": "HA ORGANIC AMARANTH FLOUR AG",
    "PLU CODE": "5451",
    "UOM": "KG"
  },
  {
    "Article": "1414719",
    "Article Description": "HA ORGANIC AMARANTH WHOLE AG",
    "PLU CODE": "5452",
    "UOM": "KG"
  },
  {
    "Article": "1414720",
    "Article Description": "HA ORGANIC AMCHOOR POWDER AG",
    "PLU CODE": "5453",
    "UOM": "KG"
  },
  {
    "Article": "1414721",
    "Article Description": "HA ORGANIC BANGAL GRAM FLOUR AG",
    "PLU CODE": "5454",
    "UOM": "KG"
  },
  {
    "Article": "1414722",
    "Article Description": "HA ORGANIC BAR BE QUE AG",
    "PLU CODE": "5455",
    "UOM": "KG"
  },
  {
    "Article": "1414723",
    "Article Description": "HA ORGANIC BASIL AG",
    "PLU CODE": "5456",
    "UOM": "KG"
  },
  {
    "Article": "1414724",
    "Article Description": "HA ORGANIC BAY LEAF AG",
    "PLU CODE": "5457",
    "UOM": "KG"
  },
  {
    "Article": "1414725",
    "Article Description": "HA ORGANIC BHUT JOLOKIA SMOKE DRY AG",
    "PLU CODE": "5458",
    "UOM": "KG"
  },
  {
    "Article": "1414726",
    "Article Description": "HA ORGANIC BIG CARDAMOM AG",
    "PLU CODE": "5459",
    "UOM": "KG"
  },
  {
    "Article": "1414727",
    "Article Description": "HA ORGANIC BIRD EYES CHILLI AG",
    "PLU CODE": "5460",
    "UOM": "KG"
  },
  {
    "Article": "1414728",
    "Article Description": "HA ORGANIC BISHOPS WEED AJWAIN AG",
    "PLU CODE": "5461",
    "UOM": "KG"
  },
  {
    "Article": "1414729",
    "Article Description": "HA ORGANIC BLACK PEPPER POWDER AG",
    "PLU CODE": "5462",
    "UOM": "KG"
  },
  {
    "Article": "1414730",
    "Article Description": "HA ORGANIC BLACK PEPPER WHOLE AG",
    "PLU CODE": "5463",
    "UOM": "KG"
  },
  {
    "Article": "1414731",
    "Article Description": "HA ORGANIC BLCK PPPR CRSHD JAR 50G AG",
    "PLU CODE": "5464",
    "UOM": "PC"
  },
  {
    "Article": "1414732",
    "Article Description": "HA ORGANIC BROWN SUGAR AG",
    "PLU CODE": "5465",
    "UOM": "KG"
  },
  {
    "Article": "1414733",
    "Article Description": "HA ORGANIC BUCK WHEAT WHOLE KUTTU AG",
    "PLU CODE": "5466",
    "UOM": "KG"
  },
  {
    "Article": "1414734",
    "Article Description": "HA ORGANIC BUCKWHEAT FLOUR AG",
    "PLU CODE": "5467",
    "UOM": "KG"
  },
  {
    "Article": "1414735",
    "Article Description": "HA ORGANIC CHIA SEEDS AG",
    "PLU CODE": "5468",
    "UOM": "KG"
  },
  {
    "Article": "1414736",
    "Article Description": "HA ORGANIC CINNAMON BARK AG",
    "PLU CODE": "5469",
    "UOM": "KG"
  },
  {
    "Article": "1414737",
    "Article Description": "HA ORGANIC CINNAMON POWDER AG",
    "PLU CODE": "5470",
    "UOM": "KG"
  },
  {
    "Article": "1414738",
    "Article Description": "HA ORGANIC CINNAMON QUILLS AG",
    "PLU CODE": "5471",
    "UOM": "KG"
  },
  {
    "Article": "1414739",
    "Article Description": "HA ORGANIC CLOVE POWDER AG",
    "PLU CODE": "5472",
    "UOM": "KG"
  },
  {
    "Article": "1414740",
    "Article Description": "HA ORGANIC CLOVE WHOLE AG",
    "PLU CODE": "5473",
    "UOM": "KG"
  },
  {
    "Article": "1414741",
    "Article Description": "HA ORGANIC CORIANDER POWDER AG",
    "PLU CODE": "5474",
    "UOM": "KG"
  },
  {
    "Article": "1414742",
    "Article Description": "HA ORGANIC CORIANDER SEED AG",
    "PLU CODE": "5475",
    "UOM": "KG"
  },
  {
    "Article": "1414743",
    "Article Description": "HA ORGANIC CRUSHED MINT LEAVES AG",
    "PLU CODE": "5476",
    "UOM": "KG"
  },
  {
    "Article": "1414744",
    "Article Description": "HA ORGANIC CRUSHED OREGANO AG",
    "PLU CODE": "5477",
    "UOM": "KG"
  },
  {
    "Article": "1414745",
    "Article Description": "HA ORGANIC CUMIN POWDER AG",
    "PLU CODE": "5478",
    "UOM": "KG"
  },
  {
    "Article": "1414746",
    "Article Description": "HA ORGANIC CUMIN SEEDS AG",
    "PLU CODE": "5479",
    "UOM": "KG"
  },
  {
    "Article": "1414747",
    "Article Description": "HA ORGANIC CURRY LEAF AG",
    "PLU CODE": "5480",
    "UOM": "KG"
  },
  {
    "Article": "1414748",
    "Article Description": "HA ORGANIC CURRY LEAF POWDER AG",
    "PLU CODE": "5481",
    "UOM": "KG"
  },
  {
    "Article": "1414749",
    "Article Description": "HA ORGANIC DELHI CHAT MASALA AG",
    "PLU CODE": "5482",
    "UOM": "KG"
  },
  {
    "Article": "1414750",
    "Article Description": "HA ORGANIC FENNEL SEEDS AG",
    "PLU CODE": "5483",
    "UOM": "KG"
  },
  {
    "Article": "1414751",
    "Article Description": "HA ORGANIC FENUGREEK SEEDS AG",
    "PLU CODE": "5484",
    "UOM": "KG"
  },
  {
    "Article": "1414752",
    "Article Description": "HA ORGANIC FLAX SEEDS AG",
    "PLU CODE": "5485",
    "UOM": "KG"
  },
  {
    "Article": "1414753",
    "Article Description": "HA ORGANIC FOUR SPICE GIFT BOX AG",
    "PLU CODE": "5486",
    "UOM": "PC"
  },
  {
    "Article": "1414754",
    "Article Description": "HA ORGANIC GARLIC CHOPPED AG",
    "PLU CODE": "5487",
    "UOM": "KG"
  },
  {
    "Article": "1414755",
    "Article Description": "HA ORGANIC GARLIC POWDER AG",
    "PLU CODE": "5488",
    "UOM": "KG"
  },
  {
    "Article": "1414756",
    "Article Description": "HA ORGANIC GINGER POWDER AG",
    "PLU CODE": "5489",
    "UOM": "KG"
  },
  {
    "Article": "1414757",
    "Article Description": "HA ORGANIC GR PEPPER CRUSHR JAR 50G AG",
    "PLU CODE": "5490",
    "UOM": "PC"
  },
  {
    "Article": "1414758",
    "Article Description": "HA ORGANIC GREEN CARDAMOM POWDER AG",
    "PLU CODE": "5491",
    "UOM": "KG"
  },
  {
    "Article": "1414759",
    "Article Description": "HA ORGANIC GREEN CARDAMOM SEEDS AG",
    "PLU CODE": "5492",
    "UOM": "KG"
  },
  {
    "Article": "1414760",
    "Article Description": "HA ORGANIC GREEN CARDAMOM WHOLE AG",
    "PLU CODE": "5493",
    "UOM": "KG"
  },
  {
    "Article": "1414761",
    "Article Description": "HA ORGANIC GREEN PEPPERWHOLE AG",
    "PLU CODE": "5494",
    "UOM": "KG"
  },
  {
    "Article": "1414762",
    "Article Description": "HA ORGANIC GUACAMOLE AG",
    "PLU CODE": "5495",
    "UOM": "KG"
  },
  {
    "Article": "1414763",
    "Article Description": "HA ORGANIC JAGGERY POWDER AG",
    "PLU CODE": "5496",
    "UOM": "KG"
  },
  {
    "Article": "1414764",
    "Article Description": "HA ORGANIC LEMON GRASS AG",
    "PLU CODE": "5497",
    "UOM": "KG"
  },
  {
    "Article": "1414765",
    "Article Description": "HA ORGANIC LEMON PEEL CUT AG",
    "PLU CODE": "5498",
    "UOM": "KG"
  },
  {
    "Article": "1414766",
    "Article Description": "HA ORGANIC LICORICE POWDER AG",
    "PLU CODE": "5499",
    "UOM": "KG"
  },
  {
    "Article": "1414767",
    "Article Description": "HA ORGANIC LICORICE WHOLE AG",
    "PLU CODE": "5500",
    "UOM": "KG"
  },
  {
    "Article": "1414768",
    "Article Description": "HA ORGANIC LONG PEPPER WHOLE AG",
    "PLU CODE": "5501",
    "UOM": "KG"
  },
  {
    "Article": "1414769",
    "Article Description": "HA ORGANIC MACE WHOLE AG",
    "PLU CODE": "5502",
    "UOM": "KG"
  },
  {
    "Article": "1414770",
    "Article Description": "HA ORGANIC MIX PPPR CRSHD JAR 50G AG",
    "PLU CODE": "5503",
    "UOM": "PC"
  },
  {
    "Article": "1414771",
    "Article Description": "HA ORGANIC MULTIGRAIN FLOUR AG",
    "PLU CODE": "5504",
    "UOM": "KG"
  },
  {
    "Article": "1414772",
    "Article Description": "HA ORGANIC MUSTARD BLACK AG",
    "PLU CODE": "5505",
    "UOM": "KG"
  },
  {
    "Article": "1414773",
    "Article Description": "HA ORGANIC MUSTARD BROWN AG",
    "PLU CODE": "5506",
    "UOM": "KG"
  },
  {
    "Article": "1414774",
    "Article Description": "HA ORGANIC MUSTARD YELLOW AG",
    "PLU CODE": "5507",
    "UOM": "KG"
  },
  {
    "Article": "1414775",
    "Article Description": "HA ORGANIC NIGELLA SEEDS KALONJI AG",
    "PLU CODE": "5508",
    "UOM": "KG"
  },
  {
    "Article": "1414776",
    "Article Description": "HA ORGANIC NUTMEG POWDER AG",
    "PLU CODE": "5509",
    "UOM": "KG"
  },
  {
    "Article": "1414777",
    "Article Description": "HA ORGANIC NUTMEG WHOLE WO SHELL AG",
    "PLU CODE": "5510",
    "UOM": "KG"
  },
  {
    "Article": "1414778",
    "Article Description": "HA ORGANIC ONION FLAKES AG",
    "PLU CODE": "5511",
    "UOM": "KG"
  },
  {
    "Article": "1414779",
    "Article Description": "HA ORGANIC ONION POWDER AG",
    "PLU CODE": "5512",
    "UOM": "KG"
  },
  {
    "Article": "1414780",
    "Article Description": "HA ORGANIC ORANGE PEEL CUT AG",
    "PLU CODE": "5513",
    "UOM": "KG"
  },
  {
    "Article": "1414781",
    "Article Description": "HA ORGANIC PARSLEY AG",
    "PLU CODE": "5514",
    "UOM": "KG"
  },
  {
    "Article": "1414782",
    "Article Description": "HA ORGANIC PEARL MILLET FLOUR AG",
    "PLU CODE": "5515",
    "UOM": "KG"
  },
  {
    "Article": "1414783",
    "Article Description": "HA ORGANIC PEARL MILLET WHOLE BAJARA AG",
    "PLU CODE": "5516",
    "UOM": "KG"
  },
  {
    "Article": "1414784",
    "Article Description": "HA ORGANIC PERI PERI AG",
    "PLU CODE": "5517",
    "UOM": "KG"
  },
  {
    "Article": "1414785",
    "Article Description": "HA ORGANIC POPPY SEEDS AG",
    "PLU CODE": "5518",
    "UOM": "KG"
  },
  {
    "Article": "1414786",
    "Article Description": "HA ORGANIC QUINOA FLOUR AG",
    "PLU CODE": "5519",
    "UOM": "KG"
  },
  {
    "Article": "1414787",
    "Article Description": "HA ORGANIC QUINOA SEEDS AG",
    "PLU CODE": "5520",
    "UOM": "KG"
  },
  {
    "Article": "1414788",
    "Article Description": "HA ORGANIC RAGI FLOUR AG",
    "PLU CODE": "5521",
    "UOM": "KG"
  },
  {
    "Article": "1414789",
    "Article Description": "HA ORGANIC RAGI WHOLE AG",
    "PLU CODE": "5522",
    "UOM": "KG"
  },
  {
    "Article": "1414790",
    "Article Description": "HA ORGANIC RED CHILI FLAKES JAR 50G AG",
    "PLU CODE": "5523",
    "UOM": "PC"
  },
  {
    "Article": "1414791",
    "Article Description": "HA ORGANIC RED CHILI POWDER TEJA AG",
    "PLU CODE": "5524",
    "UOM": "KG"
  },
  {
    "Article": "1414792",
    "Article Description": "HA ORGANIC RED CHILLI FLAKES AG",
    "PLU CODE": "5525",
    "UOM": "KG"
  },
  {
    "Article": "1414793",
    "Article Description": "HA ORGANIC RED CHILLI POWDER AG",
    "PLU CODE": "5526",
    "UOM": "KG"
  },
  {
    "Article": "1414794",
    "Article Description": "HA ORGANIC RED CHILLI WHOLE TEJA AG",
    "PLU CODE": "5527",
    "UOM": "KG"
  },
  {
    "Article": "1414795",
    "Article Description": "HA ORGANIC REFRESHING CHAI MASALA AG",
    "PLU CODE": "5528",
    "UOM": "KG"
  },
  {
    "Article": "1414796",
    "Article Description": "HA ORGANIC ROSE PETALS AG",
    "PLU CODE": "5529",
    "UOM": "KG"
  },
  {
    "Article": "1414797",
    "Article Description": "HA ORGANIC ROSEMARY AG",
    "PLU CODE": "5530",
    "UOM": "KG"
  },
  {
    "Article": "1414798",
    "Article Description": "HA ORGANIC SAFFRON 1G AG",
    "PLU CODE": "5531",
    "UOM": "PC"
  },
  {
    "Article": "1414799",
    "Article Description": "HA ORGANIC SESAME NATURAL WHITE AG",
    "PLU CODE": "5532",
    "UOM": "KG"
  },
  {
    "Article": "1414800",
    "Article Description": "HA ORGANIC SHAHJEERA AG",
    "PLU CODE": "5533",
    "UOM": "KG"
  },
  {
    "Article": "1414801",
    "Article Description": "HA ORGANIC SICHUAN PEPPERCORN AG",
    "PLU CODE": "5534",
    "UOM": "KG"
  },
  {
    "Article": "1414802",
    "Article Description": "HA ORGANIC SORGHUM FLOUR AG",
    "PLU CODE": "5535",
    "UOM": "KG"
  },
  {
    "Article": "1414803",
    "Article Description": "HA ORGANIC SORGHUM WHOLE JAWAR AG",
    "PLU CODE": "5536",
    "UOM": "KG"
  },
  {
    "Article": "1414804",
    "Article Description": "HA ORGANIC SRILANKAN CINNAMON QUILLS AG",
    "PLU CODE": "5537",
    "UOM": "KG"
  },
  {
    "Article": "1414805",
    "Article Description": "HA ORGANIC STAR ANIS WHOLE AG",
    "PLU CODE": "5538",
    "UOM": "KG"
  },
  {
    "Article": "1414806",
    "Article Description": "HA ORGANIC SUMAC AG",
    "PLU CODE": "5539",
    "UOM": "KG"
  },
  {
    "Article": "1414807",
    "Article Description": "HA ORGANIC THYME AG",
    "PLU CODE": "5540",
    "UOM": "KG"
  },
  {
    "Article": "1414808",
    "Article Description": "HA ORGANIC TURMERIC FINGER AG",
    "PLU CODE": "5541",
    "UOM": "KG"
  },
  {
    "Article": "1414809",
    "Article Description": "HA ORGANIC TURMERIC POWDER AG",
    "PLU CODE": "5542",
    "UOM": "KG"
  },
  {
    "Article": "1414810",
    "Article Description": "HA ORGANIC WELLNESS TREAT AG",
    "PLU CODE": "5543",
    "UOM": "KG"
  },
  {
    "Article": "1414811",
    "Article Description": "HA ORGANIC WH PEPPER CRUSHR JAR 50G AG",
    "PLU CODE": "5544",
    "UOM": "PC"
  },
  {
    "Article": "1414812",
    "Article Description": "HA ORGANIC WHEAT FLOUR AG",
    "PLU CODE": "5545",
    "UOM": "KG"
  },
  {
    "Article": "1414813",
    "Article Description": "HA ORGANIC WHEATGRASS POWDER AG",
    "PLU CODE": "5546",
    "UOM": "KG"
  },
  {
    "Article": "1414814",
    "Article Description": "HA ORGANIC WHITE PEPPER POWDER AG",
    "PLU CODE": "5547",
    "UOM": "KG"
  },
  {
    "Article": "1414815",
    "Article Description": "HA ORGANIC WHITE PEPPER WHOLE AG",
    "PLU CODE": "5548",
    "UOM": "KG"
  },
  {
    "Article": "1414816",
    "Article Description": "HA PANI PURI MASALA AG KG",
    "PLU CODE": "5549",
    "UOM": "KG"
  },
  {
    "Article": "1414817",
    "Article Description": "HA PANI PURI POWDER AG",
    "PLU CODE": "5550",
    "UOM": "KG"
  },
  {
    "Article": "1414818",
    "Article Description": "HA PAV BHAJI MASALA AG",
    "PLU CODE": "5551",
    "UOM": "KG"
  },
  {
    "Article": "1414819",
    "Article Description": "HA PAV BHAJI MASALA AG KG",
    "PLU CODE": "5552",
    "UOM": "KG"
  },
  {
    "Article": "1414820",
    "Article Description": "HA PERI PERI POWDER AG KG",
    "PLU CODE": "5553",
    "UOM": "KG"
  },
  {
    "Article": "1414821",
    "Article Description": "HA PINK SALT CRYSTAL JAR 140G AG",
    "PLU CODE": "5554",
    "UOM": "PC"
  },
  {
    "Article": "1414822",
    "Article Description": "HA PIZZA SEASONING AG",
    "PLU CODE": "5555",
    "UOM": "KG"
  },
  {
    "Article": "1414823",
    "Article Description": "HA PIZZA SEASONING AG KG",
    "PLU CODE": "5556",
    "UOM": "KG"
  },
  {
    "Article": "1414824",
    "Article Description": "HA PUNJABI KADHI MASALA AG",
    "PLU CODE": "5557",
    "UOM": "KG"
  },
  {
    "Article": "1414825",
    "Article Description": "HA PUNJABI KADHI MASALA AG KG",
    "PLU CODE": "5558",
    "UOM": "KG"
  },
  {
    "Article": "1414826",
    "Article Description": "HA PUNJABI PICKLE MASALA AG",
    "PLU CODE": "5559",
    "UOM": "KG"
  },
  {
    "Article": "1414827",
    "Article Description": "HA PUNJABI PICKLE MASALA AG KG",
    "PLU CODE": "5560",
    "UOM": "KG"
  },
  {
    "Article": "1414828",
    "Article Description": "HA RAITA MASALA AG",
    "PLU CODE": "5561",
    "UOM": "KG"
  },
  {
    "Article": "1414829",
    "Article Description": "HA RAJMA MASALA AG",
    "PLU CODE": "5562",
    "UOM": "KG"
  },
  {
    "Article": "1414830",
    "Article Description": "HA RAJMA MASALA AG KG",
    "PLU CODE": "5563",
    "UOM": "KG"
  },
  {
    "Article": "1414831",
    "Article Description": "HA RAS EL HANOUT AG KG",
    "PLU CODE": "5564",
    "UOM": "KG"
  },
  {
    "Article": "1414832",
    "Article Description": "HA RASAM POWDER AG KG",
    "PLU CODE": "5565",
    "UOM": "KG"
  },
  {
    "Article": "1414833",
    "Article Description": "HA SAMBHAR MASALA AG",
    "PLU CODE": "5566",
    "UOM": "KG"
  },
  {
    "Article": "1414834",
    "Article Description": "HA SAMBHAR MASALA AG KG",
    "PLU CODE": "5567",
    "UOM": "KG"
  },
  {
    "Article": "1414835",
    "Article Description": "HA SAUDI BAHARAT AG KG",
    "PLU CODE": "5568",
    "UOM": "KG"
  },
  {
    "Article": "1414836",
    "Article Description": "HA SRILANKAN CURRY POWDER KG",
    "PLU CODE": "5569",
    "UOM": "KG"
  },
  {
    "Article": "1414837",
    "Article Description": "HA SUN DRIED TOMOTOS AG",
    "PLU CODE": "5570",
    "UOM": "KG"
  },
  {
    "Article": "1414838",
    "Article Description": "HA SWEET BASIL SEEDS SABJA SEEDS KG",
    "PLU CODE": "5571",
    "UOM": "KG"
  },
  {
    "Article": "1414839",
    "Article Description": "HA SWEET PAPRIKA AG",
    "PLU CODE": "5572",
    "UOM": "KG"
  },
  {
    "Article": "1414840",
    "Article Description": "HA TAMARIND POWDER AG",
    "PLU CODE": "5573",
    "UOM": "KG"
  },
  {
    "Article": "1414841",
    "Article Description": "HA TANDOORI MASALA AG",
    "PLU CODE": "5574",
    "UOM": "KG"
  },
  {
    "Article": "1414842",
    "Article Description": "HA TANDOORI MASALA AG KG",
    "PLU CODE": "5575",
    "UOM": "KG"
  },
  {
    "Article": "1414843",
    "Article Description": "HA THAI GREEN CURRY POWDER AG",
    "PLU CODE": "5576",
    "UOM": "KG"
  },
  {
    "Article": "1414844",
    "Article Description": "HA THAI GREEN CURRY POWDER AG KG",
    "PLU CODE": "5577",
    "UOM": "KG"
  },
  {
    "Article": "1414845",
    "Article Description": "HA THAI RED CURRY POWDER AG",
    "PLU CODE": "5578",
    "UOM": "KG"
  },
  {
    "Article": "1414846",
    "Article Description": "HA THAI RED CURRY POWDER AG KG",
    "PLU CODE": "5579",
    "UOM": "KG"
  },
  {
    "Article": "1414847",
    "Article Description": "HA THAI YELLOW CURRY POWDER AG",
    "PLU CODE": "5580",
    "UOM": "KG"
  },
  {
    "Article": "1414848",
    "Article Description": "HA THAI YELLOW CURRY POWDER AG KG",
    "PLU CODE": "5581",
    "UOM": "KG"
  },
  {
    "Article": "1414849",
    "Article Description": "HA TOMOTO POWDER AG",
    "PLU CODE": "5582",
    "UOM": "KG"
  },
  {
    "Article": "1414852",
    "Article Description": "HA VINDALOO AG KG",
    "PLU CODE": "5585",
    "UOM": "KG"
  },
  {
    "Article": "1414853",
    "Article Description": "HA YELLOW CHILI POWDER AG",
    "PLU CODE": "5586",
    "UOM": "KG"
  },
  {
    "Article": "1414854",
    "Article Description": "HA ZAATAR SPICE AG",
    "PLU CODE": "5587",
    "UOM": "KG"
  },
  {
    "Article": "1414855",
    "Article Description": "HA ZAATAR SPICE AG KG",
    "PLU CODE": "5588",
    "UOM": "KG"
  },
  {
    "Article": "1414856",
    "Article Description": "HA NK ORGANIC KOKAM KG",
    "PLU CODE": "5589",
    "UOM": "KG"
  },
  {
    "Article": "1414857",
    "Article Description": "HA NK BLACK STONE FLOWER KG",
    "PLU CODE": "5590",
    "UOM": "KG"
  },
  {
    "Article": "1414858",
    "Article Description": "HA NATURAL SPIRULINA POWDER AG",
    "PLU CODE": "5591",
    "UOM": "KG"
  },
  {
    "Article": "1414859",
    "Article Description": "HA ORGANIC HONEY 250G AG",
    "PLU CODE": "5592",
    "UOM": "PC"
  },
  {
    "Article": "1414860",
    "Article Description": "HA NAT HIMALAYA PINKSALT POWDER AG",
    "PLU CODE": "5593",
    "UOM": "KG"
  },
  {
    "Article": "1414861",
    "Article Description": "HA NATURAL BLACK SALT CRYSTAL AG",
    "PLU CODE": "5594",
    "UOM": "KG"
  },
  {
    "Article": "1414862",
    "Article Description": "HA NATURAL BLACK SALT POWDER AG",
    "PLU CODE": "5595",
    "UOM": "KG"
  },
  {
    "Article": "1414863",
    "Article Description": "HA NATURAL HIMALAYAN PINK SALT AG",
    "PLU CODE": "5596",
    "UOM": "KG"
  },
  {
    "Article": "1414864",
    "Article Description": "HA NATURAL HIMALAYAN PINK SALT SLAB AG",
    "PLU CODE": "5597",
    "UOM": "PC"
  },
  {
    "Article": "1414865",
    "Article Description": "HA NATURAL LAKE SALT CRYSTAL AG",
    "PLU CODE": "5598",
    "UOM": "KG"
  },
  {
    "Article": "1414866",
    "Article Description": "HA NATURAL LAKE SALT POWDER AG",
    "PLU CODE": "5599",
    "UOM": "KG"
  },
  {
    "Article": "1414867",
    "Article Description": "HA NATURAL ROCK SALT POWDER AG",
    "PLU CODE": "5600",
    "UOM": "KG"
  },
  {
    "Article": "1414868",
    "Article Description": "HA NATURAL SEA SALT CRYSTAL AG",
    "PLU CODE": "5601",
    "UOM": "KG"
  },
  {
    "Article": "1414869",
    "Article Description": "HA NATURAL SEA SALT POWDER AG",
    "PLU CODE": "5602",
    "UOM": "KG"
  },
  {
    "Article": "1414872",
    "Article Description": "HA DILL LEAVES",
    "PLU CODE": "5603",
    "UOM": "KG"
  },
  {
    "Article": "1414873",
    "Article Description": "HA AJWA DATES KG",
    "PLU CODE": "5604",
    "UOM": "KG"
  },
  {
    "Article": "1414876",
    "Article Description": "NC MORINGA LATTE MIX 100GM",
    "PLU CODE": "5605",
    "UOM": "PC"
  },
  {
    "Article": "1414877",
    "Article Description": "COHOMA ROASTED COFFEE ARABICA 100G",
    "PLU CODE": "5606",
    "UOM": "PC"
  },
  {
    "Article": "1414878",
    "Article Description": "COHOMA ROASTED COFFEE ARABICA 250G",
    "PLU CODE": "5607",
    "UOM": "PC"
  },
  {
    "Article": "1414879",
    "Article Description": "COHOMA ROASTED COFFEE ARABICA 500G",
    "PLU CODE": "5608",
    "UOM": "PC"
  },
  {
    "Article": "1414880",
    "Article Description": "COHOMA ROASTED COFFEE ARABICA 1KG",
    "PLU CODE": "5609",
    "UOM": "KG"
  },
  {
    "Article": "1414881",
    "Article Description": "COHOMA ROASTED COFFEE BOLD ARABICA 100G",
    "PLU CODE": "5610",
    "UOM": "PC"
  },
  {
    "Article": "1414882",
    "Article Description": "COHOMA ROASTED COFFEE BOLD ARABICA 250G",
    "PLU CODE": "5611",
    "UOM": "PC"
  },
  {
    "Article": "1414883",
    "Article Description": "COHOMA ROASTED COFFEE BOLD ARABICA 500G",
    "PLU CODE": "5612",
    "UOM": "PC"
  },
  {
    "Article": "1414884",
    "Article Description": "COHOMA ROASTED COFFEE BOLD ARABICA 1KG",
    "PLU CODE": "5613",
    "UOM": "KG"
  },
  {
    "Article": "1414885",
    "Article Description": "COHOMA ROASTD COFFEE INTENS ARABICA 100G",
    "PLU CODE": "5614",
    "UOM": "PC"
  },
  {
    "Article": "1414886",
    "Article Description": "COHOMA ROASTD COFFEE INTENS ARABICA 250G",
    "PLU CODE": "5615",
    "UOM": "PC"
  },
  {
    "Article": "1414887",
    "Article Description": "COHOMA ROASTD COFFEE INTENS ARABICA 500G",
    "PLU CODE": "5616",
    "UOM": "PC"
  },
  {
    "Article": "1414888",
    "Article Description": "COHOMA ROASTD COFFEE INTENS ARABICA 1KG",
    "PLU CODE": "5617",
    "UOM": "KG"
  },
  {
    "Article": "1414889",
    "Article Description": "COHOMA ROASTD COFFEE FRENCH VANILLA 100G",
    "PLU CODE": "5618",
    "UOM": "PC"
  },
  {
    "Article": "1414890",
    "Article Description": "COHOMA ROASTD COFFEE FRENCH VANILLA 250G",
    "PLU CODE": "5619",
    "UOM": "PC"
  },
  {
    "Article": "1414891",
    "Article Description": "COHOMA ROASTD COFFEE FRENCH VANILLA 500G",
    "PLU CODE": "5620",
    "UOM": "PC"
  },
  {
    "Article": "1414892",
    "Article Description": "COHOMA ROASTD COFFE FRENCH VANILLA 1KG",
    "PLU CODE": "5621",
    "UOM": "KG"
  },
  {
    "Article": "1414893",
    "Article Description": "COHOMA ROASTD COFFEE CINAMN HAZLNUT 100G",
    "PLU CODE": "5622",
    "UOM": "PC"
  },
  {
    "Article": "1414894",
    "Article Description": "COHOMA ROASTD COFFE CINNAMN HAZLNUT 250G",
    "PLU CODE": "5623",
    "UOM": "PC"
  },
  {
    "Article": "1414895",
    "Article Description": "COHOMA ROASTD COFFE CINNAMN HAZLNUT 500G",
    "PLU CODE": "5624",
    "UOM": "PC"
  },
  {
    "Article": "1414896",
    "Article Description": "COHOMA ROASTED COFFEE CINNAMN HAZLNT 1KG",
    "PLU CODE": "5625",
    "UOM": "KG"
  },
  {
    "Article": "1414897",
    "Article Description": "COHOMA INTRNATIONL COFFEE ETHIOPIAN 100G",
    "PLU CODE": "5626",
    "UOM": "PC"
  },
  {
    "Article": "1414898",
    "Article Description": "COHOMA INTRNATIONL COFFEE ETHIOPIAN 250G",
    "PLU CODE": "5627",
    "UOM": "PC"
  },
  {
    "Article": "1414899",
    "Article Description": "COHOMA INTRNATIONL COFFEE ETHIOPIAN 500G",
    "PLU CODE": "5628",
    "UOM": "PC"
  },
  {
    "Article": "1414900",
    "Article Description": "COHOMA INTERNATIONL COFFEE ETHIOPIAN 1KG",
    "PLU CODE": "5629",
    "UOM": "KG"
  },
  {
    "Article": "1414901",
    "Article Description": "COHOMA INTRNTL COFFEE COLMBIN DECAF 100G",
    "PLU CODE": "5630",
    "UOM": "PC"
  },
  {
    "Article": "1414902",
    "Article Description": "COHOMA INTRNTL COFFEECOLMBIAN DECAF 250G",
    "PLU CODE": "5631",
    "UOM": "PC"
  },
  {
    "Article": "1414903",
    "Article Description": "COHOMA INTRNTLCOFFEE COLMBIAN DECAF 500G",
    "PLU CODE": "5632",
    "UOM": "PC"
  },
  {
    "Article": "1414904",
    "Article Description": "COHOMA INTRNTL COFFEE COLMBIAN DECAF 1KG",
    "PLU CODE": "5633",
    "UOM": "PC"
  },
  {
    "Article": "1414905",
    "Article Description": "COHOMA POUR OVER CRYSTAL EYE DRIPPER",
    "PLU CODE": "5634",
    "UOM": "PC"
  },
  {
    "Article": "1414906",
    "Article Description": "COHMA POUR OVER PAPER FILTERS 50 PCS",
    "PLU CODE": "5635",
    "UOM": "PC"
  },
  {
    "Article": "1414907",
    "Article Description": "COHOMA FRENCH PRESS  U 450 ML",
    "PLU CODE": "5636",
    "UOM": "PC"
  },
  {
    "Article": "1414908",
    "Article Description": "COHOMA PURE BREW FILTER",
    "PLU CODE": "5637",
    "UOM": "PC"
  },
  {
    "Article": "1415139",
    "Article Description": "HA DRY ALOE VERA KG",
    "PLU CODE": "5656",
    "UOM": "KG"
  },
  {
    "Article": "1415140",
    "Article Description": "HA PINE NUT WHOLE KG",
    "PLU CODE": "5657",
    "UOM": "KG"
  },
  {
    "Article": "1415141",
    "Article Description": "HA ALMOND FLOUR KG",
    "PLU CODE": "5658",
    "UOM": "KG"
  },
  {
    "Article": "1415142",
    "Article Description": "HA TRAIL MIX BERRIES SEEDS KG",
    "PLU CODE": "5659",
    "UOM": "KG"
  },
  {
    "Article": "1415143",
    "Article Description": "HA TRAIL MIX NUTS KG",
    "PLU CODE": "5660",
    "UOM": "KG"
  },
  {
    "Article": "1415144",
    "Article Description": "HA TRAIL MIX FRUITS KG",
    "PLU CODE": "5661",
    "UOM": "KG"
  },
  {
    "Article": "1415145",
    "Article Description": "HA TRAIL MIX PARTY KG",
    "PLU CODE": "5662",
    "UOM": "KG"
  },
  {
    "Article": "1415146",
    "Article Description": "HA NK ANJIR KG",
    "PLU CODE": "5663",
    "UOM": "KG"
  },
  {
    "Article": "1415147",
    "Article Description": "HA NK ANJIR SPECIAL KG",
    "PLU CODE": "5664",
    "UOM": "KG"
  },
  {
    "Article": "1415148",
    "Article Description": "HA NK PINENUTS KG",
    "PLU CODE": "5665",
    "UOM": "KG"
  },
  {
    "Article": "1415149",
    "Article Description": "HA NK AKROD MAGAZ CALIFORNIA KG",
    "PLU CODE": "5666",
    "UOM": "KG"
  },
  {
    "Article": "1415150",
    "Article Description": "HA NK PRUNES KG",
    "PLU CODE": "5667",
    "UOM": "KG"
  },
  {
    "Article": "1415151",
    "Article Description": "HA NK PISTA SLICED KG",
    "PLU CODE": "5668",
    "UOM": "KG"
  },
  {
    "Article": "1415152",
    "Article Description": "HA NK PISTA MAGAJ KG",
    "PLU CODE": "5669",
    "UOM": "KG"
  },
  {
    "Article": "1415153",
    "Article Description": "HA NK PISTA IRANI KG",
    "PLU CODE": "5670",
    "UOM": "KG"
  },
  {
    "Article": "1415154",
    "Article Description": "HA NK PISTA AKBARI KG",
    "PLU CODE": "5671",
    "UOM": "KG"
  },
  {
    "Article": "1415155",
    "Article Description": "HA NK PINEAPPLE DRIED KG",
    "PLU CODE": "5672",
    "UOM": "KG"
  },
  {
    "Article": "1415156",
    "Article Description": "HA NK PECAN NUTS KG",
    "PLU CODE": "5673",
    "UOM": "KG"
  },
  {
    "Article": "1415157",
    "Article Description": "HA NK ORANGE PAPAD KG",
    "PLU CODE": "5674",
    "UOM": "KG"
  },
  {
    "Article": "1415158",
    "Article Description": "HA NK MIXED DRYFRUITS KG",
    "PLU CODE": "5675",
    "UOM": "KG"
  },
  {
    "Article": "1415159",
    "Article Description": "HA NK MIX SEEDS KG",
    "PLU CODE": "5676",
    "UOM": "KG"
  },
  {
    "Article": "1415160",
    "Article Description": "HA NK MANUKA SEEDLESS KG",
    "PLU CODE": "5677",
    "UOM": "KG"
  },
  {
    "Article": "1415161",
    "Article Description": "HA NK MANUKA SUPREME KG",
    "PLU CODE": "5678",
    "UOM": "KG"
  },
  {
    "Article": "1415162",
    "Article Description": "HA NK MANGO DRIED KG",
    "PLU CODE": "5679",
    "UOM": "KG"
  },
  {
    "Article": "1415163",
    "Article Description": "HA NK MAKHANA SALTED KG",
    "PLU CODE": "5680",
    "UOM": "KG"
  },
  {
    "Article": "1415164",
    "Article Description": "HA NK MAKHANA PERI PERI KG",
    "PLU CODE": "5681",
    "UOM": "KG"
  },
  {
    "Article": "1415165",
    "Article Description": "HA NK MAKHANA PEPPER KG",
    "PLU CODE": "5682",
    "UOM": "KG"
  },
  {
    "Article": "1415166",
    "Article Description": "HA NK MAKHANA MASALA KG",
    "PLU CODE": "5683",
    "UOM": "KG"
  },
  {
    "Article": "1415167",
    "Article Description": "HA NK MAKHANA KG",
    "PLU CODE": "5684",
    "UOM": "KG"
  },
  {
    "Article": "1415168",
    "Article Description": "HA NK MACADMIA NUTS KG",
    "PLU CODE": "5685",
    "UOM": "KG"
  },
  {
    "Article": "1415169",
    "Article Description": "HA NK KISHMISH SANDHUKHANI KG",
    "PLU CODE": "5686",
    "UOM": "KG"
  },
  {
    "Article": "1415170",
    "Article Description": "HA NK KISHMISH CHOCO KG",
    "PLU CODE": "5687",
    "UOM": "KG"
  },
  {
    "Article": "1415171",
    "Article Description": "HA NK KISHMISH AFGAN KG",
    "PLU CODE": "5688",
    "UOM": "KG"
  },
  {
    "Article": "1415172",
    "Article Description": "HA NK KISHMISH KG",
    "PLU CODE": "5689",
    "UOM": "KG"
  },
  {
    "Article": "1415173",
    "Article Description": "HA NK KHARIK SORI TUKDA KG",
    "PLU CODE": "5690",
    "UOM": "KG"
  },
  {
    "Article": "1415174",
    "Article Description": "HA NK KHARIK SORI KG",
    "PLU CODE": "5691",
    "UOM": "KG"
  },
  {
    "Article": "1415175",
    "Article Description": "HA NK KHARIK POWDER KG",
    "PLU CODE": "5692",
    "UOM": "KG"
  },
  {
    "Article": "1415176",
    "Article Description": "HA NK KHARIK KG",
    "PLU CODE": "5693",
    "UOM": "KG"
  },
  {
    "Article": "1415177",
    "Article Description": "HA NK KHARIK TUKDA KG",
    "PLU CODE": "5694",
    "UOM": "KG"
  },
  {
    "Article": "1415178",
    "Article Description": "HA NK KALINGAD MAGAJ KG",
    "PLU CODE": "5695",
    "UOM": "KG"
  },
  {
    "Article": "1415179",
    "Article Description": "HA NK KAJU SUPREME KG",
    "PLU CODE": "5696",
    "UOM": "KG"
  },
  {
    "Article": "1415180",
    "Article Description": "HA NK KAJU PUDINA KG",
    "PLU CODE": "5697",
    "UOM": "KG"
  },
  {
    "Article": "1415181",
    "Article Description": "HA NK KAJU PREMIUM KG",
    "PLU CODE": "5698",
    "UOM": "KG"
  },
  {
    "Article": "1415182",
    "Article Description": "HA NK KAJU PERI PERI KG",
    "PLU CODE": "5699",
    "UOM": "KG"
  },
  {
    "Article": "1415183",
    "Article Description": "HA NK KAJU PAKLI KG",
    "PLU CODE": "5700",
    "UOM": "KG"
  },
  {
    "Article": "1415184",
    "Article Description": "HA NK KAJU MASALA KG",
    "PLU CODE": "5701",
    "UOM": "KG"
  },
  {
    "Article": "1415185",
    "Article Description": "HA NK KAJU KHARA KG",
    "PLU CODE": "5702",
    "UOM": "KG"
  },
  {
    "Article": "1415186",
    "Article Description": "HA NK KAJU CLASSIC KG",
    "PLU CODE": "5703",
    "UOM": "KG"
  },
  {
    "Article": "1415187",
    "Article Description": "HA NK KAJU CHOCO KG",
    "PLU CODE": "5704",
    "UOM": "KG"
  },
  {
    "Article": "1415188",
    "Article Description": "HA NK KAJU CHEESE KG",
    "PLU CODE": "5705",
    "UOM": "KG"
  },
  {
    "Article": "1415189",
    "Article Description": "HA NK JARDALU SEEDLESS KG",
    "PLU CODE": "5706",
    "UOM": "KG"
  },
  {
    "Article": "1415190",
    "Article Description": "HA NK JARDALU KG",
    "PLU CODE": "5707",
    "UOM": "KG"
  },
  {
    "Article": "1415191",
    "Article Description": "HA NK HAZELNUTS KG",
    "PLU CODE": "5708",
    "UOM": "KG"
  },
  {
    "Article": "1415192",
    "Article Description": "HA NK GUZZI BERRIES KG",
    "PLU CODE": "5709",
    "UOM": "KG"
  },
  {
    "Article": "1415193",
    "Article Description": "HA NK GUAVA DRIED KG",
    "PLU CODE": "5710",
    "UOM": "KG"
  },
  {
    "Article": "1415194",
    "Article Description": "HA NK DRY GINGER KG",
    "PLU CODE": "5711",
    "UOM": "KG"
  },
  {
    "Article": "1415195",
    "Article Description": "HA NK DRY AWLA SUGARFREE KG",
    "PLU CODE": "5712",
    "UOM": "KG"
  },
  {
    "Article": "1415196",
    "Article Description": "HA NK DATES SEEDLESS RED KG",
    "PLU CODE": "5713",
    "UOM": "KG"
  },
  {
    "Article": "1415197",
    "Article Description": "HA NK DATES SEEDLESS BLACK KG",
    "PLU CODE": "5714",
    "UOM": "KG"
  },
  {
    "Article": "1415198",
    "Article Description": "HA NK DATES SAFAVI KG",
    "PLU CODE": "5715",
    "UOM": "KG"
  },
  {
    "Article": "1415199",
    "Article Description": "HA NK DATES OMAN KG",
    "PLU CODE": "5716",
    "UOM": "KG"
  },
  {
    "Article": "1415200",
    "Article Description": "HA NK DATES MARIYAM KG",
    "PLU CODE": "5717",
    "UOM": "KG"
  },
  {
    "Article": "1415201",
    "Article Description": "HA NK DATES JORDAN KG",
    "PLU CODE": "5718",
    "UOM": "KG"
  },
  {
    "Article": "1415202",
    "Article Description": "HA NK CRANBERRIES SLICED KG",
    "PLU CODE": "5719",
    "UOM": "KG"
  },
  {
    "Article": "1415203",
    "Article Description": "HA NK CRAN BERRIES KG",
    "PLU CODE": "5720",
    "UOM": "KG"
  },
  {
    "Article": "1415204",
    "Article Description": "HA NK DRIED CHERRY KG",
    "PLU CODE": "5721",
    "UOM": "KG"
  },
  {
    "Article": "1415205",
    "Article Description": "HA NK BRAZIL NUTS KG",
    "PLU CODE": "5722",
    "UOM": "KG"
  },
  {
    "Article": "1415206",
    "Article Description": "HA NK BLUE BERRIES KG",
    "PLU CODE": "5723",
    "UOM": "KG"
  },
  {
    "Article": "1415207",
    "Article Description": "HA NK BADAM SUPREME KG",
    "PLU CODE": "5724",
    "UOM": "KG"
  },
  {
    "Article": "1415208",
    "Article Description": "HA NK BADAM SLICED KG",
    "PLU CODE": "5725",
    "UOM": "KG"
  },
  {
    "Article": "1415209",
    "Article Description": "HA NK BADAM SALTED KG",
    "PLU CODE": "5726",
    "UOM": "KG"
  },
  {
    "Article": "1415210",
    "Article Description": "HA NK BADAM PLAIN ROASTED KG",
    "PLU CODE": "5727",
    "UOM": "KG"
  },
  {
    "Article": "1415211",
    "Article Description": "HA NK BADAM MAMRA SUPREME KG",
    "PLU CODE": "5728",
    "UOM": "KG"
  },
  {
    "Article": "1415212",
    "Article Description": "HA NK BADAM MAMRA PREMIUM KG",
    "PLU CODE": "5729",
    "UOM": "KG"
  },
  {
    "Article": "1415213",
    "Article Description": "HA NK BADAM COCKTAIL KG",
    "PLU CODE": "5730",
    "UOM": "KG"
  },
  {
    "Article": "1415214",
    "Article Description": "HA NK BADAM CHOCOLATE KG",
    "PLU CODE": "5731",
    "UOM": "KG"
  },
  {
    "Article": "1415215",
    "Article Description": "HA NK BADAM CARAMEL KG",
    "PLU CODE": "5732",
    "UOM": "KG"
  },
  {
    "Article": "1415216",
    "Article Description": "HA NK BADAM BARBEQUE KG",
    "PLU CODE": "5733",
    "UOM": "KG"
  },
  {
    "Article": "1415217",
    "Article Description": "HA NK AWLA CANDY KG",
    "PLU CODE": "5734",
    "UOM": "KG"
  },
  {
    "Article": "1415218",
    "Article Description": "HA NK ANJEER KHAJUR SF QUBES KG",
    "PLU CODE": "5735",
    "UOM": "KG"
  },
  {
    "Article": "1415219",
    "Article Description": "HA NK KISMIS ABJOSH KG",
    "PLU CODE": "5736",
    "UOM": "KG"
  },
  {
    "Article": "1415220",
    "Article Description": "HA NK APRICOT GOLDEN KG",
    "PLU CODE": "5737",
    "UOM": "KG"
  },
  {
    "Article": "1415221",
    "Article Description": "HA NK AKROD CALIFORNIA SHELL KG",
    "PLU CODE": "5738",
    "UOM": "KG"
  },
  {
    "Article": "1415222",
    "Article Description": "HA NK AKROD MAGAZ KASHMIR KG",
    "PLU CODE": "5739",
    "UOM": "KG"
  },
  {
    "Article": "1415223",
    "Article Description": "HA NK AKROD CHILLI KG",
    "PLU CODE": "5740",
    "UOM": "KG"
  },
  {
    "Article": "1415224",
    "Article Description": "HA NK AKROD CARAMEL KG",
    "PLU CODE": "5741",
    "UOM": "KG"
  },
  {
    "Article": "1415225",
    "Article Description": "HA NK AAM PAPAD KG",
    "PLU CODE": "5742",
    "UOM": "KG"
  },
  {
    "Article": "1415226",
    "Article Description": "HA NK SUNFLOWER SEEDS KG",
    "PLU CODE": "5743",
    "UOM": "KG"
  },
  {
    "Article": "1415227",
    "Article Description": "HA NK PUMPKIN SEEDS SALTED KG",
    "PLU CODE": "5744",
    "UOM": "KG"
  },
  {
    "Article": "1415228",
    "Article Description": "HA NK PUMPKIN SEEDS BARBRQUE KG",
    "PLU CODE": "5745",
    "UOM": "KG"
  },
  {
    "Article": "1415229",
    "Article Description": "HA NK PUMPKIN SEEDS KG",
    "PLU CODE": "5746",
    "UOM": "KG"
  },
  {
    "Article": "1415230",
    "Article Description": "HA NK MAKHANA CHEESE KG",
    "PLU CODE": "5747",
    "UOM": "KG"
  },
  {
    "Article": "1415231",
    "Article Description": "HA NK CHIA SEEDS KG",
    "PLU CODE": "5748",
    "UOM": "KG"
  },
  {
    "Article": "1415232",
    "Article Description": "HA NK CHAROLI KG",
    "PLU CODE": "5749",
    "UOM": "KG"
  },
  {
    "Article": "1415267",
    "Article Description": "Mahamango 1pc",
    "PLU CODE": "5750",
    "UOM": "PC"
  },
  {
    "Article": "1415451",
    "Article Description": "HA Organic Strawberries 200g",
    "PLU CODE": "5753",
    "UOM": "PC"
  },
  {
    "Article": "1415589",
    "Article Description": "Tomatoes Cherry  Mix",
    "PLU CODE": "5765",
    "UOM": "PC"
  },
  {
    "Article": "1415590",
    "Article Description": "Tomato Sun Peach",
    "PLU CODE": "5766",
    "UOM": "PC"
  },
  {
    "Article": "1415591",
    "Article Description": "Tomato Sungold",
    "PLU CODE": "5767",
    "UOM": "PC"
  },
  {
    "Article": "1415871",
    "Article Description": "EPIGAMIA REGULAR YOGURT N TOPPINGS",
    "PLU CODE": "5808",
    "UOM": "PC"
  },
  {
    "Article": "1415872",
    "Article Description": "EPIGAMIA COCONUT YOGURT N TOPPINGS",
    "PLU CODE": "5809",
    "UOM": "PC"
  },
  {
    "Article": "1415873",
    "Article Description": "EPIGAMIA REGULAR DIP N ROASTED CHIPS",
    "PLU CODE": "5810",
    "UOM": "PC"
  },
  {
    "Article": "1415874",
    "Article Description": "EPIGAMIA VEGAN PESTO DIP N ROASTED CHIPS",
    "PLU CODE": "5811",
    "UOM": "PC"
  },
  {
    "Article": "1415875",
    "Article Description": "EPIGAMIA SMOOTHIE BOWL",
    "PLU CODE": "5812",
    "UOM": "PC"
  },
  {
    "Article": "1415876",
    "Article Description": "EPIGAMIA VEGAN SMOOTHIE BOWL",
    "PLU CODE": "5813",
    "UOM": "PC"
  },
  {
    "Article": "1415877",
    "Article Description": "EPIGAMIA DRINKABLE SMOOTHIES",
    "PLU CODE": "5814",
    "UOM": "PC"
  },
  {
    "Article": "1415878",
    "Article Description": "EPIGAMIA DRINKABLE VEGAN SMOOTHIES",
    "PLU CODE": "5815",
    "UOM": "PC"
  },
  {
    "Article": "1415879",
    "Article Description": "EPIGAMIA FRESH WAFFLES WITH YOGURT",
    "PLU CODE": "5816",
    "UOM": "PC"
  },
  {
    "Article": "1416836",
    "Article Description": "EURO GOURMET SMOKED TURKEY BREAST 3KG",
    "PLU CODE": "5859",
    "UOM": "KG"
  },
  {
    "Article": "1416837",
    "Article Description": "EURO GOURMET SMOKED TURKEY HAM 2.5 KG",
    "PLU CODE": "5860",
    "UOM": "KG"
  },
  {
    "Article": "1416838",
    "Article Description": "EURO GOURMET TURKEY PASTRAMI 3KG",
    "PLU CODE": "5861",
    "UOM": "KG"
  },
  {
    "Article": "1416839",
    "Article Description": "EURO GOURMET TURKEY BACON SLICED 1KG",
    "PLU CODE": "5862",
    "UOM": "KG"
  },
  {
    "Article": "1416840",
    "Article Description": "CASAPONSA SERRANO HAM BLOCK 5KG",
    "PLU CODE": "5863",
    "UOM": "KG"
  },
  {
    "Article": "1416841",
    "Article Description": "ANGIOLETTO PROSCIUTTO CRUDO 6.5KG",
    "PLU CODE": "5864",
    "UOM": "KG"
  },
  {
    "Article": "1416842",
    "Article Description": "CAVOUR SAN DANIELLE HAM 8KG",
    "PLU CODE": "5865",
    "UOM": "KG"
  },
  {
    "Article": "1416843",
    "Article Description": "ANGIOLETTO PARMA HAM 8KG",
    "PLU CODE": "5866",
    "UOM": "KG"
  },
  {
    "Article": "1416844",
    "Article Description": "CAVOUR COPPA PARMA  1KG",
    "PLU CODE": "5867",
    "UOM": "KG"
  },
  {
    "Article": "1416845",
    "Article Description": "CAVOUR PORK MORTADELLA 4KG",
    "PLU CODE": "5868",
    "UOM": "KG"
  },
  {
    "Article": "1416846",
    "Article Description": "CAVOUR PORK MORTADELLA WITH PISTA 4KG",
    "PLU CODE": "5869",
    "UOM": "KG"
  },
  {
    "Article": "1416847",
    "Article Description": "CAVOUR COOKED HAM 4KG",
    "PLU CODE": "5870",
    "UOM": "KG"
  },
  {
    "Article": "1416848",
    "Article Description": "CAVOUR SALAMI MILANO 2.5KG",
    "PLU CODE": "5871",
    "UOM": "KG"
  },
  {
    "Article": "1416849",
    "Article Description": "CAVOUR SALAME NAPOLI 1.5KG",
    "PLU CODE": "5872",
    "UOM": "KG"
  },
  {
    "Article": "1416850",
    "Article Description": "CAVOUR SALAMI WITH BLACK TRUFFLE KG",
    "PLU CODE": "5873",
    "UOM": "KG"
  },
  {
    "Article": "1416851",
    "Article Description": "CAVOUR AS TRAY PARMA MILANO CHORIZO 100G",
    "PLU CODE": "5874",
    "UOM": "PC"
  },
  {
    "Article": "1416852",
    "Article Description": "D ARFIGRAL PORK GREEN PEPPER PATE 300G",
    "PLU CODE": "5875",
    "UOM": "PC"
  },
  {
    "Article": "1416853",
    "Article Description": "D ARFIGRAL PORK PISTACHIO PATE 300G",
    "PLU CODE": "5876",
    "UOM": "PC"
  },
  {
    "Article": "1416854",
    "Article Description": "D ARFIGRAL PORK HAZELNUT PATE 300G",
    "PLU CODE": "5877",
    "UOM": "PC"
  },
  {
    "Article": "1416855",
    "Article Description": "D ARFIGRAL PORK CRANBERRY PATE 300G",
    "PLU CODE": "5878",
    "UOM": "PC"
  },
  {
    "Article": "1416856",
    "Article Description": "D ARFIGRAL PORK DRIED TOMATOES PATE 300G",
    "PLU CODE": "5879",
    "UOM": "PC"
  },
  {
    "Article": "1416857",
    "Article Description": "D ARFIGRAL POR ALMOND AMARETTO PATE 300G",
    "PLU CODE": "5880",
    "UOM": "PC"
  },
  {
    "Article": "1416858",
    "Article Description": "D ARFIGRALPORK PATE WITH APPLES 300",
    "PLU CODE": "5881",
    "UOM": "PC"
  },
  {
    "Article": "1416859",
    "Article Description": "D ARFIGRAL PORK CITRUS PATE 300G",
    "PLU CODE": "5882",
    "UOM": "PC"
  },
  {
    "Article": "1416860",
    "Article Description": "D ARFIGRAL PORK MUSHROOM CREAM PATE 300G",
    "PLU CODE": "5883",
    "UOM": "PC"
  },
  {
    "Article": "1416861",
    "Article Description": "D ARFIGRAL PORK CHORIZO PATE 300G",
    "PLU CODE": "5884",
    "UOM": "PC"
  },
  {
    "Article": "1416862",
    "Article Description": "CAVOUR BAROLINO SALAMI W RED WINE 300G",
    "PLU CODE": "5885",
    "UOM": "PC"
  },
  {
    "Article": "1417591",
    "Article Description": "NBSIS CHICKEN BASIL PASTO MARINATION KG",
    "PLU CODE": "6072",
    "UOM": "KG"
  },
  {
    "Article": "1417592",
    "Article Description": "NBSIS CHICKEN CHAPALI MARINATION KG",
    "PLU CODE": "6073",
    "UOM": "KG"
  },
  {
    "Article": "1417593",
    "Article Description": "NBSIS CHICKEN LAHORI MARINATION KG",
    "PLU CODE": "6074",
    "UOM": "KG"
  },
  {
    "Article": "1417594",
    "Article Description": "NBSIS CHICKEN MALAI TIKKA MARINATION KG",
    "PLU CODE": "6075",
    "UOM": "KG"
  },
  {
    "Article": "1417595",
    "Article Description": "NBSIS CHICKEN MIX HERB MARINATION KG",
    "PLU CODE": "6076",
    "UOM": "KG"
  },
  {
    "Article": "1417596",
    "Article Description": "NBSIS CHICKEN TANDOORI MARINATION KG",
    "PLU CODE": "6077",
    "UOM": "KG"
  },
  {
    "Article": "1417597",
    "Article Description": "NBSIS AFGANI TANGDI MAR",
    "PLU CODE": "6078",
    "UOM": "KG"
  },
  {
    "Article": "1417598",
    "Article Description": "NBSIS AJWAIN FISH TIKKA MAR",
    "PLU CODE": "6079",
    "UOM": "KG"
  },
  {
    "Article": "1417599",
    "Article Description": "NBSIS ASIAN SEA BASS FILLETS KG",
    "PLU CODE": "6080",
    "UOM": "KG"
  },
  {
    "Article": "1417600",
    "Article Description": "NBSIS ATLANTIC SALMON FILLETS KG",
    "PLU CODE": "6081",
    "UOM": "KG"
  },
  {
    "Article": "1417602",
    "Article Description": "NBSIS ATLANTIC SALMON STEAKS KG",
    "PLU CODE": "6083",
    "UOM": "KG"
  },
  {
    "Article": "1417604",
    "Article Description": "NBSIS ATLANTIC SALMON WHOLE KG",
    "PLU CODE": "6085",
    "UOM": "KG"
  },
  {
    "Article": "1417605",
    "Article Description": "NBSIS BASA FILLET KG",
    "PLU CODE": "6086",
    "UOM": "KG"
  },
  {
    "Article": "1417607",
    "Article Description": "NBSIS BASA GOLDEN FRY MAR",
    "PLU CODE": "6088",
    "UOM": "KG"
  },
  {
    "Article": "1417608",
    "Article Description": "NBSIS BHETKI FISH",
    "PLU CODE": "6089",
    "UOM": "KG"
  },
  {
    "Article": "1417609",
    "Article Description": "NBSIS BLACK POMFRET KG",
    "PLU CODE": "6090",
    "UOM": "KG"
  },
  {
    "Article": "1417611",
    "Article Description": "NBSIS BOMBAY DUCK CLEANED KG",
    "PLU CODE": "6092",
    "UOM": "KG"
  },
  {
    "Article": "1417612",
    "Article Description": "NBSIS BOMBAY DUCK WHOLE KG",
    "PLU CODE": "6093",
    "UOM": "KG"
  },
  {
    "Article": "1417614",
    "Article Description": "NBSIS CATLA WHOLE KG",
    "PLU CODE": "6095",
    "UOM": "KG"
  },
  {
    "Article": "1417616",
    "Article Description": "NBSIS CHI HERBS GRILLS BREAST B/L",
    "PLU CODE": "6097",
    "UOM": "KG"
  },
  {
    "Article": "1417617",
    "Article Description": "NBSIS CHI SALAMI HERS CONDIMENTS",
    "PLU CODE": "6098",
    "UOM": "KG"
  },
  {
    "Article": "1417618",
    "Article Description": "NBSIS CHI TANDOORE HOT SPICY SEEKH KEB",
    "PLU CODE": "6099",
    "UOM": "KG"
  },
  {
    "Article": "1417619",
    "Article Description": "NBSIS CHIC SAUSAGE  HERBS CONDIMENTS",
    "PLU CODE": "6100",
    "UOM": "KG"
  },
  {
    "Article": "1417620",
    "Article Description": "NBSIS CHICKEN  SCHEZWAN MAR",
    "PLU CODE": "6101",
    "UOM": "KG"
  },
  {
    "Article": "1417621",
    "Article Description": "NBSIS CHICKEN BREAST BONE LESS KG",
    "PLU CODE": "6102",
    "UOM": "KG"
  },
  {
    "Article": "1417623",
    "Article Description": "NBSIS CHICKEN CHILLI RTE",
    "PLU CODE": "6104",
    "UOM": "KG"
  },
  {
    "Article": "1417624",
    "Article Description": "NBSIS CHICKEN CURRY CUT KG",
    "PLU CODE": "6105",
    "UOM": "KG"
  },
  {
    "Article": "1417626",
    "Article Description": "NBSIS CHICKEN DRUMSTICKS KG",
    "PLU CODE": "6107",
    "UOM": "KG"
  },
  {
    "Article": "1417627",
    "Article Description": "NBSIS CHICKEN DRUMSTICKS MAR",
    "PLU CODE": "6108",
    "UOM": "KG"
  },
  {
    "Article": "1417629",
    "Article Description": "NBSIS CHICKEN GRILL  RTE",
    "PLU CODE": "6110",
    "UOM": "KG"
  },
  {
    "Article": "1417630",
    "Article Description": "NBSIS CHICKEN JAMICAN MAR",
    "PLU CODE": "6111",
    "UOM": "KG"
  },
  {
    "Article": "1417631",
    "Article Description": "NBSIS CHICKEN KHEEMA KG",
    "PLU CODE": "6112",
    "UOM": "KG"
  },
  {
    "Article": "1417633",
    "Article Description": "NBSIS CHICKEN LEG BONELESS KG",
    "PLU CODE": "6114",
    "UOM": "KG"
  },
  {
    "Article": "1417634",
    "Article Description": "NBSIS CHICKEN LEG KG",
    "PLU CODE": "6115",
    "UOM": "KG"
  },
  {
    "Article": "1417635",
    "Article Description": "NBSIS CHICKEN LEG RTE",
    "PLU CODE": "6116",
    "UOM": "KG"
  },
  {
    "Article": "1417637",
    "Article Description": "NBSIS CHICKEN LIVER KG",
    "PLU CODE": "6118",
    "UOM": "KG"
  },
  {
    "Article": "1417639",
    "Article Description": "NBSIS CHICKEN LOLLYPOP MAR",
    "PLU CODE": "6120",
    "UOM": "KG"
  },
  {
    "Article": "1417640",
    "Article Description": "NBSIS CHICKEN MALAI SEEKH KEBAB",
    "PLU CODE": "6121",
    "UOM": "KG"
  },
  {
    "Article": "1417641",
    "Article Description": "NBSIS CHICKEN MALAI TIKKA RTE",
    "PLU CODE": "6122",
    "UOM": "KG"
  },
  {
    "Article": "1417642",
    "Article Description": "NBSIS CHICKEN MURG MALAI MAR",
    "PLU CODE": "6123",
    "UOM": "KG"
  },
  {
    "Article": "1417643",
    "Article Description": "NBSIS CHICKEN PEPPERY SALAMI CLASSIC",
    "PLU CODE": "6124",
    "UOM": "KG"
  },
  {
    "Article": "1417644",
    "Article Description": "NBSIS CHICKEN PERI PERI MAR",
    "PLU CODE": "6125",
    "UOM": "KG"
  },
  {
    "Article": "1417645",
    "Article Description": "NBSIS CHICKEN PUNJABI SEEKH KEBAB",
    "PLU CODE": "6126",
    "UOM": "KG"
  },
  {
    "Article": "1417646",
    "Article Description": "NBSIS CHICKEN RESHMI KEBAB",
    "PLU CODE": "6127",
    "UOM": "KG"
  },
  {
    "Article": "1417647",
    "Article Description": "NBSIS CHICKEN TANDOORI MAR",
    "PLU CODE": "6128",
    "UOM": "KG"
  },
  {
    "Article": "1417648",
    "Article Description": "NBSIS CHICKEN TIKKA RTE",
    "PLU CODE": "6129",
    "UOM": "KG"
  },
  {
    "Article": "1417649",
    "Article Description": "NBSIS CHICKEN WINGS KG",
    "PLU CODE": "6130",
    "UOM": "KG"
  },
  {
    "Article": "1417650",
    "Article Description": "NBSIS CHIKN TANDORI BIRD 700 - 900 GM",
    "PLU CODE": "6131",
    "UOM": "KG"
  },
  {
    "Article": "1417651",
    "Article Description": "NBSIS CHINESE POMFRET WHOLE KG",
    "PLU CODE": "6132",
    "UOM": "KG"
  },
  {
    "Article": "1417652",
    "Article Description": "NBSIS CRAB KG",
    "PLU CODE": "6133",
    "UOM": "KG"
  },
  {
    "Article": "1417653",
    "Article Description": "NBSIS FISH  SCHEZWAN MAR",
    "PLU CODE": "6134",
    "UOM": "KG"
  },
  {
    "Article": "1417654",
    "Article Description": "NBSIS FISH KOLIWADA MAR",
    "PLU CODE": "6135",
    "UOM": "KG"
  },
  {
    "Article": "1417655",
    "Article Description": "NBSIS FRESH ANCHOVY KG",
    "PLU CODE": "6136",
    "UOM": "KG"
  },
  {
    "Article": "1417656",
    "Article Description": "NBSIS FRESH COUNTRY CHICKEN KG",
    "PLU CODE": "6137",
    "UOM": "KG"
  },
  {
    "Article": "1417657",
    "Article Description": "NBSIS FRESH PEKIN DUCK KG",
    "PLU CODE": "6138",
    "UOM": "KG"
  },
  {
    "Article": "1417658",
    "Article Description": "NBSIS FRESH QUAIL KG",
    "PLU CODE": "6139",
    "UOM": "KG"
  },
  {
    "Article": "1417659",
    "Article Description": "NBSIS FRESH RABBIT KG",
    "PLU CODE": "6140",
    "UOM": "KG"
  },
  {
    "Article": "1417660",
    "Article Description": "NBSIS FRESH TURKEY KG",
    "PLU CODE": "6141",
    "UOM": "KG"
  },
  {
    "Article": "1417661",
    "Article Description": "NBSIS GHOL FILLETS KG",
    "PLU CODE": "6142",
    "UOM": "KG"
  },
  {
    "Article": "1417662",
    "Article Description": "NBSIS GHOL STEAKS KG",
    "PLU CODE": "6143",
    "UOM": "KG"
  },
  {
    "Article": "1417663",
    "Article Description": "NBSIS HALIBUT FISH",
    "PLU CODE": "6144",
    "UOM": "KG"
  },
  {
    "Article": "1417664",
    "Article Description": "NBSIS HILSA WHOLE KG",
    "PLU CODE": "6145",
    "UOM": "KG"
  },
  {
    "Article": "1417665",
    "Article Description": "NBSIS LADY FISH WHOLE CLEAN KG",
    "PLU CODE": "6146",
    "UOM": "KG"
  },
  {
    "Article": "1417666",
    "Article Description": "NBSIS LADY FISH WHOLE KG",
    "PLU CODE": "6147",
    "UOM": "KG"
  },
  {
    "Article": "1417667",
    "Article Description": "NBSIS LOBSTER MEDIUM KG",
    "PLU CODE": "6148",
    "UOM": "KG"
  },
  {
    "Article": "1417668",
    "Article Description": "NBSIS MACKEREL WHOLE KG",
    "PLU CODE": "6149",
    "UOM": "KG"
  },
  {
    "Article": "1417670",
    "Article Description": "NBSIS MUTTON BONELESS KG",
    "PLU CODE": "6151",
    "UOM": "KG"
  },
  {
    "Article": "1417672",
    "Article Description": "NBSIS MUTTON CHOPS KG",
    "PLU CODE": "6153",
    "UOM": "KG"
  },
  {
    "Article": "1417675",
    "Article Description": "NBSIS MUTTON CURRY CUT KG",
    "PLU CODE": "6156",
    "UOM": "KG"
  },
  {
    "Article": "1417676",
    "Article Description": "NBSIS MUTTON LEG WHOLE KG",
    "PLU CODE": "6157",
    "UOM": "KG"
  },
  {
    "Article": "1417677",
    "Article Description": "NBSIS MUTTON LIVER KG",
    "PLU CODE": "6158",
    "UOM": "KG"
  },
  {
    "Article": "1417679",
    "Article Description": "NBSIS MUTTON MINCE KG",
    "PLU CODE": "6160",
    "UOM": "KG"
  },
  {
    "Article": "1417681",
    "Article Description": "NBSIS MUTTON NALI NAHRI KG",
    "PLU CODE": "6162",
    "UOM": "KG"
  },
  {
    "Article": "1417682",
    "Article Description": "NBSIS MUTTON NALIHARI MAR",
    "PLU CODE": "6163",
    "UOM": "KG"
  },
  {
    "Article": "1417683",
    "Article Description": "NBSIS MUTTON PAYA PC",
    "PLU CODE": "6164",
    "UOM": "PC"
  },
  {
    "Article": "1417684",
    "Article Description": "NBSIS MUTTON PUNJABI SEEKH KEBAB",
    "PLU CODE": "6165",
    "UOM": "KG"
  },
  {
    "Article": "1417685",
    "Article Description": "NBSIS MUTTON SEEKH KEBAB MAR",
    "PLU CODE": "6166",
    "UOM": "KG"
  },
  {
    "Article": "1417686",
    "Article Description": "NBSIS MUTTON SHAMMI KEBAB MAR",
    "PLU CODE": "6167",
    "UOM": "KG"
  },
  {
    "Article": "1417687",
    "Article Description": "NBSIS MUTTON SHOULDER WHOLE KG",
    "PLU CODE": "6168",
    "UOM": "KG"
  },
  {
    "Article": "1417688",
    "Article Description": "NBSIS MUTTON SOUP BONE",
    "PLU CODE": "6169",
    "UOM": "KG"
  },
  {
    "Article": "1417689",
    "Article Description": "NBSIS OCTOPUS",
    "PLU CODE": "6170",
    "UOM": "KG"
  },
  {
    "Article": "1417690",
    "Article Description": "NBSIS PEELED N DEVEINED LARGE KG",
    "PLU CODE": "6171",
    "UOM": "KG"
  },
  {
    "Article": "1417692",
    "Article Description": "NBSIS PEELED N DEVEINED MEDIUM KG",
    "PLU CODE": "6173",
    "UOM": "KG"
  },
  {
    "Article": "1417694",
    "Article Description": "NBSIS PEELED N DEVEINED SMALL KG",
    "PLU CODE": "6175",
    "UOM": "KG"
  },
  {
    "Article": "1417695",
    "Article Description": "NBSIS POMFRET MAR",
    "PLU CODE": "6176",
    "UOM": "KG"
  },
  {
    "Article": "1417696",
    "Article Description": "NBSIS PRAWNS KOLIWADA MAR",
    "PLU CODE": "6177",
    "UOM": "KG"
  },
  {
    "Article": "1417697",
    "Article Description": "NBSIS RAWAS FILLETS KG",
    "PLU CODE": "6178",
    "UOM": "KG"
  },
  {
    "Article": "1417699",
    "Article Description": "NBSIS RAWAS MAR",
    "PLU CODE": "6180",
    "UOM": "KG"
  },
  {
    "Article": "1417700",
    "Article Description": "NBSIS RAWAS SMALL WHOLE KG",
    "PLU CODE": "6181",
    "UOM": "KG"
  },
  {
    "Article": "1417701",
    "Article Description": "NBSIS RAWAS STEAKS KG",
    "PLU CODE": "6182",
    "UOM": "KG"
  },
  {
    "Article": "1417703",
    "Article Description": "NBSIS RED SNAPPER FILLETS KG",
    "PLU CODE": "6184",
    "UOM": "KG"
  },
  {
    "Article": "1417704",
    "Article Description": "NBSIS RED SNAPPER STEAKS KG",
    "PLU CODE": "6185",
    "UOM": "KG"
  },
  {
    "Article": "1417705",
    "Article Description": "NBSIS RED SNAPPER WHOLE KG",
    "PLU CODE": "6186",
    "UOM": "KG"
  },
  {
    "Article": "1417706",
    "Article Description": "NBSIS RIVER SOLE WHOLE",
    "PLU CODE": "6187",
    "UOM": "KG"
  },
  {
    "Article": "1417707",
    "Article Description": "NBSIS RIVER SOLO FILLET",
    "PLU CODE": "6188",
    "UOM": "KG"
  },
  {
    "Article": "1417708",
    "Article Description": "NBSIS ROHU STEAKS KG",
    "PLU CODE": "6189",
    "UOM": "KG"
  },
  {
    "Article": "1417710",
    "Article Description": "NBSIS ROHU WHOLE KG",
    "PLU CODE": "6191",
    "UOM": "KG"
  },
  {
    "Article": "1417712",
    "Article Description": "NBSIS ROOPCHAND WHOLE KG",
    "PLU CODE": "6193",
    "UOM": "KG"
  },
  {
    "Article": "1417713",
    "Article Description": "NBSIS SARDINE WHOLE KG",
    "PLU CODE": "6194",
    "UOM": "KG"
  },
  {
    "Article": "1417714",
    "Article Description": "NBSIS SEA BASS STEAKS KG",
    "PLU CODE": "6195",
    "UOM": "KG"
  },
  {
    "Article": "1417715",
    "Article Description": "NBSIS SEABASS WHOLE KG",
    "PLU CODE": "6196",
    "UOM": "KG"
  },
  {
    "Article": "1417716",
    "Article Description": "NBSIS SHARK WHOLE KG",
    "PLU CODE": "6197",
    "UOM": "KG"
  },
  {
    "Article": "1417717",
    "Article Description": "NBSIS SINGHARA FILLET",
    "PLU CODE": "6198",
    "UOM": "KG"
  },
  {
    "Article": "1417718",
    "Article Description": "NBSIS SINGHARA FISH",
    "PLU CODE": "6199",
    "UOM": "KG"
  },
  {
    "Article": "1417719",
    "Article Description": "NBSIS SQUID WHOLE CLEAN KG",
    "PLU CODE": "6200",
    "UOM": "KG"
  },
  {
    "Article": "1417720",
    "Article Description": "NBSIS SQUID WHOLE KG",
    "PLU CODE": "6201",
    "UOM": "KG"
  },
  {
    "Article": "1417721",
    "Article Description": "NBSIS SURMAI FILLET KG",
    "PLU CODE": "6202",
    "UOM": "KG"
  },
  {
    "Article": "1417723",
    "Article Description": "NBSIS SURMAI MAR",
    "PLU CODE": "6204",
    "UOM": "KG"
  },
  {
    "Article": "1417724",
    "Article Description": "NBSIS SURMAI SMALL WHOLE KG",
    "PLU CODE": "6205",
    "UOM": "KG"
  },
  {
    "Article": "1417725",
    "Article Description": "NBSIS SURMAI STEAKS KG",
    "PLU CODE": "6206",
    "UOM": "KG"
  },
  {
    "Article": "1417727",
    "Article Description": "NBSIS TIGER PRAWNS 10 COUNT KG",
    "PLU CODE": "6208",
    "UOM": "KG"
  },
  {
    "Article": "1417728",
    "Article Description": "NBSIS TIGER PRAWNS 20 COUNT KG",
    "PLU CODE": "6209",
    "UOM": "KG"
  },
  {
    "Article": "1417729",
    "Article Description": "NBSIS TIGER PRAWNS 30 COUNT KG",
    "PLU CODE": "6210",
    "UOM": "KG"
  },
  {
    "Article": "1417730",
    "Article Description": "NBSIS TIGER PRAWNS 40 COUNT KG",
    "PLU CODE": "6211",
    "UOM": "KG"
  },
  {
    "Article": "1417731",
    "Article Description": "NBSIS TILAPIA FILLETS KG",
    "PLU CODE": "6212",
    "UOM": "KG"
  },
  {
    "Article": "1417732",
    "Article Description": "NBSIS TILAPIA WHOLE KG",
    "PLU CODE": "6213",
    "UOM": "KG"
  },
  {
    "Article": "1417733",
    "Article Description": "NBSIS TUNA WHOLE KG",
    "PLU CODE": "6214",
    "UOM": "KG"
  },
  {
    "Article": "1417735",
    "Article Description": "NBSIS WHITE POMFRET EXTRA LARGE KG",
    "PLU CODE": "6216",
    "UOM": "KG"
  },
  {
    "Article": "1417736",
    "Article Description": "NBSIS WHITE POMFRET LARGE KG",
    "PLU CODE": "6217",
    "UOM": "KG"
  },
  {
    "Article": "1417737",
    "Article Description": "NBSIS WHITE POMFRET MEDIUM KG",
    "PLU CODE": "6218",
    "UOM": "KG"
  },
  {
    "Article": "1417739",
    "Article Description": "NBSIS WHITE POMFRET SMALL KG",
    "PLU CODE": "6220",
    "UOM": "KG"
  },
  {
    "Article": "1417740",
    "Article Description": "NBSIS WHITE POMFRET SUPER LARGE KG",
    "PLU CODE": "6221",
    "UOM": "KG"
  },
  {
    "Article": "1417741",
    "Article Description": "NBSIS WHITE PRAWNS LARGE KG",
    "PLU CODE": "6222",
    "UOM": "KG"
  },
  {
    "Article": "1417742",
    "Article Description": "NBSIS WHITE PRAWNS SMALL KG",
    "PLU CODE": "6223",
    "UOM": "KG"
  },
  {
    "Article": "1417744",
    "Article Description": "NBSIS WHOLE CHICKEN SKIN LESS KG",
    "PLU CODE": "6225",
    "UOM": "KG"
  },
  {
    "Article": "1417745",
    "Article Description": "NBSIS WHOLE CHICKEN WITH SKIN KG",
    "PLU CODE": "6226",
    "UOM": "KG"
  },
  {
    "Article": "1418129",
    "Article Description": "TBB ASSORTED BAKLAVA BOX 250G",
    "PLU CODE": "6358",
    "UOM": "PC"
  },
  {
    "Article": "1418130",
    "Article Description": "TBB ASSORTED BAKLAVA BOX 500G",
    "PLU CODE": "6359",
    "UOM": "PC"
  },
  {
    "Article": "1418131",
    "Article Description": "TBB ASSORTED BAKLAVA BOX 750G",
    "PLU CODE": "6360",
    "UOM": "PC"
  },
  {
    "Article": "1418132",
    "Article Description": "TBB REGALIA GB WITH ASSORTED BAKLAVAS",
    "PLU CODE": "6361",
    "UOM": "PC"
  },
  {
    "Article": "1418133",
    "Article Description": "TBB ALMOND TART BAKLAVA",
    "PLU CODE": "6362",
    "UOM": "KG"
  },
  {
    "Article": "1418134",
    "Article Description": "TBB CASHEW SQUARE BAKLAVA",
    "PLU CODE": "6363",
    "UOM": "KG"
  },
  {
    "Article": "1418135",
    "Article Description": "TBB CLASSIC PISTACHIO BAKLAVA",
    "PLU CODE": "6364",
    "UOM": "KG"
  },
  {
    "Article": "1418136",
    "Article Description": "TBB MIXED TART BAKLAVA",
    "PLU CODE": "6365",
    "UOM": "KG"
  },
  {
    "Article": "1418137",
    "Article Description": "TBB CASHEW TART BAKLAVA",
    "PLU CODE": "6366",
    "UOM": "KG"
  },
  {
    "Article": "1418138",
    "Article Description": "TBB FINGER BAKLAVA",
    "PLU CODE": "6367",
    "UOM": "KG"
  },
  {
    "Article": "1418139",
    "Article Description": "TBB PISTACHIO SQUARE BAKLAVA",
    "PLU CODE": "6368",
    "UOM": "KG"
  },
  {
    "Article": "1418140",
    "Article Description": "TBB PYRAMID BAKLAVA",
    "PLU CODE": "6369",
    "UOM": "KG"
  },
  {
    "Article": "1418141",
    "Article Description": "TBB PISTACHIO TART BAKLAVA",
    "PLU CODE": "6370",
    "UOM": "KG"
  },
  {
    "Article": "1418142",
    "Article Description": "TBB CHOCOLATE SQUARE BAKLAVA",
    "PLU CODE": "6371",
    "UOM": "KG"
  },
  {
    "Article": "1418143",
    "Article Description": "TBB RABRI MEDJOOL DATES 25G",
    "PLU CODE": "6372",
    "UOM": "PC"
  },
  {
    "Article": "1418144",
    "Article Description": "TBB GULKAND MEDJOOL DATES 25G",
    "PLU CODE": "6373",
    "UOM": "PC"
  },
  {
    "Article": "1418145",
    "Article Description": "TBB MANGO MEDJOOL DATES 25G",
    "PLU CODE": "6374",
    "UOM": "PC"
  },
  {
    "Article": "1418146",
    "Article Description": "TBB COFFEE MEDJOOL DATES 25G",
    "PLU CODE": "6375",
    "UOM": "PC"
  },
  {
    "Article": "1418147",
    "Article Description": "TBB CASHEW MEDJOOL DATES 25G",
    "PLU CODE": "6376",
    "UOM": "PC"
  },
  {
    "Article": "1418148",
    "Article Description": "TBB PISTACHIO MEDJOOL DATES 25G",
    "PLU CODE": "6377",
    "UOM": "PC"
  },
  {
    "Article": "1418149",
    "Article Description": "TBB ALMOND MEDJOOL DATES 25G",
    "PLU CODE": "6378",
    "UOM": "PC"
  },
  {
    "Article": "1418150",
    "Article Description": "TBB WALNUT MEDJOOL DATES 25G",
    "PLU CODE": "6379",
    "UOM": "PC"
  },
  {
    "Article": "1418151",
    "Article Description": "TBB BURMA PISTACHIO BAKLAVA",
    "PLU CODE": "6380",
    "UOM": "PC"
  },
  {
    "Article": "1418152",
    "Article Description": "TBB ALMOND MILK MAID KUNAFA",
    "PLU CODE": "6381",
    "UOM": "PC"
  },
  {
    "Article": "1418153",
    "Article Description": "TBB CASHEW KUNAFA",
    "PLU CODE": "6382",
    "UOM": "PC"
  },
  {
    "Article": "1418154",
    "Article Description": "TBB PISTA KUNAFA",
    "PLU CODE": "6383",
    "UOM": "PC"
  },
  {
    "Article": "1418155",
    "Article Description": "TBB BURMA CASHEW BAKLAVA",
    "PLU CODE": "6384",
    "UOM": "PC"
  },
  {
    "Article": "1418156",
    "Article Description": "TBB ANKARA DOLMA BAKLAVA",
    "PLU CODE": "6385",
    "UOM": "PC"
  },
  {
    "Article": "1418157",
    "Article Description": "TBB PISTA ROLL BAKLAVA",
    "PLU CODE": "6386",
    "UOM": "PC"
  },
  {
    "Article": "1418158",
    "Article Description": "TBB PISTA RING BAKLAVA",
    "PLU CODE": "6387",
    "UOM": "PC"
  },
  {
    "Article": "1418159",
    "Article Description": "TBB CHOCOLATE DIAMOND BAKLAVA",
    "PLU CODE": "6388",
    "UOM": "PC"
  },
  {
    "Article": "1418160",
    "Article Description": "TBB CHOCOLATE RING BAKLAVA",
    "PLU CODE": "6389",
    "UOM": "PC"
  },
  {
    "Article": "1418161",
    "Article Description": "TBB CHOCOLATE FINGER BAKLAVA",
    "PLU CODE": "6390",
    "UOM": "PC"
  },
  {
    "Article": "1418162",
    "Article Description": "TBB CLASSIC WALNUT BAKLAVA",
    "PLU CODE": "6391",
    "UOM": "PC"
  },
  {
    "Article": "1418163",
    "Article Description": "TBB WALNUT KUNAFA",
    "PLU CODE": "6392",
    "UOM": "PC"
  },
  {
    "Article": "1418239",
    "Article Description": "EDIBLE FLOWER MIX",
    "PLU CODE": "6411",
    "UOM": "PC"
  },
  {
    "Article": "1418298",
    "Article Description": "BABY SPINACH 100G",
    "PLU CODE": "6470",
    "UOM": "PC"
  },
  {
    "Article": "1418340",
    "Article Description": "MUSKMELON STRIPED",
    "PLU CODE": "6498",
    "UOM": "PC"
  },
  {
    "Article": "1418343",
    "Article Description": "SUN MELON",
    "PLU CODE": "6499",
    "UOM": "PC"
  },
  {
    "Article": "1418666",
    "Article Description": "HERBS POT OREGANO",
    "PLU CODE": "6580",
    "UOM": "PC"
  },
  {
    "Article": "1418667",
    "Article Description": "HERBS POT PARSLEY",
    "PLU CODE": "6581",
    "UOM": "PC"
  },
  {
    "Article": "1418670",
    "Article Description": "HERBS POT THYME",
    "PLU CODE": "6584",
    "UOM": "PC"
  },
  {
    "Article": "1418671",
    "Article Description": "HERBS POT ROSEMARRY",
    "PLU CODE": "6585",
    "UOM": "PC"
  },
  {
    "Article": "1418694",
    "Article Description": "HERBS POT SAGE",
    "PLU CODE": "6607",
    "UOM": "PC"
  },
  {
    "Article": "1418740",
    "Article Description": "HERBS POT ITALIAN BASIL",
    "PLU CODE": "6630",
    "UOM": "PC"
  },
  {
    "Article": "1418741",
    "Article Description": "HERBS POT WHEAT GRASS",
    "PLU CODE": "6631",
    "UOM": "PC"
  },
  {
    "Article": "1418834",
    "Article Description": "TEA CULTURE SOOTHING AMBER KG",
    "PLU CODE": "6639",
    "UOM": "KG"
  },
  {
    "Article": "1418835",
    "Article Description": "TEA CULTURE APPLE OOLONG LOOSE TEA",
    "PLU CODE": "6640",
    "UOM": "KG"
  },
  {
    "Article": "1418836",
    "Article Description": "TEA CULTURE CUCUMBER COOLER",
    "PLU CODE": "6641",
    "UOM": "KG"
  },
  {
    "Article": "1418837",
    "Article Description": "TEA CULTURE DARJELING FIRSTFLUSH LOOSTEA",
    "PLU CODE": "6642",
    "UOM": "KG"
  },
  {
    "Article": "1418838",
    "Article Description": "TEA CULTURE DIMBULA CEYLON LOOSE TEA",
    "PLU CODE": "6643",
    "UOM": "KG"
  },
  {
    "Article": "1418839",
    "Article Description": "TEA CULTURE LYCHEE LOOSE TEA",
    "PLU CODE": "6644",
    "UOM": "KG"
  },
  {
    "Article": "1418840",
    "Article Description": "TEA CULTURE MILK OOLONG LOOSE TEA",
    "PLU CODE": "6645",
    "UOM": "KG"
  },
  {
    "Article": "1418841",
    "Article Description": "TEA CULTURE MINTY LEMON LOOSE TEA",
    "PLU CODE": "6646",
    "UOM": "KG"
  },
  {
    "Article": "1418842",
    "Article Description": "TEA CULTURE MINTY TREAT LOOSE TEA",
    "PLU CODE": "6647",
    "UOM": "KG"
  },
  {
    "Article": "1418843",
    "Article Description": "TEA CULTURE NURSING LOOSE TEA",
    "PLU CODE": "6648",
    "UOM": "KG"
  },
  {
    "Article": "1418844",
    "Article Description": "TEA CULTURE RISHEEHAT LYCHEE LOOSE TEA",
    "PLU CODE": "6649",
    "UOM": "KG"
  },
  {
    "Article": "1418845",
    "Article Description": "TEA CULTURE WILDBERRY TALES LOOSE TEA",
    "PLU CODE": "6650",
    "UOM": "KG"
  },
  {
    "Article": "1418846",
    "Article Description": "TEA CULTURE YERBAMATE LOOSE TEA",
    "PLU CODE": "6651",
    "UOM": "KG"
  },
  {
    "Article": "1418847",
    "Article Description": "TEA CULTURE ACQUA CADDIES 100G",
    "PLU CODE": "6652",
    "UOM": "PC"
  },
  {
    "Article": "1418848",
    "Article Description": "Tea Culture Apple Cinnamon loose Tea",
    "PLU CODE": "6653",
    "UOM": "KG"
  },
  {
    "Article": "1418849",
    "Article Description": "TEA CULTURE ASSAM CTC LOOSE TEA",
    "PLU CODE": "6654",
    "UOM": "KG"
  },
  {
    "Article": "1418850",
    "Article Description": "Tea Culture Assam leaf loose Tea",
    "PLU CODE": "6655",
    "UOM": "KG"
  },
  {
    "Article": "1418851",
    "Article Description": "Tea Culture Blooming loose Tea",
    "PLU CODE": "6656",
    "UOM": "KG"
  },
  {
    "Article": "1418852",
    "Article Description": "TEA CULTURE BREWERS BAG ASSORTED 20TB",
    "PLU CODE": "6657",
    "UOM": "PC"
  },
  {
    "Article": "1418853",
    "Article Description": "Tea Culture Calming Chamomile loose Tea",
    "PLU CODE": "6658",
    "UOM": "KG"
  },
  {
    "Article": "1418854",
    "Article Description": "TEA CULTURE CARAMEL PEACH LOOSE TEA",
    "PLU CODE": "6659",
    "UOM": "KG"
  },
  {
    "Article": "1418855",
    "Article Description": "TEA CULTURE CARDAMOM CLASSIC LOOSE TEA",
    "PLU CODE": "6660",
    "UOM": "KG"
  },
  {
    "Article": "1418856",
    "Article Description": "Tea Culture Cardamom CTC loose Tea",
    "PLU CODE": "6661",
    "UOM": "KG"
  },
  {
    "Article": "1418857",
    "Article Description": "TEA CULTURE CASTLETON LOOSE TEA",
    "PLU CODE": "6662",
    "UOM": "KG"
  },
  {
    "Article": "1418858",
    "Article Description": "Tea Culture Chocolate Mint Grn looseTea",
    "PLU CODE": "6663",
    "UOM": "KG"
  },
  {
    "Article": "1418859",
    "Article Description": "TEA CULTURE CHRISTMAS TEA LOOSE TEA",
    "PLU CODE": "6664",
    "UOM": "KG"
  },
  {
    "Article": "1418860",
    "Article Description": "TEA CULTURE CHRYSANTHEMUM TEA LOOSE TEA",
    "PLU CODE": "6665",
    "UOM": "KG"
  },
  {
    "Article": "1418861",
    "Article Description": "TEA CULTURE CLEANSING LOOSE TEA",
    "PLU CODE": "6666",
    "UOM": "KG"
  },
  {
    "Article": "1418862",
    "Article Description": "TEA CULTURE COLYX LOOSE TEA",
    "PLU CODE": "6667",
    "UOM": "KG"
  },
  {
    "Article": "1418863",
    "Article Description": "Tea Culture Cool Me Down loose Tea",
    "PLU CODE": "6668",
    "UOM": "KG"
  },
  {
    "Article": "1418864",
    "Article Description": "Tea Culture Darjeeling Green Tea",
    "PLU CODE": "6669",
    "UOM": "KG"
  },
  {
    "Article": "1418865",
    "Article Description": "Tea Culture Darjeeling Second Flush loo",
    "PLU CODE": "6670",
    "UOM": "KG"
  },
  {
    "Article": "1418866",
    "Article Description": "TEA CULTURE DARJEELING WHITE LOOSE TEA",
    "PLU CODE": "6671",
    "UOM": "KG"
  },
  {
    "Article": "1418867",
    "Article Description": "Tea Culture Decaf Black loose Tea",
    "PLU CODE": "6672",
    "UOM": "KG"
  },
  {
    "Article": "1418868",
    "Article Description": "Tea Culture Decaf Green loose Tea",
    "PLU CODE": "6673",
    "UOM": "KG"
  },
  {
    "Article": "1418869",
    "Article Description": "Tea Culture Detox loose Tea",
    "PLU CODE": "6674",
    "UOM": "KG"
  },
  {
    "Article": "1418870",
    "Article Description": "TEA CULTURE DIKOM LOOSE TEA",
    "PLU CODE": "6675",
    "UOM": "KG"
  },
  {
    "Article": "1418871",
    "Article Description": "TEA CULTURE DRAGON WELL LOOSE TEA",
    "PLU CODE": "6676",
    "UOM": "KG"
  },
  {
    "Article": "1418872",
    "Article Description": "Tea Culture Earl Grey Tea loose Tea",
    "PLU CODE": "6677",
    "UOM": "KG"
  },
  {
    "Article": "1418873",
    "Article Description": "Tea Culture Easy Digest Tea loose Tea",
    "PLU CODE": "6678",
    "UOM": "KG"
  },
  {
    "Article": "1418874",
    "Article Description": "Tea Culture Easy Motion loose Tea",
    "PLU CODE": "6679",
    "UOM": "KG"
  },
  {
    "Article": "1418875",
    "Article Description": "TEA CULTURE EGYPTIAN CHAMOMILE LOOSETEA",
    "PLU CODE": "6680",
    "UOM": "KG"
  },
  {
    "Article": "1418876",
    "Article Description": "TEA CULTURE ENERGY ELIXIR LOSE TEA",
    "PLU CODE": "6681",
    "UOM": "KG"
  },
  {
    "Article": "1418877",
    "Article Description": "Tea Culture English Breakfast loose Tea",
    "PLU CODE": "6682",
    "UOM": "KG"
  },
  {
    "Article": "1418878",
    "Article Description": "Tea Culture Flowery Bouquet loose Tea",
    "PLU CODE": "6683",
    "UOM": "KG"
  },
  {
    "Article": "1418879",
    "Article Description": "TEA CULTURE FOREVER YOUNG KG",
    "PLU CODE": "6684",
    "UOM": "KG"
  },
  {
    "Article": "1418880",
    "Article Description": "Tea Culture Fruit Bliss loose Tea",
    "PLU CODE": "6685",
    "UOM": "KG"
  },
  {
    "Article": "1418881",
    "Article Description": "TEA CULTURE FRUIT BURST LOOSE TEA",
    "PLU CODE": "6686",
    "UOM": "KG"
  },
  {
    "Article": "1418882",
    "Article Description": "Tea Culture Genmaicha loose Tea",
    "PLU CODE": "6687",
    "UOM": "KG"
  },
  {
    "Article": "1418883",
    "Article Description": "TEA CULTURE GINGER CTC LOOSE TEA",
    "PLU CODE": "6688",
    "UOM": "KG"
  },
  {
    "Article": "1418884",
    "Article Description": "Tea Culture Ginseng Oolong Tea looseTea",
    "PLU CODE": "6689",
    "UOM": "KG"
  },
  {
    "Article": "1418885",
    "Article Description": "TEA CULTURE GO GUAVA LOOSE TEA",
    "PLU CODE": "6690",
    "UOM": "KG"
  },
  {
    "Article": "1418886",
    "Article Description": "TEA CULTURE GUNPOWDER LOOSE TEA",
    "PLU CODE": "6691",
    "UOM": "KG"
  },
  {
    "Article": "1418887",
    "Article Description": "Tea Culture Gyukuro loose Tea",
    "PLU CODE": "6692",
    "UOM": "KG"
  },
  {
    "Article": "1418888",
    "Article Description": "Tea Culture Hair Elixir",
    "PLU CODE": "6693",
    "UOM": "KG"
  },
  {
    "Article": "1418889",
    "Article Description": "TEA CULTURE HALMARI LOOSE TEA",
    "PLU CODE": "6694",
    "UOM": "KG"
  },
  {
    "Article": "1418890",
    "Article Description": "TEA CULTURE HEALING WHITE LOOSE TEA",
    "PLU CODE": "6695",
    "UOM": "KG"
  },
  {
    "Article": "1418891",
    "Article Description": "TEA CULTURE HOJICHA LOOSE TEA",
    "PLU CODE": "6696",
    "UOM": "KG"
  },
  {
    "Article": "1418892",
    "Article Description": "TEA CULTURE HOKUI LOOSE TEA",
    "PLU CODE": "6697",
    "UOM": "KG"
  },
  {
    "Article": "1418893",
    "Article Description": "Tea Culture Holy Basil loose Tea",
    "PLU CODE": "6698",
    "UOM": "KG"
  },
  {
    "Article": "1418894",
    "Article Description": "TEA CULTURE IMMUNITY BOOSTER LOOSE TEA",
    "PLU CODE": "6699",
    "UOM": "KG"
  },
  {
    "Article": "1418895",
    "Article Description": "Tea Culture Imperial White loose Tea",
    "PLU CODE": "6700",
    "UOM": "KG"
  },
  {
    "Article": "1418896",
    "Article Description": "TEA CULTURE INDIAN CHAMOMILE LOOSE TEA",
    "PLU CODE": "6701",
    "UOM": "KG"
  },
  {
    "Article": "1418897",
    "Article Description": "TEA CULTURE INDIAN COLLECTION",
    "PLU CODE": "6702",
    "UOM": "PC"
  },
  {
    "Article": "1418898",
    "Article Description": "TEA CULTURE IRISH BREAKFAST LOOSE TEA",
    "PLU CODE": "6703",
    "UOM": "KG"
  },
  {
    "Article": "1418899",
    "Article Description": "TEA CULTURE JASMINE BLEND",
    "PLU CODE": "6704",
    "UOM": "KG"
  },
  {
    "Article": "1418900",
    "Article Description": "TEA CULTURE JASMINE PEARLS LOOSE TEA",
    "PLU CODE": "6705",
    "UOM": "KG"
  },
  {
    "Article": "1418901",
    "Article Description": "Tea Culture Jasmine Tea",
    "PLU CODE": "6706",
    "UOM": "KG"
  },
  {
    "Article": "1418902",
    "Article Description": "TEA CULTURE JUNGPANA LOOSE TEA",
    "PLU CODE": "6707",
    "UOM": "KG"
  },
  {
    "Article": "1418903",
    "Article Description": "Tea Culture Kashmiri Kahwa loose Tea",
    "PLU CODE": "6708",
    "UOM": "KG"
  },
  {
    "Article": "1418904",
    "Article Description": "TEA CULTURE KEEMUM LOOSE TEA",
    "PLU CODE": "6709",
    "UOM": "KG"
  },
  {
    "Article": "1418905",
    "Article Description": "TEA CULTURE KICKSTART LOOSE TEA",
    "PLU CODE": "6710",
    "UOM": "KG"
  },
  {
    "Article": "1418906",
    "Article Description": "TEA CULTURE KUDING LOOSE TEA",
    "PLU CODE": "6711",
    "UOM": "KG"
  },
  {
    "Article": "1418907",
    "Article Description": "TEA CULTURE LAPSANG SOUCHONG LOOSE TEA",
    "PLU CODE": "6712",
    "UOM": "KG"
  },
  {
    "Article": "1418908",
    "Article Description": "TEA CULTURE LEMON DEMON LOOSE TEA",
    "PLU CODE": "6713",
    "UOM": "KG"
  },
  {
    "Article": "1418909",
    "Article Description": "TEA CULTURE LEMON GRASS CTC LOOSE TEA",
    "PLU CODE": "6714",
    "UOM": "KG"
  },
  {
    "Article": "1418910",
    "Article Description": "Tea Culture Lemon Grass Ginger loose Tea",
    "PLU CODE": "6715",
    "UOM": "KG"
  },
  {
    "Article": "1418911",
    "Article Description": "Tea Culture Lemon Mojito loose Tea",
    "PLU CODE": "6716",
    "UOM": "KG"
  },
  {
    "Article": "1418912",
    "Article Description": "TEA CULTURE LEMON VERBANA LOOSE TEA",
    "PLU CODE": "6717",
    "UOM": "KG"
  },
  {
    "Article": "1418913",
    "Article Description": "TEA CULTURE LOTUS LOOSE TEA",
    "PLU CODE": "6718",
    "UOM": "KG"
  },
  {
    "Article": "1418914",
    "Article Description": "TEA CULTURE MAHARAJA OOLONG LOOSE TEA",
    "PLU CODE": "6719",
    "UOM": "KG"
  },
  {
    "Article": "1418915",
    "Article Description": "TEA CULTURE MAKAIBARI LOOSE TEA",
    "PLU CODE": "6720",
    "UOM": "KG"
  },
  {
    "Article": "1418916",
    "Article Description": "Tea Culture Mango Mania Green loose Tea",
    "PLU CODE": "6721",
    "UOM": "KG"
  },
  {
    "Article": "1418917",
    "Article Description": "TEA CULTURE MAOFENG LOOSE TEA",
    "PLU CODE": "6722",
    "UOM": "KG"
  },
  {
    "Article": "1418918",
    "Article Description": "TEA CULTURE MAOJIAN LOOSE TEA",
    "PLU CODE": "6723",
    "UOM": "KG"
  },
  {
    "Article": "1418919",
    "Article Description": "TEA CULTURE MARGARETS HOPE LOOSE TEA",
    "PLU CODE": "6724",
    "UOM": "KG"
  },
  {
    "Article": "1418920",
    "Article Description": "TEA CULTURE MASALA CHAI CTC LOOSE TEA",
    "PLU CODE": "6725",
    "UOM": "KG"
  },
  {
    "Article": "1418921",
    "Article Description": "Tea Culture Masala Chai loose Tea",
    "PLU CODE": "6726",
    "UOM": "KG"
  },
  {
    "Article": "1418922",
    "Article Description": "TEA CULTURE MOKAIBARI EAST LOOSE TEA",
    "PLU CODE": "6727",
    "UOM": "KG"
  },
  {
    "Article": "1418923",
    "Article Description": "Tea Culture Morroccan Mint loose Tea",
    "PLU CODE": "6728",
    "UOM": "KG"
  },
  {
    "Article": "1418924",
    "Article Description": "Tea Culture Mt wui Oolong Tea loose Tea",
    "PLU CODE": "6729",
    "UOM": "KG"
  },
  {
    "Article": "1418925",
    "Article Description": "TEA CULTURE NAMRING LOOSE TEA",
    "PLU CODE": "6730",
    "UOM": "KG"
  },
  {
    "Article": "1418926",
    "Article Description": "TEA CULTURE NILGIRI LOOSE TEA",
    "PLU CODE": "6731",
    "UOM": "KG"
  },
  {
    "Article": "1418927",
    "Article Description": "TEA CULTURE OOLONG TEA LOOSE",
    "PLU CODE": "6732",
    "UOM": "KG"
  },
  {
    "Article": "1418928",
    "Article Description": "TEA CULTURE ORANGE BLOSSOM LOOSE TEA",
    "PLU CODE": "6733",
    "UOM": "KG"
  },
  {
    "Article": "1418929",
    "Article Description": "TEA CULTURE ORGANIC GREEN TEA KG",
    "PLU CODE": "6734",
    "UOM": "KG"
  },
  {
    "Article": "1418930",
    "Article Description": "TEA CULTURE PAI MUTAN LOOSE TEA",
    "PLU CODE": "6735",
    "UOM": "KG"
  },
  {
    "Article": "1418931",
    "Article Description": "TEA CULTURE PILOCHUN LOOSE TEA",
    "PLU CODE": "6736",
    "UOM": "KG"
  },
  {
    "Article": "1418932",
    "Article Description": "TEA CULTURE PUER TEA CAKE LOOSE TEA",
    "PLU CODE": "6737",
    "UOM": "KG"
  },
  {
    "Article": "1418933",
    "Article Description": "Tea Culture Puer Tea loose Tea",
    "PLU CODE": "6738",
    "UOM": "KG"
  },
  {
    "Article": "1418934",
    "Article Description": "TEA CULTURE QUIESCENCE ACQUA GIFT SET",
    "PLU CODE": "6739",
    "UOM": "PC"
  },
  {
    "Article": "1418935",
    "Article Description": "TEA CULTURE QUIESCENCE DAY BREAK GIFTSET",
    "PLU CODE": "6740",
    "UOM": "PC"
  },
  {
    "Article": "1418936",
    "Article Description": "TEA CULTURE QUIESCENCE MEADOW GIFT SET",
    "PLU CODE": "6741",
    "UOM": "PC"
  },
  {
    "Article": "1418937",
    "Article Description": "TEA CULTURE QUIESCNCE PURPLE SKY GIFTSET",
    "PLU CODE": "6742",
    "UOM": "PC"
  },
  {
    "Article": "1418938",
    "Article Description": "Tea Culture Rooibus Tea loose Tea",
    "PLU CODE": "6743",
    "UOM": "KG"
  },
  {
    "Article": "1418939",
    "Article Description": "TEA CULTURE ROSE BUDS LOOSE TEA",
    "PLU CODE": "6744",
    "UOM": "KG"
  },
  {
    "Article": "1418940",
    "Article Description": "TEA CULTURE ROSE ROMANCE LOOSE TEA",
    "PLU CODE": "6745",
    "UOM": "KG"
  },
  {
    "Article": "1418941",
    "Article Description": "TEA CULTURE SAFFRON SPICED",
    "PLU CODE": "6746",
    "UOM": "KG"
  },
  {
    "Article": "1418942",
    "Article Description": "Tea Culture Sencha loose Tea",
    "PLU CODE": "6747",
    "UOM": "KG"
  },
  {
    "Article": "1418943",
    "Article Description": "Tea Culture Signature blend 480g",
    "PLU CODE": "6748",
    "UOM": "PC"
  },
  {
    "Article": "1418944",
    "Article Description": "Tea Culture Silver Needle White Tea loo",
    "PLU CODE": "6749",
    "UOM": "KG"
  },
  {
    "Article": "1418945",
    "Article Description": "TEA CULTURE SINBULLI LOOSE TEA",
    "PLU CODE": "6750",
    "UOM": "KG"
  },
  {
    "Article": "1418946",
    "Article Description": "Tea Culture Skin Glow",
    "PLU CODE": "6751",
    "UOM": "KG"
  },
  {
    "Article": "1418947",
    "Article Description": "TEA CULTURE SNOWY SHAN LOOSE TEA",
    "PLU CODE": "6752",
    "UOM": "KG"
  },
  {
    "Article": "1418948",
    "Article Description": "Tea Culture Spicy Madarin Oolong looseT",
    "PLU CODE": "6753",
    "UOM": "KG"
  },
  {
    "Article": "1418949",
    "Article Description": "TEA CULTURE STRAWBERRY SURPRISE LOOSETEA",
    "PLU CODE": "6754",
    "UOM": "KG"
  },
  {
    "Article": "1418950",
    "Article Description": "TEA CULTURE STRESSBUSTER LOOSE TEA",
    "PLU CODE": "6755",
    "UOM": "KG"
  },
  {
    "Article": "1418951",
    "Article Description": "Tea Culture Strwbery Farm Gren looseTea",
    "PLU CODE": "6756",
    "UOM": "KG"
  },
  {
    "Article": "1418952",
    "Article Description": "TEA CULTURE SWEET SLEEP LOOSE TEA",
    "PLU CODE": "6757",
    "UOM": "KG"
  },
  {
    "Article": "1418953",
    "Article Description": "TEA CULTURE THE ALMOND BREW LOOSE TEA",
    "PLU CODE": "6758",
    "UOM": "KG"
  },
  {
    "Article": "1418954",
    "Article Description": "TEA CULTURE THROAT RESCUE LOOSE TEA",
    "PLU CODE": "6759",
    "UOM": "KG"
  },
  {
    "Article": "1418955",
    "Article Description": "TEA CULTURE THURBO LOOSE TEA",
    "PLU CODE": "6760",
    "UOM": "KG"
  },
  {
    "Article": "1418956",
    "Article Description": "Tea Culture Tieguayin Tea loose Tea",
    "PLU CODE": "6761",
    "UOM": "KG"
  },
  {
    "Article": "1418957",
    "Article Description": "TEA CULTURE TROPICAL TREAT LOOSE TEA",
    "PLU CODE": "6762",
    "UOM": "KG"
  },
  {
    "Article": "1418958",
    "Article Description": "Tea Culture Vanila Rooibus loose Tea",
    "PLU CODE": "6763",
    "UOM": "KG"
  },
  {
    "Article": "1418959",
    "Article Description": "Tea Culture Weight Loss",
    "PLU CODE": "6764",
    "UOM": "KG"
  },
  {
    "Article": "1418960",
    "Article Description": "Tea Culture Wellness Collection 480g",
    "PLU CODE": "6765",
    "UOM": "PC"
  },
  {
    "Article": "1418961",
    "Article Description": "TEA CULTURE YELLOW TEA LOOSE TEA",
    "PLU CODE": "6766",
    "UOM": "KG"
  },
  {
    "Article": "1418962",
    "Article Description": "TEA CULTURE DAY BREAK CADDIES 100G",
    "PLU CODE": "6767",
    "UOM": "PC"
  },
  {
    "Article": "1418963",
    "Article Description": "TEA CULTURE DETOX CADDY GIFTSET",
    "PLU CODE": "6768",
    "UOM": "PC"
  },
  {
    "Article": "1418964",
    "Article Description": "TEA CULTURE EASY DIGEST CADDY GIFTSET",
    "PLU CODE": "6769",
    "UOM": "PC"
  },
  {
    "Article": "1418965",
    "Article Description": "TEA CULTURE LIQUID GOLD BREWERS CLLCTION",
    "PLU CODE": "6770",
    "UOM": "PC"
  },
  {
    "Article": "1418966",
    "Article Description": "TEA CULTURE LIQUID GOLD TEALEAF CLLCTION",
    "PLU CODE": "6771",
    "UOM": "PC"
  },
  {
    "Article": "1418967",
    "Article Description": "TEA CULTURE MASALA CHAI CADDY GIFTSET",
    "PLU CODE": "6772",
    "UOM": "PC"
  },
  {
    "Article": "1418968",
    "Article Description": "TEA CULTURE MEADOW CADDIES 100G",
    "PLU CODE": "6773",
    "UOM": "PC"
  },
  {
    "Article": "1418969",
    "Article Description": "TEA CULTURE PURPLE SKY CADDIES 100G",
    "PLU CODE": "6774",
    "UOM": "PC"
  },
  {
    "Article": "1418970",
    "Article Description": "TEA CULTURE THROAT RESUCE CADDY GIFTSET",
    "PLU CODE": "6775",
    "UOM": "PC"
  },
  {
    "Article": "1418971",
    "Article Description": "TCW BALMAADI ORGANIC LOOSE COFFE BEAN KG",
    "PLU CODE": "6776",
    "UOM": "KG"
  },
  {
    "Article": "1418972",
    "Article Description": "TCW BARBAARA AA LOOSE COFFEE BEANS KG",
    "PLU CODE": "6777",
    "UOM": "KG"
  },
  {
    "Article": "1418973",
    "Article Description": "TCW SWARNAGIRI MOUTAIN LSE COFFE BEAN KG",
    "PLU CODE": "6778",
    "UOM": "KG"
  },
  {
    "Article": "1418974",
    "Article Description": "TCW BABABUDANGIRI LOOSE COFFEE BEANS KG",
    "PLU CODE": "6779",
    "UOM": "KG"
  },
  {
    "Article": "1418975",
    "Article Description": "TCW KENYAN AAPLUS MASAI LSE COFE BEAN KG",
    "PLU CODE": "6780",
    "UOM": "KG"
  },
  {
    "Article": "1418976",
    "Article Description": "TCW COLUMBIAN SUPREMO LOOSE COFE BEAN KG",
    "PLU CODE": "6781",
    "UOM": "KG"
  },
  {
    "Article": "1418977",
    "Article Description": "TCW MYSORE NUGGET EB LOOSE COFFE BEAN KG",
    "PLU CODE": "6782",
    "UOM": "KG"
  },
  {
    "Article": "1418978",
    "Article Description": "TCW MONSOON MALABAR AAA LSE COFE BEAN KG",
    "PLU CODE": "6783",
    "UOM": "KG"
  },
  {
    "Article": "1418979",
    "Article Description": "TCW DARK MATTER LOOSE COFFEE BEANS KG",
    "PLU CODE": "6784",
    "UOM": "KG"
  },
  {
    "Article": "1418980",
    "Article Description": "TCW COLD BREW BLEND LOOSE COFEE BEANS KG",
    "PLU CODE": "6785",
    "UOM": "KG"
  },
  {
    "Article": "1418981",
    "Article Description": "TCW NLGIRI BLUEMOUNTAIN LSE COFE BEAN KG",
    "PLU CODE": "6786",
    "UOM": "KG"
  },
  {
    "Article": "1418982",
    "Article Description": "TCW COLUMBIAN DECAF LOOSE COFFEE BEAN KG",
    "PLU CODE": "6787",
    "UOM": "KG"
  },
  {
    "Article": "1418983",
    "Article Description": "Tea Culture 100 gram metal Tea tin",
    "PLU CODE": "6788",
    "UOM": "PC"
  },
  {
    "Article": "1418984",
    "Article Description": "Tea Culture 50 gram metal Tea tin",
    "PLU CODE": "6789",
    "UOM": "PC"
  },
  {
    "Article": "1418985",
    "Article Description": "TEA CULTURE GLASS ART TEA POT STYLE 1",
    "PLU CODE": "6790",
    "UOM": "PC"
  },
  {
    "Article": "1418986",
    "Article Description": "TEA CULTURE GLASS ART TEA POT STYLE 2",
    "PLU CODE": "6791",
    "UOM": "PC"
  },
  {
    "Article": "1418987",
    "Article Description": "Tea Culture Kamjove Glass art tea cup",
    "PLU CODE": "6792",
    "UOM": "PC"
  },
  {
    "Article": "1418988",
    "Article Description": "TEA CULTURE KEEP SAKE",
    "PLU CODE": "6793",
    "UOM": "PC"
  },
  {
    "Article": "1418989",
    "Article Description": "TEA CULTURE MATCHA BOWL",
    "PLU CODE": "6794",
    "UOM": "PC"
  },
  {
    "Article": "1418990",
    "Article Description": "TEA CULTURE MATCHA LADLE",
    "PLU CODE": "6795",
    "UOM": "PC"
  },
  {
    "Article": "1418991",
    "Article Description": "TEA CULTURE MATCHA WHISK",
    "PLU CODE": "6796",
    "UOM": "PC"
  },
  {
    "Article": "1418992",
    "Article Description": "Tea Culture Mesh Ball",
    "PLU CODE": "6797",
    "UOM": "PC"
  },
  {
    "Article": "1418993",
    "Article Description": "TEA CULTURE OUR BEST FOUR",
    "PLU CODE": "6798",
    "UOM": "PC"
  },
  {
    "Article": "1418994",
    "Article Description": "TEA CULTURE TEA TIMER",
    "PLU CODE": "6799",
    "UOM": "PC"
  },
  {
    "Article": "1418995",
    "Article Description": "TEA CULTURE THE MELANGE BOX",
    "PLU CODE": "6800",
    "UOM": "PC"
  },
  {
    "Article": "1418996",
    "Article Description": "TEA CULTURE TIN 40G",
    "PLU CODE": "6801",
    "UOM": "PC"
  },
  {
    "Article": "1418997",
    "Article Description": "TCW PLASTIC COFE WHITE POUROVER 4CUP1 PC",
    "PLU CODE": "6802",
    "UOM": "PC"
  },
  {
    "Article": "1418998",
    "Article Description": "TCW PLASTIC COFFEE RED POUROVER 4CUPS1PC",
    "PLU CODE": "6803",
    "UOM": "PC"
  },
  {
    "Article": "1418999",
    "Article Description": "TCW POUROVER PAPER FILTER 100PC BROWN1PK",
    "PLU CODE": "6804",
    "UOM": "PC"
  },
  {
    "Article": "1419000",
    "Article Description": "TCW POUROVER PAPER FILTER 100PC WHITE1PK",
    "PLU CODE": "6805",
    "UOM": "PC"
  },
  {
    "Article": "1419001",
    "Article Description": "TCW POUROVER PAPER FILTER 40PC WHITE 1PK",
    "PLU CODE": "6806",
    "UOM": "PC"
  },
  {
    "Article": "1419002",
    "Article Description": "TCW POUROVER PAPER FILTER 40PC BROWN1PK",
    "PLU CODE": "6807",
    "UOM": "PC"
  },
  {
    "Article": "1419003",
    "Article Description": "TCW GREEN TEA TAKEAWAY TEA 200ML",
    "PLU CODE": "6808",
    "UOM": "PC"
  },
  {
    "Article": "1419004",
    "Article Description": "TCW KASHMIRI KAHWA TAKEAWAY TEA 200ML",
    "PLU CODE": "6809",
    "UOM": "PC"
  },
  {
    "Article": "1419005",
    "Article Description": "TCW MORROCCAN MINT TAKEAWAY TEA 200ML",
    "PLU CODE": "6810",
    "UOM": "PC"
  },
  {
    "Article": "1419006",
    "Article Description": "TCW STRESS RELIEVER TAKEAWAY TEA 200ML",
    "PLU CODE": "6811",
    "UOM": "PC"
  },
  {
    "Article": "1419007",
    "Article Description": "TCW THROAT RESCUE TAKEAWAY TEA 200ML",
    "PLU CODE": "6812",
    "UOM": "PC"
  },
  {
    "Article": "1419008",
    "Article Description": "TCW HAPPY IMMUNITY TAKEAWAY TEA 200ML",
    "PLU CODE": "6813",
    "UOM": "PC"
  },
  {
    "Article": "1419009",
    "Article Description": "TCW MASALA CHAI TAKEAWAY TEA 200ML",
    "PLU CODE": "6814",
    "UOM": "PC"
  },
  {
    "Article": "1419010",
    "Article Description": "TCW LEMON ICED TEA TAKEAWAY TEA 200ML",
    "PLU CODE": "6815",
    "UOM": "PC"
  },
  {
    "Article": "1419011",
    "Article Description": "TCW ASSAM LEAF TAKEAWAY TEA 200ML",
    "PLU CODE": "6816",
    "UOM": "PC"
  },
  {
    "Article": "1419012",
    "Article Description": "TCW DARJEELING SECND FLUSH TEKAWAY 200ML",
    "PLU CODE": "6817",
    "UOM": "PC"
  },
  {
    "Article": "1419013",
    "Article Description": "TCW DETOX TAKEAWAY TEA 200ML",
    "PLU CODE": "6818",
    "UOM": "PC"
  },
  {
    "Article": "1419014",
    "Article Description": "TCW EARL GREY TAKEAWAY TEA 200ML",
    "PLU CODE": "6819",
    "UOM": "PC"
  },
  {
    "Article": "1419015",
    "Article Description": "TCW EASY DIGEST TAKEAWAY TEA 200ML",
    "PLU CODE": "6820",
    "UOM": "PC"
  },
  {
    "Article": "1419016",
    "Article Description": "TCW FLOWERY BOUQUET TAKEAWAY TEA 200ML",
    "PLU CODE": "6821",
    "UOM": "PC"
  },
  {
    "Article": "1419017",
    "Article Description": "TCW MANGO LOVE TAKEAWAY TEA 200ML",
    "PLU CODE": "6822",
    "UOM": "PC"
  },
  {
    "Article": "1419018",
    "Article Description": "TEA CULTURE 10 TEABAG SAMPLER GS",
    "PLU CODE": "6823",
    "UOM": "PC"
  },
  {
    "Article": "1419019",
    "Article Description": "TEA CULTURE QUIESCENCE CADDY ACQUA GS",
    "PLU CODE": "6824",
    "UOM": "PC"
  },
  {
    "Article": "1419020",
    "Article Description": "TEA CULTURE QUIESCENCE CADDY MEADOW GS",
    "PLU CODE": "6825",
    "UOM": "PC"
  },
  {
    "Article": "1419021",
    "Article Description": "TEA CULTURE QUIESCENCE CADDYPURPLE SKYGS",
    "PLU CODE": "6826",
    "UOM": "PC"
  },
  {
    "Article": "1419022",
    "Article Description": "TEA CULTURE CHAI TRAILS GS",
    "PLU CODE": "6827",
    "UOM": "PC"
  },
  {
    "Article": "1419023",
    "Article Description": "TEA CULTURE MINI LEAFTALES 30GMS GS",
    "PLU CODE": "6828",
    "UOM": "PC"
  },
  {
    "Article": "1419024",
    "Article Description": "TEA CULTURE MINI LEAFTALES 50GMS GS",
    "PLU CODE": "6829",
    "UOM": "PC"
  },
  {
    "Article": "1419025",
    "Article Description": "TEA CULTURE VALUE PACK BLOOM GS",
    "PLU CODE": "6830",
    "UOM": "PC"
  },
  {
    "Article": "1419026",
    "Article Description": "TEA CULTURE VALUE PACK FEEL GOOD GS",
    "PLU CODE": "6831",
    "UOM": "PC"
  },
  {
    "Article": "1419027",
    "Article Description": "TEA CULTURE VALUE PACK EXOTIC INDIA GS",
    "PLU CODE": "6832",
    "UOM": "PC"
  },
  {
    "Article": "1419028",
    "Article Description": "TEA CULTURE VALUE PACK DETOX FIESTA GS",
    "PLU CODE": "6833",
    "UOM": "PC"
  },
  {
    "Article": "1419029",
    "Article Description": "TEA CULTURE BON VIVANT GS",
    "PLU CODE": "6834",
    "UOM": "PC"
  },
  {
    "Article": "1419030",
    "Article Description": "TEA CULTURE GOLD 50GMS CADDY TIN GS",
    "PLU CODE": "6835",
    "UOM": "PC"
  },
  {
    "Article": "1419031",
    "Article Description": "TEA CULTURE SILVER 50GMS CADDY TIN GS",
    "PLU CODE": "6836",
    "UOM": "PC"
  },
  {
    "Article": "1419032",
    "Article Description": "TEA CULTURE MATCHA KG",
    "PLU CODE": "6837",
    "UOM": "KG"
  },
  {
    "Article": "1419033",
    "Article Description": "TEA CULTURE FRESH & FRUITY",
    "PLU CODE": "6838",
    "UOM": "PC"
  },
  {
    "Article": "1419034",
    "Article Description": "TEA CULTURE BREAKFAST BLENDS",
    "PLU CODE": "6839",
    "UOM": "PC"
  },
  {
    "Article": "1419035",
    "Article Description": "TEA CULTURE DAY TO NIGHT",
    "PLU CODE": "6840",
    "UOM": "PC"
  },
  {
    "Article": "1419036",
    "Article Description": "TEA CULTURE ASSORTED 15 TEA BAGS",
    "PLU CODE": "6841",
    "UOM": "PC"
  },
  {
    "Article": "1419037",
    "Article Description": "TEA CULTURE BON VG CADDY GINGER CLASSIC",
    "PLU CODE": "6842",
    "UOM": "PC"
  },
  {
    "Article": "1419038",
    "Article Description": "TEA CULTURE BONVG CADDY CARDAMOM CLASSIC",
    "PLU CODE": "6843",
    "UOM": "PC"
  },
  {
    "Article": "1419039",
    "Article Description": "TEA CULTURE BON VG CADDY LMNGRASS CLSSIC",
    "PLU CODE": "6844",
    "UOM": "PC"
  },
  {
    "Article": "1419040",
    "Article Description": "TEA CULTURE BON VG CADDY ASSAM CLASSIC",
    "PLU CODE": "6845",
    "UOM": "PC"
  },
  {
    "Article": "1419041",
    "Article Description": "TCW DREAM BREWS FLOWERY BOUQUET",
    "PLU CODE": "6846",
    "UOM": "PC"
  },
  {
    "Article": "1419042",
    "Article Description": "TCW DREAM BREWS MOROCCON MINT",
    "PLU CODE": "6847",
    "UOM": "PC"
  },
  {
    "Article": "1419043",
    "Article Description": "TCW ICED INF PEACH APRICOT BLACK ICEDTEA",
    "PLU CODE": "6848",
    "UOM": "PC"
  },
  {
    "Article": "1419044",
    "Article Description": "TCW ICED INFUSIONS LEMON GREEN ICED TEA",
    "PLU CODE": "6849",
    "UOM": "PC"
  },
  {
    "Article": "1419045",
    "Article Description": "TCW ICED INFUSNS RAW MANGO GRN ICED TEA",
    "PLU CODE": "6850",
    "UOM": "PC"
  },
  {
    "Article": "1419046",
    "Article Description": "TCW MATCHA TIN",
    "PLU CODE": "6851",
    "UOM": "PC"
  },
  {
    "Article": "1419047",
    "Article Description": "TCW LEAFY TRAILS-ESTATE COLLECTION",
    "PLU CODE": "6852",
    "UOM": "PC"
  },
  {
    "Article": "1419048",
    "Article Description": "TCW LEAFY TRAILS-STREET CHAI COLLECTION",
    "PLU CODE": "6853",
    "UOM": "PC"
  },
  {
    "Article": "1419126",
    "Article Description": "CBTL BAKED OREO MOCHA CHEESE CAKE",
    "PLU CODE": "6931",
    "UOM": "PC"
  },
  {
    "Article": "1419127",
    "Article Description": "CBTL CREAM CHEESE CARROT CAKE",
    "PLU CODE": "6932",
    "UOM": "PC"
  },
  {
    "Article": "1419128",
    "Article Description": "CBTL CARAMEL PASTRY",
    "PLU CODE": "6933",
    "UOM": "PC"
  },
  {
    "Article": "1419129",
    "Article Description": "CBTL BOSTON NUT BROWNIE",
    "PLU CODE": "6934",
    "UOM": "PC"
  },
  {
    "Article": "1419130",
    "Article Description": "CBTL CHOCO FUDGE CAKE",
    "PLU CODE": "6935",
    "UOM": "PC"
  },
  {
    "Article": "1419131",
    "Article Description": "CBTL HAZELNUT TIRAMISU",
    "PLU CODE": "6936",
    "UOM": "PC"
  },
  {
    "Article": "1419132",
    "Article Description": "CBTL BLUEBERRY CHEESE CAKE",
    "PLU CODE": "6937",
    "UOM": "PC"
  },
  {
    "Article": "1419133",
    "Article Description": "CBTL WARM CHOCOLATE PIE",
    "PLU CODE": "6938",
    "UOM": "PC"
  },
  {
    "Article": "1419134",
    "Article Description": "CBTL CHICAGO CHEESE CAKE",
    "PLU CODE": "6939",
    "UOM": "PC"
  },
  {
    "Article": "1419135",
    "Article Description": "CBTL CHOCO ALMOND CROISSANT",
    "PLU CODE": "6940",
    "UOM": "PC"
  },
  {
    "Article": "1419136",
    "Article Description": "CBTL CROISSANT BUTTER",
    "PLU CODE": "6941",
    "UOM": "PC"
  },
  {
    "Article": "1419137",
    "Article Description": "CBTL PESTO COTTAGE CHEESE TURN OVER",
    "PLU CODE": "6942",
    "UOM": "PC"
  },
  {
    "Article": "1419138",
    "Article Description": "CBTL KADAI CHICKEN CROISSANT",
    "PLU CODE": "6943",
    "UOM": "PC"
  },
  {
    "Article": "1419139",
    "Article Description": "CBTL SCHEZWAN PANEER OPEN FACE",
    "PLU CODE": "6944",
    "UOM": "PC"
  },
  {
    "Article": "1419140",
    "Article Description": "CBTL MULTIGRAIN CROISSANT",
    "PLU CODE": "6945",
    "UOM": "PC"
  },
  {
    "Article": "1419141",
    "Article Description": "CBTL CHILLI CORN MUSHROOM",
    "PLU CODE": "6946",
    "UOM": "PC"
  },
  {
    "Article": "1419142",
    "Article Description": "CBTL PANEER SPICY SOUTHERN WEST SANDWICH",
    "PLU CODE": "6947",
    "UOM": "PC"
  },
  {
    "Article": "1419143",
    "Article Description": "CBTL CHIPOTALE CHICKEN SANDWICH",
    "PLU CODE": "6948",
    "UOM": "PC"
  },
  {
    "Article": "1419144",
    "Article Description": "CBTL BBQ PULLED CHICKEN",
    "PLU CODE": "6949",
    "UOM": "PC"
  },
  {
    "Article": "1419145",
    "Article Description": "CBTL CHICKEN HAM & CHEESE SANDWICH",
    "PLU CODE": "6950",
    "UOM": "PC"
  },
  {
    "Article": "1419146",
    "Article Description": "CBTL SPINACH & CORN",
    "PLU CODE": "6951",
    "UOM": "PC"
  },
  {
    "Article": "1419147",
    "Article Description": "CBTL BLUEBERRY MUFFINS",
    "PLU CODE": "6952",
    "UOM": "PC"
  },
  {
    "Article": "1419148",
    "Article Description": "CBTL MOCHA HAZELNUT MUFFIN",
    "PLU CODE": "6953",
    "UOM": "PC"
  },
  {
    "Article": "1419149",
    "Article Description": "CBTL CHOCOLATE OVERLAOAD MUFFIN",
    "PLU CODE": "6954",
    "UOM": "PC"
  },
  {
    "Article": "1419150",
    "Article Description": "CBTL STICKY CHOCOLATE COOKIES",
    "PLU CODE": "6955",
    "UOM": "PC"
  },
  {
    "Article": "1419151",
    "Article Description": "CBTL PEANUT BUTTER COOKIES",
    "PLU CODE": "6956",
    "UOM": "PC"
  },
  {
    "Article": "1419152",
    "Article Description": "CBTL ALMOND BISCOTTI",
    "PLU CODE": "6957",
    "UOM": "PC"
  },
  {
    "Article": "1419153",
    "Article Description": "CBTL CINNAMON OATMEL AND BLACKCURRANT",
    "PLU CODE": "6958",
    "UOM": "PC"
  },
  {
    "Article": "1419154",
    "Article Description": "CBTL HONEY",
    "PLU CODE": "6959",
    "UOM": "PC"
  },
  {
    "Article": "1419155",
    "Article Description": "CBTL BANANA NUT CAKE",
    "PLU CODE": "6960",
    "UOM": "PC"
  },
  {
    "Article": "1419156",
    "Article Description": "CBTL APPLE CRUMBLE SLICE CAKE",
    "PLU CODE": "6961",
    "UOM": "PC"
  },
  {
    "Article": "1419157",
    "Article Description": "CBTL WHOLE WHEAT JAGGERY CAKE",
    "PLU CODE": "6962",
    "UOM": "PC"
  },
  {
    "Article": "1419158",
    "Article Description": "CBTL ALMOND CAKE",
    "PLU CODE": "6963",
    "UOM": "PC"
  },
  {
    "Article": "1419159",
    "Article Description": "CBTL ESPRESSO SINGLE",
    "PLU CODE": "6964",
    "UOM": "PC"
  },
  {
    "Article": "1419160",
    "Article Description": "CBTL ESPRESSO DOUBLE",
    "PLU CODE": "6965",
    "UOM": "PC"
  },
  {
    "Article": "1419161",
    "Article Description": "CBTL MACCHIATO SINGLE",
    "PLU CODE": "6966",
    "UOM": "PC"
  },
  {
    "Article": "1419162",
    "Article Description": "CBTL MACCHIATO DOUBLE",
    "PLU CODE": "6967",
    "UOM": "PC"
  },
  {
    "Article": "1419163",
    "Article Description": "CBTL CAPPUCCINO DOUBLE",
    "PLU CODE": "6968",
    "UOM": "PC"
  },
  {
    "Article": "1419164",
    "Article Description": "CBTL CAPPUCCINO SINGLE",
    "PLU CODE": "6969",
    "UOM": "PC"
  },
  {
    "Article": "1419165",
    "Article Description": "CBTL AMERICANO REGULAR",
    "PLU CODE": "6970",
    "UOM": "PC"
  },
  {
    "Article": "1419166",
    "Article Description": "CBTL AMERICANO LARGE",
    "PLU CODE": "6971",
    "UOM": "PC"
  },
  {
    "Article": "1419167",
    "Article Description": "CBTL CARAMEL MACCHIATO REGULAR",
    "PLU CODE": "6972",
    "UOM": "PC"
  },
  {
    "Article": "1419168",
    "Article Description": "CBTL CARAMEL MACCHIATO LARGE",
    "PLU CODE": "6973",
    "UOM": "PC"
  },
  {
    "Article": "1419169",
    "Article Description": "CBTL CAFE LATTE REGULAR",
    "PLU CODE": "6974",
    "UOM": "PC"
  },
  {
    "Article": "1419170",
    "Article Description": "CBTL CAFE LATTE LARGE",
    "PLU CODE": "6975",
    "UOM": "PC"
  },
  {
    "Article": "1419171",
    "Article Description": "CBTL VANILLA LATTE REGULAR",
    "PLU CODE": "6976",
    "UOM": "PC"
  },
  {
    "Article": "1419172",
    "Article Description": "CBTL VANILLA LATTE LARGE",
    "PLU CODE": "6977",
    "UOM": "PC"
  },
  {
    "Article": "1419173",
    "Article Description": "CBTL MOCHA LATTE REGULAR",
    "PLU CODE": "6978",
    "UOM": "PC"
  },
  {
    "Article": "1419174",
    "Article Description": "CBTL MOCHA LATTE LARGE",
    "PLU CODE": "6979",
    "UOM": "PC"
  },
  {
    "Article": "1419175",
    "Article Description": "CBTL CARAMEL LATTE REGULAR",
    "PLU CODE": "6980",
    "UOM": "PC"
  },
  {
    "Article": "1419176",
    "Article Description": "CBTL CARAMEL LATTE LARGE",
    "PLU CODE": "6981",
    "UOM": "PC"
  },
  {
    "Article": "1419177",
    "Article Description": "CBTL HAZELNUT AMERICANO LARGE",
    "PLU CODE": "6982",
    "UOM": "PC"
  },
  {
    "Article": "1419178",
    "Article Description": "CBTL HAZELNUT AMERICANO REGULAR",
    "PLU CODE": "6983",
    "UOM": "PC"
  },
  {
    "Article": "1419179",
    "Article Description": "CBTL HAZELNUT LATTE LARGE",
    "PLU CODE": "6984",
    "UOM": "PC"
  },
  {
    "Article": "1419180",
    "Article Description": "CBTL HAZELNUT LATTE REGULAR",
    "PLU CODE": "6985",
    "UOM": "PC"
  },
  {
    "Article": "1419181",
    "Article Description": "CBTL WHITE CHOCOLATE LATTE REGULAR",
    "PLU CODE": "6986",
    "UOM": "PC"
  },
  {
    "Article": "1419182",
    "Article Description": "CBTL WHITE CHOCOLATE LATTE LARGE",
    "PLU CODE": "6987",
    "UOM": "PC"
  },
  {
    "Article": "1419183",
    "Article Description": "CBTL DOUBLE CHOCOLATE LATTE REGULAR",
    "PLU CODE": "6988",
    "UOM": "PC"
  },
  {
    "Article": "1419184",
    "Article Description": "CBTL DOUBLE CHOCOLATE LATTE LARGE",
    "PLU CODE": "6989",
    "UOM": "PC"
  },
  {
    "Article": "1419185",
    "Article Description": "CBTL ASSAM TEA LATTE REGULAR",
    "PLU CODE": "6990",
    "UOM": "PC"
  },
  {
    "Article": "1419186",
    "Article Description": "CBTL TROP. PASSION LATTE LARGE",
    "PLU CODE": "6991",
    "UOM": "PC"
  },
  {
    "Article": "1419187",
    "Article Description": "CBTL NSA MOCHA LATTE LARGE",
    "PLU CODE": "6992",
    "UOM": "PC"
  },
  {
    "Article": "1419188",
    "Article Description": "CBTL MORROCAN MINT LATTE LARGE",
    "PLU CODE": "6993",
    "UOM": "PC"
  },
  {
    "Article": "1419189",
    "Article Description": "CBTL ENGLISH BREAK FAST LATTE LARGE",
    "PLU CODE": "6994",
    "UOM": "PC"
  },
  {
    "Article": "1419190",
    "Article Description": "CBTL CHAI LATTE REGULAR",
    "PLU CODE": "6995",
    "UOM": "PC"
  },
  {
    "Article": "1419191",
    "Article Description": "CBTL DOUBLE VANILLA LARGE",
    "PLU CODE": "6996",
    "UOM": "PC"
  },
  {
    "Article": "1419192",
    "Article Description": "CBTL ASSAM TEA LATTE LARGE",
    "PLU CODE": "6997",
    "UOM": "PC"
  },
  {
    "Article": "1419193",
    "Article Description": "CBTL DOUBLE VANILLA REGULAR",
    "PLU CODE": "6998",
    "UOM": "PC"
  },
  {
    "Article": "1419194",
    "Article Description": "CBTL CHAI LATTE LARGE",
    "PLU CODE": "6999",
    "UOM": "PC"
  },
  {
    "Article": "1419195",
    "Article Description": "CBTL TROP PASSION LATTE REGULAR",
    "PLU CODE": "7000",
    "UOM": "PC"
  },
  {
    "Article": "1419196",
    "Article Description": "CBTL ENGLISH B FAST LATTE REGULAR",
    "PLU CODE": "7001",
    "UOM": "PC"
  },
  {
    "Article": "1419197",
    "Article Description": "CBTL MORROCAN MINT LATTE REGULAR",
    "PLU CODE": "7002",
    "UOM": "PC"
  },
  {
    "Article": "1419198",
    "Article Description": "CBTL HOT VANILLA REGULAR",
    "PLU CODE": "7003",
    "UOM": "PC"
  },
  {
    "Article": "1419199",
    "Article Description": "CBTL HOT VANILLA LARGE",
    "PLU CODE": "7004",
    "UOM": "PC"
  },
  {
    "Article": "1419200",
    "Article Description": "CBTL HOT CHOCOLATE REGULAR",
    "PLU CODE": "7005",
    "UOM": "PC"
  },
  {
    "Article": "1419201",
    "Article Description": "CBTL HOT CHOCOLATE LARGE",
    "PLU CODE": "7006",
    "UOM": "PC"
  },
  {
    "Article": "1419202",
    "Article Description": "CBTL HOT DOUBLE CHOCOLATE REGULAR",
    "PLU CODE": "7007",
    "UOM": "PC"
  },
  {
    "Article": "1419203",
    "Article Description": "CBTL HOT DOUBLE CHOCOLATE LARGE",
    "PLU CODE": "7008",
    "UOM": "PC"
  },
  {
    "Article": "1419204",
    "Article Description": "CBTL HOT WHITE CHOCOLATE REGULAR",
    "PLU CODE": "7009",
    "UOM": "PC"
  },
  {
    "Article": "1419205",
    "Article Description": "CBTL HOT WHITE CHOCOLATE LARGE",
    "PLU CODE": "7010",
    "UOM": "PC"
  },
  {
    "Article": "1419206",
    "Article Description": "CBTL ASSAM TEA",
    "PLU CODE": "7011",
    "UOM": "PC"
  },
  {
    "Article": "1419207",
    "Article Description": "CBTL CHAI HT",
    "PLU CODE": "7012",
    "UOM": "PC"
  },
  {
    "Article": "1419208",
    "Article Description": "CBTL ENGLISH BREAKFAST HOT",
    "PLU CODE": "7013",
    "UOM": "PC"
  },
  {
    "Article": "1419209",
    "Article Description": "CBTL ESTATE DARJEELING TEA",
    "PLU CODE": "7014",
    "UOM": "PC"
  },
  {
    "Article": "1419210",
    "Article Description": "CBTL TROPICAL PASSION HOT",
    "PLU CODE": "7015",
    "UOM": "PC"
  },
  {
    "Article": "1419211",
    "Article Description": "CBTL VANILLA CEYLON HOT",
    "PLU CODE": "7016",
    "UOM": "PC"
  },
  {
    "Article": "1419212",
    "Article Description": "CBTL EARL GREY HOT",
    "PLU CODE": "7017",
    "UOM": "PC"
  },
  {
    "Article": "1419213",
    "Article Description": "CBTL AFRICAN SUNRISE HOT",
    "PLU CODE": "7018",
    "UOM": "PC"
  },
  {
    "Article": "1419214",
    "Article Description": "CBTL JASMINE DRAGON PHOENIX PEARL",
    "PLU CODE": "7019",
    "UOM": "PC"
  },
  {
    "Article": "1419215",
    "Article Description": "CBTL LEMON CHAMOMILE HOT",
    "PLU CODE": "7020",
    "UOM": "PC"
  },
  {
    "Article": "1419216",
    "Article Description": "CBTL MORROCAN MINT HOT",
    "PLU CODE": "7021",
    "UOM": "PC"
  },
  {
    "Article": "1419217",
    "Article Description": "CBTL SWEDISH BERRY HOT",
    "PLU CODE": "7022",
    "UOM": "PC"
  },
  {
    "Article": "1419218",
    "Article Description": "CBTL GENMAICHA HOT",
    "PLU CODE": "7023",
    "UOM": "PC"
  },
  {
    "Article": "1419219",
    "Article Description": "CBTL GINSENG PEPPERMINT TEA",
    "PLU CODE": "7024",
    "UOM": "PC"
  },
  {
    "Article": "1419220",
    "Article Description": "CBTL ADD MOCHA",
    "PLU CODE": "7025",
    "UOM": "PC"
  },
  {
    "Article": "1419221",
    "Article Description": "CBTL ADD VANILLA",
    "PLU CODE": "7026",
    "UOM": "PC"
  },
  {
    "Article": "1419222",
    "Article Description": "CBTL ADD ALMOND MILK",
    "PLU CODE": "7027",
    "UOM": "PC"
  },
  {
    "Article": "1419223",
    "Article Description": "CBTL ADD ESPRESSO SHOT",
    "PLU CODE": "7028",
    "UOM": "PC"
  },
  {
    "Article": "1419224",
    "Article Description": "CBTL ADD HAZELNUT",
    "PLU CODE": "7029",
    "UOM": "PC"
  },
  {
    "Article": "1419225",
    "Article Description": "CBTL ADD CHOCOLATE SAUCE",
    "PLU CODE": "7030",
    "UOM": "PC"
  },
  {
    "Article": "1419226",
    "Article Description": "CBTL ADD CARAMEL",
    "PLU CODE": "7031",
    "UOM": "PC"
  },
  {
    "Article": "1419227",
    "Article Description": "CBTL ADD WHIPPED CREAM",
    "PLU CODE": "7032",
    "UOM": "PC"
  },
  {
    "Article": "1419228",
    "Article Description": "CBTL ADD CHOCOLATE ESPRESSO BEAN",
    "PLU CODE": "7033",
    "UOM": "PC"
  },
  {
    "Article": "1419229",
    "Article Description": "CBTL EXTREAM IT",
    "PLU CODE": "7034",
    "UOM": "PC"
  },
  {
    "Article": "1419230",
    "Article Description": "CBTL NSA ENGLISH BREAKFAST LATTE RE",
    "PLU CODE": "7035",
    "UOM": "PC"
  },
  {
    "Article": "1419231",
    "Article Description": "CBTL NSA CHAI LATTE REGULAR",
    "PLU CODE": "7036",
    "UOM": "PC"
  },
  {
    "Article": "1419232",
    "Article Description": "CBTL NSA ASSAM TEA LATTE REGULAR",
    "PLU CODE": "7037",
    "UOM": "PC"
  },
  {
    "Article": "1419233",
    "Article Description": "CBTL NSA MORROCHAN MINT REGULAR",
    "PLU CODE": "7038",
    "UOM": "PC"
  },
  {
    "Article": "1419234",
    "Article Description": "CBTL NSA TROPICAL PASSION LATTE REGULAR",
    "PLU CODE": "7039",
    "UOM": "PC"
  },
  {
    "Article": "1419235",
    "Article Description": "CBTL NSA DOUBLE VANILLA REGULAR",
    "PLU CODE": "7040",
    "UOM": "PC"
  },
  {
    "Article": "1419236",
    "Article Description": "CBTL NSA TROPICAL PASSION LATTE LARGE",
    "PLU CODE": "7041",
    "UOM": "PC"
  },
  {
    "Article": "1419237",
    "Article Description": "CBTL NSA DOUBLE VANILLA LARGE",
    "PLU CODE": "7042",
    "UOM": "PC"
  },
  {
    "Article": "1419238",
    "Article Description": "CBTL NSA CHAI LATTE LARGE",
    "PLU CODE": "7043",
    "UOM": "PC"
  },
  {
    "Article": "1419239",
    "Article Description": "CBTL NSA ASSAM TEA LATTE LARGE",
    "PLU CODE": "7044",
    "UOM": "PC"
  },
  {
    "Article": "1419240",
    "Article Description": "CBTL NSA ENGLISH BREAK FAST LATTE LARGE",
    "PLU CODE": "7045",
    "UOM": "PC"
  },
  {
    "Article": "1419241",
    "Article Description": "CBTL NSA MOROCCAN MINT LARGE",
    "PLU CODE": "7046",
    "UOM": "PC"
  },
  {
    "Article": "1419242",
    "Article Description": "CBTL NSA CARAMEL LATTE LARGE",
    "PLU CODE": "7047",
    "UOM": "PC"
  },
  {
    "Article": "1419243",
    "Article Description": "CBTL NSA VANILLA LATTE REGULAR",
    "PLU CODE": "7048",
    "UOM": "PC"
  },
  {
    "Article": "1419244",
    "Article Description": "CBTL NSA MOCHA LATTE REGULAR",
    "PLU CODE": "7049",
    "UOM": "PC"
  },
  {
    "Article": "1419245",
    "Article Description": "CBTL NSA VANILLA LATTE LARGE",
    "PLU CODE": "7050",
    "UOM": "PC"
  },
  {
    "Article": "1419246",
    "Article Description": "CBTL NSA CARAMEL LATTE REGULAR",
    "PLU CODE": "7051",
    "UOM": "PC"
  },
  {
    "Article": "1419247",
    "Article Description": "CBTL NSA HOT CHOCOLATE REGULAR",
    "PLU CODE": "7052",
    "UOM": "PC"
  },
  {
    "Article": "1419248",
    "Article Description": "CBTL NSA HOT VANILLA REGULAR",
    "PLU CODE": "7053",
    "UOM": "PC"
  },
  {
    "Article": "1419249",
    "Article Description": "CBTL NSA HOT CHOCOLATE LARAGE",
    "PLU CODE": "7054",
    "UOM": "PC"
  },
  {
    "Article": "1419250",
    "Article Description": "CBTL NSA HOT VANILLA LARGE",
    "PLU CODE": "7055",
    "UOM": "PC"
  },
  {
    "Article": "1419251",
    "Article Description": "CBTL CAPPUCCINO IB SML",
    "PLU CODE": "7056",
    "UOM": "PC"
  },
  {
    "Article": "1419252",
    "Article Description": "CBTL CAPPUCCINO IB REGULAR",
    "PLU CODE": "7057",
    "UOM": "PC"
  },
  {
    "Article": "1419253",
    "Article Description": "CBTL MOCHA IB REGULAR",
    "PLU CODE": "7058",
    "UOM": "PC"
  },
  {
    "Article": "1419254",
    "Article Description": "CBTL CINNAMON IB SML",
    "PLU CODE": "7059",
    "UOM": "PC"
  },
  {
    "Article": "1419255",
    "Article Description": "CBTL CINNAMON IB REGULAR",
    "PLU CODE": "7060",
    "UOM": "PC"
  },
  {
    "Article": "1419256",
    "Article Description": "CBTL CARAMEL IB SML",
    "PLU CODE": "7061",
    "UOM": "PC"
  },
  {
    "Article": "1419257",
    "Article Description": "CBTL CARAMEL IB REGULAR",
    "PLU CODE": "7062",
    "UOM": "PC"
  },
  {
    "Article": "1419258",
    "Article Description": "CBTL HAZELNUT IB SML",
    "PLU CODE": "7063",
    "UOM": "PC"
  },
  {
    "Article": "1419259",
    "Article Description": "CBTL HAZELNUT IB REGULAR",
    "PLU CODE": "7064",
    "UOM": "PC"
  },
  {
    "Article": "1419260",
    "Article Description": "CBTL COOKIE & CREAM IB SML",
    "PLU CODE": "7065",
    "UOM": "PC"
  },
  {
    "Article": "1419261",
    "Article Description": "CBTL COOKIE & CREAM IB REGULAR",
    "PLU CODE": "7066",
    "UOM": "PC"
  },
  {
    "Article": "1419262",
    "Article Description": "CBTL WHITE CHOCOLATE IB SML",
    "PLU CODE": "7067",
    "UOM": "PC"
  },
  {
    "Article": "1419263",
    "Article Description": "CBTL WHITE CHOCOLATE IB REGULAR",
    "PLU CODE": "7068",
    "UOM": "PC"
  },
  {
    "Article": "1419264",
    "Article Description": "CBTL DOUBLE CHOCOLATE IB SML",
    "PLU CODE": "7069",
    "UOM": "PC"
  },
  {
    "Article": "1419265",
    "Article Description": "CBTL DOUBLE CHOCOLATE IB REGULAR",
    "PLU CODE": "7070",
    "UOM": "PC"
  },
  {
    "Article": "1419266",
    "Article Description": "CBTL VANILLA IB REGULAR",
    "PLU CODE": "7071",
    "UOM": "PC"
  },
  {
    "Article": "1419267",
    "Article Description": "CBTL VANILLA IB SML",
    "PLU CODE": "7072",
    "UOM": "PC"
  },
  {
    "Article": "1419268",
    "Article Description": "CBTL MOCHA IB SML",
    "PLU CODE": "7073",
    "UOM": "PC"
  },
  {
    "Article": "1419270",
    "Article Description": "CBTL ULTIMATE VANILLA IB REGULAR",
    "PLU CODE": "7074",
    "UOM": "PC"
  },
  {
    "Article": "1419271",
    "Article Description": "CBTL ULTIMATE VANILLA IB SML",
    "PLU CODE": "7075",
    "UOM": "PC"
  },
  {
    "Article": "1419272",
    "Article Description": "CBTL ULTIMATE MOCHA IB REGULAR",
    "PLU CODE": "7076",
    "UOM": "PC"
  },
  {
    "Article": "1419273",
    "Article Description": "CBTL PURE VANILLA IB SML",
    "PLU CODE": "7077",
    "UOM": "PC"
  },
  {
    "Article": "1419274",
    "Article Description": "CBTL PURE VANILLA IB REGULAR",
    "PLU CODE": "7078",
    "UOM": "PC"
  },
  {
    "Article": "1419275",
    "Article Description": "CBTL PURE CHOCOLATE IB SML",
    "PLU CODE": "7079",
    "UOM": "PC"
  },
  {
    "Article": "1419276",
    "Article Description": "CBTL PURE CHOCOLATE IB REGULAR",
    "PLU CODE": "7080",
    "UOM": "PC"
  },
  {
    "Article": "1419277",
    "Article Description": "CBTL PURE CARAMEL IB SML",
    "PLU CODE": "7081",
    "UOM": "PC"
  },
  {
    "Article": "1419278",
    "Article Description": "CBTL PURE CARAMEL IB REGULAR",
    "PLU CODE": "7082",
    "UOM": "PC"
  },
  {
    "Article": "1419279",
    "Article Description": "CBTL PURE WHITE CHOCOLATE SML",
    "PLU CODE": "7083",
    "UOM": "PC"
  },
  {
    "Article": "1419280",
    "Article Description": "CBTL PURE DOUBLE CHOCOLATE IB SML",
    "PLU CODE": "7084",
    "UOM": "PC"
  },
  {
    "Article": "1419281",
    "Article Description": "CBTL PURE DOUBLE CHOCOLATE IB REGULAR",
    "PLU CODE": "7085",
    "UOM": "PC"
  },
  {
    "Article": "1419282",
    "Article Description": "CBTL PURE WHITE CHOCOLATE REGULAR",
    "PLU CODE": "7086",
    "UOM": "PC"
  },
  {
    "Article": "1419283",
    "Article Description": "CBTL PURE COOKIE & CREAM IB SML",
    "PLU CODE": "7087",
    "UOM": "PC"
  },
  {
    "Article": "1419284",
    "Article Description": "CBTL PURE COOKIE & CREAM IB REGULAR",
    "PLU CODE": "7088",
    "UOM": "PC"
  },
  {
    "Article": "1419285",
    "Article Description": "CBTL PURE HAZELNUT SML",
    "PLU CODE": "7089",
    "UOM": "PC"
  },
  {
    "Article": "1419286",
    "Article Description": "CBTL PURE HAZELNUT REGULAR",
    "PLU CODE": "7090",
    "UOM": "PC"
  },
  {
    "Article": "1419287",
    "Article Description": "CBTL ICED HAZELNUT AMERICANO REGULAR",
    "PLU CODE": "7091",
    "UOM": "PC"
  },
  {
    "Article": "1419288",
    "Article Description": "CBTL ICED HAZELNUT AMERICANO SML",
    "PLU CODE": "7092",
    "UOM": "PC"
  },
  {
    "Article": "1419289",
    "Article Description": "CBTL ICED CARAMEL MACCHIATO SML",
    "PLU CODE": "7093",
    "UOM": "PC"
  },
  {
    "Article": "1419290",
    "Article Description": "CBTL ICED CARAMEL MACCHIATO REGULAR",
    "PLU CODE": "7094",
    "UOM": "PC"
  },
  {
    "Article": "1419291",
    "Article Description": "CBTL ICED CAPPUCCINO SML",
    "PLU CODE": "7095",
    "UOM": "PC"
  },
  {
    "Article": "1419292",
    "Article Description": "CBTL ICED CAPPUCCINO REGULAR",
    "PLU CODE": "7096",
    "UOM": "PC"
  },
  {
    "Article": "1419293",
    "Article Description": "CBTL ICED CHAI TEA LATTE REGULAR",
    "PLU CODE": "7097",
    "UOM": "PC"
  },
  {
    "Article": "1419294",
    "Article Description": "CBTL ICED BLACK COFFEE REGULAR",
    "PLU CODE": "7098",
    "UOM": "PC"
  },
  {
    "Article": "1419295",
    "Article Description": "CBTL ICED CHAI TEA LATTE SML",
    "PLU CODE": "7099",
    "UOM": "PC"
  },
  {
    "Article": "1419296",
    "Article Description": "CBTL ICED ENGB`FAST TEA LATTE REGULAR",
    "PLU CODE": "7100",
    "UOM": "PC"
  },
  {
    "Article": "1419297",
    "Article Description": "CBTL ICED ENGB`FAST TEA LATTE SML",
    "PLU CODE": "7101",
    "UOM": "PC"
  },
  {
    "Article": "1419298",
    "Article Description": "CBTL ICED BLACK COFFEE SML",
    "PLU CODE": "7102",
    "UOM": "PC"
  },
  {
    "Article": "1419299",
    "Article Description": "CBTL ICED MOROCAN MINT TEA LATTE REGULAR",
    "PLU CODE": "7103",
    "UOM": "PC"
  },
  {
    "Article": "1419300",
    "Article Description": "CBTL ICED CAFE LATTE REGULAR",
    "PLU CODE": "7104",
    "UOM": "PC"
  },
  {
    "Article": "1419301",
    "Article Description": "CBTL ICED CAFE LATTE SML",
    "PLU CODE": "7105",
    "UOM": "PC"
  },
  {
    "Article": "1419302",
    "Article Description": "CBTL ICED MOROCAN MINT TEA LATTE SML",
    "PLU CODE": "7106",
    "UOM": "PC"
  },
  {
    "Article": "1419303",
    "Article Description": "CBTL ICED MOCHA LATTE REGULAR",
    "PLU CODE": "7107",
    "UOM": "PC"
  },
  {
    "Article": "1419304",
    "Article Description": "CBTL ICE TROPICL PASSION TEA LATTE REGLR",
    "PLU CODE": "7108",
    "UOM": "PC"
  },
  {
    "Article": "1419305",
    "Article Description": "CBTL ICED MOCHA LATTE SML",
    "PLU CODE": "7109",
    "UOM": "PC"
  },
  {
    "Article": "1419306",
    "Article Description": "CBTL ICED VANILLA LATTE REGULAR",
    "PLU CODE": "7110",
    "UOM": "PC"
  },
  {
    "Article": "1419307",
    "Article Description": "CBTL ICED VANILLA LATTE SML",
    "PLU CODE": "7111",
    "UOM": "PC"
  },
  {
    "Article": "1419308",
    "Article Description": "CBTL ICED ASSAM TEA LATTE REGULAR",
    "PLU CODE": "7112",
    "UOM": "PC"
  },
  {
    "Article": "1419309",
    "Article Description": "CBTL ICED CARAMEL LATTE REGULAR",
    "PLU CODE": "7113",
    "UOM": "PC"
  },
  {
    "Article": "1419310",
    "Article Description": "CBTL ICED ASSAM TEA LATTE SML",
    "PLU CODE": "7114",
    "UOM": "PC"
  },
  {
    "Article": "1419311",
    "Article Description": "CBTL ICED CARAMEL LATTE SML",
    "PLU CODE": "7115",
    "UOM": "PC"
  },
  {
    "Article": "1419312",
    "Article Description": "CBTL ICE DOUBLE VANILLA TEA LATTE REGLR",
    "PLU CODE": "7116",
    "UOM": "PC"
  },
  {
    "Article": "1419313",
    "Article Description": "CBTL ICED HAZELNUT LATTE REGULAR",
    "PLU CODE": "7117",
    "UOM": "PC"
  },
  {
    "Article": "1419314",
    "Article Description": "CBTL ICED HAZELNUT LATTE SML",
    "PLU CODE": "7118",
    "UOM": "PC"
  },
  {
    "Article": "1419315",
    "Article Description": "CBTL ICE DOUBLE VANILLA TEA LATTE SML",
    "PLU CODE": "7119",
    "UOM": "PC"
  },
  {
    "Article": "1419316",
    "Article Description": "CBTL SWEDISH BERRY IT SML",
    "PLU CODE": "7120",
    "UOM": "PC"
  },
  {
    "Article": "1419317",
    "Article Description": "CBTL ICE TROPICL PASSION TEA LATTE SML",
    "PLU CODE": "7121",
    "UOM": "PC"
  },
  {
    "Article": "1419318",
    "Article Description": "CBTL SWEDISH BERRY IT REGULAR",
    "PLU CODE": "7122",
    "UOM": "PC"
  },
  {
    "Article": "1419319",
    "Article Description": "CBTL SOUTHERN BLEND IT SML",
    "PLU CODE": "7123",
    "UOM": "PC"
  },
  {
    "Article": "1419320",
    "Article Description": "CBTL SOUTHERN BLEND IT REGULAR",
    "PLU CODE": "7124",
    "UOM": "PC"
  },
  {
    "Article": "1419321",
    "Article Description": "CBTL ICED TEA OF THE DAY SML",
    "PLU CODE": "7125",
    "UOM": "PC"
  },
  {
    "Article": "1419322",
    "Article Description": "CBTL ICED WHITE CHOCOLATE LATTE REGULAR",
    "PLU CODE": "7126",
    "UOM": "PC"
  },
  {
    "Article": "1419323",
    "Article Description": "CBTL ICED TEA OF THE DAY REGULAR",
    "PLU CODE": "7127",
    "UOM": "PC"
  },
  {
    "Article": "1419324",
    "Article Description": "CBTL ICED WHITE CHOCOLATE LATTE SML",
    "PLU CODE": "7128",
    "UOM": "PC"
  },
  {
    "Article": "1419325",
    "Article Description": "CBTL LEMON ICED DRINK SML",
    "PLU CODE": "7129",
    "UOM": "PC"
  },
  {
    "Article": "1419326",
    "Article Description": "CBTL ICED DOUBLE CHOCOLATE LATE SML",
    "PLU CODE": "7130",
    "UOM": "PC"
  },
  {
    "Article": "1419327",
    "Article Description": "CBTL LEMON ICED TEA REGULAR",
    "PLU CODE": "7131",
    "UOM": "PC"
  },
  {
    "Article": "1419328",
    "Article Description": "CBTL ICED DOUBLE CHOCOLATE LATE REGULAR",
    "PLU CODE": "7132",
    "UOM": "PC"
  },
  {
    "Article": "1419329",
    "Article Description": "CBTL PEACH ICED TEA SML",
    "PLU CODE": "7133",
    "UOM": "PC"
  },
  {
    "Article": "1419330",
    "Article Description": "CBTL PEACH ICED TEA REGULAR",
    "PLU CODE": "7134",
    "UOM": "PC"
  },
  {
    "Article": "1419331",
    "Article Description": "CBTL MANGO ICED TEA REGULAR",
    "PLU CODE": "7135",
    "UOM": "PC"
  },
  {
    "Article": "1419332",
    "Article Description": "CBTL MANGO ICE TEA SML",
    "PLU CODE": "7136",
    "UOM": "PC"
  },
  {
    "Article": "1419333",
    "Article Description": "CBTL NSA VANILLA IB SML",
    "PLU CODE": "7137",
    "UOM": "PC"
  },
  {
    "Article": "1419334",
    "Article Description": "CBTL NSA VANILLA IB REGULAR",
    "PLU CODE": "7138",
    "UOM": "PC"
  },
  {
    "Article": "1419335",
    "Article Description": "CBTL NSA MOCHA IB REGULAR",
    "PLU CODE": "7139",
    "UOM": "PC"
  },
  {
    "Article": "1419336",
    "Article Description": "CBTL NSA CINNAMON IB SML",
    "PLU CODE": "7140",
    "UOM": "PC"
  },
  {
    "Article": "1419337",
    "Article Description": "CBTL NSA CINNAMON IB REGULAR",
    "PLU CODE": "7141",
    "UOM": "PC"
  },
  {
    "Article": "1419338",
    "Article Description": "CBTL NSA CARAMEL IB SML",
    "PLU CODE": "7142",
    "UOM": "PC"
  },
  {
    "Article": "1419339",
    "Article Description": "CBTL NSA CARAMEL IB REGULAR",
    "PLU CODE": "7143",
    "UOM": "PC"
  },
  {
    "Article": "1419340",
    "Article Description": "CBTL NSA MOCHA IB SML",
    "PLU CODE": "7144",
    "UOM": "PC"
  },
  {
    "Article": "1419341",
    "Article Description": "CBTL NSA COOKIE & CREAM IB SML",
    "PLU CODE": "7145",
    "UOM": "PC"
  },
  {
    "Article": "1419342",
    "Article Description": "CBTL NSA COOKIE & CREAM IB REGULAR",
    "PLU CODE": "7146",
    "UOM": "PC"
  },
  {
    "Article": "1419343",
    "Article Description": "CBTL NSA ULTIMATE MOCHA IB REGULAR",
    "PLU CODE": "7147",
    "UOM": "PC"
  },
  {
    "Article": "1419344",
    "Article Description": "CBTL NSA ULTIMATE MOCHA IB SML",
    "PLU CODE": "7148",
    "UOM": "PC"
  },
  {
    "Article": "1419345",
    "Article Description": "CBTL NSA ULTIMATE VANILLA IB REGULAR",
    "PLU CODE": "7149",
    "UOM": "PC"
  },
  {
    "Article": "1419346",
    "Article Description": "CBTL NSA ULTIMATE VANILLA IB SML",
    "PLU CODE": "7150",
    "UOM": "PC"
  },
  {
    "Article": "1419347",
    "Article Description": "CBTL NSA PURE CARAMEL IB SML",
    "PLU CODE": "7151",
    "UOM": "PC"
  },
  {
    "Article": "1419348",
    "Article Description": "CBTL NSA PURE CHOCOLATE IB SML",
    "PLU CODE": "7152",
    "UOM": "PC"
  },
  {
    "Article": "1419349",
    "Article Description": "CBTL NSA PURE VANILLA IB SML",
    "PLU CODE": "7153",
    "UOM": "PC"
  },
  {
    "Article": "1419350",
    "Article Description": "CBTL NSA PURE CHOCOLATE IB REGULAR",
    "PLU CODE": "7154",
    "UOM": "PC"
  },
  {
    "Article": "1419351",
    "Article Description": "CBTL NSA PURE VANILLA IB REGULAR",
    "PLU CODE": "7155",
    "UOM": "PC"
  },
  {
    "Article": "1419352",
    "Article Description": "CBTL NSA PURE CARAMEL IB REGULAR",
    "PLU CODE": "7156",
    "UOM": "PC"
  },
  {
    "Article": "1419353",
    "Article Description": "CBTL NSA ICED CHAI LATTE REGULAR",
    "PLU CODE": "7157",
    "UOM": "PC"
  },
  {
    "Article": "1419354",
    "Article Description": "CBTL NSA ICED CHAI LATTE SML",
    "PLU CODE": "7158",
    "UOM": "PC"
  },
  {
    "Article": "1419355",
    "Article Description": "CBTL NSA ICED DBL VANILLA LATTE REGULAR",
    "PLU CODE": "7159",
    "UOM": "PC"
  },
  {
    "Article": "1419356",
    "Article Description": "CBTL NSA ICED DBL VANILLA LATTE SML",
    "PLU CODE": "7160",
    "UOM": "PC"
  },
  {
    "Article": "1419357",
    "Article Description": "CBTL NSA ICED ENG-BFAST LATTE REGULAR",
    "PLU CODE": "7161",
    "UOM": "PC"
  },
  {
    "Article": "1419358",
    "Article Description": "CBTL NSA ICED ENG-BFAST LATTE SML",
    "PLU CODE": "7162",
    "UOM": "PC"
  },
  {
    "Article": "1419359",
    "Article Description": "CBTL NSA ICED MOROCN MINT LATTE REGULAR",
    "PLU CODE": "7163",
    "UOM": "PC"
  },
  {
    "Article": "1419360",
    "Article Description": "CBTL NSA ICED MOROCN MINT LATTE SML",
    "PLU CODE": "7164",
    "UOM": "PC"
  },
  {
    "Article": "1419361",
    "Article Description": "CBTL NSA ICED TROPL PASION LATE REGULAR",
    "PLU CODE": "7165",
    "UOM": "PC"
  },
  {
    "Article": "1419362",
    "Article Description": "CBTL NSA ICED TROPL PASSION LATTE",
    "PLU CODE": "7166",
    "UOM": "PC"
  },
  {
    "Article": "1419363",
    "Article Description": "CBTL NSA ASSAM TEA LATTE SML",
    "PLU CODE": "7167",
    "UOM": "PC"
  },
  {
    "Article": "1419364",
    "Article Description": "CBTL NSA ICED ASSAM TEA LATTE REGULAR",
    "PLU CODE": "7168",
    "UOM": "PC"
  },
  {
    "Article": "1419365",
    "Article Description": "CBTL NSA ICED MOCHA LATTE SML",
    "PLU CODE": "7169",
    "UOM": "PC"
  },
  {
    "Article": "1419366",
    "Article Description": "CBTL NSA ICED MOCHA LATTE REGULAR",
    "PLU CODE": "7170",
    "UOM": "PC"
  },
  {
    "Article": "1419367",
    "Article Description": "CBTL NSA ICED CARAMEL LATTE SML",
    "PLU CODE": "7171",
    "UOM": "PC"
  },
  {
    "Article": "1419368",
    "Article Description": "CBTL NSA ICED CARAMEL LATTE REGULAR",
    "PLU CODE": "7172",
    "UOM": "PC"
  },
  {
    "Article": "1419369",
    "Article Description": "CBTL NSA ICED VANILLA LATTE REGULAR",
    "PLU CODE": "7173",
    "UOM": "PC"
  },
  {
    "Article": "1419370",
    "Article Description": "CBTL NSA ICED VANILLA LATTE SML",
    "PLU CODE": "7174",
    "UOM": "PC"
  },
  {
    "Article": "1419371",
    "Article Description": "CBTL CLASSIC BIRCHER MUSSILI",
    "PLU CODE": "7175",
    "UOM": "PC"
  },
  {
    "Article": "1419372",
    "Article Description": "CBTL CREAMY MUSHROOM WITH HASH BROWN",
    "PLU CODE": "7176",
    "UOM": "PC"
  },
  {
    "Article": "1419373",
    "Article Description": "CBTL HASH BROWN WITH BAKED BEANS",
    "PLU CODE": "7177",
    "UOM": "PC"
  },
  {
    "Article": "1419374",
    "Article Description": "CBTL QUINOA POHA",
    "PLU CODE": "7178",
    "UOM": "PC"
  },
  {
    "Article": "1419375",
    "Article Description": "CBTL CBTL VEGGIE BIG BREAKFAST",
    "PLU CODE": "7179",
    "UOM": "PC"
  },
  {
    "Article": "1419376",
    "Article Description": "CBTL BAKED MASALA SCRAMBLE",
    "PLU CODE": "7180",
    "UOM": "PC"
  },
  {
    "Article": "1419377",
    "Article Description": "CBTL EGG FRIED CROISSANT",
    "PLU CODE": "7181",
    "UOM": "PC"
  },
  {
    "Article": "1419378",
    "Article Description": "CBTL FRIED EGG",
    "PLU CODE": "7182",
    "UOM": "PC"
  },
  {
    "Article": "1419379",
    "Article Description": "CBTL OMLETTE",
    "PLU CODE": "7183",
    "UOM": "PC"
  },
  {
    "Article": "1419380",
    "Article Description": "CBTL 3 EGG WHITE FLUFFY OMELETTE",
    "PLU CODE": "7184",
    "UOM": "PC"
  },
  {
    "Article": "1419381",
    "Article Description": "CBTL HAM AND CHEESE OMELETTE",
    "PLU CODE": "7185",
    "UOM": "PC"
  },
  {
    "Article": "1419382",
    "Article Description": "CBTL SAUSAGES AND MUSHROOM OMELETTE",
    "PLU CODE": "7186",
    "UOM": "PC"
  },
  {
    "Article": "1419383",
    "Article Description": "CBTL SMOKED CHICKEN SAUSAGES",
    "PLU CODE": "7187",
    "UOM": "PC"
  },
  {
    "Article": "1419384",
    "Article Description": "CBTL CHICKEN HAM",
    "PLU CODE": "7188",
    "UOM": "PC"
  },
  {
    "Article": "1419385",
    "Article Description": "CBTL CHICKEN MINCED OMELETTE",
    "PLU CODE": "7189",
    "UOM": "PC"
  },
  {
    "Article": "1419386",
    "Article Description": "CBTL CAESAR",
    "PLU CODE": "7190",
    "UOM": "PC"
  },
  {
    "Article": "1419387",
    "Article Description": "CBTL QUINOA SALAD",
    "PLU CODE": "7191",
    "UOM": "PC"
  },
  {
    "Article": "1419388",
    "Article Description": "CBTL SUMMER DELIGHT",
    "PLU CODE": "7192",
    "UOM": "PC"
  },
  {
    "Article": "1419389",
    "Article Description": "CBTL GRILLED CHICKEN & CHEESE",
    "PLU CODE": "7193",
    "UOM": "PC"
  },
  {
    "Article": "1419390",
    "Article Description": "CBTL PEPPER CHICKEN",
    "PLU CODE": "7194",
    "UOM": "PC"
  },
  {
    "Article": "1419391",
    "Article Description": "CBTL PESTO CHICKEN ROASTED PEPPER SALSA",
    "PLU CODE": "7195",
    "UOM": "PC"
  },
  {
    "Article": "1419392",
    "Article Description": "CBTL ROAST VEGETABLE WITH HUMMUS",
    "PLU CODE": "7196",
    "UOM": "PC"
  },
  {
    "Article": "1419393",
    "Article Description": "CBTL PEPPER COTTAGE CHEESE",
    "PLU CODE": "7197",
    "UOM": "PC"
  },
  {
    "Article": "1419394",
    "Article Description": "CBTL BOMBAY ALOO MASALA",
    "PLU CODE": "7198",
    "UOM": "PC"
  },
  {
    "Article": "1419395",
    "Article Description": "CBTL FUSILLI ARRABIATA",
    "PLU CODE": "7199",
    "UOM": "PC"
  },
  {
    "Article": "1419396",
    "Article Description": "CBTL SPGHETTI VEGGIE AGLIO OLIO BASILICO",
    "PLU CODE": "7200",
    "UOM": "PC"
  },
  {
    "Article": "1419397",
    "Article Description": "CBTL PENNE CHEESY CREAM MUSHROOM CBTL",
    "PLU CODE": "7201",
    "UOM": "PC"
  },
  {
    "Article": "1419398",
    "Article Description": "CBTL BAKED MINCE VEGETABLE",
    "PLU CODE": "7202",
    "UOM": "PC"
  },
  {
    "Article": "1419399",
    "Article Description": "CBTL PENNE CHICKEN TOMATO CREAM",
    "PLU CODE": "7203",
    "UOM": "PC"
  },
  {
    "Article": "1419400",
    "Article Description": "CBTL SPAGHETTI RST CHICKEN N PESTO CREAM",
    "PLU CODE": "7204",
    "UOM": "PC"
  },
  {
    "Article": "1419401",
    "Article Description": "CBTL GRILL CHICKEN THREE PEPPER SAUCE",
    "PLU CODE": "7205",
    "UOM": "PC"
  },
  {
    "Article": "1419402",
    "Article Description": "CBTL SPAGHETTI BOLOGNAISE",
    "PLU CODE": "7206",
    "UOM": "PC"
  },
  {
    "Article": "1419403",
    "Article Description": "CBTL SAUTE MUSHROOM",
    "PLU CODE": "7207",
    "UOM": "PC"
  },
  {
    "Article": "1419404",
    "Article Description": "CBTL CREAMY SPINACH",
    "PLU CODE": "7208",
    "UOM": "PC"
  },
  {
    "Article": "1419405",
    "Article Description": "CBTL HASH BROWN 2NOS",
    "PLU CODE": "7209",
    "UOM": "PC"
  },
  {
    "Article": "1419406",
    "Article Description": "CBTL ADD MUSHROOM",
    "PLU CODE": "7210",
    "UOM": "PC"
  },
  {
    "Article": "1419407",
    "Article Description": "CBTL CBTL ADD OLIVES",
    "PLU CODE": "7211",
    "UOM": "PC"
  },
  {
    "Article": "1419408",
    "Article Description": "CBTL ADD EXTRA CHEESE",
    "PLU CODE": "7212",
    "UOM": "PC"
  },
  {
    "Article": "1419409",
    "Article Description": "CBTL ADD VEGGIES",
    "PLU CODE": "7213",
    "UOM": "PC"
  },
  {
    "Article": "1419410",
    "Article Description": "CBTL ADD CHICKEN",
    "PLU CODE": "7214",
    "UOM": "PC"
  },
  {
    "Article": "1419411",
    "Article Description": "CBTL ADD EGG",
    "PLU CODE": "7215",
    "UOM": "PC"
  },
  {
    "Article": "1419412",
    "Article Description": "CBTL ADD CHICKEN SAUSAGE",
    "PLU CODE": "7216",
    "UOM": "PC"
  },
  {
    "Article": "1419413",
    "Article Description": "CBTL ADD CHICKEN HAM",
    "PLU CODE": "7217",
    "UOM": "PC"
  },
  {
    "Article": "1419414",
    "Article Description": "CBTL ADD SOYA MILK",
    "PLU CODE": "7218",
    "UOM": "PC"
  },
  {
    "Article": "1419415",
    "Article Description": "CBTL ADD PANEER",
    "PLU CODE": "7219",
    "UOM": "PC"
  },
  {
    "Article": "1419416",
    "Article Description": "CBTL CHOCO ALMOND PROTEIN 32GM",
    "PLU CODE": "7220",
    "UOM": "PC"
  },
  {
    "Article": "1419417",
    "Article Description": "CBTL NUTTY APRICOT FIBER 32GM",
    "PLU CODE": "7221",
    "UOM": "PC"
  },
  {
    "Article": "1419418",
    "Article Description": "CBTL ORG DARK CHOCOLATE VITAMIN C 32GM",
    "PLU CODE": "7222",
    "UOM": "PC"
  },
  {
    "Article": "1419419",
    "Article Description": "CBTL YOGHURTBERRY ANTIOXIDANTS 32GM",
    "PLU CODE": "7223",
    "UOM": "PC"
  },
  {
    "Article": "1419420",
    "Article Description": "CBTL BOTTLE WATER 500 ML",
    "PLU CODE": "7224",
    "UOM": "PC"
  },
  {
    "Article": "1419421",
    "Article Description": "CBTL BOTTLE WATER 500 ML",
    "PLU CODE": "7225",
    "UOM": "PC"
  },
  {
    "Article": "1419573",
    "Article Description": "NACTARINE IMPORTED",
    "PLU CODE": "7244",
    "UOM": "KG"
  },
  {
    "Article": "1419574",
    "Article Description": "PEACH IMPORTED",
    "PLU CODE": "7245",
    "UOM": "KG"
  },
  {
    "Article": "1419575",
    "Article Description": "APPLE PACIFIC QUEEN",
    "PLU CODE": "7246",
    "UOM": "KG"
  },
  {
    "Article": "1419577",
    "Article Description": "CON ALPHONSO MANGO 1pc",
    "PLU CODE": "7248",
    "UOM": "PC"
  },
  {
    "Article": "1421295",
    "Article Description": "CON MICROGREENS CHINA ROSE",
    "PLU CODE": "7623",
    "UOM": "PC"
  },
  {
    "Article": "1421296",
    "Article Description": "CON MICROGREENS RADISH WHITE",
    "PLU CODE": "7624",
    "UOM": "PC"
  },
  {
    "Article": "1421297",
    "Article Description": "CON MICROGREENS RADISH PINK",
    "PLU CODE": "7625",
    "UOM": "PC"
  },
  {
    "Article": "1421298",
    "Article Description": "CON MICROGREENS RADISH PURPLE",
    "PLU CODE": "7626",
    "UOM": "PC"
  },
  {
    "Article": "1421299",
    "Article Description": "CON MICROGREENS MUSTARD",
    "PLU CODE": "7627",
    "UOM": "PC"
  },
  {
    "Article": "1421301",
    "Article Description": "CON MICROGREENS SUNFLOWER",
    "PLU CODE": "7628",
    "UOM": "PC"
  },
  {
    "Article": "1421302",
    "Article Description": "CON MICROGREENS WHEATGRASS",
    "PLU CODE": "7629",
    "UOM": "PC"
  },
  {
    "Article": "1421311",
    "Article Description": "CON MICROGREENS 4 VARIETY 50 GM",
    "PLU CODE": "7636",
    "UOM": "PC"
  },
  {
    "Article": "1421457",
    "Article Description": "MACADEMIA SINGLE BIG BROOKIE",
    "PLU CODE": "7679",
    "UOM": "PC"
  },
  {
    "Article": "1421458",
    "Article Description": "PECANS SINGLE BIG BROOKIE",
    "PLU CODE": "7680",
    "UOM": "PC"
  },
  {
    "Article": "1421459",
    "Article Description": "BLUEBERRY SINGLE BIG BROOKIE",
    "PLU CODE": "7681",
    "UOM": "PC"
  },
  {
    "Article": "1421460",
    "Article Description": "ALMOND WITH SAFFRON SINGLE BIG BROOKIE",
    "PLU CODE": "7682",
    "UOM": "PC"
  },
  {
    "Article": "1421461",
    "Article Description": "HAZELNUT SINGLE BIG BROOKIE",
    "PLU CODE": "7683",
    "UOM": "PC"
  },
  {
    "Article": "1421462",
    "Article Description": "STRAWBERRY SINGLE BIG BROOKIE",
    "PLU CODE": "7684",
    "UOM": "PC"
  },
  {
    "Article": "1421463",
    "Article Description": "PISTACHIO SINGLE BIG BROOKIE",
    "PLU CODE": "7685",
    "UOM": "PC"
  },
  {
    "Article": "1421464",
    "Article Description": "WALNUT SINGLE BIG BROOKIE",
    "PLU CODE": "7686",
    "UOM": "PC"
  },
  {
    "Article": "1421465",
    "Article Description": "FIGS&HONEY  SINGLE BIG BROOKIE",
    "PLU CODE": "7687",
    "UOM": "PC"
  },
  {
    "Article": "1421466",
    "Article Description": "KIDS SPECIAL SINGLE BIG BROOKIE",
    "PLU CODE": "7688",
    "UOM": "PC"
  },
  {
    "Article": "1421467",
    "Article Description": "ALMOND SINGLE BIG BROOKIE",
    "PLU CODE": "7689",
    "UOM": "PC"
  },
  {
    "Article": "1421468",
    "Article Description": "ORANGE SINGLE BIG BROOKIE",
    "PLU CODE": "7690",
    "UOM": "PC"
  },
  {
    "Article": "1421469",
    "Article Description": "GINGER SINGLE BIG BROOKIE",
    "PLU CODE": "7691",
    "UOM": "PC"
  },
  {
    "Article": "1421470",
    "Article Description": "SPEARMINT SINGLE BIG BROOKIE",
    "PLU CODE": "7692",
    "UOM": "PC"
  },
  {
    "Article": "1421471",
    "Article Description": "SUPER PREMIUM COMBO",
    "PLU CODE": "7693",
    "UOM": "PC"
  },
  {
    "Article": "1421472",
    "Article Description": "PREMIUM COMBO",
    "PLU CODE": "7694",
    "UOM": "PC"
  },
  {
    "Article": "1421473",
    "Article Description": "REGULAR COMBO",
    "PLU CODE": "7695",
    "UOM": "PC"
  },
  {
    "Article": "1421484",
    "Article Description": "HAZELNUT MILK CHOCOLATE SINGLE BROOKIES",
    "PLU CODE": "7696",
    "UOM": "PC"
  },
  {
    "Article": "1422297",
    "Article Description": "CON NATURES CHERRY TOMATO RED",
    "PLU CODE": "7921",
    "UOM": "PC"
  },
  {
    "Article": "1422298",
    "Article Description": "CON NATURES CHERRY TOMATO YELLOW",
    "PLU CODE": "7922",
    "UOM": "PC"
  },
  {
    "Article": "1422299",
    "Article Description": "CON NATURES CUCUMBER EUROPEAN",
    "PLU CODE": "7923",
    "UOM": "PC"
  },
  {
    "Article": "1422301",
    "Article Description": "CON NATURES BABY CORN",
    "PLU CODE": "7924",
    "UOM": "PC"
  },
  {
    "Article": "1422302",
    "Article Description": "CON NATURES SPINACH",
    "PLU CODE": "7925",
    "UOM": "PC"
  },
  {
    "Article": "1422303",
    "Article Description": "CON NATURES BABY SPINACH",
    "PLU CODE": "7926",
    "UOM": "PC"
  },
  {
    "Article": "1422304",
    "Article Description": "CON NATURES CORIANDER",
    "PLU CODE": "7927",
    "UOM": "PC"
  },
  {
    "Article": "1422306",
    "Article Description": "CON NATURES MINT",
    "PLU CODE": "7928",
    "UOM": "PC"
  },
  {
    "Article": "1422307",
    "Article Description": "CON NATURES BASIL ITALIAN",
    "PLU CODE": "7929",
    "UOM": "PC"
  },
  {
    "Article": "1422308",
    "Article Description": "CON NATURES AMARANTHUS RED",
    "PLU CODE": "7930",
    "UOM": "PC"
  },
  {
    "Article": "1422309",
    "Article Description": "CON NATURES LEMON GRASS",
    "PLU CODE": "7931",
    "UOM": "PC"
  },
  {
    "Article": "1422310",
    "Article Description": "CON NATURES LETTUCE LOLO GREEN",
    "PLU CODE": "7932",
    "UOM": "PC"
  },
  {
    "Article": "1422311",
    "Article Description": "CON NATURES LETTUCE LOLO ROSSO RED",
    "PLU CODE": "7933",
    "UOM": "PC"
  },
  {
    "Article": "1422312",
    "Article Description": "CON NATURES LETTUCE ROMAINE",
    "PLU CODE": "7934",
    "UOM": "PC"
  },
  {
    "Article": "1422313",
    "Article Description": "CON NATURES LETTUCE BUTTERHEAD",
    "PLU CODE": "7935",
    "UOM": "PC"
  },
  {
    "Article": "1422314",
    "Article Description": "CON NATURES POK CHOI",
    "PLU CODE": "7936",
    "UOM": "PC"
  },
  {
    "Article": "1422315",
    "Article Description": "CON NATURES SUMMER CRISP",
    "PLU CODE": "7937",
    "UOM": "PC"
  },
  {
    "Article": "1422316",
    "Article Description": "CON NATURES OAK LEAF GREEN",
    "PLU CODE": "7938",
    "UOM": "PC"
  },
  {
    "Article": "1422317",
    "Article Description": "CON NATURES OAK LEAF RED",
    "PLU CODE": "7939",
    "UOM": "PC"
  },
  {
    "Article": "1422318",
    "Article Description": "CON NATURES SALAD MIX",
    "PLU CODE": "7940",
    "UOM": "PC"
  },
  {
    "Article": "1422319",
    "Article Description": "CON NATURES LETTUCE KALE CURLY",
    "PLU CODE": "7941",
    "UOM": "PC"
  },
  {
    "Article": "1422320",
    "Article Description": "CON NATURES LETTUCE SWISS CHARD",
    "PLU CODE": "7942",
    "UOM": "PC"
  },
  {
    "Article": "1422321",
    "Article Description": "CON NATURES LETTUCE ARUGULA",
    "PLU CODE": "7943",
    "UOM": "PC"
  },
  {
    "Article": "1422322",
    "Article Description": "CON NATURES CHILLI RED BUD",
    "PLU CODE": "7944",
    "UOM": "PC"
  },
  {
    "Article": "1422324",
    "Article Description": "CON NATURES CELERY",
    "PLU CODE": "7946",
    "UOM": "PC"
  },
  {
    "Article": "1422325",
    "Article Description": "CON NATURES THYME",
    "PLU CODE": "7947",
    "UOM": "PC"
  },
  {
    "Article": "1422327",
    "Article Description": "CON NATURES SAGE",
    "PLU CODE": "7948",
    "UOM": "PC"
  },
  {
    "Article": "1422328",
    "Article Description": "CON NATURES LEEK",
    "PLU CODE": "7949",
    "UOM": "PC"
  },
  {
    "Article": "1422329",
    "Article Description": "CON NATURES ROSEMARY",
    "PLU CODE": "7950",
    "UOM": "PC"
  },
  {
    "Article": "1422330",
    "Article Description": "CON NATURES DILL LEAVES",
    "PLU CODE": "7951",
    "UOM": "PC"
  },
  {
    "Article": "1422334",
    "Article Description": "CON NATURES SNACKY PEPPER PACK",
    "PLU CODE": "7953",
    "UOM": "PC"
  },
  {
    "Article": "1422335",
    "Article Description": "CON NATURES CHERRY TOMATO PACK",
    "PLU CODE": "7954",
    "UOM": "PC"
  },
  {
    "Article": "1422336",
    "Article Description": "CON NATURES SINGLE BITE CUCUMBER PACK",
    "PLU CODE": "7955",
    "UOM": "PC"
  },
  {
    "Article": "1422337",
    "Article Description": "CON NATURES SNACKY SALAD MIX",
    "PLU CODE": "7956",
    "UOM": "PC"
  },
  {
    "Article": "1422338",
    "Article Description": "CON NATURES SWEET PALREMO PACK",
    "PLU CODE": "7957",
    "UOM": "PC"
  },
  {
    "Article": "1422340",
    "Article Description": "CON NATURES LETTUCE MIX",
    "PLU CODE": "7958",
    "UOM": "PC"
  },
  {
    "Article": "1422341",
    "Article Description": "CON MICROGREENS SPINACH",
    "PLU CODE": "7959",
    "UOM": "PC"
  },
  {
    "Article": "1422342",
    "Article Description": "CON MICROGREENS FENUGREEK",
    "PLU CODE": "7960",
    "UOM": "PC"
  },
  {
    "Article": "1423430",
    "Article Description": "MANGO KESAR MAHA",
    "PLU CODE": "8395",
    "UOM": "PC"
  },
  {
    "Article": "1423654",
    "Article Description": "CHILLI BANGKOK RED LONG",
    "PLU CODE": "8498",
    "UOM": "PC"
  },
  {
    "Article": "1423655",
    "Article Description": "JALAPENO PEPPER GREEN INDIAN",
    "PLU CODE": "8499",
    "UOM": "PC"
  },
  {
    "Article": "1423656",
    "Article Description": "JALAPENO PEPPER RED INDIAN",
    "PLU CODE": "8500",
    "UOM": "PC"
  },
  {
    "Article": "1423657",
    "Article Description": "HOT PEPPER MIX INDIAN",
    "PLU CODE": "8501",
    "UOM": "PC"
  },
  {
    "Article": "1424584",
    "Article Description": "AMBROSI GRANA PADANO 1/8 DOP 4.5KG",
    "PLU CODE": "8650",
    "UOM": "KG"
  },
  {
    "Article": "1424585",
    "Article Description": "AMBROSI PARMIGIANO REGGIANO 4.5KG",
    "PLU CODE": "8651",
    "UOM": "KG"
  },
  {
    "Article": "1424586",
    "Article Description": "AMBROSI PECORINO ROMANO 1/4 DOP 6 KG",
    "PLU CODE": "8652",
    "UOM": "KG"
  },
  {
    "Article": "1424587",
    "Article Description": "AMBROSI PROVOLONE DOLCE DOP 5.5 KG",
    "PLU CODE": "8653",
    "UOM": "KG"
  },
  {
    "Article": "1424594",
    "Article Description": "CENTRAL FORMAGI MOLITERNO AL TARTUFO 5KG",
    "PLU CODE": "8655",
    "UOM": "KG"
  },
  {
    "Article": "1424604",
    "Article Description": "ENTREMONT EMMENTAL BLOCK  4KG",
    "PLU CODE": "8656",
    "UOM": "KG"
  },
  {
    "Article": "1424605",
    "Article Description": "FIANCO GOAT MILK CHEESE WITH TRUFFLES 5K",
    "PLU CODE": "8657",
    "UOM": "KG"
  },
  {
    "Article": "1424609",
    "Article Description": "FRICO LIGHT GOUDA WHEEL 5KG",
    "PLU CODE": "8658",
    "UOM": "KG"
  },
  {
    "Article": "1424626",
    "Article Description": "PRESIDENT BRIE WHEEL 3KG",
    "PLU CODE": "8660",
    "UOM": "KG"
  },
  {
    "Article": "1424628",
    "Article Description": "PRESIDENT EDAM LOAF 3KG",
    "PLU CODE": "8662",
    "UOM": "KG"
  },
  {
    "Article": "1424629",
    "Article Description": "PRESIDENT GOUDA LOAF 3KG",
    "PLU CODE": "8663",
    "UOM": "KG"
  },
  {
    "Article": "1424630",
    "Article Description": "PRESIDENT GOUDA WHEEL 4.5KG",
    "PLU CODE": "8664",
    "UOM": "KG"
  },
  {
    "Article": "1424631",
    "Article Description": "PRESIDENT RACLETTE WHEEL 6.6KG",
    "PLU CODE": "8665",
    "UOM": "KG"
  },
  {
    "Article": "1424632",
    "Article Description": "PRESIDENT RED CHEDDAR LOAF 2.25KG",
    "PLU CODE": "8666",
    "UOM": "KG"
  },
  {
    "Article": "1424633",
    "Article Description": "PRESIDENT WHITE CHEDDAR LOAF 2.25KG",
    "PLU CODE": "8667",
    "UOM": "KG"
  },
  {
    "Article": "1424638",
    "Article Description": "QUESOS LA VASCO CABRALES SPAN BLUE 2.5KG",
    "PLU CODE": "8669",
    "UOM": "KG"
  },
  {
    "Article": "1424640",
    "Article Description": "RUSCELLO GREEN PESTO GOUDA CHEESE 5KG",
    "PLU CODE": "8670",
    "UOM": "KG"
  },
  {
    "Article": "1424642",
    "Article Description": "RUSCELLO RED PESTO GOUDA CHEESE 5KG",
    "PLU CODE": "8671",
    "UOM": "KG"
  },
  {
    "Article": "1424648",
    "Article Description": "SOIGNON- SEMI HARD GOAT WHEEL 4.5KG",
    "PLU CODE": "8672",
    "UOM": "KG"
  },
  {
    "Article": "1424649",
    "Article Description": "TARTUFO GOUDA WHEEL GOUDA TRUFFLES 9KG",
    "PLU CODE": "8673",
    "UOM": "KG"
  },
  {
    "Article": "1424736",
    "Article Description": "KEW PINEAPPLE INDIAN NORTH EAST",
    "PLU CODE": "8682",
    "UOM": "PC"
  },
  {
    "Article": "1424737",
    "Article Description": "CAPSICUM TRI COLOUR PC",
    "PLU CODE": "8683",
    "UOM": "PC"
  },
  {
    "Article": "1424957",
    "Article Description": "TEA CULTURE BLUE PEA FLOWER TEA",
    "PLU CODE": "8685",
    "UOM": "KG"
  },
  {
    "Article": "1424958",
    "Article Description": "TEA CULTURE SMOOTH VANILLA ROOIBOS",
    "PLU CODE": "8686",
    "UOM": "KG"
  },
  {
    "Article": "1424959",
    "Article Description": "TEA CULTURE REFRESHING ROSE MATE",
    "PLU CODE": "8687",
    "UOM": "KG"
  },
  {
    "Article": "1424960",
    "Article Description": "TEA CULTURE CHOCOLATE TRUFFLE",
    "PLU CODE": "8688",
    "UOM": "KG"
  },
  {
    "Article": "1424961",
    "Article Description": "TEA CULTURE TANGY ORANGE ROOIBOS",
    "PLU CODE": "8689",
    "UOM": "KG"
  },
  {
    "Article": "1424962",
    "Article Description": "TEA CULTURE FRENCH CONNECTION",
    "PLU CODE": "8690",
    "UOM": "KG"
  },
  {
    "Article": "1425462",
    "Article Description": "CHERRY IMPORTED USA PACK",
    "PLU CODE": "8707",
    "UOM": "PC"
  },
  {
    "Article": "1425661",
    "Article Description": "OLIVES STUFFED WITH TRUFFLE PASTE IN OIL",
    "PLU CODE": "8714",
    "UOM": "KG"
  },
  {
    "Article": "1425662",
    "Article Description": "GREENOLIVE STFFED SPICY JALPN PSTE INOIL",
    "PLU CODE": "8715",
    "UOM": "KG"
  },
  {
    "Article": "1427465",
    "Article Description": "TEA CULTURE Lively Fruity and Lemon",
    "PLU CODE": "8804",
    "UOM": "KG"
  },
  {
    "Article": "1427466",
    "Article Description": "Tea Culture Reveil - Red",
    "PLU CODE": "8805",
    "UOM": "PC"
  },
  {
    "Article": "1427467",
    "Article Description": "Tea Culture Reveil - Green",
    "PLU CODE": "8806",
    "UOM": "PC"
  },
  {
    "Article": "1427468",
    "Article Description": "Tea Culture Dream Brews - Kahwa",
    "PLU CODE": "8807",
    "UOM": "PC"
  },
  {
    "Article": "1427469",
    "Article Description": "Tea Culture Dream Brews - Darjeeling",
    "PLU CODE": "8808",
    "UOM": "PC"
  },
  {
    "Article": "1427470",
    "Article Description": "Tea Culture Healthy Brews",
    "PLU CODE": "8809",
    "UOM": "PC"
  },
  {
    "Article": "1427471",
    "Article Description": "Tea Culture Teas Estates of India",
    "PLU CODE": "8810",
    "UOM": "PC"
  },
  {
    "Article": "1427472",
    "Article Description": "Tea Culture Best of World Teas",
    "PLU CODE": "8811",
    "UOM": "PC"
  },
  {
    "Article": "1427473",
    "Article Description": "Tea Culture Exotic Selection 10 Tea Bags",
    "PLU CODE": "8812",
    "UOM": "PC"
  },
  {
    "Article": "1428113",
    "Article Description": "GLENSTAL MILD WHITE CHEDDAR 2.5KG",
    "PLU CODE": "8850",
    "UOM": "KG"
  },
  {
    "Article": "1428114",
    "Article Description": "GLENSTAL MILD COLOURED CHEDDAR 2.5KG",
    "PLU CODE": "8851",
    "UOM": "KG"
  },
  {
    "Article": "1428115",
    "Article Description": "GLENSTAL MATURE WHITE CHEDDAR 2.5KG",
    "PLU CODE": "8852",
    "UOM": "KG"
  },
  {
    "Article": "1428116",
    "Article Description": "GLENSTAL MATURE COLOURED CHEDDAR 2.5KG",
    "PLU CODE": "8853",
    "UOM": "KG"
  },
  {
    "Article": "1428117",
    "Article Description": "GLENSTAL EXTRA MATURE WHIT CHEDDAR 2.5KG",
    "PLU CODE": "8854",
    "UOM": "KG"
  },
  {
    "Article": "1428118",
    "Article Description": "GLENSTAL EXTRA MATURE COLR CHEDDAR 2.5KG",
    "PLU CODE": "8855",
    "UOM": "KG"
  },
  {
    "Article": "1428119",
    "Article Description": "GLENSTAL VINTAGE WHITE CHEDDAR 2.5 KG",
    "PLU CODE": "8856",
    "UOM": "KG"
  },
  {
    "Article": "1428120",
    "Article Description": "DODONI GREEK FETA TUB 2 KG",
    "PLU CODE": "8857",
    "UOM": "KG"
  },
  {
    "Article": "1428130",
    "Article Description": "VALBRESO FETA TUB 8KG",
    "PLU CODE": "8867",
    "UOM": "KG"
  },
  {
    "Article": "1428229",
    "Article Description": "CAVOUR PORK SALSICCIA FENNEL  250G",
    "PLU CODE": "8886",
    "UOM": "PC"
  },
  {
    "Article": "1428231",
    "Article Description": "CAVOUR PORK SALSICCIA ROSEMARY 250G",
    "PLU CODE": "8888",
    "UOM": "PC"
  },
  {
    "Article": "1428848",
    "Article Description": "KROON GOUDA WITH GREEN PESTO KG",
    "PLU CODE": "8915",
    "UOM": "KG"
  },
  {
    "Article": "1428849",
    "Article Description": "KROON GOUDA WITH RED PESTO KG",
    "PLU CODE": "8916",
    "UOM": "KG"
  },
  {
    "Article": "1428850",
    "Article Description": "KROON GOUDA WITH CHILLI KG",
    "PLU CODE": "8917",
    "UOM": "KG"
  },
  {
    "Article": "1428851",
    "Article Description": "KROON GOUDA WITH MUSTARD BLOCK",
    "PLU CODE": "8918",
    "UOM": "KG"
  },
  {
    "Article": "1428852",
    "Article Description": "PERLA FONTAL KG",
    "PLU CODE": "8919",
    "UOM": "KG"
  },
  {
    "Article": "1430620",
    "Article Description": "BASIL HERBS PACK 20G",
    "PLU CODE": "9087",
    "UOM": "PC"
  },
  {
    "Article": "1430621",
    "Article Description": "LEMON GRASS PACK 50G",
    "PLU CODE": "9088",
    "UOM": "PC"
  },
  {
    "Article": "1430623",
    "Article Description": "BABY CORN PEELED PACK 200G",
    "PLU CODE": "9090",
    "UOM": "PC"
  },
  {
    "Article": "1430624",
    "Article Description": "ROSEMARY HERBS PACK 20G",
    "PLU CODE": "9091",
    "UOM": "PC"
  },
  {
    "Article": "1430625",
    "Article Description": "THYME HERBS PACK 10G",
    "PLU CODE": "9092",
    "UOM": "PC"
  },
  {
    "Article": "1432058",
    "Article Description": "Cohoma Gift Box (3X75gm + Brew Filter)",
    "PLU CODE": "9267",
    "UOM": "PC"
  },
  {
    "Article": "1432059",
    "Article Description": "Cohoma Cold Brew Tumbler",
    "PLU CODE": "9268",
    "UOM": "PC"
  },
  {
    "Article": "1432060",
    "Article Description": "Cohoma Original Arrabiaca Mellow 100g",
    "PLU CODE": "9269",
    "UOM": "PC"
  },
  {
    "Article": "1432061",
    "Article Description": "Cohoma Original Arrabiaca Mellow 250g",
    "PLU CODE": "9270",
    "UOM": "PC"
  },
  {
    "Article": "1432062",
    "Article Description": "Cohoma Original Arrabiaca Mellow 500g",
    "PLU CODE": "9271",
    "UOM": "PC"
  },
  {
    "Article": "1432063",
    "Article Description": "Cohoma Original Arrabiaca Mellow 1kg",
    "PLU CODE": "9272",
    "UOM": "PC"
  },
  {
    "Article": "1432064",
    "Article Description": "Cohoma Organic Peppermint 100g",
    "PLU CODE": "9273",
    "UOM": "PC"
  },
  {
    "Article": "1432065",
    "Article Description": "Cohoma Organic Peppermint 250g",
    "PLU CODE": "9274",
    "UOM": "PC"
  },
  {
    "Article": "1432066",
    "Article Description": "Cohoma Organic Peppermint 500g",
    "PLU CODE": "9275",
    "UOM": "PC"
  },
  {
    "Article": "1432067",
    "Article Description": "Cohoma Organic Peppermint 1kg",
    "PLU CODE": "9276",
    "UOM": "PC"
  },
  {
    "Article": "1436873",
    "Article Description": "BLUEBERRIES IMPORTED TUB 250G",
    "PLU CODE": "9839",
    "UOM": "PC"
  },
  {
    "Article": "1436885",
    "Article Description": "KENT MANGO IMPORTED",
    "PLU CODE": "9848",
    "UOM": "KG"
  },
  {
    "Article": "1436886",
    "Article Description": "ASTEN MANGO IMPORTED",
    "PLU CODE": "9849",
    "UOM": "KG"
  },
  {
    "Article": "1437150",
    "Article Description": "YELLOW DRAGON FRUIT",
    "PLU CODE": "9948",
    "UOM": "PC"
  },
  {
    "Article": "1437545",
    "Article Description": "Localolives Leccino allaMarchigiana1.9kg",
    "PLU CODE": "10029",
    "UOM": "KG"
  },
  {
    "Article": "1437546",
    "Article Description": "Spicyolive mixStuffedfantasiaolives1.9kg",
    "PLU CODE": "10030",
    "UOM": "KG"
  },
  {
    "Article": "1437547",
    "Article Description": "Pepper stuffed olives 1.9 kg",
    "PLU CODE": "10031",
    "UOM": "KG"
  },
  {
    "Article": "1437548",
    "Article Description": "Olives stuffed with garlic cloves1.9 kg",
    "PLU CODE": "10032",
    "UOM": "KG"
  },
  {
    "Article": "1437549",
    "Article Description": "Caper fruit 1.9 kg",
    "PLU CODE": "10033",
    "UOM": "KG"
  },
  {
    "Article": "1437550",
    "Article Description": "Garlic cloves marinated wt paprika1.9 kg",
    "PLU CODE": "10034",
    "UOM": "KG"
  },
  {
    "Article": "1437551",
    "Article Description": "Feta n crm Stuffed cherr pepp inoil2.0kg",
    "PLU CODE": "10035",
    "UOM": "KG"
  },
  {
    "Article": "1438189",
    "Article Description": "TCW GREEN TEA 300ML POT",
    "PLU CODE": "10068",
    "UOM": "PC"
  },
  {
    "Article": "1438190",
    "Article Description": "TCW KASHMIRI KAHWA TEA 300ML POT",
    "PLU CODE": "10069",
    "UOM": "PC"
  },
  {
    "Article": "1438191",
    "Article Description": "TCW MORROCCAN MINT TEA 300ML POT",
    "PLU CODE": "10070",
    "UOM": "PC"
  },
  {
    "Article": "1438192",
    "Article Description": "TCW MASALA CHAI TEA 120ML KULHAD",
    "PLU CODE": "10071",
    "UOM": "PC"
  },
  {
    "Article": "1438193",
    "Article Description": "TCW FLOWERY BOUQUET TEA 300ML POT",
    "PLU CODE": "10072",
    "UOM": "PC"
  },
  {
    "Article": "1438194",
    "Article Description": "TCW MANGO LOVE TEA 300ML POT",
    "PLU CODE": "10073",
    "UOM": "PC"
  },
  {
    "Article": "1438195",
    "Article Description": "TCW Hibiscus Citrus - Cold 300ml",
    "PLU CODE": "10074",
    "UOM": "PC"
  },
  {
    "Article": "1438196",
    "Article Description": "TCW Iced Matcha Latte 300ml",
    "PLU CODE": "10075",
    "UOM": "PC"
  },
  {
    "Article": "1438197",
    "Article Description": "TCW Passionfruit Rooibos 300ml",
    "PLU CODE": "10076",
    "UOM": "PC"
  },
  {
    "Article": "1438198",
    "Article Description": "TCW Thyme Limoncello 300ml",
    "PLU CODE": "10077",
    "UOM": "PC"
  },
  {
    "Article": "1438199",
    "Article Description": "TCW Pink Peru Punch 300ml",
    "PLU CODE": "10078",
    "UOM": "PC"
  },
  {
    "Article": "1439639",
    "Article Description": "TCW ASSAM HALMARI BLACK 300ML POT",
    "PLU CODE": "10121",
    "UOM": "PC"
  },
  {
    "Article": "1439640",
    "Article Description": "TCW QUEEN OF DARJEELING 300ML POT",
    "PLU CODE": "10122",
    "UOM": "PC"
  },
  {
    "Article": "1439641",
    "Article Description": "TCW SOOTHING CHAMOMILE 300ML POT",
    "PLU CODE": "10123",
    "UOM": "PC"
  },
  {
    "Article": "1439642",
    "Article Description": "TCW STRAWBERRY CHAMPAGNE TEA 300ML POT",
    "PLU CODE": "10124",
    "UOM": "PC"
  },
  {
    "Article": "1439643",
    "Article Description": "TCW CHINESE JASMINE LEAF 300ML POT",
    "PLU CODE": "10125",
    "UOM": "PC"
  },
  {
    "Article": "1439644",
    "Article Description": "TCW JAPANESE SENCHA 300ML POT",
    "PLU CODE": "10126",
    "UOM": "PC"
  },
  {
    "Article": "1440574",
    "Article Description": "MUSHROOM OYSTER INDIAN",
    "PLU CODE": "10180",
    "UOM": "PC"
  },
  {
    "Article": "1441671",
    "Article Description": "NATURES MICROGREENS RADISH",
    "PLU CODE": "10354",
    "UOM": "PC"
  },
  {
    "Article": "1442341",
    "Article Description": "GOOSEBERRY PREMIUM INDIAN",
    "PLU CODE": "10439",
    "UOM": "PC"
  },
  {
    "Article": "1442557",
    "Article Description": "CON ALPHONSO PREMIUM MANGO 1PC",
    "PLU CODE": "10441",
    "UOM": "PC"
  },
  {
    "Article": "1442629",
    "Article Description": "HA MUKHWAS KG",
    "PLU CODE": "10444",
    "UOM": "KG"
  },
  {
    "Article": "1442630",
    "Article Description": "HA BADAM PREMIUM KG",
    "PLU CODE": "10445",
    "UOM": "KG"
  },
  {
    "Article": "1444544",
    "Article Description": "COSMIC CRISP WASHINGTON APPLE",
    "PLU CODE": "10484",
    "UOM": "KG"
  },
  {
    "Article": "1446333",
    "Article Description": "FETA & CRM CHEESE STFFD JALAPENO PEPPER",
    "PLU CODE": "10609",
    "UOM": "KG"
  },
  {
    "Article": "1446334",
    "Article Description": "FETA & CRM CHEESE STFFD MCEDONIAN PEPPER",
    "PLU CODE": "10610",
    "UOM": "KG"
  },
  {
    "Article": "1446394",
    "Article Description": "NATURES INDIAN CHERRIES 400G TUB",
    "PLU CODE": "10611",
    "UOM": "PC"
  },
  {
    "Article": "1448695",
    "Article Description": "LE PAYS FROMAGER RACLETTE 3.5KG",
    "PLU CODE": "10809",
    "UOM": "KG"
  },
  {
    "Article": "1448696",
    "Article Description": "BALLARINI GORGONZOLLA 3KG",
    "PLU CODE": "10810",
    "UOM": "KG"
  },
  {
    "Article": "1448697",
    "Article Description": "CASA VEGA MANCHEGO 4KG",
    "PLU CODE": "10811",
    "UOM": "KG"
  },
  {
    "Article": "1448698",
    "Article Description": "AURICCHIO TALEGGIO DOP 4KG",
    "PLU CODE": "10812",
    "UOM": "KG"
  },
  {
    "Article": "1449533",
    "Article Description": "EPC EMMI GRUYERE CHEESE BLOCK 3.5KG",
    "PLU CODE": "10854",
    "UOM": "KG"
  },
  {
    "Article": "1450777",
    "Article Description": "STANFARMS MILD RED CHEDDAR 2.50KG",
    "PLU CODE": "10865",
    "UOM": "KG"
  },
  {
    "Article": "1450778",
    "Article Description": "STANFARMS MILD WHITE CHEDDAR 2.50KG",
    "PLU CODE": "10866",
    "UOM": "KG"
  },
  {
    "Article": "1450779",
    "Article Description": "STANFARMS MATURE RED CHEDDAR 2.50KG",
    "PLU CODE": "10867",
    "UOM": "KG"
  },
  {
    "Article": "1450780",
    "Article Description": "STANFARMS DOUBLE GLOUCESTER 2.50KG",
    "PLU CODE": "10868",
    "UOM": "KG"
  },
  {
    "Article": "1450781",
    "Article Description": "STANFARMS RED LEICESTER 2.50KG",
    "PLU CODE": "10869",
    "UOM": "KG"
  },
  {
    "Article": "1450782",
    "Article Description": "STANFARMS FH MATURE WHITE CHEDDAR 2.50KG",
    "PLU CODE": "10870",
    "UOM": "KG"
  },
  {
    "Article": "1450783",
    "Article Description": "STANFARMS TASTY LANCASHIRE 2.50KG",
    "PLU CODE": "10871",
    "UOM": "KG"
  },
  {
    "Article": "1452665",
    "Article Description": "TOMATO CHERRY VINE BROWN GOLDEN",
    "PLU CODE": "10994",
    "UOM": "KG"
  },
  {
    "Article": "1452668",
    "Article Description": "GRAPES GREEN ROUND IMPORTED",
    "PLU CODE": "10996",
    "UOM": "KG"
  },
  {
    "Article": "1455684",
    "Article Description": "MULBERRY PREMIUM PACK",
    "PLU CODE": "11842",
    "UOM": "PC"
  },
  {
    "Article": "1455685",
    "Article Description": "STRAWBERRY PREMIUM PACK 200G",
    "PLU CODE": "11843",
    "UOM": "PC"
  },
  {
    "Article": "1455814",
    "Article Description": "MEAT PROZ CHICKEN PREMIUM HAM BLOCK KG",
    "PLU CODE": "11851",
    "UOM": "KG"
  },
  {
    "Article": "1455815",
    "Article Description": "MEAT PROZ PORK PREMIUM HAM BLOCK KG",
    "PLU CODE": "11852",
    "UOM": "KG"
  },
  {
    "Article": "1455816",
    "Article Description": "MEAT PROZ PORK COUNTRY HAM BLOCK KG",
    "PLU CODE": "11853",
    "UOM": "KG"
  },
  {
    "Article": "1455817",
    "Article Description": "MEAT PROZ CHICKEN SEEKH KEBAB -PLAIN KG",
    "PLU CODE": "11854",
    "UOM": "KG"
  },
  {
    "Article": "1455818",
    "Article Description": "MEAT PROZ  CHICKEN SEEKH KEBAB -SPICY KG",
    "PLU CODE": "11855",
    "UOM": "KG"
  },
  {
    "Article": "1455819",
    "Article Description": "MEAT PROZ  CHICKEN SEEKH KEBAB -MALAI KG",
    "PLU CODE": "11856",
    "UOM": "KG"
  },
  {
    "Article": "1455820",
    "Article Description": "MEAT PROZ CHICKEN SEEKH KEBAB-LEHSUNI KG",
    "PLU CODE": "11857",
    "UOM": "KG"
  },
  {
    "Article": "1455821",
    "Article Description": "MEAT PROZ CHICKEN SEEKH KEBAB-PUNJABI KG",
    "PLU CODE": "11858",
    "UOM": "KG"
  },
  {
    "Article": "1455822",
    "Article Description": "MEAT PROZ  CHICKEN MUSHROOM LYONER KG",
    "PLU CODE": "11859",
    "UOM": "KG"
  },
  {
    "Article": "1455823",
    "Article Description": "MEAT PROZ  CHICKEN MORTADELLA-PAPRIKA KG",
    "PLU CODE": "11860",
    "UOM": "KG"
  },
  {
    "Article": "1455824",
    "Article Description": "MEATPROZ CHI.MORTADELLA-PISTACHIO LOG KG",
    "PLU CODE": "11861",
    "UOM": "KG"
  },
  {
    "Article": "1455825",
    "Article Description": "MEAT PROZ CHI. MORTADELLA SMOKED ROLL KG",
    "PLU CODE": "11862",
    "UOM": "KG"
  },
  {
    "Article": "1455826",
    "Article Description": "MEAT PROZ CHI. MORTADELLA SPICY KG",
    "PLU CODE": "11863",
    "UOM": "KG"
  },
  {
    "Article": "1455827",
    "Article Description": "MEAT PROZ CHICKEN MORTADELLA PLAIN KG",
    "PLU CODE": "11864",
    "UOM": "KG"
  },
  {
    "Article": "1455828",
    "Article Description": "MEAT PROZ CHICKEN TANDOORI MORTADELA KG",
    "PLU CODE": "11865",
    "UOM": "KG"
  },
  {
    "Article": "1455829",
    "Article Description": "MEAT PROZ PORK MORTADELLA PLAIN SMOKEDKG",
    "PLU CODE": "11866",
    "UOM": "KG"
  },
  {
    "Article": "1455830",
    "Article Description": "MEATPROZ PORK MORTADELLA PISTACHIO LOGKG",
    "PLU CODE": "11867",
    "UOM": "KG"
  },
  {
    "Article": "1455831",
    "Article Description": "MEAT PROZ PORK HONEY HAM KG",
    "PLU CODE": "11868",
    "UOM": "KG"
  },
  {
    "Article": "1455832",
    "Article Description": "MEAT PROZ TURKEY HAM LOG KG",
    "PLU CODE": "11869",
    "UOM": "KG"
  },
  {
    "Article": "1457847",
    "Article Description": "PALLAS HALLOUMI PDO 1 KG",
    "PLU CODE": "11998",
    "UOM": "KG"
  },
  {
    "Article": "1457850",
    "Article Description": "PRESIDENT GOAT CHEESE 1 KG",
    "PLU CODE": "11999",
    "UOM": "KG"
  },
  {
    "Article": "1458202",
    "Article Description": "ELPOZO TURKEY HAMWITH TRUFFLE&MUSHROOMKG",
    "PLU CODE": "12000",
    "UOM": "KG"
  },
  {
    "Article": "1458203",
    "Article Description": "LA CARNE CHICKEN PREMIUM HAM LOG KG",
    "PLU CODE": "12001",
    "UOM": "KG"
  },
  {
    "Article": "1458204",
    "Article Description": "LA CARNE CHICKEN SPICY MORTADELLA LOG KG",
    "PLU CODE": "12002",
    "UOM": "KG"
  },
  {
    "Article": "1458205",
    "Article Description": "LA CARNE CHICKEN MASALA SALAMI LOG KG",
    "PLU CODE": "12003",
    "UOM": "KG"
  },
  {
    "Article": "1458206",
    "Article Description": "LA CARNE CHICKEN GARLIC SALAMI LOG KG",
    "PLU CODE": "12004",
    "UOM": "KG"
  },
  {
    "Article": "1458207",
    "Article Description": "LA CARNE PORK CLASSIC HAM BLOCK KG",
    "PLU CODE": "12005",
    "UOM": "KG"
  },
  {
    "Article": "1458208",
    "Article Description": "LA CARNE PORK HONEY GLAZED HAM LOG KG",
    "PLU CODE": "12006",
    "UOM": "KG"
  },
  {
    "Article": "1458209",
    "Article Description": "LACARNE TURKEY MORTADELLA & OLIVE LOG KG",
    "PLU CODE": "12007",
    "UOM": "KG"
  },
  {
    "Article": "1458210",
    "Article Description": "LA CARNE CHICKEN PEPPERONI LOG KG",
    "PLU CODE": "12008",
    "UOM": "KG"
  },
  {
    "Article": "1458704",
    "Article Description": "LA CARNE CHICKEN SALAMI LOG KG",
    "PLU CODE": "12026",
    "UOM": "KG"
  },
  {
    "Article": "1462182",
    "Article Description": "TCW MINTY ME TEA",
    "PLU CODE": "12378",
    "UOM": "KG"
  },
  {
    "Article": "1462183",
    "Article Description": "TCW BERRY PUNCH TEA",
    "PLU CODE": "12379",
    "UOM": "KG"
  },
  {
    "Article": "1462259",
    "Article Description": "GRANDÂ OR SMOKED CHEESE PEPPER 3 KG",
    "PLU CODE": "12380",
    "UOM": "KG"
  },
  {
    "Article": "1464818",
    "Article Description": "WHITE STRAWBERRY PACK",
    "PLU CODE": "12460",
    "UOM": "PC"
  },
  {
    "Article": "1464920",
    "Article Description": "NIBBS DALGONA CANDY PC",
    "PLU CODE": "12461",
    "UOM": "PC"
  },
  {
    "Article": "1465016",
    "Article Description": "CHERRY IMPORTED PACK 400G",
    "PLU CODE": "12464",
    "UOM": "PC"
  },
  {
    "Article": "1465062",
    "Article Description": "FIORELLA SMOKED CHEESE 2.5KG",
    "PLU CODE": "12471",
    "UOM": "KG"
  },
  {
    "Article": "1465063",
    "Article Description": "FIORELLA SMOKED CHEESE BLACK PEPPR 2.5KG",
    "PLU CODE": "12472",
    "UOM": "KG"
  },
  {
    "Article": "1465064",
    "Article Description": "FIORELLA SMOKED CHEESE GARLIC 2.5KG",
    "PLU CODE": "12473",
    "UOM": "KG"
  },
  {
    "Article": "1465065",
    "Article Description": "FIORELLA SMOKD CHEESE HERBS&SPICES 2.5KG",
    "PLU CODE": "12474",
    "UOM": "KG"
  },
  {
    "Article": "1465066",
    "Article Description": "NUTORUS  COW MILK FRESH PANEER 200 GM",
    "PLU CODE": "12475",
    "UOM": "PC"
  },
  {
    "Article": "1465150",
    "Article Description": "ELPOZO MORTADELLE OLIVES 3KG",
    "PLU CODE": "12504",
    "UOM": "KG"
  },
  {
    "Article": "1465151",
    "Article Description": "ELPOZO MORTADELLE SICILIANA 3KG",
    "PLU CODE": "12505",
    "UOM": "KG"
  },
  {
    "Article": "1465152",
    "Article Description": "ELPOZO IBERICO HAM VACCUMÂ  4.7KG",
    "PLU CODE": "12506",
    "UOM": "KG"
  },
  {
    "Article": "1465153",
    "Article Description": "ELPOZO CHORIZO DOUX KG",
    "PLU CODE": "12507",
    "UOM": "KG"
  },
  {
    "Article": "1465154",
    "Article Description": "ELPOZO COOKED HAM EXTRA DUROC KG",
    "PLU CODE": "12508",
    "UOM": "KG"
  },
  {
    "Article": "1465155",
    "Article Description": "ELPOZO FIAMBRE JAMON COCIDO 4KG",
    "PLU CODE": "12509",
    "UOM": "KG"
  },
  {
    "Article": "1465156",
    "Article Description": "ELPOZO JAMON TURKEYHAM TRUFFLE&BOLETUSKG",
    "PLU CODE": "12510",
    "UOM": "KG"
  },
  {
    "Article": "1465157",
    "Article Description": "ELPOZO ROASTED TURKEY BREAST 4.6KG",
    "PLU CODE": "12511",
    "UOM": "KG"
  },
  {
    "Article": "1465158",
    "Article Description": "ELPOZO TURKEY BREAST FATLESS 5KG",
    "PLU CODE": "12512",
    "UOM": "KG"
  },
  {
    "Article": "1465159",
    "Article Description": "ELPOZO TURKEY BREASTFATLESS SALTLESS 5KG",
    "PLU CODE": "12513",
    "UOM": "KG"
  },
  {
    "Article": "1465160",
    "Article Description": "ELPOZO TURKEY BREAST SANDWICH 4KG",
    "PLU CODE": "12514",
    "UOM": "KG"
  },
  {
    "Article": "1465161",
    "Article Description": "VANDERZEE PORK MINI HAM&HONEY & THYME1KG",
    "PLU CODE": "12515",
    "UOM": "KG"
  },
  {
    "Article": "1465162",
    "Article Description": "VALPADANA SALAME MILANO KG",
    "PLU CODE": "12516",
    "UOM": "KG"
  },
  {
    "Article": "1465163",
    "Article Description": "VALPADANA SALAME NAPOLI KG",
    "PLU CODE": "12517",
    "UOM": "KG"
  },
  {
    "Article": "1465164",
    "Article Description": "LEGON PORK SALAMI WITH GARLIC KG",
    "PLU CODE": "12518",
    "UOM": "KG"
  },
  {
    "Article": "1465165",
    "Article Description": "ELPOZO PORK COLD CUTS YORK KG",
    "PLU CODE": "12519",
    "UOM": "KG"
  },
  {
    "Article": "1465424",
    "Article Description": "GARDELI GOUDA WITH TRUFFLE 4.5 KG",
    "PLU CODE": "12528",
    "UOM": "KG"
  },
  {
    "Article": "1465425",
    "Article Description": "GARDELI GOUDA WITH CHILI 4.5KG",
    "PLU CODE": "12529",
    "UOM": "KG"
  },
  {
    "Article": "1465426",
    "Article Description": "GARDELI GOUDA WITH GARLIC  4.5 KG",
    "PLU CODE": "12530",
    "UOM": "KG"
  },
  {
    "Article": "1465427",
    "Article Description": "GARDELI GOUDA WITH HERBS 4.5KG",
    "PLU CODE": "12531",
    "UOM": "KG"
  },
  {
    "Article": "1465428",
    "Article Description": "GARDELI GOUDA WITH OLIVES & TOMATO 4.5KG",
    "PLU CODE": "12532",
    "UOM": "KG"
  },
  {
    "Article": "1465429",
    "Article Description": "GARDELI GOUDA WITH PEPPER 4.5KG",
    "PLU CODE": "12533",
    "UOM": "KG"
  },
  {
    "Article": "1465430",
    "Article Description": "GARDELI GOUDA WITH RED PESTO  4.5KG",
    "PLU CODE": "12534",
    "UOM": "KG"
  },
  {
    "Article": "1465431",
    "Article Description": "GARDELI GOUDA WITH WASABI  4.5KG",
    "PLU CODE": "12535",
    "UOM": "KG"
  },
  {
    "Article": "1469024",
    "Article Description": "DLECTA CHEDDAR BLOCK 1KG",
    "PLU CODE": "12771",
    "UOM": "KG"
  },
  {
    "Article": "1365299",
    "Article Description": "MICROGREENS PEAS SHOOTÃ‚Â  50G",
    "PLU CODE": "12940",
    "UOM": "PC"
  },
  {
    "Article": "1472493",
    "Article Description": "LANDANA PRIMA DONNA MATURO REDHARDCHEESE",
    "PLU CODE": "13118",
    "UOM": "KG"
  },
  {
    "Article": "1471376",
    "Article Description": "TADAA GRILLED SWEET CORN COB 1 PC 350G",
    "PLU CODE": "13136",
    "UOM": "PC"
  },
  {
    "Article": "1471368",
    "Article Description": "TADAA SWEET CORN DOUBLE COB BOILED 700G",
    "PLU CODE": "13137",
    "UOM": "PC"
  },
  {
    "Article": "1471367",
    "Article Description": "TADAA SWEET CORN SINGLE COB BOILED 350G",
    "PLU CODE": "13138",
    "UOM": "PC"
  },
  {
    "Article": "1441681",
    "Article Description": "MUSK MELON BOBBY INDIAN",
    "PLU CODE": "13158",
    "UOM": "PC"
  },
  {
    "Article": "1413650",
    "Article Description": "BABY ZUCHINI WITH FLOWERS",
    "PLU CODE": "13159",
    "UOM": "PC"
  },
  {
    "Article": "1413649",
    "Article Description": "ZUCHINI FLOWERS",
    "PLU CODE": "13160",
    "UOM": "PC"
  },
  {
    "Article": "1471369",
    "Article Description": "TADAA SWEET CORN PANI PURI 225G",
    "PLU CODE": "13161",
    "UOM": "PC"
  },
  {
    "Article": "1471370",
    "Article Description": "TADAA SWEETCORN PERI PERI MASALA225GM",
    "PLU CODE": "13162",
    "UOM": "PC"
  },
  {
    "Article": "1471371",
    "Article Description": "TADAA SWEETCORN SEA SALT & PEPPER 225G",
    "PLU CODE": "13163",
    "UOM": "PC"
  },
  {
    "Article": "1471372",
    "Article Description": "TADAA SWEET CORN MASALA MASTI 225G",
    "PLU CODE": "13164",
    "UOM": "PC"
  },
  {
    "Article": "1471373",
    "Article Description": "TADAA SWEET CORN PARTY PACK 725 GMS",
    "PLU CODE": "13165",
    "UOM": "PC"
  },
  {
    "Article": "1471377",
    "Article Description": "TADAA SWEET CORN PURPLE COB BOILED 350G",
    "PLU CODE": "13166",
    "UOM": "PC"
  },
  {
    "Article": "1436867",
    "Article Description": "PANDAN LEAVES",
    "PLU CODE": "13167",
    "UOM": "PC"
  },
  {
    "Article": "1318801",
    "Article Description": "ORGANIC PAYRI MANGO 1PC",
    "PLU CODE": "13168",
    "UOM": "PC"
  },
  {
    "Article": "1369232",
    "Article Description": "ORGANIC MANGO ALPHONSO 1PC",
    "PLU CODE": "13169",
    "UOM": "PC"
  },
  {
    "Article": "1471378",
    "Article Description": "TADAA BOILED SWEET CORN KERNALS 300G",
    "PLU CODE": "13171",
    "UOM": "PC"
  },
  {
    "Article": "1441682",
    "Article Description": "MUSK MELON HONEY DEW INDIAN",
    "PLU CODE": "13198",
    "UOM": "PC"
  }
];
var userList = new List('users', options, values);
