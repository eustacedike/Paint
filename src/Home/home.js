

import './home.css';
import Service from './service';
import Advert from './advert';
import Benefits from './benefits';
import Events from './events';



function Home() {
  return (
    <div className="Home">
      
      <Service/>
      <Advert/>
      <Benefits/>
      <Events/>
    </div>
  );
}

export default Home;
