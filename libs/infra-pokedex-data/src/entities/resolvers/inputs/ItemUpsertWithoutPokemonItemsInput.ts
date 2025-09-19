import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutPokemonItemsInput } from "../inputs/ItemCreateWithoutPokemonItemsInput";
import { ItemUpdateWithoutPokemonItemsInput } from "../inputs/ItemUpdateWithoutPokemonItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutPokemonItemsInput", {})
export class ItemUpsertWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
