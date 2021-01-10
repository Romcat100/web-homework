// dummy transactions data
function getStartingTransactions () {
  return [
    {
      amount: '190',
      category: 'Investments',
      date: '01/05/2021',
      description: 'ESG stocks'
    },
    {
      amount: '150',
      category: 'Charity',
      date: '01/02/2021',
      description: 'Donations'
    },
    {
      amount: '125',
      category: 'Bills',
      date: '01/01/2021',
      description: 'Water bill'
    },
    {
      amount: '399',
      category: 'Bills',
      date: '01/01/2021',
      description: 'Mortgage'
    }
  ]
}

export default getStartingTransactions
