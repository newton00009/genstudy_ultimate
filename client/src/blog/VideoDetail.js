import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div > Loading.... < /div>;
    }

<<<<<<< HEAD
    //const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return ( <
        div >
        <
        div className = "cta-video-image" >
        <
        div className = "ui embed" >
        <
        iframe src = { video.videoLink }
        title = "videoplayer" / >
        <
        /div> <
        /div> <
        /div>
    );
=======
  //const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  //console.log(video.videoLink)



  function YouTubeGetID(url){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
 }



 const link= YouTubeGetID(video.videoLink)
 const videoSrc = `https://www.youtube.com/embed/${link}`;



  return (
    <div>
      <div className="cta-video-image">
        <div className="ui embed">
          <iframe width="420" height="315" src= {videoSrc} title="videoplayer" />
        </div>
      </div>
    </div>
  );
>>>>>>> 54eddcc3de1207bc4fb32d19e1dd63a2f4e02380
};

export default VideoDetail;