import DashboardLayout from "../../components/Layouts/DashboardLayout";
import RootLayout from "../../components/Layouts/RootLayout";

const AdminHomePage = () => {
  return (
    <div>
      <h1>This is Admin page</h1>
    </div>
  );
};

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
