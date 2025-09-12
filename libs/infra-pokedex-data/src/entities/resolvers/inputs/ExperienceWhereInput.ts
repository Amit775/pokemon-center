import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesRelationFilter } from "../inputs/GrowthRatesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ExperienceWhereInput", {})
export class ExperienceWhereInput {
  @TypeGraphQL.Field(_type => [ExperienceWhereInput], {
    nullable: true
  })
  AND?: ExperienceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereInput], {
    nullable: true
  })
  OR?: ExperienceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereInput], {
    nullable: true
  })
  NOT?: ExperienceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  growth_rate_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  experience?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesRelationFilter, {
    nullable: true
  })
  growthRate?: GrowthRatesRelationFilter | undefined;
}
