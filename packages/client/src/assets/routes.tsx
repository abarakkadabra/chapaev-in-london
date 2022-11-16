import { RoutePaths, RoutesType } from '../types/routes'
import React from 'react'
import { Landing } from "../pages/landing/Landing";

const routes: RoutesType[] = [
  {
    isAuth: false,
    path: RoutePaths.SIGN_UP,
    element: <h1>Регистрация</h1>
  },
  {
    isAuth: false,
    path: RoutePaths.SIGN_IN,
    element: <h1>Вход</h1>
  },
  {
    isAuth: true,
    path: RoutePaths.MAIN,
    element: <Landing/>
  },
  {
    isAuth: true,
    path: RoutePaths.SETTINGS,
    element: <h1>Settings</h1>
  },
  {
    isAuth: true,
    path: RoutePaths.PROFILE,
    element: <h1>Profile</h1>
  },
  {
    isAuth: true,
    path: RoutePaths.FORUM,
    element: <h1>FORUM</h1>
  },
  {
    isAuth: true,
    path: RoutePaths.LEADERBOARD,
    element: <h1>LEADERBOARD</h1>
  },
  {
    isAuth: false,
    path: RoutePaths.UNKNOWN,
    element: <h1>Нет такой</h1>
  }
]

export default routes
