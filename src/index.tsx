import "./index.css";

import App from "app/App";
import ErrorFallback from "components/ErrorFallback";
import { createHttp } from "libs/createHttp";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";

const http = createHttp("http://localhost:3001");

render(
	<StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<App http={http} />
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
