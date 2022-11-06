import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import MainContentCard from '../../components/contentCard/MainContentCard';
import {Header} from '../../components/Header';
import {getUsers} from '../../service/api';
import {Feed} from '../../utils/types';

export const HomeScreen: React.FC = () => {
  const [data, setData] = useState<Feed[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getUsers(currentPage).then(res => {
      setData(res);
    });
  }, []);
  const renderItem = ({item}) => <MainContentCard feedData={item} />;
  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const loadMoreItem = () => {
    setCurrentPage(prev => prev + 1);
  };
  useEffect(() => {
    setIsLoading(true);
    getUsers(currentPage).then(res => {
      setData(res);
      setIsLoading(false);
    });
  }, [currentPage]);

  return (
    <SafeAreaView>
      {/* Shared Header */}
      <Header
        title="Individual View"
        rightIcon="sound-mix"
        leftIcon="chevron-left"
        leftIconPressed={() => {}}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReached={loadMoreItem}
        ListFooterComponent={renderLoader}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userCardList: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
