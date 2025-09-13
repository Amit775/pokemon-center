import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesWhereInput } from "../../inputs/MachinesWhereInput";

@TypeGraphQL.ArgsType()
export class MovesCountMachinesArgs {
  @TypeGraphQL.Field(_type => MachinesWhereInput, {
    nullable: true
  })
  where?: MachinesWhereInput | undefined;
}
