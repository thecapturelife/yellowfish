import React from 'react'
import sign1 from '@/app/assets/Group 19.png';
import sign2 from '@/app/assets/button1.png';
import sign3 from '@/app/assets/Path.png';
import sign4 from '@/app/assets/Group48.png'
import sign5 from '@/app/assets/Group 16.png';
import sign6 from '@/app/assets/Group 18.png';
import sign7 from '@/app/assets/Group 17.png';
import Image from 'next/image'


const Main = () => {
  return (
    <>
      <div className='flex'> 
        <div className='w-1/2 h-screen  py-60'>
          <div className='flex'>
            <div className='w-[37rem]  h-48 ml-14'>
                <h1 className='text-6xl font-bold mt-8'>We make it the way your&nbsp; 
                    <span className=' text-customPurple'>child</span>&nbsp;loves it </h1>
            </div>
            <div className='w-[9rem]  h-48'>
                 <Image 
                 src={sign1}
                 alt='sign1'
                 className='mt-7 -ml-8 transition-transform duration-300 ease-in-out hover:scale-110 '
                 />
            </div>
          </div>
          <div className=' ml-14 mt-5 h-20'>
            <p className='text-xl'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br/>
            amet sint. Velit officia consequat duis </p>
          </div>
          <div className='items-center ml-14 mt-1 h-12 w-96 flex'>
              <div className='relative flex items-center'>
                   <Image
                      src={sign2}
                      alt='sign2'
                      className='h-11 w-11 '
                    />
                   <Image 
                      src={sign3}
                      alt='sign3'
                      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
                      style={{ width: '33%', height: '43%' }}
                    />
             </div>
             <h2 className='ml-5 text-customPurple text-xl font-semibold hover:text-customYellow transition duration-300 ease-in-out'> Discover now </h2>
         </div>

        </div>
             <div className='w-1/2 h-screen  flex'>
                  <div className=' w-[15rem] ml-24 h-screen'>
                    <div className=' h-48 flex justify-end'>
                       <div className='relative w-24 h-20 mt-24'>

                          <div className='absolute bottom-0 right-0 w-14 h-14 bg-customYellow1 rounded-tl-full'></div>
                        </div>

                    </div>
                    <div className='bg-blue-700 h-64 py-8 text-white transition-transform duration-300 ease-in-out  hover:shadow-lg transform hover:scale-105'>
                        <Image 
                        src={sign5}
                        alt='sign5'
                        className='ml-6 '
                        />
                        <h2 className='ml-6 mt-5 font-bold opacity-80 '>Guidance</h2>
                        <p className='ml-6 mt-2 font-semibold opacity-80'>Amet minim mollit non <br/>
                                                                      deserunt ullamco est sit <br/>
                                                                      aliqua dolor do amet sint.<br/>
                                                                      Velit officia consequat <br/>
                                                                      duis enim velit mollit. </p>
                    </div>
                    <div className='h-56 flex-row'>
                        <Image 
                        src={sign4}
                        alt='sign4'
                        className='ml-36'
                        />
                    </div>
                  </div>
                  <div>
                  <div className='bg-customGreen ml-16 h-64 w-96 mt-16 transition-transform duration-300 ease-in-out  hover:shadow-lg transform hover:scale-105'>
                    <Image
                    src={sign6}
                    alt='sign6'
                    className='ml-8 py-3'
                    />
                    <h2 className='ml-6 font-bold opacity-80 text-white'>Exploring skills</h2>
                    <p className='ml-6 text-white opacity-80 '>Amet minim mollit non deserunt <br/>
                    ullamco est sit aliqua dolor do <br/>
                    amet sint. Velit officia consequat <br/>
                    duis enim velit mollit.<br/> 
                    Amet minim mollit non deserunt <br/>
                    ullamco est sit aliqua dolor do <br/>
                     </p>
                  </div>
                  <div className=' mt-8 ml-16 flex h-[22rem] '>
                    <div className='bg-black w-72 transition-transform duration-300 ease-in-out  hover:shadow-lg transform hover:scale-105'>
                        <Image
                        src={sign7}
                        alt='sign7'
                        className='ml-8 mt-9'
                        />
                        <h1 className='ml-8 mt-2 text-white font-bold'>Decision making</h1>
                        <p className='ml-8 mt-4 text-white'>Amet minim mollit non <br/>
                        deserunt ullamco est sit <br/>
                        aliqua dolor do amet sint. <br/>
                        Velit officia consequat <br/>
                        duis enim velit mollit. </p>
                    </div>
                    <div className='bg-sky-700 h-20 w-16 ml-8 relative'>
                         <div className='absolute top-0 left-0 h-14 bg-customPurple w-14 rounded-tl-full ml-2'></div>
                    </div>

                  </div>
                </div>
             </div>
      </div>
    </>
  )
}

export default Main




// import React from 'react';
// import sign1 from '@/app/assets/Group 19.png';
// import sign2 from '@/app/assets/button1.png';
// import sign3 from '@/app/assets/Path.png';
// import sign4 from '@/app/assets/Group48.png';
// import sign5 from '@/app/assets/Group 16.png';
// import sign6 from '@/app/assets/Group 18.png';
// import sign7 from '@/app/assets/Group 17.png';
// import Image from 'next/image';

// const Main = () => {
//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 py-10 md:py-60">
//         <div className="flex flex-col md:flex-row">
//           <div className="w-full md:w-[37rem] h-auto md:h-48 ml-4 md:ml-14">
//             <h1 className="text-4xl md:text-6xl font-bold mt-8">
//               We make it the way your&nbsp;
//               <span className="text-customPurple">child</span>&nbsp;loves it
//             </h1>
//           </div>
//           <div className="w-1/2 md:w-[9rem] h-auto md:h-48">
//             <Image src={sign1} alt="sign1" className="mt-7 -ml-8" />
//           </div>
//         </div>
//         <div className="ml-4 md:ml-14 mt-5 h-20">
//           <p className="text-lg md:text-xl">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
//             amet sint. Velit officia consequat duis.
//           </p>
//         </div>
//         <div className="items-center ml-4 md:ml-14 mt-1 h-12 w-96 flex">
//           <div className="relative flex items-center">
//             <Image src={sign2} alt="sign2" className="h-11 w-11" />
//             <Image
//               src={sign3}
//               alt="sign3"
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               style={{ width: '33%', height: '43%' }}
//             />
//           </div>
//           <h2 className="ml-5 text-customPurple text-lg md:text-xl font-semibold hover:text-customYellow transition duration-300 ease-in-out">
//             Discover now
//           </h2>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 flex flex-col">
//         <div className="w-full h-auto md:w-[15rem] ml-4 md:ml-24 mt-4 md:mt-0">
//           <div className="h-auto md:h-48 flex justify-end">
//             <div className="relative w-24 h-20 mt-8 md:mt-24">
//               <div className="absolute bottom-0 right-0 w-14 h-14 bg-customYellow1 rounded-tl-full"></div>
//             </div>
//           </div>
//           <div className="bg-blue-700 h-64 py-8 text-white transition-transform duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg hover:scale-105">
//             <Image src={sign5} alt="sign5" className="ml-6" />
//             <h2 className="ml-6 mt-5 font-bold opacity-80">Guidance</h2>
//             <p className="ml-6 mt-2 font-semibold opacity-80">
//               Amet minim mollit non <br />
//               deserunt ullamco est sit <br />
//               aliqua dolor do amet sint.<br />
//               Velit officia consequat <br />
//               duis enim velit mollit.
//             </p>
//           </div>
//           <div className="h-56 flex-row">
//             <Image src={sign4} alt="sign4" className="ml-36" />
//           </div>
//         </div>
//         <div className="mt-8 flex flex-col md:flex-row">
//           <div className="bg-customGreen ml-4 md:ml-16 h-auto md:h-64 w-full md:w-96 mt-4 md:mt-16">
//             <Image src={sign6} alt="sign6" className="ml-8 py-3" />
//             <h2 className="ml-6 font-bold opacity-80 text-white">Exploring skills</h2>
//             <p className="ml-6 text-white opacity-80">
//               Amet minim mollit non deserunt <br />
//               ullamco est sit aliqua dolor do <br />
//               amet sint. Velit officia consequat <br />
//               duis enim velit mollit.<br />
//               Amet minim mollit non deserunt <br />
//               ullamco est sit aliqua dolor do <br />
//             </p>
//           </div>
//           <div className="mt-8 md:mt-0 ml-4 md:ml-8 flex h-auto md:h-[22rem] w-full md:w-[28rem]">
//             <div className="bg-black w-full h-full flex flex-col p-4">
//               <Image src={sign7} alt="sign7" className="ml-8 mt-2" />
//               <h1 className="text-white font-bold">Decision making</h1>
//               <p className="mt-4 text-white">
//                 Amet minim mollit non <br />
//                 deserunt ullamco est sit <br />
//                 aliqua dolor do amet sint. <br />
//                 Velit officia consequat <br />
//                 duis enim velit mollit.
//               </p>
//             </div>
//             <div className="bg-sky-700 h-20 w-16 ml-8 relative">
//               <div className="absolute top-0 left-0 bg-customPurple w-8 h-8 rounded-tl-full"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
