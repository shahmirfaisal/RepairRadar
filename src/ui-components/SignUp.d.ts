/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, PasswordFieldProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpOverridesProps = {
    SignUp?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    TextField29766936?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    TextField38798040?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SignUpProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SignUpOverridesProps | undefined | null;
}>;
export default function SignUp(props: SignUpProps): React.ReactElement;
