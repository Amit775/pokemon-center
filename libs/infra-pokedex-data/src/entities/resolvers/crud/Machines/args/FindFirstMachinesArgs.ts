import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesOrderByWithRelationInput } from "../../../inputs/MachinesOrderByWithRelationInput";
import { MachinesWhereInput } from "../../../inputs/MachinesWhereInput";
import { MachinesWhereUniqueInput } from "../../../inputs/MachinesWhereUniqueInput";
import { MachinesScalarFieldEnum } from "../../../../enums/MachinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMachinesArgs {
  @TypeGraphQL.Field(_type => MachinesWhereInput, {
    nullable: true
  })
  where?: MachinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MachinesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MachinesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MachinesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MachinesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"machine_number" | "version_group_id" | "item_id" | "move_id"> | undefined;
}
