import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateManyFlingEffectInputEnvelope } from "../inputs/ItemCreateManyFlingEffectInputEnvelope";
import { ItemCreateOrConnectWithoutFlingEffectInput } from "../inputs/ItemCreateOrConnectWithoutFlingEffectInput";
import { ItemCreateWithoutFlingEffectInput } from "../inputs/ItemCreateWithoutFlingEffectInput";
import { ItemScalarWhereInput } from "../inputs/ItemScalarWhereInput";
import { ItemUpdateManyWithWhereWithoutFlingEffectInput } from "../inputs/ItemUpdateManyWithWhereWithoutFlingEffectInput";
import { ItemUpdateWithWhereUniqueWithoutFlingEffectInput } from "../inputs/ItemUpdateWithWhereUniqueWithoutFlingEffectInput";
import { ItemUpsertWithWhereUniqueWithoutFlingEffectInput } from "../inputs/ItemUpsertWithWhereUniqueWithoutFlingEffectInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateManyWithoutFlingEffectNestedInput", {})
export class ItemUpdateManyWithoutFlingEffectNestedInput {
  @TypeGraphQL.Field(_type => [ItemCreateWithoutFlingEffectInput], {
    nullable: true
  })
  create?: ItemCreateWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCreateOrConnectWithoutFlingEffectInput], {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemUpsertWithWhereUniqueWithoutFlingEffectInput], {
    nullable: true
  })
  upsert?: ItemUpsertWithWhereUniqueWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCreateManyFlingEffectInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCreateManyFlingEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  set?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemUpdateWithWhereUniqueWithoutFlingEffectInput], {
    nullable: true
  })
  update?: ItemUpdateWithWhereUniqueWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemUpdateManyWithWhereWithoutFlingEffectInput], {
    nullable: true
  })
  updateMany?: ItemUpdateManyWithWhereWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemScalarWhereInput[] | undefined;
}
