import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutMachinesInput } from "../inputs/ItemsUpdateWithoutMachinesInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpdateToOneWithWhereWithoutMachinesInput", {})
export class ItemsUpdateToOneWithWhereWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutMachinesInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutMachinesInput;
}
