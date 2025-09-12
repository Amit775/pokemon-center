import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutFlingEffectInput } from "../inputs/ItemsCreateWithoutFlingEffectInput";
import { ItemsUpdateWithoutFlingEffectInput } from "../inputs/ItemsUpdateWithoutFlingEffectInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpsertWithWhereUniqueWithoutFlingEffectInput", {})
export class ItemsUpsertWithWhereUniqueWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutFlingEffectInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutFlingEffectInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutFlingEffectInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutFlingEffectInput;
}
