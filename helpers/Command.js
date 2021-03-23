module.exports =
    class Command {
        constructor(commander) {
            this.commandsExecuted = [];
            this.commander = commander;
        }

        execute(action) {
            this.commandsExecuted.push(action);
            this.commander[action]();
        }
    }
