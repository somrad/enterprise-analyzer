// src/components/Settings.tsx

import Header from "./header/Header";
import Houses from "./houses/Houses";

const Public = () => {
  

  return (<div className='container'> 
      <Header headerText='Enterprise Analyzer Dashboard'/>
      <Houses />
     </div>
     );
}

export default Public;