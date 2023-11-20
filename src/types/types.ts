
export interface Player {
    id: number;
    name: string;
    team: string;
    position: string;
    ranking: number;
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
  }
  export type UpdatedPlayer = {
    id: number;
    name: string;
    team: string;
    position: string;
    ranking: number;
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
    centuries: number;
    fifties: number;
  };
  
  export interface T20IPlayer {
    name: string;
    team: string;
    ranking: number;
    matches: number;
    runs:number;
    average:number;
    strikeRate:number;
  }
  
  export interface Notification {
    id: number;
    message: string;
    date: string;
  }