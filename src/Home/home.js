

import './home.css';
import Service from './service';
import Advert from './advert';
import Benefits from './benefits';
import Events from './events';
import Products from './products';
import Subscribe from './subscribe';



function Home() {
  return (
    <div className="Home">
      
      <Service/>
      <Advert/>
      {/* <Benefits/> */}
      <Events/>
      <Products/>
      <Subscribe/>
    </div>
  );
}

export default Home;
