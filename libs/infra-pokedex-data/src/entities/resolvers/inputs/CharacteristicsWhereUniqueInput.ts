import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsWhereInput } from "../inputs/CharacteristicsWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { StatsRelationFilter } from "../inputs/StatsRelationFilter";

@TypeGraphQL.InputType("CharacteristicsWhereUniqueInput", {})
export class CharacteristicsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
