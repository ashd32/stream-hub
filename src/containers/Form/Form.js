import React, { Component } from 'react';
import classes from './Form.module.scss'
import Field from '../../components/Field/Field'
import { isLinkValid, getServiceType } from '../../utility/regex-test'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../../global/transitions.scss'

class Form extends Component {
    state = {
        allValid: false,
        fields: [
            { id: 0, value: '', service: null, valid: false },
            { id: 1, value: '', service: null, valid: false },
        ]
    }

    componentDidMount() {
        this.props.onResetStore()
    }

    handleChangeField = (e, id) => {
        const newFieldsState = [...this.state.fields]
        const index = newFieldsState.findIndex(field => field.id === id)
        newFieldsState[index].value = e.target.value;
        newFieldsState[index].valid = isLinkValid(e.target.value);
        newFieldsState[index].service = getServiceType(e.target.value);
        this.setState({
            fields: newFieldsState
        })
        this.checkIfAllValid(newFieldsState)
    }

    checkIfAllValid = (fields) => {
        let allValid = true
        for (let key of fields) {
            if (key.valid) {
                continue
            } else {
                allValid = false
            }
        }
        this.setState({ allValid })
    }

    handleFields = (method) => {
        const newFields = [...this.state.fields]
        if (newFields.length < 4 && method === "add") {
            newFields.push({ id: newFields.length, value: '', service: null, valid: false })
            this.setState({
                fields: newFields,
            })
            this.checkIfAllValid(newFields)
        }
        else if (newFields.length > 2 && method === "sub") {
            const newFields = [...this.state.fields]
            newFields.pop()
            this.setState({
                fields: newFields,
            })
            this.checkIfAllValid(newFields)
        }

    }

    handleWatchButton = () => {
        this.props.onSetSources(this.state.fields)
        this.props.history.replace('/choose-layout')
    }

    render() {
        const fields = this.state.fields.map(field => (
            <CSSTransition key={field.id} timeout={500} classNames="move">
                <Field
                    key={field.id}
                    id={field.id}
                    value={field.value}
                    service={field.service}
                    valid={field.valid}
                    change={this.handleChangeField}
                />
            </CSSTransition>
        ))

        return (
            <div className={classes.Form}>
                <h1>StreamHUB</h1>
                <TransitionGroup className="List">
                    {fields}
                </TransitionGroup>

                <div className={classes.Buttons}>
                    <button disabled={this.state.fields.length === 4} onClick={() => this.handleFields("add")}>+</button>
                    <button disabled={this.state.fields.length === 2} onClick={() => this.handleFields("sub")}>-</button>
                </div>
                <button disabled={!this.state.allValid} onClick={this.handleWatchButton}>Watch!</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetSources: (sources) => dispatch({ type: "SET_SOURCES", sources }),
        onResetStore: () => dispatch({ type: "RESET_STORE" })
    }
}

export default connect(null, mapDispatchToProps)(Form);