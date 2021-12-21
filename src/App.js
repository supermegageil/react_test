import './css/style.css';
import { Logo, Menu } from './components/Header.js';
import Panel from './components/Panel.js';
import Footer from './components/Footer.js';

const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
const path = process.env.PUBLIC_URL;

function App() {
	return (
		<div className="App">
			{/* 전체 레이아웃 */}
			<figure>
				<Logo />
				<Menu />

				<section>
					{
						arr.map((data, index) => {
							return <Panel key={index} path={path} data={data} />
						})
					}
				</section>

				<Footer />
			</figure>
		</div>
	);
}

export default App;
