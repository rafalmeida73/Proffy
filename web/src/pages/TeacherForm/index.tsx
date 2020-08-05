import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import Input from "../../components/input";

import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  const [scheduleItens, setScheduleItens] = useState([
    { week_day: 0, from: "8:00 AM", to: "4:00 PM" },
  ]);

  function addNewScheduleItem() {
    setScheduleItens([
      ...scheduleItens,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação física", label: "Educação física" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemátia", label: "Matemátia" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Português", label: "Português" },
              { value: "Literatura", label: "Literatura" },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItens.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="subject"
                  label="Matéria"
                  options={[
                    { value: "Artes", label: "Artes" },
                    { value: "Biologia", label: "Biologia" },
                    { value: "Ciências", label: "Ciências" },
                    { value: "Educação física", label: "Educação física" },
                    { value: "Física", label: "Física" },
                    { value: "Química", label: "Química" },
                    { value: "Geografia", label: "Geografia" },
                    { value: "História", label: "História" },
                    { value: "Matemátia", label: "Matemátia" },
                    { value: "Filosofia", label: "Filosofia" },
                    { value: "Português", label: "Português" },
                    { value: "Literatura", label: "Literatura" },
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
