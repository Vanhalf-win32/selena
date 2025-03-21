import patientCenteredCare from "../assets/images/aboutUsImages/img_1.png";
import contactArrow from "../assets/images/headerImages/arrow.png";

function AboutUs() {
  return (
    <section className="aboutUsContent mt-56 px-3 flex max-w-[1180px] mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 max-lg:mb-10">
      <div className="aboutUsImgSide w-full max-lg:order-1 transition delay-150 duration-500 hover:scale-105">
        <div className="aboutUsImgContent max-w-[500px] max-lg:max-w-[380px] max-lg:mx-auto">
          <img src={patientCenteredCare} alt="patientCenteredCare" className="aboutUsImg w-full max-lg:text-center drop-shadow-[0_8px_10px_rgba(0,130,255)]   rounded-[40px]" />
        </div>
      </div>
      <div className="aboutUsInfoSide w-full">
        <h3 className="font-sans font-bold text-[60px] text-[rgb(0,130,255)] drop-shadow-[0_2px_3px_rgba(50,130,255)]">Селена</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-sans font-bold text-[36px] leading-10">Лучшее стоматологическое лечение</h2>
        <p className="sectionDesc font-sans text-[18px] leading-6">
          Мы стремимся предоставлять исключительную стоматологическую помощь в теплой и гостеприимной обстановке. 
          Наша команда опытных, отзывчивых и высококвалифицированных специалистов готова сделать ваше посещение стоматолога комфортным и беззаботным.
        </p>
        <h4 className="sectionInfoTitle font-sans font-bold text-[22px] my-2">Наша цель</h4>
        <p className="sectionDesc font-sans leading-6  text-[18px]">
          В стоматологии <b className="text-blue-500 font-sans font-bold">"Селена"</b> наша миссия заключается в содействии оптимальному здоровью полости рта и создании долговечных, уверенных улыбок.
        </p>
        <div className="bookingButtonContent ">
          <button className="bookingButton shadow-buttonShadow bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-2 relative">
            Узнать больше
            <div className="bookingButtonImgContent max-w-[13px] flex items-center justify-center">
              <img src={contactArrow} alt="Arrow" className="bookingButtonImg w-full" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
