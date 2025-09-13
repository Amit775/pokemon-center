import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsOrderByWithRelationInput } from "../../../inputs/VersionsOrderByWithRelationInput";
import { VersionsWhereInput } from "../../../inputs/VersionsWhereInput";
import { VersionsWhereUniqueInput } from "../../../inputs/VersionsWhereUniqueInput";
import { VersionsScalarFieldEnum } from "../../../../enums/VersionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class VersionGroupsVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VersionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_group_id" | "identifier"> | undefined;
}
