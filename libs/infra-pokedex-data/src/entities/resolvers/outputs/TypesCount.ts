import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCountBerryFlavorsArgs } from "./args/TypesCountBerryFlavorsArgs";
import { TypesCountEfficacyArgs } from "./args/TypesCountEfficacyArgs";
import { TypesCountEfficacyTargetArgs } from "./args/TypesCountEfficacyTargetArgs";
import { TypesCountFormTypesArgs } from "./args/TypesCountFormTypesArgs";
import { TypesCountGameIndicesArgs } from "./args/TypesCountGameIndicesArgs";
import { TypesCountKnownMoveTypesArgs } from "./args/TypesCountKnownMoveTypesArgs";
import { TypesCountMovesArgs } from "./args/TypesCountMovesArgs";
import { TypesCountNaturalGiftTypesArgs } from "./args/TypesCountNaturalGiftTypesArgs";
import { TypesCountNaturesArgs } from "./args/TypesCountNaturesArgs";
import { TypesCountNaturesIncreasedArgs } from "./args/TypesCountNaturesIncreasedArgs";
import { TypesCountPartyTypesArgs } from "./args/TypesCountPartyTypesArgs";
import { TypesCountPokemonTypesArgs } from "./args/TypesCountPokemonTypesArgs";

@TypeGraphQL.ObjectType("TypesCount", {})
export class TypesCount {
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
  getMoves(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonTypes",
    nullable: false
  })
  getPokemonTypes(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountPokemonTypesArgs): number {
    return root.pokemonTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "formTypes",
    nullable: false
  })
  getFormTypes(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountFormTypesArgs): number {
    return root.formTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "gameIndices",
    nullable: false
  })
  getGameIndices(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountGameIndicesArgs): number {
    return root.gameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "efficacy",
    nullable: false
  })
  getEfficacy(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountEfficacyArgs): number {
    return root.efficacy;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "efficacyTarget",
    nullable: false
  })
  getEfficacyTarget(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountEfficacyTargetArgs): number {
    return root.efficacyTarget;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "berryFlavors",
    nullable: false
  })
  getBerryFlavors(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountBerryFlavorsArgs): number {
    return root.berryFlavors;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "natures",
    nullable: false
  })
  getNatures(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountNaturesArgs): number {
    return root.natures;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturesIncreased",
    nullable: false
  })
  getNaturesIncreased(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountNaturesIncreasedArgs): number {
    return root.naturesIncreased;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "knownMoveTypes",
    nullable: false
  })
  getKnownMoveTypes(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountKnownMoveTypesArgs): number {
    return root.knownMoveTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "partyTypes",
    nullable: false
  })
  getPartyTypes(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountPartyTypesArgs): number {
    return root.partyTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturalGiftTypes",
    nullable: false
  })
  getNaturalGiftTypes(@TypeGraphQL.Root() root: TypesCount, @TypeGraphQL.Args() args: TypesCountNaturalGiftTypesArgs): number {
    return root.naturalGiftTypes;
  }
}
