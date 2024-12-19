import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {Vimeo} from 'react-native-vimeo-iframe';
import {WebView} from 'react-native-webview';


const VideoScreen = () => {
  const vimeoVideoUrl = 'https://vimeo.com/1038363803'; // Replace <VIDEO_ID> with your Vimeo video ID

  const videoCallbacks = {
    timeupdate: data => console.log('timeupdate: ', data),
    play: data => console.log('play: ', data),
    pause: data => console.log('pause: ', data),
    fullscreenchange: data => console.log('fullscreenchange: ', data),
    ended: data => console.log('ended: ', data),
    controlschange: data => console.log('controlschange: ', data),
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://player.vimeo.com/video/712158996'}}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false} // Allows autoplay
        allowsFullscreenVideo={true} // Enables full-screen playback
        startInLoadingState={true} // Shows a loader while the video loads
        useWebKit={true} // Ensure WebKit is enabled for iOS
        originWhitelist={['*']} // Allows all origins
      />

      {/* <Vimeo
        videoId={'712158996'}
        handlers={videoCallbacks}
        params={'muted=1'}
      /> */}
      <Video
        source={{ uri: "https://player.vimeo.com/video/712158996" }} // Replace with the direct video URL
        //style={styles.video}
        controls
        resizeMode="contain"
        paused={false} // Autoplay
        repeat={false} // Loop playback
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
  
});

export default VideoScreen;
