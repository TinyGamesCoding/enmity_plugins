function d(o,m,t){window.enmity.settings.set(o,m,t)}function l(o,m,t){return window.enmity.settings.get(o,m,t)}function S(o){window.enmity.plugins.registerPlugin(o)}function a(...o){return window.enmity.modules.getByProps(...o)}function T(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;const F=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const v=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function b(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const f=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight;const C=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const c=e.FormInput;e.FormLabel,e.FormRadio;const E=e.FormRow,A=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const B=a("DRMType","FilterType").default;function P({settings:o}){const[m,t]=n.useState(!0);return v.createThemedStyleSheet({item:{color:F.ThemeColorMap.HEADER_PRIMARY}}),n.useEffect(()=>{},[]),n.createElement(f,null,n.createElement(A,{title:"Startup Sound - By Tiny Games"},n.createElement(c,{title:"Volume",placeholder:"1",keyboardType:"numeric",value:o.get("volume"),onChange:s=>o.set("volume",s)}),n.createElement(c,{title:"Sound",placeholder:"Insert valid MP4/MOV file link here.",value:o.get("sound"),onChange:s=>o.set("sound",s)}),n.createElement(C,{onPress:()=>t(!1)},n.createElement(E,{label:"Test Sound"}))),n.createElement(B,{source:{uri:o.get("sound")},audioOnly:!0,paused:m,repeat:!0,onEnd:()=>t(!0),volume:Number(o.get("volume"))}))}var R="StartupSound",L="1.0.0",M="Plays a sound on startup.",k=[{name:"Tiny Games",id:"483056015890186263"}],i={name:R,version:L,description:M,authors:k};a("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");const N=T("ChatBanner",{default:!1}),x=a("DRMType","FilterType").default;a("uploadLocalFiles");const r=b("startupsound"),I={...i,onStart(){l(i.name,"volume")||d(i.name,"volume","1"),l(i.name,"sound")||d(i.name,"sound","https://cdn.discordapp.com/attachments/928046469586497607/1159084599452897330/discordo.mov");let o=0;const m=3,t=()=>{r.unpatchAll()},s=()=>{try{o++,r.instead(N,"default",(w,u,y)=>{const V=u[0].channel.id,[p,D]=n.useState(!1);let g;return n.createElement(n.Fragment,null,y.apply(w,u),n.createElement(x,{ref:h=>{g=h},source:{uri:l(i.name,"sound")},audioOnly:!0,paused:p,volume:Number(l(i.name,"volume"))}))})}catch{o<m&&setTimeout(()=>s(),o*1e3)}};setTimeout(()=>s(),300),setTimeout(()=>t(),5e3)},onStop(){r.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(P,{settings:o})}};S(I);