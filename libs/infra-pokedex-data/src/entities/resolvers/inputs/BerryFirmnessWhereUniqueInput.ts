import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessWhereInput } from "../inputs/BerryFirmnessWhereInput";
import { BerryListRelationFilter } from "../inputs/BerryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BerryFirmnessWhereUniqueInput", {})
export class BerryFirmnessWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessWhereInput], {
    nullable: true
  })
  AND?: BerryFirmnessWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessWhereInput], {
    nullable: true
  })
  OR?: BerryFirmnessWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessWhereInput], {
    nullable: true
  })
  NOT?: BerryFirmnessWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BerryListRelationFilter, {
    nullable: true
  })
  berries?: BerryListRelationFilter | undefined;
}
