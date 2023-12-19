import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../partials/Navigation'
import { Toaster } from 'react-hot-toast'
export default function Base() {
  return (
    <React.Fragment>
        <Navigation/>
        <Outlet/>
        <Toaster/>
    </React.Fragment>
  )
}
