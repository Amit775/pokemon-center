import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectOrderByWithRelationInput } from "../../../inputs/ContestEffectOrderByWithRelationInput";
import { ContestEffectWhereInput } from "../../../inputs/ContestEffectWhereInput";
import { ContestEffectWhereUniqueInput } from "../../../inputs/ContestEffectWhereUniqueInput";
import { ContestEffectScalarFieldEnum } from "../../../../enums/ContestEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  where?: ContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContestEffectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestEffectWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContestEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "appeal" | "jam"> | undefined;
}
