import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image, FlatList } from 'react-native'
import FeedScreen from './Feed'

export default class CreatePost extends Component {
  constructor(){
    super()
    this.state = {
      previewImage=1,
      dropdownHeight=2,
      caption:''
    }
  }
  renderItem = ({ item: story }) => {
  return <PostCard story={story} navigation={this.props.navigation} />;
  };
  render(){
    /*return (
      <View style={styles.droidSafeArea}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image source={require('../assets/logo.png')} style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem}/>
        </View>
      </View>
    )*/
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image source={require('../assets/logo.png')} style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image source={preview_images[this.state.previewImage]} style={styles.previewImage}></Image>
            <View style={{height:RFValue(this.state.dropdownHeight)}}>
              <DropDownPicker 
                items={[
                  {label:"Image 1", value:"image_1"},
                  {label:"Image 2", value:"image_2"},
                  {label:"Image 3", value:"image_3"},
                  {label:"Image 4", value:"image_4"},
                  {label:"Image 5", value:"image_5"}
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{height=40, borderRadius=20, marginBottom=10}}
                onOpen={()=>{this.setState({dropDownHeight:170})}}
                onClose={()=>{this.setState({dropDownHeight:40})}}
                style={{backgroundColor:"transparent"}}
                itemStyle={{justifyContent:"flex-start"}}
                dropDownStyle={{backgroundColor:'#2a2a2a'}}
                labelStyle={{color:"white"}}
                arrowStyle={{color:"white"}}
                onChangeItem={item=>{this.setState({previewImage:item.value})}}/>
            </View>
            <TextInput style={styles.inputFont}
              onChangeText={caption=>this.setState({caption:caption})}
              placeholder={"Caption"}
              placeholderTextColor="white"/>
          </ScrollView>
        </View>
        <View style={{flex:0.08}}/>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: RFValue(13)
  },
  appIcon:{
    flex:0.07,
    flexDirection:"row"
  },
  appIcon:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  iconImage:{
    width:"100%",
    height:"100%",
    resizeMode:"contain",
  },
  appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize:RFValue(28)
  },
  cardContainer:{
    flex:0.85
  }
})