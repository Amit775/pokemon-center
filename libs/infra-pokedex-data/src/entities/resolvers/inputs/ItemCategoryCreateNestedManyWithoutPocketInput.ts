import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateManyPocketInputEnvelope } from "../inputs/ItemCategoryCreateManyPocketInputEnvelope";
import { ItemCategoryCreateOrConnectWithoutPocketInput } from "../inputs/ItemCategoryCreateOrConnectWithoutPocketInput";
import { ItemCategoryCreateWithoutPocketInput } from "../inputs/ItemCategoryCreateWithoutPocketInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryCreateNestedManyWithoutPocketInput", {})
export class ItemCategoryCreateNestedManyWithoutPocketInput {
  @TypeGraphQL.Field(_type => [ItemCategoryCreateWithoutPocketInput], {
    nullable: true
  })
  create?: ItemCategoryCreateWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryCreateOrConnectWithoutPocketInput], {
    nullable: true
  })
  connectOrCreate?: ItemCategoryCreateOrConnectWithoutPocketInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryCreateManyPocketInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCategoryCreateManyPocketInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemCategoryWhereUniqueInput[] | undefined;
}
