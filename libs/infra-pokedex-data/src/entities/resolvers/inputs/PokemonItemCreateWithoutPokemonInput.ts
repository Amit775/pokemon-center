import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateNestedOneWithoutPokemonItemsInput } from "../inputs/ItemCreateNestedOneWithoutPokemonItemsInput";
import { VersionCreateNestedOneWithoutPokemonItemsInput } from "../inputs/VersionCreateNestedOneWithoutPokemonItemsInput";

@TypeGraphQL.InputType("PokemonItemCreateWithoutPokemonInput", {})
export class PokemonItemCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => VersionCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  version!: VersionCreateNestedOneWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  item!: ItemCreateNestedOneWithoutPokemonItemsInput;
}
