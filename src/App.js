import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useMoralis } from "react-moralis";

import Login from "./components/Authentication/Login";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Portal from "./pages/Portal";
import MyPosts from "./pages/MyPosts";
import Post from "./pages/Post";
import FullPost from "./pages/FullPost";
import PageNotFound from "./pages/404";
import Nav from "./components/Nav";
import SearchProfile from "./pages/SearchProfile";
import Twitter from "./components/Styles/Twitter";
import PostSuccess from "./pages/PostSuccess";
import CandidatePost from "./components/Posting/CandidatePost";
import ClientPost from "./components/Posting/ClientPost";
import ViewClientPosts from "./components/ViewPosts/ViewClientPosts";
import ViewCandidatePosts from "./components/ViewPosts/ViewCandidatePosts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Guide from "./pages/Guide";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const App = () => {
  const { isAuthenticated, Moralis, user, account } = useMoralis();

  const appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
  const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
  Moralis.start({ serverUrl, appId });
  Moralis.getSigningData = () => "DeFind";

  useEffect(() => {
    const checkAccount = () => {
      if (account && user) {
        if (account !== Moralis.User.current().attributes.ethAddress) {
          return toast(
            <div style={{ textAlign: "left" }}>
              Your wallet address does not match the current user account.
              <br /> <br />
              To create a new account, simply logout and reauthenticate.
            </div>,
            {
              position: "bottom-left",
              toastId: "custom-id",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      }
    };
    checkAccount();
  }, [Moralis, account, user]);

  return (
    <>
      <GloablStyle />
      <Nav />
      <Twitter />
      {isAuthenticated ? (
        <>
          <ToastContainer />
          <div style={{ background: "black" }}></div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path={`/myprofile/${
                Moralis.User.current().attributes.ethAddress
              }`}
              element={<Profile />}
            />
            <Route path="/profile/:userId" element={<SearchProfile />} />
            <Route
              path={`/myprofile/edit/${
                Moralis.User.current().attributes.ethAddress
              }`}
              element={<EditProfile />}
            />
            {/* <Route path="/Portal" element={<Portal />} /> */}
            <Route
              path="/portal/jobs"
              element={<ViewClientPosts profile={false} />}
            />
            <Route
              path="/portal/candidate"
              element={<ViewCandidatePosts profile={false} />}
            />
            <Route path="/portal/jobs/:id" element={<FullPost />} />
            <Route
              path={`/profile/posts/${
                Moralis.User.current().attributes.ethAddress
              }`}
              element={<MyPosts />}
            />
            <Route path={`/post`} element={<Post />} />
            <Route
              path={`/post/job/${Moralis.User.current().attributes.ethAddress}`}
              element={<ClientPost profile={false} />}
            />
            {/* <Route
              path={`/post/candidate/${
                Moralis.User.current().attributes.ethAddress
              }`}
              element={<CandidatePost profile={false} />}
            /> */}
            <Route path="/guide" element={<Guide />} />
            <Route path="/portal" element={<Blog />} />
            <Route path="/portal/:blogId" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/postsuccess" element={<PostSuccess />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      ) : (
        <>
          <Login />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/Portal" element={<Portal />} /> */}
            <Route
              path="/portal/jobs"
              element={<ViewClientPosts profile={false} />}
            />
            {/* <Route
              path="/portal/blogs"
              element={<ViewCandidatePosts profile={false} />}
            /> */}
            <Route path="/portal/jobs/:id" element={<FullPost />} />
            <Route path="/profile/:userId" element={<SearchProfile />} />
            <Route path="/portal" element={<Blog />} />
            <Route path="/portal/:blogId" element={<BlogPost />} />
            <Route path={`/post`} element={<Post />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;

const GloablStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
    background: #040010;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: "Kdam Thmor Pro", sans-serif;
    letter-spacing: 1.25px;
    text-align: center;
    z-index: -1;
}

  ul,
  li {
    margin: 0;
    padding: 0;
  }
`;
