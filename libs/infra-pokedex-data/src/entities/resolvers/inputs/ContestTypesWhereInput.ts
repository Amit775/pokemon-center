import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsListRelationFilter } from "../inputs/BerryFlavorsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ContestTypesWhereInput", {})
export class ContestTypesWhereInput {
  @TypeGraphQL.Field(_type => [ContestTypesWhereInput], {
    nullable: true
  })
  AND?: ContestTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesWhereInput], {
    nullable: true
  })
  OR?: ContestTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesWhereInput], {
    nullable: true
  })
  NOT?: ContestTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsListRelationFilter, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsListRelationFilter | undefined;
}
