import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCountBerryFlavorsArgs } from "./args/TypeCountBerryFlavorsArgs";
import { TypeCountEfficacyArgs } from "./args/TypeCountEfficacyArgs";
import { TypeCountEfficacyTargetArgs } from "./args/TypeCountEfficacyTargetArgs";
import { TypeCountFormTypesArgs } from "./args/TypeCountFormTypesArgs";
import { TypeCountGameIndicesArgs } from "./args/TypeCountGameIndicesArgs";
import { TypeCountKnownMoveTypesArgs } from "./args/TypeCountKnownMoveTypesArgs";
import { TypeCountMovesArgs } from "./args/TypeCountMovesArgs";
import { TypeCountNaturalGiftTypesArgs } from "./args/TypeCountNaturalGiftTypesArgs";
import { TypeCountNaturesArgs } from "./args/TypeCountNaturesArgs";
import { TypeCountNaturesIncreasedArgs } from "./args/TypeCountNaturesIncreasedArgs";
import { TypeCountPartyTypesArgs } from "./args/TypeCountPartyTypesArgs";
import { TypeCountPokemonTypesArgs } from "./args/TypeCountPokemonTypesArgs";

@TypeGraphQL.ObjectType("TypeCount", {})
export class TypeCount {
  moves!: number;
  pokemonTypes!: number;
  formTypes!: number;
  gameIndices!: number;
  efficacy!: number;
  efficacyTarget!: number;
  berryFlavors!: number;
  natures!: number;
  naturesIncreased!: number;
  knownMoveTypes!: number;
  partyTypes!: number;
  naturalGiftTypes!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonTypes",
    nullable: false
  })
  getPokemonTypes(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountPokemonTypesArgs): number {
    return root.pokemonTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "formTypes",
    nullable: false
  })
  getFormTypes(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountFormTypesArgs): number {
    return root.formTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "gameIndices",
    nullable: false
  })
  getGameIndices(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountGameIndicesArgs): number {
    return root.gameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "efficacy",
    nullable: false
  })
  getEfficacy(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountEfficacyArgs): number {
    return root.efficacy;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "efficacyTarget",
    nullable: false
  })
  getEfficacyTarget(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountEfficacyTargetArgs): number {
    return root.efficacyTarget;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "berryFlavors",
    nullable: false
  })
  getBerryFlavors(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountBerryFlavorsArgs): number {
    return root.berryFlavors;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "natures",
    nullable: false
  })
  getNatures(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountNaturesArgs): number {
    return root.natures;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturesIncreased",
    nullable: false
  })
  getNaturesIncreased(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountNaturesIncreasedArgs): number {
    return root.naturesIncreased;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "knownMoveTypes",
    nullable: false
  })
  getKnownMoveTypes(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountKnownMoveTypesArgs): number {
    return root.knownMoveTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "partyTypes",
    nullable: false
  })
  getPartyTypes(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountPartyTypesArgs): number {
    return root.partyTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturalGiftTypes",
    nullable: false
  })
  getNaturalGiftTypes(@TypeGraphQL.Root() root: TypeCount, @TypeGraphQL.Args() args: TypeCountNaturalGiftTypesArgs): number {
    return root.naturalGiftTypes;
  }
}
