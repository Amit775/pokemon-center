import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateWithoutItemInput } from "../inputs/ItemFlagMapCreateWithoutItemInput";
import { ItemFlagMapUpdateWithoutItemInput } from "../inputs/ItemFlagMapUpdateWithoutItemInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapUpsertWithWhereUniqueWithoutItemInput", {})
export class ItemFlagMapUpsertWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateWithoutItemInput, {
    nullable: false
  })
  update!: ItemFlagMapUpdateWithoutItemInput;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateWithoutItemInput, {
    nullable: false
  })
  create!: ItemFlagMapCreateWithoutItemInput;
}
