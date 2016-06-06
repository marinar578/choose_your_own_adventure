// module.exports = [
//   {
//     "id": 1,
//     "image": "http://some-image.jpg",
//     "text": "Descriptive text...",
//     "options": [
//       { "label": "Do something", "to": 2 },
//       { "label": "Do something else", "to": 3 },
//     ]
//   }
// ];

module.exports = [
    {
        "id": 1,
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Thorn_Tree_Sossusvlei_Namib_Desert_Namibia_Luca_Galuzzi_2004a.JPG",
        "text": "You have awoken in the desert. You have no idea where you are or why you are here. There is nothing else to do but start walking, so you being. \n",
        "options": [
            {"label": "Go straight, into the desert", "to": 2},
            {"label": "Sit down", "to": 10}
        ]

    },
    {
        "id": 2,
        "image": "https://unsplash.com/photos/G74n9VZ5ves",
        "text": "You've managed to find a stone structure. It could possibly  be shelter from the sweltering sun. \n",
        "options": [
            {"label": "Walk to the stone structure", "to": 3},
            {"label": "Sit down and give up", "to": 10}
        ]

    },
    {
        "id": 3,
        "image": "https://unsplash.com/photos/HJ33Vyevx6E",
        "text": "You wander around the stone strucutre. Hoping to find a way inside. It's getting hotter as the day goes on....\n",
        "options": [
            {"label": "Keep walking to find an entrance", "to": 4},
            {"label": "Go back where you started", "to": 11}
        ]
    },
    {
        "id": 4,
        "image": "https://unsplash.com/photos/v0bNMwWDUcA",
        "text": "You did it! You found an entrance! It's beautiful and tunnels downward. You don't know what lies below but it's still getting hotter outside.....\n",
        "options": [
            {"label": "Go down deeper", "to": 5},
            {"label": "Keep looking for a more shallow cave", "to": 6}
        ]
    },
    {
        "id": 5,
        "image": "https://unsplash.com/photos/9njCyLeVrwY",
        "text": "The tunnel seems to never end! Should you continue on....you're getting thirsty.....\n",
        "options": [
            {"label": "Go down deeper", "to": 6},
            {"label": "Return to the surface", "to": 11}
        ]
    },
    {
        "id": 6,
        "image": "https://unsplash.com/photos/s7eK-pYV-1c",
        "text": "You had noticed it getting colder...but you kept on going....now you have found yourself in an ice cave. You're wearing shorts and and t-shirt and now you are starting to freeze....\n",
        "options": [
            {"label": "Continue on..but you'll need to find warmth soon...", "to": 7},
            {"label": "Return to the surface", "to": 11}
        ]
    },
    {
        "id": 7,
        "image": "https://unsplash.com/photos/cEpQp5Foev4",
        "text": "Your efforts have paid off! You continued on and you eventually reach the end of the cave! A boat rocks tethered to the rocks... your body is returning to a normal temperature....\n",
        "options": [
            {"label": "Jump in the boat and return to freedom", "to": 8},
            {"label": "Decide to rest here for awhile", "to": 9}
        ]
    },
    {
        "id": 8,
        "image": "https://unsplash.com/photos/VTcWhMomXj8",
        "text": "Just as you begin to paddle out a wave comes roaring into the cave capsizing your boat.....you drown. GAME OVER \n",
    },
    {
        "id": 9,
        "image": "https://unsplash.com/photos/4DnlaN-P2wA",
        "text": "Your patience has paid off! A helicopter flying over head spots you and comes down to pick you up. You made it. You survived. GAME OVER \n",
    },
    {
        "id": 10,
        "image": "https://unsplash.com/photos/mwhklqGVzck",
        "text": "It's starting to get dark, the temperature is droping...you can barely stay awake ...... you eventually will die from hypothermia. GAME OVER \n",
    },
    {
        "id": 11,
        "image": "https://unsplash.com/photos/nivUcf9H3PI",
        "text": "You are lost. There is no hope. You can't remember where you started. You are getting dehydrated. You are starting to black out.... GAME OVER \n",
    },
    {
        "id": 12,
        "image": "https://unsplash.com/photos/nivUcf9H3PI",
        "text": "You are lost. There is no hope. You can't remember where you started. You are getting dehydrated. You are starting to black out.... GAME OVER \n",
    }
];