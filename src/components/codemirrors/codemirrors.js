import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ambiance.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/xml-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/selection/active-line";
import "codemirror/addon/edit/closeBrackets";
import "codemirror/addon/edit/matchBrackets";
export default {
  data: () => ({
    show3: true,
    activeName: "first",
    cmOptions: {
      value: "",
      lineNumbers: true, //显示行数
      indentUnit: 4, //缩进单位为4
      mode: "text/html", //模式
      lineWrapping: true, //自动换行
      theme: "ambiance", //使用主题
      styleActiveLine: true, //当前行背景高亮
      matchBrackets: true, //括号匹配
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    }
  }),
  props: {
    curCode: String
  },
  components: {
    codemirror
  },
  methods: {
    changes() {
      this.$emit("onChanges", this.$refs.mycode.codemirror.getValue());
    }
  }
};