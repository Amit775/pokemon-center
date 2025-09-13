import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateManyItemInputEnvelope } from "../inputs/ItemFlagMapCreateManyItemInputEnvelope";
import { ItemFlagMapCreateOrConnectWithoutItemInput } from "../inputs/ItemFlagMapCreateOrConnectWithoutItemInput";
import { ItemFlagMapCreateWithoutItemInput } from "../inputs/ItemFlagMapCreateWithoutItemInput";
import { ItemFlagMapScalarWhereInput } from "../inputs/ItemFlagMapScalarWhereInput";
import { ItemFlagMapUpdateManyWithWhereWithoutItemInput } from "../inputs/ItemFlagMapUpdateManyWithWhereWithoutItemInput";
import { ItemFlagMapUpdateWithWhereUniqueWithoutItemInput } from "../inputs/ItemFlagMapUpdateWithWhereUniqueWithoutItemInput";
import { ItemFlagMapUpsertWithWhereUniqueWithoutItemInput } from "../inputs/ItemFlagMapUpsertWithWhereUniqueWithoutItemInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateManyWithoutItemNestedInput", {})
export class ItemFlagMapUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [ItemFlagMapCreateWithoutItemInput], {
    nullable: true
  })
  create?: ItemFlagMapCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: ItemFlagMapCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: ItemFlagMapUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: ItemFlagMapCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereUniqueInput], {
    nullable: true
  })
  set?: ItemFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: ItemFlagMapUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: ItemFlagMapUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemFlagMapScalarWhereInput[] | undefined;
}
