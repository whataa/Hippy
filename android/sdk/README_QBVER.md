## QBHippy版本维护说明

> 由于QB需要使用X5的V8，因此不能直接使用官方版本

QB的版本基于来自官方版本对应TAG，从其 checkout 分支并发布QB自己的版本
当有新的 fix / feature 时，cherry-pick 到该分支并发布新的QB版本即可

这里约定下QB版本格式：
```java
qb-<official-tag>-<No>[-debug][-SNAPSHOT]
// 例如：
// - qb-2.14.1-1
// - qb-2.14.1-2
// - qb-2.14.1-3-SNAPSHOT
```

### 发布方式：
1. 编译
    1. 带inspector的包：
        1. 修改gradle.properties： V8_COMPONENT=7.7.299.17-qb-debug
        1. ./gradlew clean android-sdk:publishMyPubPublicationToMavenRepository --no-daemon
    1. 不带inspector的包：
        1. 修改gradle.properties： V8_COMPONENT=7.7.299.17-qb
        1. ./gradlew clean android-sdk:publishMyPubPublicationToMavenRepository --no-daemon
        
### 发布记录

#### qn-2.14.1-5

- fix(android): remove web url judge in fetchResourceWithUri  
88f78250 siguangli <siguangli@qq.com> on 2023/1/5 at 16:56

- feat(core): allow all schemas to dynamic load (#2829)  
4afac8a5 Zoom Chan <zoom_chan@163.com> on 2022/12/29 at 17:35

- feat(core): dynamic loading support custom protocols  
dbe81e95 pollyzhang <pollyzhang@tencent.com> on 2022/12/27 at 17:34

#### qb-2.14.1-4

- fix(core): fix reload bug for inspector  
1acb4600 pollyzhang <pollyzhang@tencent.com> on 2022/12/7 at 15:31

#### qb-2.14.1-3

- fix(core): fix the problem of multi-threading at startup time  
1c494f09 pollyzhang <pollyzhang@tencent.com> on 2022/11/28 at 18:28

- fix(android): fix JSI cause JNI local reference table overflow  
(cherry picked from commit c7aae48290790f31e8f2783de9ffd390981b4df7)

#### qb-2.14.1-2

- fix(android): horizontal scroll view smoothScrollToPage crash  
cb03bf73 maxli <maxli@tencent.com> on 2022/11/22 at 11:06

#### qb-2.14.1-1

- fix(android): fix setTextColor not working  
5b497621 iPel <pel20121221@gmail.com> on 2022/11/3 at 15:40

#### dev-qb-2.14.1.0-linjangyang09211446

- fix(android): empty text node height compatibility  
b919e681 iPel <pel20121221@gmail.com> on 2022/9/20 at 14:39

- fix(core): revert hippy1.x compatible code  
fe187dfd zoomchan-cxj <zoom_chan@163.com> on 2022/9/16 at 18:02
