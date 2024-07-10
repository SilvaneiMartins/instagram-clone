import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, Pressable, TextInput } from "react-native";

const NewScreen = () => {
    const [image, setImage] = useState<string | null>(null);
    const [caption, setCaption] = useState<string>("");

    useEffect(() => {
        if (!image) {
            pickImage();
        }
    }, [image]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <>
            <Stack.Screen
                options={{
                    title: "Nova Postagem",
                    headerLargeTitle: true,
                    headerShadowVisible: false,
                    headerBlurEffect: "prominent",
                }}
            />
            <View className="bg-white flex-1 items-center">
                {image ? (
                    <Image
                        source={{
                            uri: image,
                        }}
                        className="w-80 aspect-[3/4] rounded-md bg-gray-300 shadow-lg"
                    />
                ) : (
                    <View className="w-80 aspect-[3/4] rounded-md bg-gray-300 shadow-lg" />
                )}

                <Pressable
                    onPress={pickImage}
                    className="border border-blue-500 rounded-full w-[120px] mr-1 mt-3 p-1.5 items-center justify-center"
                >
                    <Text className="text-blue-500 font-semibold text-xl">
                        Atualizar
                    </Text>
                </Pressable>

                <View className="w-full p-5 flex-1">
                    <TextInput
                        multiline
                        value={caption}
                        onChangeText={setCaption}
                        style={{ lineHeight: 25 }}
                        placeholder="No que você está pensando?"
                        className="w-full p-5 mt-2 rounded-full text-2xl line-clamp-3"
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
        </>
    );
};

export default NewScreen;
