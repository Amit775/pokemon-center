import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineScalarWhereInput } from "../inputs/MachineScalarWhereInput";
import { MachineUpdateManyMutationInput } from "../inputs/MachineUpdateManyMutationInput";

@TypeGraphQL.InputType("MachineUpdateManyWithWhereWithoutItemInput", {})
export class MachineUpdateManyWithWhereWithoutItemInput {
  @TypeGraphQL.Field(_type => MachineScalarWhereInput, {
    nullable: false
  })
  where!: MachineScalarWhereInput;

  @TypeGraphQL.Field(_type => MachineUpdateManyMutationInput, {
    nullable: false
  })
  data!: MachineUpdateManyMutationInput;
}
