import React from "react";
import korz from "../../../Styles/Korzina.module.scss";
import { sumka } from "../../../Assets/Main";
import {
  selectKorz,
  DeleteKorz,
  SetKorz,
  UpdateKol,
  DeleteKol,
} from "../../../store/korz";
import { useSelector, useDispatch } from "react-redux";

const Korzina = () => {
  const korzes = useSelector(selectKorz);
  const dispatch = useDispatch();
  function deletef(index: number) {
    dispatch(DeleteKorz({ id: index }));
    console.log(korzes);
  }

  return (
    <div className={korz.korzina}>
      {korzes.length > 0 ? (
        <div className={korz.content1}>
          {korzes.map((item: any, index) => {
            console.log(item.tovar);
            return (
              <div className={korz.item}>
                <img src={item.img} />
                <div className={korz.info}>
                  <p>{item.name}</p>
                  <p>{item.cost + "Р"}</p>
                  <div>
                    <button onClick={() => dispatch(DeleteKol({ id: index }))}>
                      -
                    </button>
                    <p>{item.kol}</p>
                    <button onClick={() => dispatch(UpdateKol({ id: index }))}>
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => deletef(index)}>Удалить</button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={korz.content}>
          <img src={sumka} />
          <h1>В корзине пока ничего нет</h1>
          <div>
            <p>Загляните на главную,</p>

            <p>там много товаров которые могут вам приглянуться</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Korzina;
