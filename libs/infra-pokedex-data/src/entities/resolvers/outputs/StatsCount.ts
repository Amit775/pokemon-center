import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCountCharacteristicsArgs } from "./args/StatsCountCharacteristicsArgs";
import { StatsCountMoveMetaStatChangesArgs } from "./args/StatsCountMoveMetaStatChangesArgs";
import { StatsCountNaturesArgs } from "./args/StatsCountNaturesArgs";
import { StatsCountNaturesIncreasedArgs } from "./args/StatsCountNaturesIncreasedArgs";
import { StatsCountPokemonStatsArgs } from "./args/StatsCountPokemonStatsArgs";

@TypeGraphQL.ObjectType("StatsCount", {})
export class StatsCount {
  pokemonStats!: number;
  moveMetaStatChanges!: number;
  characteristics!: number;
  natures!: number;
  naturesIncreased!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonStats",
    nullable: false
  })
  getPokemonStats(@TypeGraphQL.Root() root: StatsCount, @TypeGraphQL.Args() args: StatsCountPokemonStatsArgs): number {
    return root.pokemonStats;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moveMetaStatChanges",
    nullable: false
  })
  getMoveMetaStatChanges(@TypeGraphQL.Root() root: StatsCount, @TypeGraphQL.Args() args: StatsCountMoveMetaStatChangesArgs): number {
    return root.moveMetaStatChanges;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "characteristics",
    nullable: false
  })
  getCharacteristics(@TypeGraphQL.Root() root: StatsCount, @TypeGraphQL.Args() args: StatsCountCharacteristicsArgs): number {
    return root.characteristics;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "natures",
    nullable: false
  })
  getNatures(@TypeGraphQL.Root() root: StatsCount, @TypeGraphQL.Args() args: StatsCountNaturesArgs): number {
    return root.natures;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturesIncreased",
    nullable: false
  })
  getNaturesIncreased(@TypeGraphQL.Root() root: StatsCount, @TypeGraphQL.Args() args: StatsCountNaturesIncreasedArgs): number {
    return root.naturesIncreased;
  }
}
