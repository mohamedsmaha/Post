import { Post_Lang } from "./Components/Post";
import { Share_Lang } from "./Components/Share";
import { A_Words } from "./Words/A_Words";
import { B_Words } from "./Words/B_Words";
import { C_Words } from "./Words/C_Words";
import { D_Words } from "./Words/D_Words";
import { F_Words } from "./Words/F_Words";
import { G_Words } from "./Words/G_Words";
import { J_Words } from "./Words/J_Words";
import { L_Words } from "./Words/L_Words";
import { M_Words } from "./Words/M_Words";
import { O_Words } from "./Words/O_Words";
import { P_Words } from "./Words/P_Words";
import { Q_Words } from "./Words/Q_Words";
import { S_Words } from "./Words/S_Words";
import { V_Words } from "./Words/V_Words";

type components = Share_Lang & Post_Lang

export type Languagh_model =A_Words & B_Words & C_Words & D_Words & F_Words & G_Words & J_Words & L_Words & M_Words &
O_Words & P_Words & Q_Words & S_Words & V_Words & components

