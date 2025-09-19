import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutBerriesInput } from "../inputs/ItemUpdateWithoutBerriesInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutBerriesInput", {})
export class ItemUpdateToOneWithWhereWithoutBerriesInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutBerriesInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutBerriesInput;
}
