import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

const PostListItem = (props: any) => {
    const { post } = props;

    return (
        <View className="bg-white">
            <View className="p-2 flex-row items-center gap-2">
                <Image
                    source={{ uri: post.user.image_url }}
                    className="w-12 aspect-square rounded-full"
                />
                <View>
                    <Text className="font-bold">{post.user.username}</Text>
                    <Text className="text-gray-400 text-sm" numberOfLines={1}>
                        Viva como se fosse ultimo dia de sua vida.
                    </Text>
                </View>
            </View>
            <Image
                source={{ uri: post.image_url }}
                className="w-full aspect-[4/3]"
            />

            <View className="p-3 gap-3 flex-row">
                <AntDesign name="hearto" size={20} color="black" />
                <Ionicons name="chatbubble-outline" size={20} color="black" />
                <Feather name="send" size={20} color="black" />

                <Feather
                    size={20}
                    color="black"
                    name="bookmark"
                    className="ml-auto"
                />
            </View>
        </View>
    );
};

export default PostListItem;
