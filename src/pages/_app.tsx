import React from "react";
import type { AppProps } from "next/app";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS
import "highlight.js/styles/shades-of-purple.css"; // a highlight-js theme

import "../styling/index.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className="container">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default App;
