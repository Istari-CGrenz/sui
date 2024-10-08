// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Text } from '_app/shared/text';
import { useMiddleEllipsis } from '_hooks';

const TRUNCATE_MAX_LENGTH = 8;
const TRUNCATE_PREFIX_LENGTH = 4;

type TxnTypeProps = {
    address: string;
    moveCallFnName?: string;
    isTransfer: boolean;
    isSender: boolean;
};

export function TxnTypeLabel({
    address,
    moveCallFnName,
    isTransfer,
    isSender,
}: TxnTypeProps) {
    const receiverAddress = useMiddleEllipsis(
        address,
        TRUNCATE_MAX_LENGTH,
        TRUNCATE_PREFIX_LENGTH
    );
    const transferLabel = isSender ? 'To' : 'From';
    const label = isTransfer ? transferLabel : 'Action';
    const content = isTransfer
        ? receiverAddress
        : moveCallFnName?.replace(/_/g, ' ');

    return content ? (
        <div className="flex gap-1 break-all capitalize mt-1">
            <Text color="steel-darker" weight="semibold" variant="subtitle">
                {label}:
            </Text>
            <div className="flex-1">
                <Text
                    color="steel-darker"
                    weight="normal"
                    variant="subtitle"
                    mono={isTransfer}
                >
                    {content}
                </Text>
            </div>
        </div>
    ) : null;
}
