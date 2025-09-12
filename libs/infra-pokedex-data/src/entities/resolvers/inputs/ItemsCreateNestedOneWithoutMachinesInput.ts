import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutMachinesInput } from "../inputs/ItemsCreateOrConnectWithoutMachinesInput";
import { ItemsCreateWithoutMachinesInput } from "../inputs/ItemsCreateWithoutMachinesInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutMachinesInput", {})
export class ItemsCreateNestedOneWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
