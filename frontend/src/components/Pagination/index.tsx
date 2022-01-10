import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
	return(
		<div className="mamovie-pagination-container">
		    <div className="mamovie-pagination-box">
		        <button className="mamovie-pagination-button" disabled={true} >
		            <Arrow />
		        </button>
		        <p>{`${1} de ${3}`}</p>
		        <button className="mamovie-pagination-button" disabled={false} >
		            <Arrow className="mamovie-flip-horizontal" />
		        </button>
		    </div>
		</div>
	);
}

export default Pagination;