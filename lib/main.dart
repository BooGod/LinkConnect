import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:clothing_link/screens/home_screen.dart';
import 'package:clothing_link/screens/auth_screen.dart';
import 'package:clothing_link/blocs/auth_bloc.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Supabase.initialize(
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY',
  );
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => AuthBloc(),
      child: MaterialApp(
        title: 'Clothing Link',
        theme: ThemeData(
          primaryColor: Color(0xFFFF6B6B),
          accentColor: Color(0xFF4ECDC4),
          fontFamily: 'Poppins',
          textTheme: TextTheme(
            headline1: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            bodyText1: TextStyle(fontSize: 16),
          ),
        ),
        home: BlocBuilder<AuthBloc, AuthState>(
          builder: (context, state) {
            if (state is AuthAuthenticated) {
              return HomeScreen();
            }
            return AuthScreen();
          },
        ),
      ),
    );
  }
}