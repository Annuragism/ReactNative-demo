import React from "react";
import { Image } from 'react-native'
import { StyleSheet, Button, Text, View, Alert } from 'react-native';


export class ButtonComponent extends React.Component<{ title: string, style: any }, { source: string }>{
    constructor(props: any) {
        super(props);
        // console.log(props);

    }


    render() {
        return (
            <View>
                <Button
                    title={this.props.title}
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyDiv: {
        width: 250,
        height: 250,
        border: '1px solid black'
    },
    logo: {
        width: 66,
        height: 58,
    },
});