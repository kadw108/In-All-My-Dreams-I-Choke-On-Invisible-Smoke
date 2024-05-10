import { Howl } from "howler";

function addMaxVolume(howl: Howl, maxVolume: number) {
    howl["maxVolume"] = maxVolume;
    return howl;
}

const music0: Array<Howl> = [
    addMaxVolume(
        new Howl({
            src: ["./assets/music/gusts_of_wind.mp3"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        1.0
    ),
    addMaxVolume(
        new Howl({
            src: ["./assets/music/birds_noises.mp3"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        1.0
    ),
];

const music2: Array<Howl> = [
    addMaxVolume(
        new Howl({
            src: ["./assets/music/deuteronomy_-_evaporation_-_02_starboarding_ura_(w-_Darius).mp3"],
            // src: ["./assets/music/deuteronomy_-_evaporation_-_02_starboarding_ura_(w-_Darius).mp3", "./assets/music/deuteronomy_-_evaporation_-_02_starboarding_ura_(w-_Darius).ogg"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        0.9
    ),
    addMaxVolume(
        new Howl({
            src: ["./assets/music/birds_noises.mp3"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        1.0
    ),
];

const music1: Array<Howl> = [
    addMaxVolume(
        new Howl({
            src: ["./assets/music/deuteronomy_-_evaporation_-_01_establishing_shot_ura.mp3"],
            // src: ["./assets/music/deuteronomy_-_evaporation_-_01_establishing_shot_ura.mp3", "./assets/music/deuteronomy_-_evaporation_-_01_establishing_shot_ura.ogg"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        1.0
    ),
];

const music3: Array<Howl> = [
    addMaxVolume(
        new Howl({
            src: ["./assets/music/deuteronomy_-_winter,_again,_soon_(vignettes)_-_03_empty_home_on_the_escarpment.mp3"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        1.0
    ),
];

const music4: Array<Howl> = [
    addMaxVolume(
        new Howl({
            src: ["./assets/music/glitchOST_Enchanted_Woods.mp3"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        1.0
    ),
];

const musicMenu: Array<Howl> = [
    addMaxVolume(
        new Howl({
            src: ["./assets/music/Darius_-_caractère_difficile_-_01_c'est_difficile.mp3"],
            loop: true,

            autoplay: false,
            volume: 0,
            html5: true,
            preload: "metadata",
        }),
        1.0
    ),
];

type MusicAreaMap = {
    area: string;
    soundtrack: Array<Howl>;
};
type MusicManager = {
    activeSoundtrack: MusicAreaMap | null;
    soundtracks: Array<MusicAreaMap>;
    mobileCheck: Function;
    activateSoundtrackMusic: Function;
    playSoundtrack: Function;
};

const musicManager: MusicManager = {
    activeSoundtrack: null,
    soundtracks: [
        { area: "earth", soundtrack: music1 },
        { area: "dreamMusicA", soundtrack: music0 },
        { area: "dreamMusicB", soundtrack: music2 },
        { area: "endA", soundtrack: music4 },
        { area: "endB", soundtrack: music3 },
        { area: "menu", soundtrack: musicMenu },
    ],

    // from https://stackoverflow.com/a/11381730 because volume change doesn't work on mobile and you can't detect possibility of volume change directly (https://stackoverflow.com/questions/59417075/javascript-detect-if-volume-can-be-set)
    // but it keeps returning true even though I'm not on mobile? even though the actual site itself works?
    // not using for now
    mobileCheck() {
        let check = false;

        function regex_check(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        };
       
        // @ts-expect-error (for opera)
        regex_check(navigator.userAgent || navigator.vendor || window.opera);

        return check;
    },

    activateSoundtrackMusic: function (newSoundtrack: MusicAreaMap) {
        // console.log("activateSoundtrackMusic " + this.activeSoundtrack.area + " " + newSoundtrack.area);

        // in case you enter the area for another ost before
        // this timeout function executes
        if (this.activeSoundtrack === null || this.activeSoundtrack.area === newSoundtrack.area) {
            for (const howl of newSoundtrack.soundtrack) {
                console.log("activate howl");
                console.log(howl);

                let maxVolume = howl["maxVolume"];
                if (maxVolume === undefined) {
                    maxVolume = 1.0;
                }

                if (howl.state() === "unloaded") {
                    console.log("howl is unloaded. loading.");
                    howl.load();
                }

                if (!howl.playing()) {
                    console.log("howl is not playing. playing now.");
                    howl.play();
                }

                setTimeout(() => {
                    // otherwise volume change not applied
                    // see https://github.com/goldfire/howler.js/issues/1603 ?

                    howl.fade(0, maxVolume, 7000);
                }, 100);
            }
        }
    },

    playSoundtrack: function (snippetTags: Array<string>) {
        console.log(snippetTags);
        let newSoundtrack = this.soundtracks.find((i: MusicAreaMap) => snippetTags.includes(i.area));

        if (newSoundtrack === undefined) {
            newSoundtrack = null;
        } else if (this.activeSoundtrack !== null && newSoundtrack.area === this.activeSoundtrack.area) {
            return;
        }

        // fade out currently playing ost
        if (this.activeSoundtrack !== null) {
            console.log("fading out " + this.activeSoundtrack.area);
            this.activeSoundtrack.soundtrack.forEach((howl) => {
                howl.fade(howl.volume(), 0, 3000);
                console.log("3 seconds to fade out howl");
                console.log(howl);
            });
        }

        this.activeSoundtrack = newSoundtrack;

        if (newSoundtrack !== null) {
            // fade in new ost
            setTimeout(() => {
                console.log("playing " + newSoundtrack.area);
                this.activateSoundtrackMusic(newSoundtrack);
            }, 1000);
        }
    },
};

export { musicManager };
