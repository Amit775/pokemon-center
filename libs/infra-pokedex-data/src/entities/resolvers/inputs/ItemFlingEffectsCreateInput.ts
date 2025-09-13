import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateNestedManyWithoutFlingEffectInput } from "../inputs/ItemsCreateNestedManyWithoutFlingEffectInput";

@TypeGraphQL.InputType("ItemFlingEffectsCreateInput", {})
export class ItemFlingEffectsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ItemsCreateNestedManyWithoutFlingEffectInput, {
    nullable: true
  })
  items?: ItemsCreateNestedManyWithoutFlingEffectInput | undefined;
}
