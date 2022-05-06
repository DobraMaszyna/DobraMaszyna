const Video = ({ video }) => {
  return (
    <iframe
      id='Wideo'
      src={video}
      title='YouTube video player'
      frameborder='0'
      style={{
        borderRadius: '20px',
        width: '100vmin',
        height: 'calc(100vmin / 2)',
        display: 'block',
        margin: '0 auto',
      }}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen></iframe>
  );
};

export default Video;
