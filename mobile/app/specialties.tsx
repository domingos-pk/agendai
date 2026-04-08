import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ArrowUpRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../src/constants/colors';
import { useBreakpoint } from '../src/hooks/useBreakpoint';

const specialtiesData = [
  { id: '1', emoji: '👨‍⚕️', label: 'Consulta Geral', color: '#EFF6FF' },
  { id: '2', emoji: '🗣️', label: 'Otorrinolaringologia', color: '#FEF2F2' },
  { id: '3', emoji: '👶', label: 'Pediatria', color: '#FDF4FF' },
  { id: '4', emoji: '🫘', label: 'Urologia', color: '#FFFBEB' },
  { id: '5', emoji: '🦷', label: 'Odontologia', color: '#EFF6FF' },
  { id: '6', emoji: '🧬', label: 'Intestino', color: '#FEF2F2' },
  { id: '7', emoji: '🔬', label: 'Histologist', color: '#FDF4FF' },
  { id: '8', emoji: '🫀', label: 'Cardiologia', color: '#FFFBEB' },
];

export default function Specialties() {
  const router = useRouter();
  const { getCardWidth } = useBreakpoint();
  const cardWidth = getCardWidth();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ChevronLeft size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Specialties</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {specialtiesData.map((item) => (
            <TouchableOpacity key={item.id} style={[styles.card, { width: cardWidth }]}>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <Text style={styles.emoji}>{item.emoji}</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text style={styles.cardLabel}>{item.label}</Text>
                <View style={styles.arrowButton}>
                  <ArrowUpRight size={18} color={Colors.white} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  placeholder: {
    width: 32,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 4,
    height: 140,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 24,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    flex: 1,
  },
  arrowButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
