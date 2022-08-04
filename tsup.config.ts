import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	dts: false,
	entry: ["src/**/*.ts", "!src/**/*.d.ts", "typings/"],
	format: ["cjs"],
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: false,
	target: "esnext",
	bundle: false,
	shims: false,
	keepNames: true,
	splitting: false,
	define: {
		this: "global",
	},
});
