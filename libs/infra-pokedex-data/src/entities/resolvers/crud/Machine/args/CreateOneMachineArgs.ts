import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineCreateInput } from "../../../inputs/MachineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMachineArgs {
  @TypeGraphQL.Field(_type => MachineCreateInput, {
    nullable: false
  })
  data!: MachineCreateInput;
}
