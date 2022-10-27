// * You need to trim the first post title for the first user of the current store

const {
  view,
  over,
  set,
  lensProp,
  trim,
  lensIndex,
  compose,
} = require('ramda');

/**
 *
 *
 * compose(f, g)(x) => f(g(x))
 * pipe(f, g)(x) => g(f(x))
 *
 * compose === pipe for Lenses
 *
 *
 */


// n -> 1
// n -> n

const pprint = (data) => JSON.stringify(data, null, 2);

const store = {
  users: [
    {
      name: 'Jack Sparrow',
      posts: [
        {
          title:
            '   Why is the rum always gone? An analysis of Carribean trade surplus     ',
        },
      ],
    },
    {
      name: 'John Doe',
      posts: [
        {
          title: 'lorem ipsum',
        },
      ],
    },
  ],
  name: {
    first: 'Mohamed',
    last: 'Elshorbagy',
  },
};

// const newStore = {
//   ...store,
//   users: store.users.map((user, index) =>
//     index === 0
//       ? {
//           ...user,
//           posts: user.posts.map((post, postIndex) =>
//             postIndex === 0
//               ? { ...post, title: post.title.trim() }
//               : { ...post }
//           ),
//         }
//       : { ...user }
//   ),
// };

const store_ = {
  title: 'name',
};

const usersLens = lensProp('users');
const firstIndex = lensIndex(0);
const postsLens = lensProp('posts');
const titleLens = lensProp('title');

/// 'users.0.posts.0.title'
const titleTrimLens = compose(
  usersLens,
  firstIndex,
  postsLens,
  firstIndex,
  titleLens
);

// console.log(pprint(store));
// console.log(view(titleLens, store_));
// console.log(pprint(over(titleTrimLens, trim, store)));
