import ViewVideoFile from '../../assets/Video/view.mp4'
import Container from '../../components/shared/Container';

const ViewVideo = () => {
    return (
        <div className='my-16'>
        <Container>
            <div className='text-center mb-5'>
                <h1 className='text-3xl text-orange-800 uppercase font-medium'>Our Room View</h1>
            </div>
        <div>
            <video src={ViewVideoFile} autoPlay loop muted  className='max-h-[350px] w-full '></video>
        </div>
        </Container>
        </div>
    );
};

export default ViewVideo;