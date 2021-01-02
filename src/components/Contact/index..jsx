import React from "react";
import { Container, HeadingDesc, Heading } from "../../assets/Styles/MainStyle";
import { SectionTitle } from "../AboutAcademy/style";
import {
  ContactForm,
  ContactSection,
  Form,
  FormField,
  FormFieldInput,
  FormSelect,
  FormSelectOption,
  FormActions,
} from "./style";
import { MainButton } from "../../styles/MainStyle";

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <SectionTitle>
          <Heading>Свяжитесь с нами</Heading>
          <HeadingDesc>
            Получите абсолютно бесплатную консультацию по любым вопросам,
            связанным с Академией
          </HeadingDesc>
        </SectionTitle>
        <ContactForm>
          <Form>
            <FormField>
              <FormFieldInput placeholder="Ваше полное имя" />
            </FormField>
          </Form>
          <Form>
            <FormField>
              <FormFieldInput placeholder="Телефон" />
            </FormField>
          </Form>
          <Form>
            <FormField>
              <FormSelect placeholder="Курс не выбран">
                <FormSelectOption></FormSelectOption>
                <FormSelectOption>Программирование</FormSelectOption>
                <FormSelectOption>Дизайн</FormSelectOption>
                <FormSelectOption>HR-менеджмент</FormSelectOption>
                <FormSelectOption>Digital Marketing</FormSelectOption>
                <FormSelectOption>Project management</FormSelectOption>
              </FormSelect>
              <FormActions>
                <MainButton style={{ width: "100%" }}>Отпраить</MainButton>
              </FormActions>
            </FormField>
          </Form>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;
