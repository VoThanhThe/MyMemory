import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import WebView from 'react-native-webview';

const BrowserScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };
  //https://darkknight.games/
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator style={styles.loader} size="large" />}
      {!loading && error && (
        <Text style={styles.error}>Error loading content.</Text>
      )}
      <WebView
        source={{uri: 'https://darkknight.games/'}}
        javaScriptEnabled={true}
        // onLoad={handleLoad}
        // onError={handleError}
        style={styles.webview}
        startInLoadingState
        scalesPageToFit
        mixedContentMode="always"
        allowsInlineMediaPlayback
        allowsFullscreenVideo
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  webview: {
    flex: 1,
  },
});

export default BrowserScreen;
