import React from 'react';


var styles = {
    padding: '0px',
    margin: '0px',
    color: '#655b5d',
  };

  const ErrorBox = ({message,handleError}) => (
    <div className="error-box">
    <div onClick={handleError} className="close-btn"></div>
      <p style={styles}>{message}</p>
    </div>
  )



export default ErrorBox;
