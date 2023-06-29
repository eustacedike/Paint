

import './home.css';
import Service from './service';
import Advert from './advert';
import Benefits from './benefits';
import Events from './events';
import Gallery from './gallery';



function Home() {
  return (
    <div className="Home">
      
      <Service/>
      <Advert/>
      <Benefits/>
      <Events/>
      <Gallery/>
    </div>
  );
}

export default Home;
