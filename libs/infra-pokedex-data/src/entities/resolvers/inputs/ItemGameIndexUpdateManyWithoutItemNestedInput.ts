import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateManyItemInputEnvelope } from "../inputs/ItemGameIndexCreateManyItemInputEnvelope";
import { ItemGameIndexCreateOrConnectWithoutItemInput } from "../inputs/ItemGameIndexCreateOrConnectWithoutItemInput";
import { ItemGameIndexCreateWithoutItemInput } from "../inputs/ItemGameIndexCreateWithoutItemInput";
import { ItemGameIndexScalarWhereInput } from "../inputs/ItemGameIndexScalarWhereInput";
import { ItemGameIndexUpdateManyWithWhereWithoutItemInput } from "../inputs/ItemGameIndexUpdateManyWithWhereWithoutItemInput";
import { ItemGameIndexUpdateWithWhereUniqueWithoutItemInput } from "../inputs/ItemGameIndexUpdateWithWhereUniqueWithoutItemInput";
import { ItemGameIndexUpsertWithWhereUniqueWithoutItemInput } from "../inputs/ItemGameIndexUpsertWithWhereUniqueWithoutItemInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexUpdateManyWithoutItemNestedInput", {})
export class ItemGameIndexUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [ItemGameIndexCreateWithoutItemInput], {
    nullable: true
  })
  create?: ItemGameIndexCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndexCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: ItemGameIndexUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndexCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  set?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: ItemGameIndexUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: ItemGameIndexUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemGameIndexScalarWhereInput[] | undefined;
}
