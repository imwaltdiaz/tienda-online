//Dashboard
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Drawer } from '@mui/material';
import ResponsiveDrawer from './ResponsiveDrawer';
import DrawerDev from './DrawerDev';

export default function Dashboard() {
  return (
    <>
      {/* <Header/> */}
      <Container>
      {/* <ResponsiveDrawer/> */}
        <DrawerDev/>
      </Container>
      {/* <Footer/> */}
    </>
  );
} 