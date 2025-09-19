import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("CharacteristicScalarWhereInput", {})
export class CharacteristicScalarWhereInput {
  @TypeGraphQL.Field(_type => [CharacteristicScalarWhereInput], {
    nullable: true
  })
  AND?: CharacteristicScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicScalarWhereInput], {
    nullable: true
  })
  OR?: CharacteristicScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicScalarWhereInput], {
    nullable: true
  })
  NOT?: CharacteristicScalarWhereInput[] | undefined;

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
