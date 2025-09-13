import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutMachinesInput } from "../inputs/ItemsCreateWithoutMachinesInput";
import { ItemsUpdateWithoutMachinesInput } from "../inputs/ItemsUpdateWithoutMachinesInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutMachinesInput", {})
export class ItemsUpsertWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutMachinesInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
