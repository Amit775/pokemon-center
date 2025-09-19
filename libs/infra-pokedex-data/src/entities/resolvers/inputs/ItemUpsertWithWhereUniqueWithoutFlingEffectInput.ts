import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutFlingEffectInput } from "../inputs/ItemCreateWithoutFlingEffectInput";
import { ItemUpdateWithoutFlingEffectInput } from "../inputs/ItemUpdateWithoutFlingEffectInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpsertWithWhereUniqueWithoutFlingEffectInput", {})
export class ItemUpsertWithWhereUniqueWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutFlingEffectInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutFlingEffectInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutFlingEffectInput, {
    nullable: false
  })
  create!: ItemCreateWithoutFlingEffectInput;
}
