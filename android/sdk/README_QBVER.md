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
1. 修改 maven_for_qb.gradle 的version字段
    1. 如果是snapshot，修改 url 增加 `-snapshots` 后缀
1. 编译
    1. 带inspector的包：
        1. 修改gradle.properties： V8_COMPONENT=7.7.299.17-qb-debug
        1. ./gradlew clean assembleRelease
        1. ./gradlew android-sdk:publishMyPubPublicationToMavenRepository
    1. 不带inspector的包：
        1. 修改gradle.properties： V8_COMPONENT=7.7.299.17
        1. ./gradlew clean assembleRelease
        1. ./gradlew android-sdk:publishMyPubPublicationToMavenRepository
        
### 发布记录

#### qb-2.14.1-1

- fix(android): fix setTextColor not working
5b497621 iPel <pel20121221@gmail.com> on 2022/11/3 at 15:40
committed on 2022/11/7 at 16:03

#### dev-qb-2.14.1.0-linjangyang09211446

- fix(android): empty text node height compatibility
b919e681 iPel <pel20121221@gmail.com> on 2022/9/20 at 14:39
committed on 2022/9/20 at 15:57

- fix(core): revert hippy1.x compatible code
fe187dfd zoomchan-cxj <zoom_chan@163.com> on 2022/9/16 at 18:02
committed on 2022/9/16 at 18:19
