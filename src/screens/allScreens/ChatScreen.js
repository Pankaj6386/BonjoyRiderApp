import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import {SendIcon} from '../../assets/svgIcons/Index';
import TextView from '../../components/TextView';
import FontFamily from '../../styles/FontFamily';

const messages = [
  {
    id: '1',
    sender: 'Admin',
    text: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout',
    time: '02:00 PM',
    type: 'received',
  },
  {
    id: '2',
    sender: '',
    text: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content.',
    time: '02:00 PM',
    type: 'sent',
  },
  {
    id: '3',
    sender: 'Admin',
    text: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout',
    time: '02:00 PM',
    type: 'received',
  },
  {
    id: '4',
    sender: '',
    text: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content.',
    time: '02:00 PM',
    type: 'sent',
  },
];

const ChatScreen = () => {
  const [chatMessages, setChatMessages] = useState(messages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: (chatMessages.length + 1).toString(),
      sender: '',
      text: inputText,
      time: '02:01 PM',
      type: 'sent',
    };

    setChatMessages([...chatMessages, newMessage]);
    setInputText('');
  };

  const renderMessage = ({item}) => {
    const isSent = item.type === 'sent';
    return (
      <View
        style={[
          styles.messageContainer,
          isSent ? styles.sentContainer : styles.receivedContainer,
        ]}>
        {!isSent && <TextView textSty={styles.sender}>{item.sender}</TextView>}
        <TextView
          textSty={{
            ...styles.messageText,
            color: isSent ? Colors.White : Colors.gray2,
          }}>
          {item.text}
        </TextView>
        <TextView
          textSty={{
            ...styles.messageTime,
            color: isSent ? Colors.White : Colors.gray2,
          }}>
          {item.time}
        </TextView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}
      <Header radius arrowBack title={'Chat'} />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          <FlatList
            nestedScrollEnabled={true}
            data={chatMessages}
            renderItem={renderMessage}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.chatContainer}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message"
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <SendIcon />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 60,
  },
  chatContainer: {
    padding: 16,
  },
  messageContainer: {
    borderWidth: 1,
    marginBottom: 12,
    maxWidth: '80%',
    borderRadius: 15,
    padding: 12,
  },
  receivedContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    borderColor: '#ECECEC',
  },
  sentContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.TealBlue,
    borderColor: Colors.TealBlue,
  },
  messageText: {
    fontSize: 10,
    lineHeight: 20,
    color: Colors.gray2,
  },
  sender: {
    fontSize: 12,
    color: Colors.Black,
    lineHeight: 16.39,
    fontFamily: FontFamily.Bold,
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 10,
    fontSize: 10,
    lineHeight: 20,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#DDDDDD',
  },
  input: {
    flex: 1,
    backgroundColor: '#F8FCFC',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sendButton: {
    position: 'absolute',
    right: 10,
    padding: 17,
  },
});
