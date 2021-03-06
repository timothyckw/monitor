export type NewSource = Pick<Source, Exclude<keyof Source, 'id'>>

export enum SourceAuthenticationMethod {
  LDAP = 'ldap',
  Basic = 'basic',
  Shared = 'shared',
  Unknown = 'unknown',
}

export interface Source {
  id: string
  name: string
  type: SourceType
  username?: string
  password?: string
  sharedSecret?: string
  url: string
  metaUrl?: string
  insecureSkipVerify: boolean
  default: boolean
  telegraf: string
  links: SourceLinks
  defaultRP?: string
  text?: string // added client-side for dropdowns
  authentication?: SourceAuthenticationMethod
}

export interface SourceLinks {
  self: string
  query: string
  buckets: string
  health: string
}

export enum SourceType {
  V1 = 'v1',
  V2 = 'v2',
  Self = 'self',
}
