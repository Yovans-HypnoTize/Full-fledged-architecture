import { RootState } from "../../app/store"
import {  useAppDispatch, useAppSelector } from "../../app/hooks"
import { useEffect } from "react"
import { loginApi } from "./features/HomeSlice"

const Home = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector((state:RootState) => state.home.value)
  useEffect(() => {
    dispatch(loginApi())
  },[dispatch])
console.log(value)
  return (
    <div>Home
      
    </div>
  )
}

export default Home