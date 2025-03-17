import comprehensiveDentalServices from "../assets/images/whyChooseUsImages/comprehensiveDentalServices.png";
import doneIcon from "../assets/images/whyChooseUsImages/done.png";

import "../assets/styles/whyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="whyChooseUsContent mt-56 px-3 flex items-start justify-between max-w-[1180px] mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-10">
      <div className="whyChooseUsInfoSide w-full">
        <h3 className="sectionSubTitle font-semibold text-[30px] text-left text-secondary">Почему выбирают нас?</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Комплексные стоматологические услуги</h2>
        <ul className="whyChooseUsList">
          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent">
              <img src={doneIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Опытные специалисты:</strong><br/>Наша команда состоит из высококвалифицированных и опытных специалистов-стоматологов.
            </p>
          </li>

          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent min-w-[18px]">
              <img src={doneIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Современные технологии:</strong><br/>Мы инвестируем в новейшие стоматологические технологии, чтобы обеспечить наилучшее лечение.
            </p>
          </li> 

          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent min-w-[18px]">
              <img src={doneIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Обучение пациентов:</strong><br/>Мы считаем, необходимым информировать наших пациентов о правильной гигиене и заботе о здоровье полости рта.
            </p>
          </li>

          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent min-w-[18px]">
              <img src={doneIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Удобные часы работы:</strong><br/>Мы предлагаем гибкий график, с удобными часами посещения.
            </p>
          </li>
        </ul>
      </div>
      <div className="whyChooseUsImgSide w-full">
        <div className="whyChooseUsImgContent max-lg:max-w-[380px] max-lg:mx-auto">
          <img src={comprehensiveDentalServices} alt="Comprehensive Dental Services" className="whyChooseUsImg max-lg:text-center" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
