import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import login from './login';
import stuHome from '@/views/students/stu-home/stuHome.vue';
import stuCourse from '@/views/students/stu-course/stuCourse.vue';
import stuDiscuss from '@/views/students/stu-discuss/stuDiscuss.vue';
import stuStatistics from '@/views/students/stu-statistics/stuStatistics.vue';
import stuResources from '@/views/students/stu-resources/stuResources.vue';
import studyHome from '@/views/study/study-home/studyHome.vue';
import studyCase from '@/views/study/study-case/studyCase.vue';
import studyCourseware from '@/views/study/study-courseware/studyCourseware.vue';
import studyPractice from '@/views/study/study-practice/studyPractice.vue';
import studyTask from '@/views/study/study-task/studyTask.vue';
import stuTest from '@/views/students/stu-test/stuTest.vue';
import teaHome from '@/views/teachers/tea-home/teaHome.vue';
import teaCourse from '@/views/teachers/tea-course/teaCourse.vue';
import teaDiscuss from '@/views/teachers/tea-discuss/teaDiscuss.vue';
import teaScore from '@/views/teachers/tea-score/teaScore.vue';
import teaContent from '@/views/teachers/tea-content/teaContent.vue';
import teaGrades from '@/views/teachers/tea-grades/teaGrades.vue';

import store from '@/store';

Vue.use(Router)

let routes = [
  {
    path: "/",
    name: "首页",
    value: "",
    component: Login,
    redirect: "/login",
    children: [
      ...login
    ]
  },
  {
    path: "/student",
    name: "stuHome",
    value: "学生首页",
    component: stuHome,
    redirect: "/student/course",
    children: [
      {
        path: "/student/course",
        name: "stuCourse",
        value: "课程章节",
        component: stuCourse
      },
      {
        path: "/student/discuss",
        nama: "stuDiscuss",
        value: "学习讨论",
        component: stuDiscuss
      },
      {
        path: "/student/statistics",
        nama: "stuStatistics",
        value: "成绩统计",
        component: stuStatistics
      },
      {
        path: "/student/resources",
        nama: "stuResources",
        value: "学习资源",
        component: stuResources
      }
    ]
  },
  {
    path: "/study",
    nama: "study",
    value: "学习首页",
    component: studyHome,
    redirect: "/study/case",
    children: [
      {
        path: "/study/case",
        name: "studyCase",
        value: "案例学习",
        component: studyCase
      },
      {
        path: "/study/courseware",
        nama: "studyCourseware",
        value: "课件学习",
        component: studyCourseware
      },
      {
        path: "/study/practice",
        nama: "studyPractice",
        value: "练一练",
        component: studyPractice
      },
      {
        path: "/study/task",
        nama: "studyTask",
        value: "课后作业",
        component: studyTask
      }
    ]
  },
  {
    path: "/stu-test",
    name: "章节测试",
    value: "",
    component: stuTest,
  },
  {
    path: "/teacher",
    name: "教师首页",
    value: "teaHome",
    component: teaHome,
    redirect: "/teacher/content",
    children: [
      {
        path: "/teacher/content",
        name: "teaContent",
        value: "首页内容",
        redirect: "/teacher/content/course",
        component: teaContent,
        children: [
          {
            path: "/teacher/content/course",
            name: "teaCourse",
            value: "课程章节",
            component: teaCourse
          },
          {
            path: "/teacher/content/discuss",
            nama: "teaDiscuss",
            value: "学习讨论",
            component: teaDiscuss
          },
          {
            path: "/teacher/content/score",
            name: "teaScore",
            value: "成绩统计",
            component: teaScore
          }
        ]
      },
      {
        path: "/teacher/grades",
        name: "teaGrades",
        value: "课程批改",
        component: teaGrades,
        children: [
        ]
      },
    ]
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})
/**
 * @param {to} 将要去的路由
 * @param {from} 出发的路由
 * @param {next} 执行下一步
 */
router.beforeEach((to, from, next) => {
  if (to.path == '/login' || to.path == '/register' || to.path == '/') {
    next();
    return
  }
  if (store.state.user.userid) {
    if(to.path.indexOf('student')!=-1||to.path.indexOf('study')!=-1||to.path.indexOf('stu-test')!=-1){
      if(store.state.user.userinfo.doingMin){
        next();
        return
      } else {
        next({
          path: '/login'
        })
      }
    }else if(to.path.indexOf('teacher')!=-1){
      if(!store.state.user.userinfo.doingMin){
        next();
        return
      } else {
        next({
          path: '/login'
        })
      }
    }
  } else {
    next({
      path: '/login'
    })
  }

})

export default router;
