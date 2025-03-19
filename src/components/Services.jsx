import hero_1 from "../assets/images/heroImages/hero.png";
import hero_2 from "../assets/images/servicesImages/hero_2.png";
import hero_3 from "../assets/images/servicesImages/hero_3.png";
import "../assets/styles/services.css";

function Services() {
  return (
    <section className="serviceContent mt-48   max-w-[1200px] mx-auto my-10">
      <h1 className="text-center mb-6 text-[48px]">Стоматология<br/><span className="font-sans font-bold text-[60px] text-[rgb(0,130,255)] drop-shadow-[0_2px_3px_rgba(50,130,255)]">Селена</span></h1>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[30px]">Только лучшее лечение зубов</h2>
      <div className="serviceBoxes flex items-center justify-center flex-wrap gap-5">
        {/* Teeth Whitening */}
        <div className="serviceBox shadow-lg shadow-[rgb(0,130,255)]">
          <div className="serviceBoxImgContent">
            <img src={hero_1} alt="Teeth Whitening" className="w-[200px]" />
          </div>
          <h3 className="serviceBoxTitle">Отбеливание зубов</h3>
          <p className="serviceBoxDesc">
            Косметическая процедура для улучшения белизны зубов
          </p>
          <a href="#" className="serviceButton">
            Узнать больше...
          </a>
        </div>

        {/* Dental Implant */}
        <div className="serviceBox shadow-lg shadow-[rgb(0,130,255)]">
          <div className="serviceBoxImgContent">
            <img src={hero_2} alt="Dental Implant" className="w-[165px]" />
          </div>
          <h3 className="serviceBoxTitle">Имплантация</h3>
          <p className="serviceBoxDesc">
            <br/>Хирургическая установка искусственных корней зубов
          </p>
          <a href="#" className="serviceButton">
          <br/>Узнать больше
          </a>
        </div>

        {/* Teeth Fillings */}
        <div className="serviceBox shadow-lg shadow-[rgb(0,130,255)]">
          <div className="serviceBoxImgContent">
            <img src={hero_3} alt="Teeth Fillings" className="w-[170px]" />
          </div>
          <h3 className="serviceBoxTitle">Пломбирование зубов</h3>
          <p className="serviceBoxDesc">
          
          Восстановительные процедуры для восстановления полостей и поврежденных зубов
          </p>
          <a href="#" className="serviceButton">
            Узнать больше
          </a>
        </div>

        {/* Oral Surgery */}
        <div className="serviceBox lg:mt-5 shadow-lg shadow-[rgb(0,130,255)]">
          <div className="serviceBoxImgContent">
            <img src={hero_1} alt="Oral Surgery" className="w-[200px]" />
          </div>
          <h3 className="serviceBoxTitle">Хирургия полости рта</h3>
          <p className="serviceBoxDesc">
            Хирургические процедуры, включая удаление зубов и имплантацию зубов  
          </p>
          <a href="#" className="serviceButton">
            Узнать больше
          </a>
        </div>

        {/* Crown And Bridges */}
        <div className="serviceBox lg:mt-5 shadow-lg shadow-[rgb(0,130,255)]">
          <div className="serviceBoxImgContent">
            <img src={hero_2} alt="Crown And Bridges" className="w-[165px]" />
          </div>
          <h3 className="serviceBoxTitle">Коронки и мосты</h3>
          <p className="serviceBoxDesc">   
            Варианты восстановления поврежденных или отсутствующих зубов
          </p>
          <a href="#" className="serviceButton">
            Узнать больше
          </a>
        </div>

        {/* Periodontal Care */}
        <div className="serviceBox lg:mt-5 shadow-lg shadow-[rgb(0,130,255)]">
          <div className="serviceBoxImgContent">
            <img src={hero_3} alt="Periodontal Care" className="w-[170px]" />
          </div>
          <h3 className="serviceBoxTitle">Пародонтологический уход</h3>
          <p className="serviceBoxDesc">
            Услуги по здоровью десен, включая удаление зубного камня и выравнивание поверхности корней
          </p>
          <a href="#" className="serviceButton">
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
