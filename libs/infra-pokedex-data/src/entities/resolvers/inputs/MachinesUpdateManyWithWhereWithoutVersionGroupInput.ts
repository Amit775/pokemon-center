import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesScalarWhereInput } from "../inputs/MachinesScalarWhereInput";
import { MachinesUpdateManyMutationInput } from "../inputs/MachinesUpdateManyMutationInput";

@TypeGraphQL.InputType("MachinesUpdateManyWithWhereWithoutVersionGroupInput", {})
export class MachinesUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => MachinesScalarWhereInput, {
    nullable: false
  })
  where!: MachinesScalarWhereInput;

  @TypeGraphQL.Field(_type => MachinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MachinesUpdateManyMutationInput;
}
