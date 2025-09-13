import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutItemsInput } from "../inputs/PokemonCreateNestedOneWithoutItemsInput";
import { VersionsCreateNestedOneWithoutPokemonItemsInput } from "../inputs/VersionsCreateNestedOneWithoutPokemonItemsInput";

@TypeGraphQL.InputType("PokemonItemsCreateWithoutItemInput", {})
export class PokemonItemsCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutItemsInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutItemsInput;

  @TypeGraphQL.Field(_type => VersionsCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  version!: VersionsCreateNestedOneWithoutPokemonItemsInput;
}
