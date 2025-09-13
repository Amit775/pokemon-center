import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateNestedOneWithoutPokemonItemsInput } from "../inputs/ItemsCreateNestedOneWithoutPokemonItemsInput";
import { VersionsCreateNestedOneWithoutPokemonItemsInput } from "../inputs/VersionsCreateNestedOneWithoutPokemonItemsInput";

@TypeGraphQL.InputType("PokemonItemsCreateWithoutPokemonInput", {})
export class PokemonItemsCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => VersionsCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  version!: VersionsCreateNestedOneWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  item!: ItemsCreateNestedOneWithoutPokemonItemsInput;
}
