/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import { getOverrideProps } from "@aws-amplify/ui-react/internal"
import { Divider, Flex, Icon, Text, View } from "@aws-amplify/ui-react"
export default function MarketingFooter(props) {
  const { overrides, ...rest } = props
  return (
    <Flex
      gap="32px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "MarketingFooter")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 405")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 403")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pages"
            {...getOverrideProps(overrides, "Pages")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="SignUp"
            {...getOverrideProps(overrides, "SignUp")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="LogIn"
            {...getOverrideProps(overrides, "LogIn")}
          ></Text>
        </Flex>
      </Flex>
      <Divider
        width="unset"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 447")}
        >
          <View
            width="37px"
            height="37px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "logo 2")}
          >
            <Icon
              width="10.64px"
              height="9.48px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.638671875,
                height: 9.482421875
              }}
              paths={[
                {
                  d: "M9.65898 0.161145L1.56523 8.2549C1.52037 8.29982 1.45949 8.32508 1.39602 8.32514C1.33254 8.3252 1.27166 8.30005 1.22674 8.25518C1.18182 8.21032 1.15656 8.1495 1.1565 8.08603C1.15644 8.02249 1.18159 7.96161 1.22645 7.91669L2.3827 6.76044C2.48798 6.65141 2.54625 6.50537 2.54498 6.35379C2.54365 6.20221 2.48283 6.05721 2.37565 5.95003C2.26846 5.84284 2.12347 5.78202 1.97189 5.78069C1.8203 5.77937 1.67427 5.83764 1.56523 5.94297L0.408977 7.09922C0.147167 7.36094 5.78263e-05 7.71597 1.38073e-08 8.08614C-5.20174e-05 8.45637 0.146953 8.8114 0.408688 9.07323C0.670417 9.33506 1.02544 9.48214 1.39561 9.4822C1.76584 9.48226 2.12087 9.33524 2.3827 9.07352L10.4764 0.97977C10.5817 0.870735 10.64 0.724701 10.6387 0.573117C10.6374 0.421532 10.5766 0.27654 10.4694 0.169355C10.3622 0.0621708 10.2172 0.00135195 10.0656 2.22656e-05C9.91405 -0.00130742 9.76801 0.0569658 9.65898 0.1623L9.65898 0.161145Z",
                  fill: "rgba(102,112,133,1)",
                  fillRule: "nonzero"
                }
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="60.96%"
              bottom="13.41%"
              left="13.41%"
              right="57.83%"
              {...getOverrideProps(overrides, "Vector3993675")}
            ></Icon>
            <Icon
              width="10.64px"
              height="9.48px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.638671875,
                height: 9.4833984375
              }}
              paths={[
                {
                  d: "M0.1623 0.980928L8.25605 9.07468C8.51788 9.3364 8.87291 9.48341 9.24314 9.48336C9.61331 9.4833 9.96834 9.33617 10.2301 9.07439C10.4918 8.81256 10.6388 8.45753 10.6387 8.0873C10.6387 7.71713 10.4916 7.3621 10.2298 7.10038L9.07352 5.94413C8.96448 5.8388 8.81845 5.78052 8.66686 5.78185C8.51528 5.78318 8.37028 5.84394 8.2631 5.95113C8.15592 6.05837 8.0951 6.20336 8.09377 6.35495C8.09249 6.50653 8.15077 6.65257 8.25605 6.7616L9.4123 7.91785C9.45716 7.96277 9.48231 8.02365 9.48225 8.08713C9.48219 8.1506 9.45693 8.21148 9.41201 8.25634C9.36709 8.30115 9.30621 8.32635 9.24273 8.3263C9.17925 8.32624 9.11838 8.30098 9.07352 8.25606L0.97977 0.162302C0.870735 0.056968 0.724701 -0.00130742 0.573117 2.22647e-05C0.421533 0.00135195 0.276538 0.0621134 0.169353 0.169298C0.0621688 0.27654 0.00135008 0.421533 2.03899e-05 0.573117C-0.00125148 0.724701 0.0570239 0.870738 0.1623 0.979772L0.1623 0.980928Z",
                  fill: "rgba(102,112,133,1)",
                  fillRule: "nonzero"
                }
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="60.95%"
              bottom="13.42%"
              left="57.83%"
              right="13.41%"
              {...getOverrideProps(overrides, "Vector3993676")}
            ></Icon>
            <Icon
              width="3.47px"
              height="3.47px"
              viewBox={{ minX: 0, minY: 0, width: 3.46875, height: 3.46875 }}
              paths={[
                {
                  d: "M2.48902 0.162243L0.17652 2.47474C0.121309 2.5281 0.0772572 2.59187 0.0469635 2.6624C0.0166697 2.73293 0.000713633 2.80884 1.98824e-05 2.88556C-0.000616055 2.96233 0.0140089 3.03847 0.0430886 3.10952C0.0721105 3.18058 0.115067 3.24509 0.169353 3.29938C0.223639 3.35367 0.288157 3.39662 0.359209 3.4257C0.430261 3.45472 0.506398 3.46935 0.583173 3.46871C0.659949 3.46802 0.735799 3.45212 0.806331 3.42177C0.876862 3.39148 0.940629 3.34748 0.99399 3.29221L3.30649 0.979712C3.41177 0.870678 3.47004 0.724644 3.46877 0.573059C3.46744 0.421475 3.40662 0.27648 3.29944 0.169296C3.19225 0.0621112 3.04726 0.00129414 2.89567 2.22655e-05C2.74409 -0.00130742 2.59806 0.0569662 2.48902 0.162243Z",
                  fill: "rgba(102,112,133,1)",
                  fillRule: "nonzero"
                }
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="87.52%"
              bottom="3.11%"
              left="87.48%"
              right="3.14%"
              {...getOverrideProps(overrides, "Vector3993677")}
            ></Icon>
            <Icon
              width="3.47px"
              height="3.47px"
              viewBox={{ minX: 0, minY: 0, width: 3.46875, height: 3.46875 }}
              paths={[
                {
                  d: "M2.47478 3.29221C2.52812 3.34748 2.59191 3.39148 2.66244 3.42177C2.73297 3.45212 2.80883 3.46802 2.8856 3.46871C2.96236 3.46935 3.03849 3.45472 3.10953 3.4257C3.18059 3.39662 3.24513 3.35367 3.29942 3.29938C3.3537 3.24509 3.39663 3.18058 3.42569 3.10952C3.45476 3.03847 3.46939 2.96233 3.46872 2.88556C3.46806 2.80884 3.45211 2.73293 3.42181 2.6624C3.39151 2.59187 3.34747 2.5281 3.29225 2.47474L0.979752 0.162243C0.870718 0.0569662 0.724684 -0.00130742 0.573099 2.22655e-05C0.421515 0.00129414 0.276516 0.0621112 0.169326 0.169296C0.0621356 0.27648 0.00133423 0.421475 2.18856e-05 0.573059C-0.00129624 0.724644 0.0569729 0.870678 0.162284 0.979712L2.47478 3.29221Z",
                  fill: "rgba(102,112,133,1)",
                  fillRule: "nonzero"
                }
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="87.52%"
              bottom="3.11%"
              left="3.14%"
              right="87.48%"
              {...getOverrideProps(overrides, "Vector3993678")}
            ></Icon>
            <Icon
              width="34.69px"
              height="33.63px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 34.6865234375,
                height: 33.62890625
              }}
              paths={[
                {
                  d: "M31.5567 0L28.6661 2.89063L18.0904 13.4663L17.3429 14.2138L16.5954 13.4663L6.86383 3.73469L6.32849 2.12981C6.32849 2.12345 6.32155 2.11941 6.31924 2.11363C6.29507 2.04687 6.25882 1.98514 6.21228 1.93152C6.20477 1.92342 6.19667 1.91649 6.18858 1.90897C6.13724 1.85518 6.07596 1.81179 6.00821 1.7812L1.96132 0.0468282C1.8552 0.00143958 1.73792 -0.0111404 1.62458 0.0107012C1.51125 0.0325427 1.40704 0.0878114 1.32539 0.169391L0.169135 1.32564C0.0875613 1.4073 0.0322926 1.5115 0.0104453 1.62484C-0.0113963 1.73817 0.00118947 1.85545 0.0465723 1.96158L1.78095 6.00846C1.81143 6.07598 1.85461 6.13703 1.90814 6.18825C1.91623 6.19635 1.92317 6.20502 1.93184 6.21254C1.98485 6.25884 2.04601 6.29492 2.11221 6.31891C2.11857 6.31891 2.12262 6.327 2.12956 6.32932L3.73443 6.86408L13.7938 16.9235C13.6966 17.214 13.5106 17.4667 13.2621 17.6458C13.0135 17.8249 12.715 17.9215 12.4086 17.9219C12.0641 17.9208 11.7228 17.9882 11.4045 18.1201C11.0863 18.2519 10.7973 18.4458 10.5546 18.6902L1.90293 27.3413C1.36085 27.8834 1.05631 28.6186 1.05631 29.3852C1.05631 30.1519 1.36085 30.8871 1.90293 31.4292L3.25748 32.7838C3.80003 33.325 4.53509 33.629 5.30145 33.629C6.06781 33.629 6.80284 33.325 7.34541 32.7838L15.9971 24.1327C16.2412 23.8897 16.4348 23.6008 16.5665 23.2825C16.6983 22.9643 16.7657 22.6231 16.7648 22.2786C16.7669 22.0542 16.8205 21.8331 16.9215 21.6326C17.0226 21.4322 17.1683 21.2576 17.3476 21.1224C17.5254 21.2582 17.6696 21.4332 17.7691 21.6337C17.8686 21.8342 17.9205 22.0548 17.9211 22.2786C17.9201 22.6231 17.9875 22.9643 18.1194 23.2825C18.2511 23.6008 18.4447 23.8897 18.6888 24.1327L27.3404 32.7838C27.883 33.325 28.618 33.629 29.3844 33.629C30.1508 33.629 30.8858 33.325 31.4284 32.7838L32.7829 31.4292C33.325 30.8871 33.6295 30.1519 33.6295 29.3852C33.6295 28.6186 33.325 27.8834 32.7829 27.3413L24.1313 18.6902C23.8885 18.4458 23.5996 18.2519 23.2813 18.1201C22.9631 17.9882 22.6217 17.9208 22.2772 17.9219C21.9711 17.9208 21.6731 17.8237 21.4251 17.6442C21.1772 17.4648 20.9917 17.2121 20.8949 16.9217L31.7961 6.0206L34.6867 3.12997L34.6867 0L31.5567 0ZM15.0223 16.5199C15.0223 16.498 15.0287 16.4777 15.0287 16.4558L15.0287 15.8487L16.1849 14.6925L16.5237 15.0313L15.0304 16.5263L15.0223 16.5199ZM1.86593 1.26378L4.76755 2.50733L2.5065 4.76838L1.26295 1.86677L1.86593 1.26378ZM4.22873 5.81074L3.38178 5.52861L5.52778 3.38261L5.81049 4.22957C5.83899 4.31461 5.88663 4.39195 5.94982 4.45561L15.3692 13.875L14.0436 15.2006C13.9856 15.2601 13.9414 15.3315 13.9141 15.4099L4.45478 5.95064C4.39132 5.88711 4.31393 5.83918 4.22873 5.81074ZM15.6086 22.2786C15.609 22.4712 15.5713 22.6619 15.4977 22.8398C15.4241 23.0177 15.316 23.1793 15.1796 23.3152L6.52794 31.9663C6.20228 32.2909 5.76123 32.4732 5.30145 32.4732C4.84166 32.4732 4.4006 32.2909 4.07495 31.9663L2.7204 30.6117C2.55932 30.4507 2.43154 30.2595 2.34436 30.049C2.25718 29.8386 2.21231 29.613 2.21231 29.3852C2.21231 29.1575 2.25718 28.9319 2.34436 28.7214C2.43154 28.511 2.55932 28.3198 2.7204 28.1588L11.3721 19.5077C11.5079 19.3711 11.6694 19.2628 11.8473 19.1891C12.0253 19.1154 12.2161 19.0777 12.4086 19.0781C12.7624 19.0783 13.1126 19.0063 13.4377 18.8665C13.4461 18.8812 13.4553 18.8953 13.4654 18.9087L15.1998 20.6431C15.3082 20.7516 15.4552 20.8125 15.6086 20.8125L16.0653 20.8125C15.7699 21.2446 15.6108 21.7553 15.6086 22.2786ZM22.2772 19.0781C22.4698 19.0777 22.6606 19.1154 22.8385 19.1891C23.0165 19.2628 23.178 19.3711 23.3138 19.5077L31.9654 28.1588C32.1265 28.3198 32.2543 28.511 32.3415 28.7214C32.4286 28.9319 32.4736 29.1575 32.4736 29.3852C32.4736 29.613 32.4286 29.8386 32.3415 30.049C32.2543 30.2595 32.1265 30.4507 31.9654 30.6117L30.6109 31.9663C30.2852 32.2909 29.8442 32.4732 29.3844 32.4732C28.9246 32.4732 28.4836 32.2909 28.1579 31.9663L19.5063 23.3152C19.3699 23.1793 19.2618 23.0177 19.1881 22.8398C19.1145 22.6619 19.0768 22.4712 19.0773 22.2786C19.0767 21.5834 18.8003 20.9169 18.3087 20.4252C17.8172 19.9336 17.1507 19.657 16.4555 19.6563L15.8479 19.6563L14.6916 18.5L15.4392 17.7525L17.7517 15.44L18.4992 14.6925L19.6554 15.8487L19.6554 16.4558C19.6561 17.151 19.9325 17.8175 20.424 18.3092C20.9155 18.8008 21.582 19.0774 22.2772 19.0781ZM20.7741 15.4099C20.7468 15.3315 20.7025 15.2601 20.6446 15.2006L19.3166 13.875L29.4836 3.7081L30.9786 5.20313L20.7741 15.4099ZM31.7961 4.38566L30.301 2.89063L32.0354 1.15625L32.713 1.15625L31.3873 2.48189L32.2048 3.29936L33.5304 1.97372L33.5304 2.65128L31.7961 4.38566Z",
                  fill: "rgba(102,112,133,1)",
                  fillRule: "nonzero"
                }
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.13%"
              bottom="5.99%"
              left="3.13%"
              right="3.12%"
              {...getOverrideProps(overrides, "Vector3993679")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(102,112,133,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="RepairRadar"
            {...getOverrideProps(overrides, "RepairRadar")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="© 2023 RepairRadar. All rights reserved."
          {...getOverrideProps(
            overrides,
            "\u00A9 2023 RepairRadar. All rights reserved."
          )}
        ></Text>
      </Flex>
    </Flex>
  )
}
