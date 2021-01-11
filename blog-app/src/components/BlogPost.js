import './BlogPost.css';
import { Link } from 'react-router-dom';



function BlogPost(props) {

    return (
        <div className='blogPostContainer'>

            <div className='blogPostTitle'>
                <h1>{props.title}</h1>
            </div>
            
            <div className='blogPostBody'>
                <div className='blogPostBodyText'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi orci, accumsan ut blandit nec, fermentum non nulla. Proin dapibus mattis urna a efficitur. Aenean in venenatis leo, ut congue nibh. Ut sit amet ullamcorper nulla, sagittis accumsan ante. Donec mattis magna a nisl accumsan iaculis. Vivamus congue pellentesque fermentum. Aliquam justo tortor, aliquam a ultrices non, ornare lacinia urna. Proin vulputate varius enim, eu scelerisque ipsum. Praesent laoreet non mi sed pretium. Cras dictum sed ex ut venenatis. Curabitur eu felis nibh. Ut id aliquet dui. Nullam tellus erat, rhoncus id tellus et, vestibulum blandit ante. Ut dignissim a odio in venenatis. Vestibulum porta finibus maximus. Phasellus ultricies turpis sed nunc varius, iaculis suscipit elit sagittis.

                        Nulla facilisi. Aliquam tincidunt purus vitae vestibulum mollis. Pellentesque ornare laoreet felis, ac semper eros auctor vitae. Phasellus commodo ornare tincidunt. Aenean ultrices dolor lorem, eu scelerisque ex lobortis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eget ultrices risus, vel egestas elit. Pellentesque vestibulum sem eget turpis pretium scelerisque.

                        Praesent at sapien sapien. Nunc et est mauris. Ut eget augue nisi. Aenean quis eleifend tellus. In non vehicula eros, ut efficitur est. Praesent a elit sed ante elementum mattis id sit amet orci. Pellentesque sed tempus massa, nec tempus nulla. Morbi feugiat, arcu nec porttitor aliquet, risus justo sodales augue, nec rutrum neque odio scelerisque leo. Etiam lobortis pulvinar diam, vitae egestas quam tempus sit amet. Mauris lacus tellus, cursus vel sem vel, tincidunt tristique quam. Donec euismod pharetra scelerisque.

                        Cras a sollicitudin diam, consectetur malesuada est. Vivamus consectetur odio nunc, sed dictum lorem imperdiet non. Donec pellentesque, lacus dictum aliquet molestie, lectus ligula lacinia augue, quis porta justo quam eu justo. Aenean aliquam eget tortor non ultrices. Donec sed dui vitae velit blandit mollis. Nam ornare magna non mi ornare lobortis. Nulla lorem orci, lobortis a faucibus quis, laoreet eu purus. Nunc varius libero a sapien vulputate, et blandit sem faucibus. Integer porta pharetra convallis. Aliquam aliquet ipsum orci, nec convallis neque pharetra et. Curabitur dignissim, velit nec scelerisque suscipit, lectus quam viverra ipsum, et congue orci sem eu orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse viverra turpis consectetur massa ultrices, ac sagittis urna cursus.

                        Aenean luctus augue id semper posuere. Quisque accumsan convallis nulla, nec posuere ligula malesuada ac. Fusce lobortis cursus ligula sed rhoncus.
                    </p>
                </div>
            </div>

            <div className='buttonContainer'>
                {/* <button id={props.id} onClick={props.goToPostOnClick()}>Go To Post</button> */}
                <Link to={`/post?id=${props.id}`}>Go To Post</Link>
            </div>

        </div>
    )
}

export default BlogPost


// { props.body }