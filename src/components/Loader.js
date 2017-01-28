import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const Load = ({loading}) => (
  <div>
      <Dimmer active={loading}>
        <Loader>Loading</Loader>
      </Dimmer>
  </div>
)

export default Load
