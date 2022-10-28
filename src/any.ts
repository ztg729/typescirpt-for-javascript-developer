import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Articles {
    id: number;
    title: string;
    description: string;
  }
  let data: Articles[];
  data = [
    {
      id: 1,
      title: 'title',
      description: 'description',
    },
  ];
  console.log(data);
});
