import { Flex, Grid, Heading } from "@aws-amplify/ui-react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import withNoAuth from "../hoc/withNoAuth"
import LayoutItem from "../components/LayoutItem"
import "@lottiefiles/lottie-player"
import NavBarHeader2 from "../ui-components/NavBarHeader2"
import MarketingFooter from "../ui-components/MarketingFooter"
import Layout from "./Layout"

let AuthLayout: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Grid
        templateColumns={{ base: "1fr", medium: "1fr 1fr" }}
        minHeight="100vh"
        gap="20px"
        marginBottom="20px"
      >
        <LayoutItem>
          <Outlet />
        </LayoutItem>

        <LayoutItem
          component={Flex}
          justifyContent="center"
          alignItems="center"
          display={{ base: "none", medium: "flex" }}
        >
          <lottie-player
            src="https://lottie.host/779e75ab-5dfb-4575-8afc-c1eb2d9829c3/YjigYGE78u.json"
            background="#FFFFFF"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </LayoutItem>
      </Grid>
    </Layout>
  )
}

AuthLayout = withNoAuth(AuthLayout)

export default AuthLayout
