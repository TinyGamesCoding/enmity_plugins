function T(o,m,t){window.enmity.settings.set(o,m,t)}function y(o,m,t){return window.enmity.settings.get(o,m,t)}function F(o){window.enmity.plugins.registerPlugin(o)}function c(...o){return window.enmity.modules.getByProps(...o)}function E(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;const v=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const b=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const f=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function A(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const C=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight;const M=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const R=e.FormInput;e.FormLabel,e.FormRadio;const _=e.FormRow,B=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const D=c("DRMType","FilterType").default;function N({settings:o}){const[m,t]=n.useState(!0);return f.createThemedStyleSheet({item:{color:v.ThemeColorMap.HEADER_PRIMARY}}),n.useEffect(()=>{},[]),n.createElement(C,null,n.createElement(B,{title:"\u{1F5FF}"},n.createElement(R,{title:"Volume",placeholder:"69",keyboardType:"numeric",value:o.get("volume"),onChange:a=>o.set("volume",a)}),n.createElement(M,{onPress:()=>t(!1)},n.createElement(_,{label:"Test volume"}))),n.createElement(D,{source:{uri:"https://github.com/Egg-Man-Real/Moyai/raw/main/src/boom.mp4"},audioOnly:!0,paused:m,repeat:!0,onEnd:()=>t(!0),volume:Number(o.get("volume"))}))}var P="StartupSound",k="1.0.0",I="Plays a sound on startup.",L=[{name:"Tiny Games",id:"483056015890186263"}],s={name:P,version:k,description:I,authors:L};function x(o){return window.enmity.assets.getIDByName(o)}const g=c("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),G=E("ChatBanner",{default:!1}),H=c("DRMType","FilterType").default;c("uploadLocalFiles");const l=A("startupsound"),V={...s,onStart(){y(s.name,"volume")||T(s.name,"volume","1");let o=0;const m=3,t=()=>{var a;try{o++;for(const i of["MESSAGE_CREATE","MESSAGE_UPDATE","MESSAGE_REACTION_ADD"])try{g.dispatch({type:i,message:{}})}catch(r){console.log(`[${s.name} Dispatch Error]`,r)}const p=(a=g._actionHandlers._orderedActionHandlers)==null?void 0:a.MESSAGE_CREATE.find(i=>i.name==="MessageStore");l.instead(G,"default",(i,r,S)=>{const O=r[0].channel.id,[u,h]=n.useState(!1);let d;return l.before(p,"actionHandler",(w,z,U)=>{d.seek(0),u&&h(!1),setTimeout(()=>{b.open({key:"TOAST",content:"but why",icon:x("ic_channel_lock_16px")})},300)}),n.createElement(n.Fragment,null,S.apply(i,r),n.createElement(H,{ref:w=>{d=w},source:{uri:"https://github.com/Egg-Man-Real/Moyai/raw/main/src/boom.mp4"},audioOnly:!0,paused:u,volume:Number(y(s.name,"volume"))}))})}catch{o<m&&setTimeout(()=>t(),o*1e3)}};setTimeout(()=>t(),300)},onStop(){l.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(N,{settings:o})}};F(V);
