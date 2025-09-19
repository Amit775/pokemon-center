import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupOrderByWithRelationInput } from "../../../inputs/VersionGroupOrderByWithRelationInput";
import { VersionGroupWhereInput } from "../../../inputs/VersionGroupWhereInput";
import { VersionGroupWhereUniqueInput } from "../../../inputs/VersionGroupWhereUniqueInput";
import { VersionGroupScalarFieldEnum } from "../../../../enums/VersionGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GenerationVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VersionGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "order"> | undefined;
}
