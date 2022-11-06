export interface Feed {
  content: Content;
  id: number;
  mainText: string;
  meta: Meta;
  tags: string[];
  user: User;
}

export interface Content {
  image: string;
  subtitle: string;
  title: string;
  via?: 'spotify' | 'youtube' | 'aeon.co';
  fileType?: 'video' | 'podcast' | 'article';
}

export interface Meta {
  createdTime: string;
}

export interface User {
  avatar: string;
  desc: string;
  name: string;
}
export let Feeds: Feed[] = [
  {
    id: 1,
    user: {
      avatar:
        'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
      name: 'Ekin İçbudak',
      desc: 'UX Designer',
    },
    meta: {
      createdTime: '43mn',
    },
    mainText:
      'Lorem ipsum dolor sit amet 🤔, consectetur adipiscing elit, sed do @nilsuderici',
    content: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqlwhIxyJhsbqySmM4lF4tcfPZnpQoKWOyw&usqp=CAU',
      subtitle: 'This podcast is shared via spotify',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d...',
      via: 'spotify',
      fileType: 'podcast',
    },
    tags: ['Arts & Culture', 'Design'],
  },
  {
    id: 2,
    user: {
      avatar:
        'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
      name: 'Ekin İçbudak',
      desc: 'UX Designer',
    },
    meta: {
      createdTime: '',
    },
    mainText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
    content: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqlwhIxyJhsbqySmM4lF4tcfPZnpQoKWOyw&usqp=CAU',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
      via: 'aeon.co',
      fileType: 'article',
    },
    tags: ['Arts & Culture', 'Design'],
  },
  {
    id: 3,
    user: {
      avatar:
        'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
      name: 'Ekin İçbudak',
      desc: 'UX Designer',
    },
    meta: {
      createdTime: '',
    },
    mainText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
    content: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqlwhIxyJhsbqySmM4lF4tcfPZnpQoKWOyw&usqp=CAU',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
      via: 'youtube',
      fileType: 'video',
    },
    tags: ['Arts & Culture', 'Design'],
  },
  {
    id: 4,
    user: {
      avatar:
        'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
      name: 'Ekin İçbudak',
      desc: 'UX Designer',
    },
    meta: {
      createdTime: '',
    },
    mainText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
    content: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqlwhIxyJhsbqySmM4lF4tcfPZnpQoKWOyw&usqp=CAU',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    },
    tags: ['Arts & Culture', 'Design'],
  },
  {
    id: 5,
    user: {
      avatar:
        'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
      name: 'Ekin İçbudak',
      desc: 'UX Designer',
    },
    meta: {
      createdTime: '',
    },
    mainText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
    content: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqlwhIxyJhsbqySmM4lF4tcfPZnpQoKWOyw&usqp=CAU',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    },
    tags: ['Arts & Culture', 'Design'],
  },
  {
    id: 6,
    user: {
      avatar:
        'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
      name: 'Ekin İçbudak',
      desc: 'UX Designer',
    },
    meta: {
      createdTime: '',
    },
    mainText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
    content: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqlwhIxyJhsbqySmM4lF4tcfPZnpQoKWOyw&usqp=CAU',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    },
    tags: ['Arts & Culture', 'Design'],
  },
];
