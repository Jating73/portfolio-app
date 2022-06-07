import React from 'react'

function Programming({programming_details}) {
  return (
    <div className='programming-section my-4'>
        <div className='row'>
            {programming_details.map(programming_detail => {
                return (
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-4' key={programming_detail.id}>
                        <span className='language'>{programming_detail.language}</span>
                        <div className='progress-bar'>
                            <div className='progress-made' style={{width:`${programming_detail.percentage}%`}}></div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Programming
