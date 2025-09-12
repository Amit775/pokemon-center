import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutFlagMapInput } from "../inputs/ItemsCreateWithoutFlagMapInput";
import { ItemsUpdateWithoutFlagMapInput } from "../inputs/ItemsUpdateWithoutFlagMapInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutFlagMapInput", {})
export class ItemsUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
