import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutFlagMapInput } from "../inputs/ItemsUpdateWithoutFlagMapInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpdateToOneWithWhereWithoutFlagMapInput", {})
export class ItemsUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutFlagMapInput;
}
