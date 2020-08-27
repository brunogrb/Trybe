for i in {1..5}
do
    echo "#!/bin/bash" >"script${i}.js"
    chmod +x "script${i}.js"
done