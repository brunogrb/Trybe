for i in {1..12}
do
    echo "#!/bin/bash" >"exercise${i}.sh"
    chmod +x "exercise${i}.sh"
done