import React from 'react';

const InfoCard = ({ title, description, bgColor }) => {
  return (
    <div className={`p-6 rounded-2xl shadow-lg ${bgColor} w-full sm:w-80 h-auto flex flex-col items-start`}>
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/cdd6/885a/97ac6b4699dbb5c75c055d27cce6e51d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sbwD7Tv1BBYD37rO1fFzfaZkgsjBymdVLVlpt0dEGtsHbH2mR~By-wz~hX6gXTUJ8OCB0z65znq3iyVAxXtopGld6DQCaCg6b4UKpJzc96iKTJg6FGdnuO5RLnIx6qRovUYB7qZ8lIsOAm-Y4TL-sxXEjC6rdjgLoPnInCG6cvyaa5Bs5cGIDneE39xepVWgFsvbiChRmaxpunPYZoFbYoCeZEG-PbemObWxc77mgLx01AlyAiB0gjW0SFsrP0VUJ9hs5tMMisHfmmE-LmAGEGhB19TgxlKH~DdH6Xi7sELCQcj~z0D133e9vjkJCjFv6fPl2oYDmrz-9ABaNiwW1A__"
          alt="icon"
          className="h-16 w-16 px-2 py-2 border-2 rounded-full bg-white border-none"
        />
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-700">{description}</p>
    </div>
  );
};

const AboutSocial = () => {
  const cards = [
    {
      title: "Cost-free Medicines",
      description: "We provide cost-free medicines to over 19 Gaushalas (cow shelters).",
      bgColor: "bg-[#6ebe91]"
    },
    {
      title: "Sponsor",
      description: "We have been a proud sponsor of Mhow Veterinary College, Indore for several years.",
      bgColor: "bg-orange-300"
    },
    {
      title: "Result-Oriented",
      description: "Our company focuses on solutions that deliver real benefits for animal health.",
      bgColor: "bg-[#6ebe91]"
    }
  ];

  return (
    <div className="p-6 sm:p-10" data-aos="fade-up">
      <h1 className="text-2xl sm:text-[2.3vw] leading-tight font-bold text-gray-900 mb-5 text-center">
        Our Contributions & Social <br className="hidden sm:block" /> Responsibility
      </h1>
      <p className="text-center text-gray-600 mb-10">
        With constant innovation and understanding of specific market needs,
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:grid sm:grid-cols-3 sm:gap-10" data-aos-duration="3000">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AboutSocial;
