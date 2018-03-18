export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center'
    },
    {
      name: 'name',
      title: '标题',
      sortField: 'salary'
    },
    {
      name: 'salary',
      title: '热度'
    }
  ],
  sortFunctions: {
    'salary': function (item1, item2) {
      return item1 > item2 ? 1 : -1
    }
  }
}
