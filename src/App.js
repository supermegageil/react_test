import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';

const name1 = "DAVID2";

function App() {
	return (
		<div className="App">
			{/* 전체 레이아웃 */}
			<figure>
				<Logo />
				<Menu />

				<section>
					<article>
						<div className="inner">
							{name1}
						</div>
					</article>
					<article>
						<div className="inner">
							ANDY
						</div>
					</article>
					<article>
						<div className="inner">
							MICHAEL
						</div>
					</article>
					<article>
						<div className="inner">
							JULIA
						</div>
					</article>
					<article>
						<div className="inner">
							CHRISTOPER
						</div>
					</article>
					<article>
						<div className="inner">
							EMMA
						</div>
					</article>
					<article>
						<div className="inner">
							PAUL
						</div>
					</article>
					<article>
						<div className="inner">
							CATHERINE
						</div>
					</article>
				</section>

				<Footer />				
			</figure>
		</div>
	);
}

export default App;
