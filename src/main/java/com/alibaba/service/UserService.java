package com.alibaba.service;


import com.alibaba.domain.User;

import java.util.List;

public interface UserService {

    public List<User> queryUserList();

    User findById(Integer id);

    void update(User user);
}
