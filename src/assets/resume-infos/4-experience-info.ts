import { Experiences } from './types';

export const experienceInfo: Experiences = {
  experienceList: [
    {
      hidden: false,
      company: 'Meituan',
      position: 'Software Development Engineer Intern',
      address: 'Beijing, China',
      duration: 'June. 2022 - Sept. 2022',
      taskList: [
        'Improved the speed of image encoding of #x265# in #C++.# Utilizing #SSE/AVX# and #NEON# instruction set to accelerate the computation in image processing and provide #JavaScript# APIs to generate data packing size, which speeded up the image encoding time by #60%#',
        'Integrated the improved x265 into our #libheif# library, wrote #Shell# scripts on #Linux# to get optimal encoding parameters for converting .jpeg images to .heif version on ^Meituan^ ^App.^ This optimization reduces encoding time by #36%# and compression ratio by 22% compared to the current .webp format version',
        'Applied optimized image format into ^Meituan^ ^App^ using #React# #Native#',
      ],
    },
    {
      hidden: true,
      company: 'University of Science and Technology Beijing',
      position: 'Research Assistant',
      address: 'Beijing, China',
      duration: 'Sep. 2019 - Jun. 2021',
      taskList: [
        'Modeling for Degradation of Biomedical Polymer: Designed the phase image feature recognition algorithm to recognize the phase image features, and characteristic “island” structures. Implemented the chain scission model by #Monte# #Carlo# #(MC)# method. Designed the #Boundary# #Extension# #Algorithm# #(NNBE)# to identify features with hole (block) and crack (strip) shapes and utilized these features to establish strength models for different phases.  Published two publications for this research',
      ],
    },
    {
      hidden: true,
      company: 'Institute of Automation, Chinese Academy of Sciences',
      position: 'Research Assistant',
      address: 'Beijing, China',
      duration: 'Jan. 2019 - Apr. 2019',
      taskList: [
        'A Flower-Image Search System Based on DL: Implemented the overall design of multi-layer #convolutional# #neural# #networks# and fully connected neural networks using TensorFlow. Optimized the convolutional layers by back-propagation algorithm and applied forward-propagation and back-propagation functions to the fully connected layer. The overall accuracy of the recognition was 95.66%. The project was granted a patent (AU2019100352A4)',
      ],
    },
  ],
};
