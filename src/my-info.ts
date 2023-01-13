import type { MyInfo } from './types';

export const myInfo: MyInfo = {
  profile: {
    name: 'Yixuan Yu',
    phone: '(213)400-2279',
    email: 'easianyu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/easianyu',
    github: 'https://github.com/easianyu',
    address: '1178 W 24TH ST, Los Angeles, CA, 90007',
  },

  educations: [
    {
      university: 'University of Southern California',
      major: 'Master of Computer Science',
      address: 'Los Angeles, U.S.',
      duration: 'Aug. 2021 - May 2023',
    },
    {
      university: 'University of Science and Technology Beijing',
      major: 'BEng of Computer Science',
      address: 'Beijing, China',
      duration: 'Aug.2017 - Jun. 2021',
    },
  ],

  skills: [
    {
      skillType: 'Languages',
      skillItems: ['HTML', 'CSS', 'JavaScript ES6', 'TypeScript', 'C++', 'Java', 'C#', 'Python'],
    },
    {
      skillType: 'Frameworks',
      skillItems: [
        'React',
        'React-Redux',
        'Redux-Saga',
        'Next JS',
        'Axios',
        'Sass',
        'React Native',
      ],
    },
    { skillType: 'Database/Tools', skillItems: ['GraphQL', 'MySQL', 'GitHub', 'Linux', 'Shell'] },
  ],

  experiences: [
    {
      company: 'Meituan',
      position: 'Software Development Engineer Intern',
      address: 'Beijing, China',
      duration: 'June. 2022 - Sept. 2022',
      tasks: [
        'Improved the speed of image encoding of #x265# in #C++.# Utilizing #SSE/AVX# and #NEON# instruction set to accelerate the computation in image processing and provide #JavaScript# APIs to generate data packing size, which speeded up the image encoding time by #60%#',
        'Integrated the improved x265 into our #libheif# library, wrote #Shell# scripts on #Linux# to get optimal encoding parameters for converting .jpeg images to .heif version on ^Meituan^ ^App.^ This optimization reduces encoding time by #36%# and compression ratio by 22% compared to the current .webp format version',
        'Applied optimized image format into ^Meituan^ ^App^ using #React# #Native#',
      ],
    },
    // {
    //   company: 'University of Science and Technology Beijing',
    //   position: 'Research Assistant',
    //   address: 'Beijing, China',
    //   duration: 'Sep. 2019 - Jun. 2021',
    //   tasks: [
    //     'Modeling for Degradation of Biomedical Polymer: Designed the phase image feature recognition algorithm to recognize the phase image features, and characteristic “island” structures. Implemented the chain scission model by #Monte# #Carlo# #(MC)# method. Designed the #Boundary# #Extension# #Algorithm# #(NNBE)# to identify features with hole (block) and crack (strip) shapes and utilized these features to establish strength models for different phases.  Published two publications for this research',
    //   ],
    // },
    // {
    //   company: 'Institute of Automation, Chinese Academy of Sciences',
    //   position: 'Research Assistant',
    //   address: 'Beijing, China',
    //   duration: 'Jan. 2019 - Apr. 2019',
    //   tasks: [
    //     'A Flower-Image Search System Based on DL: Implemented the overall design of multi-layer #convolutional# #neural# #networks# and fully connected neural networks using TensorFlow. Optimized the convolutional layers by back-propagation algorithm and applied forward-propagation and back-propagation functions to the fully connected layer. The overall accuracy of the recognition was 95.66%. The project was granted a patent (AU2019100352A4)',
    //   ],
    // },
  ],

  projects: [
    {
      name: 'TikTik: a TikTok like video sharing App based on React',
      duration: 'Dec. 2022 - Jan.2023',
      github: 'https://github.com/easianyu/tiktok-app',
      deploy: 'https://tiktok-app-plum.vercel.app/',
      tasks: [
        'A #TypeScript# React App created by #Next# #JS# where you can share, post, comment and like videos',
        'Integrated #Sanity# under the hood as the backend. Wrote #Graph# #Relational# #Object# #Queries# in the front end to fetch Data and utilized #Axios# to call for GET, POST, PUT method',
        "Used #Zustand# to store users' state. And Customized the #useAuthStore()# #hook# to make managing users' profile, adding and removing likes, and fetching all users more easily",
        'Use #TailwindCSS# to style the components. And the App is fully #responsive# and completely compatible with #mobile# #devices# of different sizes',
      ],
    },
    {
      name: 'Online Shopping Website Based on React',
      duration: 'Nov. 2022 - Dec.2022',
      github: 'https://github.com/easianyu/yixuan-kkshop',
      deploy: 'https://inquisitive-starlight-56e8cb.netlify.app/',
      tasks: [
        'A single Page E-commerce Application using #React# and #React-Router# and #hooks,# coded in #TypeScript.# with #Firebase# as its backend. Users can sign in/out/up, browse various types of clothes and add them to the cart',
        'Applied #Sass# and #Styled-component# ( as a tool to write #CSS# #in# #JS# ) to style the page',
        'Used latest #Redux-toolkit# to store and manage the state of users and products',
        'Added #Redux-saga# and #thunk# into middleware to manage async functions like user login or fetch product and user data from Firebase.',
        '#Encapsulated# input forms and tables as configuration components to simplify future maintainence  improve efficiency',
        'Utilized #React# #SSR,# #dynamic# #router# #loading# and #lazy# #import# to reduce the request time causing the white screen',
        'Integratd #Stripe# to support payment with creidt card',
      ],
    },
    // {
    //   name: 'Mini Unix-Like Kernel Development of an Operating System',
    //   duration: 'Jan. 2022 - May. 2022',
    //   // github: 'https://github.com/easianyu/yixuan-kkshop',
    //   // deploy: 'https://inquisitive-starlight-56e8cb.netlify.app/',
    //   tasks: [
    //     "Implemented #process# #scheduling,# #context# #switch# and #mutex# lock with Banker's Algorithm to avoid deadlock",
    //     'Designed a #virtual# #memory# #management# #system# for processes by implementing page tables to perform virtual address translation. The virtual memory is implemented by a linked list of “mmobj”, which has different kinds of methods based on the type of the “mmobj” (C style polymorphism)',
    //     'Developed a #virtual# #file# #system# which can perform read, write, and delete operations for files',
    //   ],
    // },

    // {
    //   name: 'Game Nirvana (A Unity Based Gravity Game)',
    //   duration: 'Aug. 2022 - Dec.2022',
    //   github: 'https://github.com/XJDKC/CSCI-526',
    //   deploy: 'https://xjdkc.github.io/CSCI-526',
    //   tasks: [
    //     'A game for two players to solve puzzles with gravity change mechanisms based on #Unity# #Game# #Engines.#',
    //     'Designed an algorithm to move and zoom in/out the camera based on the relative position of two players and the ratio of their distance to the length of the camera ',
    //     'Utilized the #physical# #engine# to implement the “Gate” to change the gravity of the players when they collide with it, and the “Enemy” who can move upside down containing animations created in Unity.',
    //   ],
    // },
    {
      name: 'Employee Attendance Management System',
      duration: 'Mar. 2020 - May 2020',
      github: 'https://github.com/easianyu/employee_attendance_system',
      tasks: [
        'Developed a full stack #Web# application based on #MVC# design pattern with #Spring# #Boot# and #MySQL.# Built #DAO,# #Service# and #Servlet# modules in the backend. Constructed the front-end websites using plain #HTML5,# #CSS3,# #jQuery,# and #Ajax# techniques. The system can serve more than #100# #employees# at the same time.',
        'Implemented attendance checking based on #human# #face# #identification,# access through API from Baidu AI ',
        'Utilized #Apache# #Commons# #Fileupload# component and #XSSF-Workbook# to import attendance instances from local files and export data to local files. Designed a #Hash# #algorithm# to randomize file names to prevent duplicate names.',
      ],
    },
  ],
  patents: [
    'Tan, Y., Wu, J., Yang Y., Duan, Z., Liang J., #Yu,# #Yixuan.,# Innovation Patent: A Flower-Image Search System Based on Deep Learning, #AU2019100352A4#',
  ],
};
