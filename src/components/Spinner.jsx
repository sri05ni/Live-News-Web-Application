import React, { Component } from 'react'

export default class spinner extends Component {
  render() {
    return (
      <div class="d-flex justify-content-center">
  <div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>  )
    
  }
}
