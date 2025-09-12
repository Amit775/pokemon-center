import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceOrderByWithAggregationInput } from "../../../inputs/ExperienceOrderByWithAggregationInput";
import { ExperienceScalarWhereWithAggregatesInput } from "../../../inputs/ExperienceScalarWhereWithAggregatesInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";
import { ExperienceScalarFieldEnum } from "../../../../enums/ExperienceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  where?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExperienceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExperienceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"growth_rate_id" | "level" | "experience">;

  @TypeGraphQL.Field(_type => ExperienceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExperienceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
