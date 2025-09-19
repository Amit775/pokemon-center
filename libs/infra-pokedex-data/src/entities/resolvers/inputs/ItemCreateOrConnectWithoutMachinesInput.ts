import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutMachinesInput } from "../inputs/ItemCreateWithoutMachinesInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutMachinesInput", {})
export class ItemCreateOrConnectWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: ItemCreateWithoutMachinesInput;
}
