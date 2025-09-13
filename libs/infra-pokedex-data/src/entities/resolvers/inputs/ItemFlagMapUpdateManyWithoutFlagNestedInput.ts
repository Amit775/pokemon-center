import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateManyFlagInputEnvelope } from "../inputs/ItemFlagMapCreateManyFlagInputEnvelope";
import { ItemFlagMapCreateOrConnectWithoutFlagInput } from "../inputs/ItemFlagMapCreateOrConnectWithoutFlagInput";
import { ItemFlagMapCreateWithoutFlagInput } from "../inputs/ItemFlagMapCreateWithoutFlagInput";
import { ItemFlagMapScalarWhereInput } from "../inputs/ItemFlagMapScalarWhereInput";
import { ItemFlagMapUpdateManyWithWhereWithoutFlagInput } from "../inputs/ItemFlagMapUpdateManyWithWhereWithoutFlagInput";
import { ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput } from "../inputs/ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput";
import { ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput } from "../inputs/ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateManyWithoutFlagNestedInput", {})
export class ItemFlagMapUpdateManyWithoutFlagNestedInput {
  @TypeGraphQL.Field(_type => [ItemFlagMapCreateWithoutFlagInput], {
    nullable: true
  })
  create?: ItemFlagMapCreateWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapCreateOrConnectWithoutFlagInput], {
    nullable: true
  })
  connectOrCreate?: ItemFlagMapCreateOrConnectWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput], {
    nullable: true
  })
  upsert?: ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateManyFlagInputEnvelope, {
    nullable: true
  })
  createMany?: ItemFlagMapCreateManyFlagInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput], {
    nullable: true
  })
  update?: ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapUpdateManyWithWhereWithoutFlagInput], {
    nullable: true
  })
  updateMany?: ItemFlagMapUpdateManyWithWhereWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemFlagMapScalarWhereInput[] | undefined;
}
