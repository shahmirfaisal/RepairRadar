/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Chat } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatUpdateFormInputValues = {};
export declare type ChatUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatUpdateFormOverridesProps = {
    ChatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ChatUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chat?: Chat;
    onSubmit?: (fields: ChatUpdateFormInputValues) => ChatUpdateFormInputValues;
    onSuccess?: (fields: ChatUpdateFormInputValues) => void;
    onError?: (fields: ChatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatUpdateFormInputValues) => ChatUpdateFormInputValues;
    onValidate?: ChatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChatUpdateForm(props: ChatUpdateFormProps): React.ReactElement;
