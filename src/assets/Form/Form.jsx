import styled from "styled-components";
import { useTelegram } from "../hooks/useTelegram";
import { useEffect, useCallback, useState } from "react";

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
const InputElement = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 15px;
`;
const SelectElement = styled.select`
  padding: 10px;
  margin-top: 15px;
`;

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  return (
    <FormElement>
      <h3>Введите ваши данные</h3>
      <InputElement
        type="text"
        placeholder={"Страна"}
        value={country}
        onChange={onChangeCountry}
      />
      <InputElement
        type="text"
        placeholder={"Улица"}
        value={street}
        onChange={onChangeStreet}
      />
      <SelectElement
        value={subject}
        onChange={onChangeSubject}
        className={"select"}
      >
        <option value={"physical"}>Физ. лицо</option>
        <option value={"legal"}>Юр. лицо</option>
      </SelectElement>
    </FormElement>
  );
};

export default Form;
