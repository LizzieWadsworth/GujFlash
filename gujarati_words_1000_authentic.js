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
    "e": "Maize"
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
    "e": "Utensil"
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
  },
  {
    "g": "અગિયાર",
    "e": "Eleven"
  },
  {
    "g": "બાર",
    "e": "Twelve"
  },
  {
    "g": "તેેર",
    "e": "Thirteen"
  },
  {
    "g": "ચૌદ",
    "e": "Fourteen"
  },
  {
    "g": "પંદર",
    "e": "Fifteen"
  },
  {
    "g": "સોળ",
    "e": "Sixteen"
  },
  {
    "g": "સત્તર",
    "e": "Seventeen"
  },
  {
    "g": "અઢાર",
    "e": "Eighteen"
  },
  {
    "g": "ઓગણીસ",
    "e": "Nineteen"
  },
  {
    "g": "વીસ",
    "e": "Twenty"
  },
  {
    "g": "એકવીસ",
    "e": "Twenty one"
  },
  {
    "g": "બાવીસ",
    "e": "Twenty two"
  },
  {
    "g": "તેવીસ",
    "e": "Twenty three"
  },
  {
    "g": "ચોવીસ",
    "e": "Twenty four"
  },
  {
    "g": "પંચવીસ",
    "e": "Twenty five"
  },
  {
    "g": "છવીસ",
    "e": "Twenty six"
  },
  {
    "g": "સત્તાવીસ",
    "e": "Twenty seven"
  },
  {
    "g": "અઠ્ઠાવીસ",
    "e": "Twenty eight"
  },
  {
    "g": "ઓગણત્રીસ",
    "e": "Twenty nine"
  },
  {
    "g": "ત્રીસ",
    "e": "Thirty"
  },
  {
    "g": "એકત્રીસ",
    "e": "Thirty one"
  },
  {
    "g": "બત્રીસ",
    "e": "Thirty two"
  },
  {
    "g": "તેત્રીસ",
    "e": "Thirty three"
  },
  {
    "g": "ચોત્રીસ",
    "e": "Thirty four"
  },
  {
    "g": "પંત્રિસ",
    "e": "Thirty five"
  },
  {
    "g": "છત્રીસ",
    "e": "Thirty six"
  },
  {
    "g": "સડત્રીસ",
    "e": "Thirty seven"
  },
  {
    "g": "અડત્રીસ",
    "e": "Thirty eight"
  },
  {
    "g": "ઓગણચાલીસ",
    "e": "Thirty nine"
  },
  {
    "g": "ચાલીસ",
    "e": "Forty"
  },
  {
    "g": "એકતાલીસ",
    "e": "Forty one"
  },
  {
    "g": "બેતાલીસ",
    "e": "Forty two"
  },
  {
    "g": "ત્રેતાલીસ",
    "e": "Forty three"
  },
  {
    "g": "ચુમ્માલીસ",
    "e": "Forty four"
  },
  {
    "g": "પિસ્તાલીસ",
    "e": "Forty five"
  },
  {
    "g": "છેતાલીસ",
    "e": "Forty six"
  },
  {
    "g": "સુડતાલીસ",
    "e": "Forty seven"
  },
  {
    "g": "અડતાલીસ",
    "e": "Forty eight"
  },
  {
    "g": "ઓગણપચાસ",
    "e": "Forty nine"
  },
  {
    "g": "પચાસ",
    "e": "Fifty"
  },
  {
    "g": "એકાવન",
    "e": "Fifty one"
  },
  {
    "g": "બાવન",
    "e": "Fifty two"
  },
  {
    "g": "ત્રેપન",
    "e": "Fifty three"
  },
  {
    "g": "ચોપન",
    "e": "Fifty four"
  },
  {
    "g": "પંચાવન",
    "e": "Fifty five"
  },
  {
    "g": "છપ્પન",
    "e": "Fifty six"
  },
  {
    "g": "સત્તાવન",
    "e": "Fifty seven"
  },
  {
    "g": "અઠ્ઠાવન",
    "e": "Fifty eight"
  },
  {
    "g": "ઓગણસાઠ",
    "e": "Fifty nine"
  },
  {
    "g": "સાઠ",
    "e": "Sixty"
  },
  {
    "g": "એકસઠ",
    "e": "Sixty one"
  },
  {
    "g": "બેસઠ",
    "e": "Sixty two"
  },
  {
    "g": "ત્રેસઠ",
    "e": "Sixty three"
  },
  {
    "g": "ચોસઠ",
    "e": "Sixty four"
  },
  {
    "g": "પાંસઠ",
    "e": "Sixty five"
  },
  {
    "g": "છાસઠ",
    "e": "Sixty six"
  },
  {
    "g": "સડસઠ",
    "e": "Sixty seven"
  },
  {
    "g": "અડસઠ",
    "e": "Sixty eight"
  },
  {
    "g": "ઓગણસિત્તેર",
    "e": "Sixty nine"
  },
  {
    "g": "સિત્તેર",
    "e": "Seventy"
  },
  {
    "g": "એકોતેર",
    "e": "Seventy one"
  },
  {
    "g": "બોતેર",
    "e": "Seventy two"
  },
  {
    "g": "ત્રોતેર",
    "e": "Seventy three"
  },
  {
    "g": "ચુમ્મોતેર",
    "e": "Seventy four"
  },
  {
    "g": "પંચોતેર",
    "e": "Seventy five"
  },
  {
    "g": "છોતેર",
    "e": "Seventy six"
  },
  {
    "g": "સિત્તોતેર",
    "e": "Seventy seven"
  },
  {
    "g": "અઠોતેર",
    "e": "Seventy eight"
  },
  {
    "g": "ઓગણએંસી",
    "e": "Seventy nine"
  },
  {
    "g": "એંસી",
    "e": "Eighty"
  },
  {
    "g": "એક્યાસી",
    "e": "Eighty one"
  },
  {
    "g": "બ્યાસી",
    "e": "Eighty two"
  },
  {
    "g": "ત્ર્યાસી",
    "e": "Eighty three"
  },
  {
    "g": "ચોર્યાસી",
    "e": "Eighty four"
  },
  {
    "g": "પંચ્યાસી",
    "e": "Eighty five"
  },
  {
    "g": "છ્યાસી",
    "e": "Eighty six"
  },
  {
    "g": "સિત્યાસી",
    "e": "Eighty seven"
  },
  {
    "g": "અઠ્યાસી",
    "e": "Eighty eight"
  },
  {
    "g": "ઓગણનવ્વાણું",
    "e": "Eighty nine"
  },
  {
    "g": "નવ્વાણું",
    "e": "Ninety"
  },
  {
    "g": "એકાણું",
    "e": "Ninety one"
  },
  {
    "g": "બાણું",
    "e": "Ninety two"
  },
  {
    "g": "ત્રાણું",
    "e": "Ninety three"
  },
  {
    "g": "ચોરાણું",
    "e": "Ninety four"
  },
  {
    "g": "પંચાણું",
    "e": "Ninety five"
  },
  {
    "g": "છાણું",
    "e": "Ninety six"
  },
  {
    "g": "સિત્તાણું",
    "e": "Ninety seven"
  },
  {
    "g": "અઠ્ઠાણું",
    "e": "Ninety eight"
  },
  {
    "g": "નેવાણું",
    "e": "Ninety nine"
  },
  {
    "g": "સો",
    "e": "Hundred"
  },
  {
    "g": "પસંદ કરવું",
    "e": "To choose"
  },
  {
    "g": "વિશ્વાસ રાખવો",
    "e": "To trust"
  },
  {
    "g": "જોઇતું",
    "e": "To need"
  },
  {
    "g": "આશા રાખવી",
    "e": "To hope"
  },
  {
    "g": "પ્રયત્ન કરવો",
    "e": "To try"
  },
  {
    "g": "સ્મરણ કરવું",
    "e": "To remember"
  },
  {
    "g": "ભૂલવું",
    "e": "To forget"
  },
  {
    "g": "વિશ્વાસ કરવો",
    "e": "To believe"
  },
  {
    "g": "રાખવું",
    "e": "To keep"
  },
  {
    "g": "ખોલવું",
    "e": "To open"
  },
  {
    "g": "બંધ કરવું",
    "e": "To close"
  },
  {
    "g": "પ્રારંભ કરવો",
    "e": "To start"
  },
  {
    "g": "પૂર્ણ કરવું",
    "e": "To finish"
  },
  {
    "g": "જીતવું",
    "e": "To win"
  },
  {
    "g": "હારવું",
    "e": "To lose"
  },
  {
    "g": "ચાલાવવું",
    "e": "To drive"
  },
  {
    "g": "તરવું",
    "e": "To swim"
  },
  {
    "g": "ઉડવું",
    "e": "To fly"
  },
  {
    "g": "બાંધવું",
    "e": "To build"
  },
  {
    "g": "તોડવું",
    "e": "To break"
  },
  {
    "g": "સ્વસ્થ",
    "e": "Healthy"
  },
  {
    "g": "બીમાર",
    "e": "Sick"
  },
  {
    "g": "સાહસિક",
    "e": "Brave"
  },
  {
    "g": "ડરપોક",
    "e": "Cowardly"
  },
  {
    "g": "શક્તિશાળી",
    "e": "Strong"
  },
  {
    "g": "નબળું",
    "e": "Weak"
  },
  {
    "g": "ધીમું",
    "e": "Slow"
  },
  {
    "g": "સમૃદ્ધ",
    "e": "Rich"
  },
  {
    "g": "ગરીબ",
    "e": "Poor"
  },
  {
    "g": "પ્રખ્યાત",
    "e": "Famous"
  },
  {
    "g": "અજાણ્યું",
    "e": "Unknown"
  },
  {
    "g": "ખુશ",
    "e": "Happy"
  },
  {
    "g": "દુઃખી",
    "e": "Sad"
  },
  {
    "g": "થકેલું",
    "e": "Tired"
  },
  {
    "g": "ઉત્સાહી",
    "e": "Excited"
  },
  {
    "g": "ખતરનાક",
    "e": "Dangerous"
  },
  {
    "g": "સુરક્ષિત",
    "e": "Safe"
  },
  {
    "g": "રસપ્રદ",
    "e": "Interesting"
  },
  {
    "g": "ચપાટી",
    "e": "Chapati"
  },
  {
    "g": "પરાઠા",
    "e": "Paratha"
  },
  {
    "g": "ખિચડી",
    "e": "Khichdi"
  },
  {
    "g": "ખમણ",
    "e": "Khaman"
  },
  {
    "g": "ઢોકળા",
    "e": "Dhokla"
  },
  {
    "g": "ફાફડા",
    "e": "Fafda"
  },
  {
    "g": "જલેબી",
    "e": "Jalebi"
  },
  {
    "g": "ગાંઠિયા",
    "e": "Ganthiya"
  },
  {
    "g": "સેવ",
    "e": "Sev"
  },
  {
    "g": "શ્રીખંડ",
    "e": "Shrikhand"
  },
  {
    "g": "ખીર",
    "e": "Kheer"
  },
  {
    "g": "હલવો",
    "e": "Halwa"
  },
  {
    "g": "આઇસ્ક્રીમ",
    "e": "Ice cream"
  },
  {
    "g": "ચોકલેટ",
    "e": "Chocolate"
  },
  {
    "g": "બિસ્કીટ",
    "e": "Biscuit"
  },
  {
    "g": "કેક",
    "e": "Cake"
  },
  {
    "g": "પપૈયું",
    "e": "Papaya"
  },
  {
    "g": "અનાનસ",
    "e": "Pineapple"
  },
  {
    "g": "જામફળ",
    "e": "Guava"
  },
  {
    "g": "સીટાફળ",
    "e": "Custard apple"
  },
  {
    "g": "બોર",
    "e": "Jujube"
  },
  {
    "g": "ચીકુ",
    "e": "Sapodilla"
  },
  {
    "g": "જાંબુ",
    "e": "Black plum"
  },
  {
    "g": "કાજુ",
    "e": "Cashew"
  },
  {
    "g": "બદામ",
    "e": "Almond"
  },
  {
    "g": "અખરોટ",
    "e": "Walnut"
  },
  {
    "g": "અંજીર",
    "e": "Fig"
  },
  {
    "g": "ખજૂર",
    "e": "Date"
  },
  {
    "g": "સિંગદાણા",
    "e": "Peanuts"
  },
  {
    "g": "કિસમિસ",
    "e": "Raisins"
  },
  {
    "g": "કઠોળ",
    "e": "Legume"
  },
  {
    "g": "શિંગ",
    "e": "Groundnut"
  },
  {
    "g": "કેરટ",
    "e": "Carrot"
  },
  {
    "g": "મૂળા",
    "e": "Radish"
  },
  {
    "g": "શકરિયા",
    "e": "Sweet potato"
  },
  {
    "g": "કોલીફલાવર",
    "e": "Cauliflower"
  },
  {
    "g": "ફૂલકોબી",
    "e": "Cauliflower"
  },
  {
    "g": "કોબી",
    "e": "Cabbage"
  },
  {
    "g": "સુરતી પાપડી",
    "e": "Flat beans"
  },
  {
    "g": "વાલ",
    "e": "Beans"
  },
  {
    "g": "મેથી",
    "e": "Fenugreek"
  },
  {
    "g": "ધાણા",
    "e": "Coriander"
  },
  {
    "g": "કોથમીર",
    "e": "Cilantro"
  },
  {
    "g": "સોપ",
    "e": "Fennel"
  },
  {
    "g": "તુલસી",
    "e": "Basil"
  },
  {
    "g": "પુદીનુ",
    "e": "Mint"
  },
  {
    "g": "લીલાં મરચાં",
    "e": "Green chili"
  },
  {
    "g": "લાલ મરચાં",
    "e": "Red chili"
  },
  {
    "g": "કોળું",
    "e": "Pumpkin"
  },
  {
    "g": "દૂધી",
    "e": "Bottle gourd"
  },
  {
    "g": "કામદાર",
    "e": "Worker"
  },
  {
    "g": "કિસાન",
    "e": "Farmer"
  },
  {
    "g": "વણિક",
    "e": "Trader"
  },
  {
    "g": "દુકાનદાર",
    "e": "Shopkeeper"
  },
  {
    "g": "લેખક",
    "e": "Writer"
  },
  {
    "g": "કવિ",
    "e": "Poet"
  },
  {
    "g": "ગાયક",
    "e": "Singer"
  },
  {
    "g": "નર્તક",
    "e": "Dancer"
  },
  {
    "g": "અભિનેતા",
    "e": "Actor"
  },
  {
    "g": "અભિનેત્રી",
    "e": "Actress"
  },
  {
    "g": "ડ્રાઈવર",
    "e": "Driver"
  },
  {
    "g": "માઝી",
    "e": "Sailor"
  },
  {
    "g": "પોલીસ",
    "e": "Police"
  },
  {
    "g": "સૈનિક",
    "e": "Soldier"
  },
  {
    "g": "નર્સ",
    "e": "Nurse"
  },
  {
    "g": "ઈજનેર",
    "e": "Engineer"
  },
  {
    "g": "વૈજ્ઞાનિક",
    "e": "Scientist"
  },
  {
    "g": "વકીલ",
    "e": "Lawyer"
  },
  {
    "g": "ન્યાયાધીશ",
    "e": "Judge"
  },
  {
    "g": "હથોડો",
    "e": "Hammer"
  },
  {
    "g": "આરી",
    "e": "Saw"
  },
  {
    "g": "પાનસ",
    "e": "Wrench"
  },
  {
    "g": "પેચકસ",
    "e": "Screwdriver"
  },
  {
    "g": "સોય",
    "e": "Needle"
  },
  {
    "g": "દોરો",
    "e": "Thread"
  },
  {
    "g": "કાતર",
    "e": "Scissors"
  },
  {
    "g": "કુંડો",
    "e": "Pitcher"
  },
  {
    "g": "ઘડો",
    "e": "Clay pot"
  },
  {
    "g": "ચુલો",
    "e": "Stove"
  },
  {
    "g": "અંગીઠી",
    "e": "Fireplace"
  },
  {
    "g": "તંદુર",
    "e": "Tandoor"
  },
  {
    "g": "કુહાડી",
    "e": "Axe"
  },
  {
    "g": "ફાવડો",
    "e": "Shovel"
  },
  {
    "g": "ખુરપી",
    "e": "Hoe"
  },
  {
    "g": "બળદ",
    "e": "Bull"
  },
  {
    "g": "ઘેટું",
    "e": "Sheep"
  },
  {
    "g": "ગધેડો",
    "e": "Donkey"
  },
  {
    "g": "કૂકડો",
    "e": "Rooster"
  },
  {
    "g": "બતક",
    "e": "Duck"
  },
  {
    "g": "હંસ",
    "e": "Goose"
  },
  {
    "g": "કાચબો",
    "e": "Turtle"
  },
  {
    "g": "સાપ",
    "e": "Snake"
  },
  {
    "g": "કરચલો",
    "e": "Crocodile"
  },
  {
    "g": "વાંદરો",
    "e": "Monkey"
  },
  {
    "g": "ચીતો",
    "e": "Leopard"
  },
  {
    "g": "જિરાફ",
    "e": "Giraffe"
  },
  {
    "g": "ઝીબ્રા",
    "e": "Zebra"
  },
  {
    "g": "ખિસકોલી",
    "e": "Squirrel"
  },
  {
    "g": "ચમગાદર",
    "e": "Bat"
  },
  {
    "g": "ડીંબ",
    "e": "Frog"
  },
  {
    "g": "માખી",
    "e": "Fly"
  },
  {
    "g": "મધમાખી",
    "e": "Bee"
  },
  {
    "g": "સપનું",
    "e": "Dream"
  },
  {
    "g": "વિચાર",
    "e": "Thought"
  },
  {
    "g": "આશા",
    "e": "Hope"
  },
  {
    "g": "ભરોસો",
    "e": "Trust"
  },
  {
    "g": "પ્રેરણા",
    "e": "Inspiration"
  },
  {
    "g": "શાંતિ",
    "e": "Peace"
  },
  {
    "g": "સ્વતંત્રતા",
    "e": "Freedom"
  },
  {
    "g": "સમાનતા",
    "e": "Equality"
  },
  {
    "g": "ન્યાય",
    "e": "Justice"
  },
  {
    "g": "સત્ય",
    "e": "Truth"
  },
  {
    "g": "મિત્રતા",
    "e": "Friendship"
  },
  {
    "g": "ઘૃણા",
    "e": "Hate"
  },
  {
    "g": "સહનશીલતા",
    "e": "Tolerance"
  },
  {
    "g": "કરુણા",
    "e": "Compassion"
  },
  {
    "g": "કૃતજ્ઞતા",
    "e": "Gratitude"
  },
  {
    "g": "ભક્તિ",
    "e": "Devotion"
  },
  {
    "g": "સેવા",
    "e": "Service"
  },
  {
    "g": "સંસ્કૃતિ",
    "e": "Culture"
  },
  {
    "g": "સાહસ",
    "e": "Courage"
  },
  {
    "g": "ચકલી",
    "e": "Sparrow"
  },
  {
    "g": "કાગડો",
    "e": "Crow"
  },
  {
    "g": "તોતા",
    "e": "Parrot"
  },
  {
    "g": "કોયલ",
    "e": "Cuckoo"
  },
  {
    "g": "ઘુવડ",
    "e": "Owl"
  },
  {
    "g": "મૈના",
    "e": "Myna"
  },
  {
    "g": "સરસ",
    "e": "Crane"
  },
  {
    "g": "બગલો",
    "e": "Egret/Heron"
  },
  {
    "g": "ગિધ",
    "e": "Vulture"
  },
  {
    "g": "રાજહંસ",
    "e": "Swan"
  },
  {
    "g": "બટેર",
    "e": "Quail"
  },
  {
    "g": "કિંગફિશર",
    "e": "Kingfisher"
  },
  {
    "g": "વ્હેલ",
    "e": "Whale"
  },
  {
    "g": "ડોલ્ફિન",
    "e": "Dolphin"
  },
  {
    "g": "શાર્ક",
    "e": "Shark"
  },
  {
    "g": "જેલીફિશ",
    "e": "Jellyfish"
  },
  {
    "g": "ઓક્ટોપસ",
    "e": "Octopus"
  },
  {
    "g": "કેકડો",
    "e": "Crab"
  },
  {
    "g": "ચીંગળી",
    "e": "Shrimp"
  },
  {
    "g": "શંખ",
    "e": "Conch"
  },
  {
    "g": "ઘોંઘો",
    "e": "Snail"
  },
  {
    "g": "ચીંટી",
    "e": "Ant"
  },
  {
    "g": "દીમક",
    "e": "Termite"
  },
  {
    "g": "મચ્છર",
    "e": "Mosquito"
  },
  {
    "g": "તિતલી",
    "e": "Butterfly"
  },
  {
    "g": "ભમરો",
    "e": "Bumblebee"
  },
  {
    "g": "જૂં",
    "e": "Louse"
  },
  {
    "g": "પીસુ",
    "e": "Flea"
  },
  {
    "g": "મકડો",
    "e": "Spider"
  },
  {
    "g": "જોનક",
    "e": "Leech"
  },
  {
    "g": "વડ",
    "e": "Banyan"
  },
  {
    "g": "પિપળ",
    "e": "Peepal"
  },
  {
    "g": "નીમ",
    "e": "Neem"
  },
  {
    "g": "આમળા",
    "e": "Indian gooseberry"
  },
  {
    "g": "અરંડો",
    "e": "Castor"
  },
  {
    "g": "ચંદન",
    "e": "Sandalwood"
  },
  {
    "g": "તાડ",
    "e": "Palm"
  },
  {
    "g": "આંબલી",
    "e": "Tamarind"
  },
  {
    "g": "અશોક",
    "e": "Ashoka tree"
  },
  {
    "g": "બોરડું",
    "e": "Jujube tree"
  },
  {
    "g": "રાઈ",
    "e": "Mustard seed"
  },
  {
    "g": "જીરું",
    "e": "Cumin"
  },
  {
    "g": "હળદર",
    "e": "Turmeric"
  },
  {
    "g": "હિંગ",
    "e": "Asafoetida"
  },
  {
    "g": "તેજપાન",
    "e": "Bay leaf"
  },
  {
    "g": "લવિંગ",
    "e": "Clove"
  },
  {
    "g": "દાલચીની",
    "e": "Cinnamon"
  },
  {
    "g": "એલચી",
    "e": "Cardamom"
  },
  {
    "g": "જાયફળ",
    "e": "Nutmeg"
  },
  {
    "g": "જાવિત્રી",
    "e": "Mace"
  },
  {
    "g": "તલ",
    "e": "Sesame"
  },
  {
    "g": "ખસખસ",
    "e": "Poppy seeds"
  },
  {
    "g": "સુંઠ",
    "e": "Dry ginger"
  },
  {
    "g": "તુવેર",
    "e": "Pigeon pea"
  },
  {
    "g": "ચણા",
    "e": "Chickpeas"
  },
  {
    "g": "મસૂર",
    "e": "Red lentil"
  },
  {
    "g": "મૂંગ",
    "e": "Green gram"
  },
  {
    "g": "ઉડદ",
    "e": "Black gram"
  },
  {
    "g": "રાજમા",
    "e": "Kidney beans"
  },
  {
    "g": "ચોળી",
    "e": "Black-eyed pea"
  },
  {
    "g": "જવાર",
    "e": "Sorghum"
  },
  {
    "g": "બાજરી",
    "e": "Pearl millet"
  },
  {
    "g": "નાચણી",
    "e": "Finger millet"
  },
  {
    "g": "સામો",
    "e": "Barnyard millet"
  },
  {
    "g": "કુકર",
    "e": "Pressure cooker"
  },
  {
    "g": "તાપેલી",
    "e": "Saucepan"
  },
  {
    "g": "છલણી",
    "e": "Strainer"
  },
  {
    "g": "ઘસણી",
    "e": "Grater"
  },
  {
    "g": "વેલણ",
    "e": "Rolling pin"
  },
  {
    "g": "પાટલું",
    "e": "Rolling board"
  },
  {
    "g": "ડબ્બો",
    "e": "Container"
  },
  {
    "g": "બરણું",
    "e": "Jar"
  },
  {
    "g": "ગ્લાસ",
    "e": "Glass"
  },
  {
    "g": "કપ",
    "e": "Cup"
  },
  {
    "g": "ડોલ",
    "e": "Bucket"
  },
  {
    "g": "થર્મોસ",
    "e": "Thermos"
  },
  {
    "g": "વાસણ",
    "e": "Utensil"
  },
  {
    "g": "પટ્ટો",
    "e": "Belt"
  },
  {
    "g": "મોજાં",
    "e": "Socks"
  },
  {
    "g": "હાથમોજાં",
    "e": "Gloves"
  },
  {
    "g": "કુર્તા",
    "e": "Kurta"
  },
  {
    "g": "પાયજામા",
    "e": "Pajamas"
  },
  {
    "g": "શેરવાણી",
    "e": "Sherwani"
  },
  {
    "g": "લેહેંગો",
    "e": "Lehenga"
  },
  {
    "g": "ઓઢણી",
    "e": "Veil/Shawl"
  },
  {
    "g": "પગડી",
    "e": "Turban"
  },
  {
    "g": "આંગઠી",
    "e": "Ring"
  },
  {
    "g": "ચૂડી",
    "e": "Bangle"
  },
  {
    "g": "હાર",
    "e": "Necklace"
  },
  {
    "g": "નથ",
    "e": "Nose ring"
  },
  {
    "g": "પાયલ",
    "e": "Anklet"
  },
  {
    "g": "બિન્દી",
    "e": "Bindi"
  },
  {
    "g": "ટિકલી",
    "e": "Forehead ornament"
  },
  {
    "g": "બેન્કર",
    "e": "Banker"
  },
  {
    "g": "હિસાબી",
    "e": "Accountant"
  },
  {
    "g": "પ્રોફેસર",
    "e": "Professor"
  },
  {
    "g": "શોધક",
    "e": "Researcher"
  },
  {
    "g": "સ્થાપત્યકાર",
    "e": "Architect"
  },
  {
    "g": "ડિઝાઇનર",
    "e": "Designer"
  },
  {
    "g": "કારગર",
    "e": "Artisan"
  },
  {
    "g": "સુથાર",
    "e": "Carpenter"
  },
  {
    "g": "રાજમિસ્ત્રી",
    "e": "Mason"
  },
  {
    "g": "પ્લંબર",
    "e": "Plumber"
  },
  {
    "g": "ઇલેક્ટ્રિશિયન",
    "e": "Electrician"
  },
  {
    "g": "નોકરાણી",
    "e": "Maid"
  },
  {
    "g": "સફાઈકર્મી",
    "e": "Cleaner"
  },
  {
    "g": "માલી",
    "e": "Gardener"
  },
  {
    "g": "ડાકિયા",
    "e": "Postman"
  },
  {
    "g": "પત્રકાર",
    "e": "Journalist"
  },
  {
    "g": "ફોટોગ્રાફર",
    "e": "Photographer"
  },
  {
    "g": "કારોબારી",
    "e": "Executive"
  },
  {
    "g": "મેનેજર",
    "e": "Manager"
  },
  {
    "g": "દર્દી",
    "e": "Patient"
  },
  {
    "g": "સુધારવું",
    "e": "To improve"
  },
  {
    "g": "ઘટાડવું",
    "e": "To reduce"
  },
  {
    "g": "વધારવું",
    "e": "To increase"
  },
  {
    "g": "મળવું",
    "e": "To meet"
  },
  {
    "g": "રહસ્ય રાખવું",
    "e": "To keep secret"
  },
  {
    "g": "આયોજિત કરવું",
    "e": "To organize"
  },
  {
    "g": "પહેરીવું",
    "e": "To wear"
  },
  {
    "g": "ઉતારવું",
    "e": "To remove (clothes)"
  },
  {
    "g": "ભરવું",
    "e": "To fill"
  },
  {
    "g": "ખાલી કરવું",
    "e": "To empty"
  },
  {
    "g": "માપવું",
    "e": "To measure"
  },
  {
    "g": "સજાવવું",
    "e": "To decorate"
  },
  {
    "g": "પૂછવું",
    "e": "To ask"
  },
  {
    "g": "જવાબ આપવો",
    "e": "To answer"
  },
  {
    "g": "ધ્યાન આપવું",
    "e": "To pay attention"
  },
  {
    "g": "વિરામ लेना",
    "e": "To take a break"
  },
  {
    "g": "આરામ કરવો",
    "e": "To rest"
  },
  {
    "g": "યાદ અપાવવું",
    "e": "To remind"
  },
  {
    "g": "માફ કરવું",
    "e": "To forgive"
  },
  {
    "g": "આભાર માનવો",
    "e": "To thank"
  },
  {
    "g": "શરૂ કરવું",
    "e": "To begin"
  },
  {
    "g": "મોકલવું",
    "e": "To send"
  },
  {
    "g": "મળતાવવું",
    "e": "To mix"
  },
  {
    "g": "વિભાજિત કરવું",
    "e": "To divide"
  },
  {
    "g": "જાળવવું",
    "e": "To maintain"
  },
  {
    "g": "અનુવાદ કરવો",
    "e": "To translate"
  },
  {
    "g": "અભ્યાસ કરવો",
    "e": "To study"
  },
  {
    "g": "સફર કરવી",
    "e": "To travel"
  },
  {
    "g": "ફોટો પાડવો",
    "e": "To photograph"
  },
  {
    "g": "સાથે",
    "e": "With"
  },
  {
    "g": "વિના",
    "e": "Without"
  },
  {
    "g": "પાસે",
    "e": "Near/with (possession)"
  },
  {
    "g": "વચ્ચે",
    "e": "Between"
  },
  {
    "g": "તરફ",
    "e": "Toward"
  },
  {
    "g": "આસપાસ",
    "e": "Around"
  },
  {
    "g": "અગાઉ",
    "e": "Before"
  },
  {
    "g": "પછી",
    "e": "After"
  },
  {
    "g": "દરમિયાન",
    "e": "During"
  },
  {
    "g": "ઉપરથી",
    "e": "From above"
  },
  {
    "g": "નીચેથી",
    "e": "From below"
  },
  {
    "g": "અંદરથી",
    "e": "From inside"
  },
  {
    "g": "બહારથી",
    "e": "From outside"
  },
  {
    "g": "કારણે",
    "e": "Due to"
  },
  {
    "g": "માટે",
    "e": "For"
  },
  {
    "g": "વિરુદ્ધ",
    "e": "Against"
  },
  {
    "g": "બદલે",
    "e": "Instead of"
  },
  {
    "g": "જોકે",
    "e": "Though"
  },
  {
    "g": "આમ છતાં",
    "e": "Even so"
  },
  {
    "g": "ક્રિકેટ",
    "e": "Cricket"
  },
  {
    "g": "ફૂટબોલ",
    "e": "Football"
  },
  {
    "g": "હોકી",
    "e": "Hockey"
  },
  {
    "g": "કબડ્ડી",
    "e": "Kabaddi"
  },
  {
    "g": "ખો-ખો",
    "e": "Kho-kho"
  },
  {
    "g": "ટેનિસ",
    "e": "Tennis"
  },
  {
    "g": "બેડમિન્ટન",
    "e": "Badminton"
  },
  {
    "g": "ટેબલ ટેનિસ",
    "e": "Table tennis"
  },
  {
    "g": "વોલીબોલ",
    "e": "Volleyball"
  },
  {
    "g": "બાસ્કેટબોલ",
    "e": "Basketball"
  },
  {
    "g": "શતરંજ",
    "e": "Chess"
  },
  {
    "g": "લુડો",
    "e": "Ludo"
  },
  {
    "g": "સાપશીડી",
    "e": "Snakes and ladders"
  },
  {
    "g": "દોડ",
    "e": "Race"
  },
  {
    "g": "કુસ્તી",
    "e": "Wrestling"
  },
  {
    "g": "તરણ",
    "e": "Swimming"
  },
  {
    "g": "લૅપટોપ",
    "e": "Laptop"
  },
  {
    "g": "ટેબ્લેટ",
    "e": "Tablet"
  },
  {
    "g": "પ્રિન્ટર",
    "e": "Printer"
  },
  {
    "g": "ઇન્ટરનેટ",
    "e": "Internet"
  },
  {
    "g": "વાઇ-ફાઇ",
    "e": "Wi‑Fi"
  },
  {
    "g": "પાસવર્ડ",
    "e": "Password"
  },
  {
    "g": "વેબસાઇટ",
    "e": "Website"
  },
  {
    "g": "એપ",
    "e": "App"
  },
  {
    "g": "સોફ્ટવેર",
    "e": "Software"
  },
  {
    "g": "હાર્ડવેર",
    "e": "Hardware"
  },
  {
    "g": "ડેટા",
    "e": "Data"
  },
  {
    "g": "ફાઇલ",
    "e": "File"
  },
  {
    "g": "ફોલ્ડર",
    "e": "Folder"
  },
  {
    "g": "સ્ક્રીન",
    "e": "Screen"
  },
  {
    "g": "કીબોર્ડ",
    "e": "Keyboard"
  },
  {
    "g": "માઉસ",
    "e": "Mouse"
  },
  {
    "g": "કૅમેરા",
    "e": "Camera"
  },
  {
    "g": "માઇક્રોફોન",
    "e": "Microphone"
  },
  {
    "g": "ચોરસ્તો",
    "e": "Intersection"
  },
  {
    "g": "વળાંક",
    "e": "Turn"
  },
  {
    "g": "પુલ",
    "e": "Bridge"
  },
  {
    "g": "ટનલ",
    "e": "Tunnel"
  },
  {
    "g": "ટોલ",
    "e": "Toll"
  },
  {
    "g": "ટ્રાફિક",
    "e": "Traffic"
  },
  {
    "g": "સિગ્નલ",
    "e": "Signal"
  },
  {
    "g": "પાર્કિંગ",
    "e": "Parking"
  },
  {
    "g": "લાઇસન્સ",
    "e": "License"
  },
  {
    "g": "હેલ્મેટ",
    "e": "Helmet"
  },
  {
    "g": "બ્રેક",
    "e": "Brake"
  },
  {
    "g": "સ્ટીયરિંગ",
    "e": "Steering"
  },
  {
    "g": "ટીકેટ",
    "e": "Ticket"
  },
  {
    "g": "પ્લેટફોર્મ",
    "e": "Platform"
  },
  {
    "g": "પરમિટ",
    "e": "Permit"
  },
  {
    "g": "સરકાર",
    "e": "Government"
  },
  {
    "g": "મંત્રાલય",
    "e": "Ministry"
  },
  {
    "g": "વિભાગ",
    "e": "Department"
  },
  {
    "g": "નિયમ",
    "e": "Rule"
  },
  {
    "g": "કાયદો",
    "e": "Law"
  },
  {
    "g": "અધિકાર",
    "e": "Right"
  },
  {
    "g": "કર્તવ્ય",
    "e": "Duty"
  },
  {
    "g": "ચૂંટણી",
    "e": "Election"
  },
  {
    "g": "મતદાર",
    "e": "Voter"
  },
  {
    "g": "મતદાન",
    "e": "Voting"
  },
  {
    "g": "અદાલત",
    "e": "Court"
  },
  {
    "g": "થાણું",
    "e": "Police station"
  },
  {
    "g": "કેસ",
    "e": "Case"
  },
  {
    "g": "જરિમાનો",
    "e": "Fine"
  },
  {
    "g": "જેલ",
    "e": "Jail"
  },
  {
    "g": "કેદી",
    "e": "Prisoner"
  },
  {
    "g": "આદેશ",
    "e": "Order"
  },
  {
    "g": "પાઠ",
    "e": "Lesson"
  },
  {
    "g": "અભ્યાસ",
    "e": "Study"
  },
  {
    "g": "ગૃહકાર્ય",
    "e": "Homework"
  },
  {
    "g": "પાઠ્યપુસ્તક",
    "e": "Textbook"
  },
  {
    "g": "પ્રશ્ન",
    "e": "Question"
  },
  {
    "g": "ઉત્તર",
    "e": "Answer"
  },
  {
    "g": "પ્રમાણપત્ર",
    "e": "Certificate"
  },
  {
    "g": "વિદ્યાવૃત્તિ",
    "e": "Scholarship"
  },
  {
    "g": "ગ્રેડ",
    "e": "Grade"
  },
  {
    "g": "વર્ગ",
    "e": "Class"
  },
  {
    "g": "પ્રવેશ",
    "e": "Admission"
  },
  {
    "g": "ઉમેરો",
    "e": "Addition"
  },
  {
    "g": "બાદબાકી",
    "e": "Subtraction"
  },
  {
    "g": "ગુણાકાર",
    "e": "Multiplication"
  },
  {
    "g": "ભાગાકાર",
    "e": "Division"
  },
  {
    "g": "ટકો",
    "e": "Percent"
  },
  {
    "g": "ભિન્ન",
    "e": "Fraction"
  },
  {
    "g": "જામિતિ",
    "e": "Geometry"
  },
  {
    "g": "બીજગણિત",
    "e": "Algebra"
  },
  {
    "g": "સમાન",
    "e": "Equal"
  },
  {
    "g": "વધુ",
    "e": "Greater"
  },
  {
    "g": "ઓછું",
    "e": "Lesser"
  },
  {
    "g": "ત્રિજ્યા",
    "e": "Radius"
  },
  {
    "g": "વ્યાસ",
    "e": "Diameter"
  },
  {
    "g": "ક્લિનિક",
    "e": "Clinic"
  },
  {
    "g": "ઑપરેશન",
    "e": "Operation"
  },
  {
    "g": "શસ્ત્રક્રિયા",
    "e": "Surgery"
  },
  {
    "g": "ટીકો",
    "e": "Vaccine"
  },
  {
    "g": "થેરાપી",
    "e": "Therapy"
  },
  {
    "g": "પરીક્ષણ",
    "e": "Test/Examination"
  },
  {
    "g": "એમ્બ્યુલન્સ",
    "e": "Ambulance"
  },
  {
    "g": "સંક્રમણ",
    "e": "Infection"
  },
  {
    "g": "ચોટ",
    "e": "Injury"
  },
  {
    "g": "પ્લાસ્ટર",
    "e": "Plaster"
  },
  {
    "g": "બેન્ડેજ",
    "e": "Bandage"
  },
  {
    "g": "દબાણ",
    "e": "Pressure"
  },
  {
    "g": "દિવાળી",
    "e": "Diwali"
  },
  {
    "g": "હોળી",
    "e": "Holi"
  },
  {
    "g": "જનમાષ્ટમી",
    "e": "Janmashtami"
  },
  {
    "g": "ઉત્તરાયણ",
    "e": "Kite festival"
  },
  {
    "g": "નવરાત્રિ",
    "e": "Navratri"
  },
  {
    "g": "રક્ષાબંધન",
    "e": "Raksha Bandhan"
  },
  {
    "g": "ઇદ",
    "e": "Eid"
  },
  {
    "g": "ક્રિસમસ",
    "e": "Christmas"
  },
  {
    "g": "પોંગલ",
    "e": "Pongal"
  },
  {
    "g": "ઓણમ",
    "e": "Onam"
  },
  {
    "g": "તાપમાન",
    "e": "Temperature"
  },
  {
    "g": "આર્દ્રતા",
    "e": "Humidity"
  },
  {
    "g": "સૂકો",
    "e": "Dry"
  },
  {
    "g": "ભીનાશ",
    "e": "Dampness"
  },
  {
    "g": "રીતુ",
    "e": "Season"
  },
  {
    "g": "વણઝાર",
    "e": "Desert"
  },
  {
    "g": "મેદાન",
    "e": "Plain"
  },
  {
    "g": "જંગલ",
    "e": "Forest"
  },
  {
    "g": "આરાધના",
    "e": "Worship"
  },
  {
    "g": "તિર્થ",
    "e": "Pilgrimage"
  },
  {
    "g": "જવાબદારી",
    "e": "Responsibility"
  },
  {
    "g": "અનુશાસન",
    "e": "Discipline"
  },
  {
    "g": "સમયસર",
    "e": "On time"
  },
  {
    "g": "આમંત્રણ",
    "e": "Invitation"
  },
  {
    "g": "પૂષ્ટિ",
    "e": "Confirmation"
  },
  {
    "g": "રદ",
    "e": "Cancel"
  },
  {
    "g": "બુકિંગ",
    "e": "Booking"
  },
  {
    "g": "ચુકવણી",
    "e": "Payment"
  },
  {
    "g": "રસીડ",
    "e": "Receipt"
  },
  {
    "g": "બચત",
    "e": "Savings"
  },
  {
    "g": "ખર્ચ",
    "e": "Expense"
  },
  {
    "g": "આવક",
    "e": "Income"
  },
  {
    "g": "દુકાન",
    "e": "Shop"
  },
  {
    "g": "બેંક",
    "e": "Bank"
  },
  {
    "g": "બીમા",
    "e": "Insurance"
  },
  {
    "g": "ચાવીપતરો",
    "e": "Keychain"
  },
  {
    "g": "રીમોટ",
    "e": "Remote"
  },
  {
    "g": "ટેલિફોન",
    "e": "Telephone"
  },
  {
    "g": "પકાવવું",
    "e": "To bake/cook"
  },
  {
    "g": "ઉકળાવવું",
    "e": "To boil"
  },
  {
    "g": "તળવું",
    "e": "To fry"
  },
  {
    "g": "ઘસવું",
    "e": "To rub"
  },
  {
    "g": "ચીંધવું",
    "e": "To point out"
  },
  {
    "g": "લટકાવવું",
    "e": "To hang"
  },
  {
    "g": "ચોંટાડવું",
    "e": "To stick"
  },
  {
    "g": "ધકેલવું",
    "e": "To push"
  },
  {
    "g": "ખેંચવું",
    "e": "To pull"
  },
  {
    "g": "સ્વીકારવું",
    "e": "To accept"
  },
  {
    "g": "નકારી કાઢવું",
    "e": "To reject"
  },
  {
    "g": "સમાધાન કરવું",
    "e": "To resolve"
  },
  {
    "g": "યોજનાબદ્ધ કરવું",
    "e": "To plan"
  },
  {
    "g": "ચર્ચા કરવી",
    "e": "To discuss"
  },
  {
    "g": "તપાસ કરવી",
    "e": "To inspect"
  },
  {
    "g": "અહેવાલ આપવો",
    "e": "To report"
  },
  {
    "g": "સહી કરવી",
    "e": "To sign"
  },
  {
    "g": "છાપવું",
    "e": "To print"
  },
  {
    "g": "ડાઉનલોડ કરવું",
    "e": "To download"
  },
  {
    "g": "અપલોડ કરવું",
    "e": "To upload"
  },
  {
    "g": "દોરી",
    "e": "String"
  },
  {
    "g": "મોમબત્તી",
    "e": "Candle"
  },
  {
    "g": "દીવાસળી",
    "e": "Matchstick"
  },
  {
    "g": "બાલ્ટી",
    "e": "Bucket"
  },
  {
    "g": "ઝાડુ",
    "e": "Broom"
  },
  {
    "g": "પોચો",
    "e": "Mop"
  },
  {
    "g": "કચરો",
    "e": "Garbage"
  },
  {
    "g": "ડસ્ટબિન",
    "e": "Dustbin"
  },
  {
    "g": "જિજ્ઞાસા",
    "e": "Curiosity"
  },
  {
    "g": "ધીરજ",
    "e": "Patience"
  },
  {
    "g": "આસ્થા",
    "e": "Faith"
  },
  {
    "g": "આત્મવિશ્વાસ",
    "e": "Confidence"
  },
  {
    "g": "આદર",
    "e": "Respect"
  },
  {
    "g": "અહંકાર",
    "e": "Pride/Ego"
  },
  {
    "g": "લાજ",
    "e": "Shyness"
  },
  {
    "g": "ઇર્ષ્યા",
    "e": "Jealousy"
  },
  {
    "g": "દક્ષિણ",
    "e": "South"
  },
  {
    "g": "પૂર્વ",
    "e": "East"
  },
  {
    "g": "પશ્ચિમ",
    "e": "West"
  },
  {
    "g": "સવાર",
    "e": "Morning"
  },
  {
    "g": "બપોર",
    "e": "Afternoon"
  },
  {
    "g": "સાંજ",
    "e": "Evening"
  },
  {
    "g": "રાત",
    "e": "Night"
  }
];

export default DATA;