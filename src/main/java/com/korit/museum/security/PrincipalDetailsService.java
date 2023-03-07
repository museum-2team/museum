package com.korit.museum.security;

import com.korit.museum.entity.UserMst;
import com.korit.museum.repository.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class PrincipalDetailsService implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserMst user = accountRepository.findUserByUsername(username);

        if(user == null){
            throw new UsernameNotFoundException("회원정보를 확인 할 수 없음");
        }
        return new PrincipalDetails(user);
    }
}
