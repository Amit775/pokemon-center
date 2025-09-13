import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutPokemonItemsInput } from "../inputs/ItemsCreateWithoutPokemonItemsInput";
import { ItemsUpdateWithoutPokemonItemsInput } from "../inputs/ItemsUpdateWithoutPokemonItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutPokemonItemsInput", {})
export class ItemsUpsertWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
