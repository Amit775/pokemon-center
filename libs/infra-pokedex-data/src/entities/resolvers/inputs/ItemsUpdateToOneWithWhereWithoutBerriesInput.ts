import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutBerriesInput } from "../inputs/ItemsUpdateWithoutBerriesInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpdateToOneWithWhereWithoutBerriesInput", {})
export class ItemsUpdateToOneWithWhereWithoutBerriesInput {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutBerriesInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutBerriesInput;
}
