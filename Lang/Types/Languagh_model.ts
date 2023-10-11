
import { Post_Lang } from "./Components/Post";
import { Rightbar_Lang } from "./Components/Rightbar";
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
import { Y_Words } from "./Words/Y_Words";
import { W_Words } from "./Words/W_Words";
import { H_Words } from "./Words/H_Words";
import { U_Words } from "./Words/U_Words";
import { E_Words } from "./Words/E_Words";
import { R_Words } from "./Words/R_Words";

type components = Share_Lang & Post_Lang & Rightbar_Lang

export type Words = A_Words | B_Words | C_Words | D_Words | E_Words | F_Words | G_Words | H_Words | J_Words | L_Words |
M_Words | W_Words| O_Words | P_Words | Q_Words | R_Words | S_Words | U_Words | V_Words | Y_Words
type Words_Object = {[key in Words] : string}

export type Languagh_model = components & Words_Object
