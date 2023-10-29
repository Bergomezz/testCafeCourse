
$BROWSER=@('locally-installed:chrome', 'firefox', 'safari', 'edge')


foreach ($browser in $BROWSER){
  cross-env BROWSER_LIST=$browser testcafe $env:BROWSER_LIST ./tests -s takeOnFails=true
}