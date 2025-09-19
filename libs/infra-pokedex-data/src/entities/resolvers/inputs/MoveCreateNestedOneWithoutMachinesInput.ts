import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutMachinesInput } from "../inputs/MoveCreateOrConnectWithoutMachinesInput";
import { MoveCreateWithoutMachinesInput } from "../inputs/MoveCreateWithoutMachinesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutMachinesInput", {})
export class MoveCreateNestedOneWithoutMachinesInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: MoveCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
