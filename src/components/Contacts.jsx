import map from '../assets/images/aboutUsImages/yandexMaps.png'

function Contacts() {
    return(
        <div className="
            mx-auto min-h-[800px] lg:mt-10
            flex flex-col max-w-[1000px] p-8 border-[2px] 
            border-b-[5px] border-gray-300  shadow-blue-500 
            rounded-[30px] shadow-xl
        ">
            <h2 className="text-[46px] flex justify-center font-sans tracking-tight font-bold mt-5 drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                Контакты
            </h2>
            <div className="p-10">
                <div>
                    <h3 className="text-[30px] font-bold drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                        Режим работы
                    </h3>
                    <span>
                        Понедельник-суббота: 8:00 - 20:00<br/>
                        Воскресенье выходной
                    </span>
                </div>
                <div>
                    <h3 className="mt-[30px] items-end text-[30px] font-bold drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                        Адрес
                    </h3>
                    <span>
                        344038, Ростовская область,<br/> г.Ростов-на-Дону, Проспект Михаила Нагибина 14б
                    </span>
                </div>
                <div className="flex">
                    <div className="w-1/4">
                        <h3 className="mt-[30px] items-end text-[30px] font-bold drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                            Телефон
                        </h3>
                        <span>
                            +7 (938) 170-55-55<br/> +7 (928) 170-88-84
                        </span>                        
                    </div>
                    <div className="w-1/4">
                        <h3 className="mt-[30px] items-end text-[30px] font-bold drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                            E-mail
                        </h3>
                        <span>
                            Sokolova_Elena@selena.dental
                        </span>                            
                    </div>
                </div>
                <div className='mt-10'>
                    <img src={map} alt="maps" className='w-full border-[1px] border-gray-400 border-b-[4px] rounded-[30px] shadow-2xl'/>
                </div>           
            </div>


        </div>
    )
};


export default Contacts;
