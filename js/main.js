// Section

// タスク一覧を各セクションの列で分割してタスクを表示します。セクションごとに属するタスクがあり、セクションの列の中にタスクのカードが上から表示されていきます。

// セクション追加機能
// - テキストフィールドにセクションの名前を入力保存し、セクションの新規追加する機能。
// - セクションが新規追加されたら一番右の列にセクションが新規追加されます。

// セクション名編集機能
// - 既存のセクションの名前を後から編集保存出来る機能。
// - セクション名をクリックすると、テキストフィールドでセクション名を上書き保存可能。

// セクションコンポーネント
// ディレクトリ
// components ディレクトリの下に、セクションごとのコンポーネント task-section.vue を作成してください。

// emit
// - セクションの名前変更に伴うイベントを emit して、セクション名変更を制御するようにしてください。
// - また、以下の components から送られてくる event と値をさらに上の親コンポーネントに emit して制御することに注意してください。

// components
// このセクションコンポーネントの中でさらに以下のタスクコンポーネントを呼び出してレンダリングします。
// - components/task.vue
// - components/task-new.vue

// Task

// 各セクションに属するタスクを縦一列に表示します。

// タスク新規追加機能
// - task は各 section の最下部に設置している ＋ ボタンから作成することができます。セクションが新規追加されたら一番右の列にセクションが新規追加されます。

// タスク編集
// - 作成されているタスクのタイトル・本文・所属するセクションを後から編集保存できる機能。
// - タスクカード内のセレクトボックスでセクションを変更したら、表示されているタスクが別のセクション内に移動します。
// - タスクカード内の星マークをクリックすると星の色が変わり、お気に入りに登録することができます。

// タスク削除
// - タスクカード内のゴミ箱のアイコンをクリックしたら、そのタスクを削除出来る機能。
// - 削除後は一覧表示からも消えます。

// タスクカードコンポーネント
// 上のタスクの編集、削除機能はタスクカードのコンポーネント内で emit を使用してイベントを通知してタスクを変更するように注意して実装してください。

// ディレクトリ
// タスクカードのコンポーネントは components/task.vue に作成してください。

// props
// props で受け取るデータ
// - task : コンポーネント内のタスクの Object
// - secion_id : コンポーネント内のタスクが所属する section_id
// - sections （全てのセクション） : 所属するセクション変更時にセレクトボックスの選択肢

// emit
// emit を使用して、タスクの変更・削除に必要なイベントと値を親コンポーネントに通知するようにしてください。
// - タスクタイトルの入力フォーム変更時にその event と変更された値を emit
// - タスク body 入力フォームで変更時にその event と変更された値を emit
// - セレクトボックスで属するセクション変更時にその event と変更された値を emit
// - ゴミ箱アイコンクリック時にそのタスクの削除イベントを emit
// - 星のアイコンクリック時に星の色の切り替えイベントを emit

// タスク新規作成フォームコンポーネント
// タスク新規作成用の入力フォームカードをまとめたコンポーネントを task-new.vue として作成します。各セクションの最下部で表示されます。

// ディレクトリ
// タスクカードのコンポーネントは components/task-new.vue に作成してください。

// props
// props で受け取るデータ
// section_id: 新規作成するタスクが属するセクション id

// emit
// emit を使用して、タスク新規作成イベントと作成されたタスクオブジェクトを通知してください。
Vue.component("item-cards", {
    props: ["item"],
    template: 
    `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <img v-bind:src="item.url" class="card-img-top" alt="...">
                <h5 class="card-title pt-2">{{ item.name }}</h5>
                <p class="card-text">Category: {{ item.category }}</p>
                <p class="card-text">Price: \${{ item.price.toLocaleString() }}</p>
                <p class="card-text">Date: {{ item.registerDate }}</p>  
            </div>
        </div>
    `
})
new Vue({
    el: "#app",
    data: {
        toDoList: [],
        inputTask: "",
        id: 1,
        v: "hi",
        f: false,
    },

    methods: {
        createList: function(){
            this.toDoList.push({id: this.id, title: this.inputTask});
            this.inputTask = "";
            this.id++;
        },
        deleteList: function(index){
            this.toDoList.splice(index, 1);
        },
        c: function() {
            this.f = true
            this.$nextTick(function () { this.$refs.r1.focus() })
        },
    },
})