import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("BerryFlavorsScalarWhereInput", {})
export class BerryFlavorsScalarWhereInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereInput], {
    nullable: true
  })
  AND?: BerryFlavorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereInput], {
    nullable: true
  })
  OR?: BerryFlavorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereInput], {
    nullable: true
  })
  NOT?: BerryFlavorsScalarWhereInput[] | undefined;

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
}
