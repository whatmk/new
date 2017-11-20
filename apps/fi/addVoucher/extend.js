import {GridDecorator} from 'mk-component'

function getGridOption() {
    return {
        'details': {
            path: 'data.form.details',
            selectFieldName: 'selected',
            cellClassName: 'edfx-app-proof-of-charge-cell',
            emptyRow: {},
            getColNames: (gf) => {
                return [
                    'abstract',
                    'captionOfAccount',
                    'debit',
                    'credit',
                ]
            },
            cellIsReadonly: (cellPosition, path, gf) => {
                return false
            }
        },
    }
}

function actionCreator(option) {
    return {
        gridAction: new GridDecorator.action({ ...option, gridOption: getGridOption() })
    }
}

function reducerCreator(option) {
    return {
        gridReducer: new GridDecorator.reducer({ ...option, gridOption: getGridOption() })
    }
}

export default {
    actionCreator,
    reducerCreator
}