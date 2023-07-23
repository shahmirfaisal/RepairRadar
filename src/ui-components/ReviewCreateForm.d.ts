/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewCreateFormInputValues = {
    rating?: number;
    text?: string;
};
export declare type ReviewCreateFormValidationValues = {
    rating?: ValidationFunction<number>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCreateFormOverridesProps = {
    ReviewCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviewCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onSuccess?: (fields: ReviewCreateFormInputValues) => void;
    onError?: (fields: ReviewCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onValidate?: ReviewCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewCreateForm(props: ReviewCreateFormProps): React.ReactElement;
