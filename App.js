import React, { useState } from 'react';
import {View, Text, Image, Button, Alert, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function QuizApp() {
    const questions = [
        {
            question: 'Which group is this?',
            poster: require('./img/enhypen.jpg'),
            options: ['Enhypen', 'Straykids', 'Bts'],
            answer: 'Enhypen',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/(g)i-dle.jpg'),
            options: ['Babymonster', '(G)i-dle', 'IVE'],
            answer: '(G)i-dle',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/svt.jpg'),
            options: ['Zerobaseone', 'TXT', 'Seventeen'],
            answer: 'Seventeen',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/bts.jpg'),
            options: ['Seventeen', 'BTS', 'Enhypen'],
            answer: 'BTS',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/newjeans.jpg'),
            options: ['Newjeans', 'Aespa', 'Twice'],
            answer: 'Newjeans',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/straykids.jpg'),
            options: ['BTS', 'Straykids', 'TXT'],
            answer: 'Straykids',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/kiss of life.jpg'),
            options: ['Le sserafim', 'Babymonster', 'Kiss of Life'],
            answer: 'Kiss of Life',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/lsfm.jpg'),
            options: ['Le sserafim', '(G)i-dle', 'Newjeans'],
            answer: 'Le sserafim',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/itzy.jpg'),
            options: ['Blackpink', 'Itzy', 'Twice'],
            answer: 'Itzy',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/babymon.jpg'),
            options: ['Babymonster', 'Aespa', 'Blackpink'],
            answer: 'Babymonster',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/zb1.jpg'),
            options: ['Enhypen', 'Zerobaseone', 'TXT'],
            answer: 'Zerobaseone',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/twice.jpg'),
            options: ['Itzy', 'Twice', 'Babymonster'],
            answer: 'Twice',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/txt.jpg'),
            options: ['BTS', 'Straykids', 'TXT'],
            answer: 'TXT',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/ive.jpg'),
            options: ['IVE', '(G)i-dle', 'Blackpink'],
            answer: 'IVE',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/aespa.jpg'),
            options: ['Newjeans', 'Aespa', 'Le sserafim'],
            answer: 'Aespa',
        },
        {
            question: 'Which group is this?',
            poster: require('./img/blackpink.jpg'),
            options: ['Twice', 'Aespa', 'Blackpink'],
            answer: 'Blackpink',
        },
    ];

    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
    const [score, setScore] = useState(null);

    const handleAnswerChange = (answer, index) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = answer;
        setSelectedAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === questions[index].answer) correctAnswers++;
        });
        Alert.alert(`You got ${correctAnswers} out of ${questions.length} correct!`);
        setScore(correctAnswers);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>KPOP Quiz</Text>
            {questions.map((q, index) => (
                <View key={index} style={styles.questionContainer}>
                    <Image source={q.poster} style={styles.image} />
                    <Text style={styles.questionText}>{q.question}</Text>
                    <View style={styles.pickerContainer}>
                        <RNPickerSelect
                            value={selectedAnswers[index]}
                            onValueChange={(itemValue) => handleAnswerChange(itemValue, index)}
                            items={q.options.map(option => ({ label: option, value: option }))}
                            style={{ inputAndroid: styles.picker }}
                        />
                    </View>
                </View>
            ))}
            <View style={styles.submitButtonContainer}>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>SUBMIT ANSWERS</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'grey',
        alignItems: 'center',
        paddingBottom: 95,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    questionContainer: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightpink',
        paddingBottom: 15,
    },
    questionText: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
        color:'black',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'lightpink',
        backgroundColor: 'lightpink',
        marginBottom: 10,
        resizeMode: 'contain',
    },
    pickerContainer: {
        width: '80%',
        marginBottom: 20,
        alignItems: 'center',
    },
    picker: {
        height: 50,
        color: 'white',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    submitButtonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    submitButton: {
        backgroundColor: 'lightpink',
        paddingVertical: 15,
        width: '80%',
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
