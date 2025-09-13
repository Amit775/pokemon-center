import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypesListRelationFilter } from "../inputs/TypesListRelationFilter";

@TypeGraphQL.InputType("MoveDamageClassesWhereInput", {})
export class MoveDamageClassesWhereInput {
  @TypeGraphQL.Field(_type => [MoveDamageClassesWhereInput], {
    nullable: true
  })
  AND?: MoveDamageClassesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesWhereInput], {
    nullable: true
  })
  OR?: MoveDamageClassesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesWhereInput], {
    nullable: true
  })
  NOT?: MoveDamageClassesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TypesListRelationFilter, {
    nullable: true
  })
  types?: TypesListRelationFilter | undefined;
}
