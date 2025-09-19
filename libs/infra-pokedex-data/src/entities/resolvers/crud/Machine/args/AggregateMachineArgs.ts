import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineOrderByWithRelationInput } from "../../../inputs/MachineOrderByWithRelationInput";
import { MachineWhereInput } from "../../../inputs/MachineWhereInput";
import { MachineWhereUniqueInput } from "../../../inputs/MachineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMachineArgs {
  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  where?: MachineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MachineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MachineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: true
  })
  cursor?: MachineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
