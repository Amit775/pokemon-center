import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesCreateInput } from "../../../inputs/MachinesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMachinesArgs {
  @TypeGraphQL.Field(_type => MachinesCreateInput, {
    nullable: false
  })
  data!: MachinesCreateInput;
}
