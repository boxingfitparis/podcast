"use strict";

$(_ =>
{

    let emission = "FceCult_GrainMoudre";

    // fonctions
    function XML2HTML(XMLresponse)
    {
        let $XMLresponse = $(XMLresponse),
            episodes,
            content = '';
        emissionsEpisodes[emission] =
        {
            dates: [],
            durations: [],
            flows: [],
            titles: []
        };
        episodes = emissionsEpisodes[emission];

        episodes.title = $XMLresponse.find("channel title")[0].innerHTML;

        for (let date of $XMLresponse.find("item pubDate"))
        {
            episodes.dates.push(date.innerHTML);
        }
        for (let duration of $XMLresponse.find("item itunes\\:duration"))
        {
            episodes.durations.push(duration.innerHTML);
        }
        for (let title of $XMLresponse.find("item title"))
        {
            episodes.titles.push(title.innerHTML);
        }
        for (let flow of $XMLresponse.find("item enclosure"))
        {
            episodes.flows.push(flow.getAttribute('url'));
        }

        content += episodes.dates.map((d, i) =>
                `<li>
                    <button data-date="${d}" data-duration="${episodes.durations[i]}" data-flow="${episodes.flows[i]}">
                    ${episodes.titles[i]}
                    </button>
                </li>`
            )
        .join('');

        $el.episodes.html(`<ul class="episodes">${content}</ul>`);
    }
    


    // événements
    $(document).on('click', '.episodes li' , function()
    {
        $(this).clone().appendTo($el.playlist);
    });

    $.ajax(
    {
        type: "GET",
        url: emissionsFlux[emission],
        cache: false,
        dataType: "xml",
        success: XML2HTML
    });
});

