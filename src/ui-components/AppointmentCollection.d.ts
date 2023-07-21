/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AppointmentProps } from "./Appointment";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentCollectionOverridesProps = {
    AppointmentCollection?: PrimitiveOverrideProps<CollectionProps>;
    Appointment?: AppointmentProps;
} & EscapeHatchProps;
export declare type AppointmentCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => AppointmentProps;
} & {
    overrides?: AppointmentCollectionOverridesProps | undefined | null;
}>;
export default function AppointmentCollection(props: AppointmentCollectionProps): React.ReactElement;
