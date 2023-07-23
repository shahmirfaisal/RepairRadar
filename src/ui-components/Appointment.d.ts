/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentOverridesProps = {
    Appointment?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    "Wednesday, 11:00 PM"?: PrimitiveOverrideProps<TextProps>;
    "View description"?: PrimitiveOverrideProps<TextProps>;
    "Here is the descripiton and that is it"?: PrimitiveOverrideProps<TextProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    Button3956528?: PrimitiveOverrideProps<ButtonProps>;
    Button3956535?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    Button3957550?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 441"?: PrimitiveOverrideProps<FlexProps>;
    Button39612848?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AppointmentProps = React.PropsWithChildren<Partial<FlexProps> & {
    name?: String;
    image?: String;
    time?: String;
    description?: String;
    onToggleDescription?: (event: SyntheticEvent) => void;
    descriptionLabel?: String;
    onAccept?: (event: SyntheticEvent) => void;
    onReject?: (event: SyntheticEvent) => void;
    onComplete?: (event: SyntheticEvent) => void;
    onAddReview?: (event: SyntheticEvent) => void;
} & {
    overrides?: AppointmentOverridesProps | undefined | null;
}>;
export default function Appointment(props: AppointmentProps): React.ReactElement;
