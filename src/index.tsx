import "./index.css";

import App from "app/App";
import { createHttp } from "libs/createHttp";
import React, { StrictMode } from "react";
import { render } from "react-dom";

const http = createHttp("http://localhost:3001");

render(
	<StrictMode>
		<App http={http} />
	</StrictMode>,
	document.getElementById("root")
);
