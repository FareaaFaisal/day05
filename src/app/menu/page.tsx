import Link from "next/link"
import Image from "next/image"

export default function Menu() {
    return(
      <div>
        <div className="w-full overflow-hidden">
        {/* First Section: Image and Breadcrumb */}
     
<div className="relative font-[sans-serif] pt-20 before:absolute lg:h-full h-[300px] before:w-full before:h-full before:inset-0 bg-black before:z-[-10]">
  {/* Banner Image */}
  <Image
    src="/unsplash_4ycv3Ky1ZZU.png"
    alt="Banner Image"
    width={500}
    height={500}
    className="absolute inset-0 w-full lg:h-full h-[300px] object-cover"
  />

  {/* Text Content */}
  <div className="min-h-[350px] relative z-40 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6 lg:mt-0 mt-0">
    <h2 className="text-white md:text-5xl text-3xl font-bold mb-8 text-center 
      lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
      absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      z-10 lg:z-50">
      Our Menu
    </h2>

    <div className="flex items-center space-x-2 lg:mt-36 mt-0 text-white">
      <Link href="/" className="text-white">Home</Link>
      <span className="text-white"> &gt; </span>
      <Link href="/about" className="text-orange-500">Our Menu</Link>
    </div>
  </div>
</div>
</div>
      
        {/* menu start */}
         {/* part 1 */}
      <div className="flex flex-col lg:flex-row md:flex-row gap-6 lg:gap-36 justify-center mt-12 lg:mt-36 px-4 lg:px-0">
        <div>
          <Image
            src="/menu1.svg"
            width={448}
            height={626}
            alt="heading"
            className="w-full lg:w-[448px] lg:h-[628px]"
          />
        </div>
        <div className="flex flex-col lg:gap-2 gap-4 md:gap-1">
          <Image src="/Coffee (1).svg" width={24} height={24} alt="coffee pic" className="w-6 h-6 lg:w-[24px] lg:h-[24px]" />
          <h1 className="text-3xl lg:text-5xl mb-4 text-[#333]">
            <b>Starter Menu</b>
          </h1>
          <p className="text-lg lg:text-3xl font-bold text-[#333]">
            <b>Alder Grilled Chinok Salmon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32$</b>
          </p>
          <p className="text-sm lg:text-base">Toasted French bread topped with Romano cheddar</p>
          <p className="text-sm lg:text-base">560 CAL</p>
          <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
          <p className="text-[#FF9F0D] text-lg lg:text-3xl font-bold">
            <b>Berries and cream tart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 43$</b>
          </p>
          <p className="text-sm lg:text-base">Gorgonzolla, ricota,mazarello,talegato</p>
          <p className="text-sm lg:text-base">700 CAL</p>
          <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
          <p className="text-lg lg:text-3xl font-bold text-[#333]">
            <b>Tormentosho Bush Pizza Pintoage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14$</b>
          </p>
          <p className="text-sm lg:text-base">Toasted French bread topped with Romano cheddar</p>
          <p className="text-sm lg:text-base">1000 CAL</p>
          <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
          <p className="text-lg lg:text-3xl font-bold text-[#333]">
            <b>Spicy Vegan Potato Curry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35$</b>
          </p>
          <p className="text-sm lg:text-base">Toasted French bread topped with blue cheese</p>
          <p className="text-sm lg:text-base">560 CAL</p>
        </div>
      </div>

        {/* part 2*/}
      <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-6 lg:gap-36 justify-center mt-12 lg:mt-36 mb-12 lg:mb-36 px-4 lg:px-0">       
  <div className="flex flex-col lg:gap-2 gap-4 md:gap-1">
    <Image src="/Coffee (1).svg" width={24} height={24} alt="coffee pic" className="w-6 h-6" />
    <h1 className="text-3xl lg:text-5xl mb-4 text-[#333]">
      <b>Main Course</b>
    </h1>
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Optic Big Breakfast Combo Menu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with Romano cheddar
    </p>
    <p className="text-sm lg:text-base">560 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-[#FF9F0D] text-lg lg:text-3xl font-bold">
      <b>Cashew Chicken with Stir-Fry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 43$</b>
    </p>
    <p className="text-sm lg:text-base">
      Gorgonzolla, ricota, mazarello, talegato
    </p>
    <p className="text-sm lg:text-base">700 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Vegetables & Green Salad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with Romano cheddar
    </p>
    <p className="text-sm lg:text-base">1000 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Spicy Vegan Potato Curry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with blue cheese
    </p>
    <p className="text-sm lg:text-base">560 CAL</p>
  </div>

  <div>
    <Image
      src="/menu2.png"
      alt="menu 2"
      width={448}
      height={626}
      className="w-full max-w-[448px] lg:w-[448px] lg:h-[628px] mx-auto"
    />
  </div>
</div>



        <div className="w-full h-[40%] mb-36"><Image src="/Client & customers.svg" width={1923} height={668} alt="-"/></div>

        {/* part 3*/}
        <div className="flex flex-col lg:flex-row md:flex-row  gap-6 lg:gap-36 justify-center mt-12 lg:mt-36 px-4 lg:px-0">
  <div className="order-2 lg:order-1">
    <Image
      src="/desert1.svg"
      alt="deserts"
      width={448}
      height={626}
      className="w-full max-w-[448px] lg:w-[448px] lg:h-[628px] mx-auto"
    />
  </div>

  <div className="flex flex-col lg:gap-2 md:gap-1 gap-4 order-1 lg:order-2">
    <Image src="/Coffee (1).svg" width={24} height={24} alt="coffee"  className="w-6 h-6 lg:w-[24px] lg:h-[24px]" />
    <h1 className="text-3xl lg:text-5xl mb-4 text-[#333]">
      <b>Desert</b>
    </h1>
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Fig & Lemon Cake &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with Romano cheddar
    </p>
    <p className="text-sm lg:text-base">560 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-[#FF9F0D] text-lg lg:text-3xl font-bold">
      <b>Creamy mascarpone cake &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 43$</b>
    </p>
    <p className="text-sm lg:text-base">
      Gorgonzolla, ricota, mazarello, talegato
    </p>
    <p className="text-sm lg:text-base">700 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Pastry, blueberries, lemon juice &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with Romano cheddar
    </p>
    <p className="text-sm lg:text-base">1000 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Pain au chocolat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with blue cheese
    </p>
    <p className="text-sm lg:text-base">560 CAL</p>
  </div>
</div>

        {/* part 4 */}
  <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-6 lg:gap-36 justify-center mt-12 lg:mt-36 mb-12 lg:mb-36 px-4 lg:px-0">       
  <div className="flex flex-col lg:gap-2  md:gap-1 gap-4">
    <Image src="/Coffee (1).svg" width={24}
            height={24} alt="Drinks" className="w-6 h-6 lg:w-[24px] lg:h-[24px]" />
    <h1 className="text-3xl lg:text-5xl mb-4 text-[#333]">
      <b>Drinks</b>
    </h1>
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Caffe macchiato &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with Romano cheddar
    </p>
    <p className="text-sm lg:text-base">560 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-[#FF9F0D] text-lg lg:text-3xl font-bold">
      <b>Aperol Spritz Cappuccino &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 43$</b>
    </p>
    <p className="text-sm lg:text-base">
      Gorgonzolla, ricota, mazarello, talegato
    </p>
    <p className="text-sm lg:text-base">700 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Caffe Latte Campuri &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14$</b>
    </p>
    <p className="text-sm lg:text-base">
      Toasted French bread topped with Romano cheddar
    </p>
    <p className="text-sm lg:text-base">1000 CAL</p>
    <hr className="border-2 w-full lg:w-[700px] mt-2 border-gray-200" />
    <p className="text-lg lg:text-3xl font-bold text-[#333]">
      <b>Tormentoso Bush Tea Pintoage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35$</b>
    </p>
    <p className="text-sm lg:text-base">
      Fresh bush Tea topped with blue tormentoso
    </p>
    <p className="text-sm lg:text-base">560 CAL</p>
  </div>

  <div>
    <Image
      src="/desert2.png"
      alt="desert 2"
      width={448}
      height={626}
      className="w-full max-w-[448px] lg:w-[448px] lg:h-[628px] mx-auto"
    />
  </div>
</div>

        <div className="lg:mt-36 mt-5 lg:mb-36 mb-5 w-full h-[275px] flex justify-center"><Image src="/Clients and partner.svg" width={1923} height={668} alt="clients and partners"/></div>
        </div>
       
        
    )
}
