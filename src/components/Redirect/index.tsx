import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

const Redirect = (props: any) => {
  useEffect(() => {
    route(props.to, true)
  }, [])

  return <></>
  
}

export default Redirect