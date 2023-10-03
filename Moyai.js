function p(o,a,c){window.enmity.settings.set(o,a,c)}function d(o,a,c){return window.enmity.settings.get(o,a,c)}function D(o){window.enmity.plugins.registerPlugin(o)}function C(...o){return window.enmity.modules.getByProps(...o)}function L(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const N=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const s=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function R(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const M=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var H=({settings:o})=>s.createElement(M,{label:"Example Setting",trailing:s.createElement(M,{value:o.get("example",!0),onValueChange:()=>o.toggle("example",!0)})}),x="StartupSound",B="1.0.0",I="Plays a sound on startup.",k=[{name:"Tiny Games",id:"483056015890186263"}],t={name:x,version:B,description:I,authors:k};const F=C("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),P=L("ChatBanner",{default:!1}),G=C("DRMType","FilterType").default,V=C("uploadLocalFiles"),r=R("moyai");function A(o){return o=o.toLowerCase(),["\u{1F5FF}","moyai","moai","boom","vine","\u{1F4A5}","*\u200D*"].some(a=>o.includes(a))}const O={...t,onStart(){d(t.name,"volume")||p(t.name,"volume","1");let o=0;const a=3,c=()=>{var u,w,i;try{o++;for(const m of["MESSAGE_CREATE","MESSAGE_UPDATE","MESSAGE_REACTION_ADD"])try{F.dispatch({type:m,message:{}})}catch(y){console.log(`[${t.name} Dispatch Error]`,y)}const T=(u=F._actionHandlers._orderedActionHandlers)==null?void 0:u.MESSAGE_CREATE.find(m=>m.name==="MessageStore"),l=(w=F._actionHandlers._orderedActionHandlers)==null?void 0:w.MESSAGE_UPDATE.find(m=>m.name==="MessageStore"),v=(i=F._actionHandlers._orderedActionHandlers)==null?void 0:i.MESSAGE_REACTION_ADD.find(m=>m.name==="MessageStore");r.instead(P,"default",(m,y,_)=>{const E=y[0].channel.id,[g,b]=s.useState(!0);let S;return r.before(T,"actionHandler",(h,n,f)=>{n[0].channelId===E&&n[0].message.content&&A(n[0].message.content)&&(S.seek(0),g&&b(!1),p(t.name,"moyaiCounter",Number(d(t.name,"moyaiCounter",0))+1),n[0].message.content=n[0].message.content.replace("*\u200D*"," \u{1F5FF}"))}),r.before(l,"actionHandler",(h,n,f)=>{n[0].channelId===E&&n[0].message.content&&A(n[0].message.content)&&(S.seek(0),g&&b(!1),p(t.name,"moyaiCounter",Number(d(t.name,"moyaiCounter",0))+1),n[0].message.content=n[0].message.content.replace("*\u200D*"," \u{1F5FF}"))}),r.after(v,"actionHandler",(h,n,f)=>{n[0].channelId===E&&A(n[0].emoji.name)&&(S.seek(0),g&&b(!1),p(t.name,"moyaiCounter",Number(d(t.name,"moyaiCounter",0))+1))}),s.createElement(s.Fragment,null,_.apply(m,y),s.createElement(G,{ref:h=>{S=h},source:{uri:"https://github.com/Egg-Man-Real/Moyai/raw/main/src/boom.mp4"},audioOnly:!0,paused:g,volume:Number(d(t.name,"volume"))}))})}catch{o<a&&setTimeout(()=>c(),o*1e3)}};setTimeout(()=>c(),300),r.before(N,"sendMessage",(u,[w,i],T)=>{i.content.toLowerCase().startsWith("b:")&&(i.content=i.content.slice(2,i.content.length)+"*\u200D*")}),r.before(V,"uploadLocalFiles",(u,[w,i,T,l],v)=>{l.content.toLowerCase().startsWith("b:")&&(l.content=l.content.slice(2,l.content.length)+"*\u200D*")})},onStop(){r.unpatchAll()},getSettingsPanel({settings:o}){return s.createElement(H,{settings:o})}};D(O);