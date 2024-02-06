import React , { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button
  } from 'react-native';

  import FS from 'react-native-fs';
  
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

  function App(): React.JSX.Element {

    const [mkdirParam, setMkdirParam] = useState('');

    const [existsSource, setExistsSource] = useState('');

    const [writeFileParam, setWriteFileParam] = useState('');
    const [writeFileContent, setWriteFileContent] = useState('');

    const [appendFileParam, setAppendFileParam] = useState('');
    const [appendContent, setAppendContent] = useState('');

    const [readFileParam, setReadFileParam] = useState('');

    const [readFileAssetsParam, setReadFileAssetsParam] = useState('');

    const [copyFileSource, setCopyFileSource] = useState('');
    const [copyFileDest, setCopyFileDest] = useState('');

    const [unlinkFileParam, setUnlinkFileParam] = useState('');

    const mkdirExample = () => {
      FS.mkdir(mkdirParam).then((result) => {
        console.log('mkdir mkdirParam： '+mkdirParam);
        console.log('mkdir Successfully created directory.');
      }, err => {
        console.error('mkdir mkdir: '+ err.message)
      });
    }

    const existsExample = () => {
      FS.exists(existsSource)
            .then(result => {
              console.log('mkdir Exists: ' + result)
            },err => {
              console.log('mkdir exists: '+err.message);
            })
    }
   
    const writeFileExample = () => {
      if(writeFileParam.length > 0 && writeFileContent.length > 0) {
        FS.writeFile(writeFileParam, writeFileContent)
              .then((result) => {
                console.log('mkdir Successfully Wrote to File')
              }, err => {
                console.log('mkdir writeFile: '+err.message);
              })
      }
    }

    const appendFileExample = () => {
      if(appendFileParam.length > 0 && appendContent.length > 0) {
        FS.appendFile(appendFileParam, appendContent)
              .then((result) => {
                console.log('mkdir Successfully Appended to File')
              }, err => {
                console.log('mkdir appendFile: '+err.message);
              })
      }
    }

    const readFileAssetsExample = () => {
      if(readFileAssetsParam.length > 0) {
        FS.readFileAssets(readFileAssetsParam)
              .then((result) => {
                console.log('mkdir File Contents:', result)
              }, err => {
                console.log('mkdir readFileAssets: '+err.message);
              })
      }
    }
  
    const copyFileExample = () => {
      if(copyFileSource.length > 0) {
        FS.copyFile( copyFileSource,  copyFileDest)
              .then((result) => {
                console.log('mkdir Successfully put copy of file to specified destination.')
              }, err => {
                console.log('mkdir copyFile: '+err.message);
              })
      }
    }

    const readFileExampleutf8 = () => {
      if(readFileParam.length > 0) {
        FS.readFile(readFileParam,'utf8')
              .then((result) => {
                console.log('mkdir File Contents:', result)
              }, err => {
                console.log('mkdir readFile: '+err.message);
              })
      }
    }

    const unlinkExample = () => {
      if(unlinkFileParam.length > 0) {
        FS.unlink(unlinkFileParam)
              .then((result) => {
                console.log('mkdir Successfully unlinked specified file')
              }, err => {
                console.log('mkdir unlink: '+err.message);
              });
      } else {
        console.log('mkdir unlink'+ unlinkFileParam)
      }
    }

    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
  
          <Text style={styles.sectionTitle}>
            {"React Native File Harmony Demo App"}
          </Text>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDescription}>
                <Text>
                  {"FS.DocumentDirectoryPath: " + FS.DocumentDirectoryPath + '\n'}
                </Text>
              </View>
            </View>
          </View>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"mkdir"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "Folder Path"
                onChangeText={mkdirParam => setMkdirParam(mkdirParam)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Create Directory"
              color="#9a73ef"
              onPress={mkdirExample}
            />
            </View>
          </View>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"exists"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "Source Path"
                onChangeText={existsSource => setExistsSource(existsSource)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Check Existance"
              onPress={existsExample}
              color="#9a73ef"
            />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"writeFile"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "File Path"
                onChangeText={writeFileParam => setWriteFileParam(writeFileParam)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              <TextInput style = {styles.input}
                placeholder = "Content"
                onChangeText={writeFileContent => setWriteFileContent(writeFileContent)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Write Content to File"
              color="#9a73ef"
              onPress={writeFileExample}
            />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"appendFile"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "File Path"
                onChangeText={appendFileParam => setAppendFileParam(appendFileParam)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              <TextInput style = {styles.input}
                placeholder = "Content"
                onChangeText={appendContent => setAppendContent(appendContent)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Append Content to File"
              color="#9a73ef"
              onPress={appendFileExample}
            />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"readFile"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "File Path"
                onChangeText={readFileParam => setReadFileParam(readFileParam)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Read File utf8"
              color="#9a73ef"
              onPress={readFileExampleutf8}
            />
            </View>
          </View>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"copyFile"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "Source File Path"
                onChangeText={copyFileSource => setCopyFileSource(copyFileSource)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              <TextInput style = {styles.input}
                placeholder = "Destination Path"
                onChangeText={copyFileDest => setCopyFileDest(copyFileDest)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Copy File to Destination"
              color="#9a73ef"
              onPress={copyFileExample}
            />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"readFileAssets"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "File Path"
                onChangeText={readFileAssetsParam => setReadFileAssetsParam(readFileAssetsParam)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Read File"
              color="#9a73ef"
              onPress={readFileAssetsExample}
            />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {"unlink"}
            </Text>
              <View style={styles.sectionDescription}>
              <TextInput style = {styles.input}
                placeholder = "Path"
                onChangeText={UnlinkFileParam => setUnlinkFileParam(UnlinkFileParam)}
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
              />
              </View>
            <Button
              title="Unlink File at Path"
              color="#9a73ef"
              onPress={unlinkExample}
            />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    );
  }

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.black,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.dark,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.white,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    input: {
      
    },
    
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  
  export default App;