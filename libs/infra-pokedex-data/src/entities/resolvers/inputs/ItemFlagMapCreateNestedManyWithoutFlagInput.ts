import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateManyFlagInputEnvelope } from "../inputs/ItemFlagMapCreateManyFlagInputEnvelope";
import { ItemFlagMapCreateOrConnectWithoutFlagInput } from "../inputs/ItemFlagMapCreateOrConnectWithoutFlagInput";
import { ItemFlagMapCreateWithoutFlagInput } from "../inputs/ItemFlagMapCreateWithoutFlagInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapCreateNestedManyWithoutFlagInput", {})
export class ItemFlagMapCreateNestedManyWithoutFlagInput {
  @TypeGraphQL.Field(_type => [ItemFlagMapCreateWithoutFlagInput], {
    nullable: true
  })
  create?: ItemFlagMapCreateWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapCreateOrConnectWithoutFlagInput], {
    nullable: true
  })
  connectOrCreate?: ItemFlagMapCreateOrConnectWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateManyFlagInputEnvelope, {
    nullable: true
  })
  createMany?: ItemFlagMapCreateManyFlagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemFlagMapWhereUniqueInput[] | undefined;
}
