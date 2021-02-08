VERSION='master' #Repository version
REPO='FriendsOfFlarum/username-request' #Repository name
LOCALE='resources/locale' #Locale folder path

YAML1='en.yml' #Original yaml file
YAML2='fof-username-request.yml' #Translated yaml file

TEMP_DIR=`mktemp -d`
WORK_DIR=`pwd`

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

if ! [ -x "$(command -v same-yaml)" ]; then
  echo 'Hiba: same-yaml nincs telepítve!' >&2
  exit 1
fi

if [[ ! "$TEMP_DIR" || ! -d "$TEMP_DIR" ]]; then
  exit 1
fi

function cleanup {
  rm -rf "$TEMP_DIR"
}

cd "$TEMP_DIR"

curl -s -L "https://raw.githubusercontent.com/$REPO/$VERSION/$LOCALE/$YAML1" > $YAML1

RC=0

  echo "Tesztelés $YAML1 <> $YAML2:"
  same-yaml --ref "$YAML1" --tra "$WORK_DIR/locale/$YAML2"
  if [ $YAML1 = $YAML2 ]
  then
    RC=1
    printf "${RED}⨉ hiba${NC}\n"
  else
    printf "${GREEN}✓ siker${NC}\n"
  fi

trap cleanup EXIT

exit $RC