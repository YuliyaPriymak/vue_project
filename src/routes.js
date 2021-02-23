import Home from "@/components/Home";
import User from "@/components/User/User";
import UserStart from "@/components/User/UserStart";
import UserEdit from "@/components/User/UserEdit";
import UserInfo from "@/components/User/UserInfo";
import NotFound from "@/components/NotFound";

export const routes = [
  // {
  //   path: '', component: Home
  // },
  {
    path: '', component: Home, name: 'Home'
  },
  {
    path: '/user', component: User, children: [
      {path: '', component: UserStart},
      {path: ':id', component: UserInfo},
      {path: ':id/edit', component: UserEdit, name: 'UserEdit'}
    ]
  },
  {path: '*', component: NotFound}
]
