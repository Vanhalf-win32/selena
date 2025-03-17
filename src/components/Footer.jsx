import arrowFooter from "../assets/images/footerImages/arrowFooter.png";
import vkLogo from "../assets/images/footerImages/vk.png";
import whatsappLogo from "../assets/images/footerImages/whatsapp.png";
import instagramLogo from "../assets/images/footerImages/instagram.png";
import telegramLogo from "../assets/images/footerImages/telegram.png";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerContent max-w-[1200px] mx-auto pt-2 pb-10 max-md:px-2">
      {/*
      <div className="footerLogoContent max-w-[120px] mx-auto">
        <img src={footerLogo} alt="57Dentcare" className="footerLogo w-full text-center" />
      </div>
      */}
      <div className="footerColumns mt-5 flex justify-between items-start gap-5 max-xl:flex-wrap max-xl:justify-center">
        {/* Company Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 text-blue-500">Селена</h3>
          <ul className="footerColumnList">
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                На главную
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Услуги
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                О нас
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Почему мы
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Отзывы
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        {/* Pages Column */}

        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 text-blue-500">Разделы</h3>
          <ul className="footerColumnList">
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Лицензия
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Рекомендации
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Руководство
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Журнал
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Документы
              </a>
            </li>
          </ul>
        </div>

        {/* Address Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 text-blue-500">Адрес</h3>
          <p className="footerDesc">Ростов-на-Дону, проспект Нагибина 14б</p>
          <a href="/" className="footerLink">
            Посмотреть на карте
          </a>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-5 text-blue-500">Контакты</h3>
          <p className="footerDesc">
          +7 (938) 170-55-55 <br /> Sokolova.Elena@selena.dental
          </p>
        </div>

        {/* Social Media Column */}

        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 text-blue-500">Акции</h3>
          <p className="footerDesc mb-2">Будьте в курсе наших последних новостей</p>
          <div className="footerInputContent relative w-full max-w-[306px] border-[1px] border-blue-500 rounded-[30px]">
            <input className="footerInput p-5 w-full max-w-[200px] h-[59px] rounded-[30px]" type="text" name="email" id="email" placeholder="Email" />
            <div className="footerInputImgContent absolute top-2 right-2 cursor-pointer">
              <img src={arrowFooter} alt="Arrow" className="footerInputImg" />
            </div>
          </div>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-3">Присоединяйтесь к нам</h3>
          <div className="footerSocialMediaList list-none flex justify-start items-center gap-3">
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={vkLogo} alt="VK" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={whatsappLogo} alt="whatsapp" className="footerSocialMediaListItemImg" />
              </div>
            </li> 
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={instagramLogo} alt="instagram" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={telegramLogo} alt="telegram" className="footerSocialMediaListItemImg" />
              </div>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
