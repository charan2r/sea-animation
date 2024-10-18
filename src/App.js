import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';

function App() {

  const [animateMarineLife, setAnimateMarineLife] = useState(false);

  const handleClick = () => {
    setAnimateMarineLife(true);
  }

  const fishStyles = useSpring({
    from: {
      x: -100,
    },
    to: {
      x: animateMarineLife ? 500 : -100,
    },
    config: {
      duration: 4000,
    },
   loop: {
     reverse: true,
   }
  });

  const bubbleStyles = useSpring({
    from: {
      y: 0, opacity: 1,
    },
    to: {
      y: animateMarineLife ? -300 : -0, opacity: animateMarineLife ? 0 : 1,
    },
    config: {
      duration: 5000,
    },
    loop: true,
    reset: true,
  });


  const weedStyles = useSpring({
    from: {
      rotate: 0,
    },
    to: {
      rotate: animateMarineLife ? 15 : 0,
    },
    config: {
      duration: 3000,
    },
    loop: {
      reverse: true
    },
    
  });


  return (
    <div className="App">
      <div className='ocean' onClick={handleClick}>
        <animated.div className="fish" style={fishStyles}>
          <img src="/images/clownfish.png" alt='fish' className='fish-image'/>
        </animated.div>

        <animated.div className="bubble" style={bubbleStyles}>
          <img src="/images/bubbles.png" alt='bubble' className='bubble-image'/>
        </animated.div>

        <animated.div className="weed" style={weedStyles}>
          <img src="/images/seaweed.png" alt='weed' className='weed-image'/>
        </animated.div>

      </div>
    </div>
  );
}

export default App;
