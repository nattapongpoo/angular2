import { Component, OnInit } from '@angular/core';
import { SSVideoSource, SSPlayerConfig, SSLoopType } from '../../common/components/ss-video-player/ss-video-player.component';

@Component({
    templateUrl: 'video-player-page.html'
})
export class VideoPlayerPageComponent implements OnInit {
    playerConfig: SSPlayerConfig = {
        loop: SSLoopType.All,
        autoplay: false,
        trackUser: true
    };
    videoSources: SSVideoSource[] = [];

    ngOnInit(): void {
        this.videoSources = [
            {
                title: 'GTR 34',
                poster: 'https://s.isanook.com/au/0/ui/17/87599/gtr06.jpg',
                source: 'https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg'
            },
            {
                title: 'Mclaren',
                poster: 'https://hips.hearstapps.com/hmg-prod/images/2014-mclaren-p1-1111-charlie-magee-1531410060.jpg',
                source: 'http://ftp.nluug.nl/pub/graphics/blender/demo/movies/Sintel.2010.1080p.mkv'
            },
            {
                title: 'Lamborghini',
                poster: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/09_18_refresh/s/gw_hura_s_02_m.jpg',
                source: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
            }
        ];
    }
}
