package com.korit.museum.security;

import com.korit.museum.entity.RoleDtl;
import com.korit.museum.entity.RoleMst;
import com.korit.museum.entity.UserMst;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;


public class PrincipalDetails implements UserDetails {

    @Getter
    private final UserMst user;

    public PrincipalDetails(UserMst user) {
        this.user = user;
    }

    //User 권한 리턴
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        ArrayList<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

        List<RoleDtl> roleDtlList = user.getRoleDtl();
        for(int i = 0; i < roleDtlList.size(); i++) {
            RoleDtl dtl = roleDtlList.get(i); //1 = user 2 = admin
            RoleMst roleMst = dtl.getRoleMst();
            String roleName = roleMst.getRoleName();

            GrantedAuthority role = new GrantedAuthority(){
                @Override
                public String getAuthority(){
                    return roleName;
                }
            };
            authorities.add(role);
        }
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    public String getName(){
        return user.getName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
