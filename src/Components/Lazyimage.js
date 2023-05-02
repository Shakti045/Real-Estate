import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
function Lazyimage(props){
    return (
        <div>
         <LazyLoadImage className={props?.class}  alt={props?.alt} src={props?.src} effect="blur"></LazyLoadImage>
        </div>
    )
}
export default Lazyimage;