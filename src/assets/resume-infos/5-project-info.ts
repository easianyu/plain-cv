import { Projects } from './types';

export const projectInfo: Projects = {
  projectList: [
    {
      hidden: false,
      name: 'TikTik: a TikTok like video sharing App based on React',
      duration: 'Dec. 2022 - Jan.2023',
      githubLink: 'https://github.com/easianyu/tiktok-app',
      deployLink: 'https://tiktok-app-plum.vercel.app/',
      taskList: [
        'A #TypeScript# React App created by #Next# #JS# where you can share, post, comment and like videos',
        'Integrated #Sanity# under the hood as the backend. Wrote #Graph# #Relational# #Object# #Queries# in the front end to fetch Data and utilized #Axios# to call for GET, POST, PUT method',
        "Used #Zustand# to store users' state. And Customized the #useAuthStore()# #hook# to make managing users' profile, adding and removing likes, and fetching all users more easily",
        'Use #TailwindCSS# to style the components. And the App is fully #responsive# and completely compatible with #mobile# #devices# of different sizes',
      ],
    },
    {
      hidden: false,
      name: 'Online Shopping Website Based on React',
      duration: 'Nov. 2022 - Dec.2022',
      githubLink: 'https://github.com/easianyu/yixuan-kkshop',
      deployLink: 'https://inquisitive-starlight-56e8cb.netlify.app/',
      taskList: [
        'A single Page E-commerce Application using #React# and #React-Router# and #hooks,# coded in #TypeScript.# with #Firebase# as its backend. Users can sign in/out/up, browse various types of clothes and add them to the cart',
        'Applied #Sass# and #Styled-component# ( as a tool to write #CSS# #in# #JS# ) to style the page',
        'Used latest #Redux-toolkit# to store and manage the state of users and products',
        'Added #Redux-saga# and #thunk# into middleware to manage async functions like user login or fetch product and user data from Firebase.',
        '#Encapsulated# input forms and tables as configuration components to simplify future maintenance  improve efficiency',
        'Utilized #React# #SSR,# #dynamic# #router# #loading# and #lazy# #import# to reduce the request time causing the white screen',
        'Integrated #Stripe# to support payment with credit card',
      ],
    },
    {
      hidden: true,
      name: 'Mini Unix-Like Kernel Development of an Operating System',
      duration: 'Jan. 2022 - May. 2022',
      taskList: [
        "Implemented #process# #scheduling,# #context# #switch# and #mutex# lock with Banker's Algorithm to avoid deadlock",
        'Designed a #virtual# #memory# #management# #system# for processes by implementing page tables to perform virtual address translation. The virtual memory is implemented by a linked list of “mmobj”, which has different kinds of methods based on the type of the “mmobj” (C style polymorphism)',
        'Developed a #virtual# #file# #system# which can perform read, write, and delete operations for files',
      ],
    },

    {
      hidden: true,
      name: 'Game Nirvana (A Unity Based Gravity Game)',
      duration: 'Aug. 2022 - Dec.2022',
      githubLink: 'https://github.com/XJDKC/CSCI-526',
      deployLink: 'https://xjdkc.github.io/CSCI-526',
      taskList: [
        'A game for two players to solve puzzles with gravity change mechanisms based on #Unity# #Game# #Engines.#',
        'Designed an algorithm to move and zoom in/out the camera based on the relative position of two players and the ratio of their distance to the length of the camera ',
        'Utilized the #physical# #engine# to implement the “Gate” to change the gravity of the players when they collide with it, and the “Enemy” who can move upside down containing animations created in Unity.',
      ],
    },
    {
      hidden: false,
      name: 'Employee Attendance Management System',
      duration: 'Mar. 2020 - May 2020',
      githubLink: 'https://github.com/easianyu/employee_attendance_system',
      taskList: [
        'Developed a full stack #Web# application based on #MVC# design pattern with #Spring# #Boot# and #MySQL.# Built #DAO,# #Service# and #Servlet# modules in the backend. Constructed the front-end websites using plain #HTML5,# #CSS3,# #jQuery,# and #Ajax# techniques. The system can serve more than #100# #employees# at the same time.',
        'Implemented attendance checking based on #human# #face# #identification,# access through API from Baidu AI ',
        'Utilized #Apache# #Commons# #Fileupload# component and #XSSF-Workbook# to import attendance instances from local files and export data to local files. Designed a #Hash# #algorithm# to randomize file names to prevent duplicate names.',
      ],
    },
    {
      hidden: false,
      name: 'A CPU Design Based on MIPS Instruction Set',
      duration: 'Mar. 2019 - May 2019',
      taskList: [
        'Independently implemented the CPU with 5-level pipelining through Verilog and FPGA experiment box',
        'Used Xilinx to simulate and verify the output of pipelines and detected data collisions',
        'Designed a data orientation function to solve the problem of data collision',
      ],
    },
    {
      hidden: false,
      name: "Easian's CSS Hub: Arts and Animations of CSS Works",
      duration: 'Dec. 2022 - Present',
      githubLink: 'https://github.com/easianyu/css-hub',
      deployLink: 'https://easianyu.github.io/css-hub/',
      taskList: [
        'Designed a website to exhibit various colorful and creative #CSS# works and their implementations. #Still# #updating# now!',
      ],
    },
  ],
};
// https://easianyu.github.io/css-hub/
// A CPU Design Based on MIPS Instruction Set	Jun. 2019
// Independently implemented the CPU with 5-level pipelining through Verilog and FPGA experiment box
// Used Xilinx to simulate and verify the output of pipelines and detected data collisions
// Designed a data orientation function to solve the problem of data collision
