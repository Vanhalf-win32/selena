import doc_1 from "../assets/docs/Согласие на обработку п.д.pdf";
import doc_2 from "../assets/docs/Согласие на обработку п.д. разрешенных субъектом п.д. для распространения.pdf";
import doc_3 from "../assets/docs/Приказ об утверждении политики в отношении о.п.д. и положения об обработке и защите п.д. работников.pdf";
import doc_4 from "../assets/docs/Приказ о создании комиссии по уничтожению п.д. СЕЛЕНА.pdf";
import doc_5 from "../assets/docs/Приказ о назначении ответственного за организацию о.п.д.pdf";
import doc_6 from "../assets/docs/Правила обработки обезличенных  персональных данных.pdf";
import doc_7 from "../assets/docs/Положение об обработке и защите персональных данных работников.pdf";
import doc_8 from "../assets/docs/Политика в отношении обработке персональных данных.pdf";
import doc_9 from "../assets/docs/Акт оценки вреда.pdf";
import doc_10 from "../assets/docs/Акт об уничтожении персональных данных.pdf";

function Documents() {
  return (
    <section className="mx-auto min-h-[800px] flex flex-col max-w-[1000px] p-8 border-[3px] border-gray-100 shadow-blue-500 rounded-[30px] shadow-xl"> 
      <h1 className="text-[46px] flex justify-center font-sans tracking-tight font-bold mt-5">
        Документы
      </h1>
      <h2 className="mt-[30px] items-end text-[30px] font-bold">
        Общая информация
      </h2>
      <p className="">
        <b>Полное наименование:</b>
        <br/>Общество с ограниченной ответственностью "Селена"
        <br/><b>Краткое наименование:</b>
        <br/>ООО "Селена"
        <br/><b>Генеральный директор:</b>
        <br/>Соколова Елена Владимировна
        <br/><b>Юридический адрес:</b>
        <br/>344038, Ростовская область, г.Ростов-на-Дону, Проспект Михаила Нагибина 14б
        <br/><b>Почтовый адрес:</b>
        <br/>344038, Ростовская область, г.Ростов-на-Дону, Проспект Михаила Нагибина 14б
        <br/><b>График работы:</b>
        <br/>понедельник - суббота: с 8:00 до 20:00<br/>
        воскресенье выходной
        <br/><b>Телефон:</b>
        <br/>+7 (938) 170-55-55
        <br/><b>Адрес электронной почты:</b>
        <br/><a className="underline">Sokolova_Elena@selena.dental </a>    
      </p>
      <div>
        <h2 className="mt-[30px] items-end text-[30px] font-bold">
          Юридическая документация
        </h2>
        <a href={doc_1} className="underline">Согласие на обработку персональных данных</a><br/>
        <a href={doc_2} className="underline">Согласие на обработку персональных данных разрешенных субъектом персональных данных для распространения</a><br/>
        <a href={doc_3} className="underline">Приказ об утверждении политики в отношении обработки персональных данных и положения об обработке и защите персональных данных работников</a><br/>
        <a href={doc_4} className="underline">Приказ о создании комиссии по уничтожению персональных данных</a><br/>
        <a href={doc_5} className="underline">Приказ о назначении ответственного за организацию обработки персональных данных</a><br/>
        <a href={doc_6} className="underline">Правила обработки обезличенных персональных данных</a><br/>
        <a href={doc_7} className="underline">Положение об обработке и защите персональных данных работников</a><br/>
        <a href={doc_8} className="underline">Политика в отношении обработке персональных данных</a><br/>
        <a href={doc_9} className="underline">Акт оценки вреда</a><br/>
        <a href={doc_10} className="underline">Акт об уничтожении персональных данных</a><br/>
      </div>
    </section>
  );
};

export default Documents;
