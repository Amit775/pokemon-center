import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutMachinesInput } from "../inputs/MovesCreateOrConnectWithoutMachinesInput";
import { MovesCreateWithoutMachinesInput } from "../inputs/MovesCreateWithoutMachinesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutMachinesInput", {})
export class MovesCreateNestedOneWithoutMachinesInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: MovesCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
