/**
 * Created by mohamed on 4/21/19.
 */
export default {
  register(detail) {
    return new Promise((resolve, reject) => {
      detail.emailAddress === 'sunny@local'
        ? resolve({result: 'success'})
        : reject(new Error('User already exist'))
    })
  }
}
