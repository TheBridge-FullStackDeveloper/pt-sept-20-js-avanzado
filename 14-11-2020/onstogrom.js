const ogUser = {
  profile: {},
  friends: [],
  posts: [],
  setProfile: function (profileData) {
    this.profile = profileData;
  },
  setFriends: function (friendsData) {
    this.friends = friendsData;
  },
  setPosts: function (postsData) {
    this.posts = postsData;
  },
};

const fakePromise = (timeout, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};

// fetch('https://onstogrom.es/profile')
const getProfile = () => {
  return fakePromise(300, {
    id: 1,
    name: 'Alex',
    surname: 'González',
    height: 182,
    birthdate: '08/13/1980',
    picture: 'https://www.pronto.es/uploads/s1/83/02/68/alex-gonzalez.jpeg',
  });
};

// fetch('https://onstogrom.es/friends')
const getFriends = () => {
  return fakePromise(500, [
    {
      id: 2,
      name: 'Jason Momoa',
    },
    {
      id: 3,
      name: 'Henry Cavill',
    },
  ]);
};

// fetch('https://onstogrom.es/posts')
const getPosts = () => {
  return fakePromise(800, [
    {
      id: 10,
      title: 'Mi viaje a Ibiza',
      picture:
        'https://phantom-elmundo.unidadeditorial.es/c9c2146331a7d5e186927eb9a6e800cf/resize/746/f/jpg/assets/multimedia/imagenes/2020/07/24/15955902551192.jpg',
    },
    {
      id: 14,
      title: 'Comiendo una hamburguesa',
      picture:
        'https://www.lanacion.com.py/resizer/sZFxgF_vcPbPKwrBe4cp5_lMzdg=/1016x0/smart/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-lanacionpy.s3.amazonaws.com/public/PBR6V52GWNE6FHYAHDM4OXDF7I.jpeg',
    },
  ]);
};

const login = () => {
  /* getProfile().then((profileData) => {
    ogUser.setProfile(profileData);

    getFriends().then((friendsData) => {
      ogUser.setFriends(friendsData);

      getPosts().then((postsData) => {
        ogUser.setPosts(postsData);

        // Termino de ejecutar todas las promesas
        console.log(ogUser)
      });
    });
  }); */

  Promise.all([getProfile(), getFriends(), getPosts()]).then((data) => {
    ogUser.setProfile(data[0]);
    ogUser.setFriends(data[1]);
    ogUser.setPosts(data[2]);

    console.log(data);
  });
};

login();
