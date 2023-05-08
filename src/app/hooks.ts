// predefined versions of react-redux hooks with the right types 
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'

// aliasing the useDispatch hook by adding a type
export const useAppDispatch = () => useDispatch<AppDispatch>()

// aliasing the useSelector hook by adding a type
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector



