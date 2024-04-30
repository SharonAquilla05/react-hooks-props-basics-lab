import React from 'react'

function Links({Links}) {
    const {github,linkedin}=Links
    console.log(Links)
  return (
    <div>
        <h3>Links</h3>
        <a href='github'>{github}</a>
        <a href='linkedin'>{linkedin}</a>

        </div>
  )
}

export default Links