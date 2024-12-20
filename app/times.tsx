import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Times({ navigation }: any) {
  const [participants, setParticipants] = useState([{ id: '1', name: 'Rodrigo Gonçalves' }, { id: '2', name: 'Diego Fernandes' }]);
  const [newParticipant, setNewParticipant] = useState('');

  const addParticipant = () => {
    if (newParticipant.trim()) {
      setParticipants([...participants, { id: Date.now().toString(), name: newParticipant }]);
      setNewParticipant('');
    }
  };

  const removeParticipant = (id: string) => {
    setParticipants(participants.filter(participant => participant.id !== id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Nome da turma</Text>
        <Text style={styles.subtitle}>adicione a galera e separe os times</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#7C7C8A"
          value={newParticipant}
          onChangeText={setNewParticipant}
        />
        <TouchableOpacity style={styles.addButton} onPress={addParticipant}>
          <AntDesign name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.teamTabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>TIME A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>TIME B</Text>
        </TouchableOpacity>
        <Text style={styles.participantsCount}>{participants.length}</Text>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.participantRow}>
            <View style={styles.participantInfo}>
              <AntDesign name="user" size={20} color="#FFFFFF" style={styles.participantIcon} />
              <Text style={styles.participantName}>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={() => removeParticipant(item.id)}>
              <AntDesign name="close" size={20} color="#F75A68" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remover turma</Text>
      </TouchableOpacity>
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
  headerContainer: {
    alignItems: 'center',
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
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#202024',
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 8,
  },
  addButton: {
    width: 48,
    height: 48,
    backgroundColor: '#00875F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#29292E',
    borderRadius: 6,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#00875F',
  },
  tabText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  participantsCount: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  participantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#29292E',
    padding: 16,
    borderRadius: 6,
    marginBottom: 8,
  },
  participantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantIcon: {
    marginRight: 8,
  },
  participantName: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#AA2834',
    padding: 14,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  removeButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
});
