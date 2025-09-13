import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateManyItemInputEnvelope } from "../inputs/ItemGameIndicesCreateManyItemInputEnvelope";
import { ItemGameIndicesCreateOrConnectWithoutItemInput } from "../inputs/ItemGameIndicesCreateOrConnectWithoutItemInput";
import { ItemGameIndicesCreateWithoutItemInput } from "../inputs/ItemGameIndicesCreateWithoutItemInput";
import { ItemGameIndicesScalarWhereInput } from "../inputs/ItemGameIndicesScalarWhereInput";
import { ItemGameIndicesUpdateManyWithWhereWithoutItemInput } from "../inputs/ItemGameIndicesUpdateManyWithWhereWithoutItemInput";
import { ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput } from "../inputs/ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput";
import { ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput } from "../inputs/ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesUpdateManyWithoutItemNestedInput", {})
export class ItemGameIndicesUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateWithoutItemInput], {
    nullable: true
  })
  create?: ItemGameIndicesCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndicesCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndicesCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  set?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: ItemGameIndicesUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemGameIndicesScalarWhereInput[] | undefined;
}
