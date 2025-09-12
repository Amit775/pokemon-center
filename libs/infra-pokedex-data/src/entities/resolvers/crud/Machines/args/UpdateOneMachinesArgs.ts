import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesUpdateInput } from "../../../inputs/MachinesUpdateInput";
import { MachinesWhereUniqueInput } from "../../../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMachinesArgs {
  @TypeGraphQL.Field(_type => MachinesUpdateInput, {
    nullable: false
  })
  data!: MachinesUpdateInput;

  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;
}
