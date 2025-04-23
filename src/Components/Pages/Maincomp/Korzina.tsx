import React, { useRef } from "react";
import korz from "../../../Styles/Korzina.module.scss";
import { sumka, krestik } from "../../../Assets/Main";
import {
  selectKorz,
  DeleteKorz,
  SetKorz,
  UpdateKol,
  DeleteKol,
  DeleteAllKorz,
  SetCosts,
  selectCosts,
  selectKols,
  SetKols,
  SetPromo,
  selectSkidka,
  selectProcent,
} from "../../../store/korz";
import { useSelector, useDispatch } from "react-redux";
import { al } from "react-router/dist/development/route-data-BL8ToWby";

const Korzina = () => {
  const korzes = useSelector(selectKorz);
  const dispatch = useDispatch();
  dispatch(SetKols());
  const kols = useSelector(selectKols);
  dispatch(SetCosts());
  const costs = useSelector(selectCosts);
  const prom = useRef<HTMLInputElement>(null);

  const skidka = useSelector(selectSkidka);
  const procent = useSelector(selectProcent);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch(SetPromo(prom.current!.value));
    }
  };

  function deletef(index: number) {
    dispatch(DeleteKorz({ id: index }));
    console.log(korzes);
  }
  const [checkedItems, setCheckedItems] = React.useState<any>({});
  const checkboxes = useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const initialCheckedItems = korzes.reduce((acc: any, item) => {
      acc[item.id] = false;
      return acc;
    }, {});
    setCheckedItems(initialCheckedItems);
    console.log(1);
  }, [korzes]);

  const deleteSelect = () => {
    const idsToDelete = Object.keys(checkedItems)
      .filter((key) => checkedItems[key] === true)
      .map((key) => Number(key));

    console.log("idsToDelete: ", idsToDelete);
    dispatch(DeleteAllKorz(idsToDelete));
  };
  const handleAllCheckClick = () => {
    const isChecked = checkboxes.current!.checked;

    const updatedCheckedItems = korzes.reduce((acc: any, item) => {
      acc[item.id] = isChecked;
      return acc;
    }, {});

    setCheckedItems(updatedCheckedItems);
  };

  const handleItemChange = (itemId: any, isChecked: any) => {
    setCheckedItems((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [itemId]: isChecked,
    }));
  };
  return (
    <div className={korz.korzina}>
      {korzes.length > 0 ? (
        <div className={korz.content1}>
          <h1 className={korz.h1}>Корзина</h1>
          <div className={korz.button}>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                ref={checkboxes}
                onChange={handleAllCheckClick}
              />
              <p>Выбрать все</p>
            </div>
            <div>
              <p onClick={deleteSelect}>Удалить выбранные </p>
            </div>
          </div>
          <div className={korz.conteant}>
            <div className={korz.conteant1}>
              {korzes.map((item: any, index) => {
                console.log(item.tovar);
                return (
                  <div className={korz.item}>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={checkedItems[item.id] || false}
                      onChange={(event) =>
                        handleItemChange(item.id, event.target.checked)
                      }
                      key={index}
                    />
                    <img src={item.img} />
                    <div className={korz.info}>
                      <p>{item.name}</p>

                      <div className={korz.button1}>
                        <p>{item.cost + "Р"}</p>
                        <div>
                          <button
                            onClick={() => dispatch(DeleteKol({ id: index }))}
                          >
                            -
                          </button>
                          <p>{item.kol}</p>
                          <button
                            onClick={() => dispatch(UpdateKol({ id: index }))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={korz.krestik1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={"none"}
                        stroke="gray"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>

                      <img
                        src={krestik}
                        className={korz.krestik}
                        onClick={() => deletef(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={korz.conteant2}>
              <button className={korz.buttons}>Оформить заказ</button>
              <div>
                <h1>{kols + " товаров"}</h1>
                <h1>{costs}</h1>
              </div>
              <div>
                <h1>Скидка</h1>
                <h1>{procent + "%"}</h1>
              </div>
              <div>
                <h1>Итого</h1>
                <h1>{skidka == 0 ? costs : skidka}</h1>
              </div>
              <input
                type="text"
                placeholder="Промокод"
                onKeyDown={handleKeyDown}
                ref={prom}
              />
            </div>
          </div>
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
