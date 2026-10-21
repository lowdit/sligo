module github.com/lowdit/sligo/exampleSite

go 1.20

require (
	github.com/lowdit/minigo v0.0.0-20261021091104-26827336ca0d // indirect
	github.com/lowdit/sligo v0.3.1 // indirect
)

// CI Pages : thème Sligo = checkout courant (favicons, assets module).
replace github.com/lowdit/sligo => ../
