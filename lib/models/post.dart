import 'package:flutter/foundation.dart';

class Post {
  final String id;
  final String userId;
  final String imageUrl;
  final String description;
  final String? affiliateLink;
  final int likes;
  final int comments;
  final DateTime createdAt;

  Post({
    required this.id,
    required this.userId,
    required this.imageUrl,
    required this.description,
    this.affiliateLink,
    required this.likes,
    required this.comments,
    required this.createdAt,
  });

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      userId: json['user_id'],
      imageUrl: json['image_url'],
      description: json['description'],
      affiliateLink: json['affiliate_link'],
      likes: json['likes'],
      comments: json['comments'],
      createdAt: DateTime.parse(json['created_at']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'image_url': imageUrl,
      'description': description,
      'affiliate_link': affiliateLink,
      'likes': likes,
      'comments': comments,
      'created_at': createdAt.toIso8601String(),
    };
  }
}