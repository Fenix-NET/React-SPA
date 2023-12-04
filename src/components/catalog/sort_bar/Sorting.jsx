const Sorting = () => {
  return (
    <div>
      <span>Сортировка: </span>
      <span>
        <select>
          <option selected value="default">
            По умолчанию
          </option>
          <option value="lime">Сначала недорогие</option>
          <option value="coconut">Сначала дорогие</option>
        </select>
      </span>
    </div>
  );
};

export default Sorting;
