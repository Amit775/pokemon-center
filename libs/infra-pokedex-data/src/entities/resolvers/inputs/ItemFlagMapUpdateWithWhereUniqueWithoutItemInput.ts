import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapUpdateWithoutItemInput } from "../inputs/ItemFlagMapUpdateWithoutItemInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateWithWhereUniqueWithoutItemInput", {})
export class ItemFlagMapUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateWithoutItemInput, {
    nullable: false
  })
  data!: ItemFlagMapUpdateWithoutItemInput;
}
