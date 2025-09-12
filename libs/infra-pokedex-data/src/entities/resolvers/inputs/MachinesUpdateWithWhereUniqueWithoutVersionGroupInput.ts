import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesUpdateWithoutVersionGroupInput } from "../inputs/MachinesUpdateWithoutVersionGroupInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class MachinesUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: MachinesUpdateWithoutVersionGroupInput;
}
