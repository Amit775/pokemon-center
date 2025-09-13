import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutBerriesInput } from "../inputs/ItemsCreateWithoutBerriesInput";
import { ItemsUpdateWithoutBerriesInput } from "../inputs/ItemsUpdateWithoutBerriesInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutBerriesInput", {})
export class ItemsUpsertWithoutBerriesInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutBerriesInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutBerriesInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutBerriesInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutBerriesInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
