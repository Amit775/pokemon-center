import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeOrderByWithRelationInput } from "../../../inputs/ContestTypeOrderByWithRelationInput";
import { ContestTypeWhereInput } from "../../../inputs/ContestTypeWhereInput";
import { ContestTypeWhereUniqueInput } from "../../../inputs/ContestTypeWhereUniqueInput";
import { ContestTypeScalarFieldEnum } from "../../../../enums/ContestTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  where?: ContestTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContestTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContestTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
