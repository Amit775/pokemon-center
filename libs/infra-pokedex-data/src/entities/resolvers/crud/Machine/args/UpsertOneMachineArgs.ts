import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineCreateInput } from "../../../inputs/MachineCreateInput";
import { MachineUpdateInput } from "../../../inputs/MachineUpdateInput";
import { MachineWhereUniqueInput } from "../../../inputs/MachineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMachineArgs {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineCreateInput, {
    nullable: false
  })
  create!: MachineCreateInput;

  @TypeGraphQL.Field(_type => MachineUpdateInput, {
    nullable: false
  })
  update!: MachineUpdateInput;
}
