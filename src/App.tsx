import "./App.scss";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import AppRoutes from "./AppRoutes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div>
        <div className="app_header">
          <Header />
        </div>
        <div className="row p-0 m-0">
          {/* <div className="col-auto  p-0 m-0 app_side_nav "> */}
          <div className={"col-auto  p-0 m-0 app_side_nav "}>
            <div className="app_sidebar">
              <Sidebar />
            </div>
          </div>
          <div className="col  p-0 m-0 app_content_view">
            <div className="app_page_content">
              <AppRoutes />
            </div>

            <div className="app_footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/**command  to serve project
 * pnpm install
 * pnpm run dev
 */
