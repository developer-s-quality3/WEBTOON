import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";
import VueCookies from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 로그인 상태 정보
    isLogin: false,

    //작품등록으로 넘어가기 위한 신청 page Id
    //에피소드에 필요한 로그인한 유저의 ID
    registerInfo: null,

    // 사용자 이름, 사용자 타입 등
    userInfo: null,

    accessToken: null,
    refreshToken: null,
    //사용자 정보

    count: 0,

    id: null, //에피소드로 넘어가기 위한 신청 page Id
    userId: null, //작품등록에 필요한 로그인한 유저의 ID

    genre: [],

    wordId: null, // 에피소드를 넘기기 위한 디비에 생선된 작품의 ID
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
      state.isLogin = true;
    },

    setRegisterInfo(state, payload) {
      state.registerInfo = payload;
    },
    setCookies(state, payload) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    delUserInfo(state) {
      state.userInfo = null;
      state.isLogin = false;

      localStorage.removeItem("name");
      localStorage.removeItem("userType");
      localStorage.removeItem("isLogin");
    },
  },
  actions: {
    refresh5({ commit }) {
      let payload = {
        name: localStorage.getItem("name"),
        userType: localStorage.getItem("userType"),
      };
      commit("setUserInfo", payload);
    },
    signin({ commit, state }, loginObj) {
      axios
        .post(
          "http://localhost:5000/auth/session",
          {
            email: loginObj.email,
            password: loginObj.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);

          const userInfo = {
            name: res.data.userInfo.name,
            userType: res.data.userInfo.userType,
          };

          localStorage.setItem("name", userInfo.name);
          localStorage.setItem("userType", userInfo.userType);
          localStorage.setItem("isLogin", state.isLogin);

          let cookies = {
            accessToken: VueCookies.get("accessToken"),
            refreshToken: VueCookies.get("refreshToken"),
          };

          //사용자 정보 수정
          commit("setUserInfo", userInfo);
          commit("setCookies", cookies);

          //로그인 성공시 홈 화면으로 이동
          router.push("/");
        })
        .catch((err) => {
          console.log("login FAILE");
          console.log(err);
        });
    },
    signout({ commit }) {
      axios
        .delete("http://localhost:5000/auth/session", { withCredentials: true })
        .then(() => {
          commit("delUserInfo");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // register_webtoon_userId: respon.data.userId,
    //         episode_Id: respon.data.id,
  },
});
