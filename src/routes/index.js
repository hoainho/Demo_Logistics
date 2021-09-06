import React from 'react'
import PageNotFound from '../components/PageNotFound/PageNotFound';
import ScreenHome from '../components/Home'
import ScreenAbout from '../components/About'
import ScreenContact from '../components/Contact'
const index = [
    {
        path: '/',
        exact: true,
        main: () => <ScreenHome />
    },
    {
        path: '/About',
        exact: true,
        main: () => <ScreenAbout />
    },
    {
        path: '/Contact',
        exact: true,
        main: () => <ScreenContact />
    },
    {
        path: '',
        exact: true,
        main: () => <PageNotFound />
    },

]
export default index