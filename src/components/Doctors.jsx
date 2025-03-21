import doctor_1 from "../assets/images/doctorsImages/doctor_1.png"

function Doctors() {
    return(
        <div className="mx-auto mb-10 min-h-[800px] flex-col flex justify-center items-center max-w-[1000px] p-4 border-[2px] border-gray-300 border-b-[5px] shadow-xl shadow-[rgb(0,130,255)] rounded-[30px]">
            <h1 className="flex justify-center text-[50px] font-semibold drop-shadow-[0_4px_3px_rgb(192,192,192)]">
                Наши специалисты
            </h1>
            <div className="mt-10 flex justify-center">
                <img src={doctor_1} alt="doc_1" className="rounded-[30px] border-[2px] border-b-[4px] border-gray-300 size-1/3 shadow-xl drop-shadow-[0_4px_8px_rgba(0,130,255)] transition delay-150 duration-500 hover:scale-105"/>
            </div>
            <div className="flex lg:mt-10 font-bold justify-center size-1/3 h-[40px]">
                <h2 className="flex justify-center drop-shadow-[0_4px_3px_rgb(192,192,192)] text-[20px] tracking-tight">
                    Соколова Елена Владимировна
                </h2>
            </div>
            <div className="flex-col flex justify-center border-[2px] border-gray-300 border-b-[4px] shadow-md shadow-gray-500 rounded-[30px] items-start p-6 size-1/3 h-[120px]">
                <span className="drop-shadow-[0_4px_3px_rgb(128,128,128)]">
                    Главный врач клиники <b>"Селена"</b><br/>
                    Врач-стоматолог<br/> 
                </span>
                <span className="mt-2 drop-shadow-[0_4px_3px_rgb(128,128,128)]">
                    Стаж работы: с 2001г.
                </span>
            
            </div>
            
        
        </div>
    )
};

export default Doctors;
