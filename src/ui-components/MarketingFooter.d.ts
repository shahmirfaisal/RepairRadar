/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    Pages?: PrimitiveOverrideProps<TextProps>;
    SignUp?: PrimitiveOverrideProps<TextProps>;
    LogIn?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    "logo 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector3993675?: PrimitiveOverrideProps<IconProps>;
    Vector3993676?: PrimitiveOverrideProps<IconProps>;
    Vector3993677?: PrimitiveOverrideProps<IconProps>;
    Vector3993678?: PrimitiveOverrideProps<IconProps>;
    Vector3993679?: PrimitiveOverrideProps<IconProps>;
    RepairRadar?: PrimitiveOverrideProps<TextProps>;
    "\u00A9 2023 RepairRadar. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
