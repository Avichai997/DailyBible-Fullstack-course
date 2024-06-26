/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useLayoutEffect } from 'react';
import './NoMatch.scss';
import { useNavigate } from 'react-router-dom';

const NoMatchPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const drawVisor = () => {
      // const canvas = <HTMLCanvasElement> document.getElementById('myChart');
      const canvas = document.getElementById('visor') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      ctx?.beginPath();
      ctx?.moveTo(5, 45);
      ctx?.bezierCurveTo(15, 64, 45, 64, 55, 45);

      ctx?.lineTo(55, 20);
      ctx?.bezierCurveTo(55, 15, 50, 10, 45, 10);

      ctx?.lineTo(15, 10);

      ctx?.bezierCurveTo(15, 10, 5, 10, 5, 20);
      ctx?.lineTo(5, 45);

      ctx!.fillStyle = '#2f3640';
      ctx!.strokeStyle = '#f5f6fa';
      ctx!.fill();
      ctx!.stroke();
    };

    const cordCanvas = document.getElementById('cord') as HTMLCanvasElement;
    const ctx = cordCanvas.getContext('2d');

    let y1 = 160;
    let y2 = 100;
    let y3 = 100;

    let y1Forward = true;
    let y2Forward = false;
    let y3Forward = true;

    const animate = () => {
      window.requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx!.beginPath();
      ctx!.moveTo(130, 170);
      ctx!.bezierCurveTo(250, y1, 345, y2, 400, y3);

      ctx!.strokeStyle = 'white';
      ctx!.lineWidth = 8;
      ctx!.stroke();

      if (y1 === 100) {
        y1Forward = true;
      }

      if (y1 === 300) {
        y1Forward = false;
      }

      if (y2 === 100) {
        y2Forward = true;
      }

      if (y2 === 310) {
        y2Forward = false;
      }

      if (y3 === 100) {
        y3Forward = true;
      }

      if (y3 === 317) {
        y3Forward = false;
      }

      y1Forward ? y1++ : y1--;
      y2Forward ? y2++ : y2--;
      y3Forward ? y3++ : y3--;
    };

    drawVisor();
    animate();
  }, []);

  return (
    <div className='wrapper_NoMatch'>
      <div className='moon' />
      <div className='moon__crater moon__crater1' />
      <div className='moon__crater moon__crater2' />
      <div className='moon__crater moon__crater3' />

      <div className='star star1' />
      <div className='star star2' />
      <div className='star star3' />
      <div className='star star4' />
      <div className='star star5' />

      <div className='error'>
        <div className='error__title'>404</div>
        <div className='error__subtitle'>מממ....</div>
        <div className='error__description'>
          נראה כאילו הלכת לאיבוד...
          <br />
          הדף שחיפשת לא קיים
        </div>
        <button onClick={() => navigate('/Login')} className='error__button error__button--active'>
          התחבר
        </button>
        <button onClick={() => navigate(-1)} className='error__button'>
          חזור
        </button>
      </div>

      <div className='astronaut'>
        <div className='astronaut__backpack' />
        <div className='astronaut__body' />
        <div className='astronaut__body__chest' />
        <div className='astronaut__arm-left1' />
        <div className='astronaut__arm-left2' />
        <div className='astronaut__arm-right1' />
        <div className='astronaut__arm-right2' />
        <div className='astronaut__arm-thumb-left' />
        <div className='astronaut__arm-thumb-right' />
        <div className='astronaut__leg-left' />
        <div className='astronaut__leg-right' />
        <div className='astronaut__foot-left' />
        <div className='astronaut__foot-right' />
        <div className='astronaut__wrist-left' />
        <div className='astronaut__wrist-right' />

        <div className='astronaut__cord'>
          <canvas id='cord' height='500px' width='500px' />
        </div>

        <div className='astronaut__head'>
          <canvas id='visor' width='60px' height='60px' />
          <div className='astronaut__head-visor-flare1' />
          <div className='astronaut__head-visor-flare2' />
        </div>
      </div>
    </div>
  );
};

export default NoMatchPage;
