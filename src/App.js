import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
	return (
		<div className="App">
			{/* 전체 레이아웃 */}
			<figure>
				<Logo />
				<Menu />

				<Footer />				
			</figure>
		</div>
	);
}

export default App;
