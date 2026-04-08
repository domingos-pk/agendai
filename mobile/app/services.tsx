import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  ArrowUpRight,
  Activity,
  Home,
  BriefcaseMedical,
  Pill,
  TestTube,
  BarChart2,
  Smartphone,
  Building2
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../src/constants/colors';
import { useBreakpoint } from '../src/hooks/useBreakpoint';

const servicesData = [
  { id: '1', title: 'Emergência', icon: Activity },
  { id: '2', title: 'Visita Domiciliar', icon: Home },
  { id: '3', title: 'Enfermaria', icon: BriefcaseMedical },
  { id: '4', title: 'Comprar Remédios', icon: Pill },
  { id: '5', title: 'Laboratórios', icon: TestTube },
  { id: '6', title: 'Relatórios Médicos', icon: BarChart2 },
  { id: '7', title: 'Ligar para o Médico', icon: Smartphone },
  { id: '8', title: 'Agebdar Consulta', icon: Building2 },
];

export default function Services() {
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
        <Text style={styles.headerTitle}>Services</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {servicesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity key={item.id} style={[styles.card, { width: cardWidth }]}>
                <View style={styles.iconContainer}>
                  <IconComponent size={24} color={Colors.primary} />
                </View>
                <View style={styles.cardBottom}>
                  <Text style={styles.cardLabel}>{item.title}</Text>
                  <View style={styles.arrowButton}>
                    <ArrowUpRight size={18} color={Colors.white} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
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
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
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
