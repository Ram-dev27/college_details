import React from 'react';




const Spinner = () => {
  return (

    <div style={{display:'flex', flexDirection:"row",alignItems:'center',marginLeft:'40%',marginTop:'5%'}}>
      <img src={'./giphy.gif'} alt="Loading..."/>
    </div>
  );
};

export default Spinner;