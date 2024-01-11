import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Homepage</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
