import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutBerriesInput } from "../inputs/ItemsCreateOrConnectWithoutBerriesInput";
import { ItemsCreateWithoutBerriesInput } from "../inputs/ItemsCreateWithoutBerriesInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutBerriesInput", {})
export class ItemsCreateNestedOneWithoutBerriesInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutBerriesInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutBerriesInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
