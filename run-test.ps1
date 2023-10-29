<<<<<<< HEAD

$BROWSER=@('locally-installed:chrome', 'firefox', 'safari', 'edge')


=======
$BROWSER=@('locally-installed:chrome', 'firefox', 'safari', 'edge')

>>>>>>> webAutomationTesting
foreach ($browser in $BROWSER){
  cross-env BROWSER_LIST=$browser testcafe $env:BROWSER_LIST ./tests -s takeOnFails=true
}