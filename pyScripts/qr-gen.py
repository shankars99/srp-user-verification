import sys
import qrcode

data = ""
labels = ["Name:", "Aadhar Number:", "Date of Birth:", "Address:", "Phone num:", "Email:"]

for i in range(len(labels)):
    data += labels[i] + sys.argv[i+1] + ";"

filename = "models/"+sys.argv[1]+".png"
img = qrcode.make(data)
img.save(filename)

sys.stdout.flush()
