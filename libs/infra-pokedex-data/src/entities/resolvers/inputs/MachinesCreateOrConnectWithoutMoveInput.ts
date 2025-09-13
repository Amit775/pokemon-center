import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateWithoutMoveInput } from "../inputs/MachinesCreateWithoutMoveInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesCreateOrConnectWithoutMoveInput", {})
export class MachinesCreateOrConnectWithoutMoveInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesCreateWithoutMoveInput, {
    nullable: false
  })
  create!: MachinesCreateWithoutMoveInput;
}
