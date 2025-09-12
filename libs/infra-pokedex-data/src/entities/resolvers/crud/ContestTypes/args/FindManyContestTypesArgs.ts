import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesOrderByWithRelationInput } from "../../../inputs/ContestTypesOrderByWithRelationInput";
import { ContestTypesWhereInput } from "../../../inputs/ContestTypesWhereInput";
import { ContestTypesWhereUniqueInput } from "../../../inputs/ContestTypesWhereUniqueInput";
import { ContestTypesScalarFieldEnum } from "../../../../enums/ContestTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContestTypesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContestTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
