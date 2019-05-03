import React, { Component } from 'react';
import Header from './Header';
import Post from './Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        name: 'Romulo Rocha',
        time: 'há 20 seg',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio`,
        avatar:
          'https://scontent.ffor8-2.fna.fbcdn.net/v/t1.0-9/53349008_2233311490059464_3588111942180405248_n.jpg?_nc_cat=103&_nc_ht=scontent.ffor8-2.fna&oh=9a4e3bb438b006a1d94cafe137d9fc80&oe=5D71EDA4',
      },
      {
        id: 1,
        name: 'Rick',
        time: 'há 1 min',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!`,
        avatar:
          'https://store.playstation.com/store/api/chihiro/00_09_000/container/LB/en/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
      },
      {
        id: 2,
        name: 'Somenone fake',
        time: 'há 6 min',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!`,
        avatar: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
      },
      {
        id: 3,
        name: 'Thalitta Rocha',
        time: 'há 54 min',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum quidem consectetur quo
        quaerat magni quod distinctio, iure deleniti laudantium nobis tempore commodi nesciunt, maxime
        exercitationem qui quae eligendi libero!Lorem ipsum dolor sit amet consectetur!`,
        avatar:
          'https://store.playstation.com/store/api/chihiro/00_09_000/container/LB/en/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="content">
        <Header />
        {posts.map(el => (
          <div key={el.id} className="posts">
            <Post data={el} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
