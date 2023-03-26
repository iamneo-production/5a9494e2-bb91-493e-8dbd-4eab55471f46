#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
		cd /home/coder/project/workspace/springapp/;
		mvn clean test;
    else
        echo "BEadd_User FAILED";
        echo "BEadd_Theme FAILED";
        echo "BEget_Theme FAILED";
        echo "BEupdate_Theme FAILED";
        echo "BEadd_FoodMenu FAILED";
        echo "BEupdate_FoodMenu FAILED";
    fi
else
    echo "BEadd_User FAILED";
    echo "BEadd_Theme FAILED";
    echo "BEget_Theme FAILED";
    echo "BEupdate_Theme FAILED";
    echo "BEadd_FoodMenu FAILED";
    echo "BEupdate_FoodMenu FAILED";
fi
