const cardTypes = [
  { label: "X̄-карта", desc: "Среднее значение выборки" },
  { label: "R-карта", desc: "Размах — разброс значений" },
  { label: "p-карта", desc: "Доля дефектных единиц" },
  { label: "c-карта", desc: "Количество дефектов на единицу" },
  { label: "u-карта", desc: "Дефекты при переменной выборке" },
  { label: "S-карта", desc: "Стандартное отклонение" },
];

export default function Featured() {
  return (
    <div id="types" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Контрольные карты — мониторинг процессов"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Инструменты СКК</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Выберите нужный тип карты — для переменных или атрибутов. Каждая решает свою задачу в системе управления качеством.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {cardTypes.map((item) => (
            <div key={item.label} className="border border-neutral-200 px-4 py-3">
              <div className="font-bold text-neutral-900 text-lg">{item.label}</div>
              <div className="text-neutral-500 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Начать анализ
        </button>
      </div>
    </div>
  );
}