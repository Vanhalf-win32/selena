import hero_0 from "../assets/images/consultationImages/consult.png";
import contactArrow from "../assets/images/headerImages/arrow.png";
import "../assets/styles/consultation.css";


function Consultation() {
  
  return (
    <section className="consultationContent mt-56 grid grid-cols-[0.4fr_0.6fr] place-items-center max-w-[1040px] mx-auto my-10 gap-5 rounded-[50px] max-lg:flex max-lg:flex-col max-lg:w-fit max-lg:p-5">
      <div className="flex lg:w-[400px] lg:h-[330px] shadow-xl drop-shadow-[0_4px_8px_rgba(0,130,255)] transition delay-150 duration-500 hover:scale-105 rounded-[30px] overflow-hidden">
        <img src={hero_0} alt="Dentist" className="w-full h-full" />
      </div>
      <div className="consultationFormSide max-lg:p-5 max-md:p-0">
        <h2 className="sectionMainTitle text-center mb-6 font-sans font-bold text-[36px]">Бесплатная консультация</h2>
        <form action="POST" className="consultationForm">
          <div
            className="consultationFormInputs grid grid-cols-2 gap-5
          max-md:grid-cols-1 
          "
          >
            <input type="text" placeholder="Полное имя" className="consultationInput drop-shadow-[0_4px_8px_rgba(0,130,255)] max-md:w-full" />
            <input type="text" placeholder="Вид услуги" className="consultationInput drop-shadow-[0_4px_8px_rgba(0,130,255)] max-md:w-full" />
            <input type="email" placeholder="Email" className="consultationInput drop-shadow-[0_4px_8px_rgba(0,130,255)] max-md:w-full" />
            <input type="tel" placeholder="Номер телефона " className="consultationInput drop-shadow-[0_4px_8px_rgba(0,130,255)] max-md:w-full" />
          </div>

          <div
            className="consultationFormButtonContent w-full shadow-buttonShadow bg-secondary flex justify-center items-center gap-2 px-5 py-2
           rounded-[30px] font-sans font-bold h-[50px] mt-8"
          >
            <input className="consultationFormButton text-[20px]" type="submit" value="Получить бесплатную консультацию" />
            <div className="bookingButtonImgContent max-w-[15px] flex items-center justify-center">
              <img src={contactArrow} alt="Arrow" className="bookingButtonImg w-full" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Consultation;
