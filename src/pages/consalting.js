import React from 'react'
import PropTypes from 'prop-types'

import ConsaltingServices from "../components/ConsultingServices/ConsultingServices"
import Layout from '../components/Layout/Layout'

const consalting = props => {
    return (
        <Layout>
            <ConsaltingServices />
        </Layout>
    )
}

consalting.propTypes = {

}

export default consalting
