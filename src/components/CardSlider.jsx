import React from 'react'

const CardSlider = () => {
  const cardData = [
    {
      title:"36ft Luxury Yatch",
      cardimg:"images/cardsimg/img1.jpeg",
      mssg:"Aed 6000"
    },
    {
      title:"36ft Luxury Yatch",
      cardimg:"images/cardsimg/img2.jpeg",
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
    },
    {
      title:"50ft Luxury Yatch",
      cardimg:"images/cardsimg/img5.jpeg",
      mssg:"Aed 6000"
    }
  ]

  const [num1, num2, num3, num4, num5, num6, num7] = [1, 2, 3, 4, 5];
  return (
    <div className="w-full">
      <img src="images/Vector1.svg" alt="" className="w-full object-cover" />
      <section className="text-[#353B3D] body-font">
        <div className="mx-auto flex items-center justify-center flex-col">
        <style>
            {`
                .main-box:nth-child(${num1}),
                .main-box:nth-child(${num2}),
                .main-box:nth-child(${num3}),
                .main-box:nth-child(${num4}) {
                    w-[300px] h-[200px];
                }
                .main-box:nth-child(${num5}),
                .main-box:nth-child(${num6}),
                .main-box:nth-child(${num7}){
                    w-[300px] h-[700px]
                }
                .main-box:nth-child(${num1}) {
                    width: 286px;
                    height: 420px;
                }
                .main-box:nth-child(${num2}) {
                    margin-top: -187px;
                    width: 241px;
                    height: 284px;
                }
                .main-box:nth-child(${num3}) {
                    margin-top: -48px;
                    width: 351px;
                    height: 284px;
                }
                .main-box:nth-child(${num4}) {
                    margin-top: -84px;
                    width: 284px;
                    height: 284px;
                }
                .main-box:nth-child(${num5}) {
                    margin-top: -38px;
                    width: 286px;
                    height: 420px;
                }
            `}
        </style>
        <div className="flex gap-[14px]">
          {cardData.map((item, index) => {
            return (
              <div key={index} className="main-box rounded-2xl shadow-lg relative h-[220px]">
                <img className="listitems rounded-2xl object-cover h-full" src={item.cardimg} alt="" />
                <div className="absolute top-0 left-0 w-full px-4 py-2 w-[50%]">
                  <h3 className="text-4xl text-white text-[32px] font-[600]">{item.title}</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-4 py-2">
                  <p className="text-sm text-[20px] text-white font-[600] uppercase">{item.mssg}</p>
                </div>
                <div className="absolute top-0 right-0 w-full">
                      <img className="rounded-2xl absolute right-0 px-4 py-2" src="images/ArrowCircleUpRight.svg" alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-[#262626] text-[36px] mb-4 font-bold font-700]">Luxury Yachts Activies</h1>
          <p className="mb-8 leading-relaxed text-[14px] text-[#353B3D] font-[500]">Hire a private yacht to explore the coastline of Dubai. Enjoy personalized service, water sports, and the luxury of cruising at your own pace. Perfect for special occasions or simply to indulge in a day of relaxation and luxury.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#009BDE] border-0 py-2 px-6 focus:outline-none rounded text-lg font-[600]">View More</button>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default CardSlider
