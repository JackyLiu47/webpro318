export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center'
    },
    {
      name: 'name',
      sortField: 'name'
    },
    {
      name: 'email',
      sortField: 'email'
    },
    {
      name: 'city',
      title: '发布日期'
    },
    {
      name: 'score',
      title: 'score'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'email': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
