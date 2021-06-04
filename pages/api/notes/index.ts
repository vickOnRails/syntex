import { getSession } from "next-auth/client";

//   This is Where I would go ahead to use the mongodb data
export const notes = [
  {
    url: "https://victorofoegbu.com/",
    title: "Hi there, welcome to my internet garden 🌵",
    articleId: "60afb4567e9a2d064854b94c",
    notes: [
      {
        _id: "60afb4567e9a2d064854b94c",
        title: "Hi there, welcome to my internet garden 🌵",
        url: "https://victorofoegbu.com/",
        quote:
          "Everyone knows how to pass props to react components, but your case is different. You don't really know the component you'll pass as a child/children and you want them to inherit the parent's props. A good use case might be a <Protected/> component. You'll want every child of the component to have access to an isAuthenticated prop. You've even tried something like this...",
        comments: "Something I need to talk about",
        createdAt: "2021-05-27T15:01:42.737Z",
        updatedAt: "2021-05-27T15:01:42.737Z",
        __v: 0,
      },
    ],
  },
  {
    url: "https://victorofoegbu.com/notes/pass-props-to-react-children-faq",
    title: "How To Pass Props to {react.children} - React FAQ",
    articleId: "60afb4747e9a2d064854b94d",
    notes: [
      {
        _id: "60afb4747e9a2d064854b94d",
        title: "How To Pass Props to {react.children} - React FAQ",
        url: "https://victorofoegbu.com/notes/pass-props-to-react-children-faq",
        quote:
          "There's a couple of reasons why, but the most important is that react.children isn't a function and can't be called with arguments (It's possible, but it's just safe to think of it as not).",
        comments: "Some other note I can cover over",
        createdAt: "2021-05-27T15:02:12.288Z",
        updatedAt: "2021-05-27T15:02:12.288Z",
        __v: 0,
      },
      {
        _id: "60afb4887e9a2d064854b94e",
        title: "How To Pass Props to {react.children} - React FAQ",
        url: "https://victorofoegbu.com/notes/pass-props-to-react-children-faq",
        quote:
          "You'll also want to wrap it in a map function so it handles the case of multiple React components. See the documentation for more about React.Children",
        comments: "Okay",
        createdAt: "2021-05-27T15:02:32.168Z",
        updatedAt: "2021-05-27T15:02:32.168Z",
        __v: 0,
      },
      {
        _id: "60afb49e7e9a2d064854b94f",
        title: "How To Pass Props to {react.children} - React FAQ",
        url: "https://victorofoegbu.com/notes/pass-props-to-react-children-faq",
        quote:
          "I'm trying to keep this article short, so I'll breeze over concepts and assume you have experience with the context API. If not, you might want to learn about it and why you need it first.",
        comments: "Mike Tysen???",
        createdAt: "2021-05-27T15:02:54.094Z",
        updatedAt: "2021-05-27T15:02:54.094Z",
        __v: 0,
      },
      {
        _id: "60afb4b37e9a2d064854b950",
        title: "How To Pass Props to {react.children} - React FAQ",
        url: "https://victorofoegbu.com/notes/pass-props-to-react-children-faq",
        quote:
          "Details of music theory will only become relevant when the person starts wanting to compose their own songs.",
        comments: "Another Note",
        createdAt: "2021-05-27T15:03:15.613Z",
        updatedAt: "2021-05-27T15:03:15.613Z",
        __v: 0,
      },
    ],
  },
  {
    url: "https://victorofoegbu.com/notes/how-necessary-are-the-programming-fundamentals",
    title: "Learning Notes - How necessary are the programming fundamentals?",
    articleId: "60afb4cf7e9a2d064854b951",
    notes: [
      {
        _id: "60afb4cf7e9a2d064854b951",
        title:
          "Learning Notes - How necessary are the programming fundamentals?",
        url: "https://victorofoegbu.com/notes/how-necessary-are-the-programming-fundamentals",
        quote:
          "Details of music theory will only become relevant when the person starts wanting to compose their own songs.",
        comments: "Okay Okay",
        createdAt: "2021-05-27T15:03:43.751Z",
        updatedAt: "2021-05-27T15:03:43.751Z",
        __v: 0,
      },
      {
        _id: "60afb4dd7e9a2d064854b952",
        title:
          "Learning Notes - How necessary are the programming fundamentals?",
        url: "https://victorofoegbu.com/notes/how-necessary-are-the-programming-fundamentals",
        quote:
          'These are exactly the benefits that learning CS Fundamentals provide you in everyday programming. Even though you\'re not "composing your own algorithms", your knowledge of how computer science works provides a serious boost to your programming ability in general. The difference between music and programming is what exactly is "boosted": While a musician that knows the theory will be better at designing and understanding music, a programmer who knows the theory will be better at designing and understanding systems. A person who doesn\'t know programming theory is perfectly capable of creating a good product from the user point of view, but it\'s likely that they will be severely hindered from a system design point of view.',
        comments: "Something Light",
        createdAt: "2021-05-27T15:03:57.659Z",
        updatedAt: "2021-05-27T15:03:57.659Z",
        __v: 0,
      },
      {
        _id: "60afb4f37e9a2d064854b953",
        title:
          "Learning Notes - How necessary are the programming fundamentals?",
        url: "https://victorofoegbu.com/notes/how-necessary-are-the-programming-fundamentals",
        quote:
          "It's important to understand however what it's meant by system design in this case; We are not talking about concepts like clean code and SOLID, but how correct your code is from a design, performance, and resource management point of view. Note that correctly doesn't mean \"this code must use this ultra-fast obscure algorithm a Russian man published in 1970, otherwise it's wrong\", it simply means that the code you're writing makes sense from an engineering standpoint. I'm gonna say it again: Stop thinking that the fundamentals are only about coding obscure algorithms!",
        comments: "Okay Okay Okay",
        createdAt: "2021-05-27T15:04:19.791Z",
        updatedAt: "2021-05-27T15:04:19.791Z",
        __v: 0,
      },
    ],
  },
];

export default (req: any, res: any) => {
  const session = getSession({ req });

  if (!session) {
    return res.json({
      content: "You are signed In",
    });
  }

  return res.json({
    notes,
  });
};
