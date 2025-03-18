import patientCenteredCare from "../assets/images/aboutUsImages/img_1.png";
import contactArrow from "../assets/images/headerImages/arrow.png";

function AboutUs() {
  return (
    <section className="aboutUsContent mt-56 px-3 flex max-w-[1180px] mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 max-lg:mb-10">
      <div className="aboutUsImgSide w-full max-lg:order-1">
        <div className="aboutUsImgContent max-w-[500px] max-lg:max-w-[380px]  max-lg:mx-auto">
          <img src={patientCenteredCare} alt="patientCenteredCare" className="aboutUsImg w-full max-lg:text-center drop-shadow-[0_12px_15px_rgba(0,130,255)] rounded-[40px]" />
        </div>
      </div>
      <div className="aboutUsInfoSide w-full">
        <h3 className="sectionSubTitle font-semibold text-[40px]  text-left text-secondary text-blue-500">Селена</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Лучшее стоматологическое лечение</h2>
        <p className="sectionDesc text-[18px]">
          Мы стремимся предоставлять исключительную стоматологическую помощь в теплой и гостеприимной обстановке. 
          Наша команда опытных, отзывчивых и высококвалифицированных специалистов готова сделать ваше посещение стоматолога комфортным и беззаботным.
        </p>
        <h4 className="sectionInfoTitle font-medium text-[22px] my-2">Наша цель</h4>
        <p className="sectionDesc text-[18px]">
          В стоматологии <b className="text-blue-500" >"Селена"</b> наша миссия заключается в содействии оптимальному здоровью полости рта и создании долговечных, уверенных улыбок.
        </p>
        <div className="bookingButtonContent ">
          <button className="bookingButton shadow-buttonShadow bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative">
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
