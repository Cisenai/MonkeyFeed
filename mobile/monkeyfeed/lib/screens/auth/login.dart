import 'package:flutter/material.dart';
import 'package:monkeyfeed/home.dart';
import 'package:monkeyfeed/main.dart';
import 'package:monkeyfeed/provider/user_provider.dart';
import 'package:monkeyfeed/widget/button.dart';
import 'package:monkeyfeed/widget/outlined_button.dart';
import 'package:monkeyfeed/widget/text_input.dart';
import 'package:monkeyfeed/widget/text_input_toggle.dart';
import 'package:provider/provider.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();

  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  void _login() {
    try {
      Provider.of<UserProvider>(context, listen: false)
          .login(_emailController.text, _passwordController.text);

      navigatorKey.currentState?.pushReplacement(
        MaterialPageRoute(builder: (context) => const Home()),
      );
    } catch (e) {
      print(e);
    }
  }

  @override
  void initState() {
    super.initState();
    _emailController.text = 'jorgeamaro@email.com';
    _passwordController.text = 'jorge123';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        key: _formKey,
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset('assets/monkey-icon.png', height: 150),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 50),
                child: Column(
                  children: [
                    TextInput(
                      validator: (value) => null,
                      controller: _emailController,
                      hintText: 'Email',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                    TextInputToggle(
                      validator: (value) => null,
                      controller: _passwordController,
                      hintText: 'Senha',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                    Button(
                      onPressed: () {
                        if (_formKey.currentState!.validate()) {
                          _login();
                        }
                      },
                      text: 'Entrar',
                      margin: const EdgeInsets.symmetric(vertical: 7.5),
                    ),
                  ],
                ),
              ),
              OutlinedFormButton(
                onPressed: _login,
                text: 'Cadastre-se',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
