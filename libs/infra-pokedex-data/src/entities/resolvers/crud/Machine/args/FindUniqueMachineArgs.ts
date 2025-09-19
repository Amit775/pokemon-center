import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineWhereUniqueInput } from "../../../inputs/MachineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMachineArgs {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;
}
