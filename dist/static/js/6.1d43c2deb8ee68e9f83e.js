webpackJsonp([6],{BRgg:function(t,n,e){"use strict";n.b=function(t){var n=a()({},r.b,{platform:"h5",uin:0,needNewCode:1,format:"json",notice:0,g_tk:999222372});return c.a.get("/api/getTopList",{params:n}).then(function(t){return s.a.resolve(t.data)})},n.a=function(t){var n=a()({},r.b,{platform:"yqq",page:"detail",loginUin:0,hostUin:0,song_begin:0,song_num:30,needNewCode:1,type:"top",format:"json",notice:0,g_tk:999222372,topid:t});return c.a.get("/api/getDetailToplist",{params:n}).then(function(t){return s.a.resolve(t.data)})};var i=e("//Fk"),s=e.n(i),o=e("woOf"),a=e.n(o),r=e("T452"),u=e("mtWM"),c=e.n(u)},lWFh:function(t,n){},s3x3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("kvay"),a=e("NYxO"),r=e("BRgg"),u=e("T452"),c=e("PvFA"),g={data:function(){return{songs:[],rank:!0}},created:function(){this._getDetailToplist()},methods:{_getDetailToplist:function(){var t=this;this.topList.id||this.$router.push({path:"/rank"}),Object(r.a)(this.topList.id).then(function(n){n.code===u.a&&(t.songs=t._nornalizeSongs(n.songlist))})},_nornalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albummid&&n.push(Object(c.a)(e))}),n}},computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(a.c)(["topList"])),components:{MusicList:o.a}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.rank,songs:this.songs,title:this.title,"bg-image":this.bgImage}})],1)},staticRenderFns:[]};var p=e("VU/8")(g,l,!1,function(t){e("lWFh")},"data-v-0cc19034",null);n.default=p.exports}});
//# sourceMappingURL=6.1d43c2deb8ee68e9f83e.js.map