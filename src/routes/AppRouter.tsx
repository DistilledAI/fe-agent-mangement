import MainLayout from "@components/Layout/MainLayout"
import MainLayoutDesktop from "@components/Layout/MainLayoutDesktop"
import ProtectedByAuth from "@components/Layout/ProtectedByAuth"
import { ChatDetailLoadingPage } from "@components/LoadingMobile"
import { PATH_NAMES } from "@constants/index"
import useWindowSize from "@hooks/useWindowSize"
import AddMyData from "@pages/AddMyData"
import ChatMyAgent from "@pages/ChatMyAgent"
import ChatPage from "@pages/ChatPage"
import ChatBox from "@pages/ChatPage/ChatBox"
import ChatPageMobile from "@pages/ChatPage/Mobile"
import MyPrivateAgentContentMobile from "@pages/ChatPage/Mobile/MyPrivateAgentContentMobile"
import Marketplace from "@pages/Marketplace"
import MyData from "@pages/MyData"
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
  const { isMobile } = useWindowSize()

  return (
    <Routes>
      <Route
        path={PATH_NAMES.HOME}
        element={isMobile ? <MainLayout /> : <MainLayoutDesktop />}
      >
        <Route
          path={PATH_NAMES.HOME}
          element={isMobile ? <ChatPageMobile /> : <ChatBox />}
        />
        <Route
          path={PATH_NAMES.CHAT_DETAIL}
          element={isMobile ? <ChatPageMobile /> : <ChatBox />}
        />
        <Route
          path={`${PATH_NAMES.INVITE}/:inviteUserId`}
          element={isMobile ? <ChatDetailLoadingPage /> : <ChatBox />}
        />
        <Route
          path={`${PATH_NAMES.PRIVATE_AGENT}/:privateChatId`}
          element={isMobile ? <ChatPage /> : <ChatMyAgent />}
        />
        <Route path={PATH_NAMES.MARKETPLACE} element={<Marketplace />} />
        <Route
          path={PATH_NAMES.MY_DATA}
          element={
            <ProtectedByAuth>
              <MyData />
            </ProtectedByAuth>
          }
        />
        <Route
          path={`${PATH_NAMES.ADD_MY_DATA}/:botId`}
          element={<AddMyData />}
        />
        <Route path={PATH_NAMES.ADD_MY_DATA} element={<AddMyData />} />
        {isMobile && (
          <>
            <Route
              path={PATH_NAMES.PRIVATE_AGENT}
              element={<MyPrivateAgentContentMobile />}
            />
          </>
        )}
      </Route>
    </Routes>
  )
}

export default AppRouter
