import React from "react"
import PropTypes from "prop-types"

import "./ConsultingServices.scss"

const data = [{title: 'Создание бизнеса',
desc: `Базовое определение по форме и структуре создаваемого Предприятия
(ИП, ЧУП,ООО, ЗАО,ОАО, представительств, филиалов).
Проектирование системы управления компанией и группой компаний.
Разработка модели организационной структуры.
Структуризация комплексная и отдельных функциональных блоков.
Подготовка и передача бизнеса в управление от собственника наемному директору.`},
{title: 'Реорганизация',
desc: `Консалтинговые услуги по реорганизации  юридического лица любой сложности в форме:
присоединения, преобразования,  разделения,  выделения,  слияния.
Профессиональное сопровождение на всех этапах реорганизации предприятия.`},
{title: ' Диагностика и аудит',
desc: `Диагностика и аудит бизнес-процессов предприятия:
оптимизация системы распределения функций, полномочий, ответственности,
системы бизнес-процессов, а также структурно-функциональной схема работы,
упорядочивание  информационного обмена и документооборота на Предприятии.
Консультации по бухгалтерскому учету и отчетности, налогообложению,
ценообразованию, оптимизация налогообложения на Предприятии, в т.ч.
услуги по постановке, ведению, восстановлению бухгалтерского учета,
составлению и (или) представлению налоговой, финансовой и бухгалтерской
отчетности. а при необходимости - правовой и финансовый аудит.`},
{title: 'Сертификация и лицензирование',
desc: `Выполнение работ по оформлению сертификата о собственном производстве продукции, товара.
Выполнение работ по оформлению и получению лицензии на оптовую и розничную продажу лекарственных средств.
Выполнение работ по оформлению и получению лицензии на  оптовую и розничную реализацию ветеринарных препаратов.`},
{title: '',
desc: `Прочие консультации и услуги в сфере деятельности Заказчика.`},
]

const ConsultingServices = props => {
  return (
    <div className="consulting-services">
      <h2>Консалтинговые услуги</h2>
      <div className="grid">
      {data.map(({title, desc}) => {
          return (
              <div className="card">
                  <h3>{title}</h3>
                  <h4>{desc}</h4>
              </div>
          )
    })}
    </div>
    </div>
  )
}

ConsultingServices.propTypes = {}

export default ConsultingServices
