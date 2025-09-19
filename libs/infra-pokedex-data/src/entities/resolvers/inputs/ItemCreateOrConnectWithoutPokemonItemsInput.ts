import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutPokemonItemsInput } from "../inputs/ItemCreateWithoutPokemonItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutPokemonItemsInput", {})
export class ItemCreateOrConnectWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutPokemonItemsInput;
}
