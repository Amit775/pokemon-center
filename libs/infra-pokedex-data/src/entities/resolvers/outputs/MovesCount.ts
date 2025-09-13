import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCountContestCombosArgs } from "./args/MovesCountContestCombosArgs";
import { MovesCountContestCombosSecondArgs } from "./args/MovesCountContestCombosSecondArgs";
import { MovesCountFlagMapArgs } from "./args/MovesCountFlagMapArgs";
import { MovesCountKnownMovesArgs } from "./args/MovesCountKnownMovesArgs";
import { MovesCountMachinesArgs } from "./args/MovesCountMachinesArgs";
import { MovesCountMetaArgs } from "./args/MovesCountMetaArgs";
import { MovesCountMetaStatChangesArgs } from "./args/MovesCountMetaStatChangesArgs";
import { MovesCountPokemonMovesArgs } from "./args/MovesCountPokemonMovesArgs";
import { MovesCountSuperContestCombosArgs } from "./args/MovesCountSuperContestCombosArgs";
import { MovesCountSuperContestCombosSecondArgs } from "./args/MovesCountSuperContestCombosSecondArgs";

@TypeGraphQL.ObjectType("MovesCount", {})
export class MovesCount {
  pokemonMoves!: number;
  machines!: number;
  meta!: number;
  metaStatChanges!: number;
  flagMap!: number;
  contestCombos!: number;
  contestCombosSecond!: number;
  superContestCombos!: number;
  superContestCombosSecond!: number;
  knownMoves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonMoves",
    nullable: false
  })
  getPokemonMoves(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountPokemonMovesArgs): number {
    return root.pokemonMoves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "machines",
    nullable: false
  })
  getMachines(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountMachinesArgs): number {
    return root.machines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "meta",
    nullable: false
  })
  getMeta(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountMetaArgs): number {
    return root.meta;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "metaStatChanges",
    nullable: false
  })
  getMetaStatChanges(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountMetaStatChangesArgs): number {
    return root.metaStatChanges;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountFlagMapArgs): number {
    return root.flagMap;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "contestCombos",
    nullable: false
  })
  getContestCombos(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountContestCombosArgs): number {
    return root.contestCombos;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "contestCombosSecond",
    nullable: false
  })
  getContestCombosSecond(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountContestCombosSecondArgs): number {
    return root.contestCombosSecond;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "superContestCombos",
    nullable: false
  })
  getSuperContestCombos(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountSuperContestCombosArgs): number {
    return root.superContestCombos;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "superContestCombosSecond",
    nullable: false
  })
  getSuperContestCombosSecond(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountSuperContestCombosSecondArgs): number {
    return root.superContestCombosSecond;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "knownMoves",
    nullable: false
  })
  getKnownMoves(@TypeGraphQL.Root() root: MovesCount, @TypeGraphQL.Args() args: MovesCountKnownMovesArgs): number {
    return root.knownMoves;
  }
}
