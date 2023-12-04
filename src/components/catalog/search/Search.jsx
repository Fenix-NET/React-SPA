import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <form autocomplete="off">
        <label>
          <input
            className="search-box"
            type="text"
            name="search"
            placeholder="Поиск по каталогу"
          />
          <input className="search-submit" type="submit" value="" />
        </label>
      </form>
    </div>
  );
};

export default Search;
