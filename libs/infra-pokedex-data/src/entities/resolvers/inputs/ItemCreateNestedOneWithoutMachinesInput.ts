import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutMachinesInput } from "../inputs/ItemCreateOrConnectWithoutMachinesInput";
import { ItemCreateWithoutMachinesInput } from "../inputs/ItemCreateWithoutMachinesInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedOneWithoutMachinesInput", {})
export class ItemCreateNestedOneWithoutMachinesInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: ItemCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;
}
