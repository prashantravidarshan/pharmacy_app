import { Box } from "@chakra-ui/react";
import ClientLayout from "../../layouts/client";

const Dashboard = () => {
  return <Box></Box>;
};

export default Dashboard;

Dashboard.getLayout = (page) => <ClientLayout>{page}</ClientLayout>;
