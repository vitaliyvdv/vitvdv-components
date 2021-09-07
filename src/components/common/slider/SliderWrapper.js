const SliderWrapper = ({ children, ...rest }) => {
  return (
    <div className='swiper-wrapper' {...rest}>
      {children}
    </div>
  )
}

export default SliderWrapper
