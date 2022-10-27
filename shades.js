❯ npx shades
shades> store
{
  users: [
    { name: 'Jack Sparrow', goldMember: false, posts: [Array] },
    { name: 'Elizabeth Swan', goldMember: true, posts: [Array] },
    { name: 'Bill Turner', goldMember: false, posts: [Array] }
  ]
}
shades> jack
{
  name: 'Jack Sparrow',
  goldMember: false,
  posts: [
    {
      title: 'Why is the rum always gone? An analysis of Carribean trade surplus',
      likes: 5
    },
    { title: 'Sea Turtles - The Tortoise and the Hair', likes: 70 }
  ]
}
shades> get('posts', maxBy('likes'))(jack)
{ title: 'Sea Turtles - The Tortoise and the Hair', likes: 70 }
shades> get('users', findBy(user => user.name.includes('Jack')))(store) // Folds => n -> 1
{
  name: 'Jack Sparrow',
  goldMember: false,
  posts: [
    {
      title: 'Why is the rum always gone? An analysis of Carribean trade surplus',
      likes: 5
    },
    { title: 'Sea Turtles - The Tortoise and the Hair', likes: 70 }
  ]
}
shades> get('users', findBy(user => user.name.includes('Jack')), 'posts', maxBy('likes'))(store) // Traversals => n -> n
{ title: 'Sea Turtles - The Tortoise and the Hair', likes: 70 }
shades> get('users', all, 'posts', maxBy('likes'))(store)
[
  { title: 'Sea Turtles - The Tortoise and the Hair', likes: 70 },
  {
    title: 'Bloody Pirates - My Life Aboard the Black Pearl',
    likes: 10000
  },
  {
    title: 'Bootstraps Bootstraps - UEFI, GRUB and the Linux Kernel',
    likes: 3000
  }
]
