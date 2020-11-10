import Sidebar from './Sidebar';
import React from 'react';

class MainLayout extends React.Component {  

  render() {
    const { children } = this.props;
    return (
      <main >
        <Sidebar />
        <div>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </main>
    );
  }
}

export default MainLayout;
