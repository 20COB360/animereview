import React from 'react'
import Search from '../search/search'
import Sidebar from '../sidebar/sidebar'
import './sswrapper.scss'

export default function SearchSidebarWrapper() {
  return (
    <div className="sswrapper">
        <Search/>
        <Sidebar/>
    </div>
  )
}
