import Link from "next/link"
import Image from "next/image"

export default function Menu() {
    return(
        <div className="w-full overflow-hidden">
        {/* First Section: Image and Breadcrumb */}
        <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <Image
            src="/unsplash_4ycv3Ky1ZZU.png"
            width={500}
            height={500}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
              404 Error
            </h2>
            <div className="flex items-center space-x-2 text-white">
              <Link href="/" className="text-white">Home</Link>
              <span className="text-white"> &gt; </span>
              <Link href="/menu" className="text-orange-500">404</Link>
              </div>
            </div>
          </div>



          {/* error page */}
          <div className="lg:w-[630px] lg:h-[300px] h-fit lg:m-20 mt-5 mb-5 flex flex-col items-center justify-center lg:ml-auto lg:mr-auto gap-2 lg:gap-10">
            <Image src="/404.svg" alt="404 pic" width={161} height={104} className="w-[161px] h-[104px]"/>
            <p className="lg:text-3xl md:text-2xl text-xl p-1 text-[#333] fonr-bold">OOPS! Looks like Something going wrong</p>
            <p className="lg:w-[490px] p-1 ">Page Cannot be found! we&apos;ll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:</p>

            <button className="bg-[#FF9F0D] text-white px-6 py-3 lg:h-[56px] md:h-[40px] h-[40px] rounded-md">
                <Link href="/">Go to Home</Link>
                </button>
          </div>
        </div>
    )
}