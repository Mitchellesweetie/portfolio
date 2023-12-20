import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function RootBoundary (){
    const error=useRouteError()
    if(isRouteErrorResponse(error))
    if(error.status===400){
        return<div>This page does not exist</div>
    }
  return (
    <div>{error}</div>
  )
}

export default RootBoundary;