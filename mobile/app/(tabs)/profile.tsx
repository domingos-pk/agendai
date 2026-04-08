import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../src/constants/colors';
import {
  User,
  Lock,
  Bell,
  Globe,
  Info,
  Sun,
  Calendar,
  HelpCircle,
  ChevronRight,
  LogOut,
  Phone
} from 'lucide-react-native';

interface ProfileOptionProps {
  icon: React.ElementType;
  title: string;
  rightText?: string;
  noBorder?: boolean;
}

const ProfileOption = ({ icon: Icon, title, rightText, noBorder }: ProfileOptionProps) => (
  <TouchableOpacity style={[styles.optionContainer, !noBorder && styles.optionBorder]}>
    <View style={styles.optionLeft}>
      <Icon size={20} color={Colors.textSecondary} />
      <Text style={styles.optionTitle}>{title}</Text>
    </View>
    <View style={styles.optionRight}>
      {rightText && <Text style={styles.optionRightText}>{rightText}</Text>}
      <ChevronRight size={20} color={Colors.border} />
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.headerTitle}>Perfil</Text>

        {/* User Card */}
        <View style={styles.userCard}>
          <Image
            source={require('../../src/assets/avatar/avatar.jpg')}
            style={styles.userAvatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Du Pedro</Text>
            <Text style={styles.userEmail}>du.pedro@gmail.com</Text>
          </View>
        </View>

        {/* Conta Section */}
        <Text style={styles.sectionTitle}>Conta</Text>
        <View style={styles.sectionCard}>
          <ProfileOption icon={User} title="Gerenciar Perfil" />
          <ProfileOption icon={Lock} title="Senha e Segurança" />
          <ProfileOption icon={Bell} title="Notificações" />
          <ProfileOption icon={Globe} title="Idioma" rightText="Português" noBorder />
        </View>

        {/* Preferências Section */}
        <Text style={styles.sectionTitle}>Preferências</Text>
        <View style={styles.sectionCard}>
          <ProfileOption icon={Info} title="Sobre Nós" />
          <ProfileOption icon={Sun} title="Tema" rightText="Claro" />
          <ProfileOption icon={Calendar} title="Agendamentos" noBorder />
        </View>

        {/* Suporte Section */}
        <Text style={styles.sectionTitle}>Suporte</Text>
        <View style={styles.sectionCard}>
          <ProfileOption icon={HelpCircle} title="Central de Ajuda" noBorder />
          <ProfileOption icon={Phone} title="Contate nos" noBorder />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 24,
  },
  userCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginBottom: 8,
    marginLeft: 4,
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  optionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    color: Colors.textPrimary,
    marginLeft: 12,
    fontWeight: '400',
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionRightText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginTop: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.error,
    marginLeft: 8,
  }
});
