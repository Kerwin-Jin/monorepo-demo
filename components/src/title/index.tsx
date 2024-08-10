import { PropsWithChildren } from 'react'


interface ITitle extends PropsWithChildren{
  className?: string
}
export default function Title({className, children}:ITitle) {
  return (
    <h1 className={className}>{children}</h1>
  )
}
