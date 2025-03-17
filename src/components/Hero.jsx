import heroImg from "../assets/images/heroImages/smilingWoman-transformed.png";
import heroButtonEffect from "../assets/images/heroImages/heroButtonEffect.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

import freeConsultation from "../assets/images/heroImages/logo_2.png";
import expertDentist from "../assets/images/heroImages/logo_3.png";
import highUserRating from "../assets/images/heroImages/logo_4.png";
import bestEquipment from "../assets/images/heroImages/logo_1.png";

import "../assets/styles/hero.css";

const Hero = () => {
  return (
    <>
      <section className="heroContent max-w-[1200px] mx-auto px-3 flex justify-between items-start relative min-h-[70vh] max-lg:min-h-[100%] max-[850px]:flex-col max-[850px]:justify-center max-[850px]:items-center">
        <div className="heroInfoContent w-full max-w-[590px] z-10 ">
          <h1
            className="heroTitle text-[50px] font-bold pt-10 
          max-lg:text-[40px] max-lg:max-w-[500px] max-[850px]:text-center 
          max-[850px]:max-w-full
          max-[850px]:text-[30px]
          max-md:pt-0 text-gray-800
          "
          >
            Совершенство стоматологии начинается здесь:<br/> 
            ваш путеводитель к более яркой и здоровой улыбке
          </h1>
        </div>
        <div className="heroImgContent w-full max-w-[630px] absolute bottom-30 right-0 max-lg:max-w-[500px] max-[850px]:relative">
          <img src={heroImg} alt="Smiling Woman" className="heroImg w-full" />
        </div>
      </section>
      <section className="qualityContent max-w-[1200px] mx-auto px-3 max-lg:pt-[100px] max-[850px]:pt-[0px] max-[850px]:mt-[-50px]">
        <div className="qualityBoxes z-10 relative flex flex-wrap items-start justify-center gap-5">
          {/* Free Consultation */}
          <div className="qualityBox border-[1px] border-blue-300">
            <div className="qualityBoxImgContent">
              <img src={freeConsultation} alt="Free Consultation" className="qualityBoxImg"/>
            </div>
            <h3 className="qualityBoxTitle">Бесплатная консультация</h3>
            <p className="qualityBoxDesc">
              Мы предлагаем гибкий график приема и бесплатную консультацию.
            </p>
          </div>
          {/* Expert Dentist */}
          <div className="qualityBox border-[1px] border-blue-300">
            <div className="qualityBoxImgContent">
              <img src={expertDentist} alt="Expert Dentist" className="qualityBoxImg"/>
            </div>
            <h3 className="qualityBoxTitle">Эксперты-стоматологи</h3>
            <p className="qualityBoxDesc">
              Наша команда опытных стоматологов может похвастаться многолетним опытом в различных областях стоматологии.
            </p>
          </div>
          {/* High User Rating */}
          <div className="qualityBox border-[1px] border-blue-300">
            <div className="qualityBoxImgContent">
              <img src={highUserRating} alt="High User Rating" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">Высокий рейтинг у пользователей</h3>
            <p className="qualityBoxDesc">
            Мы всегда стаемся предложить удобный график приема для пациентов и высокий уровень сервиса.
            </p>
          </div>
          {/* Best Equipment */}
          <div className="qualityBox border-[1px] border-blue-300">
            <div className="qualityBoxImgContent">
              <img src={bestEquipment} alt="Best Equipment" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">Лучшее оборудование</h3>
            <p className="qualityBoxDesc">
              Наша команда стремится сделать ваше посещение стоматологии максимально комфортным и беззаботным
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
