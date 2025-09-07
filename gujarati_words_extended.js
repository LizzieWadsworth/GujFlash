const DATA = [
  {
    "g": "હું",
    "e": "I"
  },
  {
    "g": "તમે",
    "e": "You"
  },
  {
    "g": "તે",
    "e": "He/She/That"
  },
  {
    "g": "આ",
    "e": "This"
  },
  {
    "g": "અમે",
    "e": "We"
  },
  {
    "g": "તેઓ",
    "e": "They"
  },
  {
    "g": "કયું",
    "e": "Which"
  },
  {
    "g": "શું",
    "e": "What"
  },
  {
    "g": "કેમ",
    "e": "Why"
  },
  {
    "g": "ક્યારે",
    "e": "When"
  },
  {
    "g": "ક્યાં",
    "e": "Where"
  },
  {
    "g": "હા",
    "e": "Yes"
  },
  {
    "g": "ના",
    "e": "No"
  },
  {
    "g": "એક",
    "e": "One"
  },
  {
    "g": "બે",
    "e": "Two"
  },
  {
    "g": "ત્રણ",
    "e": "Three"
  },
  {
    "g": "ચાર",
    "e": "Four"
  },
  {
    "g": "પાંચ",
    "e": "Five"
  },
  {
    "g": "છ",
    "e": "Six"
  },
  {
    "g": "સાત",
    "e": "Seven"
  },
  {
    "g": "આઠ",
    "e": "Eight"
  },
  {
    "g": "નવ",
    "e": "Nine"
  },
  {
    "g": "દસ",
    "e": "Ten"
  },
  {
    "g": "પિતા",
    "e": "Father"
  },
  {
    "g": "માતા",
    "e": "Mother"
  },
  {
    "g": "ભાઈ",
    "e": "Brother"
  },
  {
    "g": "બહેન",
    "e": "Sister"
  },
  {
    "g": "દીકરો",
    "e": "Son"
  },
  {
    "g": "દીકરી",
    "e": "Daughter"
  },
  {
    "g": "ઘર",
    "e": "House"
  },
  {
    "g": "શહેર",
    "e": "City"
  },
  {
    "g": "ગામ",
    "e": "Village"
  },
  {
    "g": "શાળા",
    "e": "School"
  },
  {
    "g": "બજાર",
    "e": "Market"
  },
  {
    "g": "મિત્ર",
    "e": "Friend"
  },
  {
    "g": "ખોરાક",
    "e": "Food"
  },
  {
    "g": "પાણી",
    "e": "Water"
  },
  {
    "g": "દૂધ",
    "e": "Milk"
  },
  {
    "g": "ચા",
    "e": "Tea"
  },
  {
    "g": "કોફી",
    "e": "Coffee"
  },
  {
    "g": "રોટલી",
    "e": "Bread"
  },
  {
    "g": "ભાત",
    "e": "Rice"
  },
  {
    "g": "દાળ",
    "e": "Lentils"
  },
  {
    "g": "શાક",
    "e": "Vegetable"
  },
  {
    "g": "ફળ",
    "e": "Fruit"
  },
  {
    "g": "કેળું",
    "e": "Banana"
  },
  {
    "g": "સફરજન",
    "e": "Apple"
  },
  {
    "g": "દાડમ",
    "e": "Pomegranate"
  },
  {
    "g": "આંબો",
    "e": "Mango"
  },
  {
    "g": "લીંબુ",
    "e": "Lemon"
  },
  {
    "g": "દ્રાક્ષ",
    "e": "Grapes"
  },
  {
    "g": "તરબૂચ",
    "e": "Watermelon"
  },
  {
    "g": "સંતરો",
    "e": "Orange"
  },
  {
    "g": "કાકડી",
    "e": "Cucumber"
  },
  {
    "g": "બટાકો",
    "e": "Potato"
  },
  {
    "g": "ડુંગળી",
    "e": "Onion"
  },
  {
    "g": "ટમેટું",
    "e": "Tomato"
  },
  {
    "g": "ભીંડો",
    "e": "Okra"
  },
  {
    "g": "રીંગણ",
    "e": "Eggplant"
  },
  {
    "g": "લસણ",
    "e": "Garlic"
  },
  {
    "g": "આદુ",
    "e": "Ginger"
  },
  {
    "g": "મીઠું",
    "e": "Salt"
  },
  {
    "g": "ખાંડ",
    "e": "Sugar"
  },
  {
    "g": "મરી",
    "e": "Pepper"
  },
  {
    "g": "તેલ",
    "e": "Oil"
  },
  {
    "g": "ઘી",
    "e": "Ghee"
  },
  {
    "g": "મકાઈ",
    "e": "Corn"
  },
  {
    "g": "ગહું",
    "e": "Wheat"
  },
  {
    "g": "જૌ",
    "e": "Barley"
  },
  {
    "g": "ચોખા",
    "e": "Rice grains"
  },
  {
    "g": "ફૂલ",
    "e": "Flower"
  },
  {
    "g": "ગુલાબ",
    "e": "Rose"
  },
  {
    "g": "મોગરો",
    "e": "Jasmine"
  },
  {
    "g": "કમળ",
    "e": "Lotus"
  },
  {
    "g": "કુંવળ",
    "e": "Lily"
  },
  {
    "g": "વૃક્ષ",
    "e": "Tree"
  },
  {
    "g": "ઝાડ",
    "e": "Plant"
  },
  {
    "g": "પાન",
    "e": "Leaf"
  },
  {
    "g": "ફળો",
    "e": "Fruits"
  },
  {
    "g": "સૂર્ય",
    "e": "Sun"
  },
  {
    "g": "ચંદ્ર",
    "e": "Moon"
  },
  {
    "g": "તારા",
    "e": "Stars"
  },
  {
    "g": "આકાશ",
    "e": "Sky"
  },
  {
    "g": "વાદળ",
    "e": "Cloud"
  },
  {
    "g": "વરસાદ",
    "e": "Rain"
  },
  {
    "g": "પવન",
    "e": "Wind"
  },
  {
    "g": "હિમ",
    "e": "Snow"
  },
  {
    "g": "સમુદ્ર",
    "e": "Sea"
  },
  {
    "g": "નદી",
    "e": "River"
  },
  {
    "g": "તળાવ",
    "e": "Lake"
  },
  {
    "g": "ઝરણું",
    "e": "Waterfall"
  },
  {
    "g": "પર્વત",
    "e": "Mountain"
  },
  {
    "g": "ટેકરી",
    "e": "Hill"
  },
  {
    "g": "જમીન",
    "e": "Land"
  },
  {
    "g": "માટી",
    "e": "Soil"
  },
  {
    "g": "માર્ગ",
    "e": "Road"
  },
  {
    "g": "ગલી",
    "e": "Lane"
  },
  {
    "g": "રસ્તો",
    "e": "Way"
  },
  {
    "g": "તું",
    "e": "You (informal)"
  },
  {
    "g": "આપણે",
    "e": "We (inclusive)"
  },
  {
    "g": "આપ",
    "e": "You (formal)"
  },
  {
    "g": "મારું",
    "e": "My (neuter)"
  },
  {
    "g": "મારી",
    "e": "My (feminine)"
  },
  {
    "g": "મારા",
    "e": "My (plural/masc.)"
  },
  {
    "g": "તારું",
    "e": "Your (informal, neuter)"
  },
  {
    "g": "તારી",
    "e": "Your (informal, feminine)"
  },
  {
    "g": "તમારું",
    "e": "Your (formal, neuter)"
  },
  {
    "g": "તમારી",
    "e": "Your (formal, feminine)"
  },
  {
    "g": "તમારા",
    "e": "Your (formal, plural/masc.)"
  },
  {
    "g": "તેનું",
    "e": "His/Her/Its (neuter)"
  },
  {
    "g": "તેણી",
    "e": "She"
  },
  {
    "g": "તેણો",
    "e": "He"
  },
  {
    "g": "તેમનું",
    "e": "Their (neuter)"
  },
  {
    "g": "અપનું",
    "e": "Our (neuter, inclusive)"
  },
  {
    "g": "અમારું",
    "e": "Our (neuter)"
  },
  {
    "g": "અમારી",
    "e": "Our (feminine)"
  },
  {
    "g": "અમારા",
    "e": "Our (plural/masc.)"
  },
  {
    "g": "હમણાં",
    "e": "Now"
  },
  {
    "g": "આજ",
    "e": "Today"
  },
  {
    "g": "ગઈકાલે",
    "e": "Yesterday"
  },
  {
    "g": "આવતીકાલે",
    "e": "Tomorrow"
  },
  {
    "g": "અહીં",
    "e": "Here"
  },
  {
    "g": "ત્યાં",
    "e": "There"
  },
  {
    "g": "અંદર",
    "e": "Inside"
  },
  {
    "g": "બહાર",
    "e": "Outside"
  },
  {
    "g": "ઉપર",
    "e": "Above"
  },
  {
    "g": "નીચે",
    "e": "Below"
  },
  {
    "g": "આગળ",
    "e": "Ahead"
  },
  {
    "g": "પાછળ",
    "e": "Behind"
  },
  {
    "g": "બાજુ",
    "e": "Side"
  },
  {
    "g": "તાત્કાલિક",
    "e": "Immediate"
  },
  {
    "g": "ધીમે",
    "e": "Slowly"
  },
  {
    "g": "ઝડપી",
    "e": "Fast"
  },
  {
    "g": "હંમેશાં",
    "e": "Always"
  },
  {
    "g": "ક્યારેક",
    "e": "Sometimes"
  },
  {
    "g": "ક્યારેય નહીં",
    "e": "Never"
  },
  {
    "g": "આજે",
    "e": "Today"
  },
  {
    "g": "હમણાંજ",
    "e": "Just now"
  },
  {
    "g": "બધું",
    "e": "Everything"
  },
  {
    "g": "કંઈ",
    "e": "Anything"
  },
  {
    "g": "કંઈ નહીં",
    "e": "Nothing"
  },
  {
    "g": "થોડું",
    "e": "A little"
  },
  {
    "g": "ઘણું",
    "e": "A lot"
  },
  {
    "g": "ફરી",
    "e": "Again"
  },
  {
    "g": "સોમવાર",
    "e": "Monday"
  },
  {
    "g": "મંગળવાર",
    "e": "Tuesday"
  },
  {
    "g": "બુધવાર",
    "e": "Wednesday"
  },
  {
    "g": "ગુરુવાર",
    "e": "Thursday"
  },
  {
    "g": "શુક્રવાર",
    "e": "Friday"
  },
  {
    "g": "શનિવાર",
    "e": "Saturday"
  },
  {
    "g": "રવિવાર",
    "e": "Sunday"
  },
  {
    "g": "જાન્યુઆરી",
    "e": "January"
  },
  {
    "g": "ફેબ્રુઆરી",
    "e": "February"
  },
  {
    "g": "માર્ચ",
    "e": "March"
  },
  {
    "g": "એપ્રિલ",
    "e": "April"
  },
  {
    "g": "મે",
    "e": "May"
  },
  {
    "g": "જૂન",
    "e": "June"
  },
  {
    "g": "જુલાઈ",
    "e": "July"
  },
  {
    "g": "ઓગસ્ટ",
    "e": "August"
  },
  {
    "g": "સપ્ટેમ્બર",
    "e": "September"
  },
  {
    "g": "ઓક્ટોબર",
    "e": "October"
  },
  {
    "g": "નવેમ્બર",
    "e": "November"
  },
  {
    "g": "ડિસેમ્બર",
    "e": "December"
  },
  {
    "g": "લાલ",
    "e": "Red"
  },
  {
    "g": "નારંગી",
    "e": "Orange (color)"
  },
  {
    "g": "પીળો",
    "e": "Yellow"
  },
  {
    "g": "લીલો",
    "e": "Green"
  },
  {
    "g": "આસમાની",
    "e": "Sky blue"
  },
  {
    "g": "વાદળી",
    "e": "Blue"
  },
  {
    "g": "જામણી",
    "e": "Purple"
  },
  {
    "g": "કેસરી",
    "e": "Saffron"
  },
  {
    "g": "કાળો",
    "e": "Black"
  },
  {
    "g": "સફેદ",
    "e": "White"
  },
  {
    "g": "ભૂરો",
    "e": "Brown"
  },
  {
    "g": "છાંયો",
    "e": "Shade"
  },
  {
    "g": "પત્ની",
    "e": "Wife"
  },
  {
    "g": "પતિ",
    "e": "Husband"
  },
  {
    "g": "દાદા",
    "e": "Grandfather"
  },
  {
    "g": "દાદી",
    "e": "Grandmother"
  },
  {
    "g": "કાકી",
    "e": "Aunt (paternal)"
  },
  {
    "g": "કાકા",
    "e": "Uncle (paternal)"
  },
  {
    "g": "મામા",
    "e": "Uncle (maternal)"
  },
  {
    "g": "મામી",
    "e": "Aunt (maternal)"
  },
  {
    "g": "ફોઈ",
    "e": "Aunt (paternal aunt)"
  },
  {
    "g": "મોસાળ",
    "e": "Maternal uncle's home"
  },
  {
    "g": "પોત્ર",
    "e": "Grandson"
  },
  {
    "g": "પોત્રી",
    "e": "Granddaughter"
  },
  {
    "g": "શિશુ",
    "e": "Infant"
  },
  {
    "g": "બાળક",
    "e": "Child"
  },
  {
    "g": "યુવક",
    "e": "Young man"
  },
  {
    "g": "યુવતી",
    "e": "Young woman"
  },
  {
    "g": "વૃદ્ધ",
    "e": "Elderly"
  },
  {
    "g": "ધર્મ",
    "e": "Religion"
  },
  {
    "g": "ભાષા",
    "e": "Language"
  },
  {
    "g": "વાત",
    "e": "Talk/Speech"
  },
  {
    "g": "કથા",
    "e": "Story"
  },
  {
    "g": "સમાચાર",
    "e": "News"
  },
  {
    "g": "માથું",
    "e": "Head"
  },
  {
    "g": "વાળ",
    "e": "Hair"
  },
  {
    "g": "આંખ",
    "e": "Eye"
  },
  {
    "g": "કાન",
    "e": "Ear"
  },
  {
    "g": "નાક",
    "e": "Nose"
  },
  {
    "g": "મોઢું",
    "e": "Mouth"
  },
  {
    "g": "દાંત",
    "e": "Tooth"
  },
  {
    "g": "જીભ",
    "e": "Tongue"
  },
  {
    "g": "ગળું",
    "e": "Neck/Throat"
  },
  {
    "g": "ખભો",
    "e": "Shoulder"
  },
  {
    "g": "હાથ",
    "e": "Hand"
  },
  {
    "g": "આંગળી",
    "e": "Finger"
  },
  {
    "g": "છાતી",
    "e": "Chest"
  },
  {
    "g": "પેટ",
    "e": "Stomach"
  },
  {
    "g": "પીઠ",
    "e": "Back"
  },
  {
    "g": "પગ",
    "e": "Leg/Foot"
  },
  {
    "g": "ઘૂંટણ",
    "e": "Knee"
  },
  {
    "g": "રક્ત",
    "e": "Blood"
  },
  {
    "g": "હૃદય",
    "e": "Heart"
  },
  {
    "g": "કૂતરો",
    "e": "Dog"
  },
  {
    "g": "બિલાડી",
    "e": "Cat"
  },
  {
    "g": "ગાય",
    "e": "Cow"
  },
  {
    "g": "ભેંસ",
    "e": "Buffalo"
  },
  {
    "g": "ઘોડો",
    "e": "Horse"
  },
  {
    "g": "ધેંશ",
    "e": "Sheep"
  },
  {
    "g": "બકરી",
    "e": "Goat"
  },
  {
    "g": "ડુક્કર",
    "e": "Pig"
  },
  {
    "g": "કૂકડી",
    "e": "Hen"
  },
  {
    "g": "મોર",
    "e": "Peacock"
  },
  {
    "g": "કબૂતર",
    "e": "Pigeon"
  },
  {
    "g": "ગરૂડ",
    "e": "Eagle"
  },
  {
    "g": "માછલી",
    "e": "Fish"
  },
  {
    "g": "વાઘ",
    "e": "Tiger"
  },
  {
    "g": "સિંહ",
    "e": "Lion"
  },
  {
    "g": "હાથી",
    "e": "Elephant"
  },
  {
    "g": "ઉંટ",
    "e": "Camel"
  },
  {
    "g": "રીછ",
    "e": "Bear"
  },
  {
    "g": "લુમડી",
    "e": "Fox"
  },
  {
    "g": "સસલું",
    "e": "Rabbit"
  },
  {
    "g": "દરવાજો",
    "e": "Door"
  },
  {
    "g": "બારી",
    "e": "Window"
  },
  {
    "g": "ભીંત",
    "e": "Wall"
  },
  {
    "g": "છત",
    "e": "Roof/Ceiling"
  },
  {
    "g": "ફરશ",
    "e": "Floor"
  },
  {
    "g": "ખુરશી",
    "e": "Chair"
  },
  {
    "g": "મેજ",
    "e": "Table"
  },
  {
    "g": "પથારી",
    "e": "Bed"
  },
  {
    "g": "આરસો",
    "e": "Mirror"
  },
  {
    "g": "દિવો",
    "e": "Lamp"
  },
  {
    "g": "બલ્બ",
    "e": "Bulb"
  },
  {
    "g": "પંખો",
    "e": "Fan"
  },
  {
    "g": "ઘડિયાળ",
    "e": "Clock"
  },
  {
    "g": "ચાવી",
    "e": "Key"
  },
  {
    "g": "તાળું",
    "e": "Lock"
  },
  {
    "g": "થેલી",
    "e": "Bag"
  },
  {
    "g": "કિતાબ",
    "e": "Book"
  },
  {
    "g": "ખાતું",
    "e": "Notebook/Account"
  },
  {
    "g": "પેન",
    "e": "Pen"
  },
  {
    "g": "પેન્સિલ",
    "e": "Pencil"
  },
  {
    "g": "રબર",
    "e": "Eraser"
  },
  {
    "g": "પાટીયું",
    "e": "Slate/Board"
  },
  {
    "g": "નકશો",
    "e": "Map"
  },
  {
    "g": "કમ્પ્યુટર",
    "e": "Computer"
  },
  {
    "g": "મોબાઈલ",
    "e": "Mobile phone"
  },
  {
    "g": "ચાર્જર",
    "e": "Charger"
  },
  {
    "g": "ટોર્ચ",
    "e": "Torch"
  },
  {
    "g": "બાટલી",
    "e": "Bottle"
  },
  {
    "g": "થાળી",
    "e": "Plate"
  },
  {
    "g": "વાટકી",
    "e": "Bowl"
  },
  {
    "g": "ચમચી",
    "e": "Spoon"
  },
  {
    "g": "કાંટો",
    "e": "Fork"
  },
  {
    "g": "છરી",
    "e": "Knife"
  },
  {
    "g": "ભાંડો",
    "e": "Vessel"
  },
  {
    "g": "હંડો",
    "e": "Pot"
  },
  {
    "g": "તવા",
    "e": "Griddle"
  },
  {
    "g": "કેટલી",
    "e": "Kettle"
  },
  {
    "g": "કપડા",
    "e": "Clothes"
  },
  {
    "g": "શર્ટ",
    "e": "Shirt"
  },
  {
    "g": "પતલૂન",
    "e": "Trousers"
  },
  {
    "g": "પગેરું",
    "e": "Footwear"
  },
  {
    "g": "જુતા",
    "e": "Shoes"
  },
  {
    "g": "ચંપલ",
    "e": "Sandals"
  },
  {
    "g": "ટોપી",
    "e": "Cap"
  },
  {
    "g": "સાડી",
    "e": "Saree"
  },
  {
    "g": "ઘાઘરા",
    "e": "Skirt"
  },
  {
    "g": "દુપટ્ટો",
    "e": "Scarf"
  },
  {
    "g": "કોટ",
    "e": "Coat"
  },
  {
    "g": "મંદિર",
    "e": "Temple"
  },
  {
    "g": "મસ્જિદ",
    "e": "Mosque"
  },
  {
    "g": "ચર્ચ",
    "e": "Church"
  },
  {
    "g": "હોસ્પિટલ",
    "e": "Hospital"
  },
  {
    "g": "હોટેલ",
    "e": "Hotel"
  },
  {
    "g": "રેસ્ટોરન્ટ",
    "e": "Restaurant"
  },
  {
    "g": "સ્ટેશન",
    "e": "Station"
  },
  {
    "g": "વિમાનમથક",
    "e": "Airport"
  },
  {
    "g": "બગીચો",
    "e": "Garden"
  },
  {
    "g": "રમણિય ઉદ્યાન",
    "e": "Amusement park"
  },
  {
    "g": "ગ્રંથાલય",
    "e": "Library"
  },
  {
    "g": "સિનેમા",
    "e": "Cinema"
  },
  {
    "g": "બસ",
    "e": "Bus"
  },
  {
    "g": "ટ્રેન",
    "e": "Train"
  },
  {
    "g": "વિમાન",
    "e": "Airplane"
  },
  {
    "g": "સાયકલ",
    "e": "Bicycle"
  },
  {
    "g": "કાર",
    "e": "Car"
  },
  {
    "g": "ટેક્સી",
    "e": "Taxi"
  },
  {
    "g": "બંદર",
    "e": "Port"
  },
  {
    "g": "જવું",
    "e": "To go"
  },
  {
    "g": "આવવું",
    "e": "To come"
  },
  {
    "g": "ખાવું",
    "e": "To eat"
  },
  {
    "g": "પીવું",
    "e": "To drink"
  },
  {
    "g": "કરવું",
    "e": "To do"
  },
  {
    "g": "કહેવું",
    "e": "To say"
  },
  {
    "g": "આપવું",
    "e": "To give"
  },
  {
    "g": "લેવું",
    "e": "To take"
  },
  {
    "g": "જોવું",
    "e": "To see"
  },
  {
    "g": "રહેવું",
    "e": "To live/stay"
  },
  {
    "g": "લખવું",
    "e": "To write"
  },
  {
    "g": "વાંચવું",
    "e": "To read"
  },
  {
    "g": "રમવું",
    "e": "To play"
  },
  {
    "g": "શીખવું",
    "e": "To learn"
  },
  {
    "g": "સમજવું",
    "e": "To understand"
  },
  {
    "g": "વિચારવું",
    "e": "To think"
  },
  {
    "g": "બનાવવું",
    "e": "To make"
  },
  {
    "g": "ખરીદવું",
    "e": "To buy"
  },
  {
    "g": "વેચવું",
    "e": "To sell"
  },
  {
    "g": "ચાલવું",
    "e": "To walk"
  },
  {
    "g": "દોડવું",
    "e": "To run"
  },
  {
    "g": "બેસવું",
    "e": "To sit"
  },
  {
    "g": "ઉઠવું",
    "e": "To get up"
  },
  {
    "g": "સૂવું",
    "e": "To sleep"
  },
  {
    "g": "બોલવું",
    "e": "To speak"
  },
  {
    "g": "સાંભળવું",
    "e": "To listen"
  },
  {
    "g": "પહોંચવું",
    "e": "To arrive"
  },
  {
    "g": "રહે જવું",
    "e": "To remain"
  },
  {
    "g": "ધોવું",
    "e": "To wash"
  },
  {
    "g": "રસોઈ કરવી",
    "e": "To cook"
  },
  {
    "g": "સફાઈ કરવી",
    "e": "To clean"
  },
  {
    "g": "મદદ કરવી",
    "e": "To help"
  },
  {
    "g": "પ્રાર્થના કરવી",
    "e": "To pray"
  },
  {
    "g": "મોટું",
    "e": "Big"
  },
  {
    "g": "નાનું",
    "e": "Small"
  },
  {
    "g": "લંબુ",
    "e": "Long"
  },
  {
    "g": "ટૂંકું",
    "e": "Short"
  },
  {
    "g": "ઉંચું",
    "e": "Tall/High"
  },
  {
    "g": "નીચું",
    "e": "Low"
  },
  {
    "g": "સારું",
    "e": "Good"
  },
  {
    "g": "ખરાબ",
    "e": "Bad"
  },
  {
    "g": "ગરમ",
    "e": "Hot"
  },
  {
    "g": "ઠંડું",
    "e": "Cold"
  },
  {
    "g": "ખાટું",
    "e": "Sour"
  },
  {
    "g": "તીખું",
    "e": "Spicy"
  },
  {
    "g": "ખરું",
    "e": "True"
  },
  {
    "g": "ખોટું",
    "e": "False/Wrong"
  },
  {
    "g": "સુંદર",
    "e": "Beautiful"
  },
  {
    "g": "ભદ્દું",
    "e": "Ugly"
  },
  {
    "g": "મહંગું",
    "e": "Expensive"
  },
  {
    "g": "સસ્તુ",
    "e": "Cheap"
  },
  {
    "g": "નવું",
    "e": "New"
  },
  {
    "g": "જૂનું",
    "e": "Old"
  },
  {
    "g": "ભારે",
    "e": "Heavy"
  },
  {
    "g": "હલકું",
    "e": "Light (weight)"
  },
  {
    "g": "શાંત",
    "e": "Quiet/Calm"
  },
  {
    "g": "ગંદુ",
    "e": "Dirty"
  },
  {
    "g": "સાફ",
    "e": "Clean"
  },
  {
    "g": "વર્ષ",
    "e": "Year"
  },
  {
    "g": "મહિનો",
    "e": "Month"
  },
  {
    "g": "અઠવાડિયું",
    "e": "Week"
  },
  {
    "g": "દિવસ",
    "e": "Day"
  },
  {
    "g": "ઘંટો",
    "e": "Hour"
  },
  {
    "g": "મિનિટ",
    "e": "Minute"
  },
  {
    "g": "સેકંડ",
    "e": "Second"
  },
  {
    "g": "વજન",
    "e": "Weight"
  },
  {
    "g": "દૂર",
    "e": "Far"
  },
  {
    "g": "નજીક",
    "e": "Near"
  },
  {
    "g": "મધ્ય",
    "e": "Middle"
  },
  {
    "g": "અને",
    "e": "And"
  },
  {
    "g": "પરંતુ",
    "e": "But"
  },
  {
    "g": "અથવા",
    "e": "Or"
  },
  {
    "g": "કારણ કે",
    "e": "Because"
  },
  {
    "g": "જો",
    "e": "If"
  },
  {
    "g": "તેથી",
    "e": "Therefore"
  },
  {
    "g": "હાલાંકિ",
    "e": "Although"
  },
  {
    "g": "દુખાવો",
    "e": "Pain"
  },
  {
    "g": "તબિયત",
    "e": "Health/Condition"
  },
  {
    "g": "ખાંસી",
    "e": "Cough"
  },
  {
    "g": "તાવ",
    "e": "Fever"
  },
  {
    "g": "દવા",
    "e": "Medicine"
  },
  {
    "g": "ડોકટર",
    "e": "Doctor"
  },
  {
    "g": "હાસ્ય",
    "e": "Laughter"
  },
  {
    "g": "આનંદ",
    "e": "Joy"
  },
  {
    "g": "દુઃખ",
    "e": "Sorrow"
  },
  {
    "g": "ક્રોધ",
    "e": "Anger"
  },
  {
    "g": "ભય",
    "e": "Fear"
  },
  {
    "g": "પ્રેમ",
    "e": "Love"
  },
  {
    "g": "મૈત્રી",
    "e": "Friendship"
  },
  {
    "g": "વાવાઝોડું",
    "e": "Storm"
  },
  {
    "g": "ઇન્દ્રધનુષ",
    "e": "Rainbow"
  },
  {
    "g": "વીજળી",
    "e": "Lightning/Electricity"
  },
  {
    "g": "ગરમી",
    "e": "Heat"
  },
  {
    "g": "ઠંડી",
    "e": "Cold (weather)"
  },
  {
    "g": "ભેજ",
    "e": "Humidity"
  },
  {
    "g": "ધુમ્મસ",
    "e": "Fog"
  },
  {
    "g": "નોકરી",
    "e": "Job"
  },
  {
    "g": "વ્યવસાય",
    "e": "Business"
  },
  {
    "g": "ઓફિસ",
    "e": "Office"
  },
  {
    "g": "મજૂરી",
    "e": "Labor"
  },
  {
    "g": "શિક્ષક",
    "e": "Teacher"
  },
  {
    "g": "વિદ્યાર્થી",
    "e": "Student"
  },
  {
    "g": "વિદ્યાલય",
    "e": "School"
  },
  {
    "g": "વિદ્યાપીઠ",
    "e": "University"
  },
  {
    "g": "વિષય",
    "e": "Subject"
  },
  {
    "g": "પરીક્ષા",
    "e": "Exam"
  },
  {
    "g": "અંક",
    "e": "Marks/Points"
  }
];

export default DATA;