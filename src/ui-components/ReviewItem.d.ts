/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, RatingProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewItemOverridesProps = {
    "4"?: PrimitiveOverrideProps<TextProps>;
    ReviewItem?: PrimitiveOverrideProps<FlexProps>;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Shahmir Faisal"?: PrimitiveOverrideProps<TextProps>;
    "14th July"?: PrimitiveOverrideProps<TextProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    "This is my review"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReviewItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    image?: String;
    name?: String;
    rating?: Number;
    review?: String;
    date?: String;
} & {
    overrides?: ReviewItemOverridesProps | undefined | null;
}>;
export default function ReviewItem(props: ReviewItemProps): React.ReactElement;
