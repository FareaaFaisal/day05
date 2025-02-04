import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import SearchAndFilter from "../components/SearchandFilter";


type FoodItem = {
  name: string;
  price: number;
  originalPrice: number;
  slug: string;
  image_url: string;
  category: string; // Category added to filter by
};

const query = `*[_type=='food']{
  name, 
  price, 
  originalPrice, 
  "slug": slug.current,
  "image_url": image.asset->url,
  category
}`;

export default async function Shop() {
  const food: FoodItem[] = await client.fetch(query);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Navbar / Hero Section */}
      <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Banner Image"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-50 max-w-4xl mx-auto flex flex-col items-center justify-center text-center p-6 min-h-[350px]">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">Our Shop</h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/menu" className="text-orange-500">Shop</Link>
          </div>
        </div>
      </div>

      {/* Shop Page */}
      <div className="mt-10 mb-10 mx-auto flex flex-wrap lg:flex-nowrap justify-center gap-4">
        {/* Main Content */}
        <div className="flex flex-col gap-4 w-full lg:w-[70%]">
          {/* Use the Search and Filter Component */}
          <SearchAndFilter food={food} /> {/* Pass fetched data as props */}
        </div>

         {/* Sidebar */}
         <div className="mt-[170px] w-full lg:w-[25%] flex flex-col gap-8">
         

          {/* Recent Posts */}
          <div className="border p-4 mt-14">
            <h1 className="font-bold mb-4">Recent Posts</h1>
            {["Recent post.png", "Recent post (1).png", "Recent post (2).png", "Recent post (3).png"].map((post, index) => (
              <Image
                key={index}
                src={`/${post}`}
                alt="Recent Post"
                width={323}
                height={107}
                className="cursor-pointer mb-4"
              />
            ))}
          </div>

          {/* Filter By Menu */}
          <div className="border p-4">
            <h1 className="font-bold mb-4">Filter By Menu</h1>
            {["Chicken Fry.png", "Chicken Fry (1).png", "Chicken Fry (2).png", "Chicken Fry (3).png", "Chicken Fry (4).png"].map((menu, index) => (
              <Image
                key={index}
                src={`/${menu}`}
                alt="Menu Item"
                width={323}
                height={62}
                className="cursor-pointer mb-4"
              />
            ))}
          </div>

          {/* Popular Tag */}
          <div className="border p-4">
            <h1 className="font-bold mb-4">Popular Tag</h1>
            <Image src="/Popular Tag.png" alt="Popular Tag" width={324} height={167} />
          </div>
        </div>
      </div>
    </div>
  );
}
