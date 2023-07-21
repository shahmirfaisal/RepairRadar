/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentRequestOverridesProps = {
    AppointmentRequest?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41129767005"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 41139343187"?: PrimitiveOverrideProps<FlexProps>;
    Button39343188?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    Button39484982?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AppointmentRequestProps = React.PropsWithChildren<Partial<FlexProps> & {
    title?: String;
    onRequest?: (event: SyntheticEvent) => void;
    onCancel?: (event: SyntheticEvent) => void;
} & {
    overrides?: AppointmentRequestOverridesProps | undefined | null;
}>;
export default function AppointmentRequest(props: AppointmentRequestProps): React.ReactElement;
