import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateWithoutFlagInput } from "../inputs/ItemFlagMapCreateWithoutFlagInput";
import { ItemFlagMapUpdateWithoutFlagInput } from "../inputs/ItemFlagMapUpdateWithoutFlagInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput", {})
export class ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateWithoutFlagInput, {
    nullable: false
  })
  update!: ItemFlagMapUpdateWithoutFlagInput;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateWithoutFlagInput, {
    nullable: false
  })
  create!: ItemFlagMapCreateWithoutFlagInput;
}
