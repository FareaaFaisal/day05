'use client';
import Image from 'next/image';
import Link from 'next/link';
import CommentBox from '../components/Comment';

export default function DeatilsPage() {
    return(
        <>
        <div className="min-w-full overflow-hidden">
    {/* Header section */}
    <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
        src="/unsplash_4ycv3Ky1ZZU.png"
        alt="Banner Image"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-[350px] relative z-50 h-full  max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
          Blog Details
        </h2>
        <div className="flex items-center space-x-2 text-white">
          <Link href="/" className="text-white">Home</Link>
          <span className="text-white"> &gt; </span>
          <Link href="/menu" className="text-orange-500">Blog Details</Link>
        </div>
      </div>
    </div>
</div>

<div className='w-full h-[3800px] top-0 bg-white flex  gap-6'>
    <div className='w-[872px] h-[980px] pt-[130px] mx-[10px]  bg-white'>

        {/* First Image */}
        <Image 
        src='/details1.png'
        alt=''
        width={871}
        height={520}
        className='mt-10 mr-5 ml-5'
        />
        <div className='flex mt-3'>
            <Image 
            src='/Calendar.svg'
            alt=''
            width={23.97}
            height={24}
            className='cursor-pointer mr-5 ml-5'
            />
            <p> Feb 14, 2022 / </p>
            <Image 
            src='/messages.svg'
            alt=''
            width={23.97}
            height={24}
            className='cursor-pointer mr-5 ml-5'
            />
            <p> 3 / </p>
               <Image 
            src='/admin.svg'
            alt=''
            width={23.97}
            height={24}
            className='cursor-pointer'
            />
            <p> Admin </p>
        </div>
        <div className='pl-[20px]'>
        <h1 className='font-bold text-4xl w-[504px] h-8 bg-white py-[46px] text-[#333333] mb-10'>10 Reasons To Do A Digital Detox challenge</h1>
        <p className='w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <p className='w-[647.26px] h-[96px] py-[40px] bg-white mt-10'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        
     
        </div>

        <div className='py-[40px] bg-[#FF9F0D] mt-20 flex flex-row h-[176px] w-[853px] p-6 ml-[20px]'>
        <Image 
            src='/Quotes.png'
            alt=''
            width={48}
            height={48}
            className='ml-20 mt-[-15px]'
            />
        <p className=' w-[647.26px] h-[96px] font-bold text-2xl text-white ml-[20px]'>Lorem eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet et ut aliquyam </p>
        
        </div>
       

        <p className='w-[853px] h-[120px] left-0 text-[#4F4F4F] mt-[36px] ml-[20px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            {/* paragraph + Image div */}

            <div className='w-[853px] flex h-[420px] mt-[60px]'>
                {/* paragraph div */}
                <div className='w-[420px] h-[236px] text-[#4F4F4F] ml-[20px] gap-3'>
                   <p className='w-[420px] gap-2 h-[236px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                   <p className='w-[420px] h-[168px] mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing </p>
                </div>

                {/* Image div */}
                <div className='ml-4 w-[424px] h-[366px]'>
                    <Image 
                    src='/ramen.png'
                    alt=''
                    width={424}
                    height={366}
                    />
                </div>
            </div>
            <p className='w-[872px] h-[120px] mt-20 ml-[20px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p className='w-[872px] h-[120px] mt-[50px] ml-[20px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>  
            <Link href={"https://www.facebook.com/"}>
            <Image 
            src='/Share.png'
            alt=''
            width={872}
            height={60}
            className='mt-10 ml-[20px] mb-20'
            /></Link>
            

            {/* Comment Section */}

            {/* <div className='w-[872px] h-[472px] mt-10 ml-[20px]'>
                <h1 className='text-2xl font-bold'>Comments - 03</h1>
                <div className='w-[872px] h-[472px] mt-10'>
                    <Image 
                    src='/comment1.svg'
                    alt=''
                    width={872}
                    height={112}
                    className='cursor-pointer'
                    />

                    <Image 
                    src='/comment2.png'
                    alt=''
                    width={672}
                    height={112}
                    className='ml-[200px] mt-5 cursor-pointer'
                    />
 
                   <Image 
                    src='/comment3.png'
                    alt=''
                    width={872}
                    height={112}
                    className='cursor-pointer mt-5'
                    />
                </div>
            </div> */}
             
               {/* Post a comment */}
            
            {/* <div className='w-[872px] h-[424px] mt-5  ml-[20px]'>
                <h1 className='text-xl border-b-[1px] h-10 border-[#E0E0E0] font-bold'>Post a Comment</h1>
                <div className='w-[872px] mt-5 flex h-[80px]'>
                    <input 
                    placeholder='Name'
                    type='name'
                    className='w-[424px] text-lg text-[#4F4F4F] font-semibold border-[1px] px-3 border-[#E0E0E0] h-[56px]'
                    />

                   <input 
                    placeholder='Email'
                    type='email'
                    className='w-[424px] text-lg text-[#4F4F4F] border-[1px] font-semibold px-3 ml-3 border-[#E0E0E0] h-[56px]'
                    />
                </div>
                <input 
                placeholder='Write a Comment'
                type='text'
                className='leading-[24px] text-top h-[244px] w-[872px] text-lg text-[#4F4F4F] border-[1px] font-semibold px-3 border-[#E0E0E0]'
                />

                <button className='w-[212px] h-[56px] ease-in-out duration-500 bg-[#FF9F0D] hover:bg-[#ffff] hover:text-[#4F4F4F] text-white mt-10'>Post a Comment</button>

            </div> */}
            <CommentBox/>
           
    </div>


    <div className='w-[424px] mt-[130px] h-[2501px]'>
        {/* Right div */}
        <div className='flex justify-center mt-8 w-[421.82px] border-1 h-[70px]'>

            <input 
            placeholder='Search Your Keyword Here'
            type="text"
            className='w-[350px] px-3 py-3 bg-zinc-100 border-lg border-gray-300 '
            />
            <button className='w-[76px] h-[69px] cursor-pointer justify-center bg-[#FF9F0D]'>     
           <Image 
            src='/Group (2).svg'
            alt='search icon'
            width={24}
            height={24}
            className='ml-6'
            />
            </button>

            

            </div>

            <Image 
            src='rw.svg'
            alt=''
            width={424}
            height={423}
            className='mt-5'
            />
            <div className='justify-center mt-8 w-[423px] h-[592px] border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] font-bold h-[28px] py-5 px-8'>Recent Posts</h1>
            
               <Image 
               src='/Recent post.png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/Recent post (1).png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/Recent post (2).png'
               alt=''
               width={323}
               height={107}
               className='cursor-pointer mt-5 ml-8 '
               />

               
               <Image 
               src='/Recent post (3).png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />


            </div>

            <div className='justify-center mt-8 w-[423px] h-[490px]  border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] h-[28p] py-5 px-8 font-bold'>Filter By Menu</h1>
            
               <Image 
               src='/Chicken Fry.png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/Chicken Fry (1).png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/Chicken Fry (2).png'
               alt=''
               width={323}
               height={62}
               className='cursor-pointer ml-8 mt-5'
               />

               
               <Image 
               src='/Chicken Fry (3).png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/Chicken Fry (4).png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-2 cursor-pointer'
               />


            </div>

            <div className='w-[423px] mt-10 h-[308px] border-[1px] border-gray-400'>
              <div className='w-[325px] h-[244px] py-10 ml-10 cursor-pointer' > 

              <Image 
              src='/Popular Tag.png'
              alt=''
              width={422}
              height={307}
              />
                 
              </div>
            </div>

            <div className='mt-10 border-[1px] border-[] w-[422px] h-[316px] items-center'>
                <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
                
                    <Image 
                    src='/Photo Gallery.svg'
                    alt=''
                    width={308}
                    height={46.5}
                    className='mt-5'
                    />
                </div>
            </div>

            <div className='mt-10 border-[1px] border-[] w-[422px] h-[158px] items-center'>
                <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
                  <h1 className='text-2xl font-bold'>Follow us</h1>
                  <Link href="https://www.facebook.com/">
                  <Image src="/Sociali icon.png" width={80} height={20} alt="social icons" className="w-[80px] lg:h-[90px] lg:w-[300px]" />
                  </Link> 
                  
                </div>
            </div>
  
    </div>
</div>

              
        </>
    )

} 

