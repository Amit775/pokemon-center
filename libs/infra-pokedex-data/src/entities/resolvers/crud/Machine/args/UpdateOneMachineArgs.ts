import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineUpdateInput } from "../../../inputs/MachineUpdateInput";
import { MachineWhereUniqueInput } from "../../../inputs/MachineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMachineArgs {
  @TypeGraphQL.Field(_type => MachineUpdateInput, {
    nullable: false
  })
  data!: MachineUpdateInput;

  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;
}
