/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, RatingProps, TextAreaFieldProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddReviewOverridesProps = {
    AddReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4113959590"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    Rating39591209?: PrimitiveOverrideProps<TextProps>;
    Rating39591198?: PrimitiveOverrideProps<RatingProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 4113959596"?: PrimitiveOverrideProps<FlexProps>;
    Button3959597?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    Button3959599?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    onAddReview?: (event: SyntheticEvent) => void;
    onCancel?: (event: SyntheticEvent) => void;
} & {
    overrides?: AddReviewOverridesProps | undefined | null;
}>;
export default function AddReview(props: AddReviewProps): React.ReactElement;
