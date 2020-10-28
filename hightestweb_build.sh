
docker build -t hightestweb -f DockerFile .
docker run -it --privileged -p 5555:80 --restart always --name=web-app --env LC_ALL=C.UTF-8 --env XDG_RUNTIME_DIR=/tmp/1000-runtime-dir --env WAYLAND_DISPLAY=wayland-0 --env DISPLAY=:0 --env QT_QPA_PLATFORM=wayland -v /dev/galcore:/dev/galcore -v /dev/dri:/dev/dri -v /tmp:/tmp --cap-add CAP_SYS_TTY_CONFIG hightestweb

