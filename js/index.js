var profileComponent = Vue.component('profile-component', {
    name: 'profile-component',
    props: ['person'],
    template: '#profile'
});

var app = new Vue({
    el: '#app',
    component: { profileComponent: profileComponent },
    data: {
        profiles: [
            {
                name: 'Wei Mei',
                imgSrc: './images/person-1.jpg',
                degree: 'Postdoc',
                email: 'meiwei2019@sz.tsinghua.edu.cn',
                graduatedSchool: 'Ph.D. Shanghai Jiao Tong University',
                joinedTime: 'Dr. Mei joined the group in Apr. 2019.'
            },
            {
                name: 'Wenzhan Xu',
                imgSrc: './images/person-2.jpg',
                degree: 'Postdoc',
                email: 'xu.wenzhan @sz.tsinghua.edu.cn',
                graduatedSchool: 'Ph.D. Materials Physics and Chemistry, South China University of Technology',
                joinedTime: 'Dr. Xu joined the group in Spring 2019.'
            },
            {
                name: 'Ping Liu',
                imgSrc: './images/person-3.jpg',
                degree: 'PhD Student',
                email: 'liu-p16@mails.tsinghua.edu.cn',
                graduatedSchool: 'B.S. Materials Science and Engineering, NUAA (2016)',
                joinedTime: 'Ms. Liu joined the group in Fall of 2019.'
            },
            {
                name: 'Cong Zhao',
                imgSrc: './images/person-4.jpg',
                degree: 'Ms student',
                email: 'meiwei2019@sz.tsinghua.edu.cn',
                graduatedSchool: 'zhao-c18@mails.tsinghua.edu.cn',
                joinedTime: 'Cong Zhao joined the group in Fall of 2018.'
            },
            {
                name: 'Chunyun Wang',
                imgSrc: './images/person-5.jpg',
                degree: 'Postdoc',
                email: 'wangchunyun@sz.tsinghua.edu.cn',
                graduatedSchool: 'Ph.D. Materials chemistry and engineering, Hokkaido University (2017)',
                joinedTime: 'Dr. Wang joined the group in Winter 2018.'
            },
            {
                name: 'Yue Yao',
                imgSrc: './images/person-6.jpg',
                degree: 'Ms student',
                email: 'cumtb_yaoyue@163.com/598304907@qq.com',
                graduatedSchool: '',
                joinedTime: 'Yue Yao joined the group in Fall 2018'
            },
        ]
    }
});