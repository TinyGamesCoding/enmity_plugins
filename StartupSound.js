function g(o,m,t){window.enmity.settings.set(o,m,t)}function u(o,m,t){return window.enmity.settings.get(o,m,t)}function h(o){window.enmity.plugins.registerPlugin(o)}function l(...o){return window.enmity.modules.getByProps(...o)}function S(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;const F=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const T=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function v(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const b=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight;const C=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const c=e.FormInput;e.FormLabel,e.FormRadio;const f=e.FormRow,E=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const R=l("DRMType","FilterType").default;function A({settings:o}){const[m,t]=n.useState(!0);return T.createThemedStyleSheet({item:{color:F.ThemeColorMap.HEADER_PRIMARY}}),n.useEffect(()=>{},[]),n.createElement(b,null,n.createElement(E,{title:"\u{1F5FF}"},n.createElement(c,{title:"Volume",placeholder:"1",keyboardType:"numeric",value:o.get("volume"),onChange:i=>o.set("volume",i)}),n.createElement(c,{title:"Sound",placeholder:"https://cdn.discordapp.com/attachments/1132326014324834314/1158723825077342258/ice_cube.mp4",value:o.get("sound"),onChange:i=>o.set("sound",i)}),n.createElement(C,{onPress:()=>t(!1)},n.createElement(f,{label:"Test sound"}))),n.createElement(R,{source:{uri:o.get("sound")},audioOnly:!0,paused:m,repeat:!0,onEnd:()=>t(!0),volume:Number(o.get("volume"))}))}var B="StartupSound",P="1.0.0",L="Plays a sound on startup.",N=[{name:"Tiny Games",id:"483056015890186263"}],s={name:B,version:P,description:L,authors:N};l("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");const k=S("ChatBanner",{default:!1}),x=l("DRMType","FilterType").default;l("uploadLocalFiles");const a=v("startupsound"),D={...s,onStart(){u(s.name,"volume")||g(s.name,"volume","1");let o=0;const m=3,t=()=>{try{o++,a.instead(k,"default",(i,r,d)=>{const M=r[0].channel.id,[w,I]=n.useState(!1);let y;return n.createElement(n.Fragment,null,d.apply(i,r),n.createElement(x,{ref:p=>{y=p},source:{uri:(s.name,"volume")},audioOnly:!0,paused:w,volume:Number(u(s.name,"volume"))}))})}catch{o<m&&setTimeout(()=>t(),o*1e3)}};setTimeout(()=>t(),100)},onStop(){a.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(A,{settings:o})}};h(D);
