(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],{47:function(e,t,a){e.exports=a(60)},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),i=a.n(r);a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(9),c=a(10),s=a(6),d=a(12),h=a(11),u=(a(53),a(21)),m=a.n(u),p=a(75),v=(a(22),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={content:e.content,title:e.title,edited:m()(new Date(e.edited)),created:m()(new Date(e.created)),color:e.color},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&this.setState({content:this.props.content,title:this.props.title,edited:m()(new Date(this.props.edited)),created:m()(new Date(this.props.created)),color:this.props.color})}},{key:"render",value:function(){var e=this;return console.log(this.state.color),o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{border:"black",className:"m-2",bg:"".concat(this.state.color),text:void 0!==["success","warning","info","light"].find((function(t){return t==e.state.color}))?"dark":"light",onClick:this.props.editorActivation},o.a.createElement(p.a.Body,{className:"Note-content"},o.a.createElement(p.a.Title,null,this.state.title),o.a.createElement(p.a.Text,null,this.state.content)),o.a.createElement("div",{className:"d-flex justify-content-between",style:{fontSize:"0.9em"}},o.a.createElement("div",{className:"d-block mx-2"},this.state.edited.format("H:mm")),o.a.createElement("div",{className:"d-block mx-2"},this.state.edited.format("DD/MM/YYYY")))))}}]),a}(o.a.Component)),f=(a(55),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={children:e.children},n}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({children:e.children})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Noteboard"},this.state.children)}}]),a}(o.a.Component)),g=a(73),b=a(72),k=a(65),C=a(41),y=a(76),E=a(66),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={search_value:""},n.search_form_ref=o.a.createRef(),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleClear=n.handleClear.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=this;this.setState({search_value:e.target.value},(function(){return t.props.handleFilterChange(t.state.search_value)}))}},{key:"handleClear",value:function(){var e=this;this.setState({search_value:""},(function(){e.props.handleFilterChange(e.state.search_value),e.search_form_ref.current.focus()}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{bg:"dark",variant:"dark",expand:"sm",sticky:"top",className:"justify-content-between"},o.a.createElement(g.a.Brand,{href:"#"},"Notepad"),o.a.createElement(g.a.Toggle,{"aria-controls":"navbar-content"}),o.a.createElement(g.a.Collapse,{id:"navbar-content",className:"justify-content-end align-items-center"},o.a.createElement(b.a,{inline:!0,className:"d-flex justify-content-end flex-grow-1"},o.a.createElement(k.a,{style:{minWidth:"263px"}},o.a.createElement(C.a,{type:"text",placeholder:"Search notes...",className:"my-1",value:this.state.search_value,onChange:this.handleChange,ref:this.search_form_ref}),""!==this.state.search_value&&o.a.createElement(k.a.Append,null,o.a.createElement(y.a,{variant:"light",className:"my-1 border border-left-0",onClick:this.handleClear},o.a.createElement(E.a,{size:16}))))))))}}]),a}(o.a.Component),j=a(67),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(y.a,{variant:"info",className:"p-1 m-1",style:{position:"fixed",bottom:"10px",right:"10px"},onClick:this.props.handleClick},o.a.createElement(j.a,{size:32}))}}]),a}(o.a.Component),O=a(68),w=a(69),x=a(42),S=a(74),D=a(71),B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={current_color:e.currentColor},n.colors_list=["primary","secondary","success","warning","danger","dark","light","info"],n.handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&this.setState({current_color:this.props.currentColor})}},{key:"handleClick",value:function(e){this.props.handleColorChange(e),this.setState({current_color:e})}},{key:"render",value:function(){var e=this,t=this.colors_list.map((function(t){return o.a.createElement(F,{color:t,active:t===e.state.current_color,changeColor:e.handleClick})}));return o.a.createElement("div",{className:"d-flex flex-wrap justify-content-center align-items-center"},o.a.createElement("div",{className:"d-flex flex-nowrap"},t.slice(0,4)),o.a.createElement("div",{className:"d-flex flex-nowrap"},t.slice(4)))}}]),a}(o.a.Component),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={color:n.props.color,active:n.props.active||!1},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&this.setState({color:this.props.color,active:this.props.active||!1})}},{key:"handleClick",value:function(e){this.props.changeColor(this.props.color)}},{key:"render",value:function(){return o.a.createElement(y.a,{variant:this.state.color,style:{height:"24px",width:"24px",boxSizing:"border-box",borderRadius:"50%",padding:"0px",margin:"3px",border:"".concat(this.state.active?"2px solid white":"1px solid grey")},onClick:this.handleClick})}}]),a}(o.a.Component),T=B,z=a(70),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).restoreState(e),n.handleBackgroundExit=n.handleBackgroundExit.bind(Object(s.a)(n)),n.handleBackgroundClick=n.handleBackgroundClick.bind(Object(s.a)(n)),n.handleTitleChange=n.handleTitleChange.bind(Object(s.a)(n)),n.handleContentChange=n.handleContentChange.bind(Object(s.a)(n)),n.restoreState=n.restoreState.bind(Object(s.a)(n)),n.handleColorChange=n.handleColorChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"restoreState",value:function(e){this.edit=void 0!==this.props.target,this.state={temp_title:this.edit?e.target.title:"",temp_content:this.edit?e.target.content:"",temp_color:this.edit?e.target.color:"dark"}}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&this.restoreState()}},{key:"componentDidMount",value:function(){var e=this;this.escape_event=function(t){"Escape"===t.key&&e.handleBackgroundExit()},window.addEventListener("keydown",this.escape_event)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.escape_event)}},{key:"handleBackgroundExit",value:function(){!(this.edit&&this.props.target.content===this.state.temp_content&&this.props.target.title===this.state.temp_title||!this.edit&&""===this.state.temp_title&&""===this.state.temp_content)&&window.confirm("Save document?")?this.props.onSave({title:this.state.temp_title,content:this.state.temp_content,created:this.edit?this.props.target.created:(new Date).getTime(),edited:(new Date).getTime(),key:this.edit?this.props.target.key:void 0,color:this.state.temp_color}):this.props.onCancel()}},{key:"handleBackgroundClick",value:function(e){e.target===e.currentTarget&&this.handleBackgroundExit()}},{key:"handleTitleChange",value:function(e){this.setState({temp_title:e.target.value})}},{key:"handleContentChange",value:function(e){this.setState({temp_content:e.target.value})}},{key:"handleColorChange",value:function(e){this.setState({temp_color:e})}},{key:"render",value:function(){var e=this,t=""===this.state.temp_title&&""===this.state.temp_content,a=(["success","warning","info","light"].find((function(t){return t===e.state.temp_color})),"dark"!==this.state.temp_color?this.state.temp_color:"secondary"),n=o.a.createElement(y.a,{onClick:function(){return e.props.onSave({title:e.state.temp_title,content:e.state.temp_content,created:e.edit?e.props.target.created:(new Date).getTime(),edited:(new Date).getTime(),key:e.edit?e.props.target.key:void 0,color:e.state.temp_color})},variant:"".concat(a," mr-1 my-1"),disabled:t,style:t?{pointerEvents:"none"}:{}},"Save");return o.a.createElement("div",{className:"Note-edit-background",onClick:this.handleBackgroundClick},o.a.createElement(O.a,{fluid:!0},o.a.createElement(w.a,null,o.a.createElement(x.a,{className:"col-12 col-lg-10 offset-lg-1"},o.a.createElement(p.a,{border:"black",bg:"dark",text:"light",className:"Note-editable"},o.a.createElement(p.a.Body,{className:"d-flex flex-column align-items-center"},o.a.createElement(b.a.Control,{placeholder:"Title",className:"form-control m-2 bg-dark border-secondary text-light",value:this.state.temp_title,rows:"1",onChange:this.handleTitleChange}),o.a.createElement("textarea",{placeholder:"Content",spellCheck:!1,className:"form-control flex-grow-1 m-2 bg-dark border-secondary text-light Note-content-editable",value:this.state.temp_content,onChange:this.handleContentChange}),o.a.createElement("div",{className:"d-flex justify-content-between w-100"},o.a.createElement("div",null,this.edit&&o.a.createElement(y.a,{onClick:this.props.onDelete,variant:"outline-secondary mr-1 my-1"},o.a.createElement(z.a,null))),o.a.createElement(T,{handleColorChange:this.handleColorChange,currentColor:this.state.temp_color}),o.a.createElement("div",{className:"d-flex justify-content-end flex-wrap"},o.a.createElement(y.a,{onClick:this.props.onCancel,variant:"outline-secondary mr-1 my-1"},"Cancel"),t?o.a.createElement(S.a,{overlay:o.a.createElement(D.a,{className:"tooltip-disabled",style:{zIndex:3e3}},"Can't save empty Note!")},o.a.createElement("span",{className:"d-inline-block"},n)):o.a.createElement(o.a.Fragment,null,n)))))))))}}]),a}(o.a.Component),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={filter:"",filtered_notes:[],all_notes:[],editor:!1,editor_target:void 0},n.addNote=n.addNote.bind(Object(s.a)(n)),n.deleteNote=n.deleteNote.bind(Object(s.a)(n)),n.updateNote=n.updateNote.bind(Object(s.a)(n)),n.handleEditorCancel=n.handleEditorCancel.bind(Object(s.a)(n)),n.handleEditorSave=n.handleEditorSave.bind(Object(s.a)(n)),n.setupEditor=n.setupEditor.bind(Object(s.a)(n)),n.handleFilterChange=n.handleFilterChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.initialize_db()}},{key:"initialize_db",value:function(){var e=this,t=indexedDB.open("NotepadDB");t.onupgradeneeded=function(a){e.db=t.result,e.db.createObjectStore("Notes",{autoIncrement:!0})},t.onsuccess=function(a){e.db=t.result,e.did_initialized=!0,e.updateNotesData(),e.db.onerror=function(e){console.log("An error occured during connecting to DB: "+e.error)}},t.onerror=function(e){console.log("An error occured during opening DB: "+e.error)}}},{key:"deleteNote",value:function(e){var t=this,a=this.db.transaction("Notes","readwrite").objectStore("Notes").delete(e);a.onsuccess=function(a){console.log("Succesfully deleted note #".concat(e)),t.setState({editor:!1,editor_target:void 0}),t.updateNotesData()},a.onerror=function(e){console.log("Couldn't delete note")}}},{key:"updateNotesData",value:function(){var e=this,t=[],a=this.db.transaction("Notes","readwrite").objectStore("Notes").openCursor();a.onsuccess=function(a){var n=a.target.result;if(n){var o={};o.key=n.primaryKey,o.title=n.value.title,o.content=n.value.content,o.created=n.value.created,o.edited=n.value.edited,o.color=n.value.color,t.push(o),n.continue()}else e.setState({all_notes:t}),e.handleFilterChange(e.state.filter)},a.onerror=function(e){console.log("Failed to fetch data")}}},{key:"getNotes",value:function(){var e=this;return this.state.filtered_notes.map((function(t){return o.a.createElement(v,{key:t.key,title:t.title,content:t.content,edited:t.edited,created:t.created,color:t.color,handleDelete:e.deleteNote.bind(e,t.key),editorActivation:e.setupEditor.bind(e,t)})}))}},{key:"addNote",value:function(){this.setState({editor:!0})}},{key:"setupEditor",value:function(e){this.setState({editor:!0,editor_target:e})}},{key:"updateNote",value:function(e){var t=this;console.log(e);var a=this.db.transaction("Notes","readwrite").objectStore("Notes").put({title:e.title,content:e.content,edited:e.edited,created:e.created,color:e.color},e.key);a.onsuccess=function(){console.log("Succesfully updated note"),t.updateNotesData()},a.onerror=function(){console.log("Failed to update note")}}},{key:"handleEditorCancel",value:function(){this.setState({editor:!1,editor_target:void 0})}},{key:"handleEditorSave",value:function(e){this.setState({editor:!1,editor_target:void 0}),this.updateNote(e)}},{key:"handleFilterChange",value:function(e){var t=new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&").toLowerCase()),a=this.state.all_notes.filter((function(e){return null!==e.title.toLowerCase().match(t)||null!==e.content.toLowerCase().match(t)}));this.setState({filter:e,filtered_notes:a})}},{key:"render",value:function(){return void 0===this.did_initialized?o.a.createElement(o.a.Fragment,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(_,{handleFilterChange:this.handleFilterChange}),0!==this.state.filtered_notes.length?o.a.createElement(f,{children:this.getNotes()}):o.a.createElement("h5",{style:{textAlign:"center",color:"white",margin:"20px"}},""===this.state.filter?"There are no notes to show!":"No notes matching filter!"),o.a.createElement(N,{handleClick:this.addNote}),!0===this.state.editor&&o.a.createElement(A,{target:this.state.editor_target,onDelete:void 0===this.state.editor_target?void 0:this.deleteNote.bind(this,this.state.editor_target.key),onCancel:this.handleEditorCancel,onSave:this.handleEditorSave}))}}]),a}(o.a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.a3cbf56a.chunk.js.map