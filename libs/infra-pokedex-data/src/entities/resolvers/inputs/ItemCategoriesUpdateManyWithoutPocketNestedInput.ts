import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateManyPocketInputEnvelope } from "../inputs/ItemCategoriesCreateManyPocketInputEnvelope";
import { ItemCategoriesCreateOrConnectWithoutPocketInput } from "../inputs/ItemCategoriesCreateOrConnectWithoutPocketInput";
import { ItemCategoriesCreateWithoutPocketInput } from "../inputs/ItemCategoriesCreateWithoutPocketInput";
import { ItemCategoriesScalarWhereInput } from "../inputs/ItemCategoriesScalarWhereInput";
import { ItemCategoriesUpdateManyWithWhereWithoutPocketInput } from "../inputs/ItemCategoriesUpdateManyWithWhereWithoutPocketInput";
import { ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput } from "../inputs/ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput";
import { ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput } from "../inputs/ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput";
import { ItemCategoriesWhereUniqueInput } from "../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateManyWithoutPocketNestedInput", {})
export class ItemCategoriesUpdateManyWithoutPocketNestedInput {
  @TypeGraphQL.Field(_type => [ItemCategoriesCreateWithoutPocketInput], {
    nullable: true
  })
  create?: ItemCategoriesCreateWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesCreateOrConnectWithoutPocketInput], {
    nullable: true
  })
  connectOrCreate?: ItemCategoriesCreateOrConnectWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput], {
    nullable: true
  })
  upsert?: ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateManyPocketInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCategoriesCreateManyPocketInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesWhereUniqueInput], {
    nullable: true
  })
  set?: ItemCategoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemCategoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemCategoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemCategoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput], {
    nullable: true
  })
  update?: ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesUpdateManyWithWhereWithoutPocketInput], {
    nullable: true
  })
  updateMany?: ItemCategoriesUpdateManyWithWhereWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemCategoriesScalarWhereInput[] | undefined;
}
