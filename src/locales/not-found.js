const suffix = (text) => {
  return `${text} not found`
}

export default {
  user: suffix('User'),
  faq: suffix('Faq'),
  faqCategory: suffix('Faq Category'),
  news: suffix('News')
}
