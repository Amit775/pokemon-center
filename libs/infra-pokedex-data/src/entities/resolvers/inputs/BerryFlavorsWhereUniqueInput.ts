import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesRelationFilter } from "../inputs/BerriesRelationFilter";
import { BerryFlavorsBerry_idContest_type_idCompoundUniqueInput } from "../inputs/BerryFlavorsBerry_idContest_type_idCompoundUniqueInput";
import { BerryFlavorsWhereInput } from "../inputs/BerryFlavorsWhereInput";
import { ContestTypesRelationFilter } from "../inputs/ContestTypesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TypesRelationFilter } from "../inputs/TypesRelationFilter";

@TypeGraphQL.InputType("BerryFlavorsWhereUniqueInput", {})
export class BerryFlavorsWhereUniqueInput {
  @TypeGraphQL.Field(_type => BerryFlavorsBerry_idContest_type_idCompoundUniqueInput, {
    nullable: true
  })
  berry_id_contest_type_id?: BerryFlavorsBerry_idContest_type_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereInput], {
    nullable: true
  })
  AND?: BerryFlavorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereInput], {
    nullable: true
  })
  OR?: BerryFlavorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereInput], {
    nullable: true
  })
  NOT?: BerryFlavorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  berry_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contest_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  flavor?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BerriesRelationFilter, {
    nullable: true
  })
  berry?: BerriesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContestTypesRelationFilter, {
    nullable: true
  })
  contestType?: ContestTypesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesRelationFilter, {
    nullable: true
  })
  type?: TypesRelationFilter | undefined;
}
