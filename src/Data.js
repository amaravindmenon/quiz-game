const data = [{

        id: 1,
        question: "What are the small pieces of wood on top of the stumps called?",
        answers: [{
                text: "Bails",
                correct: true,
            },
            {
                text: "Sticks",
                correct: false,
            },
            {
                text: "Stumpettes",
                correct: false,
            },
            {
                text: "Toothpicks",
                correct: false,
            },
        ],
    },
    {

        id: 2,
        question: "Where did cricket originate?",
        answers: [{
                text: "France",
                correct: false,
            },
            {
                text: "Norway",
                correct: false,
            },
            {
                text: "England",
                correct: true,
            },
            {
                text: "Spain",
                correct: false,
            },
        ],
    },
    {

        id: 3,
        question: "What does LBW stand for?",
        answers: [{
                text: "Long Ball Wide",
                correct: false,
            },
            {
                text: "Leg Beyond Width",
                correct: false,
            },
            {
                text: "Leg Before Wicket",
                correct: true,
            },
            {
                text: "Lol 'Bout to Win",
                correct: false,
            },
        ],
    },
    {

        id: 4,
        question: "How long do test cricket matches usually go on for?",
        answers: [{
                text: "3 to 5 days",
                correct: true,
            },
            {
                text: "90 minutes",
                correct: false,
            },
            {
                text: "6 hours",
                correct: false,
            },
            {
                text: "Over a week",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        question: "Which of these spices is the smallest in size?",
        answers: [{
                text: "Ajwain",
                correct: true,
            },
            {
                text: "Jeera",
                correct: false,
            },
            {
                text: "Saunf",
                correct: false,
            },
            {
                text: "Methi Seeds",
                correct: false,
            },
        ],
    },
    {

        id: 6,
        question: "Where was the BRICS summit held in 2014?",
        answers: [{
                text: "Brazil",
                correct: true,
            },
            {
                text: "India",
                correct: false,
            },
            {
                text: "Russia",
                correct: false,
            },
            {
                text: "China",
                correct: false,
            },
        ],
    },
    {
        id: 7,
        question: "Which battle in 1757 marked the beginning of British occupation in India?",
        answers: [{
                text: "Plassey",
                correct: true,
            },
            {
                text: "Assaye",
                correct: false,
            },
            {
                text: "Buxar",
                correct: false,
            },
            {
                text: "Cuddalore",
                correct: false,
            },
        ],
    },
    {
        id: 8,
        question: "Which is the second most spoken language of Nepal?",
        answers: [{
                text: "Bajjika",
                correct: false,
            },
            {
                text: "Nepali",
                correct: false,
            },
            {
                text: "Maithili",
                correct: true,
            },
            {
                text: "Bhojpuri",
                correct: false,
            },
        ],
    },
    {
        id: 9,
        question: "In which of these sports is the term ‘free hit’ used?",
        answers: [{
                text: "Football",
                correct: false,
            },
            {
                text: "Tennis",
                correct: false,
            },
            {
                text: "Cricket",
                correct: true,
            },
            {
                text: "Hockey",
                correct: false,
            },
        ],
    },
    {
        id: 10,
        question: "How do you win at cricket?",
        answers: [{
                text: "By scoring the most goals",
                correct: false,
            },
            {
                text: "By losing all your wickets",
                correct: false,
            },
            {
                text: "By scoring the most runs and losing the least wickets",
                correct: true,
            },
            {
                text: "By cheating",
                correct: false,
            },
        ],
    },
    {
        id: 11,
        question: "Effective on may 2014,the European union imposed a temporary ban on the import of which of these fruits from India?",
        answers: [{
                text: "Mango",
                correct: true,
            },
            {
                text: "Banana",
                correct: false,
            },
            {

                text: "Litchi",
                correct: false,
            },
            {

                text: "Pineapple",
                correct: false,
            },
        ],
    },
    {
        id: 12,
        question: "Where did Homi Jehangir Bhaba, the principal architect of India’s nuclear program, die in a plane crash?",
        answers: [{

                text: "Monte Rosa",
                correct: false,
            },
            {

                text: "Mount Ararat",
                correct: false,
            },
            {

                text: "Mount Elbrus",
                correct: false,
            },
            {

                text: "Mont Blanc",
                correct: true,
            },
        ],
    },
    {
        id: 13,
        question: "Whose autobiography is titled ‘Man of Everest’ also published as ‘Tiger of the snows’?",
        answers: [{

                text: "Sir Edmund Hillary",
                correct: false,
            },
            {

                text: "Tenzing Norgay",
                correct: true,
            },
            {

                text: "George Mallory",
                correct: false,
            },
            {

                text: "Major H P S Aluhwalia",
                correct: false,
            },
        ],
    },
    {
        id: 14,
        question: "What is gulab jamun a type of?",
        answers: [{

                text: "A flower",
                correct: false,
            },
            {

                text: "A fruit",
                correct: false,
            },
            {

                text: "A tree",
                correct: false,
            },
            {

                text: "A sweet",
                correct: true,
            },
        ],
    },
    {
        id: 15,
        question: "In the film 2 states, a Punjabi boy falls in love with a ___ girl",
        answers: [{

                text: "Bengali",
                correct: false,
            },
            {

                text: "Marathi",
                correct: false,
            },
            {

                text: "Tamil",
                correct: true,
            },
            {

                text: "Malayali",
                correct: false,
            },
        ],
    },
    {
        id: 16,
        question: "Bahubali festival is related to?",
        answers: [{

                text: "Islam",
                correct: false,
            },
            {

                text: "Hinduism",
                correct: false,
            },
            {

                text: "Buddhism",
                correct: false,
            },
            {

                text: "Jainism",
                correct: true,
            },
        ],
    },
];

const prizeMoney = [
    { id: 1, amount: "₹ 5000" },
    { id: 2, amount: "₹ 15000" },
    { id: 3, amount: "₹ 30000" },
    { id: 4, amount: "₹ 60000" },
    { id: 5, amount: "₹ 100000" },
    { id: 6, amount: "₹ 150000" },
    { id: 7, amount: "₹ 250000" },
    { id: 8, amount: "₹ 400000" },
    { id: 9, amount: "₹ 600000" },
    { id: 10, amount: "₹ 1000000" },
    { id: 11, amount: "₹ 5000000" },
    { id: 12, amount: "₹ 100000000" },
    { id: 13, amount: "₹ 300000000" },
    { id: 14, amount: "₹ 500000000" },
    { id: 15, amount: "₹ 1000000000" },
].reverse();

export { prizeMoney, data };