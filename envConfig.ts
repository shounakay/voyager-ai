// Needed for using env in root config files, basically outside of next runtiime

import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)