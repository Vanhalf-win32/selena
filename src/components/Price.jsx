import icon from "../assets/images/priceImage/icon_dent.png";
import terapi_1 from "../assets/images/priceImage/terapi_1.jpg";
import terapi_2 from "../assets/images/priceImage/terapi_2.jpg";
import terapi_3 from "../assets/images/priceImage/terapi_3.jpg";
import hirurg_1 from "../assets/images/priceImage/hirurg_1.jpg";
import hirurg_2 from "../assets/images/priceImage/hirurg_2.jpg";
import hirurg_3 from "../assets/images/priceImage/hirurg_3.jpg";
import ortodont_1 from "../assets/images/priceImage/ortodont_1.jpg";
import ortodont_2 from "../assets/images/priceImage/ortodont_2.jpg";
import ortodont_3 from "../assets/images/priceImage/ortodont_3.jpg";
import ortoped_1 from "../assets/images/priceImage/ortoped_1.jpg";
import ortoped_2 from "../assets/images/priceImage/ortoped_2.jpg";
import ortoped_3 from "../assets/images/priceImage/ortoped_3.jpg";

function Price() {
    return(
        <div className="
            mx-auto min-h-[800px] lg:mt-10
            flex flex-col max-w-[1000px] p-8 border-[2px] 
            border-b-[5px] border-gray-300  shadow-blue-500 
            rounded-[30px] shadow-xl
        ">
            <h2 className="flex justify-center text-[50px] font-semibold drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                Услуги стоматологии
            </h2>
            <div className="p-5">
                <p className="text-[18px]">
                    &emsp;Вы нуждаетесь в стоматологической помощи? Вы попали по адресу! Городская стоматологическая клиника «Селена» оказывает самые качественные стоматологические услуги. Основной приоритет в нашей работе – сочетание высокого качества услуг стоматологии и доступные цены.
                    Стоматология для нас является любимой работой, которая приносит радость как нам, так и нашим клиентам. Оказывая стоматологическую помощь, мы используем инновационные технологии и разработки.<br/>
                    <br/>
                    &emsp;Наша зубная клиника предоставляет стоматологическую помощь по направлениям: протезирование зубов, ортодонтия (исправление прикуса), хирургическая стоматология, гигиена и профилактика, имплантация зубов, лечение зубов, пародонтология, детская стоматология, эстетическая стоматология.
                    <br/>
                    <br/>
                    <span className="text-[14px]">
                    * Для оформления истории болезни и договора на оказание платных услуг, необходимо предоставить документ, удостоверяющий личность (паспорт, свидетельство о рождении) заказчика и потребителя  медицинских услуг.
                    </span> 
                </p>
            </div>
            <h3 className="p-5 flex justify-start text-[20px] underline font-semibold drop-shadow-[0_4px_3px_rgb(192,192,192)]">
               <a>Полный прайс наших услуг</a> 
            </h3>
            <div className="flex flex-wrap justify-center">
                <div className="flex-col w-[420px] h-[420px] 
                    m-2 shadow-lg shadow-[rgb(0,130,255)] 
                    border-[2px] border-b-[4px] p-5 
                    border-gray-300 rounded-[30px]
                    transition delay-150 duration-1000 hover:scale-105
                ">
                    <span className="flex justify-center text-[22px] font-semibold drop-shadow-[0_4px_3px_rgb(192,192,192)]">Терапия</span>
                   <div className="flex mt-5 justify-between">
                        <img src={terapi_1} alt="terapi_1" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={terapi_2} alt="terapi_2" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={terapi_3} alt="terapi_3" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                    </div>
                    <div className="mt-5 leading-3">
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Лечение зубов
                            </span>                            
                        </div><br/>
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Отбеливание зубов
                            </span>                            
                        </div><br/>
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Пародонтологическое лечение
                            </span>                            
                        </div><br/>
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Реставрация зубов
                            </span>                            
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="flex items-center justify-center mt-7 border-[1px] border-b-[3px] shadow-md shadow-gray-300 hover:shadow-[0_4px_7px_rgba(50,140,255)] hover:bg-blue-200 rounded-[10px] w-[200px] h-[50px]">  
                            Получить консультацию
                        </button>                         
                    </div>
                </div>
                <div className="flex-col w-[420px] h-[420px] 
                    m-2 shadow-lg shadow-[rgb(0,130,255)] 
                    border-[2px] border-b-[4px] p-5 
                    border-gray-300 rounded-[30px]
                    transition delay-150 duration-1000 hover:scale-105
                ">
                    <span className="flex justify-center text-[22px] font-semibold drop-shadow-[0_4px_3px_rgb(192,192,192)]">Хирургия</span>
                   <div className="flex mt-5 justify-between">
                        <img src={hirurg_1} alt="terapi_1" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={hirurg_2} alt="terapi_2" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={hirurg_3} alt="terapi_3" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                    </div>
                    <div className="mt-5 leading-3">
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Удаление зубов любой сложности
                            </span>                            
                        </div><br/>
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Имплантация зубов
                            </span>                            
                        </div>
                    </div>
                    <div className="flex mt-[62px] justify-center">
                        <button className="flex items-center justify-center mt-7 border-[1px] border-b-[3px] shadow-md shadow-gray-300 hover:bg-blue-200 hover:shadow-[0_4px_7px_rgba(50,140,255)] rounded-[10px] w-[200px] h-[50px]">  
                            Получить консультацию
                        </button>                         
                    </div>
                </div>
                <div className="flex-col w-[420px] h-[420px] 
                    m-2 shadow-lg shadow-[rgb(0,130,255)] 
                    border-[2px] border-b-[4px] p-5 
                    border-gray-300 rounded-[30px]
                    transition delay-150 duration-1000 hover:scale-105
                ">
                    <span className="flex justify-center text-[22px] font-semibold drop-shadow-[0_4px_3px_rgb(192,192,192)]">Ортодонтия</span>
                   <div className="flex mt-5 justify-between">
                        <img src={ortodont_1} alt="terapi_1" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={ortodont_2} alt="terapi_2" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={ortodont_3} alt="terapi_3" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                    </div>
                    <div className="mt-5 leading-3">
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Исправление прикуса
                            </span>                            
                        </div><br/>
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Функциональная ортодонтия
                            </span>                            
                        </div>
                    </div>
                    <div className="flex mt-[62px] justify-center">
                        <button className="flex items-center justify-center mt-7 border-[1px] border-b-[3px] shadow-md shadow-gray-300 hover:bg-blue-200 hover:shadow-[0_4px_7px_rgba(50,140,255)] rounded-[10px] w-[200px] h-[50px]">  
                            Получить консультацию
                        </button>                         
                    </div>
                </div>
                <div className="flex-col w-[420px] h-[420px] 
                    m-2 shadow-lg shadow-[rgb(0,130,255)] 
                    border-[2px] border-b-[4px] p-5 
                    border-gray-300 rounded-[30px]
                    transition delay-150 duration-1000 hover:scale-105
                ">
                    <span className="flex justify-center text-[22px] font-semibold drop-shadow-[0_4px_3px_rgb(192,192,192)]">Ортопедия</span>
                   <div className="flex mt-5 justify-between">
                        <img src={ortoped_1} alt="terapi_1" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={ortoped_2} alt="terapi_2" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                        <img src={ortoped_3} alt="terapi_3" className="shadow-md shadow-gray-500 rounded-[10px] w-[110px]"/>
                    </div>
                    <div className="mt-5 leading-3">
                        <div className="flex items-center">
                            <img width='20px' src={icon} alt="icon"/>
                            <span className="drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                                &ensp; Протезирование зубов
                            </span>                            
                        </div>
                    </div>
                    <div className="flex justify-center mt-[95px]">
                        <button className="flex items-center justify-center mt-7 border-[1px] border-b-[3px] shadow-md shadow-gray-300 hover:bg-blue-200 hover:shadow-[0_4px_7px_rgba(50,140,255)] rounded-[10px] w-[200px] h-[50px]">  
                            Получить консультацию
                        </button>                         
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Price;
