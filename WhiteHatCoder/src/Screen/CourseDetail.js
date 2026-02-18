import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const CourseDetail = () => {
  return (
    <View style={{ backgroundColor: "#f5f6fa", flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Course Details</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={styles.card}>
          <Text style={styles.label}>Course Name</Text>
          <Text style={styles.value}>Full Stack Development</Text>

          <Text style={styles.label}>Start Date</Text>
          <Text style={styles.value}>10 Nov 2024</Text>

          <Text style={styles.label}>Teacher Name</Text>
          <Text style={styles.value}>Rahul Sharma</Text>

          <Text style={styles.label}>Counsellor Name</Text>
          <Text style={styles.value}>Mohit Verma</Text>

          <Text style={styles.label}>Fees Pending</Text>
          <Text style={[styles.value, { color: "#d9534f", fontWeight: "700" }]}>
            ₹ 12,000
          </Text>

          <Text style={styles.label}>Fees Paid</Text>
          <Text style={[styles.value, { color: "green", fontWeight: "700" }]}>
            ₹ 18,000
          </Text>

          <Text style={styles.label}>Course Duration</Text>
          <Text style={styles.value}>6 Months</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "#e76026",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    paddingLeft: 90,
    elevation: 10
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "300"
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    elevation: 8
  },
  label: {
    color: "#444",
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600"
  },
  value: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 6,
    color: "#000",
    borderWidth: 1,
    borderColor: "#ddd"
  }
});
