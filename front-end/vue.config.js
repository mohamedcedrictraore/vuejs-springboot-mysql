/**
 * Created by mohamed on 4/20/19.
 */
module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080'
      }
    }
  }
}
