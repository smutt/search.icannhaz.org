#!/usr/bin/bash

OMINDEX=/usr/bin/omindex
LOGFILE=/var/log/xapian-omega/omega-index.log

HAM='soac/aso soac/alac soac/ccnso soac/gac soac/gnso soac/rssac soac/rzerc soac/ssac icann/ceo icann/cor icann/ext icann/ge icann/octo icann/other'
HTML='icann/board icann/blog/ icann/announcements'

echo "$(date -I) Begin Indexing"  >> $LOGFILE

for SITE in $HAM;
do            
    echo $SITE
    $OMINDEX -S -Rvp -D /var/lib/xapian-omega/data/default -U /ham/$SITE /var/www/html/search.icannhaz.org/ham/$SITE |grep -v "already indexed"|tee -a $LOGFILE
done

for SITE in $HTML;
do
    echo $SITE
    $OMINDEX -S -Rvp -D /var/lib/xapian-omega/data/default -U /html/$SITE /var/www/html/search.icannhaz.org/html/$SITE |grep -v "already indexed"|tee -a $LOGFILE
done

