import logoDental from "../assets/images/headerImages/logo_dental_1.png";

function Header() {
  return (
    <header className="headerContent flex justify-between items-center max-w-[1200px] 
      mx-auto py-5 px-3 mb-5 border-blue-500 bg-white border-b-[4px] rounded-[20px]
      sticky top-0 z-20  overflow-auto">
      <div className="text-[55px]
          max-lg:text-[40px] max-lg:max-w-[500px] max-[850px]:text-center 
          max-[850px]:max-w-full
          max-[850px]:text-[30px]
          max-md:pt-0 flex
          ">
        <span className="leading-5">
          <h3 className="ml-10 text-[20px] ">стоматология</h3>
          <h2 className="m-0 font-bold text-[rgb(0,130,255)] drop-shadow-[0_2px_3px_rgba(50,130,255)]">
            <a href="/">
              Селена
            </a>
          </h2>
        </span>
        <div className="heroTitle ml-2 flex items-center">
           <img src={logoDental} alt="logo"/>
        </div>      
      </div>
      <div className="headerMenuContent max-lg:hidden lg:mt-6">
        <ul className="headerMenuList flex justify-center items-center gap-5 text-[17px]">
          <li className="headerMenuListItem font-medium">
            <a href="/" className="headerMenuListItemLink">
              О нас
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="#services" className="headerMenuListItemLink">
              Услуги и цены
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="#aboutUs" className="headerMenuListItemLink">
              Врачи
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="#whyChooseUs" className="headerMenuListItemLink">
              Контакты
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="/documents" className="headerMenuListItemLink">
              Документы
            </a>
          </li>
        </ul>
      </div>
      <div className="headerMenuListItem font-medium headerMenuContent lg:mt-2 flex-col flex items-center lg:text-[14px] text-[10px] lg:w-[150px] w-[100px]">
        <img width='38' id="specialButton" style={{cursor: "pointer"}} src="https://lidrekon.ru/images/special.png" alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" />
        <span className="lg:w-full w-[70px] flex justify-center items-center text-center">Версия<br/>для слабовидящих</span>
      </div>      
      <div className="headerContactContent">
        <button className="headerContactButton 
          lg:w-[210px] lg:h-[55px] lg:text-[20px] 
          h-[30px] text-[10px] font-bold text-white
          text-center flex justify-center items-center 
          gap-2 border-solid bg-[rgb(0,140,255)] drop-shadow-[0_3px_2px_rgba(105,105,105)] rounded-[25px]">
          Записаться
        </button>
      </div>
    </header>
  );
};

export default Header;
