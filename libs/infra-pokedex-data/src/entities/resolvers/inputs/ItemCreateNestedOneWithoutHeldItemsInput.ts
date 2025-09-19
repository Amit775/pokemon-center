import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutHeldItemsInput } from "../inputs/ItemCreateOrConnectWithoutHeldItemsInput";
import { ItemCreateWithoutHeldItemsInput } from "../inputs/ItemCreateWithoutHeldItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedOneWithoutHeldItemsInput", {})
export class ItemCreateNestedOneWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutHeldItemsInput, {
    nullable: true
  })
  create?: ItemCreateWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutHeldItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;
}
