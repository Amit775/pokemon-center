import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateManyPocketInputEnvelope } from "../inputs/ItemCategoryCreateManyPocketInputEnvelope";
import { ItemCategoryCreateOrConnectWithoutPocketInput } from "../inputs/ItemCategoryCreateOrConnectWithoutPocketInput";
import { ItemCategoryCreateWithoutPocketInput } from "../inputs/ItemCategoryCreateWithoutPocketInput";
import { ItemCategoryScalarWhereInput } from "../inputs/ItemCategoryScalarWhereInput";
import { ItemCategoryUpdateManyWithWhereWithoutPocketInput } from "../inputs/ItemCategoryUpdateManyWithWhereWithoutPocketInput";
import { ItemCategoryUpdateWithWhereUniqueWithoutPocketInput } from "../inputs/ItemCategoryUpdateWithWhereUniqueWithoutPocketInput";
import { ItemCategoryUpsertWithWhereUniqueWithoutPocketInput } from "../inputs/ItemCategoryUpsertWithWhereUniqueWithoutPocketInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryUpdateManyWithoutPocketNestedInput", {})
export class ItemCategoryUpdateManyWithoutPocketNestedInput {
  @TypeGraphQL.Field(_type => [ItemCategoryCreateWithoutPocketInput], {
    nullable: true
  })
  create?: ItemCategoryCreateWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryCreateOrConnectWithoutPocketInput], {
    nullable: true
  })
  connectOrCreate?: ItemCategoryCreateOrConnectWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryUpsertWithWhereUniqueWithoutPocketInput], {
    nullable: true
  })
  upsert?: ItemCategoryUpsertWithWhereUniqueWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryCreateManyPocketInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCategoryCreateManyPocketInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereUniqueInput], {
    nullable: true
  })
  set?: ItemCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryUpdateWithWhereUniqueWithoutPocketInput], {
    nullable: true
  })
  update?: ItemCategoryUpdateWithWhereUniqueWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryUpdateManyWithWhereWithoutPocketInput], {
    nullable: true
  })
  updateMany?: ItemCategoryUpdateManyWithWhereWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemCategoryScalarWhereInput[] | undefined;
}
