import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCountCharacteristicsArgs } from "./args/StatCountCharacteristicsArgs";
import { StatCountMoveMetaStatChangesArgs } from "./args/StatCountMoveMetaStatChangesArgs";
import { StatCountNaturesArgs } from "./args/StatCountNaturesArgs";
import { StatCountNaturesIncreasedArgs } from "./args/StatCountNaturesIncreasedArgs";
import { StatCountPokemonStatsArgs } from "./args/StatCountPokemonStatsArgs";

@TypeGraphQL.ObjectType("StatCount", {})
export class StatCount {
  pokemonStats!: number;
  moveMetaStatChanges!: number;
  characteristics!: number;
  natures!: number;
  naturesIncreased!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonStats",
    nullable: false
  })
  getPokemonStats(@TypeGraphQL.Root() root: StatCount, @TypeGraphQL.Args() args: StatCountPokemonStatsArgs): number {
    return root.pokemonStats;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moveMetaStatChanges",
    nullable: false
  })
  getMoveMetaStatChanges(@TypeGraphQL.Root() root: StatCount, @TypeGraphQL.Args() args: StatCountMoveMetaStatChangesArgs): number {
    return root.moveMetaStatChanges;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "characteristics",
    nullable: false
  })
  getCharacteristics(@TypeGraphQL.Root() root: StatCount, @TypeGraphQL.Args() args: StatCountCharacteristicsArgs): number {
    return root.characteristics;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "natures",
    nullable: false
  })
  getNatures(@TypeGraphQL.Root() root: StatCount, @TypeGraphQL.Args() args: StatCountNaturesArgs): number {
    return root.natures;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturesIncreased",
    nullable: false
  })
  getNaturesIncreased(@TypeGraphQL.Root() root: StatCount, @TypeGraphQL.Args() args: StatCountNaturesIncreasedArgs): number {
    return root.naturesIncreased;
  }
}
