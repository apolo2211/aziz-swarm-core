import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import SelfHealingAgent from './agents/healing.agent.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, '../public')));

// Initialisation de l'Agent d'Auto-réparation
const azizHealer = new SelfHealingAgent();

// Route pour vérifier l'état des agents (Auto-Healing)
app.get('/api/status', (req, res) => {
    res.json({ system: "AZIZ", status: "Active", agent_healing: "Vigilant" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`[AZIZ] Swarm activé sur http://localhost:${PORT}`);
});