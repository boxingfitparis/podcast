"use strict";


const $el =
{
    playlist: $("#playlist"),
    episodes: $("#episodes")
};

let globalsVar = {};


// pour flux.js
const emissionsFlux =
{
    FceCult_GrainMoudre:		'http://radiofrance-podcast.net/podcast09/rss_10175.xml',
    FceMus_TPastureau:			'http://radiofrance-podcast.net/podcast09/rss_18141.xml',
    FceInter_MarcheHistoire:	'http://radiofrance-podcast.net/podcast09/rss_11739.xml',
    RMC_RoutesEurope:			'https://podcast.rmc.fr/channel368/RMCInfochannel368.xml'
/*        
    RFI:						'http://www.rfi.fr/ameriques/rss',
    RTL:						'https://www.rtl.fr/podcast/une-lettre-d-amerique.xml',
    test:						'http://feeds.soundcloud.com/users/soundcloud:users:30994369/sounds.rss',
    hasard:						'beforedemisterb.lepodcast.fr/rss',	 //'http://beforedemisterb.lepodcast.fr/rss',
    gamekult:					'https://feeds.soundcloud.com/users/soundcloud:users:110920201/sounds.rss'
 */
    };


let emissionsEpisodes = {},
    playlist = {};

