import Express from 'express';
import userController from './controllers/userController';
import PostController from './controllers/PostController';

const app = Express();
app.use(Express.json());
const PORT = 8000;

app.get('/', (req,res) => {
  return res.send({ message: 'Hello World' });
})

app.post('/createUser', userController.createUser);
app.post('/createPost', PostController.createPost);
app.get('/listPost/:id', PostController.listPost);
app.put('/updatePost', PostController.updatePost);
app.delete('/deletePost/:id', PostController.deletePost);

app.listen(PORT, () => {
  console.log(`Server os running ${PORT}`);
});