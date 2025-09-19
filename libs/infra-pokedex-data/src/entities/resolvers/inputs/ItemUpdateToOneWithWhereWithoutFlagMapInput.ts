import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutFlagMapInput } from "../inputs/ItemUpdateWithoutFlagMapInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutFlagMapInput", {})
export class ItemUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutFlagMapInput;
}
