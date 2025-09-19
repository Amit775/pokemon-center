import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorWhereInput } from "../inputs/BerryFlavorWhereInput";
import { BerryFlavorsBerry_idContest_type_idCompoundUniqueInput } from "../inputs/BerryFlavorsBerry_idContest_type_idCompoundUniqueInput";
import { BerryRelationFilter } from "../inputs/BerryRelationFilter";
import { ContestTypeRelationFilter } from "../inputs/ContestTypeRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TypeRelationFilter } from "../inputs/TypeRelationFilter";

@TypeGraphQL.InputType("BerryFlavorWhereUniqueInput", {})
export class BerryFlavorWhereUniqueInput {
  @TypeGraphQL.Field(_type => BerryFlavorsBerry_idContest_type_idCompoundUniqueInput, {
    nullable: true
  })
  berry_id_contest_type_id?: BerryFlavorsBerry_idContest_type_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereInput], {
    nullable: true
  })
  AND?: BerryFlavorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereInput], {
    nullable: true
  })
  OR?: BerryFlavorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereInput], {
    nullable: true
  })
  NOT?: BerryFlavorWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BerryRelationFilter, {
    nullable: true
  })
  berry?: BerryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContestTypeRelationFilter, {
    nullable: true
  })
  contestType?: ContestTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeRelationFilter, {
    nullable: true
  })
  type?: TypeRelationFilter | undefined;
}
