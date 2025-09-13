import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceGrowth_rate_idLevelCompoundUniqueInput } from "../inputs/ExperienceGrowth_rate_idLevelCompoundUniqueInput";
import { ExperienceWhereInput } from "../inputs/ExperienceWhereInput";
import { GrowthRatesRelationFilter } from "../inputs/GrowthRatesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ExperienceWhereUniqueInput", {})
export class ExperienceWhereUniqueInput {
  @TypeGraphQL.Field(_type => ExperienceGrowth_rate_idLevelCompoundUniqueInput, {
    nullable: true
  })
  growth_rate_id_level?: ExperienceGrowth_rate_idLevelCompoundUniqueInput | undefined;

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
