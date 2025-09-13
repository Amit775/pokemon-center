import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StatsRelationFilter } from "../inputs/StatsRelationFilter";

@TypeGraphQL.InputType("CharacteristicsWhereInput", {})
export class CharacteristicsWhereInput {
  @TypeGraphQL.Field(_type => [CharacteristicsWhereInput], {
    nullable: true
  })
  AND?: CharacteristicsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsWhereInput], {
    nullable: true
  })
  OR?: CharacteristicsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsWhereInput], {
    nullable: true
  })
  NOT?: CharacteristicsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  gene_mod_5?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StatsRelationFilter, {
    nullable: true
  })
  stat?: StatsRelationFilter | undefined;
}
