# pro_service-1

### Ref docs
- https://colorlib.com/wp/support/illdy/
- https://oxfordvp.com/
- https://www.youtube.com/watch?v=sd0grLQ4voU&t=1742s
- https://codex.wordpress.org/Installing_WordPress


Time:
#### 20min
- project research
    - identify Theme
#### 20min
- WP setup
<!-- #### 25 min
- HostGator setup -->

---

Workflow:
- Install WP (x)
    - create wp-config
    - create DB in phpMyAdmin
    - WP:
        - mald
        - BxP3!n8fgEGXP%pxdi
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
