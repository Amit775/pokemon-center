import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapUpdateManyWithoutFlagNestedInput } from "../inputs/ItemFlagMapUpdateManyWithoutFlagNestedInput";

@TypeGraphQL.InputType("ItemFlagUpdateInput", {})
export class ItemFlagUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateManyWithoutFlagNestedInput, {
    nullable: true
  })
  flagMap?: ItemFlagMapUpdateManyWithoutFlagNestedInput | undefined;
}
