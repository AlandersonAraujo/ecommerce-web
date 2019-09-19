import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdShoppingCart,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
              alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis Nike Revolution</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline
                    size={20}
                    color="rgba(40, 113, 148, 233)"
                  />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline
                    size={20}
                    color="rgba(40, 113, 148, 233)"
                  />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="rgba(40, 113, 148, 233)" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" />

            <span>Finalizar pedido</span>
          </div>
        </button>
        <Total>
          <span>Total</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
