import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutHeldItemsInput } from "../inputs/ItemsCreateOrConnectWithoutHeldItemsInput";
import { ItemsCreateWithoutHeldItemsInput } from "../inputs/ItemsCreateWithoutHeldItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutHeldItemsInput", {})
export class ItemsCreateNestedOneWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutHeldItemsInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutHeldItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
