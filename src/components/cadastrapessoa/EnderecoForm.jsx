import React from "react";
import { Form, Input, Row, Col, Select } from "antd";
import Endereco from "./objetos/pessoas/DAOs/ENDERECO/Endereco.mjs";

const { Option } = Select;

function EnderecoForm() {
    const [form] = Form.useForm();
    const handleCepChange = async (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        if (cep.length === 8) {
            try {
                const enderecoService = new Endereco();
                await enderecoService.setCep(cep);
                form.setFieldsValue({
                endereco: {
                  logradouro: enderecoService.getLogradouro(),
                  bairro: enderecoService.getBairro(),
                  cidade: enderecoService.getCidade(),
                  uf: enderecoService.getUf(),                      regiao: enderecoService.getRegiao(),
            },
        });
        } catch (error) {
            message.error(error.message);
        }
    }
    };
  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="CEP"
        name={["endereco", "cep"]}
        rules={[{ required: true, message: "Informe o CEP!" }]}
      >
        <Input
        placeholder="00000000" 
        maxLength={8} 
        onChange={handleCepChange}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        />
      </Form.Item>

      <Form.Item
        label="Logradouro"
        name={["endereco", "logradouro"]}
        rules={[{ required: true, message: "Informe o logradouro!" }]}
      >
        <Input placeholder="Rua / Avenida" />
      </Form.Item>

      <Form.Item
        label="Bairro"
        name={["endereco", "bairro"]}
        rules={[{ required: true, message: "Informe o bairro!" }]}
      >
        <Input placeholder="Bairro" />
      </Form.Item>

      <Row gutter={8}>
        <Col span={13}>
          <Form.Item
            label="Cidade"
            name={["endereco", "cidade"]}
            rules={[{ required: true, message: "Informe a cidade!" }]}
          >
            <Input placeholder="Cidade" />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item
            label="UF"
            name={["endereco", "uf"]}
            rules={[{ required: true, message: "Informe a UF!" }]}
          >
            <Input placeholder="UF" maxLength={2} />
          </Form.Item>
        </Col>
        <Col span={8}>
         <Form.Item
            label="Região"
            name={["endereco", "regiao"]}
            rules={[{ required: true, message: "Selecione a região!" }]}
          >
            <Select placeholder="Selecione">
              <Option value="Norte">Norte</Option>
              <Option value="Nordeste">Nordeste</Option>
              <Option value="Centro-Oeste">Centro-Oeste</Option>
              <Option value="Sudeste">Sudeste</Option>
              <Option value="Sul">Sul</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default EnderecoForm;