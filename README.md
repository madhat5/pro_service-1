# pro_service-1

### Ref
- https://colorlib.com/wp/support/illdy/
- https://oxfordvp.com/
- https://www.youtube.com/watch?v=sd0grLQ4voU&t=1742s
- https://codex.wordpress.org/Installing_WordPress
- https://code.tutsplus.com/tutorials/using-gulp-for-wordpress-automation--cms-23081

## Assets
- https://www.istockphoto.com/

## Resources
- https://wordpress.org/plugins/dynamic-to-top/
- https://cssminifier.com/
- https://javascript-minifier.com/


Time:
#### 20min
- project research
    - identify Theme
#### 20min
- WP setup
#### 45min
- Site build
#### 60min
- Site build
<!-- #### 25 min
- HostGator setup -->

---

Workflow:
- Install WP (x)
    - create wp-config
    - create DB in phpMyAdmin
    - WP admin setup
- Site build (ox)
- Domain name
    - projectName.com
    - $?
- Hosting
    - HostGator
    - $?

---

DevFlow:
- Create dev branch
    - from master
        - git checkout -b dev
- Pull @ beginning of day
    - from dev
        - git pull origin master
- Create 1 branch per file feature
    - from dev
        - git checkout -b file_feature
- By end of day
    - from branch
        - git add .
        - git commit -m "update details"
        - git push origin file_feature
        - (gitHub
            - Pull request)
        - OR
        - (git push origin dev)
        - git checkout dev
    - from dev
        - (gitHub
          - Pull request)
        - OR
        - (git push origin master)
