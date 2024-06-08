import logo from "./logo.svg";
import "react-multi-carousel/lib/styles.css";
import { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoutes from "./routers/PrivateRoute";
import { useState } from "react";
import { BasicLayout, NoFoundComponent } from "./component";

function App() {
  const [isAuthenticated, set_isAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* PublicRouters */}
        <Route path="/" element={<BasicLayout />}>
          {PublicRoute.map(
            ({ component: Component, path, exact, childRouters }) => (
              <Route
                path={`/${path}`}
                key={path}
                exact={exact}
                element={<Component />}
              >
                {childRouters.map(
                  ({ component: CComponent, cpath, cexact, index }) => (
                    <>
                      {console.log("index", index)}
                      {console.log("index", cpath)}
                      {index !== undefined && (
                        <Route
                          index
                          element={<Navigate to={cpath} replace />}
                        />
                      )}
                      <Route
                        path={`${cpath}`}
                        key={cpath}
                        exact={cexact}
                        element={<CComponent />}
                      />
                    </>
                  )
                )}
              </Route>
            )
          )}
        </Route>

        {/* end PublicRouters */}

        {/* PrivateRoute */}
        {/* {isAuthenticated ? (
          <Route path="/" element={<BasicLayout />}>
            {PrivateRoutes.map(
              ({ component: Component, path, exact, childRouters }) => (
                <Route
                  path={`/${path}`}
                  key={path}
                  exact={exact}
                  element={<Component />}
                >
                  {childRouters.map(
                    ({ component: CComponent, cpath, cexact, index }) => (
                      <>
                        {index !== undefined && (
                          <Route
                            index
                            element={<Navigate to={cpath} replace />}
                          />
                        )}
                        <Route
                          path={`${cpath}`}
                          key={cpath}
                          exact={cexact}
                          element={<CComponent />}
                        />
                      </>
                    )
                  )}
                </Route>
              )
            )}
            <Route path="*" element={<NoFoundComponent />} />
          </Route>
        ) : (
          <Route path="/" element={<Navigate replace to="/login" />} />
        )} */}

        {/* end PrivateRoute */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
