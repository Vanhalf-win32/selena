import teethWhitening from "../assets/images/servicesImages/teethWhitening.png";
import dentalImplant from "../assets/images/servicesImages/dentalImplant.png";
import teethFillings from "../assets/images/servicesImages/teethFillings.png";
import oralSurgery from "../assets/images/servicesImages/oralSurgery.png";
import crownAndBridges from "../assets/images/servicesImages/crownAndBridges.png";
import periodontalCare from "../assets/images/servicesImages/periodontalCare.png";

import "../assets/styles/services.css";

function Services() {
  return (
    <section className="serviceContent mt-56 max-w-[1200px] mx-auto my-10">
      <h1 className="sectionMainTitle text-center mb-6 font-semibold text-[38px]">Стоматология<br/><b className="text-blue-500 text-[60px]">Селена</b></h1>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[30px]">Только лучшее лечение зубов</h2>
      <div className="serviceBoxes flex items-center justify-center flex-wrap gap-5">
        {/* Teeth Whitening */}
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={teethWhitening} alt="Teeth Whitening" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Отбеливание зубов</h3>
          <p className="serviceBoxDesc">
            Косметическая процедура для улучшения белизны зубов
          </p>
          <a href="#" className="serviceButton">
            Узнать больше
          </a>
        </div>

        {/* Dental Implant */}
        <div className="serviceBox bg-lightRed">
          <div className="serviceBoxImgContent">
            <img src={dentalImplant} alt="Dental Implant" className="serviceBoxImg" />
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
        <div className="serviceBox bg-lightGreen">
          <div className="serviceBoxImgContent">
            <img src={teethFillings} alt="Teeth Fillings" className="serviceBoxImg" />
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
        <div className="serviceBox bg-lightRed">
          <div className="serviceBoxImgContent">
            <img src={oralSurgery} alt="Oral Surgery" className="serviceBoxImg" />
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
        <div className="serviceBox bg-lightGreen">
          <div className="serviceBoxImgContent">
            <img src={crownAndBridges} alt="Crown And Bridges" className="serviceBoxImg" />
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
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={periodontalCare} alt="Periodontal Care" className="serviceBoxImg" />
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
