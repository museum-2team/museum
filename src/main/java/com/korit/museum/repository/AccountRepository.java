package com.korit.museum.repository;

import com.korit.museum.entity.UserMst;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {

    public String findUserByUsername (String username);

    public int findUserByUserId (int userId);

    public int saveUser (UserMst userMst);

    public int saveRole (UserMst userMst);

}
