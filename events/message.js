const matcher = require('../matcher')
const axios = require('axios')

const URL = 'http://reco-flask-api:5000/api/'

// API Requests =======================================================

const getJoke = message => {
  axios.get(URL + 'get', {params: {user_id: message.author.id}}).then(response => {
    message.channel.send(response.data.joke)
    message.channel.send('Please rate this joke from -10 to 10')
  }).catch(error => {
    console.log('error')
  })
}

const postRate = (message, rating) => {
  console.log(rating)
  axios.post(URL + 'rate', {rate: rating, user_id: message.author.id}).then(response => {
    console.log(response.data)
    message.channel.send('Thanks! Your rating is now taken in account for the next jokes')
  }).catch(error => {
    console.log('Error')
    message.channel.send('Oh no! An error occured during the rating, please try again')
  })
}

const getJokes = (message, number, quality) => {
  axios.get(URL + 'get' + quality, {params: {number: number}}).then(response => {
    for (const joke of response.data.jokes) {
      message.channel.send(joke)
    }
  })
}

// Messages handling ==================================================

module.exports = (client, message) => {
  // Ignorer les messages du bot
  if (message.author.bot) return;
  matcher(message.content, cb => {
    switch (cb.intent) {
    case 'Hello':
      message.channel.send('Hello! I\'m your favourite joke bot! :smile:')
      break
    case 'Joke':
      getJoke(message)
      break
    case 'Rating':
      const rating = Number(cb.entities.groups.rating)
      if (rating < -10 || rating > 10) {
        message.channel.send('Please rate only between -10 and 10.')
        break
      }
      postRate(message, rating)
      break
    case 'N jokes':
      const number = Number(cb.entities.groups.number)
      const quality = cb.entities.groups.quality
      getJokes(message, number, quality)
      break
    case 'React':
      if (cb.entities.groups.negate === 'not') {
        message.channel.send('I\'m sorry to disappoint you :cry:')
      } else {
        message.channel.send('Glad to hear that! :smiling_face_with_3_hearts:')
      }
      break
    case 'Bye':
      message.channel.send('Bye! Have a good day!')
      break
    default:
      message.channel.send('Not supported :/')
      break
    }
  })
};
