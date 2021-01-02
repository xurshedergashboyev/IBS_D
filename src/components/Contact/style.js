import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 50px 0; ;
`;

export const ContactForm = styled.div`
  border-color: #dbdbdb;
`;

export const Form = styled.form`
  position: relative;
  max-width: 536px;
  margin: 0 auto;
`;

export const FormField = styled.div`
  margin: 0 0 20px;
  position: relative;
`;

export const FormFieldInput = styled.input`
  width: 100%;
  height: 62px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #000;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ecdccb;
  padding: 14px 35px 10px;
  transition: padding 0.3s;
`;

export const FormSelect = styled.select`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px;
  //overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export const FormSelectOption = styled.option`
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2rem;
  padding: 0 2px 1px;
`;

export const FormSelectSpan = styled.span`
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
`;

export const FormSelection = styled.span`
  // empty
`;

export const FormSelectContainer = styled.span`
  border: 1px solid #ecdccb;
  border-radius: 4px;
  height: 62px;
  outline: none;
`;

export const FormSelectRendered = styled.span`
  line-height: 62px;
  padding: 0 52px 0 35px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

export const FormSelectIcon = styled.span`
  top: 18px;
  right: 20px;
  height: 26px;
  position: absolute;
  width: 20px;
`;

export const FormFieldArea = styled.div`
  margin: 0 0 20px;
  position: relative;
`;

export const FormFieldTextArea = styled.textarea`
  width: 100%;
  label {
    font-size: 16px;
  }
`;

export const FormActions = styled.div`
  margin: 22px 0 0;
  button {
    width: 100%;
  }
`;
