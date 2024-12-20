import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function NovaTurma({ navigation }: any) {
  return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <AntDesign name="team" size={48} color="#00875F" style={styles.icon} />
        <Text style={styles.headerTitle}>Nova Turma</Text>
        <Text style={styles.subtitle}>crie uma turma para adicionar pessoas</Text>
        <TextInput style={styles.input} placeholder="Nome da turma" placeholderTextColor="#7C7C8A" />
        <TouchableOpacity style={styles.createButton} onPress={() => {}}>
          <Text style={styles.createButtonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    padding: 24,
  },
  backButton: {
    marginBottom: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 14,
    color: '#E1E1E6',
    fontFamily: 'Roboto',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    backgroundColor: '#202024',
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  createButton: {
    backgroundColor: '#00875F',
    padding: 14,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  createButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
});