import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

const PRIMARY = '#FF7B29';
const PCoursesDetail = ({route}) => {
    const {courses} = route.params;
    const [Openmodal, closemodal] = useState(false);
  
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.banner}>
              <Image source={courses.img} style={styles.bannerImg} />
            </View>
    
            <View style={styles.card}>
              <Text style={styles.title}>{courses.courseName}</Text>
              <Text style={styles.category}>{courses.category}</Text>
    
              <Text style={styles.duration}>
                ⏳Duration: {courses.courseDuration}
              </Text>
    
              <View style={styles.aboutBox}>
                <Text style={styles.aboutHeading}>About</Text>
                <Text style={styles.description}>{courses.introduction}</Text>
                <TouchableOpacity onPress={() => closemodal(true)}>
                  <Text style={{color: PRIMARY}}>Read More</Text>
                </TouchableOpacity>
              </View>
    
              
    
              <View style={styles.techSection}>
                <Text style={styles.techHeading}>Technologies 🪐</Text>
    
                <View style={styles.techGrid}>
                  <Image source={courses.technology1} style={styles.techImg} />
                  <Image source={courses.technology2} style={styles.techImg} />
                  <Image source={courses.technology3} style={styles.techImg} />
                  <Image source={courses.technology4} style={styles.techImg} />
                  <Image source={courses.technology5} style={styles.techImg} />
                </View>
              </View>
             <View style={styles.priceBox}>
      <View style={{flexDirection:'row', alignItems:'center', gap:6}}>
        <Image source={require('../assets/price.png')} style={styles.priceIcon}/>
        <Text style={styles.priceLabel}>Course Price</Text>
      </View>
    
      <Text style={styles.priceValue}>₹{courses.fees}</Text>
    </View>
            </View>
    
    
            {/* Modal */}
            <Modal animationType="slide" transparent={true} visible={Openmodal}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => closemodal(false)}>
              <Image
                source={require('../assets/left.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{courses.courseName}</Text>
          </View>
    
          <ScrollView
            contentContainerStyle={styles.modalContent}
            showsVerticalScrollIndicator={false}>
            <View style={{elevation:4, borderRadius:20, backgroundColor:'#FFF4EB', padding:10}} >
            <Text style={styles.sectionTitle}>🐼Introduction</Text>
            <Text style={styles.sectionText}>{courses.introduction}</Text>
            </View>
            <View style={{elevation:4, borderRadius:20, backgroundColor:'#FFF4EB', padding:10,  marginTop:10}} >
            <Text style={styles.sectionTitle}>🧰 Technologies Used</Text>
            <Text style={styles.sectionText}>{courses.Technologies}</Text>
            </View>
            <View style={{elevation:4, borderRadius:20, backgroundColor:'#FFF4EB', padding:10, marginTop:10}} >
            <Text style={styles.sectionTitle}>⭐ Why {courses.courseName}</Text>
            <Text style={styles.sectionText}>{courses.why}</Text>
            </View>
            <View style={{elevation:4, borderRadius:20, backgroundColor:'#FFF4EB', padding:10, marginTop:10}} >
            <Text style={styles.sectionTitle}>📚 What You Learn</Text>
            <Text style={styles.sectionText}>{courses.What}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
    
            <View style={{height: 100, backgroundColor: 'white'}}></View>
          </ScrollView>
          <View style={styles.btn}>
            <Text
              style={{
                color: '#000',
                fontSize: 23,
                fontWeight: '300',
                marginLeft: 20,
              }}>
              Buy Now
            </Text>
    
            <TouchableOpacity
              style={{
                backgroundColor: '#000',
                height: 45,
                width: 45,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/play.png')}
                style={{
                  height: 26,
                  width: 26,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
  )
}

export default PCoursesDetail

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },

  banner: {
    width: '100%',
    height: 220,
    marginTop: -25,
  },

  bannerImg: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  card: {
    backgroundColor: '#fff',
    padding: 10,
    elevation: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#000',
    textAlign: 'center',
  },

  category: {
    fontSize: 15,
    color: PRIMARY,
    marginTop: 4,
    fontWeight: '400',
    textAlign: 'center',
  },

  duration: {
    fontSize: 15,
    color: '#555',
    marginTop: 10,
    backgroundColor: '#EEF0F5',
    padding: 12,
    borderRadius: 30,
    textAlign: 'center',
    fontWeight: '500',
  },

  aboutBox: {
    marginTop: 16,
    backgroundColor: '#EEF0F5',
    padding: 14,
    borderRadius: 14,
  },

  aboutHeading: {
    color: PRIMARY,
    fontSize: 26 + 4,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    lineHeight: 20,
    color: '#444',
  },

  priceBox: {
    marginTop: 16,
    backgroundColor: '#EEF0F5',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  priceLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: PRIMARY,
  },

  priceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: PRIMARY,
    marginTop: 2,
  },

  techSection: {
    marginTop: 20,
    backgroundColor: '#EEF0F5',
    padding: 12,
    borderRadius: 14,
  },

  techHeading: {
    fontSize: 25,
    fontWeight: '300',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },

  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  techImg: {
    height: 70,
    width: 70,
    borderRadius: 17,
    margin: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },

  btn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4EB',
    borderRadius: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },

  buyButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.2)',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},

modalContainer: {
  width: '100%',
  maxHeight: '80%',
  backgroundColor: 'white',
  borderRadius: 25,
  padding: 10,
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 5 },
},

modalHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
},

closeIcon: {
  height: 25,
  width: 25,
  tintColor: '#FF7B29',
  marginRight: 10,
},

modalTitle: {
  fontSize: 32,
  fontWeight: '300',
  color: '#FF7B29',
  flexShrink: 1,
},

modalContent: {
  paddingBottom: 20,
},

sectionTitle: {
  fontSize: 20,
  fontWeight: '300',
  color: '#FF7B29',
  marginTop: 15,
  marginBottom: 5,
},

sectionText: {
  fontSize: 15,
  color: '#333',
  lineHeight: 22,
},
priceBox: {
  marginTop: 20,
  alignSelf: 'center',
  backgroundColor: '#FFE8D8',
  paddingVertical: 10,
  paddingHorizontal: 25,
  borderRadius: 40,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
},

priceIcon: {
  width: 22,
  height: 22,
},

priceLabel: { 
fontSize: 14, 
color: PRIMARY 
},

priceValue: {
  fontSize: 30,
  color: PRIMARY,
  fontWeight: '300',
  textShadowColor: 'rgba(0,0,0,0.1)',
  textShadowRadius: 4,
}

})