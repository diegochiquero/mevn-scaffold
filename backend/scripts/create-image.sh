#!/usr/bin/env bash

docker rm -f backend_mevn
docker rmi -f backend_mevn
sudo docker image build -t backend_mevn ..

# By specifying #!/usr/bin/env bash
# you specify exactly which interpreter will be used to run the script on a particular system.
# Only run when it goes to production

