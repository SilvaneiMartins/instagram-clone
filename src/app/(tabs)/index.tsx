import React from "react";
import { FlatList, View } from "react-native";

import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/PostListItem";

const HomeScreen = () => {
    return (
        <View className="bg-white">
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostListItem post={item} />}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 10,
                }}
            />
        </View>
    );
};

export default HomeScreen;
