import React from "react";
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';


export class ImageComponent extends React.Component<{ source: string, style: any }, { source: string }>{
    constructor(props: any) {
        super(props);
        // console.log(props);

    }


    render() {
        return (
            <View style={styles.tinyDiv}>
                <Image
                    style={{ width: 'inherit', height: 'inherit' }}
                    source={{ uri: this.props.source }}
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