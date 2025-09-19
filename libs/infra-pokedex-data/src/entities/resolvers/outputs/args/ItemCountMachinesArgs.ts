import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineWhereInput } from "../../inputs/MachineWhereInput";

@TypeGraphQL.ArgsType()
export class ItemCountMachinesArgs {
  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  where?: MachineWhereInput | undefined;
}
