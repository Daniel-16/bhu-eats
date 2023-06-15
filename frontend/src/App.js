import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* 
          <Route
            path="account"
            element={
              <ProtectedUserRoute>
                <UserAccount />
              </ProtectedUserRoute>
            }
          />

          <Route
            path="profile"
            element={
              <ProtectedUserRoute>
                <UserProfile />
              </ProtectedUserRoute>
            }
          />

          <Route
            path="orders"
            element={
              <ProtectedUserRoute>
                <UserOrders />
              </ProtectedUserRoute>
            }
          />

          <Route
            path="orders/:orderID"
            element={
              <ProtectedUserRoute>
                <UserOrderPreview />
              </ProtectedUserRoute>
            }
          />

          <Route path="user/login" element={<UserLogin />} />

          <Route path="user/register" element={<UserRegister />} />

          <Route path="search" element={<Search />} />

          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <ProtectedUserRoute>
                <Checkout />
              </ProtectedUserRoute>
            }
          />

          <Route path="bookPreview/:bookID" element={<BookPreview />} />
          <Route path="*" element={<ErrorPage target="/" />} /> */}
        </Route>

        {/* <Route
          path="seller"
          element={
            <AuthContext.Provider value={authMemory}>
              <SharedSellerLayout />
            </AuthContext.Provider>
          }
        >
          <Route
            index
            element={
              <ProtectedSellerRoute>
                <SellerHome />
              </ProtectedSellerRoute>
            }
          />
          <Route
            path="add-book"
            element={
              <ProtectedSellerRoute>
                <AddBook />
              </ProtectedSellerRoute>
            }
          />

          <Route path="test" element={<Test />} />

          <Route
            path="manage/:bookID"
            element={
              <ProtectedSellerRoute>
                <Manage />
              </ProtectedSellerRoute>
            }
          />

          <Route
            path="profile"
            element={
              <ProtectedSellerRoute>
                <SellerProfile />
              </ProtectedSellerRoute>
            }
          />
          <Route
            path="kyc"
            element={
              <ProtectedSellerRoute>
                <KYC />
              </ProtectedSellerRoute>
            }
          />
          <Route
            path="change-password"
            element={
              <ProtectedSellerRoute>
                <ChangePassword />
              </ProtectedSellerRoute>
            }
          />

          <Route
            path="change-email"
            element={
              <ProtectedSellerRoute>
                <ChangeEmail />
              </ProtectedSellerRoute>
            }
          />

          <Route
            path="orders"
            element={
              <ProtectedSellerRoute>
                <SellerOrders />
              </ProtectedSellerRoute>
            }
          />
          <Route
            path="contact"
            element={
              <ProtectedSellerRoute>
                <SellerContact />
              </ProtectedSellerRoute>
            }
          />
          <Route
            path="transactions"
            element={
              <ProtectedSellerRoute>
                <SellerTransactions />
              </ProtectedSellerRoute>
            }
          />
          <Route path="login" element={<SellerLogin />} />
          <Route path="register" element={<SellerRegister />} />
          <Route path="reset-password" element={<SellerPassReset />} />
          <Route path="*" element={<ErrorPage target="/seller/" />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
