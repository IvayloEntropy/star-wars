import React, { Component } from 'react'
import { PageButtonGroup, PageButton } from './Styles'


class CharacterPagination extends Component {

  render () {
    const { onPageChange, pagination } = this.props
    return (
      <PageButtonGroup>
        <PageButton disabled={!pagination.prev} onClick={() => onPageChange(pagination.prev)}>Prev</PageButton>
        <PageButton disabled={!pagination.next} onClick={() => onPageChange(pagination.next)}>Next</PageButton>
      </PageButtonGroup>
    )
  }

}

export default CharacterPagination