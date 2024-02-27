import { Button, Fab, FormControl, Paper } from '@mui/material';
import React from 'react'
import useFetch from '../Componants/hooks/useFetch';
import Topbar from '../Topbar';
import Sidebar from './Sidebar';
import NavigationIcon from "@mui/icons-material/Navigation";

function Total() {
  const { loading } = useFetch();

  return (
    <div>
    <Topbar />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      {!loading ? (
        <>
          <div className="app-content--inner container">
            <div className="app-content--inner__wrapper mh-100-vh">
              <div style={{ opacity: 1 }}></div>
              Total
            </div>
          </div>
          <div class="sticky-button navigation_button">
              <Fab variant="extended" href="/AppClient" target="_blank">
                <NavigationIcon sx={{ mr: 1 }} />
                Visit Client Side
              </Fab>
            </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  </div>
  )
}

export default Total