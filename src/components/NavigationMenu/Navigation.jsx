import AddIcon from '@mui/icons-material/Add';
// import RadialItem from 'react-radial-menu/dist/RadialItem';
// import { NavLink } from 'react-router-dom';

//images
import Appbar from '../../assets/images/Main/AppBar/AddMenu.svg'
import Mask from '../../assets/images/Main/AppBar/Mask.svg'
import Call from '../../assets/images/Main/AppBar/Call.svg'
import Racetas from '../../assets/images/Main/AppBar/Racetas.svg'

import "./Navigation.css"
import { style } from '@mui/system';

const Navigation = () => {

  




    return (
      <div className={style.Appbar}>
          <button className='toggle'>
            <AddIcon className='AppIcons'/>
          </button>
          <li>
            <button >
                <img src={Appbar} alt="" />
            </button>
          </li>
          <li>
            <button >
                <img src={Call} alt="" />
            </button>
          </li>
          <li>
            <button >
                <img src={Mask} alt="" />
            </button>
          </li>
          <li>
            <button >
                <img src={Racetas} alt="" />
            </button>
          </li>
        

      </div>

    )
  
}

export default Navigation