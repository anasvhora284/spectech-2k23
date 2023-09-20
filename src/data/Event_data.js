import codeomania from "../assets/Images/event-images/code-o-mania.jpg";
import webomaster from "../assets/Images/event-images/web-o-master.jpg";
import robofuriosity from "../assets/Images/event-images/robo-furiosity.jpg";

const Event_data = [
  {
    category: "Computer / IT",
    data: [
      {
        title: "Code - O - Mania",
        description:
          "In this Event We will give you a figma of the webpage you have make in given time.",
        image: codeomania,
        fee:  50 + (50 * 2)/100,
      },
      {
        title: "Web - O - Master",
        description:
          "In this Event We will give you a figma of the webpage you have make in given time.",
        image: webomaster,
        fee:  50 + (50 * 2)/100,
      },
    ],
  },
  {
    category: "Mechanical",
    data: [
      {
        title: "Robo Furiosity",
        description:
          "In this Event We will give you a figma of the webpage you have make in given time.",
        image: robofuriosity,
        fee:  100 + (100 * 2)/100,
      },
    ],
  },
];

export default Event_data;

// title : "Code - O - Mania",
// description : "In this Event We will give you a figma of the webpage you have make in given time.",
// image : codeomania,
// fee : 50,

// title : "Web - O - Master",
// description : "In this Event We will give you a figma of the webpage you have make in given time.",
// image : webomaster,
// fee : 50,

// title : "Robo Furiosity",
// description : "In this Event We will give you a figma of the webpage you have make in given time.",
// image : robofuriosity,
// fee : 100,
