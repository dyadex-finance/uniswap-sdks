import { Pool as V4Pool } from '@dyadex-finance/v4-sdk'
import { Pair } from '@dyadex-finance/v2-sdk'
import { Pool as V3Pool } from '@dyadex-finance/v3-sdk'

export type TPool = Pair | V3Pool | V4Pool
