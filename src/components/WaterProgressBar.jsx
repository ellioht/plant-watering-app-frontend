import ProgressBar from 'react-bootstrap/ProgressBar';
import './WaterProgressBar.css';

function WaterProgressBar(props) {
  return (
    <div>
      <ProgressBar className="pbar" now={props.waterProgBar} variant="custom-color" />
    </div>
  );
}

export default WaterProgressBar;