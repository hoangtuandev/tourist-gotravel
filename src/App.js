import React from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoute } from './routes';
import { openChatBot, openResultSearchingChatBot } from './GlobalSlice';
import ToggleChatBotButton from './components/ChatBot/ToggleChatBotButton';
import ChatBotSimple from './components/ChatBot/ChatBotSimple';
import ResultSearchingChatBot from './pages/ResultSearchingPage/ResultSearchingChatBot';

function App() {
    const openChatbot = useSelector(openChatBot);
    const openResultSearching = useSelector(openResultSearchingChatBot);
    const cookies = new Cookies();
    const user = cookies.get('user');
    // console.log('USER: ', user);

    return (
        <Router>
            <div className="admin-app">
                <Routes>
                    {!user
                        ? publicRoutes.map((route, index) => {
                              const Page = route.component;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={<Page />}
                                  />
                              );
                          })
                        : privateRoute.map((route, index) => {
                              const Page = route.component;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={<Page />}
                                  />
                              );
                          })}
                    {/* {!user &&
                        publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page />}
                                />
                            );
                        })}
                    {user &&
                        privateRoute.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page />}
                                />
                            );
                        })} */}
                </Routes>

                <ToggleChatBotButton></ToggleChatBotButton>
                {openResultSearching && (
                    <ResultSearchingChatBot></ResultSearchingChatBot>
                )}
                {openChatbot && <ChatBotSimple></ChatBotSimple>}
            </div>
        </Router>
    );
}

export default App;
