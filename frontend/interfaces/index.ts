export interface Result {
    allocatorAddress: string;
    allocatorSignature: string;
    publicFields: any[];
    publicFieldsHash: string;
    taskId: string;
    uHash: string;
    validatorAddress: string;
    validatorSignature: string;
    recipient?: string;
}