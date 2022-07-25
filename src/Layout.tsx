import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Mock";
import { drawerData } from "./Drawer/DrawerData";
import { PlaceHolderText } from "./pages/PlaceHolder";

export const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {[...drawerData].map((item) => (
        <Route path="/">
          {item.subnav ? (
            <Route path={item.title.toLowerCase()}>
              {item.subnav.map((subItem) => (
                <Route
                  path={subItem.route}
                  element={<PlaceHolderText text={subItem.title} soon />}
                />
              ))}
            </Route>
          ) : (
            <Route
              path={item.route}
              element={<PlaceHolderText text={item.title} soon />}
            />
          )}
        </Route>
      ))}
      <Route path="*" element={<PlaceHolderText text="404 Not Found" />} />
    </Routes>
  );
};
