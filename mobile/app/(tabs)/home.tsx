import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Search, Mic, Activity, Home as HomeIcon, BriefcaseMedical, Pill, Calendar, Clock, MapPin, Star, Sparkles } from 'lucide-react-native';
import { Colors } from '../../src/constants/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image 
              source={require('../../src/assets/avatar/avatar.jpg')} 
              style={styles.avatar} 
            />
            <View>
              <Text style={styles.userName}>Du Pedro</Text>
              <View style={styles.locationContainer}>
                <MapPin size={12} color={Colors.primary} />
                <Text style={styles.locationText}>Luanda</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell size={24} color={Colors.textPrimary} />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.textSecondary} style={styles.searchIcon} />
          <TextInput 
            placeholder="Procure especialistas, clínicas..." 
            placeholderTextColor={Colors.textSecondary}
            style={styles.searchInput}
          />
          <Mic size={20} color={Colors.textSecondary} />
        </View>

        {/* Services */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Serviços</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.servicesRow}>
            <ServiceItem icon={<Activity size={24} color={Colors.white} />} label="Emergência" />
            <ServiceItem icon={<HomeIcon size={24} color={Colors.white} />} label="Visita em Casa" />
            <ServiceItem icon={<BriefcaseMedical size={24} color={Colors.white} />} label="Enfermagem" />
            <ServiceItem icon={<Pill size={24} color={Colors.white} />} label="Medicina" />
          </View>
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos Compromissos</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentInfo}>
              <Text style={styles.doctorName}>Dr. Shaun Murphy</Text>
              <Text style={styles.specialty}>Especialista em Cirurgião Geral</Text>
              
              <View style={styles.dateTimeContainer}>
                <View style={styles.dateTimeItem}>
                  <Calendar size={14} color={Colors.white} />
                  <Text style={styles.dateTimeText}>Domingo, 25 Junho</Text>
                </View>
                <View style={styles.dateTimeDivider} />
                <View style={styles.dateTimeItem}>
                  <Clock size={14} color={Colors.white} />
                  <Text style={styles.dateTimeText}>12:30 PM</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.rescheduleBtn}>
                <Text style={styles.rescheduleText}>Remarcar</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={require('../../src/assets/medical/Dr. Shaun Murphy.jpg')} 
              style={styles.doctorImageMain} 
            />
          </View>
        </View>

        {/* Specialties */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Especialidades</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.specialtiesRow}>
            <SpecialtyItem color="#EFF6FF" emoji="👨‍⚕️" label="Geral" />
            <SpecialtyItem color="#FEF2F2" emoji="🧠" label="Neurologia" />
            <SpecialtyItem color="#FDF4FF" emoji="👶" label="Pediatria" />
            <SpecialtyItem color="#FFFBEB" emoji="🩻" label="Radiologia" />
          </View>
        </View>

        {/* Popular Doctors */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Doctores Populares</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.popularDoctorCard}>
            <Image 
              source={require('../../src/assets/medical/Dr. Aaron Glassman.jpg')} 
              style={styles.popularDoctorImg} 
            />
            <View style={styles.popularDoctorInfo}>
              <Text style={styles.popularDoctorName}>Dr. Aaron Glassman</Text>
              <Text style={styles.popularDoctorSpecialty}>Neurocirurgião | Aaron Glassman | Luanda</Text>
              <View style={styles.ratingContainer}>
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text style={styles.ratingText}>4.9 (120 reviews)</Text>
              </View>
            </View>
          </View>

          <View style={styles.popularDoctorCard}>
            <Image 
              source={require('../../src/assets/medical/Dra. Audrey Lim.jpg')} 
              style={styles.popularDoctorImg} 
            />
            <View style={styles.popularDoctorInfo}>
              <Text style={styles.popularDoctorName}>Dra. Audrey Lim</Text>
              <Text style={styles.popularDoctorSpecialty}>Cirurgiã de Trauma | Audrey Lim | Luanda</Text>
              <View style={styles.ratingContainer}>
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text style={styles.ratingText}>4.9 (120 reviews)</Text>
              </View>
            </View>
          </View>

          <View style={styles.popularDoctorCard}>
            <Image 
              source={require('../../src/assets/medical/Dr. Marcus Andrews.jpg')} 
              style={styles.popularDoctorImg} 
            />
            <View style={styles.popularDoctorInfo}>
              <Text style={styles.popularDoctorName}>Dr. Marcus Andrews</Text>
              <Text style={styles.popularDoctorSpecialty}>Neurocirurgião | Marcus Andrews | Luanda</Text>
              <View style={styles.ratingContainer}>
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text style={styles.ratingText}>4.9 (120 reviews)</Text>
              </View>
            </View>
          </View>

          <View style={styles.popularDoctorCard}>
            <Image 
              source={require('../../src/assets/medical/Dr. Marcus Andrews.jpg')} 
              style={styles.popularDoctorImg} 
            />
            <View style={styles.popularDoctorInfo}>
              <Text style={styles.popularDoctorName}>Dr. Marcus Andrews</Text>
              <Text style={styles.popularDoctorSpecialty}>Neurocirurgião | Marcus Andrews | Luanda</Text>
              <View style={styles.ratingContainer}>
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text style={styles.ratingText}>4.9 (120 reviews)</Text>
              </View>
            </View>
          </View>
          
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Sparkles size={24} color={Colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const ServiceItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <View style={styles.serviceItem}>
    <View style={styles.serviceIconContainer}>
      {icon}
    </View>
    <Text style={styles.serviceLabel}>{label}</Text>
  </View>
);

const SpecialtyItem = ({ color, emoji, label }: { color: string, emoji: string, label: string }) => (
  <View style={styles.specialtyItem}>
    <View style={[styles.specialtyIconContainer, { backgroundColor: color }]}>
      <Text style={styles.specialtyEmoji}>{emoji}</Text>
    </View>
    <Text style={styles.serviceLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FAFAFA' 
  },
  scrollContent: { 
    paddingBottom: 100 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.surface,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  locationText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  notificationBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#EF4444',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 25,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: Colors.textPrimary,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  seeAll: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceItem: {
    alignItems: 'center',
    gap: 8,
    width: 70,
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceLabel: {
    fontSize: 12,
    color: Colors.textPrimary,
    fontWeight: '500',
    textAlign: 'center',
  },
  appointmentCard: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  appointmentInfo: {
    flex: 1,
    zIndex: 2,
  },
  doctorName: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  specialty: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginBottom: 16,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateTimeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dateTimeDivider: {
    width: 1,
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 8,
  },
  dateTimeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  rescheduleBtn: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  rescheduleText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  doctorImageMain: {
    width: 120,
    height: 150,
    position: 'absolute',
    right: -10,
    bottom: 0,
    zIndex: 1,
  },
  specialtiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specialtyItem: {
    alignItems: 'center',
    gap: 8,
    width: 70,
  },
  specialtyIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialtyEmoji: {
    fontSize: 28,
  },
  popularDoctorCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  popularDoctorImg: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: Colors.surface,
  },
  popularDoctorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  popularDoctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  popularDoctorSpecialty: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  fab: {
    position: "absolute",
    bottom: Platform.OS === 'ios' ? 40 : 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default Home;