import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateManyPocketInputEnvelope } from "../inputs/ItemCategoriesCreateManyPocketInputEnvelope";
import { ItemCategoriesCreateOrConnectWithoutPocketInput } from "../inputs/ItemCategoriesCreateOrConnectWithoutPocketInput";
import { ItemCategoriesCreateWithoutPocketInput } from "../inputs/ItemCategoriesCreateWithoutPocketInput";
import { ItemCategoriesWhereUniqueInput } from "../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoriesCreateNestedManyWithoutPocketInput", {})
export class ItemCategoriesCreateNestedManyWithoutPocketInput {
  @TypeGraphQL.Field(_type => [ItemCategoriesCreateWithoutPocketInput], {
    nullable: true
  })
  create?: ItemCategoriesCreateWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesCreateOrConnectWithoutPocketInput], {
    nullable: true
  })
  connectOrCreate?: ItemCategoriesCreateOrConnectWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateManyPocketInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCategoriesCreateManyPocketInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemCategoriesWhereUniqueInput[] | undefined;
}
