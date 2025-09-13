import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsOrderByWithRelationInput } from "../../../inputs/VersionGroupsOrderByWithRelationInput";
import { VersionGroupsWhereInput } from "../../../inputs/VersionGroupsWhereInput";
import { VersionGroupsWhereUniqueInput } from "../../../inputs/VersionGroupsWhereUniqueInput";
import { VersionGroupsScalarFieldEnum } from "../../../../enums/VersionGroupsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VersionGroupsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "order"> | undefined;
}
