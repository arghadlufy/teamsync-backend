export const ProviderEnum = {
  GOOGLE: "GOOGLE",
  GITHUB: "GITHUB",
  FACEBOOK: "FACEBOOK",
  EMAIL: "EMAIL",
} as const;

export type ProviderEnumType = (typeof ProviderEnum)[keyof typeof ProviderEnum];
