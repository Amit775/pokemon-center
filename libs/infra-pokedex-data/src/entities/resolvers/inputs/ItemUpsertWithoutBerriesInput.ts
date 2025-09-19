import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutBerriesInput } from "../inputs/ItemCreateWithoutBerriesInput";
import { ItemUpdateWithoutBerriesInput } from "../inputs/ItemUpdateWithoutBerriesInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutBerriesInput", {})
export class ItemUpsertWithoutBerriesInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutBerriesInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutBerriesInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutBerriesInput, {
    nullable: false
  })
  create!: ItemCreateWithoutBerriesInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
