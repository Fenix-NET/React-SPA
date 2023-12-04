import Cpu from "../../assets/icons/cpu.png";
import Gpu from "../../assets/icons/gpu.png";
import Motherboard from "../../assets/icons/motherboard.png";
import Ram from "../../assets/icons/ram.png";
import Hdd from "../../assets/icons/hdd.png";
import Ssd from "../../assets/icons/ssd.png";
import Psu from "../../assets/icons/psu.png";
import Case from "../../assets/icons/case.png";

const CatalogDropDown = () => {
  return (
    <div className="dropdown">
      <div className="drop-btn-catalog">
        Каталог&nbsp;
        <i className="fa fa-caret-down"></i>
      </div>
      <div className="dropdown-catalog">
        <a href="" className="a-catalog">
          <img src={Cpu} alt="cpu" className="icon-catalog" />
          &nbsp; Процессоры
        </a>
        <a href="" className="a-catalog">
          <img src={Gpu} alt="gpu" className="icon-catalog" />
          &nbsp; Видеокарты
        </a>
        <a href="" className="a-catalog">
          <img src={Motherboard} alt="mbr" className="icon-catalog" />
          &nbsp; Материнские платы
        </a>
        <a href="" className="a-catalog">
          <img src={Ram} alt="ram" className="icon-catalog" />
          &nbsp; Оперативная память
        </a>
        <a href="" className="a-catalog">
          <img src={Hdd} alt="psu" className="icon-catalog" />
          &nbsp; Жесткие диски
        </a>
        <a href="" className="a-catalog">
          <img src={Ssd} alt="psu" className="icon-catalog" />
          &nbsp; SSD
        </a>
        <a href="" className="a-catalog">
          <img src={Psu} alt="psu" className="icon-catalog" />
          &nbsp; Блоки питания
        </a>
        <a href="" className="a-catalog">
          <img src={Case} alt="case" className="icon-catalog" />
          &nbsp; Корпусы
        </a>
      </div>
    </div>
  );
};

export default CatalogDropDown;
