import 'package:flutter/material.dart';
import 'package:clothing_link/models/post.dart';
import 'package:cached_network_image/cached_network_image.dart';

class PostCard extends StatelessWidget {
  final Post post;

  const PostCard({Key? key, required this.post}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CachedNetworkImage(
            imageUrl: post.imageUrl,
            placeholder: (context, url) => CircularProgressIndicator(),
            errorWidget: (context, url, error) => Icon(Icons.error),
          ),
          Padding(
            padding: EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  post.description,
                  style: Theme.of(context).textTheme.bodyText1,
                ),
                SizedBox(height: 8),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Icon(Icons.favorite_border),
                        SizedBox(width: 4),
                        Text('${post.likes}'),
                        SizedBox(width: 16),
                        Icon(Icons.comment_outlined),
                        SizedBox(width: 4),
                        Text('${post.comments}'),
                      ],
                    ),
                    ElevatedButton(
                      onPressed: () {
                        // TODO: Implement reveal link functionality
                      },
                      child: Text('Reveal Link (2€)'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}