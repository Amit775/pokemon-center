import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutPokemonItemsInput } from "../inputs/ItemsCreateWithoutPokemonItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutPokemonItemsInput", {})
export class ItemsCreateOrConnectWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutPokemonItemsInput;
}
