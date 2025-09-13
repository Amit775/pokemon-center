import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsOrderByWithRelationInput } from "../../../inputs/ContestEffectsOrderByWithRelationInput";
import { ContestEffectsWhereInput } from "../../../inputs/ContestEffectsWhereInput";
import { ContestEffectsWhereUniqueInput } from "../../../inputs/ContestEffectsWhereUniqueInput";
import { ContestEffectsScalarFieldEnum } from "../../../../enums/ContestEffectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyContestEffectsArgs {
  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  where?: ContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContestEffectsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContestEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "appeal" | "jam"> | undefined;
}
