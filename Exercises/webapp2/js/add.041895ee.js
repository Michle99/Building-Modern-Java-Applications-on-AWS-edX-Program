(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["add"],{"7e55":function(o,r,a){"use strict";a.r(r);var n=function(){var o=this,r=o.$createElement,a=o._self._c||r;return a("div",{staticClass:"container-fluid mt-4"},[a("h2",[o._v("Add Dragon")]),a("p",[a("small",[a("code",[o._v("POST "+o._s(o.dragonsPostEndpoint))])])]),a("p",[a("small",[a("code",[o._v(o._s(o.dragonsPostBody))])])]),a("hr"),a("b-form",[a("b-form-group",{attrs:{label:"Name:","label-for":"dragonName"}},[a("b-form-input",{attrs:{id:"dragonName"},model:{value:o.form.dragonName,callback:function(r){o.$set(o.form,"dragonName",r)},expression:"form.dragonName"}})],1),a("b-form-group",{attrs:{label:"Description:","label-for":"dragonDescription"}},[a("b-form-input",{attrs:{id:"dragonDescription"},model:{value:o.form.dragonDescription,callback:function(r){o.$set(o.form,"dragonDescription",r)},expression:"form.dragonDescription"}})],1),a("b-form-group",{attrs:{label:"Family:","label-for":"dragonFamily"}},[a("b-form-input",{attrs:{id:"dragonFamily"},model:{value:o.form.dragonFamily,callback:function(r){o.$set(o.form,"dragonFamily",r)},expression:"form.dragonFamily"}})],1),a("b-form-group",{attrs:{label:"City:","label-for":"dragonCity"}},[a("b-form-input",{attrs:{id:"dragonCity"},model:{value:o.form.dragonCity,callback:function(r){o.$set(o.form,"dragonCity",r)},expression:"form.dragonCity"}})],1),a("b-form-group",{attrs:{label:"Country:","label-for":"dragonCountry"}},[a("b-form-input",{attrs:{id:"dragonCountry"},model:{value:o.form.dragonCountry,callback:function(r){o.$set(o.form,"dragonCountry",r)},expression:"form.dragonCountry"}})],1),a("b-form-group",{attrs:{label:"State:","label-for":"dragonState"}},[a("b-form-input",{attrs:{id:"dragonState"},model:{value:o.form.dragonState,callback:function(r){o.$set(o.form,"dragonState",r)},expression:"form.dragonState"}})],1),a("b-form-group",{attrs:{label:"Neighborhood:","label-for":"dragonNeighborhood"}},[a("b-form-input",{attrs:{id:"dragonNeighborhood"},model:{value:o.form.dragonNeighborhood,callback:function(r){o.$set(o.form,"dragonNeighborhood",r)},expression:"form.dragonNeighborhood"}})],1),a("b-form-group",[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),o.postDragons()}}},[o._v("POST /dragons")]),a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:o.loading,expression:"loading"}],attrs:{small:"",label:"Loading.."}})],1)],1)],1)},t=[],e=a("bc3a"),i=a.n(e),d={name:"Add",data:function(){return{form:{dragonName:"",dragonDescription:"",dragonFamily:"",dragonCity:"",dragonCounty:"",dragonState:"",dragonNeighborhood:""},loading:!1,dragonsEndpoint:localStorage.hasOwnProperty("dragonsEndpoint")?localStorage.getItem("dragonsEndpoint"):""}},computed:{dragonsPostEndpoint:function(){return this.dragonsEndpoint+"dragons"},dragonsPostBody:function(){return{dragonName:this.form.dragonName,description:this.form.dragonDescription,family:this.form.dragonFamily,city:this.form.dragonCity,state:this.form.dragonState,neighborhood:this.form.dragonNeighborhood,country:this.form.dragonCountry,reportingPhoneNumber:"15555555555",confirmationRequired:!1}}},methods:{postDragons:function(){var o=this;this.loading=!0,i.a.post(this.dragonsPostEndpoint,this.dragonsPostBody).then((function(r){o.loading=!1,o.form.dragonName="",o.form.dragonDescription="",o.form.dragonFamily="",o.form.dragonCity="",o.form.dragonState="",o.form.dragonNeighborhood="",o.form.dragonCountry=""}),(function(r){alert(r),o.loading=!1}))}}},s=d,g=a("2877"),l=Object(g["a"])(s,n,t,!1,null,null,null);r["default"]=l.exports}}]);