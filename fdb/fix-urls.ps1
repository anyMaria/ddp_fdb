$map = @{
  '47cb420380be29fa04739e6389afb8c7abce463f.png'='hero-bg.png'
  '16e2a53d0a384640401b18d6c500c3b0274332d2.svg'='wave-top.svg'
  '68b40377e22f5e0e9bd26211efded1b41a4456b2.svg'='presentation-bg.svg'
  'dcd518be1964056a3ef24098adf6a1a55409d871.svg'='banner-presentation-1.svg'
  '602aef60287353a75e5b0418bcf9957614b3a973.svg'='banner-presentation-2.svg'
  'dce0ed317f503607a45f26e640d3be09f9305be7.png'='card-sensibilisation.png'
  '85148a280a35c167395554292e28bd0640d8c7a0.png'='card-soutien.png'
  '768bb35050b5d91d543f644838bafaab4b83749c.png'='card-valorisation.png'
  'b6fd184f782c8a96e7d8b11a05815bd6954c7b5e.png'='valeur-1.png'
  '727f9759c31b4d21033a66d9eca9b9714b94a754.png'='valeur-2.png'
  '92ca4903dafe6e642420699864d9288df05cb111.png'='valeur-3.png'
  '34ef24f2c7a246553fa4b9581dfb74a34915b239.png'='valeur-4.png'
  'c67ebfc30dcb0d80c1589cfbd457d400856a66c6.png'='valeur-5.png'
  '52cdaa74ee59e3d987c2c4e48334a5ee81da2961.png'='valeur-6.png'
  '24df8fb897d70df1e8513b9044c01ac49228a618.png'='valeur-7.png'
  'ae224cd8c651db0bd91af09263e91c2c0a57e9d0.png'='partner-1.png'
  'd2bf55eed63d66cada0b765fe05cf143bf46dfa9.png'='partner-2.png'
  '46d5d5de2f95f53cdbdce933a4180c76e3000804.png'='partner-3.png'
  '6534be79c481a9ec0b310e6885fb2cf1745fcb74.png'='partner-4.png'
  '56e57dff42f78b2023866df1de94793ee0d2f652.png'='partner-5.png'
  '74257ac0ddb2d5e2b92f2a7f927a967840974ca7.svg'='partner-pact.svg'
  '676b528614d49a9407f4bfd9b29a4e48262befc8.svg'='wave-bottom.svg'
  '002ce22f7c52cc0497fa8ff00d41405022221d47.png'='mairie-bg.png'
  'f34a884f8635f9ccd9387023a9ed2af9c18f310a.svg'='banner-mairie-1.svg'
  '9f2404a3674e4c031efb52e185d85b0ca5498dec.svg'='banner-mairie-2.svg'
  '32749f09630fdc5af136a0af3cd9a8f170dfb74f.png'='mairie-veretz.png'
  '1c668b27f0d2e6162729777734ebd78c4e2fec75.svg'='banner-programmation.svg'
  '4e6bf47db7635682b2e460387e90180aaf405637.svg'='filter-icon.svg'
  '449fddfa7e2ceb9eb1b407262d41ead58751197d.png'='prog-card-default.png'
  '020f6fa1f904b3cdc23ce3e6622250cb7b9de497.svg'='bubble-1.svg'
  'e515dc42761a617751b40d64006a875664d0480b.svg'='bubble-2.svg'
  '5b26331acf70d1a89f6b9b654a5818605832a51b.svg'='bubble-3.svg'
  '1c045bff18e2929feb6af6a0c85be831eafe04e5.svg'='bubble-4.svg'
  '0fa006cb7115c1049f4092e95da9a3c30a58d1ef.svg'='bubble-5.svg'
  'd38d06a50e5a13c6d50af5c3c582773cb35cc54b.svg'='bubble-6.svg'
  'beae6c17a89e1c106850158ac7541bb154b54478.svg'='bubble-7.svg'
}
foreach($f in @('index.html','style.css','main.js')) {
  $c = Get-Content $f -Raw
  foreach($k in $map.Keys) {
    $c = $c.Replace("http://localhost:3845/assets/$k", "./assets/$($map[$k])")
  }
  Set-Content $f $c -NoNewline
  Write-Host "Fixed $f"
}
Write-Host "All URLs replaced successfully"