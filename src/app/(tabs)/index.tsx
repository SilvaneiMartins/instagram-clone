import React from "react";
import { FlatList, View } from "react-native";

import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/PostListItem";

const HomeScreen = () => {
    return (
        <View className="bg-white">
            <FlatList
                data={posts}
                className="items-center bg-slate-400"
                renderItem={({ item }) => <PostListItem post={item} />}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 10,
                    maxWidth: 512,
                    width: "100%",
                }}
            />
        </View>
    );
};

export default HomeScreen;
