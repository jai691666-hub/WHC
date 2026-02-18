import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');
const PRIMARY = "#FF7B29";

const EnrollPopular = ({ navigation }) => {
const courses = [
      {
    "id": 1,
    "category": "Mobile Development",
    "courseName": "React Native",
    "courseDuration": "6 Months",
    "introduction": "React Native is a JavaScript framework used to build mobile apps for Android and iOS using React.It lets developers write code once and run it on both platforms with native performance.React Native uses native components, making apps fast, smooth, and close to real native apps.",
    "projectMade": ["Login System", "Todo App", "Weather API App"],
    "finalProjectMade": "E-Commerce Mobile App",
    "img": require("../assets/react.png"),
    "fees": "15000",
    "aboutCourse": "Learn components, navigation, REST APIs, Firebase, and real apps.",
    "technology1": require("../assets/html.png"),
    "technology2": require("../assets/css.png"),
    "technology3": require("../assets/js.png"),
    "technology4": require("../assets/native.png"),
    "technology5": require("../assets/firebase.png"),
     "Technologies": '✔ React: The core library for building user interfaces. \n ✔ JavaScript/TypeScript: The primary language for all development.\n ✔ Native Modules: Used to access platform-specific code (Java/Kotlin for Android, Swift/Objective-C for iOS).\n ✔ Expo: A set of tools to speed up development, testing, and deployment.\n ✔ Firebase/Backend APIs: For data storage, authentication, and server-side logic.',
    "What": 'Creating cross-platform UI components\nState and Props management\nHandling navigation (React Navigation)\nWorking with native device features (Camera, GPS, Storage)\nIntegrating REST APIs and Firebase\nApp deployment on Play Store & App Store',
    "why": 'Build apps for both Android and iOS with a single codebase.\nSaves significant time and cost (nearly 50%).\nExcellent performance, close to real native apps.\nHuge community support from Meta (Facebook).\nJavaScript developers can easily transition to mobile development.'
  },



  {
    "id": 2,
    "category": "Web Development",
    "courseName": "Full Stack Development",
    "courseDuration": "6 Months",
    "introduction": "Full Stack Development refers to building both the frontend (client side) and the backend (server side) of a website or application. A full stack developer works on everything — the user interface, server logic, database, APIs, and deployment — making them capable of handling complete project development.",
    "projectMade": ["Portfolio", "Blog App"],
    "finalProjectMade": "E-Commerce Website",
    "img": require("../assets/fullstack.png"),
    "fees": "25000",
    "aboutCourse": "Covers HTML, CSS, JS, React, Node, Express, MongoDB.",
    "technology1": require("../assets/html.png"),
    "technology2": require("../assets/css.png"),
    "technology3": require("../assets/js.png"),
    "technology4": require("../assets/node.png"),
    "technology5": require("../assets/firebase.png"),
    "Technologies": '✔ Frontend (HTML, CSS, JavaScript, React/Vue/Angular)\n ✔ Backend (Node.js/Python/PHP/Java, Express/Django/Laravel)\n ✔ Database (MongoDB/MySQL/PostgreSQL)\n ✔ API (REST/GraphQL)\n ✔ Cloud & Deployment (AWS/Azure/Firebase/Vercel)',
    "What": 'Designing and implementing responsive UI (Frontend)\nBuilding robust server-side logic and APIs (Backend)\nManaging and querying databases\nImplementing user authentication and security\nDeploying and maintaining the complete application (DevOps basics)',
    "why": 'The most sought-after job role in IT; developers can handle entire projects.\nHigher salary packages and better career growth.\nComplete control over all layers of the application.\nVersatility to work on any part of the project.\nFast-paced learning and building complex applications.'
  },

  {
    "id": 3,
    "category": "Cyber Security",
    "courseName": "Ethical Hacking",
    "courseDuration": "4 Months",
    "introduction": "Learn hacking tools & security testing.",
    "projectMade": ["Network Scan", "Password Audit"],
    "finalProjectMade": "Penetration Testing Project",
    "img": require("../assets/ethical.png"),
    "fees": "22000",
    "aboutCourse": "Kali Linux, Wireshark, Metasploit.",
    // "technology1": require("../assets/kali.png"),
    // "technology2": require("../assets/metasploit.png"),
    // "technology3": require("../assets/wireshark.png"),
    // "technology4": require("../assets/burpsuite.png"),
    // "technology5": require("../assets/linux.png"),
     "Technologies": '✔ Kali Linux: A specialized operating system for ethical hacking and penetration testing.\n ✔ Metasploit: A framework for developing, executing, and testing exploit code.\n ✔ Wireshark: A network protocol analyzer for monitoring traffic.\n ✔ Burp Suite: An integrated platform for performing security testing of web applications.\n ✔ Programming: Python, Shell Scripting for automation.',
    "What": 'Understanding different hacking phases (Reconnaissance, Scanning, Exploitation).\nIdentifying vulnerabilities in networks, systems, and web applications.\nPerforming penetration testing (Pen Test) to legally find and report security weaknesses.\nAnalyzing network traffic and system logs.\nWriting security reports and suggesting remediation steps.',
    "why": 'High demand for security professionals in every industry to protect systems.\nIt is a highly engaging and challenging career path.\nHigh salaries and opportunities for continuous learning.\nBecome a "White Hat" hacker, using your skills for good.\nContribute directly to global cyber safety.'
  },

  {
    "id": 4,
    "category": "AI / ML",
    "courseName": "Machine Learning",
    "courseDuration": "5 Months",
    "introduction": "Learn ML algorithms, model training.",
    "projectMade": ["Spam Detection", "Regression Model"],
    "finalProjectMade": "AI Recommendation System",
    "img": require("../assets/ml.png"),
    "fees": "32000",
    "aboutCourse": "Python, NumPy, Pandas, ML algorithms.",
    // "technology1": require("../assets/python.png"),
    // "technology2": require("../assets/numpy.png"),
    // "technology3": require("../assets/pandas.png"),
    // "technology4": require("../assets/sklearn.png"),
    // "technology5": require("../assets/jupyter.png"),
    "Technologies": '✔ Python: The primary language for ML (Scikit-learn, TensorFlow, Keras).\n ✔ NumPy: For fast, efficient numerical operations.\n ✔ Pandas: For data manipulation and analysis.\n ✔ ML Algorithms: Linear Regression, Logistic Regression, Decision Trees, K-Means, SVM.\n ✔ Jupyter Notebook: For interactive development and experimentation.',
    "What": 'Data Preprocessing and Feature Engineering.\nUnderstanding and implementing core ML algorithms.\nTraining, testing, and optimizing ML models (Model Lifecycle).\nEvaluating model performance (Metrics like Accuracy, Precision, Recall).\nBuilding predictive systems and recommendation engines.',
    "why": 'Machine Learning is the fastest-growing field in technology.\nOpportunity to solve complex real-world problems (Healthcare, Finance, IoT).\nExtremely high demand and competitive salaries worldwide.\nYou are building the future of AI-powered systems.\nAbility to create intelligent applications that learn from data.'
  },

  {
    "id": 5,
    "category": "AI / ML",
    "courseName": "Data Science",
    "courseDuration": "6 Months",
    "introduction": "Data analysis, ML, visualization.",
    "projectMade": ["Sales Analysis", "Customer Segmentation"],
    "finalProjectMade": "Predictive Analysis",
    "img": require("../assets/ds.png"),
    "fees": "35000",
    "aboutCourse": "Python, SQL, Tableau, PowerBI.",
    "technology1": require("../assets/python.png"),
    // "technology2": require("../assets/sql.png"),
    // "technology3": require("../assets/tableau.png"),
    // "technology4": require("../assets/powerbi.png"),
    // "technology5": require("../assets/pandas.png"),
     "Technologies": '✔ Python (Pandas, NumPy, Scikit-learn): For data cleaning, analysis, and ML.\n ✔ SQL: For database querying and data extraction.\n ✔ Visualization Tools (Tableau/PowerBI/Matplotlib): For creating insightful reports.\n ✔ Statistics & Probability: The mathematical foundation for analysis.\n ✔ Excel: For initial data cleaning and reporting.',
    "What": 'Collecting, cleaning, and transforming raw data into a usable format.\nPerforming exploratory data analysis (EDA) to find patterns and trends.\nBuilding statistical and Machine Learning models to make predictions.\nCreating compelling data visualizations and dashboards.\nCommunicating data-driven insights to stakeholders (Storytelling).',
    "why": 'Data is the new oil; Data Scientists turn data into actionable business value.\nHigh demand across all sectors (E-commerce, Healthcare, Finance).\nIt is a blend of coding, statistics, and business strategy.\nExcellent job growth and opportunities for leadership roles.\nDirectly impact business decisions and growth strategies.',
  },

];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      activeOpacity={0.9} 
      style={styles.courseCard}  
      onPress={() => navigation.navigate('detailsCourse', { courses: item })} 
    >
      {/* 🖼️ Banner Area with Badge */}
      <View style={styles.imageContainer}>
        <Image source={item.img} style={styles.banner} resizeMode="cover" />
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>🕒 {item.courseDuration}</Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        {/* 🏷️ Category & Name */}
        <Text style={styles.category}>{item.category.toUpperCase()}</Text>
        <Text style={styles.courseName} numberOfLines={1}>{item.courseName}</Text>

        {/* 📝 Introduction */}
        <Text numberOfLines={2} style={styles.intro}>
          {item.introduction}
        </Text>

        {/* 💰 Price & Action Row */}
        <View style={styles.actionRow}>
          <View>
            <Text style={styles.priceLabel}>Full Course</Text>
            <Text style={styles.priceValue}>₹{item.fees}</Text>
          </View>

          <View style={styles.startBtn}>
            <Text style={styles.startBtnText}>Start</Text>
            <View style={styles.playCircle}>
               <Image 
                source={require('../assets/play.png')} 
                style={styles.playIcon} 
               />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listPadding}
      showsHorizontalScrollIndicator={false}
      horizontal
      />
  )
}

export default EnrollPopular

const styles = StyleSheet.create({
  listPadding: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    paddingTop: 10
  },
  courseCard: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    width: width * 0.75,
    marginRight: 20,
    // Modern Soft Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 160,
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  durationBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  durationText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333',
  },
  cardContent: {
    padding: 20,
  },
  category: {
    fontSize: 10,
    fontWeight: '800',
    color: PRIMARY,
    letterSpacing: 1,
    marginBottom: 4,
  },
  courseName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  intro: {
    fontSize: 13,
    color: "#777",
    lineHeight: 18,
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  priceLabel: {
    fontSize: 10,
    color: '#999',
    fontWeight: '600',
  },
  priceValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  startBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingLeft: 18,
    paddingRight: 6,
    paddingVertical: 6,
    borderRadius: 30,
  },
  startBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 10,
  },
  playCircle: {
    backgroundColor: PRIMARY,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: 14,
    height: 14,
    tintColor: '#FFF'
  }
})