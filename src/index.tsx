import "./index.css";

import App from "app/App";
import React, { StrictMode } from "react";
import { render } from "react-dom";

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
