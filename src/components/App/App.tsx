import DashboardLayoutBasic from "@components/Mui/Dashboard/Dashboard";
import Providers from "@components/Custom/providers/Providers";

function App() {
	return (
		<Providers>
			{(initialData) => <DashboardLayoutBasic />}
		</Providers>
	)
};

export default App;
