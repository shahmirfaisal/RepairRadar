/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, RatingProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewViewOverridesProps = {
    ReviewView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4113964639"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    Rating3964644?: PrimitiveOverrideProps<RatingProps>;
    "4.0"?: PrimitiveOverrideProps<TextProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    Rating3964673?: PrimitiveOverrideProps<TextProps>;
    "Frame 4113964646"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ReviewViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    onClose?: (event: SyntheticEvent) => void;
    text?: String;
    rating?: Number;
} & {
    overrides?: ReviewViewOverridesProps | undefined | null;
}>;
export default function ReviewView(props: ReviewViewProps): React.ReactElement;
