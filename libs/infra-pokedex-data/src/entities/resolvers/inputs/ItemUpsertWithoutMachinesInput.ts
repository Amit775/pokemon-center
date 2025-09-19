import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutMachinesInput } from "../inputs/ItemCreateWithoutMachinesInput";
import { ItemUpdateWithoutMachinesInput } from "../inputs/ItemUpdateWithoutMachinesInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutMachinesInput", {})
export class ItemUpsertWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutMachinesInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: ItemCreateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
