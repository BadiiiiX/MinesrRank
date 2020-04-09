/**
 * @name MinesrRank
 * @displayName MinesrRank
 * @website https://www.illutech.fr/
 * @source https://raw.githubusercontent.com/BadiiiiX/MinesrRank/master/MinesrRank.plugin.js
 * @donate https://paypal.me/badiiix
 * @invite Njzk3JS
 * @authorId 259362855462240256
 */

var MinesrRank = (() => {
    const config = {
        info: {
            name: "MinesrRank",
            authors: [{
                name: "BadiiiX",
                github_username: "BadiiiiX",
                twitter_username: "BadiiiX_IT",
                discord_id: "259362855462240256"
            }],
            description: "!rank le discord de Minestrator",
            version: "1.0.0",
            github: "https://github.com/BadiiiiX/MinesrRank",
            github_raw: "https://raw.githubusercontent.com/BadiiiiX/MinesrRank/master/MinesrRank.plugin.js"
        },
        defaultConfig: [
        ],
    };

    return !global.ZeresPluginLibrary ? class {
        constructor() {
            this._config = config;
        }
        getName() {
            return config.info.name;
        }
        getAuthor() {
            return config.info.authors.map(a => a.name).join(", ");
        }
        getDescription() {
            return config.info.description;
        }
        getVersion() {
            return config.info.version;
        }
        load() {
            const title = "Il te manque une lib :-/";
            const ModalStack = BdApi.findModuleByProps("push", "update", "pop", "popWithKey");
            const TextElement = BdApi.findModuleByProps("Sizes", "Weights");
            const ConfirmationModal = BdApi.findModule(m => m.defaultProps && m.key && m.key() == "confirm-modal");
            if (!ModalStack || !ConfirmationModal || !TextElement) return BdApi.alert(title, `The library plugin needed for ${config.info.name} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
            ModalStack.push(function (props) {
                return BdApi.React.createElement(ConfirmationModal, Object.assign({
                    header: title,
                    children: [BdApi.React.createElement(TextElement, {
                        color: TextElement.Colors.PRIMARY,
                        children: [`The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`]
                    })],
                    red: false,
                    confirmText: "Télécharger !",
                    cancelText: "Annuler",
                    onConfirm: () => {
                        require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                            if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                            await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                        });
                    }
                }, props));
            });
        }
        start() {}
        stop() {}
    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            const {
                PluginUtilities
            } = Api;

            return class MinesrRank extends Plugin {
                onStart() {
                    //ça arrive ça, vous êtes pas prêts (C'est pour une grosse maj, en tête que j'ai)
                    PluginUtilities.addStyle("MinesrRank-css", `
                    `);
                }


                onSwitch() {



                    if (document.querySelector(".ranksrButton") == null) {
                        //J'vais en faire un beau tab, avec un if in et ez, bon, je parle tout seul là ?
                        this.MinesrRankPlugin = document.getElementsByClassName("toolbar-1t6TWx")[0].insertAdjacentHTML("beforeBegin", `
                                <div tabindex="0" class="iconWrapper-2OrFZ1 da-iconWrapper clickable-3rdHwn da-clickable focusable-1YV_-H da-focusable ranksrButton" role="button" aria-label="Fermer le Support" onClick="
                                ZeresPluginLibrary.DiscordModules.MessageActions.sendMessage(ZeresPluginLibrary.DiscordModules.SelectedChannelStore.getChannelId(), {
                                    'content': '!rank'
                                });
                                ">
                                    <svg aria-hidden="true" class="icon-22AiRD da-icon" name="Ré-ouvrir le salon" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"/>
                                    </svg>
                                </div>`);
                    }
                }


                initialize() {


                }


                onStop() {
                    PluginUtilities.removeStyle("MinesrRank-css");
                }



                getSettingsPanel() {
                    return this.buildSettingsPanel().getElement();
                }
            };
        };
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();

// By BadiiiX, Merci de ne pas modifier ce fichier, par simple respect au dev, demande-lui avant, en plus askip, il est cool.
