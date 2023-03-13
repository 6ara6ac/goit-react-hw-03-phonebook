import React from "react";
import { Formik, Form, Field } from "formik"
import { Button, Label } from "./ContactForm.styled";
import PropTypes from 'prop-types';
// import *as yup from 'yup';

        
// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().required()
// });

export class ContactForm extends React.Component {
    
    state = {
    contacts:this.props,
    name: '',
    number: '',
    }
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
          [name]: value,
        });
      } 

      


      submitForm = () => {
        const { onSubmit } = this.props;
        
        if (onSubmit(this.state) === null){
          return;
        }
        else {
          this.reset();
        }
      };

    
      reset = () => {
        this.setState ({
          name: '',
          number: ''
        })
      }
    

    render () {
        const { name, number} = this.state
        
       return <>
      <Formik initialValues={ this.state } onSubmit={ this.submitForm } >
        <Form>
            <Label htmlFor="name">Name</Label>
          <Field 
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value = {name}
        onChange={this.handleChange}
        />
        <Label htmlFor="number">Number</Label>
        <Field
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value = {number}
        onChange={this.handleChange}
      />
            <Button type="submit">Add contact</Button>
        </Form>
    </Formik>
   
    </>
       
      }

      
}

ContactForm.propTypes= {
  onSubmit: PropTypes.func.isRequired
}