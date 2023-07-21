/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MechanicItemProps } from "./MechanicItem";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MechanicItemCollectionOverridesProps = {
    MechanicItemCollection?: PrimitiveOverrideProps<CollectionProps>;
    MechanicItem?: MechanicItemProps;
} & EscapeHatchProps;
export declare type MechanicItemCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MechanicItemProps;
} & {
    overrides?: MechanicItemCollectionOverridesProps | undefined | null;
}>;
export default function MechanicItemCollection(props: MechanicItemCollectionProps): React.ReactElement;
