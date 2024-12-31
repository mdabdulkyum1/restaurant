import PropTypes from 'prop-types'

function SectionTitle({title, subTitle}) {
  return (
    <div className="flex justify-center">
        <div className="text-center">
           <h3 className='pb-2 text-[#D99904]'>---{subTitle}---</h3>
           <h1 className='text-2xl uppercase border-y-4 py-3 '>{title}</h1>            
      </div>
    </div>
  )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default SectionTitle
