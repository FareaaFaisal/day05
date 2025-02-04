  {/* Sidebar */}
        <div className="mt-[170px] w-full lg:w-[25%] flex flex-col gap-8">
          {/* Search Box */}
          <div className="flex w-full border-1">
            <input
              type="text"
              placeholder="Search Your Keyword Here"
              className="w-full px-3 py-3 bg-zinc-100 border border-gray-300"
            />
            <button className="w-[76px] h-auto flex items-center justify-center bg-[#FF9F0D]">
              <Image src="/Group (2).svg" alt="search icon" width={24} height={24} />
            </button>
          </div>

          {/* Recent Posts */}
          <div className="border p-4">
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