import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutMachinesInput } from "../inputs/ItemsCreateWithoutMachinesInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutMachinesInput", {})
export class ItemsCreateOrConnectWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutMachinesInput;
}
