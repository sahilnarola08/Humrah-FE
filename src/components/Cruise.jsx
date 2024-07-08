import React from 'react'

const Cruise = () => {
    const cardData = [
        {
          title:"36ft Luxury Yatch",
          cardimg:"images/cardsimg/img1.jpeg",
          mssg:"Aed 6000"
        },
        {
          title:"45ft Luxury Yatch",
          cardimg:"images/cardsimg/img3.jpeg",
          mssg:"Aed 6000"
        },
        {
          title:"36ft Luxury Yatch",
          cardimg:"images/cardsimg/img4.jpeg",
          mssg:"Aed 6000"
        }
      ]
  return (
    <div>
        <div className="w-full relative">
        <img src="images/Vector1.svg" alt="" className="w-full object-cover scale-y-[-1]" />
        <div className='bg-[#E8F8FF] px-[80px] pb-[69px]'>
            <div className='flex justify-between gap-[61px] text-center w-full mt-[-10px]'>
                <div className='text-start'>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#262626] text-[24px] font-[700]">Enchanting Dinner Cruises in Dubai: A Night of Dining and Scenic View</h1>
                    <p className="mb-8 leading-relaxed text-[#353B3D] font-[500]">Enjoy a dinner cruise in Dubai with a delicious buffet, live entertainment, and stunning views of the city skyline from a traditional dhow boat on Dubai Creek or Marina.</p>
                </div>
                <div className="flex justify-center items-center">
                <button className="inline-flex text-white bg-[#009BDE] border-0 py-2 px-6 focus:outline-none rounded text-lg font-[600]">Visit All</button>
                </div>
            </div>
            <div className="flex gap-[28px]">
            {cardData.map((item, index) => {
                return (
                <div key={index} className="w-[33.33%] rounded-2xl shadow-lg relative h-[382px]">
                    <img className="rounded-2xl object-cover w-full h-full" src={item.cardimg} alt="" />
                    <div className='flex'>
                        <div className="absolute top-0 left-0 w-full px-4 py-2 ">
                            <h3 className="text-4xl font-medium text-white font-[600]">{item.title}</h3>
                            <p className="text-sm text-white font-[400]">{item.mssg}</p>
                        </div>
                        <div className="absolute top-0 right-0 w-full">
                            <img className="rounded-2xl absolute right-0 px-4 py-2" src="images/ArrowCircleUpRight.svg" alt="" />
                        </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cruise