import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("CharacteristicsScalarWhereInput", {})
export class CharacteristicsScalarWhereInput {
  @TypeGraphQL.Field(_type => [CharacteristicsScalarWhereInput], {
    nullable: true
  })
  AND?: CharacteristicsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsScalarWhereInput], {
    nullable: true
  })
  OR?: CharacteristicsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsScalarWhereInput], {
    nullable: true
  })
  NOT?: CharacteristicsScalarWhereInput[] | undefined;

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
}
