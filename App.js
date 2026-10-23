import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import InfoCard from './src/components/InfoCard';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  const filteredMahasiswa = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const handlePressDetail = (title) => {
    Alert.alert('Detail', `Anda menekan tombol Lihat Detail pada: ${title}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemNama}>{item.nama}</Text>
      <Text style={styles.itemProdi}>{item.prodi}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={filteredMahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <Text style={styles.mainTitle}>UTS Lab Pemrograman Mobile</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Question 1: InfoCard Component</Text>
              <InfoCard
                title="Tugas Praktikum Mobile 1"
                status="selesai"
                onPress={() => handlePressDetail('Tugas Praktikum Mobile 1')}
              />
              <InfoCard
                title="Proyek Akhir Semester"
                status="proses"
                onPress={() => handlePressDetail('Proyek Akhir Semester')}
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Question 2: Daftar Mahasiswa</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Cari nama mahasiswa..."
                placeholderTextColor="#888"
                value={keyword}
                onChangeText={setKeyword}
              />
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  listContent: {
    padding: 16,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#212529',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#343A40',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#212529',
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  itemNama: {
    fontSize: 15,
    fontWeight: '600',
    color: '#212529',
  },
  itemProdi: {
    fontSize: 13,
    color: '#6C757D',
    marginTop: 4,
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#DC3545',
    fontWeight: '500',
  },
});
