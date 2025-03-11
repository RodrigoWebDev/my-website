import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

interface IRedirect {
  to: string
}

const Redirect = (props: IRedirect) => {
  useEffect(() => {
    route(props.to, true)
  }, [])

  return <></>
  
}

export default Redirect