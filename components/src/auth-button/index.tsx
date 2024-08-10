import "./index.css"

interface IAuthButton{
  authKey: string
}


const DEFAULT_KEYS = ['operator', 'all']


export default function AuthButton({authKey}:IAuthButton) {


  if(!DEFAULT_KEYS.includes(authKey)){
    return null
  }

  return (
    <div>
      可以操作
    </div>
  )
}
