import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateManyFlingEffectInputEnvelope } from "../inputs/ItemsCreateManyFlingEffectInputEnvelope";
import { ItemsCreateOrConnectWithoutFlingEffectInput } from "../inputs/ItemsCreateOrConnectWithoutFlingEffectInput";
import { ItemsCreateWithoutFlingEffectInput } from "../inputs/ItemsCreateWithoutFlingEffectInput";
import { ItemsScalarWhereInput } from "../inputs/ItemsScalarWhereInput";
import { ItemsUpdateManyWithWhereWithoutFlingEffectInput } from "../inputs/ItemsUpdateManyWithWhereWithoutFlingEffectInput";
import { ItemsUpdateWithWhereUniqueWithoutFlingEffectInput } from "../inputs/ItemsUpdateWithWhereUniqueWithoutFlingEffectInput";
import { ItemsUpsertWithWhereUniqueWithoutFlingEffectInput } from "../inputs/ItemsUpsertWithWhereUniqueWithoutFlingEffectInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateManyWithoutFlingEffectNestedInput", {})
export class ItemsUpdateManyWithoutFlingEffectNestedInput {
  @TypeGraphQL.Field(_type => [ItemsCreateWithoutFlingEffectInput], {
    nullable: true
  })
  create?: ItemsCreateWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsCreateOrConnectWithoutFlingEffectInput], {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsUpsertWithWhereUniqueWithoutFlingEffectInput], {
    nullable: true
  })
  upsert?: ItemsUpsertWithWhereUniqueWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateManyFlingEffectInputEnvelope, {
    nullable: true
  })
  createMany?: ItemsCreateManyFlingEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  set?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsUpdateWithWhereUniqueWithoutFlingEffectInput], {
    nullable: true
  })
  update?: ItemsUpdateWithWhereUniqueWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsUpdateManyWithWhereWithoutFlingEffectInput], {
    nullable: true
  })
  updateMany?: ItemsUpdateManyWithWhereWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemsScalarWhereInput[] | undefined;
}
