import {
  Code,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Storage, Cloud, FilterFrames, Language
} from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Skills",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Quotes",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "WELCOME I'M",
    name: "RAVINDRAN ABILASH",
    post: "WEB DEVELOPER",
    design: "BLOG WRITER",
    desc: "Intermediate at - ReactJs,Node,Express and MongoDb. Love to play Volleyball Undergraduate. @University Of Peradeniya",
  },
]
export const about = [
  {
    desc: "I am currently doing my undergraduate degree under computing department of Faculty of engineering, University of Peradeniya.\n" +
        "                        I am a passionate tech enthuasist and currently i engaged myself with some web based projects.\n" +
        "                        I also got interest to develop apps and website through full stack web development using latest technologies.\n" +
        "                        I hope to learn machine learning and passionate to join some AI project researches in near future.",
    desc1: "I love photography and editing which always keeps me refreshed.\n" +
        "                        And also I am too much addicted with travelling which makes me to explore the world and sometimes myself.\n" +
        "                        I am good at playing volley ball which keeps me physically strong.",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Code />,
    title: "Programming languages:",
    desc: "C",
    desc1: "Java",
    desc2: "Python",
  },
  {
    id: 2,
    icon: <PhoneIphone />,
    title: "Mobile Dev:",
    desc: "Flutter",
    desc1: "React Native",
    desc2: "",
  },
  {
    id: 3,
    icon: <Storage />,
    title: "Databases:",
    desc: "MongoDB",
    desc1: "MySQL",
    desc2: "",
  },
  {
    id: 4,
    icon: <Cloud />,
    title: "Clouds:",
    desc: "HeroKu",
    desc1: "",
    desc2: "",
  },
  {
    id: 5,
    icon: <FilterFrames />,
    title: "Frameworks & libraries:",
    desc: "Node.js",
    desc1: "ReactJS",
    desc2: "Express.js",
  },
  {
    id: 6,
    icon: <Language />,
    title: "Web Development:",
    desc: "HTML",
    desc1: "CSS",
    desc2: "WordPress",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port3.png",
    name: "This is a child education web app. I have created the front end of this website.",
    category: "Web App",
    title: "Smarties",
    Technologies:"ReactJs & CSS",
    demo:"https://github.com/RavindranAbilash/Smarties",
    code:"https://github.com/RavindranAbilash/Smarties"
  },
  {
    id: 2,
    cover: "../images/port/port5.png",
    name: "\"SnaT - Meal Tracking\" is a mobile app, developed with the\n" +
        "collaboration of a Food Science Research Team from\n" +
        "Wayamba University.",
    category: "Mobile App",
    title: "\"SnaT\" - Meal Tracking app",
    Technologies:"Flutter , Firebase & Firestore",
    demo:"https://github.com/cepdnaclk/SnaT-meal-tracking-app",
    code:"https://github.com/cepdnaclk/SnaT-meal-tracking-app"
  },
  {
    id: 3,
    cover: "../images/port/port1.png",
    name: "This is a simple portfolio website.",
    category: "Web App",
    title: "My Personal website",
    Technologies:"ReactJs, Node.js, Express.js, MongoDB & CSS",
    demo:"https://github.com/RavindranAbilash/protfolio",
    code:"https://github.com/RavindranAbilash/protfolio"
  },
  {
    id: 4,
    cover: "../images/port/port4.png",
    name: "This is an android application to bid for cryptocurrency in the market.",
    category: "Mobile App",
    title: "Cryptocurrency Auction",
    Technologies:"Java , Firebase & Firestore",
    demo:"https://github.com/Hari25483/CO225_Project",
    code:"https://github.com/Hari25483/CO225_Project"
  },
  {
    id: 5,
    cover: "../images/port/port2.png",
    name: "This is a blog website",
    category: "Web App",
    title: "Blog Website",
    Technologies:"MERN Stack",
    demo:"https://github.com/RavindranAbilash/Blog",
    code:"https://github.com/RavindranAbilash/Blog"
  },

]
export const testimonials = [
  {
    id: 1,
    text: "“You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”",
    image: "./images/testimonials/team-1.jpeg",
    name: "Steve Jobs ",
    post: "American entrepreneur",
  },
  {
    id: 2,
    text: "I really had a lot of dreams when I was a kid, and I think a great deal of that grew out of the fact that I had a chance to read a lot.\n" ,
    image: "./images/testimonials/team-2.jpeg",
    name: "Bill Gates",
    post: "American business magnate",
  },
  {
    id: 3,
    text: "Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.\n" ,
    image: "./images/testimonials/team-3.jpeg",
    name: "A. P. J. Abdul Kalam",
    post: "Aerospace Scientist",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Matale,Sri Lanka",
    text2: " ",
  },
  {
    icon: <PhoneIphone />,
    text1: "0094 76 76 42021",
    text2: " ",
  },
  {
    icon: <EmailOutlined />,
    text1: "abilashravindran08@gmail.com",
    text2: " ",
  },
]
export const social = [
  {
    icon: <Facebook />,
    link:"https://fb.com/ravindran.abilash.7"
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com/abilash15567496"
  },
  {
    icon: <Instagram />,
    link:"https://instagram.com/abi_ilash08"
  },
  {
    icon: <YouTube />,
    link:"https://www.youtube.com/channel/UCvRs9LAHbvQmx7ZH2C3mPrw"
  },
]
