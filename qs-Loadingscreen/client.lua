RegisterNetEvent('loadingScreen:setPlayerName')
AddEventHandler('loadingScreen:setPlayerName', function(name)
    SendNUIMessage({
        type = 'SET_PLAYER_NAME',
        name = name
    })
end)

AddEventHandler('onClientMapStart', function()
    TriggerServerEvent('loadingScreen:requestPlayerName')
end)
