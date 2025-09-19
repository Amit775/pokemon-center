import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateManyItemInputEnvelope } from "../inputs/ItemFlagMapCreateManyItemInputEnvelope";
import { ItemFlagMapCreateOrConnectWithoutItemInput } from "../inputs/ItemFlagMapCreateOrConnectWithoutItemInput";
import { ItemFlagMapCreateWithoutItemInput } from "../inputs/ItemFlagMapCreateWithoutItemInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapCreateNestedManyWithoutItemInput", {})
export class ItemFlagMapCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [ItemFlagMapCreateWithoutItemInput], {
    nullable: true
  })
  create?: ItemFlagMapCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: ItemFlagMapCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: ItemFlagMapCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemFlagMapWhereUniqueInput[] | undefined;
}
