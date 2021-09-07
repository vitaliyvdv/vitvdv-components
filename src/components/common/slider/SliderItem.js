const SliderItem = ({ children, ...rest }) => {
  return (
    <div className='swiper-slide' {...rest}>
      {children}
    </div>
  )
}

export default SliderItem
