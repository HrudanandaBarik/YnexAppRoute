
import store from '@/shared/redux/store';
import React, { Fragment, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Landingswitcher from '../switcher/landingswitcher';
import { Initialload } from '../contextapi';

const Landinglayout = ({ children }: any) => {

  const [lateLoad, setlateLoad] = useState(false);
  const [pageloading, setpageloading] = useState(false)

  useEffect(() => {
    setlateLoad(true);
  });

  return (
    <Fragment>
      <Initialload.Provider value={{ pageloading, setpageloading }}>
        <Provider store={store}>
          <div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>
            <Landingswitcher />
            {children}
            <div id="responsive-overlay"></div>

          </div>
        </Provider>
      </Initialload.Provider>
    </Fragment>
  )
}

export default Landinglayout