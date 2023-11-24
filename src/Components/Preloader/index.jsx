import React from 'react';
import Lottie from 'lottie-react';
import animationData from './walletx.json';
const Preloader = () => {
  const lottieRef = React.useRef(null);
  const setAnimationSpeed = (speed) => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  };
  React.useEffect(() => {
    setAnimationSpeed(0.5);
  }, []);
  return (
    <>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Lottie
          animationData={animationData}
          style={{ height: '25rem', marginTop: '-10rem' }}
          lottieRef={lottieRef}
        ></Lottie>
      </div>
    </>
  );
};

export default Preloader;
