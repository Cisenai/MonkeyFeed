import 'package:flutter/material.dart';
import 'package:monkeyfeed/model/user.dart';
import 'package:monkeyfeed/services/user_service.dart';

class UserProvider with ChangeNotifier {
  late User _user;

  User get user => _user;

  set user(User user) {
    _user = user;
    notifyListeners();
  }

  void login(String email, String password) async {
    User newUser = await UserService.login(email: email, password: password);
    user = newUser;
  }

  void updateUser(Map<String, dynamic> data) async {
    User newUser = await UserService.updateUser(id: user.id, data: data);
    user = newUser;
  }
}