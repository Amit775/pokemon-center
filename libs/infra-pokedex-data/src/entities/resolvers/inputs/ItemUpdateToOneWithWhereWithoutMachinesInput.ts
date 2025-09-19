import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutMachinesInput } from "../inputs/ItemUpdateWithoutMachinesInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutMachinesInput", {})
export class ItemUpdateToOneWithWhereWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutMachinesInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutMachinesInput;
}
