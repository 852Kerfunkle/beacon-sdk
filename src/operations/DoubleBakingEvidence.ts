import { TezosOperation, TezosOperationType, TezosBlockHeader } from './OperationTypes'

export interface InlinedEndorsement {
  branch: string
  operations: InlinedEndorsementContents
  signature?: string
}

export interface InlinedEndorsementContents {
  kind: 'endorsement'
  level: string
}

export interface TezosDoubleBakingEvidenceOperation extends TezosOperation {
  kind: TezosOperationType.DOUBLE_BAKING_EVIDENCE
  bh1: TezosBlockHeader
  bh2: TezosBlockHeader
}
