import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  moduleDirectories: ["node_modules", "./test"],
  verbose: true,
};
export default config;
