import PropTypes from 'prop-types'
import { TiZoom } from "react-icons/ti";
import { InputFilter, LabelFilter } from './Filter.styled'

export default function Filter({value, onChange}) {
    return (
        <LabelFilter>
            <TiZoom></TiZoom>
            Find contacts by name
            <InputFilter
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Rosie Simpson"
            />
           
            
        </LabelFilter>
    )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};