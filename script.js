// --- DATABASE ---
const syllabusData = {
    1: {
        Maths: [
            { q: "What is 2 + 3?", opts: ["4", "5", "6", "7"], ans: "5", exp: "2 plus 3 equals 5." },
            { q: "Which shape has 3 sides?", opts: ["Square", "Circle", "Triangle", "Rectangle"], ans: "Triangle", exp: "A triangle has exactly 3 sides." },
            { q: "What comes after 9?", opts: ["8", "10", "11", "7"], ans: "10", exp: "Counting up: 8, 9, 10!" },
            { q: "If you have 5 candies and eat 2, how many are left?", opts: ["2", "3", "4", "5"], ans: "3", exp: "5 minus 2 equals 3." },
            { q: "Which number is the biggest?", opts: ["12", "5", "8", "3"], ans: "12", exp: "12 is the largest number in this group." },
            { q: "What is 10 - 4?", opts: ["5", "6", "7", "4"], ans: "6", exp: "If you take 4 away from 10, you have 6 left." },
            { q: "Which shape is perfectly round?", opts: ["Square", "Triangle", "Circle", "Rectangle"], ans: "Circle", exp: "A circle is perfectly round like a coin." },
            { q: "How many fingers do you have on two hands?", opts: ["5", "8", "10", "12"], ans: "10", exp: "You have 5 fingers on each hand, making 10 total." },
            { q: "What is 4 + 4?", opts: ["6", "7", "8", "9"], ans: "8", exp: "4 plus 4 makes 8." },
            { q: "What comes before 15?", opts: ["13", "14", "16", "17"], ans: "14", exp: "14 comes right before 15 when counting." },
            { q: "Which is the smallest number?", opts: ["9", "4", "7", "6"], ans: "4", exp: "4 is the smallest amount in this list." },
            { q: "How many sides does a square have?", opts: ["2", "3", "4", "5"], ans: "4", exp: "A square has 4 equal sides." },
            { q: "If you add 0 to 7, what do you get?", opts: ["0", "7", "8", "70"], ans: "7", exp: "Adding zero changes nothing, so it stays 7." },
            { q: "What is the next number: 2, 4, 6, ___?", opts: ["7", "8", "9", "10"], ans: "8", exp: "Counting by twos: 2, 4, 6, 8." },
            { q: "How many pennies make a dime?", opts: ["5", "10", "25", "100"], ans: "10", exp: "10 pennies equal 1 dime." },
            { q: "What is 9 - 9?", opts: ["0", "1", "9", "18"], ans: "0", exp: "If you take away everything you have, you are left with 0." },
            { q: "Which number is ten?", opts: ["1", "10", "100", "01"], ans: "10", exp: "The number ten is written as 10." },
            { q: "If you have 3 apples and get 3 more, how many do you have?", opts: ["5", "6", "7", "9"], ans: "6", exp: "3 + 3 = 6." },
            { q: "What comes between 19 and 21?", opts: ["18", "20", "22", "23"], ans: "20", exp: "20 is exactly in the middle of 19 and 21." },
            { q: "Which is a heavy object?", opts: ["Feather", "Pencil", "Car", "Paper"], ans: "Car", exp: "A car is much heavier than the others." }
        ],
        EVS: [
            { q: "Which animal says 'Moo'?", opts: ["Dog", "Cat", "Cow", "Sheep"], ans: "Cow", exp: "Cows make a 'Moo' sound." },
            { q: "What do we use to see?", opts: ["Ears", "Nose", "Eyes", "Hands"], ans: "Eyes", exp: "We use our eyes to see." },
            { q: "Which of these is a fruit?", opts: ["Potato", "Apple", "Carrot", "Onion"], ans: "Apple", exp: "Apple is a sweet fruit." },
            { q: "Where do fish live?", opts: ["Tree", "Sky", "Water", "House"], ans: "Water", exp: "Fish live and breathe under water." },
            { q: "What color is the sky on a clear day?", opts: ["Green", "Blue", "Red", "Yellow"], ans: "Blue", exp: "The sky looks blue when it's clear!" },
            { q: "Which animal has a long trunk?", opts: ["Lion", "Elephant", "Monkey", "Giraffe"], ans: "Elephant", exp: "Elephants use their long trunks to drink and grab food." },
            { q: "How many days are in a week?", opts: ["5", "6", "7", "8"], ans: "7", exp: "There are 7 days: Monday to Sunday." },
            { q: "What gives us milk?", opts: ["Hen", "Cow", "Dog", "Horse"], ans: "Cow", exp: "Cows and buffaloes give us milk." },
            { q: "Which sense organ helps us smell?", opts: ["Ears", "Tongue", "Skin", "Nose"], ans: "Nose", exp: "We smell flowers and food with our nose." },
            { q: "What do plants need to grow?", opts: ["Milk", "Soda", "Water and Sunlight", "Juice"], ans: "Water and Sunlight", exp: "Plants need water, soil, and sunlight to grow." },
            { q: "Which of these birds cannot fly?", opts: ["Eagle", "Sparrow", "Penguin", "Parrot"], ans: "Penguin", exp: "Penguins are birds but they swim instead of flying." },
            { q: "What covers a bird's body?", opts: ["Hair", "Scales", "Feathers", "Fur"], ans: "Feathers", exp: "Birds are covered in feathers to stay warm and fly." },
            { q: "When do we see the stars?", opts: ["Morning", "Afternoon", "Night", "Evening"], ans: "Night", exp: "Stars are visible when the sky is dark at night." },
            { q: "Which is a wild animal?", opts: ["Cow", "Lion", "Sheep", "Dog"], ans: "Lion", exp: "Lions live in the jungle, so they are wild animals." },
            { q: "What do we wear in winter?", opts: ["Cotton clothes", "Raincoat", "Swimsuit", "Sweater"], ans: "Sweater", exp: "We wear woolen sweaters to stay warm in winter." },
            { q: "Which transport flies in the air?", opts: ["Bus", "Train", "Aeroplane", "Boat"], ans: "Aeroplane", exp: "Aeroplanes fly high up in the sky." },
            { q: "What helps a boat move?", opts: ["Wheels", "Water", "Tracks", "Road"], ans: "Water", exp: "Boats travel on rivers and oceans." },
            { q: "Which vegetable is orange and good for your eyes?", opts: ["Tomato", "Carrot", "Potato", "Spinach"], ans: "Carrot", exp: "Carrots are orange and healthy for eyesight." },
            { q: "Where do we go when we are sick?", opts: ["School", "Park", "Hospital", "Market"], ans: "Hospital", exp: "Doctors at the hospital help us get better." },
            { q: "Who teaches us in school?", opts: ["Doctor", "Teacher", "Farmer", "Tailor"], ans: "Teacher", exp: "Teachers help us learn in school." }
        ],
        Hindi: [
            { q: "इनमें से कौन सा स्वर (Vowel) है?", opts: ["क", "ख", "अ", "ग"], ans: "अ", exp: "हिन्दी वर्णमाला में 'अ' एक स्वर है।" },
            { q: "'क' अक्षर से कौन सा शब्द शुरू होता है?", opts: ["कमल", "छाता", "गमला", "घर"], ans: "कमल", exp: "क से कमल (Lotus) होता है।" },
            { q: "फलों का राजा किसे कहते हैं?", opts: ["केला", "सेब", "आम", "अंगूर"], ans: "आम", exp: "आम (Mango) को फलों का राजा कहा जाता है।" },
            { q: "'मछली' कहाँ रहती है?", opts: ["हवा में", "जल में", "पेड़ पर", "ज़मीन पर"], ans: "जल में", exp: "मछली जल की रानी है, वह पानी में रहती है।" },
            { q: "आसमान का रंग कैसा होता है?", opts: ["लाल", "हरा", "नीला", "पीला"], ans: "नीला", exp: "आसमान का रंग नीला (Blue) होता है।" },
            { q: "'बिल्ली' कैसे बोलती है?", opts: ["भौं-भौं", "म्याऊँ-म्याऊँ", "चीं-चीं", "टर्र-टर्र"], ans: "म्याऊँ-म्याऊँ", exp: "बिल्ली म्याऊँ-म्याऊँ करती है।" },
            { q: "इनमें से कौन सा एक जानवर है?", opts: ["कुत्ता", "गुलाब", "सेब", "किताब"], ans: "कुत्ता", exp: "कुत्ता (Dog) एक जानवर है।" },
            { q: "हम आँखों से क्या करते हैं?", opts: ["सुनते हैं", "सूँघते हैं", "देखते हैं", "खाते हैं"], ans: "देखते हैं", exp: "हम अपनी आँखों से दुनिया देखते हैं।" },
            { q: "'आ' की मात्रा वाला शब्द कौन सा है?", opts: ["कमल", "आम", "दिन", "पुल"], ans: "आम", exp: "'आम' में 'आ' की मात्रा लगी है।" },
            { q: "रात में आसमान में क्या चमकता है?", opts: ["सूरज", "चाँद और तारे", "बादल", "पहाड़"], ans: "चाँद और तारे", exp: "रात में चाँद (Moon) और तारे (Stars) चमकते हैं।" },
            { q: "इनमें से कौन सा रंग 'लाल' (Red) है?", opts: ["पत्ता", "आसमान", "टमाटर", "दूध"], ans: "टमाटर", exp: "टमाटर (Tomato) का रंग लाल होता है।" },
            { q: "'त' से क्या होता है?", opts: ["कबूतर", "तोता", "मोर", "कौआ"], ans: "तोता", exp: "'त' से तोता (Parrot) होता है।" },
            { q: "गाय हमें क्या देती है?", opts: ["पानी", "दूध", "शर्बत", "चाय"], ans: "दूध", exp: "गाय हमें पीने के लिए दूध (Milk) देती है।" },
            { q: "'च' अक्षर के बाद क्या आता है?", opts: ["क", "छ", "ज", "ट"], ans: "छ", exp: "च के बाद 'छ' (छतरी) आता है।" },
            { q: "बारिश में हम किसका इस्तेमाल करते हैं?", opts: ["किताब", "छाता", "जूते", "कंघी"], ans: "छाता", exp: "बारिश से बचने के लिए हम छाता (Umbrella) इस्तेमाल करते हैं।" },
            { q: "हम खाना किससे खाते हैं?", opts: ["कान से", "मुँह से", "आँख से", "नाक से"], ans: "मुँह से", exp: "हम अपने मुँह (Mouth) से खाना खाते हैं।" },
            { q: "राष्ट्रीय पक्षी कौन है?", opts: ["कौआ", "मोर", "कबूतर", "चील"], ans: "मोर", exp: "मोर (Peacock) हमारा राष्ट्रीय पक्षी है।" },
            { q: "दो और दो कितने होते हैं?", opts: ["तीन", "चार", "पाँच", "छह"], ans: "चार", exp: "दो (2) और दो (2) मिलकर चार (4) होते हैं।" },
            { q: "सुबह कौन निकलता है जो रौशनी देता है?", opts: ["चाँद", "सूरज", "तारा", "दीपक"], ans: "सूरज", exp: "सुबह सूरज (Sun) निकलता है।" },
            { q: "इनमें से कौन सी सब्ज़ी है?", opts: ["केला", "आलू", "आम", "पपीता"], ans: "आलू", exp: "आलू (Potato) एक सब्ज़ी है।" }
        ],
        Science: [
            { q: "What gives us heat and light during the day?", opts: ["Moon", "Stars", "Sun", "Cloud"], ans: "Sun", exp: "The Sun is our main source of light and heat." },
            { q: "Which part of the plant is underground?", opts: ["Leaf", "Flower", "Root", "Stem"], ans: "Root", exp: "Roots grow underground to absorb water." },
            { q: "What do we need to breathe to stay alive?", opts: ["Water", "Air", "Food", "Sand"], ans: "Air", exp: "All living things need air to breathe." },
            { q: "Which of these is a living thing?", opts: ["Rock", "Toy", "Dog", "Car"], ans: "Dog", exp: "A dog breathes, grows, and eats, so it is a living thing." },
            { q: "What turns into ice when frozen?", opts: ["Milk", "Juice", "Water", "Oil"], ans: "Water", exp: "Water freezes into solid ice when it gets very cold." },
            { q: "Which animal lives on land and water?", opts: ["Fish", "Dog", "Frog", "Cat"], ans: "Frog", exp: "Frogs are amphibians; they live in both places." },
            { q: "What do bees make for us?", opts: ["Milk", "Honey", "Silk", "Eggs"], ans: "Honey", exp: "Bees collect nectar to make sweet honey." },
            { q: "Which part of the body pumps blood?", opts: ["Brain", "Lungs", "Heart", "Stomach"], ans: "Heart", exp: "Your heart pumps blood all around your body." },
            { q: "Which of these objects will float in water?", opts: ["Stone", "Coin", "Empty plastic bottle", "Iron nail"], ans: "Empty plastic bottle", exp: "Plastic is light and holds air, so it floats." },
            { q: "What is the strong, hard part of our body inside the skin?", opts: ["Bones", "Blood", "Muscles", "Hair"], ans: "Bones", exp: "Bones make up our skeleton to keep us standing up." },
            { q: "Where does rain come from?", opts: ["Trees", "Clouds", "Sun", "Moon"], ans: "Clouds", exp: "Raindrops fall from dark rain clouds in the sky." },
            { q: "Which insect has beautiful, colorful wings?", opts: ["Ant", "Housefly", "Mosquito", "Butterfly"], ans: "Butterfly", exp: "Butterflies have bright, beautiful wings." },
            { q: "What does a caterpillar turn into?", opts: ["Worm", "Butterfly", "Spider", "Beetle"], ans: "Butterfly", exp: "A caterpillar builds a chrysalis and emerges as a butterfly." },
            { q: "Which of these animals is the tallest?", opts: ["Lion", "Zebra", "Giraffe", "Elephant"], ans: "Giraffe", exp: "Giraffes have incredibly long necks, making them the tallest." },
            { q: "How many legs does a spider have?", opts: ["4", "6", "8", "10"], ans: "8", exp: "Spiders are arachnids and have 8 legs." },
            { q: "What does ice turn into when it melts?", opts: ["Air", "Water", "Steam", "Snow"], ans: "Water", exp: "Solid ice melts back into liquid water." },
            { q: "Which bird sleeps during the day and wakes up at night?", opts: ["Crow", "Parrot", "Owl", "Peacock"], ans: "Owl", exp: "Owls are nocturnal, meaning they are active at night." },
            { q: "What does a seed need to grow into a plant?", opts: ["Dirt only", "Water and sunlight", "Sugar", "Milk"], ans: "Water and sunlight", exp: "Seeds need water, sunlight, and soil to sprout." },
            { q: "What color are healthy leaves in the summer?", opts: ["Blue", "Red", "Green", "Yellow"], ans: "Green", exp: "Leaves are green because of chlorophyll." },
            { q: "Which is the fastest land animal?", opts: ["Horse", "Cheetah", "Lion", "Tiger"], ans: "Cheetah", exp: "The cheetah can run faster than any other land animal." }
        ]
    },
    2: {
        Maths: [
            { q: "What is 15 + 10?", opts: ["20", "25", "30", "35"], ans: "25", exp: "15 plus 10 equals 25." },
            { q: "Which of these is an even number?", opts: ["3", "7", "8", "11"], ans: "8", exp: "Even numbers end in 0, 2, 4, 6, or 8." },
            { q: "What is 5 x 2?", opts: ["7", "10", "12", "15"], ans: "10", exp: "5 times 2 is 10." },
            { q: "How many months are in a year?", opts: ["10", "11", "12", "14"], ans: "12", exp: "There are 12 months in one year." },
            { q: "What is 20 - 8?", opts: ["10", "11", "12", "13"], ans: "12", exp: "If you subtract 8 from 20, you get 12." },
            { q: "What comes next: 5, 10, 15, ___?", opts: ["16", "20", "25", "30"], ans: "20", exp: "The pattern goes up by 5 each time." },
            { q: "What is half of 10?", opts: ["2", "4", "5", "6"], ans: "5", exp: "If you divide 10 into two equal parts, each part is 5." },
            { q: "Which number is greater: 45 or 54?", opts: ["45", "54", "They are equal", "None"], ans: "54", exp: "54 has 5 tens, while 45 only has 4 tens." },
            { q: "What is 3 x 3?", opts: ["6", "9", "12", "15"], ans: "9", exp: "3 times 3 equals 9." },
            { q: "How many minutes are in one hour?", opts: ["30", "50", "60", "100"], ans: "60", exp: "One full hour is exactly 60 minutes." },
            { q: "What is 100 + 50?", opts: ["105", "150", "500", "1050"], ans: "150", exp: "One hundred plus fifty is one hundred fifty." },
            { q: "Which shape has 0 corners?", opts: ["Triangle", "Square", "Rectangle", "Circle"], ans: "Circle", exp: "A circle is perfectly round with no corners." },
            { q: "If a toy costs $5 and you give a $10 bill, how much change do you get?", opts: ["$2", "$3", "$4", "$5"], ans: "$5", exp: "10 minus 5 is 5." },
            { q: "How many days are in two weeks?", opts: ["7", "10", "14", "20"], ans: "14", exp: "One week has 7 days, so two weeks have 14 days." },
            { q: "What is 8 + 8?", opts: ["14", "15", "16", "18"], ans: "16", exp: "8 plus 8 equals 16." },
            { q: "Which is the smallest 2-digit number?", opts: ["10", "11", "99", "1"], ans: "10", exp: "10 is the first and smallest number with two digits." },
            { q: "What is 30 - 10?", opts: ["10", "20", "30", "40"], ans: "20", exp: "30 take away 10 leaves 20." },
            { q: "How many sides does a rectangle have?", opts: ["3", "4", "5", "6"], ans: "4", exp: "A rectangle has 4 sides (2 long, 2 short)." },
            { q: "What is 4 x 5?", opts: ["9", "16", "20", "25"], ans: "20", exp: "4 groups of 5 make 20." },
            { q: "If you have 12 eggs and use 3 to bake a cake, how many are left?", opts: ["8", "9", "10", "11"], ans: "9", exp: "12 minus 3 equals 9." }
        ],
        EVS: [
            { q: "Who mends our broken shoes?", opts: ["Tailor", "Cobbler", "Doctor", "Postman"], ans: "Cobbler", exp: "A cobbler repairs shoes and sandals." },
            { q: "What do we call a house made of solid ice?", opts: ["Tent", "Hut", "Igloo", "Bungalow"], ans: "Igloo", exp: "An igloo is a shelter made from blocks of ice." },
            { q: "Which festival is known as the 'Festival of Lights'?", opts: ["Holi", "Diwali", "Eid", "Christmas"], ans: "Diwali", exp: "Diwali is celebrated with lamps, lights, and joy." },
            { q: "Who delivers letters and parcels to our homes?", opts: ["Police", "Doctor", "Postman", "Farmer"], ans: "Postman", exp: "A postman brings our mail from the post office." },
            { q: "Which animal gives us wool for winter clothes?", opts: ["Cow", "Dog", "Sheep", "Horse"], ans: "Sheep", exp: "We shear sheep to get warm wool." },
            { q: "How many colors are there in a rainbow?", opts: ["5", "6", "7", "8"], ans: "7", exp: "A rainbow has 7 colors (VIBGYOR)." },
            { q: "Where does a train travel?", opts: ["On roads", "In the sky", "On water", "On iron tracks"], ans: "On iron tracks", exp: "Trains run on railway tracks." },
            { q: "Which plant is usually found in a hot desert?", opts: ["Rose", "Lotus", "Cactus", "Sunflower"], ans: "Cactus", exp: "Cactus plants survive in deserts with very little water." },
            { q: "Which of these is considered 'Junk Food'?", opts: ["Apple", "Milk", "Burger", "Carrot"], ans: "Burger", exp: "Burgers are junk food and should be eaten less often." },
            { q: "Who grows crops in the fields for us?", opts: ["Teacher", "Farmer", "Tailor", "Driver"], ans: "Farmer", exp: "Farmers work hard in fields to grow our food." },
            { q: "What do we use to cut paper?", opts: ["Spoon", "Needle", "Scissors", "Hammer"], ans: "Scissors", exp: "Scissors are safe tools used for cutting paper." },
            { q: "Which is a domestic animal that guards our house?", opts: ["Cat", "Dog", "Lion", "Rabbit"], ans: "Dog", exp: "Dogs are kept as pets and help guard our homes." },
            { q: "In which season do we use heaters and wear jackets?", opts: ["Summer", "Winter", "Monsoon", "Spring"], ans: "Winter", exp: "Winter is cold, so we need warm clothes and heaters." },
            { q: "Which transport has only two wheels?", opts: ["Car", "Bus", "Bicycle", "Auto-rickshaw"], ans: "Bicycle", exp: "A bicycle is a two-wheeler." },
            { q: "Where do we go to read and borrow books?", opts: ["Hospital", "Bank", "Library", "Market"], ans: "Library", exp: "A library has many books for us to read." },
            { q: "What is the green part of a plant called?", opts: ["Root", "Stem", "Leaf", "Flower"], ans: "Leaf", exp: "Leaves are green because they make food for the plant." },
            { q: "Which animal has a long neck to eat leaves from tall trees?", opts: ["Zebra", "Giraffe", "Elephant", "Tiger"], ans: "Giraffe", exp: "Giraffes have the longest necks of any land animal." },
            { q: "Who stitches our clothes?", opts: ["Cobbler", "Barber", "Tailor", "Plumber"], ans: "Tailor", exp: "A tailor sews and fixes our clothes." },
            { q: "Which of these gives us energy to play and study?", opts: ["Sleeping all day", "Healthy food", "Watching TV", "Crying"], ans: "Healthy food", exp: "Healthy food gives our body fuel and energy." },
            { q: "What do we call the meal we eat in the morning?", opts: ["Dinner", "Lunch", "Snack", "Breakfast"], ans: "Breakfast", exp: "We break our night's fast in the morning with breakfast." }
        ],
        Hindi: [
            { q: "'दिन' का विलोम (Opposite) शब्द क्या है?", opts: ["सुबह", "शाम", "रात", "दोपहर"], ans: "रात", exp: "'दिन' का उल्टा 'रात' होता है।" },
            { q: "'लड़का' का बहुवचन (Plural) क्या होगा?", opts: ["लड़की", "लड़कों", "लड़के", "लड़कियाँ"], ans: "लड़के", exp: "एक लड़का, बहुत सारे 'लड़के'।" },
            { q: "जंगल का राजा किस जानवर को कहा जाता है?", opts: ["हाथी", "शेर", "भालू", "बंदर"], ans: "शेर", exp: "शेर (Lion) को जंगल का राजा कहते हैं।" },
            { q: "सप्ताह (Week) का पहला दिन कौन सा होता है?", opts: ["रविवार", "मंगलवार", "सोमवार", "शुक्रवार"], ans: "सोमवार", exp: "सप्ताह की शुरुआत सोमवार (Monday) से होती है।" },
            { q: "'पानी' का दूसरा नाम क्या है?", opts: ["आग", "हवा", "जल", "आसमान"], ans: "जल", exp: "पानी को 'जल' भी कहते हैं (जल ही जीवन है)।" },
            { q: "हम किस त्योहार में एक-दूसरे पर रंग डालते हैं?", opts: ["दिवाली", "ईद", "होली", "रक्षाबंधन"], ans: "होली", exp: "होली रंगों का त्योहार है।" },
            { q: "इनमें से कौन सा एक 'फल' (Fruit) है?", opts: ["गाजर", "अमरूद", "मूली", "पालक"], ans: "अमरूद", exp: "अमरूद (Guava) एक मीठा फल है, बाकी सब्ज़ियां हैं।" },
            { q: "इनमें से सही शब्द कौन सा है?", opts: ["सूरज", "सुरज", "सूूरज", "सुराज"], ans: "सूरज", exp: "सही वर्तनी (Spelling) 'सूरज' है।" },
            { q: "'सुंदर' का अर्थ (Meaning) क्या होता है?", opts: ["ख़राब", "खूबसूरत", "बड़ा", "काला"], ans: "खूबसूरत", exp: "सुंदर का मतलब खूबसूरत (Beautiful) होता है।" },
            { q: "'ई' (बड़ी ई) की मात्रा वाला शब्द कौन सा है?", opts: ["दिन", "किताब", "दीवार", "पुल"], ans: "दीवार", exp: "'दीवार' में 'द' पर बड़ी ई (ी) की मात्रा लगी है।" },
            { q: "जो कपड़े धोता है, उसे क्या कहते हैं?", opts: ["दर्जी", "धोबी", "माली", "किसान"], ans: "धोबी", exp: "कपड़े धोने वाले को धोबी कहते हैं।" },
            { q: "'माता' का पुल्लिंग (Masculine) क्या होगा?", opts: ["भाई", "पिता", "दादा", "मामा"], ans: "पिता", exp: "माता (Mother) का पुल्लिंग पिता (Father) होता है।" },
            { q: "इनमें से कौन सा पक्षी रात में जागता है?", opts: ["कबूतर", "तोता", "उल्लू", "मोर"], ans: "उल्लू", exp: "उल्लू (Owl) रात में जागता है।" },
            { q: "हम किससे सुनते हैं?", opts: ["आँख से", "कान से", "नाक से", "मुँह से"], ans: "कान से", exp: "हम अपने कानों से आवाज़ें सुनते हैं।" },
            { q: "'काला' क्या है?", opts: ["एक जानवर", "एक रंग", "एक फल", "एक शहर"], ans: "एक रंग", exp: "काला (Black) एक रंग (Color) है।" },
            { q: "पेड़ हमें क्या देते हैं?", opts: ["प्लास्टिक", "कागज़", "छाया और फल", "काँच"], ans: "छाया और फल", exp: "पेड़ हमें ताज़ी हवा, छाया और मीठे फल देते हैं।" },
            { q: "'किताब' को हम क्या करते हैं?", opts: ["पीते हैं", "खाते हैं", "पढ़ते हैं", "खेलते हैं"], ans: "पढ़ते हैं", exp: "किताब (Book) पढ़ी जाती है।" },
            { q: "इनमें से कौन सा वाहन पानी में चलता है?", opts: ["बस", "रेलगाड़ी", "हवाई जहाज़", "नाव"], ans: "नाव", exp: "नाव (Boat) पानी में चलती है।" },
            { q: "गाय का बच्चा क्या कहलाता है?", opts: ["बछड़ा", "पिल्ला", "चूज़ा", "शावक"], ans: "बछड़ा", exp: "गाय के बच्चे को बछड़ा (Calf) कहते हैं।" },
            { q: "'गरम' का विलोम शब्द क्या है?", opts: ["ठंडा", "नरम", "कठोर", "मीठा"], ans: "ठंडा", exp: "'गरम' (Hot) का उल्टा 'ठंडा' (Cold) होता है।" }
        ],
        Science: [
            { q: "What part of the plant makes food?", opts: ["Root", "Stem", "Leaf", "Flower"], ans: "Leaf", exp: "Leaves use sunlight to make food for the whole plant." },
            { q: "A push or a pull is called what?", opts: ["Gravity", "Force", "Speed", "Weight"], ans: "Force", exp: "Any push or pull you apply to an object is a force." },
            { q: "Which of these animals lays eggs?", opts: ["Dog", "Cat", "Hen", "Cow"], ans: "Hen", exp: "Birds, like hens, lay eggs." },
            { q: "What is the baby of a frog called?", opts: ["Puppy", "Kitten", "Tadpole", "Cub"], ans: "Tadpole", exp: "A frog hatches from an egg as a swimming tadpole." },
            { q: "In which direction does the Sun rise?", opts: ["North", "South", "East", "West"], ans: "East", exp: "The Sun always rises in the East and sets in the West." },
            { q: "Which organ inside your body pumps blood?", opts: ["Lungs", "Brain", "Stomach", "Heart"], ans: "Heart", exp: "Your heart acts like a pump to send blood everywhere." },
            { q: "What do we call water when it freezes solid?", opts: ["Steam", "Cloud", "Ice", "Rain"], ans: "Ice", exp: "Frozen water is called ice." },
            { q: "What do we use to chew our food?", opts: ["Tongue", "Lips", "Teeth", "Gums"], ans: "Teeth", exp: "Teeth help crush and grind food so we can swallow it." },
            { q: "What helps a fish breathe underwater?", opts: ["Lungs", "Gills", "Nose", "Skin"], ans: "Gills", exp: "Fish use gills to take oxygen directly out of the water." },
            { q: "Which planet do we live on?", opts: ["Mars", "Venus", "Earth", "Jupiter"], ans: "Earth", exp: "We live on the third planet from the sun, Earth." },
            { q: "What do we call moving air?", opts: ["Water", "Wind", "Cloud", "Sunlight"], ans: "Wind", exp: "When air moves around us, it is called wind." },
            { q: "What covers the outside of a tree trunk?", opts: ["Leaves", "Bark", "Roots", "Fruit"], ans: "Bark", exp: "Bark is the rough skin that protects the tree trunk." },
            { q: "Which of these dissolves in water?", opts: ["Sand", "Sugar", "Wood", "Plastic"], ans: "Sugar", exp: "Sugar melts and mixes completely into water." },
            { q: "What is the boiling point of water?", opts: ["Very cold", "Very hot", "Warm", "Room temperature"], ans: "Very hot", exp: "Water boils and turns into steam when it gets very hot." },
            { q: "What do our bones form inside our body?", opts: ["Muscles", "Skin", "Skeleton", "Blood"], ans: "Skeleton", exp: "All our bones put together make up our skeleton." },
            { q: "What kind of animal is a snake?", opts: ["Mammal", "Bird", "Reptile", "Fish"], ans: "Reptile", exp: "Snakes are cold-blooded reptiles with scales." },
            { q: "What tool helps us see things that are very far away?", opts: ["Microscope", "Telescope", "Thermometer", "Stethoscope"], ans: "Telescope", exp: "A telescope makes stars and distant objects look closer." },
            { q: "Where does cheese come from?", opts: ["Trees", "Milk", "Meat", "Water"], ans: "Milk", exp: "Cheese is a dairy product made from milk." },
            { q: "Which is the largest animal on Earth?", opts: ["Elephant", "Giraffe", "Blue Whale", "Shark"], ans: "Blue Whale", exp: "The Blue Whale lives in the ocean and is the largest animal ever." },
            { q: "What do you call a scientist who travels to space?", opts: ["Doctor", "Astronaut", "Teacher", "Pilot"], ans: "Astronaut", exp: "Astronauts wear spacesuits and fly in rockets to space." }
        ]
    },
    3: {
        Maths: [
            { q: "What is 100 + 250?", opts: ["300", "350", "400", "450"], ans: "350", exp: "100 plus 250 equals 350." },
            { q: "What is 500 - 150?", opts: ["300", "350", "400", "450"], ans: "350", exp: "500 minus 150 leaves 350." },
            { q: "What is 8 x 4?", opts: ["24", "28", "32", "36"], ans: "32", exp: "8 multiplied by 4 is 32." },
            { q: "What is 20 ÷ 4?", opts: ["4", "5", "6", "10"], ans: "5", exp: "If you divide 20 into 4 equal groups, each group has 5." },
            { q: "How many minutes are in 2 hours?", opts: ["60", "90", "100", "120"], ans: "120", exp: "One hour is 60 minutes, so two hours is 60 + 60 = 120 minutes." },
            { q: "What 3D shape is a basketball?", opts: ["Cube", "Cone", "Cylinder", "Sphere"], ans: "Sphere", exp: "A perfectly round 3D ball shape is called a sphere." },
            { q: "What is half of 50?", opts: ["20", "25", "30", "40"], ans: "25", exp: "50 divided by 2 is 25." },
            { q: "What comes next in the pattern: 10, 20, 30, ___?", opts: ["35", "40", "50", "100"], ans: "40", exp: "The numbers are increasing by 10 each time." },
            { q: "Which is the smallest 3-digit number?", opts: ["100", "101", "111", "999"], ans: "100", exp: "100 is the first number that has three digits." },
            { q: "What is 3 x 9?", opts: ["18", "21", "24", "27"], ans: "27", exp: "3 groups of 9 make 27." },
            { q: "How many centimeters make 1 meter?", opts: ["10", "50", "100", "1000"], ans: "100", exp: "There are exactly 100 centimeters in 1 meter." },
            { q: "What is 12 + 12 + 12?", opts: ["24", "30", "36", "48"], ans: "36", exp: "12 added three times (or 12 x 3) is 36." },
            { q: "How many sides does a pentagon have?", opts: ["4", "5", "6", "8"], ans: "5", exp: "A pentagon is a polygon with exactly 5 sides." },
            { q: "If you have Rs. 50 and get Rs. 20 more, how much do you have?", opts: ["Rs. 30", "Rs. 60", "Rs. 70", "Rs. 100"], ans: "Rs. 70", exp: "50 + 20 = 70." },
            { q: "What is the place value of 5 in the number 352?", opts: ["5", "50", "500", "5000"], ans: "50", exp: "The 5 is in the tens place, so it represents 50." },
            { q: "What is 7 x 7?", opts: ["42", "49", "56", "64"], ans: "49", exp: "7 times 7 equals 49." },
            { q: "How many hours are in one whole day?", opts: ["12", "20", "24", "48"], ans: "24", exp: "One full day and night cycle is 24 hours long." },
            { q: "What is 45 - 20?", opts: ["15", "20", "25", "30"], ans: "25", exp: "Taking 20 away from 45 leaves 25." },
            { q: "What is 10 x 10?", opts: ["20", "50", "100", "1000"], ans: "100", exp: "Ten groups of ten makes one hundred." },
            { q: "Which of these is a fraction representing one-half?", opts: ["1/2", "1/3", "1/4", "2/1"], ans: "1/2", exp: "1/2 means one part out of two equal parts." }
        ],
        EVS: [
            { q: "Which is the national animal of India?", opts: ["Lion", "Elephant", "Tiger", "Leopard"], ans: "Tiger", exp: "The Royal Bengal Tiger is India's national animal." },
            { q: "Which planet is closest to the Sun?", opts: ["Venus", "Earth", "Mars", "Mercury"], ans: "Mercury", exp: "Mercury is the first and closest planet to the Sun." },
            { q: "Which vehicle is pulled by animals?", opts: ["Car", "Bus", "Bullock Cart", "Train"], ans: "Bullock Cart", exp: "A bullock cart is pulled by bulls or oxen." },
            { q: "Who makes wooden furniture like chairs and tables?", opts: ["Plumber", "Blacksmith", "Carpenter", "Tailor"], ans: "Carpenter", exp: "A carpenter works with wood to build furniture." },
            { q: "What does the red traffic light tell us to do?", opts: ["Go", "Wait", "Stop", "Turn"], ans: "Stop", exp: "Red means stop, Yellow means wait, Green means go." },
            { q: "What is the capital city of India?", opts: ["Mumbai", "Kolkata", "New Delhi", "Chennai"], ans: "New Delhi", exp: "New Delhi is the capital of India." },
            { q: "Which animal is called the 'Ship of the Desert'?", opts: ["Horse", "Elephant", "Camel", "Donkey"], ans: "Camel", exp: "Camels can survive in deserts without water for days." },
            { q: "Which gas do we breathe in to live?", opts: ["Carbon dioxide", "Oxygen", "Nitrogen", "Smoke"], ans: "Oxygen", exp: "Humans and animals need oxygen to breathe and survive." },
            { q: "What is the Earth?", opts: ["A Star", "A Planet", "A Moon", "A Sun"], ans: "A Planet", exp: "Earth is the third planet in our solar system." },
            { q: "Which Indian festival is known as the 'Festival of Colors'?", opts: ["Diwali", "Eid", "Holi", "Onam"], ans: "Holi", exp: "People play with colored powder and water during Holi." },
            { q: "Where do we get wool from?", opts: ["Cotton plants", "Silkworms", "Sheep", "Cows"], ans: "Sheep", exp: "Sheep are sheared to get warm wool for winter clothes." },
            { q: "In which direction does the Sun set?", opts: ["North", "South", "East", "West"], ans: "West", exp: "The Sun rises in the East and sets in the West." },
            { q: "Which of these is a means of water transport?", opts: ["Helicopter", "Ship", "Train", "Bus"], ans: "Ship", exp: "Ships travel across oceans and seas." },
            { q: "Where is our brain located?", opts: ["In our chest", "In our stomach", "Inside our head", "In our arms"], ans: "Inside our head", exp: "The brain is protected by the skull inside our head." },
            { q: "What do we use to chew our food properly?", opts: ["Tongue", "Lips", "Teeth", "Throat"], ans: "Teeth", exp: "Our teeth cut and grind food so it is easy to swallow." },
            { q: "Which is the fastest means of transport?", opts: ["Train", "Car", "Ship", "Aeroplane"], ans: "Aeroplane", exp: "Aeroplanes travel through the air very quickly." },
            { q: "What do we call a temporary house made of cloth or canvas?", opts: ["Igloo", "Bungalow", "Tent", "Hut"], ans: "Tent", exp: "Tents are used for camping and can be folded up." },
            { q: "When do we celebrate Independence Day in India?", opts: ["26th January", "15th August", "2nd October", "5th September"], ans: "15th August", exp: "India gained independence on August 15, 1947." },
            { q: "Which instrument is used to find directions?", opts: ["Thermometer", "Clock", "Compass", "Scale"], ans: "Compass", exp: "A compass always points to the North direction." },
            { q: "What is a baby dog called?", opts: ["Kitten", "Calf", "Puppy", "Cub"], ans: "Puppy", exp: "A young dog is called a puppy." }
        ],
        Hindi: [
            { q: "'आसमान' का पर्यायवाची (Synonym) शब्द क्या है?", opts: ["धरती", "आकाश", "पाताल", "जल"], ans: "आकाश", exp: "'आसमान' को 'आकाश' भी कहा जाता है।" },
            { q: "किसी व्यक्ति, वस्तु या स्थान के नाम को क्या कहते हैं?", opts: ["सर्वनाम", "विशेषण", "संज्ञा", "क्रिया"], ans: "संज्ञा", exp: "नाम वाले शब्दों को संज्ञा (Noun) कहते हैं।" },
            { q: "'अमृत' का विलोम (Opposite) शब्द क्या है?", opts: ["जल", "विष", "दूध", "हवा"], ans: "विष", exp: "अमृत का उल्टा विष (ज़हर) होता है।" },
            { q: "'मैं किताब पढ़ रहा हूँ।' इस वाक्य में सर्वनाम (Pronoun) क्या है?", opts: ["किताब", "पढ़", "रहा", "मैं"], ans: "मैं", exp: "जो शब्द संज्ञा की जगह आते हैं, उन्हें सर्वनाम कहते हैं (जैसे- मैं, तुम, वह)।" },
            { q: "हमारे देश का क्या नाम है?", opts: ["नेपाल", "अमेरिका", "भारत", "जापान"], ans: "भारत", exp: "हमारे देश का नाम भारत (India) है।" },
            { q: "'आँख' का पर्यायवाची शब्द चुनें।", opts: ["नेत्र", "कान", "हाथ", "पैर"], ans: "नेत्र", exp: "आँख को नेत्र या नयन भी कहते हैं।" },
            { q: "'सफेद' का विलोम शब्द क्या है?", opts: ["नीला", "पीला", "काला", "हरा"], ans: "काला", exp: "सफेद (White) का उल्टा काला (Black) होता है।" },
            { q: "'घोड़ा' का स्त्रीलिंग (Feminine) क्या होगा?", opts: ["घोड़े", "घोड़ियाँ", "घोटक", "घोड़ी"], ans: "घोड़ी", exp: "घोड़ा (Male) का स्त्रीलिंग घोड़ी (Female) होता है।" },
            { q: "जो बच्चों को स्कूल में पढ़ाता है, उसे क्या कहते हैं?", opts: ["डॉक्टर", "अध्यापक", "किसान", "सैनिक"], ans: "अध्यापक", exp: "पढ़ाने वाले को अध्यापक या शिक्षक (Teacher) कहते हैं।" },
            { q: "'किताब' का बहुवचन (Plural) क्या होगा?", opts: ["किताबें", "किताबों", "कॉपियाँ", "किताबी"], ans: "किताबें", exp: "एक किताब, बहुत सारी 'किताबें'।" },
            { q: "मिठाई बनाने वाले को क्या कहा जाता है?", opts: ["मोची", "दर्जी", "हलवाई", "बढ़ई"], ans: "हलवाई", exp: "जो मिठाई बनाता है, वह हलवाई होता है।" },
            { q: "'रोना' का विलोम शब्द क्या है?", opts: ["सोना", "गाना", "हँसना", "खेलना"], ans: "हँसना", exp: "रोना (Cry) का उल्टा हँसना (Laugh) होता है।" },
            { q: "मोर हमारा कैसा पक्षी है?", opts: ["पालतू", "राष्ट्रीय", "विदेशी", "जंगली"], ans: "राष्ट्रीय", exp: "मोर भारत का राष्ट्रीय (National) पक्षी है।" },
            { q: "आम के अंदर कितनी गुठली होती है?", opts: ["एक", "दो", "चार", "बहुत सारी"], ans: "एक", exp: "एक आम में सिर्फ एक बड़ी गुठली (Seed) होती है।" },
            { q: "एक सप्ताह में कितने दिन होते हैं?", opts: ["पाँच", "छह", "सात", "आठ"], ans: "सात", exp: "एक सप्ताह (Week) में सात दिन होते हैं।" },
            { q: "'पेड़' का पर्यायवाची शब्द क्या है?", opts: ["फूल", "वृक्ष", "पत्ता", "फल"], ans: "वृक्ष", exp: "पेड़ को वृक्ष भी कहा जाता है।" },
            { q: "इनमें से कौन सा फल 'लाल' रंग का होता है?", opts: ["केला", "अमरूद", "सेब", "पपीता"], ans: "सेब", exp: "सेब (Apple) लाल रंग का होता है।" },
            { q: "'कच्चा' का विलोम शब्द क्या है?", opts: ["पक्का", "मीठा", "खट्टा", "नरम"], ans: "पक्का", exp: "कच्चा (Raw) का उल्टा पक्का (Ripe) होता है।" },
            { q: "'सुंदर' शब्द व्याकरण में क्या है?", opts: ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"], ans: "विशेषण", exp: "सुंदर किसी की विशेषता बता रहा है, इसलिए यह विशेषण (Adjective) है।" },
            { q: "हिंदी भाषा किस लिपि में लिखी जाती है?", opts: ["रोमन", "देवनागरी", "गुरुमुखी", "उर्दू"], ans: "देवनागरी", exp: "हिंदी भाषा देवनागरी लिपि में लिखी जाती है।" }
        ],
        Science: [
            { q: "What do we call animals that eat only plants?", opts: ["Carnivores", "Herbivores", "Omnivores", "Insectivores"], ans: "Herbivores", exp: "Herbivores, like cows and deer, eat only plants." },
            { q: "What is the process of a seed growing into a plant called?", opts: ["Evaporation", "Melting", "Germination", "Freezing"], ans: "Germination", exp: "Germination is when a seed sprouts and starts to grow." },
            { q: "What state of matter is water that we drink?", opts: ["Solid", "Liquid", "Gas", "Plasma"], ans: "Liquid", exp: "Water flows and takes the shape of its container, so it is a liquid." },
            { q: "What do we call animals that eat only meat?", opts: ["Carnivores", "Herbivores", "Producers", "Scavengers"], ans: "Carnivores", exp: "Carnivores, like lions and tigers, hunt and eat other animals." },
            { q: "What is the Sun?", opts: ["A planet", "A comet", "A star", "An asteroid"], ans: "A star", exp: "The Sun is actually a medium-sized star made of hot, glowing gas." },
            { q: "How is a shadow formed?", opts: ["By magic", "When an object blocks light", "From the cold", "When it rains"], ans: "When an object blocks light", exp: "Shadows appear when light cannot pass through an object." },
            { q: "Which of these is an example of a gas?", opts: ["Wood", "Milk", "Oxygen", "Rock"], ans: "Oxygen", exp: "Oxygen is an invisible gas in the air that we breathe." },
            { q: "What part of a bird's body helps it to fly?", opts: ["Tail", "Beak", "Claws", "Wings"], ans: "Wings", exp: "Birds flap their wings to push against the air and fly." },
            { q: "What kind of animal is a frog?", opts: ["Reptile", "Amphibian", "Mammal", "Bird"], ans: "Amphibian", exp: "Amphibians live both in water and on land." },
            { q: "Which state of matter has a fixed shape and size?", opts: ["Solid", "Liquid", "Gas", "Wind"], ans: "Solid", exp: "Solids, like a rock or a pencil, do not change their shape on their own." },
            { q: "Which animal lives entirely in water and breathes through gills?", opts: ["Whale", "Turtle", "Fish", "Penguin"], ans: "Fish", exp: "Fish use gills to take oxygen directly out of the water." },
            { q: "Which sense organ do you use to taste sugar?", opts: ["Nose", "Skin", "Eyes", "Tongue"], ans: "Tongue", exp: "Your tongue has taste buds that help you taste sweet, sour, salty, and bitter foods." },
            { q: "What is the natural satellite that orbits the Earth?", opts: ["The Sun", "Mars", "The Moon", "A comet"], ans: "The Moon", exp: "The Moon circles around the Earth in space." },
            { q: "Which part of a plant develops into a fruit with seeds?", opts: ["Root", "Stem", "Leaf", "Flower"], ans: "Flower", exp: "Flowers bloom and eventually turn into fruits that carry seeds." },
            { q: "What does boiling water turn into?", opts: ["Ice", "Water vapor (Steam)", "Snow", "Solid"], ans: "Water vapor (Steam)", exp: "When water gets very hot, it evaporates into a gas called steam." },
            { q: "What is a push or a pull acting on an object?", opts: ["Gravity", "Weight", "Force", "Speed"], ans: "Force", exp: "Any time you push or pull a door, you are applying a force." },
            { q: "Which of these things is non-living?", opts: ["Tree", "Dog", "Rock", "Mushroom"], ans: "Rock", exp: "A rock does not grow, breathe, or eat, so it is non-living." },
            { q: "What type of material does a magnet attract?", opts: ["Wood", "Plastic", "Glass", "Iron"], ans: "Iron", exp: "Magnets pull on metals like iron and steel." },
            { q: "Which part of the plant is known as its 'food factory'?", opts: ["Root", "Stem", "Leaf", "Fruit"], ans: "Leaf", exp: "Leaves use sunlight to make food for the plant." },
            { q: "How is sound produced?", opts: ["By color", "By vibrations", "By heat", "By light"], ans: "By vibrations", exp: "Sound is made when objects vibrate and shake the air." }
        ]
    },
    4: {
        Maths: [
            { q: "What is 1500 + 2500?", opts: ["3000", "4000", "4500", "5000"], ans: "4000", exp: "1500 plus 2500 equals 4000." },
            { q: "What is 1/4 + 2/4?", opts: ["3/8", "3/4", "1/2", "1/4"], ans: "3/4", exp: "When denominators are the same, just add the top numbers: 1 + 2 = 3." },
            { q: "What is the perimeter of a square with a side length of 5 cm?", opts: ["10 cm", "15 cm", "20 cm", "25 cm"], ans: "20 cm", exp: "Perimeter of a square = 4 × side (4 × 5 = 20)." },
            { q: "An angle that is less than 90 degrees is called what?", opts: ["Obtuse", "Right", "Acute", "Straight"], ans: "Acute", exp: "Angles smaller than 90 degrees are acute angles." },
            { q: "What is 12 x 11?", opts: ["121", "132", "144", "150"], ans: "132", exp: "12 times 11 equals 132." },
            { q: "What is the place value of 4 in the number 5,432?", opts: ["4", "40", "400", "4000"], ans: "400", exp: "The 4 is in the hundreds place, so it represents 400." },
            { q: "How many grams are in 2 kilograms?", opts: ["20 g", "200 g", "2000 g", "20000 g"], ans: "2000 g", exp: "1 kilogram = 1000 grams, so 2 kg = 2000 grams." },
            { q: "What is 72 ÷ 8?", opts: ["7", "8", "9", "10"], ans: "9", exp: "9 times 8 is 72." },
            { q: "Which of these is a prime number?", opts: ["4", "6", "7", "9"], ans: "7", exp: "A prime number can only be divided by 1 and itself." },
            { q: "If it is 3:00 PM, what time will it be in 2 hours and 30 minutes?", opts: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], ans: "5:30 PM", exp: "3:00 + 2 hours = 5:00, plus 30 mins = 5:30 PM." },
            { q: "What is the largest 4-digit number?", opts: ["1000", "9000", "9990", "9999"], ans: "9999", exp: "9999 is the biggest number before you reach 10000 (a 5-digit number)." },
            { q: "Which fraction is equivalent to 1/2?", opts: ["2/4", "1/3", "2/3", "1/4"], ans: "2/4", exp: "If you multiply the top and bottom of 1/2 by 2, you get 2/4." },
            { q: "What is 5.5 + 2.2?", opts: ["7.5", "7.7", "8.7", "77"], ans: "7.7", exp: "Add the whole numbers (5+2=7) and decimals (.5+.2=.7) to get 7.7." },
            { q: "How many sides does a hexagon have?", opts: ["5", "6", "7", "8"], ans: "6", exp: "A hexagon is a polygon with exactly 6 sides." },
            { q: "What is the area of a rectangle with length 4 cm and width 3 cm?", opts: ["7 sq cm", "12 sq cm", "14 sq cm", "24 sq cm"], ans: "12 sq cm", exp: "Area = Length × Width (4 × 3 = 12)." },
            { q: "If one book costs Rs. 25, how much will 4 books cost?", opts: ["Rs. 75", "Rs. 100", "Rs. 125", "Rs. 150"], ans: "Rs. 100", exp: "25 × 4 = 100." },
            { q: "Which of these are factors of 10?", opts: ["1, 2, 5, 10", "2, 4, 6, 8", "3, 6, 9", "10, 20, 30"], ans: "1, 2, 5, 10", exp: "These are the numbers that can divide perfectly into 10." },
            { q: "How many millimeters are in 1 centimeter?", opts: ["10", "100", "1000", "50"], ans: "10", exp: "There are 10 millimeters in a single centimeter." },
            { q: "What is 100 × 100?", opts: ["1000", "10000", "100000", "200"], ans: "10000", exp: "1 followed by four zeros makes 10,000." },
            { q: "What do you call a triangle with all three sides of equal length?", opts: ["Scalene", "Isosceles", "Equilateral", "Right"], ans: "Equilateral", exp: "Equi means equal, lateral means sides." }
        ],
        EVS: [
            { q: "Who wrote the National Anthem of India?", opts: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Bhagat Singh"], ans: "Rabindranath Tagore", exp: "Rabindranath Tagore wrote 'Jana Gana Mana'." },
            { q: "Which is the longest river in India?", opts: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"], ans: "Ganga", exp: "The Ganga (Ganges) is the longest river flowing within India." },
            { q: "What do we call the layer of air that surrounds the Earth?", opts: ["Hydrosphere", "Atmosphere", "Lithosphere", "Space"], ans: "Atmosphere", exp: "The atmosphere is the blanket of air protecting our planet." },
            { q: "Which gas do plants absorb from the air to make their food?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: "Carbon Dioxide", exp: "Plants take in Carbon Dioxide and release Oxygen." },
            { q: "What is a globe?", opts: ["A flat map", "A model of the Earth", "A type of star", "A mountain"], ans: "A model of the Earth", exp: "A globe is a round, 3D model that represents the Earth." },
            { q: "Which monument is located in Agra?", opts: ["Red Fort", "Qutub Minar", "Taj Mahal", "Charminar"], ans: "Taj Mahal", exp: "The Taj Mahal is a famous white marble monument in Agra." },
            { q: "How many states are there in India currently?", opts: ["25", "27", "28", "29"], ans: "28", exp: "India currently has 28 states and 8 Union Territories." },
            { q: "What are the three colors in the Indian National Flag (from top to bottom)?", opts: ["Green, White, Saffron", "Saffron, White, Green", "Red, White, Green", "Saffron, Blue, Green"], ans: "Saffron, White, Green", exp: "The tricolor has Saffron at the top, White in the middle, and Green at the bottom." },
            { q: "What is the highest mountain peak in the world?", opts: ["K2", "Mount Everest", "Kangchenjunga", "Nanda Devi"], ans: "Mount Everest", exp: "Mount Everest in the Himalayas is the highest peak." },
            { q: "Which is the largest ocean on Earth?", opts: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], ans: "Pacific Ocean", exp: "The Pacific Ocean is the largest and deepest ocean." },
            { q: "What is the capital of Maharashtra?", opts: ["Pune", "Nagpur", "Mumbai", "Nashik"], ans: "Mumbai", exp: "Mumbai is the capital city of Maharashtra." },
            { q: "What do we call a group of stars forming a pattern in the sky?", opts: ["Galaxy", "Solar System", "Constellation", "Comet"], ans: "Constellation", exp: "Constellations are imaginary patterns of stars, like Orion or the Big Dipper." },
            { q: "Which direction is directly opposite to North?", opts: ["East", "West", "South", "North-West"], ans: "South", exp: "If you face North, South is directly behind you." },
            { q: "Which of these is a cash crop?", opts: ["Wheat", "Rice", "Cotton", "Maize"], ans: "Cotton", exp: "Cash crops like cotton are grown to be sold for profit, not just for eating." },
            { q: "Who is known as the 'Father of the Nation' in India?", opts: ["Subhas Chandra Bose", "Mahatma Gandhi", "Sardar Patel", "B.R. Ambedkar"], ans: "Mahatma Gandhi", exp: "Mahatma Gandhi led India's non-violent freedom struggle." },
            { q: "Where does the Gram Panchayat work?", opts: ["In cities", "In villages", "In foreign countries", "In the ocean"], ans: "In villages", exp: "The Gram Panchayat is the local government for villages in India." },
            { q: "Which of these is a natural resource?", opts: ["Plastic", "Glass", "Water", "Nylon"], ans: "Water", exp: "Natural resources like water, air, and soil come from nature." },
            { q: "What is the main source of energy for the Earth?", opts: ["The Moon", "The Sun", "Wind", "Volcanoes"], ans: "The Sun", exp: "The Sun provides the light and heat that keeps Earth alive." },
            { q: "Which festival is celebrated as the harvest festival in Punjab?", opts: ["Pongal", "Bihu", "Baisakhi", "Onam"], ans: "Baisakhi", exp: "Baisakhi is a major harvest festival celebrated in Punjab." },
            { q: "What should we do to reduce air pollution?", opts: ["Burn garbage", "Cut trees", "Plant more trees", "Use more plastic"], ans: "Plant more trees", exp: "Trees absorb harmful gases and give us clean oxygen." }
        ],
        Hindi: [
            { q: "'नौ दो ग्यारह होना' मुहावरे का क्या अर्थ है?", opts: ["गणित पढ़ना", "भाग जाना", "ग्यारह बजे आना", "चुप रहना"], ans: "भाग जाना", exp: "इस मुहावरे का अर्थ है चुपचाप भाग जाना या खिसक लेना।" },
            { q: "'ताजमहल' व्याकरण में किस प्रकार की संज्ञा (Noun) है?", opts: ["जातिवाचक", "भाववाचक", "व्यक्तिवाचक", "समूहवाचक"], ans: "व्यक्तिवाचक", exp: "ताजमहल एक विशेष इमारत का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है।" },
            { q: "'अंधेरा' का विलोम (Opposite) शब्द क्या होगा?", opts: ["रात", "उजाला", "शाम", "काला"], ans: "उजाला", exp: "अंधेरा का उल्टा 'उजाला' (रोशनी) होता है।" },
            { q: "इनमें से कौन सा शब्द 'शुद्ध' (Correct spelling) है?", opts: ["आशीर्बाद", "अशीर्वाद", "आशीर्वाद", "आसीरवाद"], ans: "आशीर्वाद", exp: "सही वर्तनी 'आशीर्वाद' होती है।" },
            { q: "'मैं, तुम, वह, हम' - ये शब्द व्याकरण में क्या कहलाते हैं?", opts: ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"], ans: "सर्वनाम", exp: "जो शब्द संज्ञा के स्थान पर आते हैं, उन्हें सर्वनाम (Pronoun) कहते हैं।" },
            { q: "जो खेत में अन्न उगाता है, उसे क्या कहते हैं?", opts: ["सैनिक", "व्यापारी", "किसान", "शिक्षक"], ans: "किसान", exp: "खेती करने वाले को किसान (Farmer) कहा जाता है।" },
            { q: "'सूर्य' का पर्यायवाची (Synonym) शब्द कौन सा है?", opts: ["शशि", "रवि", "नभ", "पवन"], ans: "रवि", exp: "सूर्य को रवि, दिनकर, और भास्कर भी कहते हैं।" },
            { q: "'लाल गुलाब' में 'लाल' शब्द क्या है?", opts: ["संज्ञा", "क्रिया", "विशेषण", "सर्वनाम"], ans: "विशेषण", exp: "'लाल' गुलाब की विशेषता बता रहा है, इसलिए यह विशेषण (Adjective) है।" },
            { q: "इनमें से कौन सा शब्द स्त्रीलिंग (Feminine) है?", opts: ["शेर", "लड़का", "मोर", "बकरी"], ans: "बकरी", exp: "बकरी स्त्रीलिंग है, इसका पुल्लिंग 'बकरा' होता है।" },
            { q: "'आँख का तारा' मुहावरे का क्या अर्थ है?", opts: ["आँख में दर्द", "तारा टूटना", "बहुत प्यारा होना", "आसमान देखना"], ans: "बहुत प्यारा होना", exp: "जो इंसान हमें बहुत प्यारा होता है, उसे 'आँख का तारा' कहते हैं।" },
            { q: "'सत्य' का विलोम शब्द क्या है?", opts: ["असत्य", "झूठ", "पाप", "न्याय"], ans: "असत्य", exp: "'सत्य' (True) का विलोम 'असत्य' (False) होता है।" },
            { q: "जो बहुत मीठा बोलता हो, उसे क्या कहेंगे?", opts: ["कड़वा", "वाचाल", "मृदुभाषी", "गूंगा"], ans: "मृदुभाषी", exp: "'मृदु' मतलब मीठा, मीठा बोलने वाला मृदुभाषी कहलाता है।" },
            { q: "हिंदी वर्णमाला में कितने स्वर (Vowels) होते हैं?", opts: ["11", "25", "33", "52"], ans: "11", exp: "हिंदी वर्णमाला में मुख्य रूप से 11 स्वर होते हैं (अ से औ तक)।" },
            { q: "त्योहार 'ईद' किस महीने के बाद मनाई जाती है?", opts: ["सावन", "रमज़ान", "चैत्र", "फाल्गुन"], ans: "रमज़ान", exp: "रमज़ान के पवित्र महीने के बाद ईद आती है।" },
            { q: "'जल' का दूसरा नाम क्या है?", opts: ["आग", "वायु", "नीर", "धरती"], ans: "नीर", exp: "जल को पानी, नीर, और वारि भी कहते हैं।" },
            { q: "जिसके माता-पिता न हों, उसे क्या कहते हैं?", opts: ["अनाथ", "सनाथ", "गरीब", "अमीर"], ans: "अनाथ", exp: "जिसके माता-पिता नहीं होते, उसे अनाथ (Orphan) कहा जाता है।" },
            { q: "राम ने रावण को मारा। इस वाक्य में क्रिया (Verb) क्या है?", opts: ["राम", "रावण", "मारा", "ने"], ans: "मारा", exp: "'मारना' एक काम है, इसलिए यह क्रिया है।" },
            { q: "'पुस्तक' का बहुवचन क्या होगा?", opts: ["पुस्तकों", "पुस्तकें", "पुस्तिका", "किताबें"], ans: "पुस्तकें", exp: "एक पुस्तक, बहुत सारी 'पुस्तकें'।" },
            { q: "जहाँ बहुत सारी किताबें रखी जाती हैं और पढ़ी जाती हैं, उसे क्या कहते हैं?", opts: ["अस्पताल", "पुस्तकालय", "विद्यालय", "दुकान"], ans: "पुस्तकालय", exp: "पुस्तकालय (Library) में किताबें होती हैं।" },
            { q: "राष्ट्रीय गीत 'वंदे मातरम' किसने लिखा है?", opts: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "महात्मा गांधी", "सुभाष चंद्र बोस"], ans: "बंकिम चंद्र चटर्जी", exp: "'वंदे मातरम' बंकिम चंद्र चटर्जी द्वारा लिखा गया है।" }
        ],
        Science: [
            { q: "What is the process by which plants make their own food?", opts: ["Respiration", "Digestion", "Photosynthesis", "Evaporation"], ans: "Photosynthesis", exp: "Plants use sunlight, water, and carbon dioxide for photosynthesis." },
            { q: "What is the invisible force that pulls everything down towards the Earth?", opts: ["Magnetism", "Friction", "Gravity", "Electricity"], ans: "Gravity", exp: "Gravity is the force that keeps us on the ground." },
            { q: "What do we call an animal that eats BOTH plants and meat?", opts: ["Herbivore", "Carnivore", "Omnivore", "Insectivore"], ans: "Omnivore", exp: "Omnivores, like humans and bears, eat both plants and meat." },
            { q: "What process turns liquid water into water vapor (gas)?", opts: ["Condensation", "Evaporation", "Freezing", "Melting"], ans: "Evaporation", exp: "When water is heated, it evaporates into the air as a gas." },
            { q: "What is the green pigment in plant leaves called?", opts: ["Chlorophyll", "Melanin", "Hemoglobin", "Plasma"], ans: "Chlorophyll", exp: "Chlorophyll absorbs sunlight and gives leaves their green color." },
            { q: "Where does the digestion of food begin in the human body?", opts: ["Stomach", "Intestines", "Mouth", "Throat"], ans: "Mouth", exp: "Digestion starts in the mouth when you chew and mix food with saliva." },
            { q: "How many teeth does an adult human usually have?", opts: ["20", "28", "32", "36"], ans: "32", exp: "A complete permanent adult set has 32 teeth." },
            { q: "Which is the smallest planet in our Solar System?", opts: ["Mars", "Venus", "Earth", "Mercury"], ans: "Mercury", exp: "Mercury is the smallest planet and closest to the Sun." },
            { q: "What is the freezing point of water?", opts: ["0 degrees Celsius", "10 degrees Celsius", "50 degrees Celsius", "100 degrees Celsius"], ans: "0 degrees Celsius", exp: "Water freezes into solid ice at 0°C (32°F)." },
            { q: "What instrument is used to measure the temperature of the body?", opts: ["Microscope", "Barometer", "Thermometer", "Stethoscope"], ans: "Thermometer", exp: "Doctors use a thermometer to check if you have a fever." },
            { q: "Energy that comes from the Sun is called what?", opts: ["Wind energy", "Solar energy", "Lunar energy", "Magnetic energy"], ans: "Solar energy", exp: "Solar panels can turn solar energy from the sun into electricity." },
            { q: "Which of these animals carries its baby in a pouch?", opts: ["Elephant", "Kangaroo", "Monkey", "Tiger"], ans: "Kangaroo", exp: "Kangaroos are marsupials; they carry their young in a belly pouch." },
            { q: "What do we call animals that live entirely in water?", opts: ["Terrestrial", "Amphibian", "Aquatic", "Aerial"], ans: "Aquatic", exp: "Aquatic animals, like fish and whales, live in water environments." },
            { q: "Sound cannot travel through what?", opts: ["Water", "Wood", "Air", "A vacuum (empty space)"], ans: "A vacuum (empty space)", exp: "Sound needs a material (like air or water) to travel through. Space is silent." },
            { q: "What kind of material allows light to pass completely through it?", opts: ["Opaque", "Transparent", "Translucent", "Solid"], ans: "Transparent", exp: "Clear glass is transparent because you can see perfectly through it." },
            { q: "Which part of the plant absorbs water and minerals from the soil?", opts: ["Leaves", "Stem", "Flowers", "Roots"], ans: "Roots", exp: "Roots act like straws, sucking up water from the ground." },
            { q: "What is a pulley an example of?", opts: ["A complex machine", "A simple machine", "A vehicle", "A magnet"], ans: "A simple machine", exp: "Pulleys, levers, and ramps are simple machines that make work easier." },
            { q: "What is the hardest natural substance on Earth?", opts: ["Iron", "Gold", "Diamond", "Wood"], ans: "Diamond", exp: "Diamonds are incredibly hard minerals formed deep underground." },
            { q: "Which organ controls all the other organs in the human body?", opts: ["Heart", "Lungs", "Stomach", "Brain"], ans: "Brain", exp: "The brain is the control center of your nervous system." },
            { q: "What gas do humans breathe out?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], ans: "Carbon Dioxide", exp: "We breathe in oxygen and exhale carbon dioxide." }
        ]
    },
    5: {
        Maths: [
            { q: "What is 50% of 200?", opts: ["50", "100", "150", "200"], ans: "100", exp: "50% means exactly half. Half of 200 is 100." },
            { q: "What is the area of a square with a side of 8 cm?", opts: ["16 sq cm", "32 sq cm", "64 sq cm", "80 sq cm"], ans: "64 sq cm", exp: "Area of a square = side × side (8 × 8 = 64)." },
            { q: "What is 2.5 + 3.75?", opts: ["5.25", "6.00", "6.25", "6.75"], ans: "6.25", exp: "Align the decimals: 2.50 + 3.75 = 6.25." },
            { q: "Which of these is a prime number?", opts: ["12", "13", "14", "15"], ans: "13", exp: "13 can only be divided by 1 and itself." },
            { q: "What is the Roman Numeral for 50?", opts: ["X", "L", "C", "M"], ans: "L", exp: "In Roman numerals, X=10, L=50, C=100, M=1000." },
            { q: "What is 3/4 of 100?", opts: ["25", "50", "75", "100"], ans: "75", exp: "Divide 100 by 4 to get 25, then multiply by 3 to get 75." },
            { q: "What is the LCM (Least Common Multiple) of 4 and 6?", opts: ["10", "12", "24", "2"], ans: "12", exp: "12 is the smallest number that both 4 and 6 can divide into evenly." },
            { q: "An angle that is exactly 90 degrees is called a...", opts: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"], ans: "Right angle", exp: "A 90-degree angle makes a perfect square corner and is called a right angle." },
            { q: "How many zeros are there in one million?", opts: ["5", "6", "7", "8"], ans: "6", exp: "One million is written as 1,000,000 (six zeros)." },
            { q: "What is the volume of a cube with edges of 3 cm?", opts: ["9 cubic cm", "12 cubic cm", "18 cubic cm", "27 cubic cm"], ans: "27 cubic cm", exp: "Volume = length × width × height (3 × 3 × 3 = 27)." },
            { q: "What is 1000 ÷ 25?", opts: ["4", "25", "40", "400"], ans: "40", exp: "25 goes into 100 four times, so it goes into 1000 forty times." },
            { q: "Solve: 5/8 + 1/8", opts: ["6/16", "6/8", "4/8", "1/2"], ans: "6/8", exp: "When denominators are the same, add the numerators: 5+1=6, so 6/8." },
            { q: "What is 0.5 × 100?", opts: ["0.05", "5", "50", "500"], ans: "50", exp: "Multiplying by 100 moves the decimal point two places to the right." },
            { q: "What is the perimeter of a rectangle with length 10 cm and width 5 cm?", opts: ["15 cm", "30 cm", "50 cm", "100 cm"], ans: "30 cm", exp: "Perimeter = 2 × (Length + Width) = 2 × (15) = 30." },
            { q: "Which of these numbers is divisible by 3?", opts: ["14", "25", "36", "41"], ans: "36", exp: "A number is divisible by 3 if the sum of its digits (3+6=9) is divisible by 3." },
            { q: "Two angles are supplementary. If one is 100°, what is the other?", opts: ["80°", "90°", "180°", "260°"], ans: "80°", exp: "Supplementary angles add up to 180° (180 - 100 = 80)." },
            { q: "Find x if 1/3 = x/9.", opts: ["1", "2", "3", "6"], ans: "3", exp: "Multiply both numerator and denominator by 3 to get 3/9." },
            { q: "What is 8 squared (8²)?", opts: ["16", "24", "64", "88"], ans: "64", exp: "8 squared means 8 × 8, which is 64." },
            { q: "How many grams are in 3.5 kilograms?", opts: ["350 g", "3500 g", "35000 g", "35 g"], ans: "3500 g", exp: "Multiply by 1000 (3.5 × 1000 = 3500)." },
            { q: "If a train travels at 60 km per hour, how far will it travel in 3 hours?", opts: ["60 km", "120 km", "180 km", "200 km"], ans: "180 km", exp: "Distance = Speed × Time (60 × 3 = 180)." }
        ],
        EVS: [
            { q: "When did the Constitution of India come into force?", opts: ["15 August 1947", "26 January 1950", "2 October 1948", "14 August 1947"], ans: "26 January 1950", exp: "We celebrate this day as Republic Day." },
            { q: "Who was the first Prime Minister of independent India?", opts: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], ans: "Jawaharlal Nehru", exp: "Jawaharlal Nehru, also known as Chacha Nehru, was the first PM." },
            { q: "What is the imaginary line that divides the Earth into Northern and Southern Hemispheres?", opts: ["Prime Meridian", "Tropic of Cancer", "Equator", "Tropic of Capricorn"], ans: "Equator", exp: "The Equator is at 0 degrees latitude and splits the Earth in half." },
            { q: "Which disease is caused by the bite of infected female Anopheles mosquitoes?", opts: ["Cholera", "Malaria", "Typhoid", "Covid-19"], ans: "Malaria", exp: "Malaria is a fever disease spread by specific mosquitoes." },
            { q: "Which of these is a renewable source of energy?", opts: ["Coal", "Petrol", "Solar Energy", "Natural Gas"], ans: "Solar Energy", exp: "Solar energy comes from the sun and will never run out." },
            { q: "Which is the largest continent in the world?", opts: ["Africa", "Europe", "North America", "Asia"], ans: "Asia", exp: "Asia is the largest and most populated continent." },
            { q: "Who led the famous Dandi March (Salt March)?", opts: ["Bhagat Singh", "Mahatma Gandhi", "Subhas Chandra Bose", "Lala Lajpat Rai"], ans: "Mahatma Gandhi", exp: "Gandhi marched to the sea to protest the unfair British salt tax." },
            { q: "Who is known as the 'Iron Man of India'?", opts: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "B.R. Ambedkar"], ans: "Sardar Vallabhbhai Patel", exp: "He helped unite all the separate princely states into one India." },
            { q: "What is the national aquatic animal of India?", opts: ["Blue Whale", "Great White Shark", "Ganges River Dolphin", "Sea Turtle"], ans: "Ganges River Dolphin", exp: "The river dolphin is a highly endangered symbol of India's rivers." },
            { q: "What is the capital city of Karnataka?", opts: ["Chennai", "Hyderabad", "Bengaluru", "Kochi"], ans: "Bengaluru", exp: "Bengaluru is the capital of Karnataka and the IT hub of India." },
            { q: "Which gas is mainly responsible for Global Warming?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: "Carbon Dioxide", exp: "Carbon Dioxide acts like a blanket, trapping the sun's heat." },
            { q: "How many continents are there on Earth?", opts: ["5", "6", "7", "8"], ans: "7", exp: "The 7 continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia." },
            { q: "Where is the Supreme Court of India located?", opts: ["Mumbai", "Kolkata", "Chennai", "New Delhi"], ans: "New Delhi", exp: "The highest court of justice in India is in the capital, New Delhi." },
            { q: "Who was the first Indian woman to go to space?", opts: ["Sunita Williams", "Kalpana Chawla", "Bachendri Pal", "Mary Kom"], ans: "Kalpana Chawla", exp: "Kalpana Chawla flew on the Space Shuttle Columbia in 1997." },
            { q: "Which is the largest state in India by land area?", opts: ["Uttar Pradesh", "Maharashtra", "Madhya Pradesh", "Rajasthan"], ans: "Rajasthan", exp: "Rajasthan is the largest state, known for the Thar Desert." },
            { q: "Pongal is a famous harvest festival celebrated in which state?", opts: ["Punjab", "Tamil Nadu", "Assam", "Kerala"], ans: "Tamil Nadu", exp: "Pongal is celebrated in Tamil Nadu to thank nature for a good harvest." },
            { q: "How long does the Earth take to complete one rotation on its axis?", opts: ["365 days", "1 month", "24 hours", "12 hours"], ans: "24 hours", exp: "One complete rotation takes 24 hours, giving us day and night." },
            { q: "A lack of Vitamin C in the diet causes which disease?", opts: ["Scurvy", "Rickets", "Anemia", "Goiter"], ans: "Scurvy", exp: "Scurvy affects gums and skin. Citrus fruits prevent it." },
            { q: "What is the natural environment where an animal or plant lives called?", opts: ["Ecosystem", "Habitat", "Biosphere", "Territory"], ans: "Habitat", exp: "A habitat provides food, water, and shelter for an organism." },
            { q: "Which of these is a non-renewable resource?", opts: ["Wind", "Sunlight", "Water", "Coal"], ans: "Coal", exp: "Coal takes millions of years to form and will eventually run out." }
        ],
        Hindi: [
            { q: "जो ईश्वर को मानता हो, उसे क्या कहते हैं?", opts: ["नास्तिक", "आस्तिक", "धार्मिक", "पापी"], ans: "आस्तिक", exp: "ईश्वर पर विश्वास करने वाले को आस्तिक कहते हैं, और न करने वाले को नास्तिक।" },
            { q: "'विद्यालय' का सही संधि-विच्छेद (Sandhi) क्या है?", opts: ["विद्या + आलय", "विद्य + आलय", "विद्या + लय", "वि + द्यालय"], ans: "विद्या + आलय", exp: "'विद्या' (ज्ञान) + 'आलय' (घर) = विद्यालय (School)।" },
            { q: "'रमेश खाना खा रहा है।' यह किस काल (Tense) का वाक्य है?", opts: ["भूतकाल", "वर्तमान काल", "भविष्य काल", "इनमें से कोई नहीं"], ans: "वर्तमान काल", exp: "क्रिया अभी हो रही है, इसलिए यह वर्तमान काल (Present Tense) है।" },
            { q: "हिंदी भाषा में कितने प्रकार के वचन (Number) होते हैं?", opts: ["एक", "दो", "तीन", "चार"], ans: "दो", exp: "हिंदी में केवल दो वचन होते हैं: एकवचन और बहुवचन।" },
            { q: "'ईद का चाँद होना' मुहावरे का सही अर्थ क्या है?", opts: ["आसमान में जाना", "बहुत दिनों बाद दिखाई देना", "त्योहार मनाना", "चाँद पर जाना"], ans: "बहुत दिनों बाद दिखाई देना", exp: "जो व्यक्ति बहुत समय बाद मिलता है, उसे ईद का चाँद कहते हैं।" },
            { q: "'कवि' (Poet) का स्त्रीलिंग (Feminine) क्या होगा?", opts: ["कविनी", "कवियत्री", "कवयित्री", "कवता"], ans: "कवयित्री", exp: "कवि का स्त्रीलिंग सही वर्तनी में 'कवयित्री' होता है।" },
            { q: "जो कभी न मरे, उसे एक शब्द में क्या कहेंगे?", opts: ["अमर", "मृतक", "अजर", "ईश्वर"], ans: "अमर", exp: "जिसकी कभी मृत्यु न हो, उसे अमर (Immortal) कहते हैं।" },
            { q: "'गुण' का विलोम (Opposite) शब्द क्या है?", opts: ["अवगुण", "दोष", "बुरा", "उपरोक्त दोनों (A और B)"], ans: "उपरोक्त दोनों (A और B)", exp: "गुण का विलोम अवगुण या दोष दोनों होता है।" },
            { q: "भाषा की सबसे छोटी इकाई को क्या कहते हैं?", opts: ["शब्द", "वाक्य", "वर्ण", "स्वर"], ans: "वर्ण", exp: "वर्ण (Letter) भाषा की सबसे छोटी ध्वनि है जिसके और टुकड़े হেঁ।" },
            { q: "'घी के दीये जलाना' मुहावरे का अर्थ है:", opts: ["रोशनी करना", "खुशियाँ मनाना", "पूजा करना", "अंधेरा दूर करना"], ans: "खुशियाँ मनाना", exp: "जब कोई बहुत बड़ी सफलता मिलती है, तो घी के दीये जलाकर खुशियाँ मनाई जाती हैं।" },
            { q: "'सोना' (Gold) किस प्रकार की संज्ञा है?", opts: ["व्यक्तिवाचक", "जातिवाचक", "भाववाचक", "द्रव्यवाचक"], ans: "द्रव्यवाचक", exp: "जिन चीज़ों को नापा या तौला जाता है, वे द्रव्यवाचक (Material) संज्ञा होती हैं।" },
            { q: "भारत में 'हिंदी दिवस' कब मनाया जाता है?", opts: ["14 नवंबर", "5 सितंबर", "14 सितंबर", "2 अक्टूबर"], ans: "14 सितंबर", exp: "14 सितंबर 1949 को हिंदी को राजभाषा का दर्जा मिला था।" },
            { q: "'आकाश-पाताल एक करना' मुहावरे का अर्थ क्या है?", opts: ["अंतरिक्ष में जाना", "बहुत अधिक परिश्रम (मेहनत) करना", "दुनिया घूमना", "गड्ढा खोदना"], ans: "बहुत अधिक परिश्रम (मेहनत) करना", exp: "किसी काम के लिए पूरी ताकत लगा देना।" },
            { q: "'कमल' का पर्यायवाची (Synonym) शब्द कौन सा है?", opts: ["जलज", "नीरज", "पंकज", "उपरोक्त सभी"], ans: "उपरोक्त सभी", exp: "जलज, नीरज, और पंकज तीनों ही कमल के पर्यायवाची हैं।" },
            { q: "जो पढ़ा-लिखा न हो, उसे क्या कहते हैं?", opts: ["विद्वान", "मूर्ख", "अनपढ़", "ज्ञानी"], ans: "अनपढ़", exp: "जिसने अक्षर ज्ञान प्राप्त न किया हो, उसे अनपढ़ (Illiterate) कहते हैं।" },
            { q: "हिंदी व्याकरण में 'विशेषण' (Adjective) के मुख्य कितने भेद होते हैं?", opts: ["दो", "तीन", "चार", "पाँच"], ans: "चार", exp: "गुणवाचक, संख्यावाचक, परिमाणवाचक, और सार्वनामिक।" },
            { q: "'सच्चा' शब्द से कौन सी भाववाचक (Abstract) संज्ञा बनेगी?", opts: ["सच्चे", "सच्चाई", "सच्ची", "सच"], ans: "सच्चाई", exp: "सच्चा (विशेषण) से सच्चाई (भाववाचक संज्ञा) बनती है।" },
            { q: "भारतीय संविधान के अनुसार भारत की राजभाषा कौन सी है?", opts: ["अंग्रेज़ी", "संस्कृत", "हिंदी", "उर्दू"], ans: "हिंदी", exp: "भारत की कोई एक 'राष्ट्रीय' भाषा नहीं है, लेकिन सरकारी कामकाज की 'राजभाषा' हिंदी है।" },
            { q: "'हाथी' का पर्यायवाची शब्द है:", opts: ["गज", "अश्व", "मृग", "वानर"], ans: "गज", exp: "हाथी को गज, कुंजर, और हस्ती भी कहा जाता है।" },
            { q: "'सुपुत्र' में कौन सा उपसर्ग (Prefix) लगा है?", opts: ["सु", "पुत्र", "सुप", "त्र"], ans: "सु", exp: "'सु' (अच्छा) + 'पुत्र' (बेटा) = सुपुत्र।" }
        ],
        Science: [
            { q: "Which organ system helps us breathe by taking in oxygen and giving out carbon dioxide?", opts: ["Digestive System", "Circulatory System", "Respiratory System", "Nervous System"], ans: "Respiratory System", exp: "The respiratory system includes the nose, windpipe, and lungs." },
            { q: "What is the force that slows down or stops moving objects when they rub against each other?", opts: ["Gravity", "Magnetism", "Friction", "Tension"], ans: "Friction", exp: "Friction happens when two surfaces rub together, like brakes on a bicycle." },
            { q: "What is the normal human body temperature in degrees Celsius?", opts: ["32°C", "37°C", "98°C", "100°C"], ans: "37°C", exp: "Normal human body temp is about 37°C (or 98.6°F)." },
            { q: "What is the largest organ of the human body?", opts: ["Liver", "Brain", "Heart", "Skin"], ans: "Skin", exp: "Your skin covers your entire body and is actually considered an organ." },
            { q: "Which blood vessels carry oxygen-rich blood away from the heart to the body?", opts: ["Veins", "Arteries", "Capillaries", "Nerves"], ans: "Arteries", exp: "Arteries carry blood Away from the heart. Veins bring it back." },
            { q: "Levers, pulleys, wheels, and inclined planes are all examples of what?", opts: ["Complex machines", "Simple machines", "Electrical circuits", "Engines"], ans: "Simple machines", exp: "Simple machines have few or no moving parts and make work easier." },
            { q: "What instrument is used to measure the intensity of earthquakes?", opts: ["Barometer", "Thermometer", "Seismograph", "Telescope"], ans: "Seismograph", exp: "A seismograph detects and records vibrations in the earth." },
            { q: "Which planet is known as the 'Red Planet' because of its iron-rich soil?", opts: ["Venus", "Jupiter", "Saturn", "Mars"], ans: "Mars", exp: "Mars is covered in iron oxide (rust), making it look red." },
            { q: "Which vitamin does our body produce when exposed to morning sunlight?", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], ans: "Vitamin D", exp: "Vitamin D helps build strong bones and teeth." },
            { q: "What is the process where a solid changes directly into a gas without becoming a liquid?", opts: ["Condensation", "Melting", "Sublimation", "Evaporation"], ans: "Sublimation", exp: "Dry ice (solid carbon dioxide) sublimates directly into fog/gas." },
            { q: "When you mix salt into water, the salt disappears. In this mixture, what is the salt called?", opts: ["Solvent", "Solute", "Solution", "Filter"], ans: "Solute", exp: "The solute (salt) dissolves into the solvent (water) to make a solution." },
            { q: "What kind of joint is found in the human knee and elbow?", opts: ["Ball and socket joint", "Hinge joint", "Pivot joint", "Fixed joint"], ans: "Hinge joint", exp: "A hinge joint opens and closes in one direction, like a door." },
            { q: "Animals that sleep during the day and are active only at night are called:", opts: ["Diurnal", "Aquatic", "Nocturnal", "Amphibious"], ans: "Nocturnal", exp: "Owls, bats, and leopards are nocturnal animals." },
            { q: "What is the hardest substance in the human body?", opts: ["Skull bone", "Thigh bone", "Tooth enamel", "Nails"], ans: "Tooth enamel", exp: "Enamel is the white, incredibly hard outer layer of your teeth." },
            { q: "What is the solid, rocky outer layer of the Earth called?", opts: ["Core", "Mantle", "Crust", "Magma"], ans: "Crust", exp: "We live on the crust, which is the thinnest outer layer of the Earth." },
            { q: "Which of these objects will sink in a bucket of water?", opts: ["A plastic ball", "An empty bottle", "A wooden spoon", "An iron nail"], ans: "An iron nail", exp: "Iron is denser than water, so it sinks. Wood and plastic float." },
            { q: "Which organ filters waste products from the blood to make urine?", opts: ["Liver", "Lungs", "Kidneys", "Stomach"], ans: "Kidneys", exp: "Your two kidneys act like filters to clean your blood." },
            { q: "What is the black circle in the center of the human eye called?", opts: ["Iris", "Retina", "Pupil", "Lens"], ans: "Pupil", exp: "The pupil is an opening that lets light into the eye." },
            { q: "What is the purest natural form of water?", opts: ["River water", "Rainwater", "Well water", "Sea water"], ans: "Rainwater", exp: "Before it hits the polluted ground, rainwater is the purest form of water." },
            { q: "Which gas is most abundant in the Earth's atmosphere?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], ans: "Nitrogen", exp: "The air we breathe is about 78% Nitrogen and only 21% Oxygen." }
        ]
    }
};

// --- APP STATE ---
const appState = {
    grade: null,
    subject: null,
    questions: [],
    currentIndex: 0,
    answers: [], 
    audioTracks: ['assets/audio/Audio 1.mp3', 'assets/audio/Audio 2.mp3', 'assets/audio/Audio 3.mp3', 'assets/audio/Audio 4.mp3'],
    audioIndex: 0,
    isAudioPlaying: false,
    audioElement: new Audio()
};

// --- FISHER-YATES SHUFFLE ---
function shuffleArray(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// --- AUDIO MANAGEMENT ---
function setupAudio() {
    appState.audioTracks = shuffleArray(appState.audioTracks);
    appState.audioElement.volume = document.getElementById('vol-slider').value / 10;
    
    appState.audioElement.addEventListener('ended', () => {
        appState.audioIndex++;
        if (appState.audioIndex >= appState.audioTracks.length) {
            appState.audioTracks = shuffleArray(appState.audioTracks); 
            appState.audioIndex = 0;
        }
        playCurrentAudio();
    });

    document.body.addEventListener('click', () => {
        if (!appState.isAudioPlaying && !appState.audioElement.muted) {
            appState.isAudioPlaying = true;
            playCurrentAudio();
        }
    }, { once: true });

    document.getElementById('mute-btn').addEventListener('click', (e) => {
        appState.audioElement.muted = !appState.audioElement.muted;
        e.target.innerText = appState.audioElement.muted ? '🔇' : '🔊';
    });

    document.getElementById('vol-slider').addEventListener('input', (e) => {
        appState.audioElement.volume = e.target.value / 10;
    });
}

function playCurrentAudio() {
    appState.audioElement.src = appState.audioTracks[appState.audioIndex];
    appState.audioElement.play().catch(e => console.log("Audio prevented by browser:", e));
}

// --- APP CONTROLLER ---
const app = {
    init: () => {
        setupAudio();
    },

    showScreen: (screenId) => {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    selectGrade: (grade) => {
        appState.grade = grade;
        
        // FIX 1: Dynamically update the Subject Screen title to show the selected Grade
        const gradeText = {1: "1st", 2: "2nd", 3: "3rd", 4: "4th", 5: "5th"};
        const titleEl = document.querySelector('#subject-screen h2');
        if (titleEl) {
            titleEl.innerText = `${gradeText[grade]} Grade - Pick a Subject! 📚`;
        }
        
        app.showScreen('subject-screen');
    },

    selectSubject: (subject) => {
        appState.subject = subject;
        app.startQuiz();
    },

    startQuiz: () => {
        let dataPool = syllabusData[appState.grade][appState.subject];
        
        let shuffledPool = shuffleArray(dataPool);
        appState.questions = shuffledPool.slice(0, 5).map(q => {
            return { ...q, opts: shuffleArray(q.opts) }; 
        });
        
        appState.currentIndex = 0;
        appState.answers = new Array(5).fill(null);
        
        app.renderQuestion();
        app.showScreen('quiz-screen');
    },

    renderQuestion: () => {
        const q = appState.questions[appState.currentIndex];
        document.getElementById('quiz-progress').innerText = `Question: ${appState.currentIndex + 1} / 5`;
        document.getElementById('question-text').innerText = q.q;

        const optsContainer = document.getElementById('options-container');
        optsContainer.innerHTML = '';
        
        q.opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            if (appState.answers[appState.currentIndex] === opt) {
                btn.classList.add('selected');
            }
            btn.innerText = opt;
            btn.onclick = () => app.selectOption(opt, btn);
            optsContainer.appendChild(btn);
        });

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.style.visibility = appState.currentIndex === 0 ? 'hidden' : 'visible';
        
        if (appState.currentIndex === 4) {
            nextBtn.innerText = 'Submit Quiz ✔️';
            nextBtn.className = 'btn btn-nav btn-submit';
            nextBtn.onclick = app.submitQuiz;
        } else {
            nextBtn.innerText = 'Next ➡️';
            nextBtn.className = 'btn btn-nav btn-blue';
            nextBtn.onclick = app.nextQuestion;
        }
    },

    selectOption: (opt, btn) => {
        appState.answers[appState.currentIndex] = opt;
        document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    },

    nextQuestion: () => {
        if (appState.currentIndex < 4) {
            appState.currentIndex++;
            app.renderQuestion();
        }
    },

    prevQuestion: () => {
        if (appState.currentIndex > 0) {
            appState.currentIndex--;
            app.renderQuestion();
        }
    },

    submitQuiz: () => {
        app.renderResults();
        app.showScreen('results-screen');
    },

    renderResults: () => {
        let correct = 0, wrong = 0, unattempted = 0;
        const expContainer = document.getElementById('explanations-container');
        expContainer.innerHTML = '';

        appState.questions.forEach((q, i) => {
            const userAns = appState.answers[i];
            let statusIcon = '';
            
            if (userAns === null) {
                unattempted++;
                statusIcon = '⚪';
            } else if (userAns === q.ans) {
                correct++;
                statusIcon = '✅';
            } else {
                wrong++;
                statusIcon = '❌';
            }

            const div = document.createElement('div');
            div.className = 'explanation-item';
            div.innerHTML = `
                <strong>Q${i+1}: ${q.q}</strong><br>
                ${statusIcon} Your Answer: ${userAns || "Skipped"} <br>
                💡 Correct Answer: <strong>${q.ans}</strong><br>
                <em>📝 ${q.exp}</em>
            `;
            expContainer.appendChild(div);
        });

        document.getElementById('res-correct').innerText = correct;
        document.getElementById('res-wrong').innerText = wrong;
        document.getElementById('res-unattempted').innerText = unattempted;

        // FIX 2: Dynamically add "Play Again", "Change Subject", and "Change Grade" buttons
        const resultsScreen = document.getElementById('results-screen');
        
        // Hide the original hardcoded button
        const oldBtn = resultsScreen.querySelector('button[onclick="app.resetGame()"]');
        if (oldBtn) oldBtn.style.display = 'none'; 

        // Create a new button container if it doesn't already exist
        let actionBtns = document.getElementById('result-action-btns');
        if (!actionBtns) {
            actionBtns = document.createElement('div');
            actionBtns.id = 'result-action-btns';
            actionBtns.className = 'grid-layout';
            actionBtns.style.marginTop = '20px';
            resultsScreen.appendChild(actionBtns);
        }
        
        // Add the three requested navigation buttons
        actionBtns.innerHTML = `
            <button class="btn btn-green" onclick="app.startQuiz()">Play Again 🔄</button>
            <button class="btn btn-blue" onclick="app.showScreen('subject-screen')">Change Subject 📚</button>
            <button class="btn btn-yellow" onclick="app.showScreen('grade-screen')">Change Grade 🎒</button>
        `;
    },

    resetGame: () => {
        app.showScreen('grade-screen');
    }
};

window.onload = app.init;