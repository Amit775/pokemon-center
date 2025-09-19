import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutFlagMapInput } from "../inputs/ItemCreateWithoutFlagMapInput";
import { ItemUpdateWithoutFlagMapInput } from "../inputs/ItemUpdateWithoutFlagMapInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutFlagMapInput", {})
export class ItemUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
