import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutBerriesInput } from "../inputs/ItemCreateOrConnectWithoutBerriesInput";
import { ItemCreateWithoutBerriesInput } from "../inputs/ItemCreateWithoutBerriesInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedOneWithoutBerriesInput", {})
export class ItemCreateNestedOneWithoutBerriesInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutBerriesInput, {
    nullable: true
  })
  create?: ItemCreateWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutBerriesInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;
}
