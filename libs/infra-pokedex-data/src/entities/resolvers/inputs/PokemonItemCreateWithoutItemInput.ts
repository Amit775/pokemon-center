import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutItemsInput } from "../inputs/PokemonCreateNestedOneWithoutItemsInput";
import { VersionCreateNestedOneWithoutPokemonItemsInput } from "../inputs/VersionCreateNestedOneWithoutPokemonItemsInput";

@TypeGraphQL.InputType("PokemonItemCreateWithoutItemInput", {})
export class PokemonItemCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutItemsInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutItemsInput;

  @TypeGraphQL.Field(_type => VersionCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  version!: VersionCreateNestedOneWithoutPokemonItemsInput;
}
