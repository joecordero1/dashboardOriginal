
//Avatar Sizes
interface avatarsize {
    id:number;
    class:string;
    src:string;
}
export const Avatarsize:avatarsize[] = [
    {id:1, class:"xs", src:"../../../assets/images/faces/4.jpg"},
    {id:2, class:"sm", src:"../../../assets/images/faces/5.jpg"},
    {id:3, class:"md", src:"../../../assets/images/faces/6.jpg"},
    {id:4, class:"lg", src:"../../../assets/images/faces/7.jpg"},
    {id:5, class:"xl", src:"../../../assets/images/faces/8.jpg"},
    {id:6, class:"xxl", src:"../../../assets/images/faces/9.jpg"},
]

//Avatar With Icons

interface avataricon {
    id:number;
    class:string;
    icon:string;
    color:string;
    src:string;
}
export const AvatarIcon:avataricon[] = [
    {id:1, class:"xs", src:"../../../assets/images/faces/2.jpg", icon:"fe-camera", color:"success"},
    {id:2, class:"sm", src:"../../../assets/images/faces/3.jpg", icon:"fe-edit", color:"secondary"},
    {id:3, class:"md", src:"../../../assets/images/faces/14.jpg", icon:"fe-plus", color:"warning"},
    {id:4, class:"lg", src:"../../../assets/images/faces/13.jpg", icon:"fe-edit", color:"info"},
    {id:5, class:"xl", src:"../../../assets/images/faces/15.jpg", icon:"fe-camera", color:"success"},
    {id:6, class:"xxl", src:"../../../assets/images/faces/9.jpg", icon:"fe-plus", color:"danger"},
]

//Avatar With Online Status

interface avatarline {
    id:number;
    src:string;
    class:string;
}
export const AvatarOnline:avatarline[] = [
    {id:1, src:"../../../assets/images/faces/8.jpg", class:"xs"},
    {id:2, src:"../../../assets/images/faces/10.jpg", class:"sm"},
    {id:3, src:"../../../assets/images/faces/12.jpg", class:"mg"},
    {id:4, src:"../../../assets/images/faces/13.jpg", class:"lg"},
    {id:5, src:"../../../assets/images/faces/14.jpg", class:"xl"},
    {id:6, src:"../../../assets/images/faces/15.jpg", class:"xxl"},
]

//Avatar With Offline Status
interface avataroffline {
    id:number;
    src:string;
    class:string;
}
export const AvatarOffline:avataroffline[] = [
    {id:1, src:"../../../assets/images/faces/2.jpg", class:"xs"},
    {id:2, src:"../../../assets/images/faces/3.jpg", class:"sm"},
    {id:3, src:"../../../assets/images/faces/4.jpg", class:"md"},
    {id:4, src:"../../../assets/images/faces/5.jpg", class:"lg"},
    {id:5, src:"../../../assets/images/faces/6.jpg", class:"xl"},
    {id:6, src:"../../../assets/images/faces/7.jpg", class:"xxl"},
]

//Avatar With Numbers
interface avatarnumber {
    id:number;
    src:string;
    class:string;
    color:string;
    number:string;
}
export const AvatarNumber:avatarnumber[] = [
    {id:1, src:"../../../assets/images/faces/2.jpg", class:"xs", color:"primary", number:"2"},
    {id:2, src:"../../../assets/images/faces/3.jpg", class:"sm", color:"secondary", number:"5"},
    {id:3, src:"../../../assets/images/faces/14.jpg", class:"md", color:"warning", number:"1"},
    {id:4, src:"../../../assets/images/faces/13.jpg", class:"lg", color:"info", number:"7"},
    {id:5, src:"../../../assets/images/faces/15.jpg", class:"xl", color:"success", number:"3"},
    {id:6, src:"../../../assets/images/faces/9.jpg", class:"xxl", color:"danger", number:"9"},
]

//Avatar With Initial 

interface avatarinitial {
    id:number;
    class:string;
    color:string;
}
export const AvatarInitial:avatarinitial[] = [
    {id:1, class:"xs", color:"primary"},
    {id:2, class:"sm", color:"secondary"},
    {id:3, class:"md", color:"warning"},
    {id:4, class:"lg", color:"danger"},
    {id:5, class:"xl", color:"success"},
    {id:6, class:"xxl", color:"info"},
]

//Stacked Avatars
interface stacked {
    id:number;
    src:string;
}
export const StackedAvatars:stacked[] = [
    {id:1, src:"../../../assets/images/faces/2.jpg"},
    {id:2, src:"../../../assets/images/faces/8.jpg"},
    {id:3, src:"../../../assets/images/faces/2.jpg"},
    {id:4, src:"../../../assets/images/faces/10.jpg"},
    {id:5, src:"../../../assets/images/faces/4.jpg"},
    {id:6, src:"../../../assets/images/faces/13.jpg"},
]