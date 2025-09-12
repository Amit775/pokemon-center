import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesCreateInput } from "../../../inputs/MachinesCreateInput";
import { MachinesUpdateInput } from "../../../inputs/MachinesUpdateInput";
import { MachinesWhereUniqueInput } from "../../../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMachinesArgs {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesCreateInput, {
    nullable: false
  })
  create!: MachinesCreateInput;

  @TypeGraphQL.Field(_type => MachinesUpdateInput, {
    nullable: false
  })
  update!: MachinesUpdateInput;
}
