import React from "react"
import Layout from "../components/Layout/Layout"

import "./grain.scss"

function grain() {
  return (
    <Layout>
      <div className="grain">
        <h2>Оптовая торговля</h2>
        <a
          href="https://drive.google.com/file/d/1oXmZvyHToFFmByYBm9G7ZleQ5hFI73yS/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          ПРАЙС-ЛИСТ
        </a>
        <div className="grid">
          {/* <div className="card">
            <h3>Комбикорм полнорационный ПК-1-15</h3>
            <span>
              Для кур яичных кроссов свыше 40 до 60 недель включительно
              <p>СТБ 1842-2008</p> обеспечивает высокую яйценоскость без
              дополнительного подкармливания (280 яиц в год); гарантирует
              получение яиц с прочной скорлупой; повышает показатели
              воспроизводства и инкубации; помогает выработать иммунитет против
              болезней и инфекций;
              <br /> обеспечивает птицу жизненно важными для нее веществами и
              витаминам;
              <br /> предупреждает авитаминозы и болезни, вызванные недостатком
              микроэлементов и витаминов;
              <br /> предупреждает массовые желудочно-кишечные заболевания;
              <br /> содержит необходимое количество наиболее важных
              микроэлементов для жизнедеятельности птицы:
              <br />
              кальция (от полноценного содержания которого зависит состояние
              костной системы птицы и формирование скорлупы);
              <br /> фосфора (нормализует обмен кальция, препятствует развитию
              рахита у молодняка);
              <br /> натрия (повышает качество скорлупы, контролирует
              фосфорно-кальциевый обмен). <h4>Состав комбикорма</h4>
              <p>
                Зерновая группа 65% (кукуруза, тритикале, ячмень шелушенный,
                пшеница, рожь)
              </p>
              Белковая группа 25% (шрот подсолнечный, шрот соевый, жир, рыбная
              мука, мясокостная мука, дрожжи)
              <p>
                Минерально-витаминная группа 10% (мел, фосфат, поваренная соль,
                премикс)
              </p>
              <h4>Качественные показатели</h4>
              Обменная энергия: 11,63 МДж/кг
              <br /> Сырой протеин: не менее 16,5 %.
              <br />
              Сырая клетчатка: не более 5,5 %.
              <br /> Лизин: не менее 0,77%
              <br /> Метионин + цистин: не менее 0,68%
              <br /> Триптофан: не менее 0,17%
              <br /> Кальций: не менее 3,50%.
              <br /> Фосфор: не более 0,70 %.
              <br /> Натрий: не более 0,20 %.
              <p>Форма: гранулы, экспандировано-гранулированная крупка.</p>
              <p>Упаковка: полипропиленовые 30 кг.</p>
              <p>Сроки хранения: 1 месяц с момента изготовления.</p>
            </span>
          </div>*/}
          <div>
            <div className="card">
              <h3>ШРОТ ПОДСОЛНЕЧНЫЙ</h3>
              <span>
                Протеин, не менее 39 % в пересчетена а.с.в.;
                <br />
                Массовая доля сырого жира, 1,5 % в пересчете на а.с.в.;
                <br />
                Сырая клетчатка, не более 23 % в пересчете на а.с.в.;
                <br />
                Массовая доля влаги и летучих веществ, 9-11 %;
                <br />
                Массовая доля влаги и летучих веществ, 9-11 %;
                <br />
                <p>
                  Содержание пестицидов, микотоксинов, металлов, согласно
                  ветеринарно-санитарным нормативам Республики Беларусь. Срок
                  хранения: в надлежащих условиях - 3 месяца (насыпью), в мешках
                  до 1 года. Производства Украины и России.
                </p>
              </span>
            </div>

            {/* <div className="card last">
              <h3>ДРОЖЖИ КОРМОВЫЕ ГОСТ</h3>
              <span>
                Массовая доля влаги, не более 10,0%;
                <br />
                Массовая доля сырого протеина в пересчете на а.с.в. "не менее -
                43,0 %";
                <br />
                Массовая доля белка по Барнштейну в пересчете на а.с.в., "не
                менее 32,0 %";
                <br />
                Наличие живых клеток продуцента - Отсуствуют;
                <br />
                Токсичность - Нетоксично;
                <br />
                Массовая доля золы в пересчете на а.в.с., не более - 10,0%;
                <br />
                <p>
                  Продукция отгружается в полипропиленовых мешках по 30-35 кг,
                  биг-бэгах до 1 000 кг, а также в бумажных мешках до 30 кг, на
                  паллетах. Срок хранения: 6 месяцев со дня производства.
                </p>
              </span>
            </div>
            <div className="card last">
              <h3>Сухие пивные дрожжи неактивные</h3>
              <h4>ТУ BY193357461.001-2020</h4>
              <span>
                <h4>Состав:</h4>
                <p>
                  Пивные дрожжи неактивные сухие. Форма выпуска: порошок
                  Гарантируемые показатели: Массовая доля сырого протеина, не
                  менее – 40 % Массовая доля влаги, не более – 10 % Патогенные
                  микроорганизмы, в том числе сальмонелла в 25 г. – Не
                  допускаются. Энергетическая ценность: 215,6 ккал., ( 902,0
                  кДж.) Питательная ценность: Белки 40 г., Жиры 1,2 г., Углеводы
                  10,2 г.
                </p>
                <p>
                  Масса нетто: 25 кг. Упаковка: мешок с полиэтиленовым
                  вкладышем. № партии: Дата выпуска: Срок годности: 24 месяца с
                  даты изготовления. Хранить: в сухом, защищенном от света месте
                  при температуре не выше 25ºС
                </p>
              </span>
            </div> */}
          </div>
          <div className="card">
            <h3>ШРОТ СОЕВЫЙ</h3>
            <span>
              Шрот соевый рекомендован для введения в корма птиц, рыб и
              животных, так как по своему происхождению близок к животным
              белкам. При добавлении соевого шрота в комбикорм наблюдается
              увеличение суточного роста животных, увеличивается качество молока
              и надой, питательные вещества, содержащиеся в корме, усваиваются
              значительно лучше, что положительно влияет на общее состояние
              животных. Качественные показатели:
              <br />
              - Протеин на с.в. 50 % на а.с.в.
              <br />
              - Массовая доля жира 2%
              <br />- Клетчатка на с.в. 9%
            </span>
          </div>
          {/* <div className="card">
            <h3>Комбикорм-концентрат КК-61С</h3>
            <span>
              Для молочных коров продуктивностью свыше 6000кг. в стойловый
              период.
              <p>ГОСТ 9268-2015</p>
              высокую продуктивность животных и нормальное воспроизводство;
              <br />
              позволяет получать стабильно высокие удои на протяжении многих
              лактаций;
              <br />
              обеспечивает получение молока высокого качества;
              <br />
              помогает получить высокое содержание жира;
              <br />
              При кормлении коров по рекомендуемому рациону надои достигают до
              8000 литров в год.
              <h4>Состав комбикорма</h4>{" "}
              <p>Зерновая группа (тритикале, ячмень, пшеница, овес, рожь)</p>{" "}
              <p>
                Белковая группа (шрот подсолнечный, шрот соевый, дрожжи
                кормовые, шрот рапсовый, жмых рапсовый)
              </p>
              <p>
                Минерально-витаминная группа (поваренная соль, мел, фосфат,
                премикс П60-3, меласса)
              </p>
              <h4>Качественные показатели</h4> Обменная энергия: не менее 11
              МДж/кг.
              <br /> Кормовые единицы в 1 кг: не менее 1.0.
              <br /> М.д. сырого протеина: не менее 20%.
              <br /> М.д. сырого жира: не менее 5%.
              <br /> М.д. сырой клетчатки: не более 6%.
              <br /> М.д. крахмала+сахара: 25-35%.
              <br /> М.д. лизина: не менее 0,75%.
              <br /> М.д. метионина+цистита: не менее 0,45%.
              <br /> М.д. кальция: 0,6-0,85%.
              <br /> М.д. фосфора: 0,85-1,0%.
              <br /> М.д. хлорида натрия: 1,0-1,5%.
              <br />
              <p>
                Форма: гранулы, гранулированый или экспандировано-гранулированый
                вид.
              </p>
              <p>
                Упаковка: мешки полипропиленовые 30 кг, мешки полипропиленовые
                25 кг.
              </p>
              <p>Срок хранения: 2 месяца с момента изготовления.</p>
            </span>
          </div> */}
          {/* <div className="card">
            <h3>Комбикорм-концентрат КК-55</h3>
            <span>
              Для откорма свиней до жирных кондиций
              <p>ГОСТ 9267-68</p>
              удовлетворяет потребность животного в энергии и питательных
              веществах, микроэлементах и витаминах; регулирует обмен веществ;
              <br />
              среднесуточный привес составляет 600 г.
              <h4>Состав комбикорма</h4>
              <p>
                Зерновая группа 85% (тритикале, ячмень, отруби пшеничные,
                зерносмесь, рожь, кукуруза)
              </p>
              <p>Белковая группа 10% (шрот подсолнечный, дрожжи, люпин)</p>
              <p>
                Минерально-витаминная группа 5% (поваренная соль, мел, фосфат,
                премикс)
              </p>
              <h4>Качественные показатели</h4> Кормовые единицы: не менее 0,85.
              <br />
              Влажность: не более 14,5%.
              <br /> Сырой протеин: не менее 11%.
              <br /> Сырая клетчатка: не более 10%.
              <br />
              <p>Форма: гранулы, крупка или экспандированная крупка.</p>
              <p>Упаковка: мешки полипропиленовые, 30 кг.</p>
              <p>Срок хранения: 2 месяца с момента изготовления.</p>
            </span>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default grain
