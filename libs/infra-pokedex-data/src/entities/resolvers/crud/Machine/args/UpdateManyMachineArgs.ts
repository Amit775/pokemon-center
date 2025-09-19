import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineUpdateManyMutationInput } from "../../../inputs/MachineUpdateManyMutationInput";
import { MachineWhereInput } from "../../../inputs/MachineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMachineArgs {
  @TypeGraphQL.Field(_type => MachineUpdateManyMutationInput, {
    nullable: false
  })
  data!: MachineUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  where?: MachineWhereInput | undefined;
}
