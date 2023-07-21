/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Appointment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppointmentUpdateFormInputValues = {
    time?: string;
    status?: string;
    description?: string;
};
export declare type AppointmentUpdateFormValidationValues = {
    time?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentUpdateFormOverridesProps = {
    AppointmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppointmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppointmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appointment?: Appointment;
    onSubmit?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onSuccess?: (fields: AppointmentUpdateFormInputValues) => void;
    onError?: (fields: AppointmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onValidate?: AppointmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppointmentUpdateForm(props: AppointmentUpdateFormProps): React.ReactElement;
