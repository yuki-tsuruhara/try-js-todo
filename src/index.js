import "./styles.css";

/**
 * inputAreaの実装
 */
//  inputElement
const inputElement = document.getElementById("input");
// buttonElement
const inputbutton = document.getElementById("Add-button");

// 追加ボタン
const onclickAdd = () => {
  //  inputタグの中身を取得
  const inputText = document.getElementById("input").value;

  //  inputの中身を空にする
  document.getElementById("input").value = "";
  const incompletetodo = document.getElementById("incomplete-todo")
    .childElementCount;
  incompletetodo >= 4 && alert("これ以上は追加できません！");
  if (incompletetodo >= 4) {
    inputElement.disabled = true;
    inputbutton.disabled = true;
  }
  createIncompleteTodo(inputText);
};

// 削除ボタン
const onclickdelete = (target) => {
  document.getElementById("incomplete-todo").removeChild(target);
  const incompletetodo = document.getElementById("incomplete-todo")
    .childElementCount;
  if (incompletetodo <= 4) {
    inputElement.disabled = false;
    inputbutton.disabled = false;
  }
};

const createIncompleteTodo = (text) => {
  // div要素作成
  const div = document.createElement("div");
  div.className = "todo";

  // li要素作成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了button要素作成
  const compeletebutton = document.createElement("button");
  compeletebutton.innerText = "完了";
  compeletebutton.addEventListener("click", () => {
    const text = compeletebutton.parentNode.firstElementChild.innerText;
    onclickdelete(compeletebutton.parentNode);

    //  divを作成
    const div = document.createElement("div");
    div.className = "todo";
    // li要素作成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すbuttonを作成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      const backbuttonparent = backbutton.parentNode;
      const text = backbuttonparent.firstElementChild.innerText;
      const completeTodo = document.getElementById("complete-todo");
      completeTodo.removeChild(backbuttonparent);

      createIncompleteTodo(text);
    });
    // divに格納
    div.appendChild(li);
    div.appendChild(backbutton);

    // 完了したTODOに追加
    document.getElementById("complete-todo").appendChild(div);
  });

  // 削除button要素作成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    onclickdelete(deletebutton.parentNode);
  });

  // divに要素を追加
  div.appendChild(li);
  div.appendChild(compeletebutton);
  div.appendChild(deletebutton);
  console.log(div);

  //  未完了のリストに追加
  document.getElementById("incomplete-todo").appendChild(div);
};

// 追加ボタンのイベント
document
  .getElementById("Add-button")
  .addEventListener("click", () => onclickAdd());
