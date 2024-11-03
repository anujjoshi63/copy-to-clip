import './App.css';
import { Button } from './components/ui/button';
import { textItems } from '../text-items.json';
function App() {
	return (
		<>
			{/* grid with auto n columns according to content */}
			<div className="flex flex-wrap  gap-2">
				{/* <div className="grid grid-flow-row gap-2"> */}
				{textItems.map((item, index) => {
					return (
						<Button
							className="bg-primary text-white w-fit"
							key={index}
							// copy item to clipboard on click and sonner
							onClick={() => navigator.clipboard.writeText(item)}
							text={item}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
