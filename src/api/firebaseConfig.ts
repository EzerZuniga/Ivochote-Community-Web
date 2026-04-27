type EnvValue = string | undefined;
type EnvLike = Record<string, EnvValue>;

export interface FirebasePublicConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

function readEnv(env: EnvLike, key: string): string {
  const value = env[key];
  if (typeof value !== "string") return "";
  return value.trim();
}

export function buildFirebasePublicConfig(env: EnvLike): FirebasePublicConfig {
  return {
    apiKey: readEnv(env, "PUBLIC_FIREBASE_API_KEY"),
    authDomain: readEnv(env, "PUBLIC_FIREBASE_AUTH_DOMAIN"),
    projectId: readEnv(env, "PUBLIC_FIREBASE_PROJECT_ID"),
    storageBucket: readEnv(env, "PUBLIC_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: readEnv(env, "PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
    appId: readEnv(env, "PUBLIC_FIREBASE_APP_ID"),
    measurementId: readEnv(env, "PUBLIC_FIREBASE_MEASUREMENT_ID"),
  };
}

export function hasFirebasePublicConfig(config: FirebasePublicConfig): boolean {
  return Boolean(
    config.apiKey && config.authDomain && config.projectId && config.appId,
  );
}
