import { Map, fromJS, List } from 'immutable'
import { reducer as MetaReducer } from 'mk-meta-engine'
import utils from 'mk-utils'
export default class reducer {
    constructor(option) {
        this.metaReducer = option.metaReducer
    }

    setMultiField = (state, value) => {
        if (value) {
            Object.keys(value).forEach(p => {
                state = this.metaReducer.sf(state, `${p}`, fromJS(value[p]))
            })
        }
        return state

    }
}
