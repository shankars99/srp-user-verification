#use conda env with python 3.6.
#if your name is me: than conda activate myenv

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import numpy as np
import tensorflow as tf
import cv2
from tensorflow import keras

root_dir = "/home/shankar/git-repo/srp-user-verification/pyScripts/"
model    = keras.models.load_model(root_dir +"saves")

test_images = root_dir + "../models"

for j in range(6):
    i = str(j+1)

    img_num     = "test" + str(i)
    img=cv2.imread(os.path.join(test_images,img_num+'.jpeg'))

    img=cv2.imread(os.path.join(test_images,img_num+'.jpeg'),cv2.IMREAD_GRAYSCALE)
    new_img=cv2.resize(img,(50,50))
    new_img=new_img.reshape(-1,50,50,1)
    #predict=model.predict(new_img)
    predict = np.argmax(model.predict(new_img) > 0.5).astype("int32")
    #print(predict)

    if predict == 0:
        print("test"+ i +": no mask")
    else:
        print("test"+ i +": wearing mask")
