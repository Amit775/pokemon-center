import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateWithoutItemInput } from "../inputs/ItemFlagMapCreateWithoutItemInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapCreateOrConnectWithoutItemInput", {})
export class ItemFlagMapCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateWithoutItemInput, {
    nullable: false
  })
  create!: ItemFlagMapCreateWithoutItemInput;
}
