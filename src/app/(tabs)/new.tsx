import { Stack } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";

const NewScreen = () => {
    const [caption, setCaption] = useState<string>("");

    return (
        <View className="bg-white flex-1 items-center">
            <Stack.Screen
                options={{
                    title: "Nova Postagem",
                    headerLargeTitle: true,
                    headerShadowVisible: false,
                    headerBlurEffect: "prominent",
                }}
            />
            <Image
                source={{
                    uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
                }}
                className="w-64 aspect-[3/4] rounded-md bg-slate-300"
            />

            <Pressable
                onPress={() => {}}
                className="border border-blue-500 rounded-full w-[120px] mr-1 mt-3 p-1.5 items-center justify-center"
            >
                <Text className="text-blue-500 font-semibold text-xl">
                    Atualizar
                </Text>
            </Pressable>

            <View className="h-0.5 w-full bg-gray-300 mt-10" />

            <View className="w-full p-5 flex-1">
                <TextInput
                    multiline
                    value={caption}
                    onChangeText={setCaption}
                    style={{ lineHeight: 25 }}
                    placeholder="No que você está pensando?"
                    className="w-full p-5 mt-2 rounded-full text-xl line-clamp-3"
                />

                <Pressable
                    onPress={() => {}}
                    className="bg-blue-500 rounded-full w-full mt-auto p-4 items-center justify-center"
                >
                    <Text className="text-white font-semibold text-xl">
                        Criar Postagem
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default NewScreen;
