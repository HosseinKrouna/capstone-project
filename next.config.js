/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},

	// images: {
	// 	loader: "cloudinary",
	// 	loaderFile: "/api/upload.js",
	// },

	// images: {
	// 	domains: ["res.cloudinary.com"],
	// },
	// images:
	// {
	// 	remotePatterns: [
	// 		{
	// 			protocol: "https",
	// 			hostname: "res.cloudinary.com",
	// 		},
	// 	],
	// },
};

module.exports = nextConfig;
