
mock = {};

mock.users = {
  user1: {
    id: 'user1',
    name: 'bob',
    student: true,
    teacher: false,
    cards: {
      0: {
        id: 0,
        title: 'dog',
        imageUrl: 'http://animalia-life.com/data_images/dog/dog4.jpg',
        phrases: 'You can\'t teach an old dog new tricks'
      },
      1: {
        id: 1,
        title: 'cat',
        imageUrl: 'http://animalia-life.com/data_images/dog/dog4.jpg',
        phrases: 'You can\'t teach an old dog new tricks'
      }
    }
  },
  user2: {
    id: 'user2',
    name: 'dave',
    student: false,
    teacher: true,
    cards: {
      0: {
        id: 0,
        title: 'llama',
        imageUrl: 'http://animalia-life.com/data_images/dog/dog4.jpg',
        phrases: 'You can\'t teach an old dog new tricks'
      },
      1: {
        id: 1,
        title: 'zebra',
        imageUrl: 'http://animalia-life.com/data_images/dog/dog4.jpg',
        phrases: 'You can\'t teach an old dog new tricks'
      }
    }
  }
}

module.exports = mock;
