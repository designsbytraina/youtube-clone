import React from 'react';
import VideoListItem from './video_list_item';

// in functional components, props are arguments
// in class based components, props are available anywhere in any method we define as this.props
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video={video} />
	});

	return (
		<ul className='col-xs-4 col-sm-4 col-md-4 col-lg-4 list-group'>
			{videoItems}
		</ul>
	);
}

export default VideoList;