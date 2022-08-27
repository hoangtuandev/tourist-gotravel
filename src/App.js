import React from 'react';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoute } from './routes';

function App() {
    const cookies = new Cookies();
    const user = cookies.get('user');
    // cookies.remove('user');
    console.log('USER: ', user);

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
            </div>
        </Router>
    );
}

export default App;
