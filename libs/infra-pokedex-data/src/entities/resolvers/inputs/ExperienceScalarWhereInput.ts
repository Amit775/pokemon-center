import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ExperienceScalarWhereInput", {})
export class ExperienceScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExperienceScalarWhereInput], {
    nullable: true
  })
  AND?: ExperienceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarWhereInput], {
    nullable: true
  })
  OR?: ExperienceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarWhereInput], {
    nullable: true
  })
  NOT?: ExperienceScalarWhereInput[] | undefined;

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
}
