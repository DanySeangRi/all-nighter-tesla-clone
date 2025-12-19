import React from 'react';

const InfoCard = ({ data }) => {
  if (data.layout === "small") {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-[40px] font-medium text-gray-900 mb-3 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="font-normal text-gray-600 max-w-4xl text-[20px]/[28px]">
            {data.sectionDescription}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {data.cards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-[#f5f5f5] p-5 py-10 rounded-xl flex flex-col items-start"
                >

                  <div className="mb-4 text-black">
                    <Icon />
                  </div>

                  <h3 className="text-[34px] font-medium mb-3 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-[20px] font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-[40px] font-medium text-gray-900 mb-3 tracking-tight">
          {data.sectionTitle}
        </h2>
        <p className="font-normal text-gray-600 max-w-4xl text-[20px]/[28px]">
          {data.sectionDescription}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6">
          {data.cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#f5f5f5] p-5 py-10 rounded-xl flex flex-col items-start"
              >

                <div className="mb-4 text-black">
                  <Icon />
                </div>

                <h3 className="text-[34px] font-medium mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-[20px] font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCard;