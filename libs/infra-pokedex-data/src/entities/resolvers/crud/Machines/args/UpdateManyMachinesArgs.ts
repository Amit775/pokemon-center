import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesUpdateManyMutationInput } from "../../../inputs/MachinesUpdateManyMutationInput";
import { MachinesWhereInput } from "../../../inputs/MachinesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMachinesArgs {
  @TypeGraphQL.Field(_type => MachinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MachinesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MachinesWhereInput, {
    nullable: true
  })
  where?: MachinesWhereInput | undefined;
}
