import ProgressBar from 'react-bootstrap/ProgressBar';
import './WaterProgressBar.css';

function WaterProgressBar() {
  return (
    <div>
      <ProgressBar className="pbar" now={60} variant="custom-color" />
    </div>
  );
}

export default WaterProgressBar;