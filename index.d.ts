declare global {
  let process: NodeJS.Process;
  namespace NodeJS {
    interface ProcessEnv {
      readonly COOKIE_TOKEN_NAME: string;
      readonly BASE_URL: string;
    }
  }
}

// convert to module by adding an empty export statement.
export {};
