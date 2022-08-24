import { Coin, Timestamp } from "./shared-types";

export interface ConfigResponse {
admin: string
base_token_uri: string
factory: string
mint_price: Coin
num_tokens: number
per_address_limit: number
sg721_address: string
sg721_code_id: number
start_time: Timestamp
whitelist?: (string | null)
[k: string]: unknown
}
