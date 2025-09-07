const DATA = [
  {
    "g": "હું",
    "e": "I",
    "p": "pron"
  },
  {
    "g": "તમે",
    "e": "You",
    "p": "pron"
  },
  {
    "g": "તે",
    "e": "He/She/That",
    "p": "pron"
  },
  {
    "g": "આ",
    "e": "This",
    "p": "pron"
  },
  {
    "g": "અમે",
    "e": "We",
    "p": "pron"
  },
  {
    "g": "તેઓ",
    "e": "They",
    "p": "pron"
  },
  {
    "g": "કયું",
    "e": "Which",
    "p": "n"
  },
  {
    "g": "શું",
    "e": "What",
    "p": "n"
  },
  {
    "g": "કેમ",
    "e": "Why",
    "p": "n"
  },
  {
    "g": "ક્યારે",
    "e": "When",
    "p": "n"
  },
  {
    "g": "ક્યાં",
    "e": "Where",
    "p": "n"
  },
  {
    "g": "હા",
    "e": "Yes",
    "p": "intj"
  },
  {
    "g": "ના",
    "e": "No",
    "p": "intj"
  },
  {
    "g": "એક",
    "e": "One",
    "p": "num"
  },
  {
    "g": "બે",
    "e": "Two",
    "p": "num"
  },
  {
    "g": "ત્રણ",
    "e": "Three",
    "p": "num"
  },
  {
    "g": "ચાર",
    "e": "Four",
    "p": "num"
  },
  {
    "g": "પાંચ",
    "e": "Five",
    "p": "num"
  },
  {
    "g": "છ",
    "e": "Six",
    "p": "num"
  },
  {
    "g": "સાત",
    "e": "Seven",
    "p": "num"
  },
  {
    "g": "આઠ",
    "e": "Eight",
    "p": "num"
  },
  {
    "g": "નવ",
    "e": "Nine",
    "p": "num"
  },
  {
    "g": "દસ",
    "e": "Ten",
    "p": "num"
  },
  {
    "g": "પિતા",
    "e": "Father / Dad",
    "p": "n"
  },
  {
    "g": "માતા",
    "e": "Mother / Mom",
    "p": "n"
  },
  {
    "g": "ભાઈ",
    "e": "Brother / Sibling (male)",
    "p": "n"
  },
  {
    "g": "બહેન",
    "e": "Sister / Sibling (female)",
    "p": "n"
  },
  {
    "g": "દીકરો",
    "e": "Son / Child (male)",
    "p": "n"
  },
  {
    "g": "દીકરી",
    "e": "Daughter / Child (female)",
    "p": "n"
  },
  {
    "g": "ઘર",
    "e": "House / Home",
    "p": "n"
  },
  {
    "g": "શહેર",
    "e": "City / Urban area",
    "p": "n"
  },
  {
    "g": "ગામ",
    "e": "Village / Town (small)",
    "p": "n"
  },
  {
    "g": "શાળા",
    "e": "School / Primary school",
    "p": "n"
  },
  {
    "g": "બજાર",
    "e": "Market",
    "p": "n"
  },
  {
    "g": "મિત્ર",
    "e": "Friend / Buddy",
    "p": "n"
  },
  {
    "g": "ખોરાક",
    "e": "Food / Meal",
    "p": "n"
  },
  {
    "g": "પાણી",
    "e": "Water / Water (drink)",
    "p": "n"
  },
  {
    "g": "દૂધ",
    "e": "Milk",
    "p": "n"
  },
  {
    "g": "ચા",
    "e": "Tea / Chai",
    "p": "n"
  },
  {
    "g": "કોફી",
    "e": "Coffee / Coffee drink",
    "p": "n"
  },
  {
    "g": "રોટલી",
    "e": "Flatbread / Roti",
    "p": "n"
  },
  {
    "g": "ભાત",
    "e": "Rice (cooked) / Steamed rice",
    "p": "n"
  },
  {
    "g": "દાળ",
    "e": "Lentils / Dal",
    "p": "n"
  },
  {
    "g": "શાક",
    "e": "Vegetable / Curry (Gujarati usage)",
    "p": "n"
  },
  {
    "g": "ફળ",
    "e": "Fruit",
    "p": "n"
  },
  {
    "g": "કેળું",
    "e": "Banana",
    "p": "n"
  },
  {
    "g": "સફરજન",
    "e": "Apple",
    "p": "n"
  },
  {
    "g": "દાડમ",
    "e": "Pomegranate",
    "p": "n"
  },
  {
    "g": "આંબો",
    "e": "Mango",
    "p": "n"
  },
  {
    "g": "લીંબુ",
    "e": "Lemon",
    "p": "n"
  },
  {
    "g": "દ્રાક્ષ",
    "e": "Grapes",
    "p": "n"
  },
  {
    "g": "તરબૂચ",
    "e": "Watermelon",
    "p": "n"
  },
  {
    "g": "સંતરો",
    "e": "Orange",
    "p": "n"
  },
  {
    "g": "કાકડી",
    "e": "Cucumber / Gourd (colloquial)",
    "p": "n"
  },
  {
    "g": "બટાકો",
    "e": "Potato / Spud",
    "p": "n"
  },
  {
    "g": "ડુંગળી",
    "e": "Onion / Shallot",
    "p": "n"
  },
  {
    "g": "ટમેટું",
    "e": "Tomato / Tomato (veg.)",
    "p": "n"
  },
  {
    "g": "ભીંડો",
    "e": "Okra",
    "p": "n"
  },
  {
    "g": "રીંગણ",
    "e": "Eggplant / Brinjal",
    "p": "n"
  },
  {
    "g": "લસણ",
    "e": "Garlic",
    "p": "n"
  },
  {
    "g": "આદુ",
    "e": "Ginger",
    "p": "n"
  },
  {
    "g": "મીઠું",
    "e": "Salt",
    "p": "adj"
  },
  {
    "g": "ખાંડ",
    "e": "Sugar",
    "p": "n"
  },
  {
    "g": "મરી",
    "e": "Pepper",
    "p": "n"
  },
  {
    "g": "તેલ",
    "e": "Oil",
    "p": "n"
  },
  {
    "g": "ઘી",
    "e": "Ghee",
    "p": "n"
  },
  {
    "g": "મકાઈ",
    "e": "Maize / Corn",
    "p": "n"
  },
  {
    "g": "ગહું",
    "e": "Wheat",
    "p": "n"
  },
  {
    "g": "જૌ",
    "e": "Barley",
    "p": "n"
  },
  {
    "g": "ચોખા",
    "e": "Rice grains",
    "p": "n"
  },
  {
    "g": "ફૂલ",
    "e": "Flower / Blossom",
    "p": "n"
  },
  {
    "g": "ગુલાબ",
    "e": "Rose / Rose flower",
    "p": "n"
  },
  {
    "g": "મોગરો",
    "e": "Jasmine / Mogra",
    "p": "n"
  },
  {
    "g": "કમળ",
    "e": "Lotus / Water lily (regional)",
    "p": "n"
  },
  {
    "g": "કુંવળ",
    "e": "Lily / Water lily",
    "p": "n"
  },
  {
    "g": "વૃક્ષ",
    "e": "Tree",
    "p": "n"
  },
  {
    "g": "ઝાડ",
    "e": "Tree / Plant",
    "p": "n"
  },
  {
    "g": "પાન",
    "e": "Leaf / Betel leaf",
    "p": "n"
  },
  {
    "g": "ફળો",
    "e": "Fruits",
    "p": "n"
  },
  {
    "g": "સૂર્ય",
    "e": "Sun",
    "p": "n"
  },
  {
    "g": "ચંદ્ર",
    "e": "Moon",
    "p": "n"
  },
  {
    "g": "તારા",
    "e": "Stars",
    "p": "pron"
  },
  {
    "g": "આકાશ",
    "e": "Sky / Heaven (poetic)",
    "p": "n"
  },
  {
    "g": "વાદળ",
    "e": "Cloud",
    "p": "n"
  },
  {
    "g": "વરસાદ",
    "e": "Rain / Rainfall",
    "p": "n"
  },
  {
    "g": "પવન",
    "e": "Wind / Breeze",
    "p": "n"
  },
  {
    "g": "હિમ",
    "e": "Snow",
    "p": "n"
  },
  {
    "g": "સમુદ્ર",
    "e": "Sea / Ocean",
    "p": "n"
  },
  {
    "g": "નદી",
    "e": "River / Stream",
    "p": "n"
  },
  {
    "g": "તળાવ",
    "e": "Lake",
    "p": "n"
  },
  {
    "g": "ઝરણું",
    "e": "Waterfall / Cascade",
    "p": "n"
  },
  {
    "g": "પર્વત",
    "e": "Mountain",
    "p": "n"
  },
  {
    "g": "ટેકરી",
    "e": "Hill",
    "p": "n"
  },
  {
    "g": "જમીન",
    "e": "Land / Ground",
    "p": "n"
  },
  {
    "g": "માટી",
    "e": "Soil / Clay / Earth",
    "p": "n"
  },
  {
    "g": "માર્ગ",
    "e": "Road / Route / Path",
    "p": "n"
  },
  {
    "g": "ગલી",
    "e": "Lane",
    "p": "n"
  },
  {
    "g": "રસ્તો",
    "e": "Road / Way / Path",
    "p": "n"
  },
  {
    "g": "તું",
    "e": "You / informal",
    "p": "pron"
  },
  {
    "g": "આપણે",
    "e": "We / inclusive",
    "p": "pron"
  },
  {
    "g": "આપ",
    "e": "You / formal",
    "p": "pron"
  },
  {
    "g": "મારું",
    "e": "My / neuter",
    "p": "pron"
  },
  {
    "g": "મારી",
    "e": "My / feminine",
    "p": "pron"
  },
  {
    "g": "મારા",
    "e": "My / plural/masc.",
    "p": "pron"
  },
  {
    "g": "તારું",
    "e": "Your / informal, neuter",
    "p": "pron"
  },
  {
    "g": "તારી",
    "e": "Your / informal, feminine",
    "p": "pron"
  },
  {
    "g": "તમારું",
    "e": "Your / formal, neuter",
    "p": "pron"
  },
  {
    "g": "તમારી",
    "e": "Your / formal, feminine",
    "p": "pron"
  },
  {
    "g": "તમારા",
    "e": "Your / formal, plural/masc.",
    "p": "pron"
  },
  {
    "g": "તેનું",
    "e": "His/Her/Its / neuter",
    "p": "pron"
  },
  {
    "g": "તેણી",
    "e": "She",
    "p": "pron"
  },
  {
    "g": "તેણો",
    "e": "He",
    "p": "n"
  },
  {
    "g": "તેમનું",
    "e": "Their / neuter",
    "p": "n"
  },
  {
    "g": "અપનું",
    "e": "Our / neuter, inclusive",
    "p": "n"
  },
  {
    "g": "અમારું",
    "e": "Our / neuter",
    "p": "pron"
  },
  {
    "g": "અમારી",
    "e": "Our / feminine",
    "p": "pron"
  },
  {
    "g": "અમારા",
    "e": "Our / plural/masc.",
    "p": "pron"
  },
  {
    "g": "હમણાં",
    "e": "Now",
    "p": "adv"
  },
  {
    "g": "આજ",
    "e": "Today",
    "p": "n"
  },
  {
    "g": "ગઈકાલે",
    "e": "Yesterday",
    "p": "n"
  },
  {
    "g": "આવતીકાલે",
    "e": "Tomorrow",
    "p": "adv"
  },
  {
    "g": "અહીં",
    "e": "Here",
    "p": "adv"
  },
  {
    "g": "ત્યાં",
    "e": "There",
    "p": "adv"
  },
  {
    "g": "અંદર",
    "e": "Inside",
    "p": "prep"
  },
  {
    "g": "બહાર",
    "e": "Outside",
    "p": "prep"
  },
  {
    "g": "ઉપર",
    "e": "Above",
    "p": "prep"
  },
  {
    "g": "નીચે",
    "e": "Below",
    "p": "prep"
  },
  {
    "g": "આગળ",
    "e": "Ahead",
    "p": "prep"
  },
  {
    "g": "પાછળ",
    "e": "Behind",
    "p": "prep"
  },
  {
    "g": "બાજુ",
    "e": "Side",
    "p": "n"
  },
  {
    "g": "તાત્કાલિક",
    "e": "Immediate",
    "p": "n"
  },
  {
    "g": "ધીમે",
    "e": "Slowly",
    "p": "adv"
  },
  {
    "g": "ઝડપી",
    "e": "Fast / Quick",
    "p": "adj"
  },
  {
    "g": "હંમેશાં",
    "e": "Always",
    "p": "adv"
  },
  {
    "g": "ક્યારેક",
    "e": "Sometimes",
    "p": "adv"
  },
  {
    "g": "ક્યારેય નહીં",
    "e": "Never",
    "p": "n"
  },
  {
    "g": "આજે",
    "e": "Today",
    "p": "adv"
  },
  {
    "g": "હમણાંજ",
    "e": "Just now",
    "p": "adv"
  },
  {
    "g": "બધું",
    "e": "Everything",
    "p": "n"
  },
  {
    "g": "કંઈ",
    "e": "Anything",
    "p": "n"
  },
  {
    "g": "કંઈ નહીં",
    "e": "Nothing",
    "p": "n"
  },
  {
    "g": "થોડું",
    "e": "A little",
    "p": "n"
  },
  {
    "g": "ઘણું",
    "e": "A lot",
    "p": "n"
  },
  {
    "g": "ફરી",
    "e": "Again",
    "p": "adv"
  },
  {
    "g": "સોમવાર",
    "e": "Monday",
    "p": "n"
  },
  {
    "g": "મંગળવાર",
    "e": "Tuesday",
    "p": "n"
  },
  {
    "g": "બુધવાર",
    "e": "Wednesday",
    "p": "n"
  },
  {
    "g": "ગુરુવાર",
    "e": "Thursday",
    "p": "n"
  },
  {
    "g": "શુક્રવાર",
    "e": "Friday",
    "p": "n"
  },
  {
    "g": "શનિવાર",
    "e": "Saturday",
    "p": "n"
  },
  {
    "g": "રવિવાર",
    "e": "Sunday",
    "p": "n"
  },
  {
    "g": "જાન્યુઆરી",
    "e": "January",
    "p": "n"
  },
  {
    "g": "ફેબ્રુઆરી",
    "e": "February",
    "p": "n"
  },
  {
    "g": "માર્ચ",
    "e": "March",
    "p": "n"
  },
  {
    "g": "એપ્રિલ",
    "e": "April",
    "p": "n"
  },
  {
    "g": "મે",
    "e": "May",
    "p": "n"
  },
  {
    "g": "જૂન",
    "e": "June",
    "p": "n"
  },
  {
    "g": "જુલાઈ",
    "e": "July",
    "p": "n"
  },
  {
    "g": "ઓગસ્ટ",
    "e": "August",
    "p": "n"
  },
  {
    "g": "સપ્ટેમ્બર",
    "e": "September",
    "p": "n"
  },
  {
    "g": "ઓક્ટોબર",
    "e": "October",
    "p": "n"
  },
  {
    "g": "નવેમ્બર",
    "e": "November",
    "p": "n"
  },
  {
    "g": "ડિસેમ્બર",
    "e": "December",
    "p": "n"
  },
  {
    "g": "લાલ",
    "e": "Red",
    "p": "adj"
  },
  {
    "g": "નારંગી",
    "e": "Orange / color",
    "p": "adj"
  },
  {
    "g": "પીળો",
    "e": "Yellow",
    "p": "adj"
  },
  {
    "g": "લીલો",
    "e": "Green",
    "p": "adj"
  },
  {
    "g": "આસમાની",
    "e": "Sky blue",
    "p": "adj"
  },
  {
    "g": "વાદળી",
    "e": "Blue",
    "p": "adj"
  },
  {
    "g": "જામણી",
    "e": "Purple",
    "p": "adj"
  },
  {
    "g": "કેસરી",
    "e": "Saffron",
    "p": "adj"
  },
  {
    "g": "કાળો",
    "e": "Black",
    "p": "adj"
  },
  {
    "g": "સફેદ",
    "e": "White",
    "p": "adj"
  },
  {
    "g": "ભૂરો",
    "e": "Brown",
    "p": "adj"
  },
  {
    "g": "છાંયો",
    "e": "Shade",
    "p": "n"
  },
  {
    "g": "પત્ની",
    "e": "Wife / Spouse (female)",
    "p": "n"
  },
  {
    "g": "પતિ",
    "e": "Husband / Spouse (male)",
    "p": "n"
  },
  {
    "g": "દાદા",
    "e": "Grandfather",
    "p": "n"
  },
  {
    "g": "દાદી",
    "e": "Grandmother",
    "p": "n"
  },
  {
    "g": "કાકી",
    "e": "Aunt / paternal",
    "p": "n"
  },
  {
    "g": "કાકા",
    "e": "Uncle / paternal",
    "p": "n"
  },
  {
    "g": "મામા",
    "e": "Uncle / maternal",
    "p": "n"
  },
  {
    "g": "મામી",
    "e": "Aunt / maternal",
    "p": "n"
  },
  {
    "g": "ફોઈ",
    "e": "Aunt / paternal aunt",
    "p": "n"
  },
  {
    "g": "મોસાળ",
    "e": "Maternal uncle's home",
    "p": "n"
  },
  {
    "g": "પોત્ર",
    "e": "Grandson",
    "p": "n"
  },
  {
    "g": "પોત્રી",
    "e": "Granddaughter",
    "p": "n"
  },
  {
    "g": "શિશુ",
    "e": "Infant",
    "p": "n"
  },
  {
    "g": "બાળક",
    "e": "Child",
    "p": "n"
  },
  {
    "g": "યુવક",
    "e": "Young man",
    "p": "n"
  },
  {
    "g": "યુવતી",
    "e": "Young woman",
    "p": "n"
  },
  {
    "g": "વૃદ્ધ",
    "e": "Elderly",
    "p": "n"
  },
  {
    "g": "ધર્મ",
    "e": "Religion",
    "p": "n"
  },
  {
    "g": "ભાષા",
    "e": "Language",
    "p": "n"
  },
  {
    "g": "વાત",
    "e": "Talk / Matter / Topic",
    "p": "n"
  },
  {
    "g": "કથા",
    "e": "Story / Tale",
    "p": "n"
  },
  {
    "g": "સમાચાર",
    "e": "News / Information",
    "p": "n"
  },
  {
    "g": "માથું",
    "e": "Head",
    "p": "n"
  },
  {
    "g": "વાળ",
    "e": "Hair",
    "p": "n"
  },
  {
    "g": "આંખ",
    "e": "Eye",
    "p": "n"
  },
  {
    "g": "કાન",
    "e": "Ear",
    "p": "n"
  },
  {
    "g": "નાક",
    "e": "Nose",
    "p": "n"
  },
  {
    "g": "મોઢું",
    "e": "Mouth",
    "p": "n"
  },
  {
    "g": "દાંત",
    "e": "Tooth",
    "p": "n"
  },
  {
    "g": "જીભ",
    "e": "Tongue",
    "p": "n"
  },
  {
    "g": "ગળું",
    "e": "Neck / Throat",
    "p": "n"
  },
  {
    "g": "ખભો",
    "e": "Shoulder",
    "p": "n"
  },
  {
    "g": "હાથ",
    "e": "Hand / Arm (colloquial)",
    "p": "n"
  },
  {
    "g": "આંગળી",
    "e": "Finger",
    "p": "n"
  },
  {
    "g": "છાતી",
    "e": "Chest",
    "p": "n"
  },
  {
    "g": "પેટ",
    "e": "Stomach",
    "p": "n"
  },
  {
    "g": "પીઠ",
    "e": "Back",
    "p": "n"
  },
  {
    "g": "પગ",
    "e": "Leg / Foot",
    "p": "n"
  },
  {
    "g": "ઘૂંટણ",
    "e": "Knee",
    "p": "n"
  },
  {
    "g": "રક્ત",
    "e": "Blood",
    "p": "n"
  },
  {
    "g": "હૃદય",
    "e": "Heart",
    "p": "n"
  },
  {
    "g": "કૂતરો",
    "e": "Dog",
    "p": "n"
  },
  {
    "g": "બિલાડી",
    "e": "Cat",
    "p": "n"
  },
  {
    "g": "ગાય",
    "e": "Cow",
    "p": "n"
  },
  {
    "g": "ભેંસ",
    "e": "Buffalo",
    "p": "n"
  },
  {
    "g": "ઘોડો",
    "e": "Horse",
    "p": "n"
  },
  {
    "g": "ધેંશ",
    "e": "Sheep",
    "p": "n"
  },
  {
    "g": "બકરી",
    "e": "Goat",
    "p": "n"
  },
  {
    "g": "ડુક્કર",
    "e": "Pig",
    "p": "n"
  },
  {
    "g": "કૂકડી",
    "e": "Hen / Chicken",
    "p": "n"
  },
  {
    "g": "મોર",
    "e": "Peacock / Peafowl",
    "p": "n"
  },
  {
    "g": "કબૂતર",
    "e": "Pigeon / Dove",
    "p": "n"
  },
  {
    "g": "ગરૂડ",
    "e": "Eagle",
    "p": "n"
  },
  {
    "g": "માછલી",
    "e": "Fish (animal) / Fish (food)",
    "p": "n"
  },
  {
    "g": "વાઘ",
    "e": "Tiger",
    "p": "n"
  },
  {
    "g": "સિંહ",
    "e": "Lion",
    "p": "n"
  },
  {
    "g": "હાથી",
    "e": "Elephant",
    "p": "n"
  },
  {
    "g": "ઉંટ",
    "e": "Camel",
    "p": "n"
  },
  {
    "g": "રીછ",
    "e": "Bear",
    "p": "n"
  },
  {
    "g": "લુમડી",
    "e": "Fox",
    "p": "n"
  },
  {
    "g": "સસલું",
    "e": "Rabbit",
    "p": "n"
  },
  {
    "g": "દરવાજો",
    "e": "Door",
    "p": "n"
  },
  {
    "g": "બારી",
    "e": "Window",
    "p": "n"
  },
  {
    "g": "ભીંત",
    "e": "Wall",
    "p": "n"
  },
  {
    "g": "છત",
    "e": "Roof/Ceiling",
    "p": "n"
  },
  {
    "g": "ફરશ",
    "e": "Floor",
    "p": "n"
  },
  {
    "g": "ખુરશી",
    "e": "Chair",
    "p": "n"
  },
  {
    "g": "મેજ",
    "e": "Table",
    "p": "n"
  },
  {
    "g": "પથારી",
    "e": "Bed",
    "p": "n"
  },
  {
    "g": "આરસો",
    "e": "Mirror",
    "p": "n"
  },
  {
    "g": "દિવો",
    "e": "Lamp / Diya",
    "p": "n"
  },
  {
    "g": "બલ્બ",
    "e": "Bulb",
    "p": "n"
  },
  {
    "g": "પંખો",
    "e": "Fan / Hand-fan",
    "p": "n"
  },
  {
    "g": "ઘડિયાળ",
    "e": "Clock",
    "p": "n"
  },
  {
    "g": "ચાવી",
    "e": "Key",
    "p": "n"
  },
  {
    "g": "તાળું",
    "e": "Lock",
    "p": "n"
  },
  {
    "g": "થેલી",
    "e": "Bag",
    "p": "n"
  },
  {
    "g": "કિતાબ",
    "e": "Book",
    "p": "n"
  },
  {
    "g": "ખાતું",
    "e": "Notebook/Account",
    "p": "n"
  },
  {
    "g": "પેન",
    "e": "Pen",
    "p": "n"
  },
  {
    "g": "પેન્સિલ",
    "e": "Pencil",
    "p": "n"
  },
  {
    "g": "રબર",
    "e": "Eraser",
    "p": "n"
  },
  {
    "g": "પાટીયું",
    "e": "Slate/Board",
    "p": "n"
  },
  {
    "g": "નકશો",
    "e": "Map",
    "p": "n"
  },
  {
    "g": "કમ્પ્યુટર",
    "e": "Computer / PC",
    "p": "n"
  },
  {
    "g": "મોબાઈલ",
    "e": "Mobile phone / Cell phone",
    "p": "n"
  },
  {
    "g": "ચાર્જર",
    "e": "Charger",
    "p": "n"
  },
  {
    "g": "ટોર્ચ",
    "e": "Torch",
    "p": "n"
  },
  {
    "g": "બાટલી",
    "e": "Bottle",
    "p": "n"
  },
  {
    "g": "થાળી",
    "e": "Plate",
    "p": "n"
  },
  {
    "g": "વાટકી",
    "e": "Bowl",
    "p": "n"
  },
  {
    "g": "ચમચી",
    "e": "Spoon",
    "p": "n"
  },
  {
    "g": "કાંટો",
    "e": "Fork",
    "p": "n"
  },
  {
    "g": "છરી",
    "e": "Knife",
    "p": "n"
  },
  {
    "g": "ભાંડો",
    "e": "Utensil",
    "p": "n"
  },
  {
    "g": "હંડો",
    "e": "Pot",
    "p": "n"
  },
  {
    "g": "તવા",
    "e": "Griddle",
    "p": "n"
  },
  {
    "g": "કેટલી",
    "e": "Kettle",
    "p": "n"
  },
  {
    "g": "કપડા",
    "e": "Clothes",
    "p": "n"
  },
  {
    "g": "શર્ટ",
    "e": "Shirt",
    "p": "n"
  },
  {
    "g": "પતલૂન",
    "e": "Trousers",
    "p": "n"
  },
  {
    "g": "પગેરું",
    "e": "Footwear / Shoes",
    "p": "n"
  },
  {
    "g": "જુતા",
    "e": "Shoes / Footwear",
    "p": "n"
  },
  {
    "g": "ચંપલ",
    "e": "Sandals / Slippers",
    "p": "n"
  },
  {
    "g": "ટોપી",
    "e": "Cap",
    "p": "n"
  },
  {
    "g": "સાડી",
    "e": "Saree",
    "p": "n"
  },
  {
    "g": "ઘાઘરા",
    "e": "Skirt",
    "p": "n"
  },
  {
    "g": "દુપટ્ટો",
    "e": "Scarf",
    "p": "n"
  },
  {
    "g": "કોટ",
    "e": "Coat",
    "p": "n"
  },
  {
    "g": "મંદિર",
    "e": "Temple",
    "p": "n"
  },
  {
    "g": "મસ્જિદ",
    "e": "Mosque",
    "p": "n"
  },
  {
    "g": "ચર્ચ",
    "e": "Church",
    "p": "n"
  },
  {
    "g": "હોસ્પિટલ",
    "e": "Hospital",
    "p": "n"
  },
  {
    "g": "હોટેલ",
    "e": "Hotel",
    "p": "n"
  },
  {
    "g": "રેસ્ટોરન્ટ",
    "e": "Restaurant",
    "p": "n"
  },
  {
    "g": "સ્ટેશન",
    "e": "Station",
    "p": "n"
  },
  {
    "g": "વિમાનમથક",
    "e": "Airport",
    "p": "n"
  },
  {
    "g": "બગીચો",
    "e": "Garden",
    "p": "n"
  },
  {
    "g": "રમણિય ઉદ્યાન",
    "e": "Amusement park",
    "p": "n"
  },
  {
    "g": "ગ્રંથાલય",
    "e": "Library",
    "p": "n"
  },
  {
    "g": "સિનેમા",
    "e": "Cinema",
    "p": "n"
  },
  {
    "g": "બસ",
    "e": "Bus",
    "p": "n"
  },
  {
    "g": "ટ્રેન",
    "e": "Train",
    "p": "n"
  },
  {
    "g": "વિમાન",
    "e": "Airplane",
    "p": "n"
  },
  {
    "g": "સાયકલ",
    "e": "Bicycle",
    "p": "n"
  },
  {
    "g": "કાર",
    "e": "Car",
    "p": "n"
  },
  {
    "g": "ટેક્સી",
    "e": "Taxi",
    "p": "n"
  },
  {
    "g": "બંદર",
    "e": "Port",
    "p": "n"
  },
  {
    "g": "જવું",
    "e": "To go",
    "p": "v"
  },
  {
    "g": "આવવું",
    "e": "To come",
    "p": "v"
  },
  {
    "g": "ખાવું",
    "e": "To eat",
    "p": "v"
  },
  {
    "g": "પીવું",
    "e": "To drink",
    "p": "v"
  },
  {
    "g": "કરવું",
    "e": "To do",
    "p": "v"
  },
  {
    "g": "કહેવું",
    "e": "To say",
    "p": "v"
  },
  {
    "g": "આપવું",
    "e": "To give",
    "p": "v"
  },
  {
    "g": "લેવું",
    "e": "To take",
    "p": "v"
  },
  {
    "g": "જોવું",
    "e": "To see",
    "p": "v"
  },
  {
    "g": "રહેવું",
    "e": "To live/stay",
    "p": "v"
  },
  {
    "g": "લખવું",
    "e": "To write",
    "p": "v"
  },
  {
    "g": "વાંચવું",
    "e": "To read",
    "p": "v"
  },
  {
    "g": "રમવું",
    "e": "To play",
    "p": "v"
  },
  {
    "g": "શીખવું",
    "e": "To learn",
    "p": "v"
  },
  {
    "g": "સમજવું",
    "e": "To understand",
    "p": "v"
  },
  {
    "g": "વિચારવું",
    "e": "To think",
    "p": "v"
  },
  {
    "g": "બનાવવું",
    "e": "To make",
    "p": "v"
  },
  {
    "g": "ખરીદવું",
    "e": "To buy",
    "p": "v"
  },
  {
    "g": "વેચવું",
    "e": "To sell",
    "p": "v"
  },
  {
    "g": "ચાલવું",
    "e": "To walk",
    "p": "v"
  },
  {
    "g": "દોડવું",
    "e": "To run",
    "p": "v"
  },
  {
    "g": "બેસવું",
    "e": "To sit",
    "p": "v"
  },
  {
    "g": "ઉઠવું",
    "e": "To get up",
    "p": "v"
  },
  {
    "g": "સૂવું",
    "e": "To sleep",
    "p": "v"
  },
  {
    "g": "બોલવું",
    "e": "To speak",
    "p": "v"
  },
  {
    "g": "સાંભળવું",
    "e": "To listen",
    "p": "v"
  },
  {
    "g": "પહોંચવું",
    "e": "To arrive",
    "p": "v"
  },
  {
    "g": "રહે જવું",
    "e": "To remain",
    "p": "v"
  },
  {
    "g": "ધોવું",
    "e": "To wash",
    "p": "v"
  },
  {
    "g": "રસોઈ કરવી",
    "e": "To cook",
    "p": "v"
  },
  {
    "g": "સફાઈ કરવી",
    "e": "To clean",
    "p": "v"
  },
  {
    "g": "મદદ કરવી",
    "e": "To help",
    "p": "v"
  },
  {
    "g": "પ્રાર્થના કરવી",
    "e": "To pray",
    "p": "v"
  },
  {
    "g": "મોટું",
    "e": "Big / Large",
    "p": "adj"
  },
  {
    "g": "નાનું",
    "e": "Small / Little",
    "p": "adj"
  },
  {
    "g": "લંબુ",
    "e": "Long",
    "p": "adj"
  },
  {
    "g": "ટૂંકું",
    "e": "Short",
    "p": "adj"
  },
  {
    "g": "ઉંચું",
    "e": "Tall/High",
    "p": "adj"
  },
  {
    "g": "નીચું",
    "e": "Low",
    "p": "adj"
  },
  {
    "g": "સારું",
    "e": "Good",
    "p": "adj"
  },
  {
    "g": "ખરાબ",
    "e": "Bad",
    "p": "adj"
  },
  {
    "g": "ગરમ",
    "e": "Hot / Warm",
    "p": "adj"
  },
  {
    "g": "ઠંડું",
    "e": "Cold / Cool",
    "p": "adj"
  },
  {
    "g": "ખાટું",
    "e": "Sour",
    "p": "adj"
  },
  {
    "g": "તીખું",
    "e": "Spicy",
    "p": "adj"
  },
  {
    "g": "ખરું",
    "e": "True / Genuine",
    "p": "n"
  },
  {
    "g": "ખોટું",
    "e": "False / Wrong",
    "p": "adj"
  },
  {
    "g": "સુંદર",
    "e": "Beautiful",
    "p": "adj"
  },
  {
    "g": "ભદ્દું",
    "e": "Ugly",
    "p": "adj"
  },
  {
    "g": "મહંગું",
    "e": "Expensive",
    "p": "adj"
  },
  {
    "g": "સસ્તુ",
    "e": "Cheap",
    "p": "adj"
  },
  {
    "g": "નવું",
    "e": "New",
    "p": "v"
  },
  {
    "g": "જૂનું",
    "e": "Old",
    "p": "adj"
  },
  {
    "g": "ભારે",
    "e": "Heavy",
    "p": "adj"
  },
  {
    "g": "હલકું",
    "e": "Light / weight",
    "p": "adj"
  },
  {
    "g": "શાંત",
    "e": "Quiet/Calm",
    "p": "adj"
  },
  {
    "g": "ગંદુ",
    "e": "Dirty",
    "p": "adj"
  },
  {
    "g": "સાફ",
    "e": "Clean",
    "p": "adj"
  },
  {
    "g": "વર્ષ",
    "e": "Year",
    "p": "n"
  },
  {
    "g": "મહિનો",
    "e": "Month",
    "p": "n"
  },
  {
    "g": "અઠવાડિયું",
    "e": "Week",
    "p": "n"
  },
  {
    "g": "દિવસ",
    "e": "Day",
    "p": "n"
  },
  {
    "g": "ઘંટો",
    "e": "Hour",
    "p": "n"
  },
  {
    "g": "મિનિટ",
    "e": "Minute",
    "p": "n"
  },
  {
    "g": "સેકંડ",
    "e": "Second",
    "p": "n"
  },
  {
    "g": "વજન",
    "e": "Weight",
    "p": "n"
  },
  {
    "g": "દૂર",
    "e": "Far",
    "p": "n"
  },
  {
    "g": "નજીક",
    "e": "Near",
    "p": "n"
  },
  {
    "g": "મધ્ય",
    "e": "Middle",
    "p": "n"
  },
  {
    "g": "અને",
    "e": "And",
    "p": "conj"
  },
  {
    "g": "પરંતુ",
    "e": "But",
    "p": "conj"
  },
  {
    "g": "અથવા",
    "e": "Or",
    "p": "conj"
  },
  {
    "g": "કારણ કે",
    "e": "Because",
    "p": "n"
  },
  {
    "g": "જો",
    "e": "If",
    "p": "conj"
  },
  {
    "g": "તેથી",
    "e": "Therefore",
    "p": "conj"
  },
  {
    "g": "હાલાંકિ",
    "e": "Although",
    "p": "conj"
  },
  {
    "g": "દુખાવો",
    "e": "Pain",
    "p": "n"
  },
  {
    "g": "તબિયત",
    "e": "Health/Condition",
    "p": "n"
  },
  {
    "g": "ખાંસી",
    "e": "Cough",
    "p": "n"
  },
  {
    "g": "તાવ",
    "e": "Fever",
    "p": "n"
  },
  {
    "g": "દવા",
    "e": "Medicine",
    "p": "n"
  },
  {
    "g": "ડોકટર",
    "e": "Doctor",
    "p": "n"
  },
  {
    "g": "હાસ્ય",
    "e": "Laughter",
    "p": "n"
  },
  {
    "g": "આનંદ",
    "e": "Joy",
    "p": "n"
  },
  {
    "g": "દુઃખ",
    "e": "Sorrow",
    "p": "n"
  },
  {
    "g": "ક્રોધ",
    "e": "Anger",
    "p": "n"
  },
  {
    "g": "ભય",
    "e": "Fear",
    "p": "n"
  },
  {
    "g": "પ્રેમ",
    "e": "Love",
    "p": "n"
  },
  {
    "g": "મૈત્રી",
    "e": "Friendship",
    "p": "n"
  },
  {
    "g": "વાવાઝોડું",
    "e": "Storm",
    "p": "n"
  },
  {
    "g": "ઇન્દ્રધનુષ",
    "e": "Rainbow",
    "p": "n"
  },
  {
    "g": "વીજળી",
    "e": "Lightning/Electricity",
    "p": "n"
  },
  {
    "g": "ગરમી",
    "e": "Heat",
    "p": "n"
  },
  {
    "g": "ઠંડી",
    "e": "Cold / weather",
    "p": "n"
  },
  {
    "g": "ભેજ",
    "e": "Humidity",
    "p": "n"
  },
  {
    "g": "ધુમ્મસ",
    "e": "Fog",
    "p": "n"
  },
  {
    "g": "નોકરી",
    "e": "Job",
    "p": "n"
  },
  {
    "g": "વ્યવસાય",
    "e": "Business",
    "p": "n"
  },
  {
    "g": "ઓફિસ",
    "e": "Office",
    "p": "n"
  },
  {
    "g": "મજૂરી",
    "e": "Labor",
    "p": "n"
  },
  {
    "g": "શિક્ષક",
    "e": "Teacher",
    "p": "n"
  },
  {
    "g": "વિદ્યાર્થી",
    "e": "Student",
    "p": "n"
  },
  {
    "g": "વિદ્યાલય",
    "e": "School / Educational institute",
    "p": "n"
  },
  {
    "g": "વિદ્યાપીઠ",
    "e": "University / Institute",
    "p": "n"
  },
  {
    "g": "વિષય",
    "e": "Subject",
    "p": "n"
  },
  {
    "g": "પરીક્ષા",
    "e": "Exam",
    "p": "n"
  },
  {
    "g": "અંક",
    "e": "Marks/Points",
    "p": "n"
  },
  {
    "g": "અગિયાર",
    "e": "Eleven",
    "p": "num"
  },
  {
    "g": "બાર",
    "e": "Twelve",
    "p": "num"
  },
  {
    "g": "તેેર",
    "e": "Thirteen",
    "p": "num"
  },
  {
    "g": "ચૌદ",
    "e": "Fourteen",
    "p": "num"
  },
  {
    "g": "પંદર",
    "e": "Fifteen",
    "p": "num"
  },
  {
    "g": "સોળ",
    "e": "Sixteen",
    "p": "num"
  },
  {
    "g": "સત્તર",
    "e": "Seventeen",
    "p": "num"
  },
  {
    "g": "અઢાર",
    "e": "Eighteen",
    "p": "num"
  },
  {
    "g": "ઓગણીસ",
    "e": "Nineteen",
    "p": "num"
  },
  {
    "g": "વીસ",
    "e": "Twenty",
    "p": "num"
  },
  {
    "g": "એકવીસ",
    "e": "Twenty one",
    "p": "num"
  },
  {
    "g": "બાવીસ",
    "e": "Twenty two",
    "p": "num"
  },
  {
    "g": "તેવીસ",
    "e": "Twenty three",
    "p": "num"
  },
  {
    "g": "ચોવીસ",
    "e": "Twenty four",
    "p": "num"
  },
  {
    "g": "પંચવીસ",
    "e": "Twenty five",
    "p": "num"
  },
  {
    "g": "છવીસ",
    "e": "Twenty six",
    "p": "num"
  },
  {
    "g": "સત્તાવીસ",
    "e": "Twenty seven",
    "p": "num"
  },
  {
    "g": "અઠ્ઠાવીસ",
    "e": "Twenty eight",
    "p": "num"
  },
  {
    "g": "ઓગણત્રીસ",
    "e": "Twenty nine",
    "p": "num"
  },
  {
    "g": "ત્રીસ",
    "e": "Thirty",
    "p": "num"
  },
  {
    "g": "એકત્રીસ",
    "e": "Thirty one",
    "p": "num"
  },
  {
    "g": "બત્રીસ",
    "e": "Thirty two",
    "p": "num"
  },
  {
    "g": "તેત્રીસ",
    "e": "Thirty three",
    "p": "num"
  },
  {
    "g": "ચોત્રીસ",
    "e": "Thirty four",
    "p": "num"
  },
  {
    "g": "પંત્રિસ",
    "e": "Thirty five",
    "p": "num"
  },
  {
    "g": "છત્રીસ",
    "e": "Thirty six",
    "p": "num"
  },
  {
    "g": "સડત્રીસ",
    "e": "Thirty seven",
    "p": "num"
  },
  {
    "g": "અડત્રીસ",
    "e": "Thirty eight",
    "p": "num"
  },
  {
    "g": "ઓગણચાલીસ",
    "e": "Thirty nine",
    "p": "num"
  },
  {
    "g": "ચાલીસ",
    "e": "Forty",
    "p": "num"
  },
  {
    "g": "એકતાલીસ",
    "e": "Forty one",
    "p": "num"
  },
  {
    "g": "બેતાલીસ",
    "e": "Forty two",
    "p": "num"
  },
  {
    "g": "ત્રેતાલીસ",
    "e": "Forty three",
    "p": "num"
  },
  {
    "g": "ચુમ્માલીસ",
    "e": "Forty four",
    "p": "num"
  },
  {
    "g": "પિસ્તાલીસ",
    "e": "Forty five",
    "p": "num"
  },
  {
    "g": "છેતાલીસ",
    "e": "Forty six",
    "p": "num"
  },
  {
    "g": "સુડતાલીસ",
    "e": "Forty seven",
    "p": "num"
  },
  {
    "g": "અડતાલીસ",
    "e": "Forty eight",
    "p": "num"
  },
  {
    "g": "ઓગણપચાસ",
    "e": "Forty nine",
    "p": "num"
  },
  {
    "g": "પચાસ",
    "e": "Fifty",
    "p": "num"
  },
  {
    "g": "એકાવન",
    "e": "Fifty one",
    "p": "num"
  },
  {
    "g": "બાવન",
    "e": "Fifty two",
    "p": "num"
  },
  {
    "g": "ત્રેપન",
    "e": "Fifty three",
    "p": "num"
  },
  {
    "g": "ચોપન",
    "e": "Fifty four / 54",
    "p": "num"
  },
  {
    "g": "પંચાવન",
    "e": "Fifty five",
    "p": "num"
  },
  {
    "g": "છપ્પન",
    "e": "Fifty six",
    "p": "num"
  },
  {
    "g": "સત્તાવન",
    "e": "Fifty seven",
    "p": "num"
  },
  {
    "g": "અઠ્ઠાવન",
    "e": "Fifty eight",
    "p": "num"
  },
  {
    "g": "ઓગણસાઠ",
    "e": "Fifty nine",
    "p": "num"
  },
  {
    "g": "સાઠ",
    "e": "Sixty",
    "p": "num"
  },
  {
    "g": "એકસઠ",
    "e": "Sixty one",
    "p": "num"
  },
  {
    "g": "બેસઠ",
    "e": "Sixty two",
    "p": "num"
  },
  {
    "g": "ત્રેસઠ",
    "e": "Sixty three",
    "p": "num"
  },
  {
    "g": "ચોસઠ",
    "e": "Sixty four",
    "p": "num"
  },
  {
    "g": "પાંસઠ",
    "e": "Sixty five",
    "p": "num"
  },
  {
    "g": "છાસઠ",
    "e": "Sixty six",
    "p": "num"
  },
  {
    "g": "સડસઠ",
    "e": "Sixty seven",
    "p": "num"
  },
  {
    "g": "અડસઠ",
    "e": "Sixty eight",
    "p": "num"
  },
  {
    "g": "ઓગણસિત્તેર",
    "e": "Sixty nine",
    "p": "num"
  },
  {
    "g": "સિત્તેર",
    "e": "Seventy",
    "p": "num"
  },
  {
    "g": "એકોતેર",
    "e": "Seventy one",
    "p": "num"
  },
  {
    "g": "બોતેર",
    "e": "Seventy two",
    "p": "num"
  },
  {
    "g": "ત્રોતેર",
    "e": "Seventy three",
    "p": "num"
  },
  {
    "g": "ચુમ્મોતેર",
    "e": "Seventy four",
    "p": "num"
  },
  {
    "g": "પંચોતેર",
    "e": "Seventy five",
    "p": "num"
  },
  {
    "g": "છોતેર",
    "e": "Seventy six",
    "p": "num"
  },
  {
    "g": "સિત્તોતેર",
    "e": "Seventy seven",
    "p": "num"
  },
  {
    "g": "અઠોતેર",
    "e": "Seventy eight",
    "p": "num"
  },
  {
    "g": "ઓગણએંસી",
    "e": "Seventy nine",
    "p": "num"
  },
  {
    "g": "એંસી",
    "e": "Eighty",
    "p": "num"
  },
  {
    "g": "એક્યાસી",
    "e": "Eighty one",
    "p": "num"
  },
  {
    "g": "બ્યાસી",
    "e": "Eighty two",
    "p": "num"
  },
  {
    "g": "ત્ર્યાસી",
    "e": "Eighty three",
    "p": "num"
  },
  {
    "g": "ચોર્યાસી",
    "e": "Eighty four",
    "p": "num"
  },
  {
    "g": "પંચ્યાસી",
    "e": "Eighty five",
    "p": "num"
  },
  {
    "g": "છ્યાસી",
    "e": "Eighty six",
    "p": "num"
  },
  {
    "g": "સિત્યાસી",
    "e": "Eighty seven",
    "p": "num"
  },
  {
    "g": "અઠ્યાસી",
    "e": "Eighty eight",
    "p": "num"
  },
  {
    "g": "ઓગણનવ્વાણું",
    "e": "Eighty nine",
    "p": "num"
  },
  {
    "g": "નવ્વાણું",
    "e": "Ninety",
    "p": "num"
  },
  {
    "g": "એકાણું",
    "e": "Ninety one",
    "p": "num"
  },
  {
    "g": "બાણું",
    "e": "Ninety two",
    "p": "num"
  },
  {
    "g": "ત્રાણું",
    "e": "Ninety three",
    "p": "num"
  },
  {
    "g": "ચોરાણું",
    "e": "Ninety four",
    "p": "num"
  },
  {
    "g": "પંચાણું",
    "e": "Ninety five",
    "p": "num"
  },
  {
    "g": "છાણું",
    "e": "Ninety six",
    "p": "num"
  },
  {
    "g": "સિત્તાણું",
    "e": "Ninety seven",
    "p": "num"
  },
  {
    "g": "અઠ્ઠાણું",
    "e": "Ninety eight",
    "p": "num"
  },
  {
    "g": "નેવાણું",
    "e": "Ninety nine",
    "p": "num"
  },
  {
    "g": "સો",
    "e": "Hundred",
    "p": "num"
  },
  {
    "g": "પસંદ કરવું",
    "e": "To choose",
    "p": "v"
  },
  {
    "g": "વિશ્વાસ રાખવો",
    "e": "To trust",
    "p": "n"
  },
  {
    "g": "જોઇતું",
    "e": "To need",
    "p": "n"
  },
  {
    "g": "આશા રાખવી",
    "e": "To hope",
    "p": "n"
  },
  {
    "g": "પ્રયત્ન કરવો",
    "e": "To try",
    "p": "n"
  },
  {
    "g": "સ્મરણ કરવું",
    "e": "To remember",
    "p": "v"
  },
  {
    "g": "ભૂલવું",
    "e": "To forget",
    "p": "v"
  },
  {
    "g": "વિશ્વાસ કરવો",
    "e": "To believe",
    "p": "n"
  },
  {
    "g": "રાખવું",
    "e": "To keep",
    "p": "v"
  },
  {
    "g": "ખોલવું",
    "e": "To open",
    "p": "v"
  },
  {
    "g": "બંધ કરવું",
    "e": "To close",
    "p": "v"
  },
  {
    "g": "પ્રારંભ કરવો",
    "e": "To start",
    "p": "n"
  },
  {
    "g": "પૂર્ણ કરવું",
    "e": "To finish",
    "p": "v"
  },
  {
    "g": "જીતવું",
    "e": "To win",
    "p": "v"
  },
  {
    "g": "હારવું",
    "e": "To lose",
    "p": "v"
  },
  {
    "g": "ચાલાવવું",
    "e": "To drive",
    "p": "v"
  },
  {
    "g": "તરવું",
    "e": "To swim",
    "p": "v"
  },
  {
    "g": "ઉડવું",
    "e": "To fly",
    "p": "v"
  },
  {
    "g": "બાંધવું",
    "e": "To build",
    "p": "v"
  },
  {
    "g": "તોડવું",
    "e": "To break",
    "p": "v"
  },
  {
    "g": "સ્વસ્થ",
    "e": "Healthy",
    "p": "n"
  },
  {
    "g": "બીમાર",
    "e": "Sick",
    "p": "n"
  },
  {
    "g": "સાહસિક",
    "e": "Brave",
    "p": "n"
  },
  {
    "g": "ડરપોક",
    "e": "Cowardly",
    "p": "n"
  },
  {
    "g": "શક્તિશાળી",
    "e": "Strong",
    "p": "n"
  },
  {
    "g": "નબળું",
    "e": "Weak",
    "p": "n"
  },
  {
    "g": "ધીમું",
    "e": "Slow / Gentle",
    "p": "adv"
  },
  {
    "g": "સમૃદ્ધ",
    "e": "Rich",
    "p": "n"
  },
  {
    "g": "ગરીબ",
    "e": "Poor / Needy",
    "p": "n"
  },
  {
    "g": "પ્રખ્યાત",
    "e": "Famous",
    "p": "n"
  },
  {
    "g": "અજાણ્યું",
    "e": "Unknown",
    "p": "n"
  },
  {
    "g": "ખુશ",
    "e": "Happy",
    "p": "n"
  },
  {
    "g": "દુઃખી",
    "e": "Sad",
    "p": "n"
  },
  {
    "g": "થકેલું",
    "e": "Tired",
    "p": "n"
  },
  {
    "g": "ઉત્સાહી",
    "e": "Excited",
    "p": "n"
  },
  {
    "g": "ખતરનાક",
    "e": "Dangerous",
    "p": "n"
  },
  {
    "g": "સુરક્ષિત",
    "e": "Safe",
    "p": "n"
  },
  {
    "g": "રસપ્રદ",
    "e": "Interesting",
    "p": "n"
  },
  {
    "g": "ચપાટી",
    "e": "Chapati",
    "p": "n"
  },
  {
    "g": "પરાઠા",
    "e": "Paratha",
    "p": "n"
  },
  {
    "g": "ખિચડી",
    "e": "Khichdi",
    "p": "n"
  },
  {
    "g": "ખમણ",
    "e": "Khaman",
    "p": "n"
  },
  {
    "g": "ઢોકળા",
    "e": "Dhokla",
    "p": "n"
  },
  {
    "g": "ફાફડા",
    "e": "Fafda",
    "p": "n"
  },
  {
    "g": "જલેબી",
    "e": "Jalebi",
    "p": "n"
  },
  {
    "g": "ગાંઠિયા",
    "e": "Ganthiya",
    "p": "n"
  },
  {
    "g": "સેવ",
    "e": "Sev",
    "p": "n"
  },
  {
    "g": "શ્રીખંડ",
    "e": "Shrikhand",
    "p": "n"
  },
  {
    "g": "ખીર",
    "e": "Kheer",
    "p": "n"
  },
  {
    "g": "હલવો",
    "e": "Halwa",
    "p": "n"
  },
  {
    "g": "આઇસ્ક્રીમ",
    "e": "Ice cream",
    "p": "n"
  },
  {
    "g": "ચોકલેટ",
    "e": "Chocolate",
    "p": "n"
  },
  {
    "g": "બિસ્કીટ",
    "e": "Biscuit / Cookie",
    "p": "n"
  },
  {
    "g": "કેક",
    "e": "Cake / Sponge cake",
    "p": "n"
  },
  {
    "g": "પપૈયું",
    "e": "Papaya",
    "p": "n"
  },
  {
    "g": "અનાનસ",
    "e": "Pineapple",
    "p": "n"
  },
  {
    "g": "જામફળ",
    "e": "Guava",
    "p": "n"
  },
  {
    "g": "સીટાફળ",
    "e": "Custard apple",
    "p": "n"
  },
  {
    "g": "બોર",
    "e": "Jujube",
    "p": "n"
  },
  {
    "g": "ચીકુ",
    "e": "Sapodilla",
    "p": "n"
  },
  {
    "g": "જાંબુ",
    "e": "Black plum",
    "p": "n"
  },
  {
    "g": "કાજુ",
    "e": "Cashew",
    "p": "n"
  },
  {
    "g": "બદામ",
    "e": "Almond",
    "p": "n"
  },
  {
    "g": "અખરોટ",
    "e": "Walnut",
    "p": "n"
  },
  {
    "g": "અંજીર",
    "e": "Fig",
    "p": "n"
  },
  {
    "g": "ખજૂર",
    "e": "Date",
    "p": "n"
  },
  {
    "g": "સિંગદાણા",
    "e": "Peanuts",
    "p": "n"
  },
  {
    "g": "કિસમિસ",
    "e": "Raisins",
    "p": "n"
  },
  {
    "g": "કઠોળ",
    "e": "Legume",
    "p": "n"
  },
  {
    "g": "શિંગ",
    "e": "Groundnut",
    "p": "n"
  },
  {
    "g": "કેરટ",
    "e": "Carrot",
    "p": "n"
  },
  {
    "g": "મૂળા",
    "e": "Radish",
    "p": "n"
  },
  {
    "g": "શકરિયા",
    "e": "Sweet potato",
    "p": "n"
  },
  {
    "g": "કોલીફલાવર",
    "e": "Cauliflower",
    "p": "n"
  },
  {
    "g": "ફૂલકોબી",
    "e": "Cauliflower",
    "p": "n"
  },
  {
    "g": "કોબી",
    "e": "Cabbage",
    "p": "n"
  },
  {
    "g": "સુરતી પાપડી",
    "e": "Flat beans",
    "p": "n"
  },
  {
    "g": "વાલ",
    "e": "Hair / Fence",
    "p": "n"
  },
  {
    "g": "મેથી",
    "e": "Fenugreek",
    "p": "n"
  },
  {
    "g": "ધાણા",
    "e": "Coriander",
    "p": "n"
  },
  {
    "g": "કોથમીર",
    "e": "Cilantro",
    "p": "n"
  },
  {
    "g": "સોપ",
    "e": "Fennel",
    "p": "n"
  },
  {
    "g": "તુલસી",
    "e": "Basil",
    "p": "n"
  },
  {
    "g": "પુદીનુ",
    "e": "Mint",
    "p": "n"
  },
  {
    "g": "લીલાં મરચાં",
    "e": "Green chili",
    "p": "n"
  },
  {
    "g": "લાલ મરચાં",
    "e": "Red chili",
    "p": "n"
  },
  {
    "g": "કોળું",
    "e": "Pumpkin / Squash",
    "p": "n"
  },
  {
    "g": "દૂધી",
    "e": "Bottle gourd / Calabash",
    "p": "n"
  },
  {
    "g": "કામદાર",
    "e": "Worker",
    "p": "n"
  },
  {
    "g": "કિસાન",
    "e": "Farmer",
    "p": "n"
  },
  {
    "g": "વણિક",
    "e": "Trader",
    "p": "n"
  },
  {
    "g": "દુકાનદાર",
    "e": "Shopkeeper",
    "p": "n"
  },
  {
    "g": "લેખક",
    "e": "Writer",
    "p": "n"
  },
  {
    "g": "કવિ",
    "e": "Poet",
    "p": "n"
  },
  {
    "g": "ગાયક",
    "e": "Singer",
    "p": "n"
  },
  {
    "g": "નર્તક",
    "e": "Dancer",
    "p": "n"
  },
  {
    "g": "અભિનેતા",
    "e": "Actor",
    "p": "n"
  },
  {
    "g": "અભિનેત્રી",
    "e": "Actress",
    "p": "n"
  },
  {
    "g": "ડ્રાઈવર",
    "e": "Driver",
    "p": "n"
  },
  {
    "g": "માઝી",
    "e": "Sailor",
    "p": "n"
  },
  {
    "g": "પોલીસ",
    "e": "Police",
    "p": "n"
  },
  {
    "g": "સૈનિક",
    "e": "Soldier",
    "p": "n"
  },
  {
    "g": "નર્સ",
    "e": "Nurse",
    "p": "n"
  },
  {
    "g": "ઈજનેર",
    "e": "Engineer",
    "p": "n"
  },
  {
    "g": "વૈજ્ઞાનિક",
    "e": "Scientist",
    "p": "n"
  },
  {
    "g": "વકીલ",
    "e": "Lawyer",
    "p": "n"
  },
  {
    "g": "ન્યાયાધીશ",
    "e": "Judge",
    "p": "n"
  },
  {
    "g": "હથોડો",
    "e": "Hammer",
    "p": "n"
  },
  {
    "g": "આરી",
    "e": "Saw",
    "p": "n"
  },
  {
    "g": "પાનસ",
    "e": "Wrench",
    "p": "n"
  },
  {
    "g": "પેચકસ",
    "e": "Screwdriver",
    "p": "n"
  },
  {
    "g": "સોય",
    "e": "Needle",
    "p": "n"
  },
  {
    "g": "દોરો",
    "e": "Thread",
    "p": "n"
  },
  {
    "g": "કાતર",
    "e": "Scissors",
    "p": "n"
  },
  {
    "g": "કુંડો",
    "e": "Pitcher",
    "p": "n"
  },
  {
    "g": "ઘડો",
    "e": "Clay pot",
    "p": "n"
  },
  {
    "g": "ચુલો",
    "e": "Stove / Hearth",
    "p": "n"
  },
  {
    "g": "અંગીઠી",
    "e": "Fireplace",
    "p": "n"
  },
  {
    "g": "તંદુર",
    "e": "Tandoor",
    "p": "n"
  },
  {
    "g": "કુહાડી",
    "e": "Axe",
    "p": "n"
  },
  {
    "g": "ફાવડો",
    "e": "Shovel",
    "p": "n"
  },
  {
    "g": "ખુરપી",
    "e": "Hoe",
    "p": "n"
  },
  {
    "g": "બળદ",
    "e": "Bull",
    "p": "n"
  },
  {
    "g": "ઘેટું",
    "e": "Sheep",
    "p": "n"
  },
  {
    "g": "ગધેડો",
    "e": "Donkey",
    "p": "n"
  },
  {
    "g": "કૂકડો",
    "e": "Rooster",
    "p": "n"
  },
  {
    "g": "બતક",
    "e": "Duck",
    "p": "n"
  },
  {
    "g": "હંસ",
    "e": "Goose",
    "p": "n"
  },
  {
    "g": "કાચબો",
    "e": "Turtle",
    "p": "n"
  },
  {
    "g": "સાપ",
    "e": "Snake",
    "p": "n"
  },
  {
    "g": "કરચલો",
    "e": "Crocodile",
    "p": "n"
  },
  {
    "g": "વાંદરો",
    "e": "Monkey",
    "p": "n"
  },
  {
    "g": "ચીતો",
    "e": "Leopard",
    "p": "n"
  },
  {
    "g": "જિરાફ",
    "e": "Giraffe",
    "p": "n"
  },
  {
    "g": "ઝીબ્રા",
    "e": "Zebra",
    "p": "n"
  },
  {
    "g": "ખિસકોલી",
    "e": "Squirrel",
    "p": "n"
  },
  {
    "g": "ચમગાદર",
    "e": "Bat",
    "p": "n"
  },
  {
    "g": "ડીંબ",
    "e": "Frog",
    "p": "n"
  },
  {
    "g": "માખી",
    "e": "Fly",
    "p": "n"
  },
  {
    "g": "મધમાખી",
    "e": "Bee",
    "p": "n"
  },
  {
    "g": "સપનું",
    "e": "Dream",
    "p": "n"
  },
  {
    "g": "વિચાર",
    "e": "Thought",
    "p": "n"
  },
  {
    "g": "આશા",
    "e": "Hope",
    "p": "n"
  },
  {
    "g": "ભરોસો",
    "e": "Trust",
    "p": "n"
  },
  {
    "g": "પ્રેરણા",
    "e": "Inspiration",
    "p": "n"
  },
  {
    "g": "શાંતિ",
    "e": "Peace",
    "p": "n"
  },
  {
    "g": "સ્વતંત્રતા",
    "e": "Freedom",
    "p": "n"
  },
  {
    "g": "સમાનતા",
    "e": "Equality",
    "p": "n"
  },
  {
    "g": "ન્યાય",
    "e": "Justice",
    "p": "n"
  },
  {
    "g": "સત્ય",
    "e": "Truth",
    "p": "n"
  },
  {
    "g": "મિત્રતા",
    "e": "Friendship",
    "p": "n"
  },
  {
    "g": "ઘૃણા",
    "e": "Hate",
    "p": "n"
  },
  {
    "g": "સહનશીલતા",
    "e": "Tolerance",
    "p": "n"
  },
  {
    "g": "કરુણા",
    "e": "Compassion",
    "p": "n"
  },
  {
    "g": "કૃતજ્ઞતા",
    "e": "Gratitude",
    "p": "n"
  },
  {
    "g": "ભક્તિ",
    "e": "Devotion",
    "p": "n"
  },
  {
    "g": "સેવા",
    "e": "Service",
    "p": "n"
  },
  {
    "g": "સંસ્કૃતિ",
    "e": "Culture",
    "p": "n"
  },
  {
    "g": "સાહસ",
    "e": "Courage",
    "p": "n"
  },
  {
    "g": "ચકલી",
    "e": "Sparrow",
    "p": "n"
  },
  {
    "g": "કાગડો",
    "e": "Crow",
    "p": "n"
  },
  {
    "g": "તોતા",
    "e": "Parrot",
    "p": "n"
  },
  {
    "g": "કોયલ",
    "e": "Koel (cuckoo bird) / Cuckoo",
    "p": "n"
  },
  {
    "g": "ઘુવડ",
    "e": "Owl",
    "p": "n"
  },
  {
    "g": "મૈના",
    "e": "Myna",
    "p": "n"
  },
  {
    "g": "સરસ",
    "e": "Crane",
    "p": "n"
  },
  {
    "g": "બગલો",
    "e": "Egret/Heron",
    "p": "n"
  },
  {
    "g": "ગિધ",
    "e": "Vulture",
    "p": "n"
  },
  {
    "g": "રાજહંસ",
    "e": "Swan",
    "p": "n"
  },
  {
    "g": "બટેર",
    "e": "Quail",
    "p": "n"
  },
  {
    "g": "કિંગફિશર",
    "e": "Kingfisher",
    "p": "n"
  },
  {
    "g": "વ્હેલ",
    "e": "Whale",
    "p": "n"
  },
  {
    "g": "ડોલ્ફિન",
    "e": "Dolphin",
    "p": "n"
  },
  {
    "g": "શાર્ક",
    "e": "Shark",
    "p": "n"
  },
  {
    "g": "જેલીફિશ",
    "e": "Jellyfish",
    "p": "n"
  },
  {
    "g": "ઓક્ટોપસ",
    "e": "Octopus",
    "p": "n"
  },
  {
    "g": "કેકડો",
    "e": "Crab",
    "p": "n"
  },
  {
    "g": "ચીંગળી",
    "e": "Shrimp",
    "p": "n"
  },
  {
    "g": "શંખ",
    "e": "Conch",
    "p": "n"
  },
  {
    "g": "ઘોંઘો",
    "e": "Snail",
    "p": "n"
  },
  {
    "g": "ચીંટી",
    "e": "Ant",
    "p": "n"
  },
  {
    "g": "દીમક",
    "e": "Termite",
    "p": "n"
  },
  {
    "g": "મચ્છર",
    "e": "Mosquito",
    "p": "n"
  },
  {
    "g": "તિતલી",
    "e": "Butterfly",
    "p": "n"
  },
  {
    "g": "ભમરો",
    "e": "Bumblebee",
    "p": "n"
  },
  {
    "g": "જૂં",
    "e": "Louse",
    "p": "n"
  },
  {
    "g": "પીસુ",
    "e": "Flea",
    "p": "n"
  },
  {
    "g": "મકડો",
    "e": "Spider",
    "p": "n"
  },
  {
    "g": "જોનક",
    "e": "Leech",
    "p": "n"
  },
  {
    "g": "વડ",
    "e": "Banyan",
    "p": "n"
  },
  {
    "g": "પિપળ",
    "e": "Peepal",
    "p": "n"
  },
  {
    "g": "નીમ",
    "e": "Neem",
    "p": "n"
  },
  {
    "g": "આમળા",
    "e": "Indian gooseberry",
    "p": "n"
  },
  {
    "g": "અરંડો",
    "e": "Castor",
    "p": "n"
  },
  {
    "g": "ચંદન",
    "e": "Sandalwood",
    "p": "n"
  },
  {
    "g": "તાડ",
    "e": "Palm",
    "p": "n"
  },
  {
    "g": "આંબલી",
    "e": "Tamarind",
    "p": "n"
  },
  {
    "g": "અશોક",
    "e": "Ashoka tree",
    "p": "n"
  },
  {
    "g": "બોરડું",
    "e": "Jujube tree",
    "p": "n"
  },
  {
    "g": "રાઈ",
    "e": "Mustard seed",
    "p": "n"
  },
  {
    "g": "જીરું",
    "e": "Cumin",
    "p": "n"
  },
  {
    "g": "હળદર",
    "e": "Turmeric",
    "p": "n"
  },
  {
    "g": "હિંગ",
    "e": "Asafoetida",
    "p": "n"
  },
  {
    "g": "તેજપાન",
    "e": "Bay leaf",
    "p": "n"
  },
  {
    "g": "લવિંગ",
    "e": "Clove",
    "p": "n"
  },
  {
    "g": "દાલચીની",
    "e": "Cinnamon",
    "p": "n"
  },
  {
    "g": "એલચી",
    "e": "Cardamom",
    "p": "n"
  },
  {
    "g": "જાયફળ",
    "e": "Nutmeg",
    "p": "n"
  },
  {
    "g": "જાવિત્રી",
    "e": "Mace",
    "p": "n"
  },
  {
    "g": "તલ",
    "e": "Sesame",
    "p": "n"
  },
  {
    "g": "ખસખસ",
    "e": "Poppy seeds",
    "p": "n"
  },
  {
    "g": "સુંઠ",
    "e": "Dry ginger",
    "p": "n"
  },
  {
    "g": "તુવેર",
    "e": "Pigeon pea",
    "p": "n"
  },
  {
    "g": "ચણા",
    "e": "Chickpeas",
    "p": "n"
  },
  {
    "g": "મસૂર",
    "e": "Red lentil",
    "p": "n"
  },
  {
    "g": "મૂંગ",
    "e": "Green gram",
    "p": "n"
  },
  {
    "g": "ઉડદ",
    "e": "Black gram",
    "p": "n"
  },
  {
    "g": "રાજમા",
    "e": "Kidney beans",
    "p": "n"
  },
  {
    "g": "ચોળી",
    "e": "Black-eyed pea",
    "p": "n"
  },
  {
    "g": "જવાર",
    "e": "Sorghum",
    "p": "n"
  },
  {
    "g": "બાજરી",
    "e": "Pearl millet",
    "p": "n"
  },
  {
    "g": "નાચણી",
    "e": "Finger millet",
    "p": "n"
  },
  {
    "g": "સામો",
    "e": "Barnyard millet",
    "p": "n"
  },
  {
    "g": "કુકર",
    "e": "Pressure cooker",
    "p": "n"
  },
  {
    "g": "તાપેલી",
    "e": "Saucepan",
    "p": "n"
  },
  {
    "g": "છલણી",
    "e": "Strainer",
    "p": "n"
  },
  {
    "g": "ઘસણી",
    "e": "Grater",
    "p": "n"
  },
  {
    "g": "વેલણ",
    "e": "Rolling pin",
    "p": "n"
  },
  {
    "g": "પાટલું",
    "e": "Rolling board",
    "p": "n"
  },
  {
    "g": "ડબ્બો",
    "e": "Container",
    "p": "n"
  },
  {
    "g": "બરણું",
    "e": "Jar",
    "p": "n"
  },
  {
    "g": "ગ્લાસ",
    "e": "Glass",
    "p": "n"
  },
  {
    "g": "કપ",
    "e": "Cup",
    "p": "n"
  },
  {
    "g": "ડોલ",
    "e": "Bucket",
    "p": "n"
  },
  {
    "g": "થર્મોસ",
    "e": "Thermos",
    "p": "n"
  },
  {
    "g": "વાસણ",
    "e": "Utensil",
    "p": "n"
  },
  {
    "g": "પટ્ટો",
    "e": "Belt",
    "p": "n"
  },
  {
    "g": "મોજાં",
    "e": "Socks",
    "p": "n"
  },
  {
    "g": "હાથમોજાં",
    "e": "Gloves",
    "p": "n"
  },
  {
    "g": "કુર્તા",
    "e": "Kurta",
    "p": "n"
  },
  {
    "g": "પાયજામા",
    "e": "Pajamas",
    "p": "n"
  },
  {
    "g": "શેરવાણી",
    "e": "Sherwani",
    "p": "n"
  },
  {
    "g": "લેહેંગો",
    "e": "Lehenga",
    "p": "n"
  },
  {
    "g": "ઓઢણી",
    "e": "Veil/Shawl",
    "p": "n"
  },
  {
    "g": "પગડી",
    "e": "Turban",
    "p": "n"
  },
  {
    "g": "આંગઠી",
    "e": "Ring",
    "p": "n"
  },
  {
    "g": "ચૂડી",
    "e": "Bangle",
    "p": "n"
  },
  {
    "g": "હાર",
    "e": "Necklace",
    "p": "n"
  },
  {
    "g": "નથ",
    "e": "Nose ring",
    "p": "n"
  },
  {
    "g": "પાયલ",
    "e": "Anklet",
    "p": "n"
  },
  {
    "g": "બિન્દી",
    "e": "Bindi",
    "p": "n"
  },
  {
    "g": "ટિકલી",
    "e": "Forehead ornament",
    "p": "n"
  },
  {
    "g": "બેન્કર",
    "e": "Banker",
    "p": "n"
  },
  {
    "g": "હિસાબી",
    "e": "Accountant",
    "p": "n"
  },
  {
    "g": "પ્રોફેસર",
    "e": "Professor",
    "p": "n"
  },
  {
    "g": "શોધક",
    "e": "Researcher",
    "p": "n"
  },
  {
    "g": "સ્થાપત્યકાર",
    "e": "Architect",
    "p": "n"
  },
  {
    "g": "ડિઝાઇનર",
    "e": "Designer",
    "p": "n"
  },
  {
    "g": "કારગર",
    "e": "Artisan",
    "p": "n"
  },
  {
    "g": "સુથાર",
    "e": "Carpenter",
    "p": "n"
  },
  {
    "g": "રાજમિસ્ત્રી",
    "e": "Mason",
    "p": "n"
  },
  {
    "g": "પ્લંબર",
    "e": "Plumber",
    "p": "n"
  },
  {
    "g": "ઇલેક્ટ્રિશિયન",
    "e": "Electrician",
    "p": "n"
  },
  {
    "g": "નોકરાણી",
    "e": "Maid",
    "p": "n"
  },
  {
    "g": "સફાઈકર્મી",
    "e": "Cleaner",
    "p": "n"
  },
  {
    "g": "માલી",
    "e": "Gardener",
    "p": "n"
  },
  {
    "g": "ડાકિયા",
    "e": "Postman",
    "p": "n"
  },
  {
    "g": "પત્રકાર",
    "e": "Journalist",
    "p": "n"
  },
  {
    "g": "ફોટોગ્રાફર",
    "e": "Photographer",
    "p": "n"
  },
  {
    "g": "કારોબારી",
    "e": "Executive",
    "p": "n"
  },
  {
    "g": "મેનેજર",
    "e": "Manager",
    "p": "n"
  },
  {
    "g": "દર્દી",
    "e": "Patient",
    "p": "n"
  },
  {
    "g": "સુધારવું",
    "e": "To improve",
    "p": "v"
  },
  {
    "g": "ઘટાડવું",
    "e": "To reduce",
    "p": "v"
  },
  {
    "g": "વધારવું",
    "e": "To increase",
    "p": "v"
  },
  {
    "g": "મળવું",
    "e": "To meet",
    "p": "v"
  },
  {
    "g": "રહસ્ય રાખવું",
    "e": "To keep secret",
    "p": "v"
  },
  {
    "g": "આયોજિત કરવું",
    "e": "To organize",
    "p": "v"
  },
  {
    "g": "પહેરીવું",
    "e": "To wear",
    "p": "v"
  },
  {
    "g": "ઉતારવું",
    "e": "To remove / clothes",
    "p": "v"
  },
  {
    "g": "ભરવું",
    "e": "To fill",
    "p": "v"
  },
  {
    "g": "ખાલી કરવું",
    "e": "To empty",
    "p": "v"
  },
  {
    "g": "માપવું",
    "e": "To measure",
    "p": "v"
  },
  {
    "g": "સજાવવું",
    "e": "To decorate",
    "p": "v"
  },
  {
    "g": "પૂછવું",
    "e": "To ask",
    "p": "v"
  },
  {
    "g": "જવાબ આપવો",
    "e": "To answer",
    "p": "n"
  },
  {
    "g": "ધ્યાન આપવું",
    "e": "To pay attention",
    "p": "v"
  },
  {
    "g": "વિરામ લેવું",
    "e": "To take a break",
    "p": "v"
  },
  {
    "g": "આરામ કરવો",
    "e": "To rest",
    "p": "n"
  },
  {
    "g": "યાદ અપાવવું",
    "e": "To remind",
    "p": "v"
  },
  {
    "g": "માફ કરવું",
    "e": "To forgive",
    "p": "v"
  },
  {
    "g": "આભાર માનવો",
    "e": "To thank",
    "p": "n"
  },
  {
    "g": "શરૂ કરવું",
    "e": "To begin",
    "p": "v"
  },
  {
    "g": "મોકલવું",
    "e": "To send",
    "p": "v"
  },
  {
    "g": "મળતાવવું",
    "e": "To mix",
    "p": "v"
  },
  {
    "g": "વિભાજિત કરવું",
    "e": "To divide",
    "p": "v"
  },
  {
    "g": "જાળવવું",
    "e": "To maintain",
    "p": "v"
  },
  {
    "g": "અનુવાદ કરવો",
    "e": "To translate",
    "p": "n"
  },
  {
    "g": "અભ્યાસ કરવો",
    "e": "To study",
    "p": "n"
  },
  {
    "g": "સફર કરવી",
    "e": "To travel",
    "p": "v"
  },
  {
    "g": "ફોટો પાડવો",
    "e": "To photograph",
    "p": "n"
  },
  {
    "g": "સાથે",
    "e": "With",
    "p": "prep"
  },
  {
    "g": "વિના",
    "e": "Without",
    "p": "prep"
  },
  {
    "g": "પાસે",
    "e": "Near/with / possession",
    "p": "prep"
  },
  {
    "g": "વચ્ચે",
    "e": "Between",
    "p": "prep"
  },
  {
    "g": "તરફ",
    "e": "Toward",
    "p": "prep"
  },
  {
    "g": "આસપાસ",
    "e": "Around",
    "p": "prep"
  },
  {
    "g": "અગાઉ",
    "e": "Before",
    "p": "prep"
  },
  {
    "g": "પછી",
    "e": "After",
    "p": "prep"
  },
  {
    "g": "દરમિયાન",
    "e": "During",
    "p": "prep"
  },
  {
    "g": "ઉપરથી",
    "e": "From above",
    "p": "n"
  },
  {
    "g": "નીચેથી",
    "e": "From below",
    "p": "n"
  },
  {
    "g": "અંદરથી",
    "e": "From inside",
    "p": "n"
  },
  {
    "g": "બહારથી",
    "e": "From outside",
    "p": "n"
  },
  {
    "g": "કારણે",
    "e": "Due to",
    "p": "prep"
  },
  {
    "g": "માટે",
    "e": "For",
    "p": "prep"
  },
  {
    "g": "વિરુદ્ધ",
    "e": "Against",
    "p": "prep"
  },
  {
    "g": "બદલે",
    "e": "Instead of",
    "p": "prep"
  },
  {
    "g": "જોકે",
    "e": "Though",
    "p": "conj"
  },
  {
    "g": "આમ છતાં",
    "e": "Even so",
    "p": "n"
  },
  {
    "g": "ક્રિકેટ",
    "e": "Cricket",
    "p": "n"
  },
  {
    "g": "ફૂટબોલ",
    "e": "Football",
    "p": "n"
  },
  {
    "g": "હોકી",
    "e": "Hockey",
    "p": "n"
  },
  {
    "g": "કબડ્ડી",
    "e": "Kabaddi",
    "p": "n"
  },
  {
    "g": "ખો-ખો",
    "e": "Kho-kho",
    "p": "n"
  },
  {
    "g": "ટેનિસ",
    "e": "Tennis",
    "p": "n"
  },
  {
    "g": "બેડમિન્ટન",
    "e": "Badminton",
    "p": "n"
  },
  {
    "g": "ટેબલ ટેનિસ",
    "e": "Table tennis",
    "p": "n"
  },
  {
    "g": "વોલીબોલ",
    "e": "Volleyball",
    "p": "n"
  },
  {
    "g": "બાસ્કેટબોલ",
    "e": "Basketball",
    "p": "n"
  },
  {
    "g": "શતરંજ",
    "e": "Chess",
    "p": "n"
  },
  {
    "g": "લુડો",
    "e": "Ludo",
    "p": "n"
  },
  {
    "g": "સાપશીડી",
    "e": "Snakes and ladders",
    "p": "n"
  },
  {
    "g": "દોડ",
    "e": "Race",
    "p": "n"
  },
  {
    "g": "કુસ્તી",
    "e": "Wrestling",
    "p": "n"
  },
  {
    "g": "તરણ",
    "e": "Swimming",
    "p": "n"
  },
  {
    "g": "લૅપટોપ",
    "e": "Laptop",
    "p": "n"
  },
  {
    "g": "ટેબ્લેટ",
    "e": "Tablet",
    "p": "n"
  },
  {
    "g": "પ્રિન્ટર",
    "e": "Printer",
    "p": "n"
  },
  {
    "g": "ઇન્ટરનેટ",
    "e": "Internet",
    "p": "n"
  },
  {
    "g": "વાઇ-ફાઇ",
    "e": "Wi‑Fi",
    "p": "n"
  },
  {
    "g": "પાસવર્ડ",
    "e": "Password",
    "p": "n"
  },
  {
    "g": "વેબસાઇટ",
    "e": "Website",
    "p": "n"
  },
  {
    "g": "એપ",
    "e": "App",
    "p": "n"
  },
  {
    "g": "સોફ્ટવેર",
    "e": "Software",
    "p": "n"
  },
  {
    "g": "હાર્ડવેર",
    "e": "Hardware",
    "p": "n"
  },
  {
    "g": "ડેટા",
    "e": "Data",
    "p": "n"
  },
  {
    "g": "ફાઇલ",
    "e": "File",
    "p": "n"
  },
  {
    "g": "ફોલ્ડર",
    "e": "Folder",
    "p": "n"
  },
  {
    "g": "સ્ક્રીન",
    "e": "Screen",
    "p": "n"
  },
  {
    "g": "કીબોર્ડ",
    "e": "Keyboard",
    "p": "n"
  },
  {
    "g": "માઉસ",
    "e": "Mouse",
    "p": "n"
  },
  {
    "g": "કૅમેરા",
    "e": "Camera",
    "p": "n"
  },
  {
    "g": "માઇક્રોફોન",
    "e": "Microphone",
    "p": "n"
  },
  {
    "g": "ચોરસ્તો",
    "e": "Intersection",
    "p": "n"
  },
  {
    "g": "વળાંક",
    "e": "Turn",
    "p": "n"
  },
  {
    "g": "પુલ",
    "e": "Bridge",
    "p": "n"
  },
  {
    "g": "ટનલ",
    "e": "Tunnel",
    "p": "n"
  },
  {
    "g": "ટોલ",
    "e": "Toll",
    "p": "n"
  },
  {
    "g": "ટ્રાફિક",
    "e": "Traffic",
    "p": "n"
  },
  {
    "g": "સિગ્નલ",
    "e": "Signal",
    "p": "n"
  },
  {
    "g": "પાર્કિંગ",
    "e": "Parking",
    "p": "n"
  },
  {
    "g": "લાઇસન્સ",
    "e": "License",
    "p": "n"
  },
  {
    "g": "હેલ્મેટ",
    "e": "Helmet",
    "p": "n"
  },
  {
    "g": "બ્રેક",
    "e": "Brake",
    "p": "n"
  },
  {
    "g": "સ્ટીયરિંગ",
    "e": "Steering",
    "p": "n"
  },
  {
    "g": "ટીકેટ",
    "e": "Ticket",
    "p": "n"
  },
  {
    "g": "પ્લેટફોર્મ",
    "e": "Platform",
    "p": "n"
  },
  {
    "g": "પરમિટ",
    "e": "Permit",
    "p": "n"
  },
  {
    "g": "સરકાર",
    "e": "Government",
    "p": "n"
  },
  {
    "g": "મંત્રાલય",
    "e": "Ministry",
    "p": "n"
  },
  {
    "g": "વિભાગ",
    "e": "Department",
    "p": "n"
  },
  {
    "g": "નિયમ",
    "e": "Rule",
    "p": "n"
  },
  {
    "g": "કાયદો",
    "e": "Law",
    "p": "n"
  },
  {
    "g": "અધિકાર",
    "e": "Right",
    "p": "n"
  },
  {
    "g": "કર્તવ્ય",
    "e": "Duty",
    "p": "n"
  },
  {
    "g": "ચૂંટણી",
    "e": "Election",
    "p": "n"
  },
  {
    "g": "મતદાર",
    "e": "Voter",
    "p": "n"
  },
  {
    "g": "મતદાન",
    "e": "Voting",
    "p": "n"
  },
  {
    "g": "અદાલત",
    "e": "Court",
    "p": "n"
  },
  {
    "g": "થાણું",
    "e": "Police station",
    "p": "n"
  },
  {
    "g": "કેસ",
    "e": "Case",
    "p": "n"
  },
  {
    "g": "જરિમાનો",
    "e": "Fine",
    "p": "n"
  },
  {
    "g": "જેલ",
    "e": "Jail",
    "p": "n"
  },
  {
    "g": "કેદી",
    "e": "Prisoner",
    "p": "n"
  },
  {
    "g": "આદેશ",
    "e": "Order",
    "p": "n"
  },
  {
    "g": "પાઠ",
    "e": "Lesson",
    "p": "n"
  },
  {
    "g": "અભ્યાસ",
    "e": "Study",
    "p": "n"
  },
  {
    "g": "ગૃહકાર્ય",
    "e": "Homework",
    "p": "n"
  },
  {
    "g": "પાઠ્યપુસ્તક",
    "e": "Textbook",
    "p": "n"
  },
  {
    "g": "પ્રશ્ન",
    "e": "Question",
    "p": "n"
  },
  {
    "g": "ઉત્તર",
    "e": "Answer",
    "p": "n"
  },
  {
    "g": "પ્રમાણપત્ર",
    "e": "Certificate",
    "p": "n"
  },
  {
    "g": "વિદ્યાવૃત્તિ",
    "e": "Scholarship",
    "p": "n"
  },
  {
    "g": "ગ્રેડ",
    "e": "Grade",
    "p": "n"
  },
  {
    "g": "વર્ગ",
    "e": "Class",
    "p": "n"
  },
  {
    "g": "પ્રવેશ",
    "e": "Admission",
    "p": "n"
  },
  {
    "g": "ઉમેરો",
    "e": "Addition",
    "p": "n"
  },
  {
    "g": "બાદબાકી",
    "e": "Subtraction",
    "p": "n"
  },
  {
    "g": "ગુણાકાર",
    "e": "Multiplication",
    "p": "n"
  },
  {
    "g": "ભાગાકાર",
    "e": "Division",
    "p": "n"
  },
  {
    "g": "ટકો",
    "e": "Percent",
    "p": "n"
  },
  {
    "g": "ભિન્ન",
    "e": "Fraction",
    "p": "n"
  },
  {
    "g": "જામિતિ",
    "e": "Geometry",
    "p": "n"
  },
  {
    "g": "બીજગણિત",
    "e": "Algebra",
    "p": "n"
  },
  {
    "g": "સમાન",
    "e": "Equal",
    "p": "n"
  },
  {
    "g": "વધુ",
    "e": "Greater",
    "p": "n"
  },
  {
    "g": "ઓછું",
    "e": "Lesser",
    "p": "n"
  },
  {
    "g": "ત્રિજ્યા",
    "e": "Radius",
    "p": "n"
  },
  {
    "g": "વ્યાસ",
    "e": "Diameter",
    "p": "n"
  },
  {
    "g": "ક્લિનિક",
    "e": "Clinic",
    "p": "n"
  },
  {
    "g": "ઑપરેશન",
    "e": "Operation",
    "p": "n"
  },
  {
    "g": "શસ્ત્રક્રિયા",
    "e": "Surgery",
    "p": "n"
  },
  {
    "g": "ટીકો",
    "e": "Vaccine",
    "p": "n"
  },
  {
    "g": "થેરાપી",
    "e": "Therapy",
    "p": "n"
  },
  {
    "g": "પરીક્ષણ",
    "e": "Test/Examination",
    "p": "n"
  },
  {
    "g": "એમ્બ્યુલન્સ",
    "e": "Ambulance",
    "p": "n"
  },
  {
    "g": "સંક્રમણ",
    "e": "Infection",
    "p": "n"
  },
  {
    "g": "ચોટ",
    "e": "Injury",
    "p": "n"
  },
  {
    "g": "પ્લાસ્ટર",
    "e": "Plaster",
    "p": "n"
  },
  {
    "g": "બેન્ડેજ",
    "e": "Bandage",
    "p": "n"
  },
  {
    "g": "દબાણ",
    "e": "Pressure",
    "p": "n"
  },
  {
    "g": "દિવાળી",
    "e": "Diwali",
    "p": "n"
  },
  {
    "g": "હોળી",
    "e": "Holi",
    "p": "n"
  },
  {
    "g": "જનમાષ્ટમી",
    "e": "Janmashtami",
    "p": "n"
  },
  {
    "g": "ઉત્તરાયણ",
    "e": "Kite festival",
    "p": "n"
  },
  {
    "g": "નવરાત્રિ",
    "e": "Navratri",
    "p": "n"
  },
  {
    "g": "રક્ષાબંધન",
    "e": "Raksha Bandhan",
    "p": "n"
  },
  {
    "g": "ઇદ",
    "e": "Eid",
    "p": "n"
  },
  {
    "g": "ક્રિસમસ",
    "e": "Christmas",
    "p": "n"
  },
  {
    "g": "પોંગલ",
    "e": "Pongal",
    "p": "n"
  },
  {
    "g": "ઓણમ",
    "e": "Onam",
    "p": "n"
  },
  {
    "g": "તાપમાન",
    "e": "Temperature",
    "p": "n"
  },
  {
    "g": "આર્દ્રતા",
    "e": "Humidity",
    "p": "n"
  },
  {
    "g": "સૂકો",
    "e": "Dry",
    "p": "n"
  },
  {
    "g": "ભીનાશ",
    "e": "Dampness",
    "p": "n"
  },
  {
    "g": "રીતુ",
    "e": "Season",
    "p": "n"
  },
  {
    "g": "વણઝાર",
    "e": "Desert",
    "p": "n"
  },
  {
    "g": "મેદાન",
    "e": "Plain",
    "p": "n"
  },
  {
    "g": "જંગલ",
    "e": "Forest",
    "p": "n"
  },
  {
    "g": "આરાધના",
    "e": "Worship / Devotion",
    "p": "n"
  },
  {
    "g": "તિર્થ",
    "e": "Pilgrimage / Holy place",
    "p": "n"
  },
  {
    "g": "જવાબદારી",
    "e": "Responsibility",
    "p": "n"
  },
  {
    "g": "અનુશાસન",
    "e": "Discipline",
    "p": "n"
  },
  {
    "g": "સમયસર",
    "e": "On time",
    "p": "n"
  },
  {
    "g": "આમંત્રણ",
    "e": "Invitation",
    "p": "n"
  },
  {
    "g": "પૂષ્ટિ",
    "e": "Confirmation",
    "p": "n"
  },
  {
    "g": "રદ",
    "e": "Cancel",
    "p": "n"
  },
  {
    "g": "બુકિંગ",
    "e": "Booking",
    "p": "n"
  },
  {
    "g": "ચુકવણી",
    "e": "Payment",
    "p": "n"
  },
  {
    "g": "રસીડ",
    "e": "Receipt",
    "p": "n"
  },
  {
    "g": "બચત",
    "e": "Savings",
    "p": "n"
  },
  {
    "g": "ખર્ચ",
    "e": "Expense",
    "p": "n"
  },
  {
    "g": "આવક",
    "e": "Income",
    "p": "n"
  },
  {
    "g": "દુકાન",
    "e": "Shop / Store",
    "p": "n"
  },
  {
    "g": "બેંક",
    "e": "Bank",
    "p": "n"
  },
  {
    "g": "બીમા",
    "e": "Insurance",
    "p": "n"
  },
  {
    "g": "ચાવીપતરો",
    "e": "Keychain",
    "p": "n"
  },
  {
    "g": "રીમોટ",
    "e": "Remote",
    "p": "n"
  },
  {
    "g": "ટેલિફોન",
    "e": "Telephone",
    "p": "n"
  },
  {
    "g": "પકાવવું",
    "e": "To bake/cook",
    "p": "v"
  },
  {
    "g": "ઉકળાવવું",
    "e": "To boil",
    "p": "v"
  },
  {
    "g": "તળવું",
    "e": "To fry",
    "p": "v"
  },
  {
    "g": "ઘસવું",
    "e": "To rub",
    "p": "v"
  },
  {
    "g": "ચીંધવું",
    "e": "To point out",
    "p": "v"
  },
  {
    "g": "લટકાવવું",
    "e": "To hang",
    "p": "v"
  },
  {
    "g": "ચોંટાડવું",
    "e": "To stick",
    "p": "v"
  },
  {
    "g": "ધકેલવું",
    "e": "To push",
    "p": "v"
  },
  {
    "g": "ખેંચવું",
    "e": "To pull",
    "p": "v"
  },
  {
    "g": "સ્વીકારવું",
    "e": "To accept",
    "p": "v"
  },
  {
    "g": "નકારી કાઢવું",
    "e": "To reject",
    "p": "v"
  },
  {
    "g": "સમાધાન કરવું",
    "e": "To resolve",
    "p": "v"
  },
  {
    "g": "યોજનાબદ્ધ કરવું",
    "e": "To plan",
    "p": "v"
  },
  {
    "g": "ચર્ચા કરવી",
    "e": "To discuss",
    "p": "v"
  },
  {
    "g": "તપાસ કરવી",
    "e": "To inspect",
    "p": "v"
  },
  {
    "g": "અહેવાલ આપવો",
    "e": "To report",
    "p": "n"
  },
  {
    "g": "સહી કરવી",
    "e": "To sign",
    "p": "v"
  },
  {
    "g": "છાપવું",
    "e": "To print",
    "p": "v"
  },
  {
    "g": "ડાઉનલોડ કરવું",
    "e": "To download",
    "p": "v"
  },
  {
    "g": "અપલોડ કરવું",
    "e": "To upload",
    "p": "v"
  },
  {
    "g": "દોરી",
    "e": "String / Rope",
    "p": "n"
  },
  {
    "g": "મોમબત્તી",
    "e": "Candle",
    "p": "n"
  },
  {
    "g": "દીવાસળી",
    "e": "Match / Matchstick",
    "p": "n"
  },
  {
    "g": "બાલ્ટી",
    "e": "Bucket / Pail",
    "p": "n"
  },
  {
    "g": "ઝાડુ",
    "e": "Broom",
    "p": "n"
  },
  {
    "g": "પોચો",
    "e": "Mop",
    "p": "n"
  },
  {
    "g": "કચરો",
    "e": "Garbage",
    "p": "n"
  },
  {
    "g": "ડસ્ટબિન",
    "e": "Dustbin",
    "p": "n"
  },
  {
    "g": "જિજ્ઞાસા",
    "e": "Curiosity",
    "p": "n"
  },
  {
    "g": "ધીરજ",
    "e": "Patience",
    "p": "n"
  },
  {
    "g": "આસ્થા",
    "e": "Faith",
    "p": "n"
  },
  {
    "g": "આત્મવિશ્વાસ",
    "e": "Confidence",
    "p": "n"
  },
  {
    "g": "આદર",
    "e": "Respect",
    "p": "n"
  },
  {
    "g": "અહંકાર",
    "e": "Pride/Ego",
    "p": "n"
  },
  {
    "g": "લાજ",
    "e": "Shyness",
    "p": "n"
  },
  {
    "g": "ઇર્ષ્યા",
    "e": "Jealousy",
    "p": "n"
  },
  {
    "g": "દક્ષિણ",
    "e": "South",
    "p": "n"
  },
  {
    "g": "પૂર્વ",
    "e": "East",
    "p": "n"
  },
  {
    "g": "પશ્ચિમ",
    "e": "West",
    "p": "n"
  },
  {
    "g": "સવાર",
    "e": "Morning",
    "p": "n"
  },
  {
    "g": "બપોર",
    "e": "Afternoon",
    "p": "n"
  },
  {
    "g": "સાંજ",
    "e": "Evening",
    "p": "n"
  },
  {
    "g": "રાત",
    "e": "Night",
    "p": "n"
  }
];

export default DATA;