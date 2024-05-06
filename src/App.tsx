import { lazy, Suspense } from "react";
import Router from "./components/Router";
import OverlaySpinner from "./components/OverlaySpinner";

export default function App() {
	const ComponentLayout = lazy(() => import("./components/ComponentLayout"));

	return (
		<Suspense fallback={<OverlaySpinner />}>
			<ComponentLayout>
				<Router />
			</ComponentLayout>
		</Suspense>
	);
}
