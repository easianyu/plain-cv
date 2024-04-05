import { Experiences } from './types'

export const experienceInfo: Experiences = {
  experienceList: [
    {
      hidden: false,
      company: 'Nexus Point Group',
      position: 'Software Engineer',
      address: 'Alhambra, California',
      duration: 'April. 2024 - Now',
      taskList: [
        'Developing and maintaining #Multi-Tenant# Meta-Trade customer management system using #.NET# #Core# and #Entity# #Framework# #Core# with #PostgreSQL# as the database',
        'Utilizing #AWS# #SQS# to manage latest meta-trades and organizing leveled queues to handle trades for different purposes',
        'Designing Algorithms to calculate the rebates from the trades in #AWS# #Queue# and the commissions for the brokers',
      ],
    },
    {
      hidden: false,
      company: 'Cascadia Capital Corp',
      position: 'Full-Stack Software Engineer',
      address: 'Alhambra, California',
      duration: 'June. 2023 - April. 2024',
      taskList: [
        'Engineered a #Multi-Tenant# system using #.NET# #Core,# using #Duende# #IdentityServer# to integrate #OAuth# for secure authentication and #JWT# for stateless authorization, significantly enhancing system security and scalability.',
        'Created new #RESTful# #APIs# with .NET Core #MVC# to completely replace legacy system to #PostgreSQL.#',
        'Built a multi-level user system using #PATH# design and utilized #Redis# to cache level infos, which significantly boosted the level query speed by #150%# compared to legacy system who used single table to record level info.',
        'Utilized #Hangfire# to schedule tasks without blocking the main thread, which improved the performance by #30%.#',
        'Used #AWS# #CloudWatch# to monitor the system and #AWS# #S3# to store the logs and user files making it easier to debug and maintain the system.',
        'Developed a comprehensive #Vue3# + #TypeScript# web app with #Vite,# boosting user retention by 20% through a more intuitive and responsive user interface.',
        'Crafted an intuitive and #responsive# user interface employing #Bootstrap# and #Element-Plus,# focusing on usability principles to deliver a superior user experience across various devices and screen sizes',
      ],
    },
    {
      hidden: false,
      company: 'Meituan',
      position: 'Software Development Engineer Intern',
      address: 'Beijing',
      duration: 'June. 2022 - Sept. 2022',
      taskList: [
        'Improved the speed of image encoding of #x265# in #C++.# Utilizing #SSE/AVX# and #NEON# instruction set to accelerate the computation in image processing and provide #JavaScript# APIs to generate data packing size, which speeded up the image encoding time by #60%#',
        'Integrated the improved x265 into our #libheif# library, wrote #Shell# scripts on #Linux# to get optimal encoding parameters for converting .jpeg images to .heif version on ^Meituan^ ^App.^ This optimization reduces encoding time by #36%# and compression ratio by 22% compared to the current .webp format version',
        // 'Applied optimized image format into ^Meituan^ ^App^ using #React# #Native#',
      ],
    },
    {
      hidden: true,
      company: 'University of Science and Technology Beijing',
      position: 'Research Assistant',
      address: 'Beijing',
      duration: 'Sep. 2019 - Jun. 2021',
      taskList: [
        'Modeling for Degradation of Biomedical Polymer: Designed the phase image feature recognition algorithm to recognize the phase image features, and characteristic “island” structures. Implemented the chain scission model by #Monte# #Carlo# #(MC)# method. Designed the #Boundary# #Extension# #Algorithm# #(NNBE)# to identify features with hole (block) and crack (strip) shapes and utilized these features to establish strength models for different phases.  Published two publications for this research',
      ],
    },
    {
      hidden: true,
      company: 'Institute of Automation, Chinese Academy of Sciences',
      position: 'Research Assistant',
      address: 'Beijing',
      duration: 'Jan. 2019 - Apr. 2019',
      taskList: [
        'A Flower-Image Search System Based on DL: Implemented the overall design of multi-layer #convolutional# #neural# #networks# and fully connected neural networks using TensorFlow. Optimized the convolutional layers by back-propagation algorithm and applied forward-propagation and back-propagation functions to the fully connected layer. The overall accuracy of the recognition was 95.66%. The project was granted a patent (AU2019100352A4)',
      ],
    },
  ],
}
