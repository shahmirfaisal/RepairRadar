import { Link, useLocation, useNavigate } from "react-router-dom"
import NavBarHeader2 from "../ui-components/NavBarHeader2"
import MarketingFooter from "../ui-components/MarketingFooter"
import { useEffect, useState } from "react"
import { Button, Flex, View } from "@aws-amplify/ui-react"
import { HiMenu } from "react-icons/hi"
import { IoMdCloseCircle } from "react-icons/io"

const Sidebar = ({
  setShowSidebar
}: {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <View
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor="rgba(0,0,0,0.5)"
      style={{
        zIndex: 1000
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowSidebar(false)
        }
      }}
    >
      <Flex
        direction="column"
        gap="30px"
        position="fixed"
        top="0"
        left="0"
        width="300px"
        height="100%"
        backgroundColor="white"
        padding="20px"
        style={{
          zIndex: 1001
        }}
      >
        <View
          position="absolute"
          top="10px"
          right="10px"
          style={{ cursor: "pointer" }}
          onClick={() => setShowSidebar(false)}
        >
          <IoMdCloseCircle size={25} />
        </View>

        <Button as={Link} to="/auth/login" marginTop="50px">
          Login
        </Button>
        <Button as={Link} to="/auth/signup" variation="primary">
          Signup
        </Button>
      </Flex>
    </View>
  )
}

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setShowSidebar(false)
  }, [pathname])

  return (
    <>
      <NavBarHeader2
        overrides={{
          NavBarHeader2: {
            width: "100%"
          },
          "Frame 539493458": {
            as: Link,
            to: "/",
            style: {
              cursor: "pointer"
            }
          },
          Button39493466: {
            as: Link,
            to: "/auth/login",
            display: {
              base: "none",
              small: "block"
            }
          },
          Button39493467: {
            as: Link,
            to: "/auth/signup",
            display: {
              base: "none",
              small: "block"
            }
          },
          "Frame 540001147": {
            children: <HiMenu size={25} />,
            display: {
              base: "flex",
              small: "none"
            },
            onClick: () => setShowSidebar(true)
          }
        }}
      />

      <View padding="0 20px">{children}</View>

      <MarketingFooter
        overrides={{
          MarketingFooter: {
            width: "100%"
          },
          "Frame 405": {
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto",
            wrap: "wrap"
          },
          "Frame 434": {
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto"
          },
          "Built for the AWS Amplify Hackathon.": {
            as: "a",
            target: "_blank",
            href: "https://hashnode.com/hackathons/aws-amplify-2023",
            style: {
              cursor: "pointer"
            }
          },
          Hashnode: {
            as: "a",
            target: "_blank",
            href: "https://hashnode.com",
            style: {
              cursor: "pointer"
            }
          },
          "AWS Amplify": {
            as: "a",
            target: "_blank",
            href: "https://aws.amazon.com/amplify",
            style: {
              cursor: "pointer"
            }
          },
          Divider: {
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto"
          },
          "Frame 433": {
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto",
            wrap: "wrap",
            gap: "20px"
          },
          SignUp: {
            as: Link,
            to: "/auth/signup",
            style: {
              cursor: "pointer"
            }
          },
          LogIn: {
            as: Link,
            to: "/auth/login",
            style: {
              cursor: "pointer"
            }
          },
          "Frame 447": {
            as: Link,
            to: "/",
            style: {
              cursor: "pointer"
            }
          },
          "\u00A9 2023 RepairRadar. All rights reserved.": {
            shrink: "none"
          }
        }}
      />

      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </>
  )
}

export default Layout
