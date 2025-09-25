import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCountContestCombosArgs } from "./args/MoveCountContestCombosArgs";
import { MoveCountContestCombosSecondArgs } from "./args/MoveCountContestCombosSecondArgs";
import { MoveCountFlagMapArgs } from "./args/MoveCountFlagMapArgs";
import { MoveCountKnownMovesArgs } from "./args/MoveCountKnownMovesArgs";
import { MoveCountMachinesArgs } from "./args/MoveCountMachinesArgs";
import { MoveCountMetaArgs } from "./args/MoveCountMetaArgs";
import { MoveCountPokemonMovesArgs } from "./args/MoveCountPokemonMovesArgs";
import { MoveCountSuperContestCombosArgs } from "./args/MoveCountSuperContestCombosArgs";
import { MoveCountSuperContestCombosSecondArgs } from "./args/MoveCountSuperContestCombosSecondArgs";

@TypeGraphQL.ObjectType("MoveCount", {})
export class MoveCount {
  pokemonMoves!: number;
  machines!: number;
  meta!: number;
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
  getPokemonMoves(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountPokemonMovesArgs): number {
    return root.pokemonMoves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "machines",
    nullable: false
  })
  getMachines(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountMachinesArgs): number {
    return root.machines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "meta",
    nullable: false
  })
  getMeta(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountMetaArgs): number {
    return root.meta;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountFlagMapArgs): number {
    return root.flagMap;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "contestCombos",
    nullable: false
  })
  getContestCombos(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountContestCombosArgs): number {
    return root.contestCombos;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "contestCombosSecond",
    nullable: false
  })
  getContestCombosSecond(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountContestCombosSecondArgs): number {
    return root.contestCombosSecond;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "superContestCombos",
    nullable: false
  })
  getSuperContestCombos(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountSuperContestCombosArgs): number {
    return root.superContestCombos;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "superContestCombosSecond",
    nullable: false
  })
  getSuperContestCombosSecond(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountSuperContestCombosSecondArgs): number {
    return root.superContestCombosSecond;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "knownMoves",
    nullable: false
  })
  getKnownMoves(@TypeGraphQL.Root() root: MoveCount, @TypeGraphQL.Args() args: MoveCountKnownMovesArgs): number {
    return root.knownMoves;
  }
}
