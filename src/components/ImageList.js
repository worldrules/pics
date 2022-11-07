import React from 'react'

export const ImageList = (props) => {
  // console.log(this.props)
  const images = props.images.map((image)=>{
    return <img src={image.urls.regular}/>
  })

  return (
    <div>{images}</div>
  )
}
