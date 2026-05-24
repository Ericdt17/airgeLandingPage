import { Link } from "react-router-dom";
import { brandName } from "../constants";

const NavBrand = () => {
  return (
    <div className='justify-self-start flex items-center gap-2 shrink-0 min-w-0'>
      <Link to='/' className='min-w-0'>
        <p className='text-base sm:text-lg font-bold text-gradient leading-tight truncate max-w-[9rem] sm:max-w-none font-montserrat'>
          {brandName}
        </p>
      </Link>
    </div>
  );
};

export default NavBrand;
