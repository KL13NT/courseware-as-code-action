const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	webpack(config) {
		config.resolve.fallback = {
			fs: false,
			net: false,
			tls: false,
		};

		return config;
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
});
