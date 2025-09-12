import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutFlingEffectInput } from "../inputs/ItemsUpdateWithoutFlingEffectInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateWithWhereUniqueWithoutFlingEffectInput", {})
export class ItemsUpdateWithWhereUniqueWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutFlingEffectInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutFlingEffectInput;
}
